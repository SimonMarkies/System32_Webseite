import { useState, useEffect } from "react";
import "./description.css"  

const releaseDate = new Date("2026-11-13").getTime();

function getTimeDifference() {
  const now = new Date().getTime();
  const distance = Math.max(releaseDate - now, 0);

  const pad = (n: any) => String(n).padStart(2, "0");

  return {
    days: pad(Math.floor(distance / (1000 * 60 * 60 * 24))),
    hours: pad(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
    minutes: pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
    seconds: pad(Math.floor((distance % (1000 * 60)) / 1000)),
  };
}

export default function ReleaseTimer() {
  const [time, setTime] = useState(getTimeDifference());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeDifference());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="releaseDate">
      <h2>Virus gets released in:</h2>
      <h1>{time.days}d {time.hours}h {time.minutes}m {time.seconds}s</h1>
    </div>
  );
}