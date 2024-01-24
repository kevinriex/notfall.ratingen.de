Eine Notlösung für die Stadt Ratingen um eine informative Landing Page während des Cyberangriffs auf die SIT zu haben.
Eine aktuelle Produktions-Version läuft auf https://notfall.jr-rtg.de.
Eine aktuelle Development-Version läuft über [Vercel](https://vercel.com) auf https://hs.kcvw.de und https://hochschule-ratingen.de.

**Design**: Kevin Yven Riexinger

**Infrastruktur**: Konstantin Westhoff

**Code**: Beide :wink:

## Technologie

Geschrieben in JavaScript mit Next.js und React.

Deployment via GitHub Actions auf Vercel.

Als Designsystem haben wir Bootstrap 5 verwendet. Eigene Farben wurden mit SASS realisiert.

Alle Icons sind aus der großen Bibliothek von FontAwesome.

Als VCS wurde Git genutzt. Geschrieben wurde der Code in Visual Studio Code.

## Bauen des Projekts

Der aktuellste Build ist immer als ZIP bei [dem aktuellsten Workflow Run][wf-run] zu finden.

Vor einem Build ist sicherzustellen, dass `ghostscript` und `graphicsmagick` installiert sind.
Instruktionen sind [hier](https://github.com/yakovmeister/pdf2image/blob/aa5ac4f970b930f69197541fc4ecb9c76e496830/docs/gm-installation.md) zu finden.

Selbst bauen:

```bash
npm ci
npm run build
```

Die kompilierten Dateien sind dann in `out/` zu finden und können direkt über einen einfachen HTTP Server (z.B. Apache, etc.) bereitgestellt werden.

## Vergleiche

| Webseite Alt             |     Webseite Neu      |
| ------------------------ | :-------------------: |
| ![Alte Ansicht][alt1]    | ![Neue Ansicht][neu1] |
|                          | ![Neue Ansicht][neu2] |
| ![Alte Ansicht][alt-res] |                       |

### Responsivität der neuen Webseite

https://github.com/kevinriex/notfall.ratingen.de/assets/42553393/6053255e-2de2-4999-9773-44220b882e00

## Development Server

Development Server starten:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Auf [http://localhost:3000](http://localhost:3000) läuft dann der ganze Spaß.

[alt1]: ./assets/ratingen-alt.png
[alt-res]: ./assets/ratingen-alt-responsive.png
[neu1]: ./assets/ratingen-neu1.png
[neu2]: ./assets/ratingen-neu2.png
[wf-run]: https://github.com/kevinriex/notfall.ratingen.de/actions/workflows/build-project.yml
