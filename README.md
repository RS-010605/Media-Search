# Redux Project

A React application built with Vite and Redux for searching media and managing collections.

## Features

- Search for media using the search interface.
- Browse media cards and grid results.
- View collections and collection pages.
- Manage search and collection state with Redux.
- Keep API requests in a separate module (`src/api/mediaApi.js`).

> The exact data provider and available features depend on the API configuration in this project.

## Tech Stack

- React
- Vite
- Redux Toolkit
- React Redux
- JavaScript
- Axios (for API requests, if configured in `mediaApi.js`)
- React Router (for page navigation, if configured)

## Requirements

Install these before starting:

- [Node.js](https://nodejs.org/) — use a current LTS version.
- npm (included with Node.js).

Check that they are installed:

```bash
node -v
npm -v
```

## Run the Project Locally

1. **Extract the project ZIP/RAR** and open the `REDUX-PROJECT` folder in VS Code.
2. **Open a terminal** in the folder containing `package.json`.
3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Configure the API**, if required. Check `src/api/mediaApi.js` and the project's `.env` file to see which API URL or key is expected. If the project uses environment variables, create or update `.env` in the project root using the variable names the code expects. Do not publish real API keys or secrets to GitHub.
5. **Start the development server:**

   ```bash
   npm run dev
   ```

6. Open the local URL printed in the terminal (Vite commonly uses `http://localhost:5173`).

To stop the server, press `Ctrl + C` in the terminal.

## Useful Commands

```bash
npm run dev       # Start the local development server
npm run build     # Build the production version
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint, if configured
```

Use `npm run` to see the scripts actually available in `package.json`.

## Project Structure

```text
REDUX-PROJECT/
├── public/                   # Static public assets
├── src/
│   ├── api/
│   │   └── mediaApi.js       # API request logic
│   ├── components/
│   │   ├── CollectionCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── reduxCard.jsx
│   │   ├── reduxGrid.jsx
│   │   ├── searchBar.jsx
│   │   └── Tabs.jsx
│   ├── pages/
│   │   ├── collectionPages.jsx
│   │   └── homePage.jsx
│   ├── redux/
│   │   ├── features/
│   │   │   ├── collectionSlice.js
│   │   │   └── searchSlice.js
│   │   └── store.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## How the Redux Code Fits Together

- **`store.js`** — configures the Redux store and combines the application's state slices.
- **`searchSlice.js`** — defines state and actions related to searching.
- **`collectionSlice.js`** — defines state and actions related to collections.
- **`main.jsx`** — the React entry point; this is normally where the Redux `<Provider>` is connected to the app.
- **`App.jsx`** — the main application component and route/layout setup.
- **`mediaApi.js`** — keeps API request code separate from UI components.
- **Components** — display the navigation, search controls, cards, grids, tabs, and collection cards.
- **Pages** — assemble components into the home and collection views.

Typical data flow:

```text
User action
   ↓
React component dispatches a Redux action
   ↓
Reducer updates the Redux store
   ↓
React Redux detects the state change
   ↓
Subscribed components re-render with updated state
```

For API searches, the component or Redux logic calls the API layer, receives the response asynchronously, and then updates the relevant state. Check the implementation in this repository to confirm exactly where each request is triggered.

## Troubleshooting

### `npm` or `node` is not recognized

Install Node.js from [nodejs.org](https://nodejs.org/), then close and reopen your terminal.

### Dependencies or packages are missing

Run this from the project root:

```bash
npm install
```

### The API request fails

- Check your internet connection.
- Verify the API base URL and key, if required.
- Check the browser DevTools **Console** and **Network** tabs.
- Confirm the API provider allows requests from your local origin.
- Do not share API keys in screenshots or public repositories.

### The page opens but no media appears

Check the browser console, the API response, and the search state in `src/redux/features/searchSlice.js`.

### Port 5173 is already in use

Vite may offer another available port in the terminal. Open the URL it prints.

### Build or lint command fails

Run `npm run` and use only scripts listed in `package.json`. Read the first meaningful error in the terminal before changing configuration.

## Before Uploading to GitHub

- Do not commit real secrets or private API keys from `.env`.
- Keep `node_modules/` out of version control.
- Include `package.json` and `package-lock.json` so others can install dependencies.
- Test the app with `npm run dev` and, if available, `npm run build`.

## Notes

This README is intended as a practical starting guide. For exact environment-variable names, API setup, and scripts, use `package.json`, `.env` (without publishing its secrets), and `src/api/mediaApi.js` as the source of truth.
