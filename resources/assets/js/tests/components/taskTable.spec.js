import Vue from 'vue'
import TaskTableComponent from '../../components/TaskTable.vue';
import Helper from '../helper';

describe('TaskTableComponent', () => {

    it('should display all the tasks in the table', () => {
        const props = {
            tasks: [
                { id: 1, author: 'Karma 1', taskname: 'Testing 1' },
                { id: 2, author: 'Karma 2', taskname: 'Testing 2' },
                { id: 3, author: 'Karma 3', taskname: 'Testing 3' },
            ]
        };

        const vm = Helper.injectProps(TaskTableComponent, props);

        props.tasks.forEach((task) => {
            expect(vm.$el.textContent).toContain(task.author);
            expect(vm.$el.textContent).toContain(task.taskname);
        });
    });

    it('should emit delete-task event when delete method is called', () => {
        const vm = Helper.injectProps(TaskTableComponent);
        spyOn(vm, '$emit');

        vm.deleteTask(1);
        expect(vm.$emit.calls.count()).toEqual(1);
        expect(vm.$emit).toHaveBeenCalledWith('delete-task', 1);
    });

});
