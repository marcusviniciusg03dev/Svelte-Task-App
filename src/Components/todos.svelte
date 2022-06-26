<script lang="ts">
import type ITask from "src/interfaces/ITask";

let taskTitle = '';

import { tasks } from "../store/tasks";

const handleAddTask = (e: SubmitEvent) => {
    e.preventDefault();

    if (!taskTitle) return;

    addTask({ id: Math.random(), title: taskTitle, date: new Date(), done: false });
    
    taskTitle = '';
}

const addTask = (task: ITask) => $tasks = [...($tasks || []), task];

const deleteTask = (id: number) => $tasks = $tasks.filter(task => task.id !== id);

</script>
<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css" >
</svelte:head>

<div id="box">
    <form id="new-task-box" on:submit={handleAddTask}>
        <input
            type="text"
            id="new-task-input"
            placeholder="Write a new task..."
            bind:value={taskTitle}
        />
    </form>
    <div id="tasks-list">
        <h4>To do ({$tasks.filter(task => !task.done).length})</h4>
        {#each $tasks as task}
        <div class="task">
            <input
                id={"checkbox-for-task#" + task.id}
                type="checkbox"
                class="check-task"
                checked={task.done}
                on:change={(e) => {
                    task.done = !task.done;
                }}
            />
            <label class="custom-checkbox-input" for={"checkbox-for-task#" + task.id}>
                <i class="mi mi-check"></i>
            </label>
            <b class={task.done ? "task-done task-title" : "task-title"}>{task.title}</b>
            <button class="delete-task-button" on:click={() => deleteTask(task.id)}>
                <i class="mi mi-close"></i>
            </button>
        </div>
        {/each}
    </div>
</div>

<style>
    #box {
        width: 30rem;
    }

    #new-task-box {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
    }

    #new-task-input {
        padding: 1rem;
        font-size: 1rem;
        font-weight: 500;
        border-radius: 1rem;
        width: 25rem;
        border: 0;
        background-color: #111;
        color: #909090;
        outline: 0;
    }

    #new-task-input::placeholder {
        color: #909090;
    }

    #tasks-list {
        height: 25rem;
        overflow-y: auto;
    }

    .task {
        background: #ffffff38;
        padding: 10px;
        font-weight: 500;
        margin: 10px;
        display: flex;
        align-items: center;
    }

    .delete-task-button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        background-color: transparent;
    }

    .check-task {
        display: none;
    }

    .check-task:checked + .custom-checkbox-input {
        background-color: #36ad3f;
    }

    .custom-checkbox-input .mi-check {
        color: #FFF;
    }

    .check-task + .custom-checkbox-input .mi-check {
        display: none;
    }

    .check-task:checked + .custom-checkbox-input .mi-check {
        display: block;
    }

    .custom-checkbox-input {
        height: 20px;
        width: 20px;
        border: 1px solid rgb(189, 189, 189);
        border-radius: 62.1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .task-done {
        text-decoration: line-through;
    }

    .task-title {
        margin: auto auto auto 1em;
    }
</style>