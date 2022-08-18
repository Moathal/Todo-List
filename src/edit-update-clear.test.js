/**
 * @jest-environment jsdom
 */

// import e from './__mocks__/e.js';
import MethodsTasks from './modules/methods.js';

document.body.innerHTML = `<main class="row d-flex bg-light flex column align-items-center justify-content-start todolist">
<header class="p-3">
    <h1>To do List</h1>
    <button><i class="fa-solid fa-arrows-rotate"></i></button>
</header>
<section>
    <form>
        <input id="i--1" class="addTaskInput" placeholder="Add to your list..." type="text">
        <button id="a--1" role="button" type="button" class="addTaskButton"><i class="fa-solid fa-turn-down"></i></button>
    </form>
    <div class="pt-2 tasks">
    </div>
</section>
<section class="bg-light d-flex justify-content-center align-items-center footer">
    <a id="removeChecked" class="link link-dark m-3" href="#">Clear all completed</a>
</section>
</main>`;

const methods = new MethodsTasks();
const tasksList = document.querySelector('.tasks');
methods.tasks = [{ description: 'aaaaaaa', completed: false, index: 1 }, { description: 'bbbbbb', completed: true, index: 2 }];
methods.resetList(tasksList);

describe('test update completed status', () => {
  test('update completed status from false to true', () => {
    methods.clickCheckbox('c-0');
    expect(methods.tasks[0].completed).toBe(true);
    expect((JSON.parse(localStorage.getItem('tasks'))[0].completed)).toBe(true);
  });

  test('update completed status from true to false', () => {
    methods.clickCheckbox('c-1');
    expect(methods.tasks[1].completed).toBe(false);
    expect((JSON.parse(localStorage.getItem('tasks'))[1].completed)).toBe(false);
  });
});

describe('test edit task description', () => {
  test('edit task description from aaaaaaa to zzzzzzz', () => {
    document.getElementById('t-0').value = 'zzzzzzz';
    methods.editTaskDescription('t-0', 0);
    expect(methods.tasks[0].description).toBe('zzzzzzz');
    expect((JSON.parse(localStorage.getItem('tasks'))[0].description)).toBe('zzzzzzz');
  });
});

describe('add and delete tasks', () => {
  test('add a task', () => {
    methods.addTask(tasksList, '3rd3rd3rd', true, 3);
    const tasks = document.querySelectorAll('.py-1.li');
    expect(tasks).toHaveLength(3);
    expect(methods.tasks).toHaveLength(3);
    expect(JSON.parse(localStorage.getItem('tasks'))).toHaveLength(3);
  });

  test('delete a task', () => {
    const task = document.getElementById('d-2');
    methods.removeTask(tasksList, 2, task);
    const tasks = document.querySelectorAll('.py-1.li');
    expect(tasks).toHaveLength(2);
    expect(methods.tasks).toHaveLength(2);
    expect(JSON.parse(localStorage.getItem('tasks'))).toHaveLength(2);
  });

  test('delete completed tasks', () => {
    methods.removeCompletedTasks(tasksList);
    const tasks = document.querySelectorAll('.py-1.li');
    expect(tasks).toHaveLength(1);
    expect(methods.tasks).toHaveLength(1);
    expect(methods.tasks[0].description).toBe('bbbbbb');
    expect(JSON.parse(localStorage.getItem('tasks'))).toHaveLength(1);
    expect(JSON.parse(localStorage.getItem('tasks'))[0].description).toBe('bbbbbb');
  });
});
