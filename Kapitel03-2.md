# Kapitel 3.2 #

## Das Box Modell ##

Das Box Modell beschreibt, wie HTML Elemente in CSS dargestellt werden. Es ist ein essenzielles Modell welches beim
Gestalten von Seiten immer im Bewusstsein sein muss.

### Block vs. Inline vs. Inline Block ###

Es gibt grundsätzlich drei verschiedene Darstellungsmodi welche ein Element haben kann.

#### Inline Elemente ####

*Inline Elemente* sind zum verstehen die Schwierigsten. Jeder Text welcher auf einer Seite angezeigt wird ist inline.
Dies bedeutet, dass er keinen "Rahmen" bzw. keine rechteckige Box um sich hat.

![Inline Element](https://github.com/Andi-Moser/M101/raw/main/images/Kapitel03-2/inline.png)

Die meisten Text-Elemente (`span`, `strong`, `a`) sind standardmässig schon inline. Ansonsten können Elemente mit der 
CSS Eigenschaft `display: inline;` auf inline gestellt werden.

#### Block Elemente ####

*Block Elemente* sind die einfachsten zum verstehen. Sie besitzen drei wichtige Eigenschaften: Sie sind (wenn nichts anderes angegeben)
immer 100% breit, belegen immer eine rechteckige Box und alles was nach ihnen auf der Seite kommt, wird auf einer neuen Zeile dargestellt.

Im Bild sehen Sie dasselbe Beispiel wie oben, nur dass hier das `<strong>` Element per CSS die Eigenschaft `display: block` erhalten hat.

![Block Element](https://github.com/Andi-Moser/M101/raw/main/images/Kapitel03-2/block.png)

Wie Sie sehen, belegt dieses Element nun die ganze Breite und bricht den Text so um. Dies machen alle Block Elemente. Sie können zwar mit
der CSS Eigenschaft die Breite (`width: 50%`) verkleinern, darauffolgende Elemente werden dennoch auf der nächsten Zeile dargestellt:

![Block mit Breite Element](https://github.com/Andi-Moser/M101/raw/main/images/Kapitel03-2/block-width.png)

#### Inline-Block ####

*Inline-Block* Elemente gibt es noch nicht solange. Sie wurden hinzugefügt um auch Elemente welche in einem Fliesstext vorkommen
in eine rechteckige Box zu "zwängen" oder um mehrere Block Elemente nacheinander zu reihen.

In folgendem Beispiel hat das `strong` Tag noch die Eigenschaft `display: inline-block;` erhalten:

![Block mit Breite Element](https://github.com/Andi-Moser/M101/raw/main/images/Kapitel03-2/inline-block.png)

Wie Sie sehen bricht der Text am Anfang des Elements zwar um, geht aber am Ende vom fetten Text wieder auf derselben Zeile weiter.

#### Übung ####

Kopieren Sie sich folgendes Snippet in ein HTML File und schauen Sie, wie die Buttons sich verhalten wenn sie für die `display` Eigenschaft
unterschiedliche Werte einfügen.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Hallo INF20S</title>
    <style type="text/css">
        button {
            display: block;

            padding: 10px;
            border: 1px solid red;
            margin: 10px;

            width: 150px;

            background-color: #eee;
        }
    </style>
</head>
<body>
    <button>Button 1</button>
    <button>Button 2</button>
    <button>Button 3</button>
    <button>Button 4</button>
    <button>Button 5</button>
</body>
</html>
```

### Was ist nun das Box Modell? ###

Nun haben wir gelernt was für Darstellungs-Modi ein HTML Element haben kann.

Dies ist wichtig, denn nur `block` oder `inline-block` Elemente verfügen über ein Box-Modell!

> Wieder einmal hilft uns HTML etwas zu sehr. Wenn Sie ein inline-Element mit gewissen Attributen versehen, erhält es automatisch auch ein Box-Modell.
> Dies kann gefährlich sein: Man denkt, es sollte alles so funktionieren wie man will, aber da es dennoch kein richtiges `block` Element ist, werden gewisse
> Techniken dennoch nicht funktionieren.

Kurzerhand gesagt: Alle Elemente welche ein Box-Modell besitzen, verfügen über eine rechteckige Box in welcher sie dargestellt werden.

### Wofür braucht man das Box-Modell? ###

Im Beispiel oben (Kapitel Übung) haben Sie bereits gesehen wofür man das Box Modell braucht:
Den *Rahmen*, das *Padding* und das *Margin*.

Beim *Rahmen* ist klar was gemeint ist: der farbige Strich rund um die Box. Das *Padding* bezeichnet nun den Abstand vom **Rahmen bis zum Inhalt** des Elements.
Das *Margin* hingegen legt den Abstand vom **Rahmen bis zum nächsten anderen Element** fest. Ebenfalls sehen wir, dass sich die Hintergrundfarbe
eines Elementes nur bis zum Rahmen erstreckt.

> Erinnern Sie Sich an die Eigenschaften `cellpadding` und `cellspacing` von Tabellen? Zumindest dort kam der Begriff des `padding` schonmal vor!

Das Box Modell eines jeden Elementes lässt sich im Inspector anzeigen. Wenn Sie ein Element angewählt haben, können Sie im rechten Tab auf "Computed" wechseln und sehen
dann das Box Modell grafisch dargestellt:

![Box Modell](https://github.com/Andi-Moser/M101/raw/main/images/Kapitel03-2/inspector.png)

Prägen Sie Sich dieses Modell ein! Sie werden es brauchen wenn Sie Sich beim Gesalten einer Seite nicht sicher sind, von wo ein Abstand
zwischen zwei Elementen herkommt!