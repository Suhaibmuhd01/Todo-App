function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task")
        return;
    }
let x;
let y;
let z;
x = document.getElementById("main").style.backgroundColor = "#eee"
y = document.getElementById("btn").style

    var li = document.createElement("li");
    var textNode = document.createTextNode(taskInput.value);
    li.appendChild(textNode);

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = function(){
        taskList.removeChild(li); 
    };

    var completeButton = document.createElement("button");
    completeButton.innerHTML = "complete";
    completeButton.onclick = function() {
        li.classList.toggle("completed");
    };

    li.appendChild(deleteButton);
    li.appendChild(completeButton);

    taskList.appendChild(li);

    taskInput.value = "";
    console.log("hello");
}