function calculateFooting(){

let length = Number(document.getElementById("flength").value);
let width = Number(document.getElementById("fwidth").value);
let dia = Number(document.getElementById("dia").value);
let spacing = Number(document.getElementById("spacing").value);
let cover = Number(document.getElementById("cover").value);


// Effective dimensions in mm
let lengthMM = (length * 1000) - (2 * cover);
let widthMM = (width * 1000) - (2 * cover);


// Number of bars
let barsX = Math.floor(lengthMM / spacing) + 1;
let barsY = Math.floor(widthMM / spacing) + 1;


// Bar lengths
let totalLengthX = barsX * (width - (2 * cover/1000));
let totalLengthY = barsY * (length - (2 * cover/1000));

let totalSteelLength = totalLengthX + totalLengthY;


// Steel weight formula
let steelWeight = ((dia * dia) / 162) * totalSteelLength;


document.getElementById("result").innerHTML =

`
<h3>Footing Reinforcement Result</h3>

Bars Along X Direction:
<b>${barsX}</b>

<br><br>

Bars Along Y Direction:
<b>${barsY}</b>

<br><br>

Total Steel Length:
<b>${totalSteelLength.toFixed(2)} m</b>

<br><br>

Steel Weight:
<b>${steelWeight.toFixed(2)} kg</b>

`;

}
