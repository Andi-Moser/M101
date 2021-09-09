# Kapitel 3.1 #

## CSS ##

*Cascading Style Sheets* werden, wie bereits erwähnt, zum Gestalten einer Website verwendet.

Am Einfachsten schreibt man das CSS inline in den HTML Code:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Seitentitel</title>
        <style type="text/css">
            /* CSS hier einfügen */
        </style>
    </head>
    <body>
        
        <!-- Hier wird der Inhalt eingefügt -->
    
    </body>
</html>
```

> Diese Technik funktioniert für kleine Seiten. Sie macht aber auch das HTML File unnötig gross
> was einerseits zu längeren Ladezeiten und zu mehr Aufwand bei Anpassungen führt.
> 
> Wir werden später lernen wie wir ein separates CSS File aus dem HTML Dokument laden können.

## Die CSS Syntax ##

CSS definiert mehrere Regeln.

Ein einfaches Beispiel von einer CSS Regel sieht wie folgt aus:

```css
div.text, p {
    color: red;
    font-size: 20px;
}
```

Diese Regel ist aus folgenden zwei Elementen aufgebaut:

**Dem Selektor**: `div.text, p`

Der Selektor gibt an, welche HTML Elemente (Tags) von dieser Regel betroffen sind.

**Den Properties**: `color: red;`, `font-size: 20px;`

Die Properties geben an, wie die betroffenen HTML Elemente dargestellt werden sollen.

Die Properties haben in den meisten Fällen "sprechende" Namen. `font-size: 20px;` gibt an
dass die Schriftgrösse 20px betragen soll.

### Selektoren ###

Ein Selektor (für uns vorerst) aus folgenden drei Elementen:

- Tag Namen
- Klassenname
- ID

Mit diesen Elementen können schonmal 90% aller Fälle abgedeckt werden. Am Besten
lassen sich diese Anhand von Beispielen erklären.

Folgende CSS Regeln treffen immer auf alle folgenden HTML Elemente zu:

```html
<style type="text/css">
    h1 {
        font-weight: bold;
    }
</style>
<h1>Fetter Titel</h1>
```

```html
<style type="text/css">
    .bold {
        font-weight: bold;
    }
</style>
<h1 class="bold">Fetter Titel</h1>
<p class="bold">Fetter Text</p>
```

```html
<style type="text/css">
    #titel {
        font-weight: bold;
    }
</style>
<h1 id="titel">Fetter Titel</h1>
```

### Verschachtelung von Selektoren ###

Wenn mehrere Selektoren durch ein Leerzeichen getrennt sind, gelten diese als verschachtelt.

So kann quasi die Baumform vom HTML Dokument nachgebaut werden sodass Elemente eindeutiger angesprochen werden können.

Hierzu wieder ein paar Beispiele:
```html
<style type="text/css">
    p h2 {
        font-weight: bold;
    }
</style>
<h2>NICHT von der Regel betroffen</h2>
<p>
    <h2>von der Regel betroffen</h2>
</p>
```
```html
<style type="text/css">
    .alert h2 {
        font-weight: bold;
    }
</style>
<p>
    <h2>NICHT von der Regel betroffen</h2>
</p>
<p class="alert">
    <h2>von der Regel betroffen</h2>
</p>
```

### Kombinieren von Selektoren ###

Selektoren können auch kombiniert werden, dies geschieht mit einem `,`.

So ist der Selektor `div.text, p` also eigentlich aus zwei Selektoren aufgebaut.
Die dadurch angegebene Regel bezieht sich auf alle `div` Elemente mit der `text` Klasse **UND**
auf alle `p` Elemente.