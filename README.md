# Aeno — Player System

Responsive Valorant player profile based on the supplied page. The design, copy, and interactions are preserved; styles and behavior are split into maintainable source files.

## Run locally
Requires Node.js 18 or newer. No third-party dependencies are needed.

```sh
npm start
```

Open http://localhost:4173. Opening `index.html` directly also works, though a local server is recommended.

## Customize
- Edit profile copy and sections in `index.html`.
- Change colors and responsive styles in `src/styles.css`.
- Add real social URLs in `src/channels.js` by uncommenting an entry and replacing the example URL. Configured buttons open the destination in a new tab; unconfigured channels retain the “Coming soon” dialog.
- Update interactions in `src/app.js`.

## Files
`index.html` page structure · `src/styles.css` styles · `src/app.js` interactions · `src/channels.js` social configuration · `server.mjs` local preview server.
