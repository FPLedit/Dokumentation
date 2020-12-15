---
headless: true
nooffline: true
_build:
    render: false
---

## Züge kopieren

Züge eines Fahrplans können auch kopiert werden. Dazu reicht ein Klick auf `Zug kopieren`. Der Name des neuen Zuges muss angegeben werden. Der Zug wird um den angegeben Takt (in Minuten) verschoben. Wenn `Erweiterte Attribute übernehmen` ausgewählt ist, werden auch die Angaben zum Bildfahrplan zum Zug aus jTrainGraph mit übernommen.

![Zug kopieren](../kopierfenster.png)

## Züge verschieben

Um einen Zug zeitlich zu verschieben, dient ebenfalls die Funktion `Zug kopieren`, hier muss nur die entsprechende Option ausgewählt und eine zeitliche Verschiebung in Minuten angegeben werden.

![Zug verschieben](../verschiebefenster.png)

## Züge verlinken

Neben dem Kopieren gibt es noch die Möglichkeit, Züge zu Verlinken. Jede Änderung des Hauptzuges ändert automatisch alle verlinkten Züge mit, ein gesondertes Bearbeiten dieser ist auch nicht mehr möglich.

Züge können ebenfalls unter `Züge kopieren` verlinkt werden, in dem die entsprechende Option ausgewählt wird. Anschließend kann die Verschiebung des ersten Zuges und die zeitliche Verschiebung zwischen den Zügen angegeben werden. Die Bennenung von verlinkten Zügen kann automatisch aus einer Basiszugnummer und einer Zugnummern-Änderung errechnet werden; alternativ kann die Benennung auch vollständig manuell erfolgen.

In der Zugliste werden verlinkte Züge mit einem führenden `L` in der ersten Tabellenspalte kenntlich gemacht und können nicht bearbeitet werden. 

![Zug verlinken](../linkfenster.png)

Im Masterzug können die Verlinkten Züge bearbeitet oder auch wieder entfernt werden. Die Eigenschaften aller verlinkten Züge können beim zugehörigen Hauptzug im Zugeditor geändert werden; ebenso können dort die beim Anlegen des Links angegebenen Daten geändert werden:

<!-- TODO: grafik -->
