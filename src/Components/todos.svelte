<script lang="ts">
import type ITask from "src/interfaces/ITask";

let taskTitle = '';

import { tasks } from "../store/tasks";

const handleAddTask = (e: SubmitEvent) => {
    e.preventDefault();
    addTask({ id: Math.random(), title: taskTitle, date: new Date() });
    taskTitle = '';
}

const addTask = (task: ITask) => $tasks = [...($tasks || []), task];
</script>

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
        <h4>To do ({$tasks.length})</h4>
        {#each $tasks as task}
        <div class="task">
            <h4>{task.title}</h4>
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
        border: 1px solid #FF690050;
        font-weight: 500;
        border-radius: 1rem;
        width: 25rem;
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
    }
</style>