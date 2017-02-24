import Vue from 'vue'
import TaskTrackerComponent from '../../components/TaskTracker.vue';
import Helper from '../helper';

describe('TaskTrackerComponent', () => {

    it('should not add tasks with empty taskname', () => {
        const vm = Helper.injectProps(TaskTrackerComponent);
        const defaultSize = vm.tasks.length;

        vm.taskName = '';
        vm.taskAuthor = 'Author';
        vm.addTask();

        expect(vm.tasks.length).toEqual(defaultSize);
    });

    it('should not add tasks with empty author', () => {
        const vm = Helper.injectProps(TaskTrackerComponent);
        const defaultSize = vm.tasks.length;

        vm.taskName = 'Task Name';
        vm.taskAuthor = '';
        vm.addTask();

        expect(vm.tasks.length).toEqual(defaultSize);
    });

    it('should add tasks if both author and taskname are provided', () => {
        const vm = Helper.injectProps(TaskTrackerComponent);
        const defaultSize = vm.tasks.length;

        vm.taskName = 'Task Name';
        vm.taskAuthor = 'Author';
        vm.addTask();

        expect(vm.tasks.length).toEqual(defaultSize + 1);
    });

    it('should delete task if id is valid', () => {
        const vm = Helper.injectProps(TaskTrackerComponent);
        const defaultSize = vm.tasks.length;

        vm.deleteTask(1);

        expect(vm.tasks.length).toEqual(defaultSize - 1);
    });

    it('should not delete a task if id is not valid', () => {
        const vm = Helper.injectProps(TaskTrackerComponent);
        const defaultSize = vm.tasks.length;

        vm.deleteTask(100);

        expect(vm.tasks.length).toEqual(defaultSize );
    });

});
