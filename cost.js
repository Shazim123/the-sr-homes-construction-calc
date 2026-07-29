function calculateCost(){

let cement = Number(document.getElementById("cement").value);
let cementRate = Number(document.getElementById("cementRate").value);

let steel = Number(document.getElementById("steel").value);
let steelRate = Number(document.getElementById("steelRate").value);

let sand = Number(document.getElementById("sand").value);
let sandRate = Number(document.getElementById("sandRate").value);

let aggregate = Number(document.getElementById("aggregate").value);
let aggregateRate = Number(document.getElementById("aggregateRate").value);

let labour = Number(document.getElementById("labour").value);


// Cost calculation

let cementCost = cement * cementRate;
let steelCost = steel * steelRate;
let sandCost = sand * sandRate;
let aggregateCost = aggregate * aggregateRate;

let total = cementCost + steelCost + sandCost + aggregateCost + labour;


document.getElementById("result").innerHTML =

`
<h3>Cost Estimate</h3>

Cement Cost:
<b>₹ ${cementCost.toFixed(2)}</b>

<br><br>

Steel Cost:
<b>₹ ${steelCost.toFixed(2)}</b>

<br><br>

Sand Cost:
<b>₹ ${sandCost.toFixed(2)}</b>

<br><br>

Aggregate Cost:
<b>₹ ${aggregateCost.toFixed(2)}</b>

<br><br>

Labour Cost:
<b>₹ ${labour.toFixed(2)}</b>

<hr>

Total Estimated Cost:
<b>₹ ${total.toFixed(2)}</b>

`;

}
