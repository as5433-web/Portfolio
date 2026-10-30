# Portfolio Website Instructions

## Project purpose and pages
Build a personal portfolio showcasing my background, education, projects, and technical skills for my homework assignment.

- `index.html`: introduction and navigation to the other pages.
- `about.html`: a distinct account of my background, education, selected CCM coursework, work experience, and interests. Include my current bachelor's studies and intention to pursue a master's in Electrical Engineering. Do not repeat the homepage summary verbatim or publish the transcript itself, student identifiers, or grades.
- `projects.html`: at least three projects with descriptions, images or screenshots, and relevant links when available. Show one finished-build photo and one schematic for each of the amplifier and calculator projects: amplifier schematic from report page 51, calculator schematic from report page 9. Keep both the supplied assembled-rover photo and rover rendering. Summarize the reports accurately, credit team work, label renderings, and do not claim tests beyond the documented evidence. Include the user-authorized amplifier and calculator PDF lab reports in `reports/` and link each from its project. Use prominent pink buttons for the project shortcuts. Do not publish other private source documents.
- `skills.html`: an employer-facing skills showcase using concise capability bullets, grouped software/tools, completed coursework, and practical strengths drawn from my resume and projects. Keep narrative paragraphs to a minimum and link to supporting projects. Distinguish demonstrated project/lab experience from tool familiarity and foundational knowledge. Do not invent numerical ratings, certifications, expert status, or professional engineering experience.
- `contact.html`: LinkedIn and approved professional profile links only. Do not display my email address or include mailto links.

Use real content. Ask me for missing personal details instead of inventing information or treating placeholder text as finished content.

Keep the five main pages available. Every main navigation link must open its corresponding HTML page using relative paths, with `aria-current="page"` on the active link. The homepage also includes the original About, featured amplifier project, Skills, and LinkedIn contact sections below the introduction and animated waveform. Keep the animated amplifier on Home; Projects uses real build photos. Share `css/styles.css` and `js/script.js` across all five pages, and load `css/animations.css` on Home. Do not display a Pause animations button; respect device reduced-motion preferences. The saved design previews are separate from the main navigation.

## Design
Use a professional engineering portfolio style based on the supplied blue reference palette. Approximate colors:

- Deep navy: `#041F45`.
- Dark blue: `#063868`.
- Blue: `#075D92`.
- Steel blue: `#6596AD`.
- Pale blue: `#B5CEDD`.
- White: `#FFFFFF`.

Add selected pink accents from the supplied reference: deep pink `#B5196F`, bright pink `#E0218A`, medium pink `#E64EA2`, soft pink `#F3A7D1`, and hover shade `#881353`.

Use navy hero sections, white or dark theme content surfaces, blue links, pink primary buttons, and pale blue accents. Use pink for active navigation underlines, section labels, profile borders, waveform bars, and small illustration details. Use deep pink for white button text and soft pink for text on navy backgrounds. Use steel blue for illustrations and accents rather than small text on white. Check contrast for each actual text/background combination in both themes.

Keep the design restrained and professional: Arial/Helvetica system fonts, clear descriptive headings, a full-name header, a compact academic profile on Home, consistent content widths, rectangular project illustrations, subtle borders, and modest corner rounding. Keep navy and blue dominant, with pink used as an accent. Avoid decorative section/list numbering, oversized slogans, decorative serif italics, and pill-shaped controls. Keep course codes, dates, component identifiers, and technical values intact. Preserve the current page outline, homepage overview sections, and the Explore my work button below the homepage amplifier.

Use `css/styles.css` and `js/script.js` across all five main pages. Retain light/dark mode, responsive navigation, and keyboard focus indicators. The saved previews `design-one.html` and `alternative.html` retain older designs outside the main navigation.

Keep the animations gentle. Send a single waveform pulse from left to right every 2 seconds: 1.6 seconds to cross all bars, then .4 seconds of rest. Resting bars use 52.5% of their full height. Continue the pulse across the pink and blue bars. Pulse the speaker cones to `| - - - | - - | - | - - | - - -` at 240 BPM, treating each symbol as a .25-second beat: five pulses in a four-second loop, starting at 0, 1, 1.75, 2.25, and 3 seconds. Keep the amplifier cabinet still. Do not add a Pause animations button. Disable the animations when reduced motion is requested. Animation styles belong in `css/animations.css`.

## Technical rules
- Use plain HTML5, CSS, and JavaScript only.
- No backend, databases, logins, frameworks, build tools, or npm. This includes React, Vue, Tailwind, and Bootstrap.
- Use external CSS and JavaScript files and relative paths for local links and assets.
- The website must work by double-clicking `index.html`, including navigation between pages.
- Keep each image file under 500 KB.
- Never include API keys, passwords, tokens, my email address, my phone number, or my home address. The repository and website are public. Do not copy private contact details from my resume into pages, metadata, scripts, or documentation.

## Structure and accessibility
- Use semantic HTML elements and exactly one `h1` per page.
- Give images appropriate `alt` attributes; use empty alt text for decorative images.
- Ensure sufficient color contrast in both themes and visible keyboard focus.
- Make navigation and interactive controls usable with the keyboard.
- Use media queries to support phone and laptop layouts without horizontal overflow.
- Aim for a Lighthouse Accessibility score of at least 90 on every page.

## JavaScript features
Implement at least these two interactive features:

1. A responsive mobile navigation menu with an accessible button and an accurate expanded state.
2. A light/dark mode toggle that works across all pages. Remember the selected theme when browser storage is available, and handle unavailable storage gracefully.

Keep JavaScript understandable enough for me to explain during my class demo. Use LinkedIn for contact. Do not add an email link or contact form that exposes my email address.

## Working with Codex
- Complete one small requested task at a time.
- Explain changes so I can review them and understand the code.
- Test after each change in VS Code Live Preview, at phone width, and with the keyboard. Clearly report any checks that could not be performed.
- Let me review each task before committing it.
- Update this file when agreed design decisions change.

## Git and deployment
- Commit each reviewed task with a clear, descriptive message, then push to GitHub with my approval when requested.
- Publish through GitHub Pages using the `main` branch and repository root.
- Use relative asset paths that also work under the GitHub Pages `/Portfolio/` path.
- Undo changes with revert commits. Never use reset or force push.
- Work steadily over multiple days. Never fabricate or backdate commit history.

## Testing
Maintain `TESTING.md` with at least 12 test cases. Each case must include a test ID, what is being tested, steps, expected result, and actual result with Pass or Fail after execution. Mark unexecuted cases as not run.

Cover all of the following, using additional cases as needed:

- Every navigation link on every page.
- Every page at phone and laptop screen sizes.
- Every JavaScript feature, including both themes and the mobile menu.
- Valid and invalid input if form validation is included.
- Keyboard navigation with Tab and Enter on every page.
- Lighthouse Accessibility scores on every page.

Run final tests on the live GitHub Pages site, not only in local preview. Fix failures, rerun the affected tests, and record both the original failure and retest result. Never claim an unperformed test passed.

## Documentation and submission
- Keep `README.md` updated with the project description, live website link, local viewing instructions, and acknowledgments.
- Support a 1–2 page report with repository and live website links at the top, feature overview, challenges and solutions, an actual Codex mistake and its correction, and phone/laptop screenshots.
- Do not invent mistakes, testing results, or screenshots for the report.
- Prepare for a three-minute demo showing the live site on phone and laptop, keyboard navigation, and an explanation of the JavaScript.
