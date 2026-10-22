# Portfolio Website Instructions

## Project purpose and pages
Build a personal portfolio showcasing my background, education, projects, and technical skills for my homework assignment.

- `index.html`: introduction and navigation to the other pages.
- `about.html`: personal background, education, and interests.
- `projects.html`: at least three projects with descriptions, images or screenshots, and relevant links when available.
- `skills.html`: technical skills and proficiency levels.
- `contact.html`: email and professional profile links.

Use real content. Ask me for missing personal details instead of inventing information or treating placeholder text as finished content.

## Design
Use a clean, modern style inspired by my reference palette: purples, pink, dark blue, and white where needed. These approximate colors are starting points:

- Deep navy: `#052D47`.
- Blue: `#075991`.
- Bright pink: `#C70A9D`.
- Muted purple: `#843C7C`.
- Deep plum: `#530542`.
- White: `#FFFFFF`.

Use navy and plum for dark surfaces, pink and purple for accents, and white for readable text and light surfaces. Check contrast for each actual text/background combination; adjust shades when necessary. Do not assume every palette combination is accessible.

Provide light and dark themes with consistent styling on all five pages. Use a system font stack such as Arial, Helvetica, sans-serif. Keep content readable, navigation consistent, and layouts responsive on phones and laptops.

## Technical rules
- Use plain HTML5, CSS, and JavaScript only.
- No backend, databases, logins, frameworks, build tools, or npm. This includes React, Vue, Tailwind, and Bootstrap.
- Use external CSS and JavaScript files and relative paths for local links and assets.
- The website must work by double-clicking `index.html`, including navigation between pages.
- Keep each image file under 500 KB.
- Never include API keys, passwords, tokens, my phone number, or my home address. The repository and website are public.

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

Keep JavaScript understandable enough for me to explain during my class demo. If a contact form is added, validate it with JavaScript and direct visitors to email. Clearly explain that the form cannot send messages itself.

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
