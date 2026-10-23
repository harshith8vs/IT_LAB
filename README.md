# Online Food Delivery Application — DevOps Lab

A small static demo repository for the Week-11 case study. It demonstrates a Git workflow and a basic CI/CD pipeline. It is a teaching example, not a production ordering/payment system.

## Project structure
- `index.html` — food delivery demo page
- `src/style.css` — black-and-white styling
- `src/app.js` — menu rendering and order interaction
- `tests/smoke-test.js` — basic source smoke test
- `.github/workflows/ci-cd.yml` — checks the project and deploys to GitHub Pages on pushes to `main`

## Requirements
- Git
- A GitHub account/repository
- Node.js 20+ (only needed to run the smoke test locally)
- A modern browser

## Run locally
Open `index.html` in a browser. To run the smoke test:
```bash
node tests/smoke-test.js
```

## Git setup and first push
Create an empty repository on GitHub, then run these commands from this folder:
```bash
git init
git add .
git commit -m "Initial food delivery application"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/food-delivery-devops.git
git push -u origin main
```
Replace the remote URL with your repository URL.

## Suggested feature-branch workflow
```bash
git switch -c feature/menu-search
# make and test changes
git add .
git commit -m "Add menu search"
git push -u origin feature/menu-search
```
Open a pull request on GitHub, review the changes, run checks, and merge into `main`.

## CI/CD
The GitHub Actions workflow runs a smoke test on pushes and pull requests. When code is pushed to `main`, it also publishes the static demo to GitHub Pages. In the GitHub repository, enable Pages with **GitHub Actions** as the build/deployment source if prompted.

## Production note
A real food-delivery platform would also need a backend API, database, authentication, secure payment integration, monitoring, secrets management, and environment-specific deployment approvals. Never commit credentials or real customer data.
