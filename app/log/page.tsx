import { useEffect, useState } from "react";

export default function LogPage() {
  const [log, setLog] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("still-in-log");
    if (stored) {
      setLog(JSON.parse(stored));
    }
  }, []);

  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <h1>Still In — Log</h1>
      {log.length === 0 && <p>No entries yet.</p>}
      <ul>
        {log.map((entry, i) => (
          <li key={i}>{entry}</li>
        ))}
      </ul>
    </main>
  );
}
