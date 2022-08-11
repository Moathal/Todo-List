export default class methodsTasks {
  constructor() {
    this.tasks = [];
  }

  resetList(tasksList) {
    this.tasks.forEach((task, i) => {
      const div = document.createElement('div');
      div.classList.add('py-1');
      div.classList.add('li');
      div.id = `d-${i}`;
      div.innerHTML = `
        <input id="c-${i}" class="checkbox" type="checkbox">
        <div class="text">
        <textarea id="t-${i}" class="fs-4 fw-light description">${task.description}</textarea>
        </div>
        <button id="b-${i}" class="move-delete move"><i id="trash-${i}" class="fa-regular fa-trash-can fa-xl hidden"></i>
        <i id="move-${i}" class="fa-solid fa-ellipsis-vertical show"></i>
        </button>`;
      div.style.order = task.index;
      tasksList.appendChild(div);
      if (task.completed) {
        const checkbox = document.getElementById(`c-${i}`);
        const textarea = document.getElementById(`t-${i}`);
        checkbox.setAttribute('checked', '');
        textarea.classList.add('text-decoration-line-through');
        textarea.classList.add('text-secondary');
      }
    });
  }

  addTask(task) {
    this.tasks.push(task);
  }

  clickCheckbox(id) {
    const index = id.replace('c-', '');
    const checkbox = document.getElementById(id);
    const textarea = document.getElementById(`t-${index}`);
    if (checkbox.hasAttribute('checked')) {
      textarea.classList.remove('text-secondary');
      textarea.classList.remove('text-decoration-line-through');
      checkbox.removeAttribute('checked');
      this.tasks[index].completed = false;
    } else {
      textarea.classList.add('text-decoration-line-through');
      textarea.classList.add('text-secondary');
      checkbox.setAttribute('checked', '');
      this.tasks[index].completed = true;
    }
  }
}
