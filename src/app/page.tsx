"use client";

import { useState } from "react";
import VoiceComponent from "@/components/VoiceComponent";
import { PhoneIncoming, PhoneOff, Phone } from "lucide-react"; // using lucide icons

export default function Home() {
  const [callStatus, setCallStatus] = useState("idle"); // idle | incoming | inCall

  const handleAnswer = () => {
    setCallStatus("inCall");
  };

  const handleHangUp = () => {
    setCallStatus("idle");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden bg-black text-white">
      <div className="absolute -z-10 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-[100px] animate-pulse" />

      {callStatus === "idle" && (
        <div className="flex flex-col items-center space-y-4">
          <PhoneIncoming className="w-16 h-16 text-green-400 animate-bounce" />
          <h2 className="text-2xl font-semibold">Incoming Call...</h2>
          <div className="flex space-x-6 mt-4">
            <button
              onClick={handleAnswer}
              className="bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition"
            >
              <Phone className="w-6 h-6" />
            </button>
            <button
              onClick={handleHangUp}
              className="bg-red-500 p-4 rounded-full shadow-lg hover:bg-red-600 transition"
            >
              <PhoneOff className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {callStatus === "inCall" && (
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-semibold">Call in Progress</h2>
          <VoiceComponent />
          <button
            onClick={handleHangUp}
            className="bg-red-500 p-4 rounded-full shadow-lg hover:bg-red-600 transition mt-6"
          >
            <PhoneOff className="w-6 h-6" />
          </button>
        </div>
      )}

      {callStatus === "idle" && (
        <small className="text-xs text-gray-400 absolute bottom-10">
          Sarah by CodeX 
        </small>
      )}
    </main>
  );
}
