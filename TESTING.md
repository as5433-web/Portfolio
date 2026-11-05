# Website Test Plan and Results

Live site: [Andrew Soleiman Portfolio](https://as5433-web.github.io/Portfolio/)

## Latest execution — November 5, 2026

- Deployed version checked: `32529835128acc03c3ce6fd7da3e6980f7c4b52d`.
- Live HTTP/source checks: **67 Pass, 0 Fail**, using 20 GET/HEAD requests.
- Evidence: [live HTTP results](testing/live-http-2026-11-05.json), including URLs, expected results, actual results, method, and UTC completion time.
- Browser/manual cases: **42 Pass, 0 Fail, 2 Not run or partially reported**. Results are user-reported live testing. Keyboard navigation, mobile-menu behavior, theme persistence, and reduced motion were subsequently confirmed. Exact device dimensions were not supplied.

The HTTP checks confirm availability, correct navigation hrefs and destinations, active-page attributes, matching deployed HTML/CSS/JavaScript, valid internal fragments, nonempty image alt text, image sizes below 500,000 bytes, and PDF content types/file lengths. They do not execute browser interactions or verify rendered appearance. External LinkedIn/catalog destinations were not tested by clicking them.

Browser automation had no connected browser; attempting to open Chrome returned `Browser is not available: chrome`. A remote Lighthouse request through PageSpeed Insights returned **HTTP 429 Too Many Requests**, with no score. This is an audit-service limitation, not a measured website failure. The user subsequently reported desktop Lighthouse results for all five pages and supplied mobile screenshots for Projects and Skills (see below). The user subsequently confirmed successful live laptop/phone usage, links, pictures, animations, and both themes. Remaining detailed checks are identified in the table.

## User-provided Lighthouse results

Recorded November 5, 2026. Tool: Chrome DevTools Lighthouse, Navigation (default) mode. Categories: Performance, Accessibility, Best Practices, and SEO. Agentic browsing was not selected. Projects mobile JSON identifies Lighthouse 13.5.0; versions for the other runs were not supplied.

### Desktop

The user reports 100 in all categories on every page. The initial Home result is also supported by the earlier settings/results screenshots. The desktop results for the other four pages are user-reported, rather than independently observed by the agent.

| Page | Performance | Accessibility | Best Practices | SEO | Evidence |
| --- | --- | --- | --- | --- | --- |
| Home | 100 | 100 | 100 | 100 | User report and initial screenshots; initial screenshots did not show the URL |
| About | 100 | 100 | 100 | 100 | User report |
| Projects | 100 | 100 | 100 | 100 | User report |
| Skills | 100 | 100 | 100 | 100 | User report |
| Contact | 100 | 100 | 100 | 100 | User report |

### Mobile

The supplied screenshots show Mobile and Navigation selected and display the live URLs for Projects and Skills. The Projects mobile JSON was subsequently supplied. The user also reports a Skills mobile retest with 100 in every category.

| Page | Performance | Accessibility | Best Practices | SEO | Evidence |
| --- | --- | --- | --- | --- | --- |
| Projects (initial) | 89 | 100 | 100 | 100 | Settings: Screenshot 2026-11-05 155913.png; results: Screenshot 2026-11-05 155906.png |
| Projects (retest) | 99 | 100 | 100 | 100 | mobile_test2_Projects JSON; 2026-11-05T21:13:56.176Z |
| Skills (initial) | 90 | 100 | 100 | 100 | Settings: Screenshot 2026-11-05 155944.png; results: Screenshot 2026-11-05 155935.png |
| Skills (retest) | 100 | 100 | 100 | 100 | User-reported November 5, 2026; exact run time not supplied |

The screenshots remain outside the public repository; only the relevant scores/settings are recorded here. Structured results: [Lighthouse results](testing/lighthouse-results-2026-11-05.json).

T7, T14, T21, T28, and T35 pass the assignment's Accessibility target of at least 90. Mobile Performance 89/90 is a separate category and is not an Accessibility failure. Projects mobile diagnostics: cumulative layout shift 0.203, largest contentful paint 2.3 seconds, and total blocking time 10 ms. Lighthouse flags main-content movement and estimates 681 KiB of image-delivery savings. The amplifier photo is associated with a sizing warning even though its HTML already supplies width and height; the root cause has not been verified in a rendered browser. See [Projects diagnostics](testing/projects-mobile-diagnostics-2026-11-05.json). No website optimization has been applied. Skills retested at 100 in all categories by user report. These audits do not replace manual phone/laptop layout, keyboard, theme, or mobile-menu checks.

## Live HTTP/source results

Method: PowerShell `Invoke-WebRequest` GET/HEAD against the public GitHub Pages URLs; inspect the returned source and headers. Deployed-content comparisons normalize line endings and trailing whitespace only. Navigation checks verify each href and HTTP destination; they do not simulate clicks.

| ID | Testing | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| H01 | Site root | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/) | HTTP 200 and Home title | Pass — HTTP 200 |
| H02 | index.html availability | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/index.html) | HTTP 200 and HTML | Pass — HTTP 200; text/html; charset=utf-8 |
| H03 | index.html deployed version | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/index.html) | Live HTML matches local reviewed HTML after newline normalization | Pass — Content matches=True |
| H04 | index.html semantic source | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/index.html) | One h1/main; unique IDs; English language; nonempty title | Pass — h1=1; main=1; unique=True |
| H05 | index.html email privacy | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/index.html) | No email address or mailto link in live HTML | Pass — Email pattern found=False |
| H06 | about.html availability | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/about.html) | HTTP 200 and HTML | Pass — HTTP 200; text/html; charset=utf-8 |
| H07 | about.html deployed version | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/about.html) | Live HTML matches local reviewed HTML after newline normalization | Pass — Content matches=True |
| H08 | about.html semantic source | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/about.html) | One h1/main; unique IDs; English language; nonempty title | Pass — h1=1; main=1; unique=True |
| H09 | about.html email privacy | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/about.html) | No email address or mailto link in live HTML | Pass — Email pattern found=False |
| H10 | projects.html availability | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/projects.html) | HTTP 200 and HTML | Pass — HTTP 200; text/html; charset=utf-8 |
| H11 | projects.html deployed version | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/projects.html) | Live HTML matches local reviewed HTML after newline normalization | Pass — Content matches=True |
| H12 | projects.html semantic source | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/projects.html) | One h1/main; unique IDs; English language; nonempty title | Pass — h1=1; main=1; unique=True |
| H13 | projects.html email privacy | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/projects.html) | No email address or mailto link in live HTML | Pass — Email pattern found=False |
| H14 | skills.html availability | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/skills.html) | HTTP 200 and HTML | Pass — HTTP 200; text/html; charset=utf-8 |
| H15 | skills.html deployed version | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/skills.html) | Live HTML matches local reviewed HTML after newline normalization | Pass — Content matches=True |
| H16 | skills.html semantic source | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/skills.html) | One h1/main; unique IDs; English language; nonempty title | Pass — h1=1; main=1; unique=True |
| H17 | skills.html email privacy | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/skills.html) | No email address or mailto link in live HTML | Pass — Email pattern found=False |
| H18 | contact.html availability | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/contact.html) | HTTP 200 and HTML | Pass — HTTP 200; text/html; charset=utf-8 |
| H19 | contact.html deployed version | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/contact.html) | Live HTML matches local reviewed HTML after newline normalization | Pass — Content matches=True |
| H20 | contact.html semantic source | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/contact.html) | One h1/main; unique IDs; English language; nonempty title | Pass — h1=1; main=1; unique=True |
| H21 | contact.html email privacy | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/contact.html) | No email address or mailto link in live HTML | Pass — Email pattern found=False |
| H22 | index.html active navigation source | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/index.html) | Five links; aria-current only on current page | Pass — Links=5; active correct=True |
| H23 | index.html -> index.html HTTP link | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/index.html) | Relative navigation href exists and destination returns 200 | Pass — href=True; HTTP 200 |
| H24 | index.html -> about.html HTTP link | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/about.html) | Relative navigation href exists and destination returns 200 | Pass — href=True; HTTP 200 |
| H25 | index.html -> projects.html HTTP link | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/projects.html) | Relative navigation href exists and destination returns 200 | Pass — href=True; HTTP 200 |
| H26 | index.html -> skills.html HTTP link | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/skills.html) | Relative navigation href exists and destination returns 200 | Pass — href=True; HTTP 200 |
| H27 | index.html -> contact.html HTTP link | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/contact.html) | Relative navigation href exists and destination returns 200 | Pass — href=True; HTTP 200 |
| H28 | index.html internal references | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/index.html) | All relative files available and HTML fragments exist | Pass — All resolved |
| H29 | about.html active navigation source | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/about.html) | Five links; aria-current only on current page | Pass — Links=5; active correct=True |
| H30 | about.html -> index.html HTTP link | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/index.html) | Relative navigation href exists and destination returns 200 | Pass — href=True; HTTP 200 |
| H31 | about.html -> about.html HTTP link | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/about.html) | Relative navigation href exists and destination returns 200 | Pass — href=True; HTTP 200 |
| H32 | about.html -> projects.html HTTP link | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/projects.html) | Relative navigation href exists and destination returns 200 | Pass — href=True; HTTP 200 |
| H33 | about.html -> skills.html HTTP link | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/skills.html) | Relative navigation href exists and destination returns 200 | Pass — href=True; HTTP 200 |
| H34 | about.html -> contact.html HTTP link | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/contact.html) | Relative navigation href exists and destination returns 200 | Pass — href=True; HTTP 200 |
| H35 | about.html internal references | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/about.html) | All relative files available and HTML fragments exist | Pass — All resolved |
| H36 | projects.html active navigation source | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/projects.html) | Five links; aria-current only on current page | Pass — Links=5; active correct=True |
| H37 | projects.html -> index.html HTTP link | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/index.html) | Relative navigation href exists and destination returns 200 | Pass — href=True; HTTP 200 |
| H38 | projects.html -> about.html HTTP link | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/about.html) | Relative navigation href exists and destination returns 200 | Pass — href=True; HTTP 200 |
| H39 | projects.html -> projects.html HTTP link | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/projects.html) | Relative navigation href exists and destination returns 200 | Pass — href=True; HTTP 200 |
| H40 | projects.html -> skills.html HTTP link | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/skills.html) | Relative navigation href exists and destination returns 200 | Pass — href=True; HTTP 200 |
| H41 | projects.html -> contact.html HTTP link | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/contact.html) | Relative navigation href exists and destination returns 200 | Pass — href=True; HTTP 200 |
| H42 | projects.html internal references | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/projects.html) | All relative files available and HTML fragments exist | Pass — All resolved |
| H43 | skills.html active navigation source | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/skills.html) | Five links; aria-current only on current page | Pass — Links=5; active correct=True |
| H44 | skills.html -> index.html HTTP link | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/index.html) | Relative navigation href exists and destination returns 200 | Pass — href=True; HTTP 200 |
| H45 | skills.html -> about.html HTTP link | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/about.html) | Relative navigation href exists and destination returns 200 | Pass — href=True; HTTP 200 |
| H46 | skills.html -> projects.html HTTP link | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/projects.html) | Relative navigation href exists and destination returns 200 | Pass — href=True; HTTP 200 |
| H47 | skills.html -> skills.html HTTP link | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/skills.html) | Relative navigation href exists and destination returns 200 | Pass — href=True; HTTP 200 |
| H48 | skills.html -> contact.html HTTP link | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/contact.html) | Relative navigation href exists and destination returns 200 | Pass — href=True; HTTP 200 |
| H49 | skills.html internal references | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/skills.html) | All relative files available and HTML fragments exist | Pass — All resolved |
| H50 | contact.html active navigation source | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/contact.html) | Five links; aria-current only on current page | Pass — Links=5; active correct=True |
| H51 | contact.html -> index.html HTTP link | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/index.html) | Relative navigation href exists and destination returns 200 | Pass — href=True; HTTP 200 |
| H52 | contact.html -> about.html HTTP link | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/about.html) | Relative navigation href exists and destination returns 200 | Pass — href=True; HTTP 200 |
| H53 | contact.html -> projects.html HTTP link | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/projects.html) | Relative navigation href exists and destination returns 200 | Pass — href=True; HTTP 200 |
| H54 | contact.html -> skills.html HTTP link | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/skills.html) | Relative navigation href exists and destination returns 200 | Pass — href=True; HTTP 200 |
| H55 | contact.html -> contact.html HTTP link | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/contact.html) | Relative navigation href exists and destination returns 200 | Pass — href=True; HTTP 200 |
| H56 | contact.html internal references | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/contact.html) | All relative files available and HTML fragments exist | Pass — All resolved |
| H57 | css/styles.css deployed version | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/css/styles.css) | HTTP 200 and matching reviewed content | Pass — HTTP 200; content matches=True |
| H58 | css/animations.css deployed version | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/css/animations.css) | HTTP 200 and matching reviewed content | Pass — HTTP 200; content matches=True |
| H59 | js/script.js deployed version | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/js/script.js) | HTTP 200 and matching reviewed content | Pass — HTTP 200; content matches=True |
| H60 | Image images/projects/guitar-amplifier-finished.jpg | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/images/projects/guitar-amplifier-finished.jpg) | HTTP 200; image type; nonempty alt; size >0 and <500000 bytes | Pass — HTTP 200; image/jpeg; bytes=200408; alt=True |
| H61 | Image images/projects/guitar-amplifier-schematic.jpg | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/images/projects/guitar-amplifier-schematic.jpg) | HTTP 200; image type; nonempty alt; size >0 and <500000 bytes | Pass — HTTP 200; image/jpeg; bytes=488715; alt=True |
| H62 | Image images/projects/calculator-finished.jpg | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/images/projects/calculator-finished.jpg) | HTTP 200; image type; nonempty alt; size >0 and <500000 bytes | Pass — HTTP 200; image/jpeg; bytes=92042; alt=True |
| H63 | Image images/projects/calculator-schematic.jpg | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/images/projects/calculator-schematic.jpg) | HTTP 200; image type; nonempty alt; size >0 and <500000 bytes | Pass — HTTP 200; image/jpeg; bytes=367380; alt=True |
| H64 | Image images/projects/rover-assembled.jpg | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/images/projects/rover-assembled.jpg) | HTTP 200; image type; nonempty alt; size >0 and <500000 bytes | Pass — HTTP 200; image/jpeg; bytes=163961; alt=True |
| H65 | Image images/projects/rover-rendering.png | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/images/projects/rover-rendering.png) | HTTP 200; image type; nonempty alt; size >0 and <500000 bytes | Pass — HTTP 200; image/png; bytes=37123; alt=True |
| H66 | Report reports/guitar-amplifier-lab-report.pdf | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/reports/guitar-amplifier-lab-report.pdf) | HTTP 200; application/pdf; expected file length | Pass — HTTP 200; application/pdf; bytes=16261974 |
| H67 | Report reports/electronic-calculator-lab-report.pdf | Request/inspect [live URL](https://as5433-web.github.io/Portfolio/reports/electronic-calculator-lab-report.pdf) | HTTP 200; application/pdf; expected file length | Pass — HTTP 200; application/pdf; bytes=10495350 |

## Browser and manual test plan

Run these cases on the live site using Chrome. Use phone size 390 x 844 and laptop size 1366 x 768 unless specified otherwise. The direct-local-opening case is the assignment's additional offline requirement. Record the date, browser, observations, and Lighthouse numeric score where applicable. For Lighthouse, aim for Accessibility **90 or higher on every page**.

Replace Not run with Pass or Fail only after executing the entire case. If a case fails, keep the initial failure and append a separate retest result after fixing and publishing the change.

| ID | Testing | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T1 | Home (index.html): All navigation links | On Home (index.html), open each of Home, About, Projects, Skills, and Contact; return to the starting page between links. | Each link opens the correct separate page; the active page alone is highlighted. | Pass — User reports live laptop/phone checks successful, November 5, 2026; exact viewport sizes and animation timings not independently measured. |
| T2 | Home (index.html): Phone layout | Open Home (index.html) at 390 x 844 in both themes; scroll through all content. | Content is readable with no horizontal overflow, overlap, or clipped controls. | Pass — User reports live laptop/phone checks successful, November 5, 2026; exact viewport sizes and animation timings not independently measured. |
| T3 | Home (index.html): Laptop layout | Open Home (index.html) at 1366 x 768 in both themes; inspect all content. | Consistent header, spacing, typography, and usable layouts. | Pass — User reports live laptop/phone checks successful, November 5, 2026; exact viewport sizes and animation timings not independently measured. |
| T4 | Home (index.html): Keyboard navigation | On Home (index.html), use Tab, Shift+Tab, and Enter to use the skip link, every navigation link, and all controls. | Focus is visible and ordered; skip link reaches main; controls work without a mouse. | Pass — User confirms following keyboard, mobile-menu, theme-persistence, and reduced-motion checks on the live site; all behaved as expected, November 5, 2026. |
| T5 | Home (index.html): Mobile menu | On Home (index.html) at phone width, open and close Menu; press Escape when open; reopen and choose a page. Then widen to laptop width. | Menu state is accurate; Escape returns focus; selected page loads; desktop links are visible. | Pass — User confirms following keyboard, mobile-menu, theme-persistence, and reduced-motion checks on the live site; all behaved as expected, November 5, 2026. |
| T6 | Home (index.html): Theme setting | On Home (index.html), toggle Dark mode, visit another page, and reload; repeat with light mode. | Chosen theme and toggle state are retained when storage is available. | Pass — User confirms following keyboard, mobile-menu, theme-persistence, and reduced-motion checks on the live site; all behaved as expected, November 5, 2026. |
| T7 | Home (index.html): Lighthouse accessibility | Run Chrome DevTools Lighthouse Accessibility on Home (index.html) and record the numeric score. | Accessibility score is at least 90; record and fix reported issues. | Pass — Desktop Accessibility 100/100; initial screenshots and user report, November 5, 2026. |
| T8 | About (about.html): All navigation links | On About (about.html), open each of Home, About, Projects, Skills, and Contact; return to the starting page between links. | Each link opens the correct separate page; the active page alone is highlighted. | Pass — User reports live laptop/phone checks successful, November 5, 2026; exact viewport sizes and animation timings not independently measured. |
| T9 | About (about.html): Phone layout | Open About (about.html) at 390 x 844 in both themes; scroll through all content. | Content is readable with no horizontal overflow, overlap, or clipped controls. | Pass — User reports live laptop/phone checks successful, November 5, 2026; exact viewport sizes and animation timings not independently measured. |
| T10 | About (about.html): Laptop layout | Open About (about.html) at 1366 x 768 in both themes; inspect all content. | Consistent header, spacing, typography, and usable layouts. | Pass — User reports live laptop/phone checks successful, November 5, 2026; exact viewport sizes and animation timings not independently measured. |
| T11 | About (about.html): Keyboard navigation | On About (about.html), use Tab, Shift+Tab, and Enter to use the skip link, every navigation link, and all controls. | Focus is visible and ordered; skip link reaches main; controls work without a mouse. | Pass — User confirms following keyboard, mobile-menu, theme-persistence, and reduced-motion checks on the live site; all behaved as expected, November 5, 2026. |
| T12 | About (about.html): Mobile menu | On About (about.html) at phone width, open and close Menu; press Escape when open; reopen and choose a page. Then widen to laptop width. | Menu state is accurate; Escape returns focus; selected page loads; desktop links are visible. | Pass — User confirms following keyboard, mobile-menu, theme-persistence, and reduced-motion checks on the live site; all behaved as expected, November 5, 2026. |
| T13 | About (about.html): Theme setting | On About (about.html), toggle Dark mode, visit another page, and reload; repeat with light mode. | Chosen theme and toggle state are retained when storage is available. | Pass — User confirms following keyboard, mobile-menu, theme-persistence, and reduced-motion checks on the live site; all behaved as expected, November 5, 2026. |
| T14 | About (about.html): Lighthouse accessibility | Run Chrome DevTools Lighthouse Accessibility on About (about.html) and record the numeric score. | Accessibility score is at least 90; record and fix reported issues. | Pass — Desktop Accessibility 100/100; user-reported November 5, 2026. |
| T15 | Projects (projects.html): All navigation links | On Projects (projects.html), open each of Home, About, Projects, Skills, and Contact; return to the starting page between links. | Each link opens the correct separate page; the active page alone is highlighted. | Pass — User reports live laptop/phone checks successful, November 5, 2026; exact viewport sizes and animation timings not independently measured. |
| T16 | Projects (projects.html): Phone layout | Open Projects (projects.html) at 390 x 844 in both themes; scroll through all content. | Content is readable with no horizontal overflow, overlap, or clipped controls. | Pass — User reports live laptop/phone checks successful, November 5, 2026; exact viewport sizes and animation timings not independently measured. |
| T17 | Projects (projects.html): Laptop layout | Open Projects (projects.html) at 1366 x 768 in both themes; inspect all content. | Consistent header, spacing, typography, and usable layouts. | Pass — User reports live laptop/phone checks successful, November 5, 2026; exact viewport sizes and animation timings not independently measured. |
| T18 | Projects (projects.html): Keyboard navigation | On Projects (projects.html), use Tab, Shift+Tab, and Enter to use the skip link, every navigation link, and all controls. | Focus is visible and ordered; skip link reaches main; controls work without a mouse. | Pass — User confirms following keyboard, mobile-menu, theme-persistence, and reduced-motion checks on the live site; all behaved as expected, November 5, 2026. |
| T19 | Projects (projects.html): Mobile menu | On Projects (projects.html) at phone width, open and close Menu; press Escape when open; reopen and choose a page. Then widen to laptop width. | Menu state is accurate; Escape returns focus; selected page loads; desktop links are visible. | Pass — User confirms following keyboard, mobile-menu, theme-persistence, and reduced-motion checks on the live site; all behaved as expected, November 5, 2026. |
| T20 | Projects (projects.html): Theme setting | On Projects (projects.html), toggle Dark mode, visit another page, and reload; repeat with light mode. | Chosen theme and toggle state are retained when storage is available. | Pass — User confirms following keyboard, mobile-menu, theme-persistence, and reduced-motion checks on the live site; all behaved as expected, November 5, 2026. |
| T21 | Projects (projects.html): Lighthouse accessibility | Run Chrome DevTools Lighthouse Accessibility on Projects (projects.html) and record the numeric score. | Accessibility score is at least 90; record and fix reported issues. | Pass — Accessibility 100/100 on Desktop (user report) and Mobile (screenshots); Navigation mode, November 5, 2026. |
| T22 | Skills (skills.html): All navigation links | On Skills (skills.html), open each of Home, About, Projects, Skills, and Contact; return to the starting page between links. | Each link opens the correct separate page; the active page alone is highlighted. | Pass — User reports live laptop/phone checks successful, November 5, 2026; exact viewport sizes and animation timings not independently measured. |
| T23 | Skills (skills.html): Phone layout | Open Skills (skills.html) at 390 x 844 in both themes; scroll through all content. | Content is readable with no horizontal overflow, overlap, or clipped controls. | Pass — User reports live laptop/phone checks successful, November 5, 2026; exact viewport sizes and animation timings not independently measured. |
| T24 | Skills (skills.html): Laptop layout | Open Skills (skills.html) at 1366 x 768 in both themes; inspect all content. | Consistent header, spacing, typography, and usable layouts. | Pass — User reports live laptop/phone checks successful, November 5, 2026; exact viewport sizes and animation timings not independently measured. |
| T25 | Skills (skills.html): Keyboard navigation | On Skills (skills.html), use Tab, Shift+Tab, and Enter to use the skip link, every navigation link, and all controls. | Focus is visible and ordered; skip link reaches main; controls work without a mouse. | Pass — User confirms following keyboard, mobile-menu, theme-persistence, and reduced-motion checks on the live site; all behaved as expected, November 5, 2026. |
| T26 | Skills (skills.html): Mobile menu | On Skills (skills.html) at phone width, open and close Menu; press Escape when open; reopen and choose a page. Then widen to laptop width. | Menu state is accurate; Escape returns focus; selected page loads; desktop links are visible. | Pass — User confirms following keyboard, mobile-menu, theme-persistence, and reduced-motion checks on the live site; all behaved as expected, November 5, 2026. |
| T27 | Skills (skills.html): Theme setting | On Skills (skills.html), toggle Dark mode, visit another page, and reload; repeat with light mode. | Chosen theme and toggle state are retained when storage is available. | Pass — User confirms following keyboard, mobile-menu, theme-persistence, and reduced-motion checks on the live site; all behaved as expected, November 5, 2026. |
| T28 | Skills (skills.html): Lighthouse accessibility | Run Chrome DevTools Lighthouse Accessibility on Skills (skills.html) and record the numeric score. | Accessibility score is at least 90; record and fix reported issues. | Pass — Accessibility 100/100 on Desktop (user report) and Mobile (screenshots); Navigation mode, November 5, 2026. |
| T29 | Contact (contact.html): All navigation links | On Contact (contact.html), open each of Home, About, Projects, Skills, and Contact; return to the starting page between links. | Each link opens the correct separate page; the active page alone is highlighted. | Pass — User reports live laptop/phone checks successful, November 5, 2026; exact viewport sizes and animation timings not independently measured. |
| T30 | Contact (contact.html): Phone layout | Open Contact (contact.html) at 390 x 844 in both themes; scroll through all content. | Content is readable with no horizontal overflow, overlap, or clipped controls. | Pass — User reports live laptop/phone checks successful, November 5, 2026; exact viewport sizes and animation timings not independently measured. |
| T31 | Contact (contact.html): Laptop layout | Open Contact (contact.html) at 1366 x 768 in both themes; inspect all content. | Consistent header, spacing, typography, and usable layouts. | Pass — User reports live laptop/phone checks successful, November 5, 2026; exact viewport sizes and animation timings not independently measured. |
| T32 | Contact (contact.html): Keyboard navigation | On Contact (contact.html), use Tab, Shift+Tab, and Enter to use the skip link, every navigation link, and all controls. | Focus is visible and ordered; skip link reaches main; controls work without a mouse. | Pass — User confirms following keyboard, mobile-menu, theme-persistence, and reduced-motion checks on the live site; all behaved as expected, November 5, 2026. |
| T33 | Contact (contact.html): Mobile menu | On Contact (contact.html) at phone width, open and close Menu; press Escape when open; reopen and choose a page. Then widen to laptop width. | Menu state is accurate; Escape returns focus; selected page loads; desktop links are visible. | Pass — User confirms following keyboard, mobile-menu, theme-persistence, and reduced-motion checks on the live site; all behaved as expected, November 5, 2026. |
| T34 | Contact (contact.html): Theme setting | On Contact (contact.html), toggle Dark mode, visit another page, and reload; repeat with light mode. | Chosen theme and toggle state are retained when storage is available. | Pass — User confirms following keyboard, mobile-menu, theme-persistence, and reduced-motion checks on the live site; all behaved as expected, November 5, 2026. |
| T35 | Contact (contact.html): Lighthouse accessibility | Run Chrome DevTools Lighthouse Accessibility on Contact (contact.html) and record the numeric score. | Accessibility score is at least 90; record and fix reported issues. | Pass — Desktop Accessibility 100/100; user-reported November 5, 2026. |
| T36 | Home waveform | Watch two cycles on Home. | One pulse crosses left to right in about 1.6 seconds, repeating every 2 seconds. | Pass — User reports live laptop/phone checks successful, November 5, 2026; exact viewport sizes and animation timings not independently measured. |
| T37 | Home speaker rhythm | Watch the amplifier on Home through two four-second loops. | Cones follow &#124; - - - &#124; - - &#124; - &#124; - - &#124; - - - at 240 BPM; cabinet stays still. | Pass — User reports live laptop/phone checks successful, November 5, 2026; exact viewport sizes and animation timings not independently measured. |
| T38 | Reduced motion | Enable device/browser reduced motion; open Home and Projects. | Both illustrations are static; no Pause animations button is displayed. | Pass — User confirms following keyboard, mobile-menu, theme-persistence, and reduced-motion checks on the live site; all behaved as expected, November 5, 2026. |
| T39 | Contact and privacy | On Contact, activate LinkedIn; inspect all page content and source for private contact details or mailto links. | LinkedIn opens the specified profile; no email address, mailto link, phone number, or home address is included. | Not run (partial) — User reports all live links/pictures work on laptop and phone; keyboard-specific steps and any additional inspection in this case not separately confirmed. |
| T40 | Direct local opening | Double-click index.html, visit all five pages, and use theme/menu controls; repeat with browser storage blocked. | Pages/assets work without a server; unavailable storage causes no broken controls. | Not run |
| T41 | Projects photo links | Open each of the six project images by mouse and by Tab/Enter. | A larger version of the correct image opens; focus remains visible before activation. | Pass — User confirms following keyboard, mobile-menu, theme-persistence, and reduced-motion checks on the live site; all behaved as expected, November 5, 2026. |
| T42 | Projects photo layout | View Projects at phone and laptop sizes in both themes; scroll through all six images and captions. | Images retain their proportions, captions are readable, and there is no horizontal overflow. | Pass — User reports live laptop/phone checks successful, November 5, 2026; exact viewport sizes and animation timings not independently measured. |
| T43 | PDF report links | Activate the amplifier and calculator report links with mouse and Tab/Enter on the live site. | The correct original PDF opens in a new tab; link names announce the PDF and new tab. | Pass — User confirms following keyboard, mobile-menu, theme-persistence, and reduced-motion checks on the live site; all behaved as expected, November 5, 2026. |
| T44 | Project shortcuts | On phone and laptop, use each top pink shortcut by mouse and keyboard. | Three prominent buttons fit the viewport and jump to the correct project heading; focus is visible. | Pass — User confirms following keyboard, mobile-menu, theme-persistence, and reduced-motion checks on the live site; all behaved as expected, November 5, 2026. |

## Failure and retest log

No website failures were found in the completed live HTTP checks. All five desktop Lighthouse Accessibility cases passed at 100/100 by user report. Projects and Skills mobile Accessibility also scored 100/100 in the supplied screenshots. The user has since confirmed live laptop/phone checks and the additional keyboard, menu, theme-persistence, and reduced-motion procedures. Current totals are 42 Pass and 2 unexecuted or partially reported cases.

Initial mobile Performance observations: Projects 89, Skills 90. Skills subsequently scored 100 in all categories by user report, without an intervening code change by the agent. Projects JSON (Lighthouse 13.5.0, 2026-11-05T21:03:48.526Z) confirms Performance 89 and all other categories 100; layout shift 0.203 and image-delivery savings of approximately 681 KiB are recorded above. Projects optimization and live retest remain pending. Initial scores are retained.

When a website case fails, record its ID, date, browser/viewport, observed result, fix, published revision, and retest result here without overwriting the initial failure.

## Development verification history

Earlier local checks covered HTML structure, local references, selected color-contrast calculations, asset sizes, and simulated JavaScript logic. Those checks are development evidence and do not substitute for the live browser cases above. Earlier verbose development notes remain available in Git history.

## Projects loading-shift investigation — November 5, 2026

A temporary local headless Edge probe delayed the existing application script until 500 ms after the window load event, with images already loaded. At a requested 412 × 823 window size, the top of main moved from 326.17 px to 126.94 px when the script initialized: approximately 199.23 px upward. The initial HTML exposes the full navigation and hides both control buttons; JavaScript then collapses mobile navigation and reveals Menu/theme controls. This reproduces a header-driven content jump independently of image loading and is the leading explanation for the report’s main-element shift.

The saved Lighthouse filmstrip begins at 375 ms, after its first paint at 112 ms, and every captured frame is identical; it does not show the transition. The JSON has no raw trace. The sizing warning alone does not prove the amplifier photo caused the recorded shift. The probe’s virtual-time observer returned no layout-shift entries, so this is a measured position change, not a new CLS measurement. No live retest, keyboard check, or VS Code Live Preview check was performed for this investigation. Production HTML/CSS/JavaScript remain unchanged.

Recommended correction: establish the mobile header’s initial state before first paint, retain accessible menu/theme behavior and navigation without JavaScript, then publish a reviewed fix and rerun mobile Lighthouse.

## Projects mobile retest — November 5, 2026

User-supplied `mobile_test2_Projects` JSON (Lighthouse 13.5.0, run at 2026-11-05T21:13:56.176Z) reports Performance **99**, Accessibility **100**, Best Practices **100**, and SEO **100**. CLS is **0** with no layout-shift entries, compared with **0.203** initially. LCP is approximately **2.3 seconds**, FCP **0.8 seconds**, and total blocking time **0 ms**. Image delivery still estimates **681 KiB** savings. See [retest evidence](testing/projects-mobile-retest-2026-11-05.json).

No intervening website code change was made by the agent. This run confirms that the shift did not occur during this measurement; it does not establish that the reproducible header initialization jump has been permanently corrected. Original findings and scores remain preserved. No browser interaction or visual test status is changed by these audit scores.

## User-reported live functional testing — November 5, 2026

The user confirmed testing on laptop and phone: all links and pictures function as expected, all animations function as expected, and light/dark mode both work. These results are user-executed evidence, not agent browser tests. Navigation, phone/laptop layouts, animation behavior, and project-image layouts are recorded as Pass. Exact viewport sizes and animation timing measurements were not supplied.

Theme switching and image/report/shortcut links are confirmed, but their combined test cases retain partial status where persistence, keyboard activation, focus, or privacy inspection was not explicitly reported. Keyboard-only navigation, menu Escape/focus behavior, reduced motion, and local-file/blocked-storage behavior still need confirmation. No production code changes or commits were made.

## Keyboard, menu, theme-persistence, and reduced-motion confirmation — November 5, 2026

The user confirms completing all four supplied procedures successfully on the live site: keyboard-only navigation across all five pages (including skip links, controls, image/report links), mobile-menu opening/closing and Escape focus return across all five pages, desktop navigation after resizing, persistence of both themes across navigation and refresh, and reduced-motion emulation stopping both Home animations with normal motion restored afterward. Relevant cases are recorded as Pass based on this explicit user report; these were not agent-executed browser tests. No additional screenshot evidence is required for these functional confirmations. Earlier pending notes above describe the status before this confirmation.

Remaining cases: T39 still needs the full privacy inspection (LinkedIn/link operation already reported successful); T40 still needs direct local-file opening with browser storage blocked. Neither is inferred from the live-site checks. Report phone/laptop screenshots and the submission report remain separate deliverables.

## Supplied screenshot evidence � November 5, 2026

- `Screenshot 2026-11-05 163232.png`: live Home on a laptop browser, with DevTools Rendering set to `prefers-reduced-motion: reduce`. This supports the user's reduced-motion test report; a still image alone does not demonstrate the absence of motion over time.
- `unnamed.png`: live Home displayed on a phone, showing the stacked introduction and academic profile.

Original screenshots remain outside the public repository for use in the assignment report. The laptop capture includes unrelated browser bookmarks; use a cropped or redacted copy if publishing it. No screenshot pixels were modified or added to the repository in this commit.
