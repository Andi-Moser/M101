# Kapitel 2.4 #

## Links ##

Links sind wohl **das** Feature welches das Web ausmacht. Klickt ein Benutzer auf einen
Link (Hyperlink) lädt der Browser automatisch die neue Seite.

## Das `a` Tag ##

Links werden mit dem `a` Tag erstellt:

```html
<a href="/neueseite.html" target="_blank">Angezeigter Text</a>
```

### `href` Attribut ###

Im `href` Attribut gibt man den Pfad zum neuen Dokument an. Es befolgt dieselben Regeln
von *absoluten* und *relativen* Pfaden wie Bilder, allerdings mit einer weiteren Ebene:

Wenn man von einer Domain (z.B. `www.bbzw.ch`) auf eine andere (z.B. `www.sluz.ch`) verlinken
will, muss man zwingend noch das Protokoll (meistens `https://`) vorne hinstellen:

Korrekt: `<a href="https://www.sluz.ch/index.html">`

Falsch: `<a href="www.sluz.ch/index.html">`

Falsch: `<a href="sluz.ch/index.html">`

Falsch: `<a href="http:www.sluz.ch/index.html">`

> Ebenfalls korrekt ist folgende Schreibweise: `<a href="//www.sluz.ch/index.html">`
> 
> Diese Schreibweise übernimmt das Protokoll (HTTP oder HTTPS) von der aktuellen Seite. Diese Schreibweise
> ist besonders im Gebrauch wenn die gleiche Seite einmal auf HTTP und einmal auf HTTPS läuft (z.B. in einer Testumgebung).

### `target` Attribut ###

Das Target Attribut spezifiziert, in welchem Fenster oder Frame ein Link geöffnet wird. Dies war in einer Zeit wichtig,
in welcher Websiten aus mehreren Frames aufgebaut waren (Auf einer Seite waren mehrere sog. Frames eingebaut).

Heutzutage sind hauptsächlich zwei Werte relevant:

*Link in neuem Fenster öffnen*
```html
<a href="https://www.sluz.ch/index.html" target="_blank">
```

*Link im selben Fenster öffnen*
```html
<a href="https://www.sluz.ch/index.html" target="_self">
```
> Wenn man das Attribut weglässt, wird der Link im selben Fenster geöffnet.