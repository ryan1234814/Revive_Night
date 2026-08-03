# Revive Night — Setup & Push Guide

How to set up the project locally and push changes to the `main` branch of the GitHub repository.

## Repository

- **Remote URL:** `https://github.com/ryan1234814/Revive_Night`
- **Default branch:** `main`
- **Stack:** Static site (HTML + CSS + vanilla JS). No build step required.

## Prerequisites

- [Git](https://git-scm.com/) installed
- A GitHub account with write access to the repository (owner: `ryan1234814`)
- GitHub authentication configured — see [Authentication](#authentication)

## Cloning the repository (first time)

```bash
git clone https://github.com/ryan1234814/Revive_Night.git
cd Revive_Night
```

## Running the site locally

The site is fully static — open `index.html` directly in a browser, or serve it locally:

```bash
# Option A: Python
python3 -m http.server 8000
# then visit http://localhost:8000

# Option B: Node
npx serve .
```

## Pushing changes to `main`

### 1. Check the current state

```bash
git status          # see modified / untracked files
git branch          # confirm you are on `main`
git log --oneline   # recent commits
```

### 2. Stage your changes

```bash
git add .                    # stage everything
git add index.html app.js    # or stage specific files
git status                   # review what will be committed
```

### 3. Commit

```bash
git commit -m "Describe your change"
```

If git asks for your identity (first commit only):

```bash
git config user.name "Your Name"
git config user.email "your@email.com"
```

### 4. Push to `main`

```bash
git push origin main
```

Or, the very first time (also sets upstream tracking):

```bash
git push -u origin main
```

### 5. Verify

```bash
git status            # should show "up to date" / nothing to commit
git log origin/main -1
```

Then confirm at <https://github.com/ryan1234814/Revive_Night>.

## Authentication

On this machine, git authenticates to GitHub using an OAuth token cached in the macOS
Keychain (configured via `credential.helper=osxkeychain`). Pushing over HTTPS uses the
cached token automatically — no password prompt should appear.

If the token is ever revoked or expires, re-authenticate:

```bash
gh auth login                # if the GitHub CLI is installed
# or clear the stale credential and push again to be prompted for new ones:
git credential-osxkeychain erase
git push origin main
```

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| `Permission denied (publickey)` | You're using the SSH URL — switch to HTTPS: `git remote set-url origin https://github.com/ryan1234814/Revive_Night.git` |
| `Authentication failed` | Token expired — re-authenticate (see above) |
| `rejected ... non-fast-forward` | Remote has commits you don't have — run `git pull --rebase origin main`, then `git push origin main` |
| `Please tell me who you are` | Set `user.name` and `user.email` (see step 3) |
| `fatal: not a git repository` | You're in the wrong directory — run `git init` or clone the repo |

## Safety tips

- Always `git pull --rebase origin main` before pushing if you share the repo with others.
- Never commit secrets, API keys, or tokens.
- Avoid `--force` pushes on shared branches — they rewrite history and can destroy others' work.
- Make focused commits with clear messages instead of one giant commit.
