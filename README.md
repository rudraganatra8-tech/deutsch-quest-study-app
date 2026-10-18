# DeutschQuest

A small, installable German study app built around the syllabus you provided.

## What is included

- A first screen that welcomes you, shows 100 HP / 0 XP / Day 1, and asks what is in pages 1–19 before any lesson begins.
- Seven learning chapters that split pages 1–128 into approximate 18–19 page chunks, followed by one revision day.
- Bite-size English explanations followed immediately by a mini challenge.
- +10 XP for a correct answer; −10 HP for a wrong answer, followed by a simple analogy and another try.
- A level-up after every 100 XP; the next chapter opens after you clear that day's ten challenges.
- Local progress saving, a streak counter, animated progress chart, word cards, English-friendly practice links, and offline/PWA files.

The page ranges are approximate. Use the welcome prompt to enter your first pages' actual headings; this helps you match the app's daily route to the printed book.

## Deploy to the existing Cloudflare Worker

1. Extract this app folder. Upload the **files inside it** to the root of your GitHub repository. Do not upload only the ZIP. Include hidden files `wrangler.toml` and `.assetsignore`.
2. Commit the uploaded files to the `main` branch.
3. In Cloudflare, open **Workers & Pages → deutsch-quest-study-app → Settings → Builds**. Keep root directory `/`, build command `None`, and deploy command `npx wrangler deploy`.
4. Retry the latest build or push a new commit. The Wrangler config tells Cloudflare to serve the root folder as static app assets.
5. Open your existing `workers.dev` address. On first load, enter the topics from pages 1–19. Use the browser's **Install app** prompt or **Add to Home screen** to install it.

Your XP, HP, answers, and streak are saved in that browser on that device. They do not sync across devices.
