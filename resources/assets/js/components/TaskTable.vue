<template>
    <table class="table table-striped">
        <thead>
            <th>Task</th>
            <th>Author</th>
            <th></th>
        </thead>
        <tbody>
            <tr is="task"
                v-for="task in tasks"
                :task="task"
                v-on:delete-task="deleteTask"
            ></tr>
        </tbody>
    </table>
</template>

<script>
    import Task from './Task.vue';
    export default {
        props: {
            tasks: {
                default: () => {
                    return [];
                }
            }
        },
        components: {
            'task': Task
        },
        methods: {
            deleteTask: function(id) {
                this.$emit('delete-task', id);
            }
        }
    }
</script>
