function calculateColumn(){

let length = Number(document.getElementById("clength").value);
let width = Number(document.getElementById("cwidth").value);
let height = Number(document.getElementById("height").value);

let mainDia = Number(document.getElementById("mainDia").value);
let mainBars = Number(document.getElementById("mainBars").value);

let stDia = Number(document.getElementById("stDia").value);
let spacing = Number(document.getElementById("spacing").value);

let cover = Number(document.getElementById("cover").value);


// Main steel calculation
let mainLength = height * mainBars;

let mainSteel = ((mainDia * mainDia) / 162) * mainLength;


// Number of stirrups
let stirrups = Math.ceil((height * 1000) / spacing) + 1;


// Approximate stirrup cutting length
let stirrupLength =
((length - 2*cover)/1000 + (width - 2*cover)/1000) * 2 + 0.20;


// Total stirrup length
let totalStirrupLength = stirrups * stirrupLength;


// Stirrup steel weight
let stirrupSteel = ((stDia * stDia) / 162) * totalStirrupLength;


// Total steel
let totalSteel = mainSteel + stirrupSteel;


document.getElementById("result").innerHTML =

`
<h3>Column Reinforcement Result</h3>

Main Steel:
<b>${mainSteel.toFixed(2)} kg</b>

<br><br>

Number of Stirrups:
<b>${stirrups}</b>

<br><br>

Stirrup Steel:
<b>${stirrupSteel.toFixed(2)} kg</b>

<br><br>

Total Column Steel:
<b>${totalSteel.toFixed(2)} kg</b>

`;

}
