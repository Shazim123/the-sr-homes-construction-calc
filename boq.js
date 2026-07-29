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
function downloadBOQPDF(){

const { jsPDF } = window.jspdf;

let doc = new jsPDF();


let project = document.getElementById("project").value;
let client = document.getElementById("client").value;
let engineer = document.getElementById("engineer").value;
let date = document.getElementById("date").value;


// Get values

let concrete = Number(document.getElementById("concrete").value);
let concreteRate = Number(document.getElementById("concreteRate").value);

let steel = Number(document.getElementById("steel").value);
let steelRate = Number(document.getElementById("steelRate").value);

let brick = Number(document.getElementById("brick").value);
let brickRate = Number(document.getElementById("brickRate").value);

let plaster = Number(document.getElementById("plaster").value);
let plasterRate = Number(document.getElementById("plasterRate").value);

let labour = Number(document.getElementById("labour").value);


let total =
(concrete * concreteRate) +
(steel * steelRate) +
(brick * brickRate) +
(plaster * plasterRate) +
labour;



doc.setFontSize(18);
doc.text("THE SR HOMES",20,20);

doc.setFontSize(12);
doc.text("Construction BOQ Report",20,30);


doc.line(20,35,190,35);


doc.text("Project: " + project,20,50);
doc.text("Client: " + client,20,60);
doc.text("Engineer: " + engineer,20,70);
doc.text("Date: " + date,20,80);


doc.text("BOQ SUMMARY",20,100);


doc.text(
"Concrete Cost: Rs. " + (concrete*concreteRate).toFixed(2),
20,
115
);

doc.text(
"Steel Cost: Rs. " + (steel*steelRate).toFixed(2),
20,
125
);

doc.text(
"Brickwork Cost: Rs. " + (brick*brickRate).toFixed(2),
20,
135
);

doc.text(
"Plaster Cost: Rs. " + (plaster*plasterRate).toFixed(2),
20,
145
);

doc.text(
"Labour Cost: Rs. " + labour.toFixed(2),
20,
155
);


doc.line(20,165,190,165);


doc.setFontSize(14);

doc.text(
"Total Estimated Cost: Rs. " + total.toFixed(2),
20,
180
);


doc.text(
"Prepared by The SR Homes",
20,
270
);


doc.save("The_SR_Homes_BOQ_Report.pdf");

}
