import './style.css';
import Task from './modules/task.js';
import MethodsTasks from './modules/methods.js';
import { descriptFocusIn, descriptFocusOut } from './modules/interact.js';

const methods = new MethodsTasks();
const tasksList = document.querySelector('.tasks');

let todo = new Task('bench press', false, 0);
methods.addTask(todo);
todo = new Task('jump 20 times', false, 2);
methods.addTask(todo);
todo = new Task('jog for 20 minutes', true, 1);
methods.addTask(todo);

methods.resetList(tasksList);

const checkboxes = document.querySelectorAll('.checkbox');
const textareas = document.querySelectorAll('.description');

checkboxes.forEach((checkbox) => checkbox.addEventListener('click', () => {
  methods.clickCheckbox(checkbox.id);
}));

textareas.forEach((textarea) => textarea.addEventListener('focusin', () => descriptFocusIn(textarea.id)));

textareas.forEach((textarea) => textarea.addEventListener('focusout', () => descriptFocusOut(textarea.id)));
