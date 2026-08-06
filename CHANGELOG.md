# Changelog

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