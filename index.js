
let add= document.querySelector("#addbtn");
let input=document.querySelector("#inputdata");
let todolist= document.querySelector("#todolist");
let inputdata=document.querySelector("#inputdata");
let data=[];

add.addEventListener("click", () =>{
    if(input.value==""){
        alert("Please Enter some tasks to initiate!")
    }
    else{
    console.log("clicked on btn!");
    // todolist.innerHTML=inputdata.value;
    // inputdata.value="";
    data.push(inputdata.value);
    input.value="";
    displayTasks();
    }
});

function displayTasks() {
    todolist.innerHTML = ""; // Clear the current list

    // Loop through the data array and create a new list item for each task
    data.forEach((task, index) => {
        let taskItem = document.createElement("div");
        taskItem.className = "todo-item";
        taskItem.textContent = task;
        taskItem.style.backgroundColor=" rgb(30, 32, 32)";
        taskItem.style.color="white";
        taskItem.style.padding="17px";
        taskItem.style.borderRadius="5px";
        taskItem.style.fontSize="20px";

        
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.style.backgroundColor= "black";
        removeBtn.style.color="white";
        removeBtn.style.borderRadius="5px"
        // removeBtn.style.padding="10px";
        removeBtn.style.float="right";
        removeBtn.style.boxShadow="none";
        
        removeBtn.addEventListener("click", () => {
            removeTask(index);
        });

        taskItem.appendChild(removeBtn);
        todolist.appendChild(taskItem);
    });
}

function removeTask(index) {
    data.splice(index, 1); // Remove the task from the array
    displayTasks(); // Update the list display
}