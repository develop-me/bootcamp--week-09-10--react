# Day 4: Afternoon

**Create a fresh repo to demonstrate**

- GitHub pages: free hosting of static sites
- NPM package: `gh-pages`

## Setup [10 mins]

- `npm install gh-pages`
- In `package.json`:
    - `"homepage": "https://<github-username>.github.io/<repo>/",`
    - Add to `scripts` property:
       ```json
       "scripts": {
           "deploy": "gh-pages -d build"
        }
       ```

## Deploying

- `npm run deploy`
- Check status: `https://github.com/<github-username>/<repo>/deployments`
- Go to site: `https://<github-username>.github.io/<repo>/`

### `<HashRouter>`

- Update `BrowserRouter` to `HashRouter` in `App` imports
- Demonstrate hash URLs with a `<Link>`
