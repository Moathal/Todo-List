/**
 * @jest-environment jsdom
 */

 //import e from './__mocks__/e.js';
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
methods.tasks = [{description:'aaaaaaa', completed:false, index:1},{description:'bbbbbb', completed:true, index:2}];
methods.resetList(document.querySelector('.tasks'));


describe('test update completed status', () => {

  test('update completed status from false to true', () => {
    methods.clickCheckbox('c-0');
    expect(methods.tasks[0].completed).toBeTruthy;
    expect((JSON.parse(localStorage.getItem('tasks'))[0].completed)).toBeTruthy;
  });

  test('update completed status from true to false', () => {
    methods.clickCheckbox('c-1');
    expect(methods.tasks[1].completed).toBeFalsy;
    expect((JSON.parse(localStorage.getItem('tasks'))[1].completed)).toBeFalsy;
  });
});


describe('test edit task description', () => {
  
  test('edit task description from aaaaaaa to zzzzzzz', () => {
    document.getElementById('t-0').value = 'zzzzzzz';
    methods.editTaskDescription('t-0',0);
    expect(methods.tasks[0].description).toBe('zzzzzzz');
    expect((JSON.parse(localStorage.getItem('tasks'))[0].description)).toBe('zzzzzzz');
  });
});









