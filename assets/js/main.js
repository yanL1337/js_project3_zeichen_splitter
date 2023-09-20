const trennen = () => {
  const zeichenKette = document.querySelector("#firstChain").value;
  const zeichenTrennung = document.querySelector("#secondChain").value;
  const radioAuswahl = document.querySelector(
    'input[name="abfrage"]:checked'
  ).value;

  let vorherString, nachherString;

  if (radioAuswahl === "vorher") {
    nachherString = zeichenKette.slice(zeichenKette.indexOf(zeichenTrennung));
    vorherString = zeichenKette.slice(
      -Math.abs(zeichenKette.length),
      zeichenKette.indexOf(zeichenTrennung)
    );
  } else {
    nachherString = zeichenKette.slice(
      zeichenKette.indexOf(zeichenTrennung) + zeichenTrennung.length
    );
    vorherString = zeichenKette.slice(
      -Math.abs(zeichenKette.length),
      zeichenKette.indexOf(zeichenTrennung) + zeichenTrennung.length
    );
  }

  document.querySelector("#beforeTrennung").innerHTML = vorherString;
  document.querySelector("#afterTrennung").innerHTML = nachherString;
};
