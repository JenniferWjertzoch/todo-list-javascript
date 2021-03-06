'use strict';

const ToDoList = (function() {
    const KEY_ENTER = 'Enter'

    const newTodoElement = document.querySelector('[data-element=new-todo]')
    const todoListElement = document.querySelector('[data-element=todo-list]')

    const setDateToSelectedElement = (selector, locale = 'de-DE', options = { weekday: 'long', month: 'short', day: 'numeric' }) => {
        const dateElement = document.querySelector(selector)
        const today = new Date()
        dateElement.innerHTML = today.toLocaleDateString(locale, options)
    }


    const getLiElement = liElement => {
        const checkboxElement = liElement.querySelector('.done')
        const deleteButtonElement = liElement.querySelector('.delete')
        checkboxElement.addEventListener('change', () => {
            liElement.classList.toggle('completed');
        })

        deleteButtonElement.addEventListener('click', () => {
            liElement.remove()
        })
    }

    const newTodo = () => {
        newTodoElement.addEventListener('keyup', event => {
            if (event.key === KEY_ENTER && newTodoElement.value !== '') {
                const newButtonElement = document.createElement('button')
                newButtonElement.classList.add('delete')
                newButtonElement.insertAdjacentHTML('beforeend', ('\u00D7'))

                const newLabelElement = document.createElement('label')
                newLabelElement.insertAdjacentHTML('afterbegin', newTodoElement.value)

                const newInputCheckbox = document.createElement('input')
                newInputCheckbox.type = 'checkbox'
                newInputCheckbox.classList.add('done')

                const newDivElement = document.createElement('div')
                newDivElement.classList.add('list-elements')
                newDivElement.appendChild(newInputCheckbox)
                newDivElement.appendChild(newLabelElement)
                newDivElement.appendChild(newButtonElement)

                const newLiElement = document.createElement('li')
                newLiElement.appendChild(newDivElement)

                getLiElement(newLiElement)

                todoListElement.prepend(newLiElement)

                newTodoElement.value = ''
            }
        })
    }


    const init = function() {
        setDateToSelectedElement('[data-element=date]');
        setDateToSelectedElement('[data-element=footer-date]', 'de-DE', {year: 'numeric', month: '2-digit', day: 'numeric'});
        newTodo();
    };

    return {
        init: init,
    };
})();

document.addEventListener('DOMContentLoaded', ToDoList.init);
