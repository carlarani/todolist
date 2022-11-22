var list=[];

function getData(){
    var task1={
        finished: false, 
        name: "Exercício JS",
        dueDate:"2022-11-20"
    }
    var task2={
        finished: false, 
        name: "Tutorial Angular",
        dueDate:"2022-11-04"
    }

    var task3={
        finished: false, 
        name: "Ex lampada",
        dueDate: "2022-11-04"
    }
    list[0]=task1;
    list[1]=task2;
    list[2]=task3;
    addInitialTask(list);
}

function addInitialTask(list){
    showTasks();
}

function addTask(){
    var index=list.length;
    var task={
        finished: true, 
        name: "",
        dueDate:"",
    }
    task.finished=false;
    task.name=document.getElementById("new-task-name").value;
    task.dueDate=document.getElementById("new-task-due-date").value;
    list.push(task);
    alert("Tarefa adiciona com sucesso");
    showTasks();
}

function clearAll(){
    list=[];
    showTasks();
}

function checkDelay(){
    list.forEach((task)=>
    {
        var dueDate= new Date(task.dueDate.split('/').reverse().join('/'));
        var today = new Date();

        if(dueDate<today)
        {
            var name = task.name;
            name = name.replace(" ", "-")
            var element = document.getElementById(name);
            if (element.classList) element.classList.add("delay");
            else element.className += " delay";
        }
    })
}

function showTasks(){
    document.getElementById("table-body").innerHTML="";
    if(list.length>0)
    {
        tableBody = document.getElementById("table-body");
        list.forEach((task)=>
        {
            var name = task.name;
            name = name.replace(" ", "-");
            console.log(name);
            tableBody.innerHTML += '<tr><td><input class="form-check-input mt-0" type="checkbox" aria-label="Checkbox for following text input"></td><td id="task-name"> '+task.name+'</td><td id="task-due-date"> ' +task.dueDate+'</td><td><span class="badge bg-primary rounded-pill vs-hidden" id='+name+'>Delay</span></td></tr>';
        })
    }
    console.log(list);
    checkDelay();
}