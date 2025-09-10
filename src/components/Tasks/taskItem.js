import './tasks.css';

const TaskItem = (task, onUpdate, editingManager) => {
    let isEditing = false;

    function handleDocumentClick(e) {
        if (isEditing && !taskElement.contains(e.target)) {
            exitEditMode();
        }
    }

    function renderView() {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task-item');

        const title = document.createElement('div');
        title.classList.add('task-title');
        title.textContent = task.title;
        taskElement.appendChild(title);

        const description = document.createElement('div');
        description.classList.add('task-description');
        description.textContent = task.description;
        taskElement.appendChild(description);

        const taskStatus = document.createElement('span');
        taskStatus.textContent = `Status: ${task.status}`;

        const taskPriority = document.createElement('span');
        taskPriority.textContent = `Priority: ${task.priority}`;

        const taskDueDate = document.createElement('span');
        taskDueDate.textContent = `Due: ${task.dueDate}`;

        const taskDetails = document.createElement('div');
        taskDetails.classList.add('task-details');
        taskDetails.appendChild(taskStatus);
        taskDetails.appendChild(taskPriority);
        taskDetails.appendChild(taskDueDate);

        taskElement.appendChild(taskDetails);

        taskElement.addEventListener('click', enterEditMode);

        return taskElement;
    };

    function renderEditForm() {
        const form = document.createElement('form');
        form.classList.add('task-edit-form');

        const titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.value = task.title;
        form.appendChild(titleInput);

        const descInput = document.createElement('textarea');
        descInput.value = task.description;
        form.appendChild(descInput);

        const statusInput = document.createElement('input');
        statusInput.type = 'text';
        statusInput.value = task.status;
        form.appendChild(statusInput);

        const priorityInput = document.createElement('input');
        priorityInput.type = 'text';
        priorityInput.value = task.priority;
        form.appendChild(priorityInput);

        const dueDateInput = document.createElement('input');
        dueDateInput.type = 'date';
        dueDateInput.value = task.dueDate;
        form.appendChild(dueDateInput);

        const saveBtn = document.createElement('button');
        saveBtn.type = 'submit';
        saveBtn.textContent = 'Save';
        form.appendChild(saveBtn);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            task.title = titleInput.value;
            task.description = descInput.value;
            task.status = statusInput.value;
            task.priority = priorityInput.value;
            task.dueDate = dueDateInput.value;
            if (onUpdate) onUpdate(task);
            exitEditMode();
        });

        // Optional: exit edit mode on blur or Esc key, enter key 
        form.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                exitEditMode();
            } else if (e.key === 'Enter' && e.target !== descInput) {
                e.preventDefault();
                saveBtn.click();
            }
        });
        form.addEventListener('focusout', (e) => {
            if (!form.contains(e.relatedTarget)) {
                saveBtn.click();
            }
        });

        return { form, focusElement: titleInput };
    }

    function enterEditMode(e) {
        if (isEditing) return;
        if (editingManager && editingManager.current && editingManager.current !== exitEditMode) {
            editingManager.current(); // Exit previous edit mode
        }
        isEditing = true;
        editingManager.current = exitEditMode;
        const parent = taskElement.parentNode;
        const { form, focusElement } = renderEditForm();
        if (parent) parent.replaceChild(form, taskElement);
        taskElement = form;
        // setTimeout(() => focusElement.focus(), 0); // Focus the first input
        // // Only focus title if nothing else is focused in the form
        // setTimeout(() => {
        //     if (!form.contains(document.activeElement) || document.activeElement === document.body) {
        //         focusElement.focus();
        //     }
        // }, 0);
        document.addEventListener('mousedown', handleDocumentClick);
    }
    function exitEditMode() {
        if (!isEditing) return;
        isEditing = false;
        if (editingManager && editingManager.current === exitEditMode) {
            editingManager.current = null;
        }

        const parent = taskElement.parentNode;
        const view = renderView();
        if (parent && parent.contains(taskElement)) {
            parent.replaceChild(view, taskElement);
            taskElement = view;
        } else {
            taskElement = view;
        }
        document.removeEventListener('mousedown', handleDocumentClick);
    }

    let taskElement = renderView();
    return taskElement;
}

export default TaskItem;