var 
    taskInput = document.getElementById('task-input'), /* where user enter the task */
    addBtn = document.getElementById('add-task'), /* add the task to 'NOT COMPLATE LIST' btn */
    notCompleteList = document.getElementById('not-complate-list'),
    completeList = document.getElementById('complate-list');


addBtn.onclick = function(e){
    if(taskInput.value == ""){
        e.preventDefault();
        alert('You have enter the task to proceed');
    }

    else{
        /* Create elements */
        var
            liElement = document.createElement('LI'),
            task = document.createTextNode(taskInput.value),
            btnContainer = document.createElement('DIV'),
            doneBtn = document.createElement('BUTTON'),
            deleteBtn = document.createElement('BUTTON');

        /* add id attr to btns */
        doneBtn.setAttribute('id', 'done-btn');
        deleteBtn.setAttribute('id', 'delete-btn');
        
        /* add content to btns and append them to the container */
        doneBtn.textContent = 'Done';
        deleteBtn.textContent = 'Delete';
        btnContainer.appendChild(doneBtn);
        btnContainer.appendChild(deleteBtn);

        /* append elemnts to LI element */
        liElement.appendChild(task);
        liElement.appendChild(btnContainer);

        /* append LI element to the UL (not complate list) */
        notCompleteList.appendChild(liElement);

        /* empty the input */
        taskInput.value = '';

        /* Delete task */
        deleteBtn.onclick = function(){
            notCompleteList.removeChild(liElement);
        }

        doneBtn.onclick = function(){
            liElement.removeChild(btnContainer);
            completeList.appendChild(liElement);
        }
    }

    return false;
}