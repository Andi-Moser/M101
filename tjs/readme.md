# t.js #

Ein simples Templating Javascript.

## Installation ##

1. Download [der Datei t.js](https://github.com/Andi-Moser/M101/raw/main/tjs/t.js) in den Projektordner
1. Einbinden der Datei mit `<script type='text/javascript' src='t.js'></script>` **direkt vor** dem `</body>` Tag

## Verwendung ##

1. Erstellen eines DIVs dessen Inhalt platziert werden soll.
1. Hinzufügen des `data-t`-Attributs: `<div data-t='header'></div>`
1. Das erstellte Div erhält nun den Inhalt der Datei `header.html`.

## Beachten ##

- Alle Dateien werden aus dem Ordner in welchem sich das Ursprungs-HTML-File findet geladen (keine Unterordner!)
- In zusätzlich geladenenen HTML Files ('Snippets') können weitere `data-t` Elemente vorhanden sein
- Es ist möglich rekursive Abhängigkeiten zu erstellen. In diesem Falle stürzt der Browser irgendwann ab.