function calculateBeam(){

let width = Number(document.getElementById("bwidth").value);
let depth = Number(document.getElementById("bdepth").value);
let length = Number(document.getElementById("blength").value);

let bottomDia = Number(document.getElementById("bottomDia").value);
let bottomBars = Number(document.getElementById("bottomBars").value);

let topDia = Number(document.getElementById("topDia").value);
let topBars = Number(document.getElementById("topBars").value);

let stDia = Number(document.getElementById("stDia").value);
let spacing = Number(document.getElementById("spacing").value);

let cover = Number(document.getElementById("cover").value);


// Main reinforcement

let bottomLength = length * bottomBars;
let bottomSteel = ((bottomDia * bottomDia) / 162) * bottomLength;


let topLength = length * topBars;
let topSteel = ((topDia * topDia) / 162) * topLength;


// Stirrup calculation

let stirrups = Math.ceil((length * 1000) / spacing) + 1;


let stirrupCutLength =
(
((width - 2*cover) / 1000) +
((depth - 2*cover) / 1000)
) * 2 + 0.20;


let totalStirrupLength = stirrups * stirrupCutLength;


let stirrupSteel =
((stDia * stDia) / 162) * totalStirrupLength;


// Total steel

let totalSteel = bottomSteel + topSteel + stirrupSteel;


document.getElementById("result").innerHTML =

`
<h3>Beam Reinforcement Result</h3>

Bottom Steel:
<b>${bottomSteel.toFixed(2)} kg</b>

<br><br>

Top Steel:
<b>${topSteel.toFixed(2)} kg</b>

<br><br>

Number of Stirrups:
<b>${stirrups}</b>

<br><br>

Stirrup Steel:
<b>${stirrupSteel.toFixed(2)} kg</b>

<br><br>

Total Beam Steel:
<b>${totalSteel.toFixed(2)} kg</b>

`;

}
