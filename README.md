Eine Notlösung für die Stadt Ratingen um eine informative Landing Page während des Cyberangriffs auf die SIT zu haben.
Eine aktuelle Version läuft über [Vercel](https://vercel.com) auf https://hs.kcvw.de und https://hochschule-ratingen.de.

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

```bash
npm ci
npm run build
```

Die kompilierten Dateien sind dann in `out/` zu finden und können direkt über einen einfachen HTTP Server (z.B. Apache, etc.) bereitgestellt werden.

## Vergleiche

| Webseite Alt             |                                      Webseite Neu                                      |
| ------------------------ | :------------------------------------------------------------------------------------: |
| ![Alte Ansicht][alt1]    |                                 ![Neue Ansicht][neu1]                                  |
| ![Alte Ansicht][alt-res] |                                 ![Neue Ansicht][neu2]                                  |
|                          | https://github.com/kevinriex/notfall.ratingen.de/assets/42553393/18cf77a4-119f-48be-9f68-05a313d24d86 |

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
[neu-res-vid]: ./assets/ratingen-neu-res.mov
