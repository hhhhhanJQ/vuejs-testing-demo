<template>
    <div class="task-tracker">
        <div class="row m-b-10">
            <form v-on:submit.prevent="addTask">
                <div class="form-group">
                    <label for="taskname">Taskname</label>
                    <input id="taskname" class="form-control" type="text" v-model="taskName">
                </div>
                <div class="form-group">
                    <label for="author">Author</label>
                    <input id="author" class="form-control" type="text" v-model="taskAuthor"/>
                </div>
                <button type="submit" class="btn btn-default">Add a new task</button>
            </form>
        </div>
        <task-table :tasks="tasks" v-on:delete-task="deleteTask"></task-table>
    </div>
</template>

<style lang="scss">
    div.task-tracker {
       .m-b-10 {
           margin-bottom: 10px;
       }
    }
</style>

<script>
    import TaskTable from './TaskTable.vue';
    export default {
        data: function() {
            const tasks = [
                {
                    id: 1,
                    taskname: 'Learning Laravel',
                    author: 'Taylor Otwell'
                },
                {
                    id: 2,
                    taskname: 'Getting started with Vue',
                    author: 'Evan You'
                },
                {
                    id: 3,
                    taskname: 'Playing around with React',
                    author: 'Mark Zuckerberg'
                }
            ];

            return {
                taskName: '',
                taskAuthor: '',
                tasks: tasks,
                taskIdAutoIncrementer: tasks.length
            };
        },
        components: {
            'task-table': TaskTable
        },
        methods: {
            addTask: function() {
                const taskName = this.taskName.trim();
                const taskAuthor = this.taskAuthor.trim();
                if (taskName && taskAuthor) {
                    this.tasks.push({
                        taskname: taskName,
                        author: taskAuthor,
                        id: ++this.taskIdAutoIncrementer
                    });

                    this.taskName = '';
                    this.taskAuthor = '';
                }
            },
            deleteTask: function(id) {
                this.tasks = this.tasks.filter((task) => {
                    return task.id !== id;
                });
            }
        }
    }
</script>
