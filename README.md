# Alpine Residences – GitHub Pages Website

Statische, responsive Website für Alpine Residences. Kein Build-System erforderlich.

## Veröffentlichung auf GitHub Pages
1. Neues GitHub-Repository erstellen, z. B. `alpine-residences`.
2. Alle Dateien aus diesem Ordner in das Repository hochladen.
3. In GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**.
4. Branch `main` und Ordner `/ (root)` auswählen.
5. Nach wenigen Minuten ist die Seite über die von GitHub angezeigte Pages-URL verfügbar.

## Vor Veröffentlichung anpassen
- `script.js`: `contactEmail` durch die echte Alpine-Residences-Adresse ersetzen.
- `impressum.html`: Rechtsform, Firmeninhaber, Adresse, E-Mail und Telefon ergänzen.
- `datenschutz.html`: an tatsächlich eingesetzte Hosting-, Analytics-, CRM-, Cookie- und Formular-Dienste anpassen.
- Beispielwerte im Dashboard und Rechner sind nur Visualisierung bzw. unverbindliche Rechenannahmen.
- Preise und Leistungsumfang mit den finalen Vertragsunterlagen synchron halten.

## Dateien
- `index.html` – Hauptseite
- `styles.css` – komplettes Design / Responsive Layout
- `script.js` – Rechner, Mobile-Menü, Kontakt-Mailto, Scroll-Effekte
- `impressum.html` – Platzhalter
- `datenschutz.html` – Platzhalter

## Technischer Hinweis
Die Website läuft vollständig statisch und eignet sich direkt für GitHub Pages. Für serverseitige Formulare, Login, Eigentümer-Dashboard oder Datenbankfunktionen wäre später ein Backend bzw. ein externer Dienst nötig.
