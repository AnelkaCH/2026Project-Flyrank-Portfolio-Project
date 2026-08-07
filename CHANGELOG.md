# Changelog

## [2026-08-07] v0.5 - Win95 retro redesign across all pages
### Added
- - `components/home/FeaturedWorkSlider.tsx` — Auto-advancing Win95 carousel (5 s interval, pauses on hover/focus) for the Featured Work section. Includes inset image viewport, filename-style title, one-line description, beveled "View Case Study" button, and inset dot navigation.
- Replaced the old `FeaturedPipeline.tsx` with the new `FeaturedWorkSlider.tsx`.

### Changed
- **`components/ui/Win95Window.tsx`** — Full redesign to authentic Win95 spec: 2 px outset bevel border (`#ffffff / #808080`), solid `#000080` navy title bar, monospace text, and sharp corners throughout. Added `className` prop for external sizing control. Window control buttons now use text characters (`_`, `□`, `x`) with outset bevel borders and an active press-down offset.
- **`components/home/CurrentStatus.tsx`** — Wrapped in `Win95Window` (`C:\STATUS.EXE`). Header row shows amber status dot + "PARTIALLY OPERATIONAL" label. Status rows rendered inside an inset screen panel with fixed Win95 colors: green `#008000`, amber `#b8860b`, navy `#000080`. Accepts `className` prop for grid height alignment.
- **`components/home/HeroImageWindow.tsx`** — Accepts `className` prop; image div uses `flex-1 min-h` for equal-height stretching in the hero grid.
- **`components/home/CtaWindow.tsx`** — Replaced modern rounded button/shadow styles with Win95 inset content panel and beveled outset CTA button.
- **`components/contact/ContactForm.tsx`** — Inputs and textarea restyled as authentic inset Win95 fields. Submit button now uses outset bevel with active press-down shift.
- **`components/case-study/CaseStudyWindow.tsx`** — Replaced custom gradient title bar with `Win95Window`. Tab strip uses outset bevel folder tabs; card content sits in an inset panel; project cards use outset bevel borders, inset image viewports, and Win95-style "View Case Study" buttons.
- **`components/case-study/CaseStudyBrowser.tsx`** — Same as above: migrated to `Win95Window` with folder-tab navigation and inset content panel. Monospace text throughout.
- **`components/ui/BrowserTabs.tsx`** — Migrated from custom gradient title bar to `Win95Window`. Folder tabs use the same outset bevel style; content area uses inset panel.
- **`app/about/page.tsx`** — Portrait image window replaced with `Win95Window` component. Section containers updated to `px-0 sm:px-6` for mobile edge-to-edge stretching.
- **`app/page.tsx`** — Layout restructured: Current Status moved into the hero grid (left column alongside the photo); Interactive Terminal moved to its own dark `bg-slate-900` contrast section below. Section max-widths unified. All Win95 window containers now use `px-0 sm:px-6` for edge-to-edge mobile stretch.
- **`app/case-studies/page.tsx`** and **`app/contact/page.tsx`** — Section padding changed to `px-0 sm:px-6` so Win95 windows stretch edge-to-edge on mobile.
- Removed internal `max-w-2xl` cap from `FeaturedWorkSlider.tsx`; width is now driven by the parent section.
- Changed the Terminal, Featured Work, and CTA sections in `app/page.tsx` to all use `max-w-2xl` so every standalone Win95 window is identically sized.
- Hero grid stays at `max-w-6xl` (two-column layout, not a standalone window).

### Fixed
- Width inconsistency across Win95 windows on the homepage — they were previously three different widths.

---

# [2026-08-07] v0.4.1 - Fixed a typo in homepage terminal

### Added
- (none)

### Changed
- (none)

### Fixed
- Removed 'projects' and 'experience' from terminal options.

## [2026-08-07] v0.4 - Added the home page
### Added
- `app/page.tsx` - Built the home page hero: intro heading, a Win95-style `codeavour_7.jpg` photo window, an interactive terminal, and a `meeting_request.txt` CTA window.
- `components/home/InteractiveTerminal.tsx` - Interactive terminal that types out command output (`whois`, `ethos`, `stack`, `projects`, `experience`, `contact`, `help`) selected via clickable chips.
- `components/home/HeroImageWindow.tsx` - Win95-style window showing the Codeavour 7 presentation photo.
- `components/home/CtaWindow.tsx` - Win95-style CTA window with the "Let's have a 15-minute conversation" button.
- `components/ui/Win95Window.tsx` - Reusable Win95 window shell (blue title bar, bevel window buttons).
- `app/contact/page.tsx` - Built the contact page with a Win95-style form that opens a pre-filled `mailto:` message.
- `components/contact/ContactForm.tsx` - Name / email / message form that composes the mailto link.
- `lib/caseStudies.ts` - Shared case-study data used by both the case-studies page and the home page.

### Changed
- Replaced the placeholder home page with the hero, interactive terminal, and CTA window layout.
- Replaced the placeholder contact page with the Win95 contact form and direct channels.
- The case-studies page now reads from `lib/caseStudies.ts` instead of inline data.
- Home hero image switched from the square portrait to the landscape Codeavour shot.
- Used inline SVGs for the GitHub and LinkedIn icons on the contact page because `lucide-react@1.x` doesn't export brand icons.

### Fixed
- (none)

## [2026-08-06] v0.3 - Added the about page
### Added
- More photos at `public/images/about/`
- New `BrowserTabs.tsx` and `TerminalWindow.tsx` for the About page which works differently to the ones on the Case Studies page.

### Changed
- Filled the about page with actual content.

### Fixed
- (none)

## [2026-08-06] v0.2.1 - Added the window look to the case studies landing page
### Added
- `CaseStudyWindow.tsx` specifically made for the landing page

### Changed
- Add the windows look to landing page, splitting it in two sections: `Personal Projects` and `Professional Experience`

### Fixed
- (none)

## [2026-08-06] v0.2 - Added things to the individual case studies
### Added
- `components/case-studies` filled with things to make certain ui work for the case studies pages, like the terminal and browser look.
- `parseCaseStudyMarkdown.ts` to parse the content from the markdown files to the pages.

### Changed
- Every case study has been updated with their contents.

### Fixed
- (none)

## [2026-08-05] v0.1.3 - Added images to Case Studies Landing Page
### Added
- `components/ui/FilmStrip.tsx` - Built a fil strip ui that shows pictures while moving from right to left.
- Imported some images into `public/images/`.
- Added images and film strip ui to Case Studies Landing Page.

### Changed
- (none)

### Fixed
- (none)

## [2026-08-05] v0.1.2 - Added footer
### Added
- `components/layout/Footer.tsx` - Built a responsive dark footer with GitHub, LinkedIn, and Email links, plus a copyright line.
- Imported the `Footer` component into `app/layout.tsx`.

### Changed
- Restyled the nav bar to match the footer: dark slate background, cyan `#06B6D4` hover accents, and removed the bottom border.
- Made the "Anelka" logo a static brand mark instead of a clickable link to the home page.

### Fixed
- (none)

## [2026-08-05] v0.1.1 - Added Navbar Responsiveness
### Added
- (none)

### Changed
- Made the nav bar responsive. Utilised Lucide React

### Fixed
- (none)

## [2026-08-05] v0.1 - The Initial Setup
### Added
- `app/about/`, `app/case-studies`, `app/contact` - I set up the pages for the website.
- `components/` - I need to make a nav bar, so I made this folder to store all the components needed for the website.

### Changed
- Removed the old fonts, and added `Space Mono` and `Inter`.
- Added my preferences on `global.css`

### Fixed
- (none)