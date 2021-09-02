# Kapitel 2.1 #

## Tabellen ##

Dies ist das Markup einer simplen Tabelle:

```html
<table cellpadding="2" cellspacing="2" border="1">
    <tr>
        <td>Bezeichnung</td>
        <td>Ein</td>
        <td>Aus</td>
        <td>Total</td>
    </tr>

    <tr>
        <td>Übertrag Vormonat</td>
        <td>50.-</td>
        <td></td>
        <td>50.-</td>
    </tr>

    <tr>
        <td>Handyrechnung</td>
        <td></td>
        <td>25.-</td>
        <td>25.-</td>
    </tr>

    <tr>
        <td><strong>Total</strong></td>
        <td></td>
        <td></td>
        <td><strong>25.-</strong></td>
    </tr>
</table>
```

Kopieren Sie dieses in ein HTML File und öffnen Sie dieses im Browser um zu sehen wie die Tabelle aussieht.

Übelegen Sie Sich, welches Tag für was zuständig ist

## Tags ##

### `<table>` ###

Das `<table>` Tag startet eine Tabelle. Wichtig Eigenschaften des Tags sind:

- `border`: Rahmen der Tabelle
- `cellpadding`: Abstand vom Zelleninhalt zum Rahmen
- `cellspacing`: Abstand zwischen den einzelnen Zellen

### `<tr>` ###

Ein `<tr>` Tag stellt eine Zeile der Tabelle dar. Dieses Tag hat keine Eigenschaften die viel gebraucht werden.

### `<td>` ###

Das `<td>` Tag schlussendlich stellt eine Zelle der Tabelle dar. Wichtige Eigenschaften:

- `colspan`
- `rowspan`

### Weitere Tags ###

- `<th>`: Header-Zelle, wird fett dargestellt
- `<tbody>`, `<thead>` und `<tfoot>`: Inhalt, Header und Footer einer Tabelle. Diese werden verwendet damit Browser oder z.B. Screenreader die Tabelle korrekt
    interpretieren können.