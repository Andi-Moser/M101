# Kapitel 7.1 #

## Was ist Javascript? ##

Javascript ist die Prorammiersprache des Browsers. Mit ihr können Elemente auf einer Website verändert oder animiert werden
und auf Eingaben des Benutzers reagiert werden.

Ist eine Website ein Haus, so ist Javascript der Strom welcher das Licht zum leuchten bringt oder Fenster welche man auf und zu machen kann.
Alles was nicht statisch fixiert ist wird mit Javascript umgesetzt.

## Grundkonzepte von Javascript ##

### Der DOM Tree ###

Das geschriebene HTML wird im Browser zu einem Tree/Baum geparst. Dieser wird `DOM Tree` genannt, `DOM` steht für `Document Object Model`.
Ein `DOM` Element representiert ein HTML Tag mit all seinen Eigenschaften und Kindern (weitere `DOM Nodes`).

### Konzept 1: DOM auslesen ###

Um nun Inhalte auf einer Seite dynamisch zu machen muss in Javascript zuerst eine Referenz auf die Elemente geladen werden.
Dies geschieht mit folgender Funktion:

```javascript
// Einzelnes Element
const element = document.querySelector('#elementId');

// Mehrere Elemente
const elements = document.querySelectorAll('.elemente');
```

Dank der neuen `querySelector()` Methode können Elemente via einem CSS Selektor angesteuert werden, analog zu den Stylesheets.

### Konzept 2: DOM Manipulieren ###

Wenn im Javascript nun eine Referenz auf ein HTML Element geladen wurde, kann dieses nun manipuliert werden.

Das einfachste Beispiel ist es, Klassen hinzuzufügen oder zu entfernen:

```javascript
const element = document.querySelector('#elementId');

// Klasse hinzufügen
element.classList.add('klasse');

// Klasse entfernen
element.classList.remove('klasse');

// Klasse umschalten
element.classList.toggle('klasse');
```

Ebenfalls lässt sich so der Inhalt eines Elementes ändern:
```javascript
const element = document.querySelector('#elementId');

// Text setzen
element.innerText = 'Mein Text'

// HTML setzen
element.innerHTML = '<strong>Mein Text</strong>';

```

> Wie Sie sehen, lässt sich mit `innerHTML` auch komplett neues HTML einfügen. Dieses wird gleich nach dem setzen ebenfalls geparst und entsprechend im Browser dargestellt.

> Setzen Sie mit `.innerText = '<strong>Text</strong>' so wird dieser Text genau so im Browser ausgegeben und nicht als HTML Text interpretiert!

### Konzept 3: Auf Benutzereingaben reagieren ###

Nun wissen Sie, wie Sie HTML Inhalte mit Javascript manipulieren können. Dies macht aber an sich wenig Sinn wenn wir nicht auf Eingaben des Benutzers reagieren können.

Dafür verwendet HTML/Javascript ein Event System. Wenn, z.B. auf ein Element (**irgendein** Element) geklickt wird, sendet dieses Element ein `click-Event`.
Mit Javascript können wir nun auf einem Element auf Events 'horchen'. Dafür verwenden wir einen `eventListener` welcher eine von uns definierte Funktion aufruft,
sobald dieses Element angeklickt wird.

```javascript
const element = document.querySelector('#elementId');

element.addEventListener('click', function() {
    element.classList.toggle('klasse');
});
```