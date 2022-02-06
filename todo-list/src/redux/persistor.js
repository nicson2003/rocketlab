import constantJson from './constant.json';

export function getPersistedTodos(key = 'todos') {
  const currentTodos = JSON.parse(localStorage.getItem(key));
  if (currentTodos === null)
    localStorage.setItem(key, JSON.stringify(constantJson.initialTodos));
  return currentTodos || constantJson.initialTodos;
}

export function setPersistedTodos(key = 'todos', newTodo) {
  localStorage.setItem(key, JSON.stringify(newTodo));
}
