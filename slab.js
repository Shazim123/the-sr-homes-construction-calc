function calculateSlab(){

let length = Number(document.getElementById("slength").value);
let width = Number(document.getElementById("swidth").value);

let mainDia = Number(document.getElementById("mainDia").value);
let mainSpacing = Number(document.getElementById("mainSpacing").value);

let distDia = Number(document.getElementById("distDia").value);
let distSpacing = Number(document.getElementById("distSpacing").value);

let cover = Number(document.getElementById("cover").value);


// Effective dimensions
let effectiveLength = (length * 1000) - (2 * cover);
let effectiveWidth = (width * 1000) - (2 * cover);


// Main bars
let mainBars = Math.floor(effectiveWidth / mainSpacing) + 1;
let mainBarLength = length;

let totalMainLength = mainBars * mainBarLength;

let mainSteel = ((mainDia * mainDia) / 162) * totalMainLength;


// Distribution bars
let distBars = Math.floor(effectiveLength / distSpacing) + 1;
let distBarLength = width;

let totalDistLength = distBars * distBarLength;

let distSteel = ((distDia * distDia) / 162) * totalDistLength;


// Total steel

let totalSteel = mainSteel + distSteel;


document.getElementById("result").innerHTML =

`
<h3>Slab Reinforcement Result</h3>

Main Bars:
<b>${mainBars}</b>

<br><br>

Distribution Bars:
<b>${distBars}</b>

<br><br>

Main Steel:
<b>${mainSteel.toFixed(2)} kg</b>

<br><br>

Distribution Steel:
<b>${distSteel.toFixed(2)} kg</b>

<br><br>

Total Slab Steel:
<b>${totalSteel.toFixed(2)} kg</b>

`;

}
