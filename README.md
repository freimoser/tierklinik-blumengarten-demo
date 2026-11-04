# Tierklinik Blumengarten – Demo

Demo-Website einer fiktiven Tierarztpraxis, die zeigt, wie sich die PetLeo-Online-Services in eine Praxis-Website einbinden lassen.

**Live:** https://freimoser.github.io/tierklinik-blumengarten-demo/

## Eingebundene Services

| Service | Wo auf der Seite | Verhalten |
|---|---|---|
| Termin buchen | Header, schwebender Button, Hero, Schnellzugriff, Schritt 1, Bildband, Kontakt | neuer Tab |
| Kundenregistrierung | Hero, Schnellzugriff, Schritt 2 | neuer Tab |
| Heimtierausweis | Schnellzugriff, Schritt 3 | neuer Tab |
| Überweisung für Tierärzt:innen | Abschnitt „Für Tierärzt:innen“ | PetLeo-Referral-Widget (Overlay) |

Direktlinks für Demos: `#termin`, `#registrierung` und `#ausweis` leiten sofort zum jeweiligen Service weiter.

## Klinik wechseln

Die PetLeo-Adressen stehen nur in `app.js` (`CLINIC`). Für eine andere Klinik dort Klinik-ID und `group` austauschen. Das Überweisungs-Widget wird über die `data-*`-Attribute des Script-Tags in `index.html` konfiguriert (`data-source-clinic`, Farben, Texte).

Nach Änderungen an `style.css` oder `app.js` die Versionsnummer (`?v=…`) in `index.html` hochzählen, damit Besucher nicht die alte Datei aus dem Cache bekommen.

## Aufbau

Statisches HTML, CSS und JavaScript ohne Build-Schritt. GitHub Pages veröffentlicht den Branch `main` direkt.

Fotos: [Unsplash](https://unsplash.com) (Unsplash-Lizenz).
