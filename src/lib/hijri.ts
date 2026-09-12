// Tabularni (Kuvajtski) algoritam za pretvaranje gregorijanskog u hidžretski datum.

export const HIJRI_MONTHS = [
  "Muharrem",
  "Safer",
  "Rebiul-evvel",
  "Rebiul-ahir",
  "Džumadel-ula",
  "Džumadel-uhra",
  "Redžeb",
  "Šaban",
  "Ramazan",
  "Ševval",
  "Zul-ka'de",
  "Zul-hidždže",
];

export const MONTHS_SR = [
  "januar", "februar", "mart", "april", "maj", "juni",
  "juli", "august", "septembar", "oktobar", "novembar", "decembar",
];

export type HijriDate = { day: number; month: number; year: number };

function gregorianToJD(year: number, month: number, day: number): number {
  const a = Math.floor((month - 14) / 12);
  return (
    Math.floor((1461 * (year + 4800 + a)) / 4) +
    Math.floor((367 * (month - 2 - 12 * a)) / 12) -
    Math.floor((3 * Math.floor((year + 4900 + a) / 100)) / 4) +
    day -
    32075
  );
}

export function toHijri(date: Date): HijriDate {
  const jd = gregorianToJD(date.getFullYear(), date.getMonth() + 1, date.getDate());
  let l = jd - 1948440 + 10632;
  const n = Math.floor((l - 1) / 10631);
  l = l - 10631 * n + 354;
  const j =
    Math.floor((10985 - l) / 5316) * Math.floor((50 * l) / 17719) +
    Math.floor(l / 5670) * Math.floor((43 * l) / 15238);
  l =
    l -
    Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) -
    Math.floor(j / 16) * Math.floor((15238 * j) / 43) +
    29;
  const month = Math.floor((24 * l) / 709);
  const day = l - Math.floor((709 * month) / 24);
  const year = 30 * n + j - 30;
  return { day, month, year };
}

export function hijriToGregorian(year: number, month: number, day: number): Date {
  const jd =
    Math.floor((11 * year + 3) / 30) +
    354 * year +
    30 * month -
    Math.floor((month - 1) / 2) +
    day +
    1948440 -
    385;
  let l = jd + 68569;
  const n = Math.floor((4 * l) / 146097);
  l = l - Math.floor((146097 * n + 3) / 4);
  const i = Math.floor((4000 * (l + 1)) / 1461001);
  l = l - Math.floor((1461 * i) / 4) + 31;
  const j = Math.floor((80 * l) / 2447);
  const d = l - Math.floor((2447 * j) / 80);
  l = Math.floor(j / 11);
  const m = j + 2 - 12 * l;
  const y = 100 * (n - 49) + i + l;
  return new Date(y, m - 1, d);
}

export function formatHijri(h: HijriDate): string {
  return `${h.day}. ${HIJRI_MONTHS[h.month - 1]} ${h.year}. h.`;
}

export function formatGregorian(d: Date): string {
  return `${d.getDate()}. ${MONTHS_SR[d.getMonth()]} ${d.getFullYear()}.`;
}

type HolidayDef = { month: number; day: number; name: string; note: string };

const HOLIDAYS: HolidayDef[] = [
  { month: 1, day: 1, name: "Nova hidžretska godina", note: "Početak islamske godine" },
  { month: 1, day: 10, name: "Dan Ašure", note: "Preporučen post" },
  { month: 3, day: 12, name: "Mevlud", note: "Rođenje Poslanika a.s." },
  { month: 7, day: 27, name: "Lejletul-Mi'radž", note: "Noć uzdignuća" },
  { month: 8, day: 15, name: "Lejletul-berat", note: "Noć oprosta" },
  { month: 9, day: 1, name: "Početak Ramazana", note: "Prvi dan posta" },
  { month: 9, day: 27, name: "Lejletul-kadr", note: "Noć sudbine" },
  { month: 10, day: 1, name: "Ramazanski bajram", note: "Tri dana bajrama" },
  { month: 12, day: 9, name: "Dan Arefata", note: "Post za one koji nisu na hadždžu" },
  { month: 12, day: 10, name: "Kurban-bajram", note: "Četiri dana bajrama" },
];

export type Holiday = {
  name: string;
  note: string;
  hijri: string;
  gregorian: Date;
  gregorianLabel: string;
};

/** Praznici za narednih 12 mjeseci, sortirani po datumu. */
export function upcomingHolidays(from = new Date()): Holiday[] {
  const h = toHijri(from);
  const list: Holiday[] = [];
  for (const y of [h.year, h.year + 1]) {
    for (const def of HOLIDAYS) {
      const g = hijriToGregorian(y, def.month, def.day);
      list.push({
        name: def.name,
        note: def.note,
        hijri: `${def.day}. ${HIJRI_MONTHS[def.month - 1]} ${y}.`,
        gregorian: g,
        gregorianLabel: formatGregorian(g),
      });
    }
  }
  const start = new Date(from.getFullYear(), from.getMonth(), from.getDate()).getTime();
  return list
    .filter((x) => x.gregorian.getTime() >= start)
    .sort((a, b) => a.gregorian.getTime() - b.gregorian.getTime())
    .slice(0, 12);
}

export function daysUntil(date: Date, from = new Date()): number {
  const a = new Date(from.getFullYear(), from.getMonth(), from.getDate()).getTime();
  const b = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  return Math.round((b - a) / 86400000);
}
