'use strict';

const ToDoList = (function() {
    const KEY_ENTER = 13

    const newTodoElement = document.querySelector(".new-todo")
    const todoListElement = document.querySelector(".todo-list")

    const addDate = () => {
        const dateElement = document.getElementById("date")
        const options = {weekday: "long", month: "short", day: "numeric"}
        const today = new Date()
        dateElement.innerHTML =today.toLocaleDateString("de-DE", options)
    }


    const createLiElement = (liElement) => {
        const checkboxElement = liElement.querySelector(".done")
        const deleteButtonElement = liElement.querySelector(".delete")
        checkboxElement.addEventListener("change", () => {
            if (checkboxElement.checked) {
                liElement.classList.add("completed")
            } else {
                liElement.classList.remove("completed")
            }
        })

        deleteButtonElement.addEventListener("click", () => {
            liElement.remove()
        })
    }

    const newTodo = () => {
        newTodoElement.addEventListener("keydown", (event) => {
            if (event.which === KEY_ENTER && newTodoElement.value !== "") {
                const newButtonElement = document.createElement("button")
                newButtonElement.classList.add("delete")
                newButtonElement.appendChild(
                    document.createTextNode("\u00D7")
                )

                const newLabelElement = document.createElement("label")
                newLabelElement.appendChild(
                    document.createTextNode(newTodoElement.value)
                )

                const newInputCheckbox = document.createElement("input")
                newInputCheckbox.type = "checkbox"
                newInputCheckbox.classList.add("done")

                const newDivElement = document.createElement("div")
                newDivElement.classList.add("list-elements")
                newDivElement.appendChild(newInputCheckbox)
                newDivElement.appendChild(newLabelElement)
                newDivElement.appendChild(newButtonElement)

                const newLiElement = document.createElement("li")
                newLiElement.appendChild(newDivElement)

                createLiElement(newLiElement)

                todoListElement.prepend(newLiElement)

                newTodoElement.value = ""
            }
        })
    }


    const init = function() {
        addDate();
        newTodo();
    };

    return {
        init: init,
    };
})();

document.addEventListener('DOMContentLoaded', ToDoList.init);
