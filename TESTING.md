# Website Test Plan

Run the browser cases on the live site after publishing: https://as5433-web.github.io/Portfolio/ . Use local preview during development as an additional check. The direct-local-opening case specifically checks the assignment's file-opening requirement.

All browser results below are **Not run**. Browser preview was unavailable in the agent session; these changes have not been pushed. Replace Not run with Pass or Fail only after executing a case, with the date, browser, observations, and any Lighthouse score. Record initial failures and retests separately rather than overwriting a failure.

| ID | Testing | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T1 | Home (index.html): All navigation links | On Home (index.html), open each of Home, About, Projects, Skills, and Contact; return to the starting page between links. | Each link opens the correct separate page; the active page alone is highlighted. | Not run |
| T2 | Home (index.html): Phone layout | Open Home (index.html) at 390 × 844 in both themes; scroll through all content. | Content is readable with no horizontal overflow, overlap, or clipped controls. | Not run |
| T3 | Home (index.html): Laptop layout | Open Home (index.html) at 1366 × 768 in both themes; inspect all content. | Consistent header, spacing, typography, and usable layouts. | Not run |
| T4 | Home (index.html): Keyboard navigation | On Home (index.html), use Tab, Shift+Tab, and Enter to use the skip link, every navigation link, and all controls. | Focus is visible and ordered; skip link reaches main; controls work without a mouse. | Not run |
| T5 | Home (index.html): Mobile menu | On Home (index.html) at phone width, open and close Menu; press Escape when open; reopen and choose a page. Then widen to laptop width. | Menu state is accurate; Escape returns focus; selected page loads; desktop links are visible. | Not run |
| T6 | Home (index.html): Theme setting | On Home (index.html), toggle Dark mode, visit another page, and reload; repeat with light mode. | Chosen theme and toggle state are retained when storage is available. | Not run |
| T7 | Home (index.html): Lighthouse accessibility | Run Chrome DevTools Lighthouse Accessibility on Home (index.html) and record the numeric score. | Accessibility score is at least 90; record and fix reported issues. | Not run |
| T8 | About (about.html): All navigation links | On About (about.html), open each of Home, About, Projects, Skills, and Contact; return to the starting page between links. | Each link opens the correct separate page; the active page alone is highlighted. | Not run |
| T9 | About (about.html): Phone layout | Open About (about.html) at 390 × 844 in both themes; scroll through all content. | Content is readable with no horizontal overflow, overlap, or clipped controls. | Not run |
| T10 | About (about.html): Laptop layout | Open About (about.html) at 1366 × 768 in both themes; inspect all content. | Consistent header, spacing, typography, and usable layouts. | Not run |
| T11 | About (about.html): Keyboard navigation | On About (about.html), use Tab, Shift+Tab, and Enter to use the skip link, every navigation link, and all controls. | Focus is visible and ordered; skip link reaches main; controls work without a mouse. | Not run |
| T12 | About (about.html): Mobile menu | On About (about.html) at phone width, open and close Menu; press Escape when open; reopen and choose a page. Then widen to laptop width. | Menu state is accurate; Escape returns focus; selected page loads; desktop links are visible. | Not run |
| T13 | About (about.html): Theme setting | On About (about.html), toggle Dark mode, visit another page, and reload; repeat with light mode. | Chosen theme and toggle state are retained when storage is available. | Not run |
| T14 | About (about.html): Lighthouse accessibility | Run Chrome DevTools Lighthouse Accessibility on About (about.html) and record the numeric score. | Accessibility score is at least 90; record and fix reported issues. | Not run |
| T15 | Projects (projects.html): All navigation links | On Projects (projects.html), open each of Home, About, Projects, Skills, and Contact; return to the starting page between links. | Each link opens the correct separate page; the active page alone is highlighted. | Not run |
| T16 | Projects (projects.html): Phone layout | Open Projects (projects.html) at 390 × 844 in both themes; scroll through all content. | Content is readable with no horizontal overflow, overlap, or clipped controls. | Not run |
| T17 | Projects (projects.html): Laptop layout | Open Projects (projects.html) at 1366 × 768 in both themes; inspect all content. | Consistent header, spacing, typography, and usable layouts. | Not run |
| T18 | Projects (projects.html): Keyboard navigation | On Projects (projects.html), use Tab, Shift+Tab, and Enter to use the skip link, every navigation link, and all controls. | Focus is visible and ordered; skip link reaches main; controls work without a mouse. | Not run |
| T19 | Projects (projects.html): Mobile menu | On Projects (projects.html) at phone width, open and close Menu; press Escape when open; reopen and choose a page. Then widen to laptop width. | Menu state is accurate; Escape returns focus; selected page loads; desktop links are visible. | Not run |
| T20 | Projects (projects.html): Theme setting | On Projects (projects.html), toggle Dark mode, visit another page, and reload; repeat with light mode. | Chosen theme and toggle state are retained when storage is available. | Not run |
| T21 | Projects (projects.html): Lighthouse accessibility | Run Chrome DevTools Lighthouse Accessibility on Projects (projects.html) and record the numeric score. | Accessibility score is at least 90; record and fix reported issues. | Not run |
| T22 | Skills (skills.html): All navigation links | On Skills (skills.html), open each of Home, About, Projects, Skills, and Contact; return to the starting page between links. | Each link opens the correct separate page; the active page alone is highlighted. | Not run |
| T23 | Skills (skills.html): Phone layout | Open Skills (skills.html) at 390 × 844 in both themes; scroll through all content. | Content is readable with no horizontal overflow, overlap, or clipped controls. | Not run |
| T24 | Skills (skills.html): Laptop layout | Open Skills (skills.html) at 1366 × 768 in both themes; inspect all content. | Consistent header, spacing, typography, and usable layouts. | Not run |
| T25 | Skills (skills.html): Keyboard navigation | On Skills (skills.html), use Tab, Shift+Tab, and Enter to use the skip link, every navigation link, and all controls. | Focus is visible and ordered; skip link reaches main; controls work without a mouse. | Not run |
| T26 | Skills (skills.html): Mobile menu | On Skills (skills.html) at phone width, open and close Menu; press Escape when open; reopen and choose a page. Then widen to laptop width. | Menu state is accurate; Escape returns focus; selected page loads; desktop links are visible. | Not run |
| T27 | Skills (skills.html): Theme setting | On Skills (skills.html), toggle Dark mode, visit another page, and reload; repeat with light mode. | Chosen theme and toggle state are retained when storage is available. | Not run |
| T28 | Skills (skills.html): Lighthouse accessibility | Run Chrome DevTools Lighthouse Accessibility on Skills (skills.html) and record the numeric score. | Accessibility score is at least 90; record and fix reported issues. | Not run |
| T29 | Contact (contact.html): All navigation links | On Contact (contact.html), open each of Home, About, Projects, Skills, and Contact; return to the starting page between links. | Each link opens the correct separate page; the active page alone is highlighted. | Not run |
| T30 | Contact (contact.html): Phone layout | Open Contact (contact.html) at 390 × 844 in both themes; scroll through all content. | Content is readable with no horizontal overflow, overlap, or clipped controls. | Not run |
| T31 | Contact (contact.html): Laptop layout | Open Contact (contact.html) at 1366 × 768 in both themes; inspect all content. | Consistent header, spacing, typography, and usable layouts. | Not run |
| T32 | Contact (contact.html): Keyboard navigation | On Contact (contact.html), use Tab, Shift+Tab, and Enter to use the skip link, every navigation link, and all controls. | Focus is visible and ordered; skip link reaches main; controls work without a mouse. | Not run |
| T33 | Contact (contact.html): Mobile menu | On Contact (contact.html) at phone width, open and close Menu; press Escape when open; reopen and choose a page. Then widen to laptop width. | Menu state is accurate; Escape returns focus; selected page loads; desktop links are visible. | Not run |
| T34 | Contact (contact.html): Theme setting | On Contact (contact.html), toggle Dark mode, visit another page, and reload; repeat with light mode. | Chosen theme and toggle state are retained when storage is available. | Not run |
| T35 | Contact (contact.html): Lighthouse accessibility | Run Chrome DevTools Lighthouse Accessibility on Contact (contact.html) and record the numeric score. | Accessibility score is at least 90; record and fix reported issues. | Not run |
| T36 | Home waveform | Watch two cycles on Home. | One pulse crosses left to right in about 1.6 seconds, repeating every 2 seconds. | Not run |
| T37 | Home speaker rhythm | Watch the amplifier on Home through two four-second loops. | Cones follow &#124; - - - &#124; - - &#124; - &#124; - - &#124; - - - at 240 BPM; cabinet stays still. | Not run |
| T38 | Reduced motion | Enable device/browser reduced motion; open Home and Projects. | Both illustrations are static; no Pause animations button is displayed. | Not run |
| T39 | Contact and privacy | On Contact, activate LinkedIn; inspect all page content and source for private contact details or mailto links. | LinkedIn opens the specified profile; no email address, mailto link, phone number, or home address is included. | Not run |
| T40 | Direct local opening | Double-click index.html, visit all five pages, and use theme/menu controls; repeat with browser storage blocked. | Pages/assets work without a server; unavailable storage causes no broken controls. | Not run |

## Local source and simulated checks (2026-10-29)

These checks passed, but do not substitute for browser or live-site results above:

- All 25 main navigation links point to the five separate HTML pages; each page marks the correct active link.
- Local asset references and fragment destinations resolve; each main page has one h1 and unique IDs.
- All five main pages load the shared stylesheet and script. Home retains 30 waveform bars; Projects retains two animated speaker cones and has three project entries.
- Twenty simulated shared-script scenarios cover all five pages at mobile/laptop modes with storage available/blocked, including persisted themes, menu closure with Escape, and pause/resume where present.

## Failure and retest log

No browser tests have been executed yet. When a case fails, append its ID, date, observed failure, fix, retest steps, and retest result here.

## Professional blue redesign checks (2026-10-29)

Local source checks passed: all 25 main navigation links, page and asset destinations, one h1 and unique IDs on each main page, no email or mailto links, three Projects entries, and retained waveform/speaker animation timing and motion controls. Eleven selected text/background pairs across both themes meet at least 4.5:1 contrast by calculation. This is not a Lighthouse result.

Browser preview was unavailable. All browser cases above remain Not run; phone/laptop layout, keyboard use, animation appearance, and live-site accessibility still require execution.

## Pink accent update

Ten selected pink text/background pairs across light/dark themes meet at least 4.5:1 contrast by calculation. All five main pages continue to use the shared stylesheet and exclude email links. Animation timing is unchanged. Browser results remain Not run; review the pink accents in both themes during the existing layout and accessibility cases.

## Animation control removal

Removed the visible pause buttons and unused pause-specific markup, CSS, and JavaScript at the user's request. Earlier pause/resume checks above describe the previous implementation. Device reduced-motion support remains; current browser cases are Not run.

## Expanded About page

Local checks passed for course-code matching against the supplied academic record, six course highlights, bachelor's/master's goal statements, working local links and assets, one h1, unique IDs, and exclusion of private identifiers, grades, and email addresses. No long homepage paragraphs are duplicated. Other page files and shared JavaScript were unchanged.

Rerun the About navigation, phone/laptop layout, keyboard, theme, and Lighthouse cases on the live site after publication. Browser results remain Not run.

## Report-based Projects page (2026-10-30)

Local checks passed: three project articles, one h1, unique IDs, valid page/image/fragment destinations, descriptive alt text and explicit dimensions for five images, and each asset under 500,000 bytes. Finished amplifier and calculator photos were visually inspected against report imagery. The rover image is labeled as a rendering. No original PDF reports or private contact details were added to the website. Other main pages and shared JavaScript were unchanged.

| ID | Testing | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T41 | Projects photo links | Open each of the six project images by mouse and by Tab/Enter. | A larger version of the correct image opens; focus remains visible before activation. | Not run |
| T42 | Projects photo layout | View Projects at phone and laptop sizes in both themes; scroll through all six images and captions. | Images retain their proportions, captions are readable, and there is no horizontal overflow. | Not run |

Browser preview was unavailable. Rerun the Projects navigation, layout, keyboard, theme, and Lighthouse cases on the live site after publication. Projects now uses static photos; the animated amplifier remains on Home.

## Report links and project shortcuts

At the user's request, the two lab reports are now public site assets in `reports/`; this supersedes earlier notes that the reports were excluded. Both copies match the supplied originals byte-for-byte, and local report/image/fragment links resolve.

| ID | Testing | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T43 | PDF report links | Activate the amplifier and calculator report links with mouse and Tab/Enter on the live site. | The correct original PDF opens in a new tab; link names announce the PDF and new tab. | Not run |
| T44 | Project shortcuts | On phone and laptop, use each top pink shortcut by mouse and keyboard. | Three prominent buttons fit the viewport and jump to the correct project heading; focus is visible. | Not run |

## Assembled rover photo

Added the supplied bench photo alongside the existing rendering, with distinct captions and descriptive alt text. The optimized JPEG is 163,961 bytes and was visually inspected. All local page/image/report links resolve. Browser layout and keyboard cases remain Not run.

## Build photos and schematics

Projects now shows one finished-build photo and one schematic each for the amplifier and calculator. Source pages were verified against the PDF page image references: amplifier page 51, calculator page 9. The amplifier schematic was rotated for readable orientation. Both schematic images were visually reviewed; all six displayed images are under 500,000 bytes, and local image/report links resolve. The Arduino kit retains its assembled photo and rendering. Browser results remain Not run.

## Employer-facing Skills page

Local checks passed: six capability cards, eight tool/experience rows with semantic table headers and caption, one h1, unique IDs, and working local/fragment links to the supporting projects. Private contact information, numerical proficiency ratings, and unsupported expert/certification claims are absent. Other main pages and shared JavaScript were unchanged.

Browser preview was unavailable. Rerun the Skills navigation, phone/laptop layout (including table wrapping), keyboard navigation, light/dark theme, and Lighthouse cases on the live site after publication. Browser cases remain Not run.

## Skills showcase revision

Skills now uses six capability bullet cards, three software/tool groups, six completed-coursework groups, and practical-strength lists. Local heading/ID, relative-link, and project/coursework fragment checks passed. The previous tools table has been replaced; inspect card/list wrapping in the existing Skills phone/laptop cases instead. Browser layout, keyboard, theme, and Lighthouse cases remain Not run.

## Decorative numbering removal

Removed section number badges, numbered eyebrow prefixes, and numbered toolkit labels across the HTML pages, including saved design previews. Local scans confirm those numbering patterns are gone and each page still has one h1. Course codes, technical values, and document references remain intact. Browser layout checks remain Not run.
