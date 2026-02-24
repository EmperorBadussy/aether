<p align="center">
  <img src="https://img.shields.io/badge/AETHER-v1.0.0-7B2FBE?style=for-the-badge&labelColor=000000" alt="Version"/>
  <img src="https://img.shields.io/badge/Electron-33-9D4EDD?style=for-the-badge&logo=electron&logoColor=EED4FF&labelColor=000000" alt="Electron"/>
  <img src="https://img.shields.io/badge/Platform-Windows-B76EFF?style=for-the-badge&logo=windows&logoColor=EED4FF&labelColor=000000" alt="Platform"/>
  <img src="https://img.shields.io/badge/License-MIT-D4A0FF?style=for-the-badge&labelColor=000000" alt="License"/>
</p>

<h1 align="center">
  <br/>
  <code>[ AETHER ]</code>
  <br/>
  <sub>Audio Engine for Total Harmonic Experience & Rendering</sub>
  <br/>
</h1>

<p align="center">
  <em>Not a music player — an experience.</em>
</p>

<p align="center">
  <strong>OLED-black. Tron-purple. 13 real-time generative visualizers. Zero compromise.</strong>
</p>

---

<br/>

## `> WHAT IS THIS`

AETHER is a desktop music player built from scratch for people who think Spotify's UI peaked in 2014 and everything since has been a lateral move into beige. It connects to your self-hosted **Navidrome/Subsonic** server, streams your own library, and wraps it in an interface designed for OLED screens with a strict monochromatic purple palette on true black.

Every pixel is intentional. Every animation is buttery. Every visualizer is a canvas-rendered generative art piece that reacts to your music in real time.

<br/>

## `> VISUALIZERS`

13 hand-crafted scenes. All canvas 2D. All 60fps. All beat-reactive.

| # | Scene | Description |
|---|-------|-------------|
| 0 | **Fractal Flame** | Iterative flame algorithm with color-mapped attractors |
| 1 | **Void Pulse** | Concentric rings expanding from center with side particles |
| 2 | **Tron Grid** | Infinite perspective grid with planet, stars, and bass shockwaves |
| 3 | **Particle Field** | Thousands of particles in slow 3D orbit |
| 4 | **Waveform Bars** | Circular frequency bars with trail effects |
| 5 | **Plasma Warp** | Dark undulating plasma fields |
| 6 | **Neural Web** | Connected node network pulsing with audio |
| 7 | **Aurora Borealis** | Northern lights curtains with subtle stars |
| 8 | **DNA Helix** | Double-strand helix with cross-links, 3D camera orbit |
| 9 | **Cosmic Mandala** | Sacred geometry patterns radiating from center |
| 10 | **Electric Sheep** | Video-based fractal flame playback |
| 11 | **Bio-Genesis** | Organic organisms with membranes, mitochondria, flagella |
| 12 | **Command Deck** | UFO HUD dashboard — radar, oscilloscope, frequency bars |

Auto-rotate cycles through scenes, or pin your favorite. Every scene has unique beat detection behavior and glow effects that bleed into the UI panel borders.

<br/>

## `> FEATURES`

```
 AUDIO
  ├─ Gapless playback (crossfade, dual audio element strategy)
  ├─ Waveform seek bar (SoundCloud-style, full-width)
  ├─ 10-band parametric EQ (Web Audio API BiquadFilters)
  ├─ Beat detection (FFT analysis, band extraction)
  ├─ Format support: FLAC, MP3, OGG, AAC, WAV, OPUS
  └─ Volume control with mute toggle

 LIBRARY
  ├─ Navidrome/Subsonic API integration
  ├─ Albums, Artists, Playlists, Search
  ├─ 100k+ track support (paginated loading)
  ├─ Smart queue management
  ├─ Shuffle (no-repeat algorithm)
  └─ Context menus on tracks

 INTERFACE
  ├─ OLED-optimized (true #000000 black)
  ├─ Monochromatic purple palette (12 shades)
  ├─ Glassmorphism overlays
  ├─ Collapsible sidebar
  ├─ Horizontal / Vertical layout modes
  ├─ Navigation history with back button
  ├─ Full keyboard shortcut system
  └─ Custom ultra-thin scrollbars

 TECH
  ├─ Electron 33 (frameless, no titlebar)
  ├─ Single-file renderer (player.html — ~5700 lines)
  ├─ Canvas 2D visualizers (no Three.js dependency)
  ├─ Web Audio API (AnalyserNode, FFT 2048)
  ├─ System tray with minimize-to-tray
  ├─ Settings persisted to localStorage
  └─ F12 DevTools toggle
```

<br/>

## `> TECH STACK`

| Layer | Technology |
|-------|-----------|
| Runtime | Electron 33 |
| Renderer | Vanilla HTML/CSS/JS (single file) |
| Audio | Web Audio API (AudioContext, AnalyserNode, BiquadFilter) |
| Graphics | Canvas 2D (requestAnimationFrame) |
| Backend | Navidrome (Subsonic API v1.16.1) |
| Auth | MD5 token authentication (salt + password hash) |
| Build | electron-builder (NSIS installer) |
| State | localStorage (settings, preferences) |

<br/>

## `> ARCHITECTURE`

```
 AETHER/
  ├── main.js          # Electron main process — window, tray, IPC
  ├── preload.js       # Context bridge — safe IPC + filesystem access
  ├── player.html      # THE APP — 5700+ lines of UI, audio, visualizers
  ├── package.json     # Electron + builder config
  ├── icon.ico         # App icon (purple on black)
  ├── Launch.vbs       # Silent launcher (no console window)
  └── .gitignore       # Security-first exclusions
```

### Audio Pipeline
```
  AudioElement
       │
  MediaElementSource
       │
  GainNode (volume)
       │
  BiquadFilters ×10 (parametric EQ)
       │
  AnalyserNode (FFT 2048)
       │
  AudioContext.destination
       │
  ╔═══════════════════════╗
  ║  Frequency Bands      ║
  ║  ├─ Sub    (20-60Hz)  ║
  ║  ├─ Bass   (60-250Hz) ║
  ║  ├─ Mid    (250-2kHz) ║
  ║  ├─ High   (2k-8kHz)  ║
  ║  └─ Energy (overall)  ║
  ╚═══════════════════════╝
       │
  Beat Detection → Visualizer Reactivity
```

<br/>

## `> DESIGN SYSTEM`

AETHER follows a strict OLED Tron Purple design language:

```css
/* Backgrounds — true black, no cheating */
--bg-void:      #000000
--bg-surface:   #09090F
--bg-raised:    #0F0F1A

/* Purple scale — single hue, 8 stops */
--purple-dim:    #362050
--purple-muted:  #6B42A0
--purple-core:   #7B2FBE
--purple-bright: #9D4EDD
--purple-vivid:  #B76EFF
--purple-hot:    #D4A0FF
--purple-white:  #EED4FF

/* NO WHITE ANYWHERE — all "white" text is purple-white (#EED4FF) */
/* All borders: 1px purple-dim with glow on hover */
/* All transitions: minimum 150ms */
/* Scrollbars: 4px ultra-thin, purple-muted on void */
```

Fonts: **Orbitron** (display) / **Rajdhani** (body) / **JetBrains Mono** (technical)

<br/>

## `> QUICK START`

### Prerequisites
- [Node.js](https://nodejs.org/) 18+
- [Navidrome](https://www.navidrome.org/) running on your network
- Music library configured in Navidrome

### Install & Run
```bash
git clone https://github.com/EmperorBadussy/aether.git
cd aether
npm install
npm start
```

### Configure
1. Launch AETHER
2. Open Settings (gear icon in sidebar)
3. Enter your Navidrome server URL, username, and password
4. Click APPLY — your library loads instantly

### Build Installer
```bash
npm run dist
```
Outputs to `dist/` — NSIS installer for Windows x64.

<br/>

## `> KEYBOARD SHORTCUTS`

| Key | Action |
|-----|--------|
| `Space` | Play / Pause |
| `Ctrl + Right` | Next Track |
| `Ctrl + Left` | Previous Track |
| `Ctrl + Up` | Volume Up |
| `Ctrl + Down` | Volume Down |
| `M` | Mute Toggle |
| `S` | Shuffle Toggle |
| `R` | Repeat Toggle |
| `V` | Cycle Visualizer |
| `Escape` | Close Overlays |
| `F12` | Toggle DevTools |

<br/>

## `> ROADMAP`

- [ ] macOS & Linux builds
- [ ] Android APK wrapper (vertical-optimized layout ready)
- [ ] MPRIS / Windows media session integration
- [ ] Media key support (play/pause/next/prev)
- [ ] Auto-updater
- [ ] Virtual scrolling for 100k+ track lists
- [ ] Lyrics integration
- [ ] Scrobbling (Last.fm / ListenBrainz)
- [ ] Plugin system for custom visualizers

<br/>

## `> LICENSE`

MIT License. Do whatever you want. Credit appreciated but not required.

<br/>

---

<p align="center">
  <sub>Built for OLED. Engineered for audiophiles. Designed from 2077.</sub>
</p>

<p align="center">
  <code>[ AETHER v1.0.0 ]</code>
</p>
