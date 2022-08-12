export function descriptFocusIn(id) {
  const index = id.replace('t-', '');
  const button = document.getElementById(`b-${index}`);
  const trash = document.getElementById(`trsh-${index}`);
  const move = document.getElementById(`move-${index}`);
  const div = document.getElementById(`d-${index}`);
  div.style.backgroundColor = '#ffc107';
  button.classList.remove('move');
  button.classList.add('delete');
  trash.classList.remove('hidden');
  trash.classList.add('show');
  move.classList.remove('show');
  move.classList.add('hidden');
  document.getElementById(id).style.cursor = 'text';
}

export function descriptFocusOut(id) {
  const index = id.replace('t-', '');
  const button = document.getElementById(`b-${index}`);
  const trash = document.getElementById(`trsh-${index}`);
  const move = document.getElementById(`move-${index}`);
  const div = document.getElementById(`d-${index}`);
  div.style.backgroundColor = 'white';
  button.classList.remove('delete');
  button.classList.add('move');
  trash.classList.remove('show');
  trash.classList.add('hidden');
  move.classList.remove('hidden');
  move.classList.add('show');
  document.getElementById(id).style.cursor = 'default';
}