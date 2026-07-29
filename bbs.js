let totalWeight = 0;
let rows = "";

function addBar(){

let mark = document.getElementById("mark").value;
let dia = Number(document.getElementById("dia").value);
let qty = Number(document.getElementById("qty").value);
let length = Number(document.getElementById("length").value);


// Weight formula D²/162 × length
let weight = ((dia * dia) / 162) * length * qty;

totalWeight += weight;


rows +=

`
<tr>
<td>${mark}</td>
<td>${dia} mm</td>
<td>${qty}</td>
<td>${length} m</td>
<td>${weight.toFixed(2)} kg</td>
</tr>
`;


document.getElementById("result").innerHTML =

`

<h3>Bar Bending Schedule</h3>

<table border="1" width="100%">

<tr>
<th>Mark</th>
<th>Dia</th>
<th>Qty</th>
<th>Length</th>
<th>Weight</th>
</tr>

${rows}

</table>

<br>

Total Steel Weight:
<b>${totalWeight.toFixed(2)} kg</b>

`;

}
