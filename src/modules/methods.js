import Task from './task.js';

export default class methodsTasks {
  constructor() {
    this.tasks = [];
  }

  resetList(tasksList) {
    tasksList.innerHTML = '';
    this.tasks.forEach((task, i) => {
      const div = document.createElement('div');
      div.classList.add('py-1');
      div.classList.add('li');
      div.id = `d-${i}`;
      div.innerHTML = `
        <input id="c-${i}" class="checkbox" type="checkbox">
        <div class="text">
        <input id="t-${i}" class="fs-4 fw-light description" value="${task.description}">
        </div>
        <button type="button" id="b-${i}" class="move-delete move"><i id="trsh-${i}" class="fa-regular fa-trash-can fa-xl hidden"></i>
        <i id="move-${i}" class="fa-solid fa-ellipsis-vertical show"></i>
        </button>`;
      div.style.order = task.index;
      tasksList.appendChild(div);
      if (task.completed) {
        const checkbox = document.getElementById(`c-${i}`);
        const input = document.getElementById(`t-${i}`);
        checkbox.setAttribute('checked', '');
        input.classList.add('text-decoration-line-through');
        input.classList.add('text-secondary');
        div.classList.add('checked');
      }
    });
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  addTask(description, completed, index) {
    const object = new Task(description, completed, index + 1);
    this.tasks.push(object);
  }

  clickCheckbox(id) {
    const index = id.replace('c-', '');
    const checkbox = document.getElementById(id);
    const input = document.getElementById(`t-${index}`);
    const div = document.getElementById(`d-${index}`);
    if (checkbox.hasAttribute('checked')) {
      input.classList.remove('checkedText');
      checkbox.removeAttribute('checked');
      this.tasks[index].completed = false;
      div.classList.remove('checked');
    } else {
      input.classList.add('checkedText');
      checkbox.setAttribute('checked', '');
      this.tasks[index].completed = true;
      div.classList.add('checked');
    }
  }

  removeTask(tasksList, idIndex, task) {
    this.tasks.splice(idIndex, 1);
    tasksList.removeChild(task);
    this.rearrangeOrder();
  }

  editTaskDescription(id, idIndex) {
    const input =document.getElementById(id);
    this.tasks[idIndex].description = input.value;
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  rearrangeOrder() {
    this.tasks = this.tasks.sort((a, b) => a.index - b.index);
    for (let i = 0; i < this.tasks.length; i += 1) this.tasks[i].index = i + 1;
  }
}
