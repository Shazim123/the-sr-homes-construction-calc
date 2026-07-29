let projects = JSON.parse(localStorage.getItem("projects")) || [];

displayProjects(projects);


function displayProjects(data){

let list = document.getElementById("projectList");


if(data.length === 0){

list.innerHTML = "<p>No saved projects yet.</p>";

return;

}


list.innerHTML = "";


data.forEach(function(project,index){

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


<button onclick="deleteProject(${index})">
Delete
</button>


</div>

`;

});

}



function searchProjects(){

let search =
document.getElementById("searchProject").value.toLowerCase();


let filtered = projects.filter(function(project){

return (
project.name.toLowerCase().includes(search) ||
project.client.toLowerCase().includes(search)
);

});


displayProjects(filtered);

}



function deleteProject(index){

projects.splice(index,1);

localStorage.setItem(
"projects",
JSON.stringify(projects)
);


displayProjects(projects);

}



function clearProjects(){

if(confirm("Delete all saved projects?")){

localStorage.removeItem("projects");

projects=[];

displayProjects(projects);

}

}
