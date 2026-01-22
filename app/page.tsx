"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [mode, setMode] = useState<"Normal" | "Downshift">("Normal");
  const [lastAction, setLastAction] = useState("Yesterday");
  const [message, setMessage] = useState("You are still in.");

  const [habitName, setHabitName] = useState("");
  const [normalCommitment, setNormalCommitment] = useState("");
  const [minimumCommitment, setMinimumCommitment] = useState("");

useEffect(() => {
  const saved = localStorage.getItem("stillin-setup");

  if (!saved) {
    router.push("/setup");
    return;
  }

  const data = JSON.parse(saved);
  setHabitName(data.habitName);
  setNormalCommitment(data.normalCommitment);
  setMinimumCommitment(data.minimumCommitment);
}, [router]);


  function handleDidIt() {
    setLastAction("Just now");
    setMessage("Logged. You’re still in.");
  }

  function handleFeelsHard() {
    setMode("Downshift");
    setMessage("We adjusted the system. This counts.");
  }

  return (
<main
  style={{
    padding: "40px",
    fontFamily: "system-ui, sans-serif",
    maxWidth: "480px",
    lineHeight: "1.5",
  }}
>

 <h1 style={{ marginBottom: "8px" }}>STILL IN</h1>
<p style={{ marginTop: 0, marginBottom: "24px" }}>
  You’re not behind. You’re here.
</p>

<hr style={{ margin: "24px 0" }} />

<h2 style={{ marginBottom: "16px" }}>
  TODAY’S COMMITMENT
</h2>


<div style={{ marginBottom: "24px" }}>
  <p>
    <strong>
      {mode === "Normal"
        ? "🟢 Normal Mode"
        : "🟡 Downshift Mode (Survival)"}
    </strong>
  </p>

  <p style={{ margin: "8px 0" }}>
    {mode === "Normal"
      ? normalCommitment
      : minimumCommitment}
  </p>

  <p style={{ fontSize: "14px", color: "#555", marginTop: "4px" }}>
    ({minimumCommitment} still counts)
  </p>
</div>


<button
  onClick={handleDidIt}
  style={{ width: "100%", padding: "12px", marginBottom: "12px" }}
>
  ✓ I did it
</button>

<button
  onClick={handleFeelsHard}
  style={{ width: "100%", padding: "12px" }}
>
  This feels hard
</button>

<hr style={{ margin: "32px 0 16px" }} />

<h3 style={{ marginBottom: "8px" }}>STATUS</h3>

<p style={{ marginBottom: "4px" }}>
  <strong>{message}</strong>
</p>

<p style={{ fontSize: "14px", color: "#555", marginTop: 0 }}>
  Last action: {lastAction}
</p>
<p
  onClick={() => router.push("/setup")}
  style={{
    marginTop: "32px",
    fontSize: "14px",
    color: "#777",
    cursor: "pointer",
  }}
>
  Edit commitment
</p>

    </main>
  );
}


