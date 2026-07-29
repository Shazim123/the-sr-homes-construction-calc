function calculateSteel(){

let diameter = Number(document.getElementById("dia").value);
let length = Number(document.getElementById("length").value);
let qty = Number(document.getElementById("qty").value);

// Steel weight formula: D²/162 × Length
let totalLength = length * qty;

let weight = ((diameter * diameter) / 162) * totalLength;

let tonnes = weight / 1000;

document.getElementById("result").innerHTML =

`
<h3>Steel Calculation Result</h3>

Total Length:
<b>${totalLength.toFixed(2)} m</b>

<br><br>

Steel Weight:
<b>${weight.toFixed(2)} kg</b>

<br><br>

Steel Quantity:
<b>${tonnes.toFixed(3)} tonnes</b>

`;

}
