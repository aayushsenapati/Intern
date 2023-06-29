import './style.css'

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const app=document.getElementById('app');
const tasks = [];


addButton.addEventListener('click', addTask);
taskInput.addEventListener('keydown', handleKeyPress);

function addTask() {
  const task = taskInput.value.trim();
  const taskNodeDiv= document.createElement('div');
  taskNodeDiv.className = 'taskNodeDiv';  
  const header = document.createElement('h3');
  header.innerHTML = task;
  taskNodeDiv.appendChild(header);

  const deleteButton=document.createElement('button');
  const checkButton=document.createElement('button');

  deleteButton.className = 'deleteButton';
  deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256"
  style="fill:#000000;">
  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(2,2)"><path d="M49,1c-1.66,0 -3,1.34 -3,3c0,1.66 1.34,3 3,3h30c1.66,0 3,-1.34 3,-3c0,-1.66 -1.34,-3 -3,-3zM24,15c-7.17,0 -13,5.83 -13,13c0,7.17 5.83,13 13,13h77v63c0,9.37 -7.63,17 -17,17h-40c-9.37,0 -17,-7.63 -17,-17v-52c0,-1.66 -1.34,-3 -3,-3c-1.66,0 -3,1.34 -3,3v52c0,12.68 10.32,23 23,23h40c12.68,0 23,-10.32 23,-23v-63.35937c5.72,-1.36 10,-6.50062 10,-12.64062c0,-7.17 -5.83,-13 -13,-13zM24,21h80c3.86,0 7,3.14 7,7c0,3.86 -3.14,7 -7,7h-80c-3.86,0 -7,-3.14 -7,-7c0,-3.86 3.14,-7 7,-7zM50,55c-1.66,0 -3,1.34 -3,3v46c0,1.66 1.34,3 3,3c1.66,0 3,-1.34 3,-3v-46c0,-1.66 -1.34,-3 -3,-3zM78,55c-1.66,0 -3,1.34 -3,3v46c0,1.66 1.34,3 3,3c1.66,0 3,-1.34 3,-3v-46c0,-1.66 -1.34,-3 -3,-3z"></path></g></g>
  </svg>`;
  taskNodeDiv.appendChild(deleteButton);
  deleteButton.addEventListener('click', () => {
      tasks.forEach((task,i)=>{
        if(task===deleteButton.parentNode){
          tasks.splice(i,1);
          console.log(tasks)
        }
      })
      deleteButton.parentNode.remove();
  });

  if (task !== '') {
    app.appendChild(taskNodeDiv)
    tasks.push(taskNodeDiv);
    taskInput.value = '';
  }
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    addTask();
    event.preventDefault();
  }
}

