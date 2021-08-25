# Kapitel 1.3 #

## HTML Syntax ##

Schauen Sie Sich folgendes kurze HTML Beispiel an:

```html
<span class="italic" id="note_1">
    <!-- Weiterer Inhalt -->
</span>
```

HTML setzt sich aus sogenannten Tags zusammen. Ein Tag ist immer durch die kleiner als/grösser als (`<`, `>`) Zeichen zu erkennen.
Direkt nach dem `<` Zeichen folgt der Name bzw. der Typ des Tags (im Beispiel oben `span`). Danach folgen beliebig viele sog. Attribute
welche diesem Tag zusätzliche Eigenschaften hinzufügen.

Nach dem Tag folgt der Inhalt. Dieser geht soweit bis das Tag wieder geschlossen wird. Schliessende Tags haben nach dem `<` Zeichen noch ein Slash (`/`, siehe `</span>`).
Es muss jeweils nur der Name des Tags im Abschliessenden angegeben werden, Attribute müssen nicht mehr wiederholt werden.

### Verschachtelung ###

Tags können verschachtelt werden. In einem Tag können so beliebig viele weitere Tags eingefügt werden:

```html
<div class="content">
    <p>Textinhalt</p>
    <p class="highlight">Textinhalt</p>
    <p>Textinhalt</p>
</div>
```

### Kommentare ###

Kommentare in HTML können wie folgt eingefügt werden. Es wird nicht zwischen einzeligen oder mehrzeiligen Kommentare unterschieden.

```html
<!-- Dies ist ein Kommentar -->

<!--
    Dies ist ein
    mehrzeiliger Kommentar
-->
```

### Gleichnamige Tags ###

Der HTML Parser baut aus diesem HTML Code dann einen Baum auf. Aufgrund dessen können auch gleichnamige Tags verschachtelt werden:

```html
<div class="main">
    <div>Hier ist Inhalt</div>
    <div>Und hier ist Inhalt</div>
</div>
```

### Abstände und Leerzeichen ###

Desweiteren sind HTML Abstände (Leerzeichen) und Zeilenumbrüche egal. Folgende drei Snippets sind für den HTML Parser komplett identisch:

```html
<p>
    Hier ist ein Textabsatz
    mit <strong>einem fetten Text</strong>
    und noch etwas mehr Inhalt.
</p>
```

```html
<p>
Hier ist ein Textabsatz
mit <strong>einem fetten Text</strong>
und noch etwas mehr Inhalt.
</p>
```

```html
<p>Hier ist ein Textabsatz mit <strong>einem fetten Text</strong> und noch etwas mehr Inhalt.</p>
```

> Hinweis: Auch wenn alle oberen Beispiele für den HTML Parser gleichwertig sind, so sind sie für das menschliche Auge unterschiedlich gut zu lesen.
> 
> HTML Code sollte immer korrekt eingerückt werden damit man sich auch in einem grossen Dokument noch gut zurecht findet.