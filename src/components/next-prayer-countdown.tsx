import { useEffect, useState } from "react";
import type { PrayerTiming } from "@/lib/prayer-times";

const ORDER: { key: keyof PrayerTiming; label: string }[] = [
  { key: "Fajr", label: "Sabah" },
  { key: "Sunrise", label: "Izlazak sunca" },
  { key: "Dhuhr", label: "Podne" },
  { key: "Asr", label: "Ikindija" },
  { key: "Maghrib", label: "Akšam" },
  { key: "Isha", label: "Jacija" },
];

function minutesOf(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function pad(n: number) {
  return String(Math.floor(n)).padStart(2, "0");
}

export function NextPrayerCountdown({ timings }: { timings: PrayerTiming }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) {
    return (
      <div className="rounded-2xl border border-border/60 bg-card p-6 text-sm text-muted-foreground">
        Učitavanje…
      </div>
    );
  }

  const nowMin = now.getHours() * 60 + now.getMinutes() + now.getSeconds() / 60;
  const list = ORDER.map((o) => ({ ...o, min: minutesOf(timings[o.key]), time: timings[o.key] }));
  let next = list.find((p) => p.min > nowMin);
  let diff: number;
  if (next) {
    diff = next.min - nowMin;
  } else {
    next = list[0];
    diff = 1440 - nowMin + next.min;
  }
  const hours = Math.floor(diff / 60);
  const mins = Math.floor(diff % 60);
  const secs = Math.floor((diff * 60) % 60);

  return (
    <div className="rounded-2xl border border-border/60 bg-card p-6 md:p-8 shadow-[var(--shadow-soft)]">
      <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]">Sljedeći namaz</p>
      <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="font-display text-4xl md:text-5xl text-primary">{next.label}</div>
          <div className="mt-1 text-lg tabular-nums text-muted-foreground">u {next.time}</div>
        </div>
        <div className="text-right">
          <div className="font-semibold tabular-nums text-4xl md:text-5xl">
            {pad(hours)}:{pad(mins)}:{pad(secs)}
          </div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
            sati · minuta · sekundi
          </div>
        </div>
      </div>
    </div>
  );
}
