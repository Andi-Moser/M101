# Kapitel 8.1 #

## Eine Website live schalten ##

Im letzten Block dieses Kurses widmen wir uns dem Thema, wie eine Website live geschalten wird.

Dieser Prozess ist sehr vielfältig - besonders bei Seiten mit einem Backend welches in PHP, Javascript oder einer anderen Programmiersprache
geschrieben ist.

Die grundsätzliche Funktionalität, Daten auf einen Server zu laden und mit einer URL zu Verknüpfen bleibt jedoch dieselbe.

### Wie sieht es auf einem Server aus? ###

Ein Server ist ein ganz normaler Computer. Wenn Sie mit dem Live Server Plugin von VS Code gearbeitet haben, haben Sie auf Ihrem Computer
selbst auch einen Server installiert.

Einfache statische HTML Seiten lassen sich am besten mit einem Apache Webserver ins Internet bringen. Der Apache Webserver kann von Haus aus
normale HTML Dateien auf dem Server lesen und an den Browser senden.

### Ablauf ###

Der Ablauf wenn eine statische Seite aufgerufen wird, sieht so aus:

1. Der Benutzer tippt www.offline.ch in den Browser ein
1. Der Client (= Der Computer des Benutzers) sucht die IP Adresse von www.offline.ch - in diesem Falle wäre das `149.126.6.110`
1. Der Browser sendet an die IP Adresse eine sog. HTTP Anfrage: "Hey, `149.126.6.110`, gib mir bitte die Website unter der URL `www.offline.ch`
1. Der Server nimmt diese Anfrage entgegen und schaut nach, ob er diese Domain kennt.
1. Kennt der Server die Domain, so findet er raus welches Verzeichniss für diese Domain als `document root` konfiguriert ist (z.B. `/var/www/offline.ch/public`)
1. Der Server sucht nun in diesem Ordner nach dem Pfad welcher der Browser angefragt hat. In diesem Beispiel wäre das `/` (bzw. kein Pfad)
1. Ist kein Pfad vorhanden, so hat der Server eine Liste von Standarddateien welche er stattdessen sucht.
1. Der Server liest nun die Datei an dem geforderten Pfad und sendet sie dem Browser zurück
1. Der Browser stellt das HTML Dokument dar

### Domains und `document root` ###

Dies ist die eigentliche Kernaufgabe des Servers - das Mapping zwischen Domain und `document root`.

So hat der Server beispielsweise eine Liste gespeichert mit allen Domains welche auf ihm gehostet sind:

- www.offline.ch -> `/var/www/offline.ch/public`
- offline.ch -> `/var/www/offline.ch/public`
- www.infoterminal.ch -> `/var/www/infoterminal.ch/public`
- infoterminal.ch -> `/var/www/infoterminal.ch/public`
- demo.infoterminal.ch -> `/var/www/infoterminal.ch/demo`

> Wie Sie sehen, sind immer 2 Einträge pro Domain vorhanden. Einen mit und einen ohne `www`. Dies sind grundsätzlich zwei unterschiedliche Domains
> und müssen separat konfiguriert werden. Wenn Sie also das nächste Mal bei einer Seite ohne `www` einen Fehler bekommen, versuchen Sie die Domain
> mit `www` aufzurufen - Amateurhoster vergessen dies oft und konfigurieren nur eine Domain.

## Projekt vorbereiten ##

Damit wir unser Projekt nun korrekt hochladen und mit einer Domain verknüpfen müssen, gibt es noch eine Vorbereitung die wir treffen müssen.
Diese müssen zwar nicht zwingend durchgeführt werden (bzw. nicht alle), gehören jedoch zu einer Art 'Best Practice`.

> Gewisse Lernende von Ihnen haben dies bereits korrekt so aufgebaut, alle anderen sollten nun die Website so umbauen und prüfen ob noch alles funktioniert.

- Startseite muss `index.html` heissen - Diese Datei wird geladen wenn kein Pfad angegeben ist.
- Alle Dateinamen (und die Verlinkungen im HTML) müssen klein, aneinander und ohne Sonderzeichen geschrieben werden.
- Alle HTML Dateien sollten sich auf derselben Ebene befinden.
- CSS, Javascript und Bilddateien sollten in einem Unterordner liegen welcher entsprechend benannt ist.

Hier ein Demoaufbau eines Ordners:

- index.html
- ueberuns.html
- produkte.html
- kontakt.html
- bilder/
    - bilder/header.jpg
    - bilder/camille.jpg
    - ...
- css/
    - css/style.css
- js/
    - js/scripts.js

Wenn Ihre Website so aufgebaut ist, werden wir sie gemeinsam auf einen Server hochladen und somit ins Internet stellen.