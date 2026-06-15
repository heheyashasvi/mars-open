"use client";

import { useState } from "react";
import ChatPanel from "@/components/dashboard/ChatPanel";
import LibraryWidget from "@/components/dashboard/LibraryWidget";
import CafeteriaWidget from "@/components/dashboard/CafeteriaWidget";
import EventsWidget from "@/components/dashboard/EventsWidget";
import AcademicsWidget from "@/components/dashboard/AcademicsWidget";
export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-slate-800 transition-colors duration-500">

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-indigo-100 px-8 py-4 flex flex-col sm:flex-row items-center justify-between shadow-sm">
        <div className="flex items-center gap-3 mb-4 sm:mb-0">
          <img src="/iitr logo.png" alt="IITR Logo" className="w-10 h-10 rounded-full shadow-sm" />
          <div>
            <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 tracking-tight">CampusAI</h1>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Unified Campus Intelligence</p>
          </div>
        </div>
        
        <div className="flex gap-1 bg-slate-100/80 border border-slate-200 p-1 rounded-xl shadow-inner">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ease-out ${
              activeTab === "dashboard"
                ? "bg-white text-indigo-700 shadow-md ring-1 ring-indigo-100"
                : "text-slate-500 hover:text-indigo-600 hover:bg-white/50"
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab("chat")}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ease-out ${
              activeTab === "chat"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                : "text-slate-500 hover:text-indigo-600 hover:bg-white/50"
            }`}
          >
            <span className="mr-2">✨</span> AI Assistant
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="p-6 md:p-10 animate-in fade-in duration-700 slide-in-from-bottom-4">
        {activeTab === "dashboard" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <LibraryWidget />
            <CafeteriaWidget />
            <EventsWidget />
            <AcademicsWidget />
          </div>
        ) : (
          <div className="max-w-4xl mx-auto drop-shadow-xl">
            <ChatPanel />
          </div>
        )}
      </div>

    </main>
  );
}