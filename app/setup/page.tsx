"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SetupPage() {
  const router = useRouter();

  const [habitName, setHabitName] = useState("");
  const [normalCommitment, setNormalCommitment] = useState("");
  const [minimumCommitment, setMinimumCommitment] = useState("");

  function handleStart() {
    if (!habitName || !normalCommitment || !minimumCommitment) {
      return;
    }

    const setupData = {
      habitName,
      normalCommitment,
      minimumCommitment,
    };

    localStorage.setItem("stillin-setup", JSON.stringify(setupData));

    router.push("/");
  }

  return (
    <main
      style={{
        padding: "40px",
        fontFamily: "system-ui, sans-serif",
        maxWidth: "480px",
      }}
    >
      <h1>STILL IN</h1>

      <p style={{ marginTop: "24px" }}>
        What are you staying in?
      </p>

      <input
        type="text"
        placeholder="Walking"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          marginBottom: "24px",
        }}
      />

      <p>What normally counts?</p>

      <input
        type="text"
        placeholder="Walk for 20 minutes"
        value={normalCommitment}
        onChange={(e) => setNormalCommitment(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          marginBottom: "24px",
        }}
      />

      <p>What’s the minimum that still counts?</p>

      <input
        type="text"
        placeholder="Put on shoes + walk 3 minutes"
        value={minimumCommitment}
        onChange={(e) => setMinimumCommitment(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          marginBottom: "32px",
        }}
      />

      <button
        onClick={handleStart}
        style={{
          width: "100%",
          padding: "14px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Start staying in
      </button>
    </main>
  );
}
