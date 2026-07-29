function calculateBOQ(){

let concrete = Number(document.getElementById("concrete").value);
let concreteRate = Number(document.getElementById("concreteRate").value);

let steel = Number(document.getElementById("steel").value);
let steelRate = Number(document.getElementById("steelRate").value);

let brick = Number(document.getElementById("brick").value);
let brickRate = Number(document.getElementById("brickRate").value);

let plaster = Number(document.getElementById("plaster").value);
let plasterRate = Number(document.getElementById("plasterRate").value);

let labour = Number(document.getElementById("labour").value);


// Cost calculation

let concreteCost = concrete * concreteRate;

let steelCost = steel * steelRate;

let brickCost = brick * brickRate;

let plasterCost = plaster * plasterRate;


let totalCost =
concreteCost +
steelCost +
brickCost +
plasterCost +
labour;


// Display result

document.getElementById("result").innerHTML =

`

<h3>BOQ Summary</h3>

Concrete Cost:
<b>₹ ${concreteCost.toFixed(2)}</b>

<br><br>

Steel Cost:
<b>₹ ${steelCost.toFixed(2)}</b>

<br><br>

Brickwork Cost:
<b>₹ ${brickCost.toFixed(2)}</b>

<br><br>

Plaster Cost:
<b>₹ ${plasterCost.toFixed(2)}</b>

<br><br>

Labour Cost:
<b>₹ ${labour.toFixed(2)}</b>

<hr>

Total Project Cost:
<b>₹ ${totalCost.toFixed(2)}</b>

`;

}
