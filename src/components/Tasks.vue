<script>
import TaskItem from './TaskItem.vue'

export default {
    name: "Tasks",
    data() {
        return {
            tasks: [
                {
                    id: 1,
                    task: "Task 1",
                    category: "Category 1",
                    done: false
                },
                {
                    id: 2,
                    task: "Task 2",
                    category: "Category 2",
                    done: true
                }
            ]
        }
    },
    components: {
        TaskItem
    },
}
</script>

<template>
    <div class="d-flex w-100 justify-content-center">
        <div class="w-75 d-flex flex-column text-white gap-3">
            <div>
                <h2>Tasks</h2>
                <p>Here are the tasks that you have do.</p>
            </div>
    
            <div class="d-flex justify-content-end">
                <div class="d-flex justify-content-between gap-2">
                    <button class="btn px-3 py-2 border border-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill text-white" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                          </svg>
                    </button>
                    <button class="btn px-3 py-2 border border-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill text-white" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                          </svg>
                    </button>
                    <button class="btn btn-primary px-3 py-2">Add Task</button>
                    <button class="btn btn-primary px-3 py-2">Add Category</button>
                </div>
            </div>

            <div>
                <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Task</th>
                        <th scope="col">Category</th>
                        <th scope="col">Done</th>
                      </tr>
                    </thead>
                    <tbody>
                        <task-item 
                            v-for="task in tasks" 
                            :key="task.id" 
                            :task="task.task" 
                            :category="task.category" 
                            :done="task.done"
                        />
                    </tbody>
                  </table>
            </div>
        </div>
    </div>
</template>