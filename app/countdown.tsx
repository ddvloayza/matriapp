"use client";

import { useEffect, useState } from "react";

const weddingDate = new Date("2026-11-14T15:30:00-05:00").getTime();

function getRemainingTime() {
  const diff = Math.max(0, weddingDate - Date.now());
  const totalSeconds = Math.floor(diff / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60
  };
}

const zeroTime = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export default function Countdown() {
  const [time, setTime] = useState(zeroTime);

  useEffect(() => {
    setTime(getRemainingTime());
    const interval = window.setInterval(() => setTime(getRemainingTime()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="countdownPanel" aria-label="Cuenta regresiva para la boda">
      <p className="sectionTitle">Falta poco</p>
      <div className="countdownGrid">
        <TimeBox value={time.days} label="Días" />
        <TimeBox value={time.hours} label="Horas" pad />
        <TimeBox value={time.minutes} label="Min" pad />
        <TimeBox value={time.seconds} label="Seg" pad />
      </div>
    </section>
  );
}

function TimeBox({
  value,
  label,
  pad = false
}: {
  value: number;
  label: string;
  pad?: boolean;
}) {
  return (
    <div className="timeBox">
      <strong>{pad ? String(value).padStart(2, "0") : value}</strong>
      <span>{label}</span>
    </div>
  );
}
