let projects = JSON.parse(localStorage.getItem("projects")) || [];


let list = document.getElementById("projectList");


if(projects.length === 0){

list.innerHTML = "<p>No saved projects yet.</p>";

}

else{


list.innerHTML = "";


projects.forEach(function(project,index){


list.innerHTML += `

<div class="card">

<h3>${project.name}</h3>

<p>
Client: ${project.client}
</p>

<p>
Engineer: ${project.engineer}
</p>

<p>
Date: ${project.date}
</p>

<p>
Total Cost:
₹ ${project.cost}
</p>


</div>

`;

});


}
