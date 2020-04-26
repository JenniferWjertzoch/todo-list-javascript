# ToDo List in Javascript

I am building this simple ToDo List, which allows to create a list of todos, mark them as completed, and delete todos from the list.

## How to build a ToDo List

### Add ToDos by hitting Enter Button

I have an input field with the class `new-todo` and for this input field I want to register an `addEventListener()` by controlling the element via the class `new-todo`.

```javascript
const newTodoElement = document.querySelector(".new-todo")
```

When adding a new todo, it will be confirmed by hitting enter, which means that I have to set an `addEventListener()` to this element `newTodoElement`.

I will use an `addEventListener()` to detect the enter keydown in the input element.

The keydown event is fired when a key is pressed.

```javascript
newTodoElement.addEventListener("keydown", (event) => {
    console.log(event.which)
})
```

Since enter is always 13, I can define a constant to be used in our Javascript file.

```javascript
const KEY_ENTER = 13
```

```javascript
newTodoElement.addEventListener("keydown", (event) => {
    if (event.which === KEY_ENTER && newTodoElement.value !== "") {

    }
})
```

Important! I need to check, whether a value is actually set in the input field.

```javascript
KEY_ENTER && newTodoElement.value !== ""
```

### Add a new ToDo to the ToDo List

For this I must first grab the whole `todo-list`.

```javascript
const todoListElement = document.querySelector(".todo-list")
```

Now I have to create a list-element like HTML, but with Javascript. For this I take the HTML structure as a template.

```html
<li>
    <div class="add-item">
        <input class="done" type="checkbox">
        <label>Task</label>
        <button class="delete"></button>
    </div>
</li>
```

1. Create the `button` and add an additional class `delete`.

```javascript
const newButtonElement = document.createElement("button")
newButtonElement.classList.add("delete")
```

```javascript
newTodoElement.addEventListener("keydown", (event) => {
    if (event.which === KEY_ENTER && newTodoElement.value !== "") {
        const newButtonElement = document.createElement("button")
        newButtonElement.classList.add("delete")
    }
})
```

2. Create a new `label` element and put another element into it using the `appenChild()` method. This will create a text node `createTextNode("")` with the current value from the input field.

```javascript
const newLabelElement = document.createElement("label")
    newLabelElement.appendChild(
        document.createTextNode(newTodoElement.value)
    )
```

```javascript
newTodoElement.addEventListener("keydown", (event) => {
    if (event.which === KEY_ENTER && newTodoElement.value !== "") {
        const newButtonElement = document.createElement("button")
        newButtonElement.classList.add("delete")

        const newLabelElement = document.createElement("label")
        newLabelElement.appendChild(
            document.createTextNode(newTodoElement.value)
        )
    }
})
```

3. Create a new input with the class `done` and a type of `checkbox`.

```javascript
const newInputCheckbox = document.createElement("input")
newInputCheckbox.type = "checkbox"
newInputCheckbox.classList.add("done")
```

```javascript
newTodoElement.addEventListener("keydown", (event) => {
    if (event.which === KEY_ENTER && newTodoElement.value !== "") {
        const newButtonElement = document.createElement("button")
        newButtonElement.classList.add("delete")

        const newLabelElement = document.createElement("label")
        newLabelElement.appendChild(
            document.createTextNode(newTodoElement.value)
        )

        const newInputCheckbox = document.createElement("input")
        newInputCheckbox.type = "checkbox"
        newInputCheckbox.classList.add("done")
    }
})
```

4. All this goes into a DIV with the class `list-elements` including our three previously created elements (button, label and input) via the `appendChild()` method.

```javascript
const newDivElement = document.createElement("div")
newDivElement.classList.add("list-elements")
newDivElement.appendChild(newInputCheckbox)
newDivElement.appendChild(newLabelElement)
newDivElement.appendChild(newButtonElement)
```

```javascript
newTodoElement.addEventListener("keydown", (event) => {
    if (event.which === KEY_ENTER && newTodoElement.value !== "") {
        const newButtonElement = document.createElement("button")
        newButtonElement.classList.add("delete")

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
    }
})
```

5. Build the new li-element and add the new div-element to it.

```javascript
const newLiElement = document.createElement("li")
newLiElement.appendChild(newDivElement)
```

```javascript
newTodoElement.addEventListener("keydown", (event) => {
    if (event.which === KEY_ENTER && newTodoElement.value !== "") {
        const newButtonElement = document.createElement("button")
        newButtonElement.classList.add("delete")

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
    }
})
```

### Insert newly created Li-Element into the ToDo List

Get complete todo-list via `todoListElement` and insert new li-element `newLiElement` by using `prepend()` method.

```javascript
todoListElement.prepend(newLiElement)
```

```javascript
newTodoElement.addEventListener("keypdown", (event) => {
    if (event.which === KEY_ENTER && newTodoElement.value !== "") {
        const newButtonElement = document.createElement("button")
        newButtonElement.classList.add("delete")

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

        todoListElement.prepend(newLiElement)
    }
})
```

### Reset input field, when a new ToDo was added

```javascript
newTodoElement.value = ""
```

```javascript
newTodoElement.addEventListener("keydown", (event) => {
    if (event.which === KEY_ENTER && newTodoElement.value !== "") {
        const newButtonElement = document.createElement("button")
        newButtonElement.classList.add("delete")

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

        todoListElement.prepend(newLiElement)

        newTodoElement.value = ""
    }
})
```

## The Complete and Delete Buttons

I define a function in which I then pass the list-element and through this list-element I will set the callback for the done-checkbox and the delete-button.

```javascript
const createLiElement = (liElement) => {

}
```

I will call the function with the list-element `newTodoElement` and pass `newLiElement` into it. So I can get all elements from the list-element and set the related callbacks.

```javascript
createLiElement(newLiElement)
```


```javascript
newTodoElement.addEventListener("keydown", (event) => {
    if (event.which === KEY_ENTER && newTodoElement.value !== "") {
        const newButtonElement = document.createElement("button")
        newButtonElement.classList.add("delete")

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
```

1. Create a new constant for checkbox-element and get checkbox.

```javascript
const checkboxElement = liElement.querySelector(".done")
```

```javascript
const createLiElement = (liElement) => {
    const checkboxElement = liElement.querySelector(".done")

}
```

2. Add change event to checkbox.

If the checkbox is changed, i.e. change event is fired, then I register a callback.

```javascript
const createLiElement = (liElement) => {
    const checkboxElement = liElement.querySelector(".done")
    checkboxElement.addEventListener("change", () => {

    })
}
```

3. Get the checked property for checkbox-element.

```javascript
checkboxElement.checked
```

If checkbox is active = true.
Otherwise = false.


4. Create an if/else function.

If checkbox is active, I `add()` the class "completed".

If the checkbox is NOT active, I remove the class "completed" from the element via `remove()`.

```javascript
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
    }
```

5. Create the delete button to remove the todo.

```javascript
const deleteButtonElement = liElement.querySelector(".delete")
```

Again, I simply add an `addEventListener()`, so whenever the button is clicked, the whole li-element should be removed.

```javascript
deleteButtonElement.addEventListener("click", () => {
    liElement.remove()
})
```

```javascript
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
```
