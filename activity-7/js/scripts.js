// array to hold tasks
var tasks = [];

// Task status enumerator
var taskStatus = {
    active: 'active',
    completed: 'completed'
};

// Task constructor function (creating a task object)
function Task (id, name, status)
{
    this.id = id;
    this.name = name;
    this.status = status;
}

// creates new element and adds to Document Object Model
function addTaskElement (task)
{
    // create elements
    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    // set attributes
    taskEl.setAttribute('id', task.id);

    // add text to task element
    taskEl.appendChild(textEl);

    //add task element to list
    listEl.appendChild(taskEl);
}

// Click event handler to add a new task
function addTask (event)
{
    var inputEl = document.getElementById('input-task');
    if (inputEl.value != '')
    {
        //Create unique ID
        var id = 'item-' + tasks.length;

        // create new task
        var task = new Task(id, inputEl.value, taskStatus.active);
        // add task to task array 
        tasks.push(task);   
        
        // add task to the DOM
        addTaskElement(task);

        // clear out input
        inputEl.value = '';
    }
}

// Click handler to complete a task
function completeTask (event) 
{
    //get the task element
    var taskEl = event.target;
    var id = taskEl.id;

    // find corresponding task in the array and update its status
    for (var i = 0; i <tasks.length; i++)
    {
        if (tasks[i].id == id)
        {
            tasks[i].status = taskStatus.completed;
            break;
        }
    }

    // move task element from active list to completed list
    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
}

// add optional key press handler here?
function clickButton(event)
{
    if (event.keyCode == 13)
    {
        document.getElementById('add-task').click();
    }
}

// initialize the app
function init()
{
    // wire the add task button click handler
    document.getElementById('add-task').onclick = addTask;

    //wire task completed list item click handler
    document.getElementById('active-list').onclick = completeTask;

    // wire OPTIONAL key press handler
    document.getElementById('input-task').onkeypress = clickButton;
}

init();
