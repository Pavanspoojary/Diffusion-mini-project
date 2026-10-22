# SMVITM Campus Hub — Diffusion Mini Project

A modern, real-time college notice board, events discovery platform, and institutional service directory designed for **Shri Madhwa Vadiraja Institute of Technology & Management (SMVITM)**.

Built with React and Vite, featuring Reddit-style department communities, a LinkedIn-style notice composer, X.com-style engagement mechanics, and QR-based attendance tracking.

---

## Key Highlights

- **Branch Communities (Reddit-style)**: Dedicated hubs for each academic department (`s/all`, `s/AI&DS`, `s/AIML`, `s/CS`, `s/EC`, `s/MECH`) with custom badges, member counts, community rules, and independent notice streams.
- **Notice Composer (LinkedIn-style)**: Role-gated post starter with target department pills, category classification, live character counter, image attachment preview, and draft workflow.
- **Feed & Engagement (X.com-style)**: Interactive post stream featuring verified department badges, formatted engagement metrics (K/M), reply, repost, like, bookmark, and native sharing.
- **Event Discovery & QR Attendance**:
  - **Internal Events**: Real-time QR attendance check-in for students with duplicate prevention.
  - **Coordinator Mode**: Live dynamic QR code generator with real-time attendee roster inspection.
  - **External Events**: Curated inter-college hackathons and paper presentation discovery.
- **Verified Websites & Resource Directory**: Live searchable portal catalog for ERP, VTU examinations, DELNET library databases, NSS volunteering, and Placement cell.
- **Role-Based Access Control**: Instant switching between Student, Faculty, Coordinator, and Administrator accounts for demonstration.
- **Mobile-First Ergonomics**: Slide-out navigation drawer, safe-area padded bottom navigation bar, floating action button, and touch-optimized layout.
- **Theme & Appearance Engine**: Dark (Lights Out), Dim, and Light color modes with 6 customizable campus accent palettes.

---

## Tech Stack

- **Frontend**: React 19, JavaScript (ESNext)
- **Tooling & Bundler**: Vite 8
- **Styling**: Modular CSS3 with Custom Design Tokens & Variables
- **Icons**: Hand-crafted inline SVG icon system
- **PWA**: Service Worker caching & Web App Manifest integration

---

## Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Pavanspoojary/Diffusion-mini-project.git
   cd Diffusion-mini-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:8080`.

4. Build for production:
   ```bash
   npm run build
   ```

---

## Project Structure

```
├── public/                 # Static assets, manifests, and SMVITM branding
│   ├── smvitm-logo.png     # Official SMVITM high-res seal
│   ├── manifest.webmanifest# Progressive Web App configuration
│   └── service-worker.js   # Offline service worker
├── src/
│   ├── components/         # Modular React components
│   │   ├── AnnouncementFeed.jsx # Main notices timeline & filter bar
│   │   ├── CommunityHeader.jsx  # Reddit-style branch hero banner
│   │   ├── EventsView.jsx       # QR attendance & event streams
│   │   ├── WebsitesView.jsx     # Institutional directory
│   │   ├── NotificationsView.jsx# Alert center & deadlines
│   │   ├── LeftSidebar.jsx      # Desktop primary navigation
│   │   ├── RightSidebar.jsx     # Widgets & community quick links
│   │   ├── MobileDrawer.jsx     # Slide-over account & role switcher
│   │   ├── ComposeModal.jsx     # Full-featured notice publishing modal
│   │   ├── LinkedInComposer.jsx # Post starter bar
│   │   ├── QRAttendanceModal.jsx# Scanner & QR generator
│   │   ├── DisplayModal.jsx     # Appearance customizer
│   │   └── Icons.jsx            # SVG icon catalog & CommunityAvatar
│   ├── data/
│   │   └── initialData.js  # Campus data, branches, roles, notices
│   ├── App.jsx             # Main application orchestrator
│   ├── index.css           # Global design system & responsive layout
│   └── main.jsx            # Vite entry point
├── index.html              # HTML shell & meta configuration
├── vite.config.js          # Vite build & dev server config
└── package.json            # Project manifest & scripts
```

---

## License

Private Project — Shri Madhwa Vadiraja Institute of Technology & Management.
