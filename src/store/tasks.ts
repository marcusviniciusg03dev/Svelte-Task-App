import type ITask from "src/interfaces/ITask";
import { writable } from "svelte/store";

export const tasks = writable<ITask[]>(JSON.parse(localStorage.getItem('tasks') || '[]'));

tasks.subscribe(value => localStorage.tasks = JSON.stringify(value));