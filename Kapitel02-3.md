# Kapitel 2.3 #

## Bilder in HTML ##

Bilder sind essentiell für Websiten. Da sie jedoch auch sehr gross sind/sein können und
von Maschinen wie Google oder Screenreadern nicht "verstanden" werden können, gibt es einige
Punkte zu beachten.

## Das `img` Tag ##

Für ein klassisches Bild wird das `img` Tag verwendet:

```html
<img src="/pfad/zum/bild.jpg" alt="Beschreibung des Bildes" />
```

### Pfad zum Bild (`src`) ###

Der Pfad zum Bild (`src`, für "source") muss bei jedem Bild zwingend vorhanden sein.
Beim Pfad wird zwischen *absolut* und *relativ* unterschieden:

**Absolute Pfade**

Ein absoluter Pfad beginnt immer mit einem `/`. Dieser gibt an, dass der Browser das Bild
vom Stammverzeichniss (Root Directory) des Webservers laden will.

Hier ein Beispiel dafür:

*Dateipfad: www.bbzw.ch/informationen/byob.html*
```html
<img src="/img/byob/intro.jpg" alt="BYOB Informationsübersicht" />
```

Dieser Code lädt das Bild *absolut*, das heisst der Pfad der HTML Datei (*/informationen/byob.html*)
wird ignoriert. Der ganze Bildpfad wird direkt an die Domain (*www.bbzw.ch*) gehängt, sodass
folgendes Bild geladen wird:

*www.bbzw.ch/img/byob/intro.jpg*

**Relative Pfade**

Ein relativer Pfad gibt den Pfad vom Bild *im Verhältniss zum geöffneten Dokument* an.
Auch hier ein Beispiel:

*Dateipfad: www.bbzw.ch/informationen/byob.html*
```html
<img src="images/intro.jpg" alt="BYOB Informationsübersicht" />
```

Das Dokument *byob.html* liegt im Ordner */informationen/*. Das heisst, dass der Bildpfad
ebenfalls in diesem Ordner gesucht wird. Es entsteht also folgender Pfad:

*www.bbzw.ch/informationen/images/intro.jpg*

> Wenn man sich unsicher ist, weshalb ein Bild nicht geladen wird kann einem der Inspector helfen.
> Wenn man dort über einen Bildpfad fährt zeigt er den effektiv geladenen Pfad zum Bild an.

#### `..`-Ordner ####

Der "Ordner" namens `..` ist ein spezieller Ordner. Er verweist auf den jeweils eine Ebene
höher gelegenen Ordner. Wenn so z.B. das HTML Dokument an einem "tieferen" Ort als die Bilder
liegt, wird dieser Ordner verwendet:

Pfad des HTML Dokuments: */informationen/byob/intro.html*
Pfad des Bild: */images/byob/intro.jpg*

Relative Pfadangabe (im `src` Attribut:): *../../images/byob/intro.jpg*

> Mit `../../` wird zwei Ordner "zurück" gewechselt. Dann befindet man sich also im Stammverzeichniss.
> Von dort aus wird dann der Pfad zum Bild angegeben.

### Das `alt` Attribut ###

Wie erwähnt können Suchmaschinen oder Screenreader nur bedingt den Inhalt eines Bildes erkennen.
Deshalb ist es gängig, einem Bild das `alt` Attribut hinzuzufügen.

Im `alt` Attribut (kurz für *alternative*) wird ein kurzer Beschreibungstext des Bildes angegeben.
Dieser Text wird dann von Screenreadern gelesen oder von Google für die Indexierung verwendet.

> Der Alt-Text wird auch dargestellt, wenn das Bild nicht geladen werden kann (z.B. weil ein falscher Pfad)
> angegeben wurde. Dies sollte bei einer sauber programmierten Website jedoch nie der Fall sein.

## Übungen ##

Ergänzen Sie die fehlenden Felder:

**Aufgabe 1**

HTML Pfad: *www.bbzw.ch/abteilungen/informatik/lehrpersonen.html*

Bild Pfad: *www.bbzw.ch/bilder/informatik/uebersicht.jpg*

Relativer Pfad zum Bild:

Absoluter Pfad zum Bild:

**Aufgabe 2**

HTML Pfad: *www.bbzw.ch/index.html*

Bild Pfad: *www.bbzw.ch/bilder/startseite/intro.jpg*

Relativer Pfad zum Bild:

Absoluter Pfad zum Bild:

**Aufgabe 3**

HTML Pfad: *www.bbzw.ch/abteilungen/informatik/stundenplaene/sj20-21.html*

Bild Pfad: 

Relativer Pfad zum Bild:

Absoluter Pfad zum Bild: */bilder/allgemein/stundenplan.jpg*

**Aufgabe 4**

HTML Pfad: *www.bbzw.ch/abteilungen/informatik.html*

Bild Pfad:

Relativer Pfad zum Bild: *../bilder/abteilungen/informatik.jpg*

Absoluter Pfad zum Bild:
