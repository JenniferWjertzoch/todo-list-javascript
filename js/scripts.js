'use strict';

const ToDoList = (function() {
    const KEY_ENTER = 13


    // General comments:
    //  + Don't use classes to get your DOM-Elements, use data attributes
    //  + Code style has room for improvement
    //  + Don't use double quotes for strings
    //  + You can remove the parenthesis on arrow functions if you have only one argument
    //  + Consider to have like one function for each DOM element you need



    const newTodoElement = document.querySelector(".new-todo")
    const todoListElement = document.querySelector(".todo-list")

    const addDate = () => {
        const dateElement = document.getElementById("date")
        const options = {weekday: "long", month: "short", day: "numeric"}
        const today = new Date()
        dateElement.innerHTML =today.toLocaleDateString("de-DE", options)
    }


    // It's a bit weird that this function is named "createLiElement" while it actually
    // receives a liElement 🤔
    const createLiElement = (liElement) => {
        const checkboxElement = liElement.querySelector(".done")
        const deleteButtonElement = liElement.querySelector(".delete")
        checkboxElement.addEventListener("change", () => {

            // This can be simplified by using another method on the classList,
            // maybe you find it 🙂
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

            // event.which is deprecated (https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/which)
            // you should use another solution to check for the Enter key
            if (event.which === KEY_ENTER && newTodoElement.value !== "") {
                const newButtonElement = document.createElement("button")
                newButtonElement.classList.add("delete")

                // There is a better way to add elements to a DOM element, it's
                // the insertAdjacentElement() method
                // there are also insertAdjacentHTML() and insertAdjacentText() available
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

                // Why do you need this div element?
                const newDivElement = document.createElement("div")

                // It's weird that you give a div a class "list-elements", because
                // the list elements are collected in the ul 😏
                newDivElement.classList.add("list-elements")
                newDivElement.appendChild(newInputCheckbox)

                // This label should be connected to the checkbox, no?
                newDivElement.appendChild(newLabelElement)
                newDivElement.appendChild(newButtonElement)

                const newLiElement = document.createElement("li")
                newLiElement.appendChild(newDivElement)

                // It looks weird that you change some things on the newLiElement
                // outside of this, don't return it and then reuse it again
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
