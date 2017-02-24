<template>
    <tr>
        <td>
            {{ task.taskname }}
        </td>
        <td>
            {{ task.author }}
        </td>
        <td>
            <button v-on:click="deleteTask(task.id)">
                Delete
            </button>
        </td>
    </tr>
</template>

<script>
   export default {
       props: {
           task: {
               type: Object,
               required: true
           }
       },
       methods: {
           deleteTask: function(id) {
               this.$emit('delete-task', id);
           }
       }
   }
</script>
