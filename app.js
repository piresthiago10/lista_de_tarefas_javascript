// Definir variáveis de UI (Interface de Usuário)
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Carregar todos os event listeners
loadEventListeners();

function loadEventListeners(){
    // Evento de adicionar tarefa
    form.addEventListener('submit', addTask);
}

// Adicionar tarefa
function addTask(e){

    if(taskInput.value === ''){
        alert('Tarefa Adicionada');
    };

    // Criar li
    const li = document.createElement('li');
    // Adicionar classe
    li.className = 'collection-item';
    // Adicionar text node na tag li
    // value é o texto inserido no campo de um formulário
    li.appendChild(document.createTextNode(taskInput.value));
    // Criar novo link
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    // Adicionar ícone html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Adicionar o link na tag li
    li.appendChild(link);

    // Adicionar tag li a tag ul
    taskList.appendChild(li);

    // limpar campo do formulário
    taskInput.value = '';

    console.log(li);

    e.preventDefault();
}