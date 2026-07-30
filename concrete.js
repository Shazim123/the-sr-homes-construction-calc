function calculateConcrete(){

let L = Number(document.getElementById("length").value);
let W = Number(document.getElementById("width").value);
let D = Number(document.getElementById("depth").value);
let Q = Number(document.getElementById("qty").value);


if(L <= 0 || W <= 0 || D <= 0 || Q <= 0){

document.getElementById("result").innerHTML =

`
<h3>Please enter valid values</h3>
`;

return;

}


let volume = L * W * D * Q;


// Approximate nominal mix calculation
// 1 m³ concrete ≈ 7.5 cement bags
let cement = volume * 7.5;

let sand = volume * 0.42;

let aggregate = volume * 0.84;


document.getElementById("result").innerHTML =

`
<h3>Concrete Calculation Report</h3>

Concrete Volume:
<b>${volume.toFixed(2)} m³</b>
<br><br>

Cement:
<b>${cement.toFixed(1)} bags</b>

<br><br>

Sand:
<b>${sand.toFixed(2)} m³</b>

<br><br>

Aggregate:
<b>${aggregate.toFixed(2)} m³</b>

`;

}
