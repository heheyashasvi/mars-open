# Campus Dashboard (IIT Roorkee)

A unified web dashboard designed for IIT Roorkee students to access essential campus data from one central place. 

Live Demo: https://frontend-ten-theta-33.vercel.app

## Features
- **Library Catalog**: Search through digital books from Springer, Cambridge, etc.
- **Canteen Menus**: Browse menus and prices for Bhawan canteens.
- **Campus Events**: Stay updated about upcoming IITR events.
- **Academic Timetable**: Check schedules, profs, and room allocations.
- **AI Assistant**: A chat interface to quickly get answers about campus stuff.

## Tech Stack
- Frontend: Next.js 14, React, Tailwind CSS
- Backend: Node.js, Express (MCP pattern)
- AI: Claude / Anthropic API

## How to run locally

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend (MCP Servers)
Open separate terminals for each service (`academics`, `cafeteria`, `events`, `library`) inside the `mcp-servers/` folder:
```bash
cd mcp-servers/academics
npm install
npm start
```

## Built by
Yashasvi (24113147) - IIT Roorkee
Problem Statement 01
