# Recreate Git Repository and Push to GitHub

The local `.git` repository in this workspace is currently corrupted and cannot be used to push changes.

Use the following steps from the project root (`c:\Desktop\projects.api\smartsort-solutions`):

1. Remove the broken Git data:

```powershell
Remove-Item -Recurse -Force .git
```

2. Remove the old lockfile and node modules, then reinstall dependencies:

```powershell
Remove-Item -Force package-lock.json
Remove-Item -Recurse -Force node_modules
npm install
```

3. Initialize a fresh Git repository:

```powershell
git init
git add .
git commit -m "Cleaned project and removed Firebase/AI Studio references"
git branch -M main
```

4. Create the GitHub repository `smartsortsolutions` on GitHub (via browser or `gh repo create`) and add the remote:

```powershell
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/smartsortsolutions.git
```

5. Push to GitHub:

```powershell
git push -u origin main
```

If you have GitHub CLI installed, you can replace step 4 with:

```powershell
gh repo create smartsortsolutions --public --source=. --remote=origin --push
```

## Notes

- The project build was verified successfully after removing Firebase and AI Studio references.
- Update `<YOUR_GITHUB_USERNAME>` with your GitHub account.
- If the GitHub repo already exists, use `git remote add origin` and then push.
