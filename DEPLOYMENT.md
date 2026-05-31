# Deploy Helvexa AI to GitHub and Vercel

## 1. Push the project to GitHub

Create a new empty repository on GitHub, then run these commands from the project folder:

```bash
git init
git add .
git commit -m "Initial Helvexa AI website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your GitHub details.

## 2. Import the GitHub repo into Vercel

1. Go to https://vercel.com/new
2. Sign in with GitHub.
3. Click **Import** beside the repository.
4. Vercel should automatically detect the included `vercel.json` file. If it asks for settings, use these:

| Setting | Value |
| --- | --- |
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

5. Click **Deploy**.

The included `vercel.json` also adds a fallback rewrite to `index.html`, which keeps the React app working correctly if you later add more pages or client-side routes.

## 3. Future updates

After editing the website, push changes to GitHub:

```bash
git add .
git commit -m "Update website"
git push
```

Vercel will automatically redeploy the live website after every push to `main`.

## 4. Custom domain, optional

In Vercel:

1. Open the project.
2. Go to **Settings > Domains**.
3. Add your domain.
4. Follow Vercel's DNS instructions from your domain provider.

For most domains, Vercel will ask for:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

DNS can take a few minutes to a few hours to update.