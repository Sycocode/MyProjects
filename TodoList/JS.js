const inputField=document.querySelector(".input-field textarea"),
      todoList=document.querySelector(".todo-list"),
      pendingNum=document.querySelector(".pending-num"),
      clearBtn=document.querySelector(".clear-btn");

      // this function is called while adding ,deleting and checking and unchecking the task]]

      function allTasks()
      {
        let task=document.querySelectorAll(".pending");
        pendingNum.textContent=task.length===0?"no":task.length;

        let allList=document.querySelectorAll(".list");
        if(allList.lenght>0)
        {
            clearBtn.style.pointerEvent="auto";
            return;
        }
        clearBtn.style.pointerEvent="none";
      }

inputField.addEventListener("keyup",(e)=>{
    let inputVl=inputField.value.trim();
    if(e.key==="Enter" && inputVl.length>0)
    {
       let Litag=` <li class="list pending" onclick="handlestatus(this)">
       <input type="checkbox"/>
       <span class="task">${inputVl}</span>
       <i class="uil uil-trash-alt" onclick="deleteTask(this)"></i>
       </li>`
       todoList.insertAdjacentHTML("beforeend",Litag);
       inputField.value="";
       allTasks();
    }

});

// delete task while we click on the delete icon
function deleteTask(e)
{
    e.parentElement.remove();
    allTasks();
}

// checking & unchecking the checkbox while we click on the task
function handlestatus(e)
{
    const checkbox=e.querySelector("input"); // getting checkbox
    checkbox.checked=checkbox.checked?false:true;
    e.classList.toggle("pending"); // classList & toggle() function 
    allTasks();
}

// deleting all the task 

clearBtn.addEventListener("click",()=>
{
    todoList.innerHTML="";
    allTasks();
})
