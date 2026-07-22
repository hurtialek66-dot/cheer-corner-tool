// Prayer times for Prizren, Kosovo via Aladhan API
// Method 13 = Diyanet (Turkey) — commonly used in Kosovo

export type PrayerTiming = {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
};

export type PrayerData = {
  timings: PrayerTiming;
  date: {
    readable: string;
    hijri: string;
  };
};

export async function fetchPrizrenPrayerTimes(date = new Date()): Promise<PrayerData> {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  const url = `https://api.aladhan.com/v1/timingsByCity/${dd}-${mm}-${yyyy}?city=Prizren&country=Kosovo&method=13`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to load prayer times");
  const json = await res.json();
  const d = json.data;

  const clean = (t: string) => t.split(" ")[0]; // "05:12 (CEST)" -> "05:12"
  const timings: PrayerTiming = {
    Fajr: clean(d.timings.Fajr),
    Sunrise: clean(d.timings.Sunrise),
    Dhuhr: clean(d.timings.Dhuhr),
    Asr: clean(d.timings.Asr),
    Maghrib: clean(d.timings.Maghrib),
    Isha: clean(d.timings.Isha),
  };

  return {
    timings,
    date: {
      readable: d.date.readable,
      hijri: `${d.date.hijri.day} ${d.date.hijri.month.en} ${d.date.hijri.year} AH`,
    },
  };
}

// Add ~20 minutes for iqamah as a reasonable default
export function iqamahFor(adhan: string, offsetMin = 20): string {
  const [h, m] = adhan.split(":").map(Number);
  const total = h * 60 + m + offsetMin;
  const hh = Math.floor((total / 60) % 24);
  const mm = total % 60;
  return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
}
