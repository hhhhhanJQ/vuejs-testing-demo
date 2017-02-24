import Vue from 'vue'
import TaskComponent from '../../components/Task.vue';
import Helper from '../helper';

describe('TaskComponent', () => {

    it('should display task name and task author', () => {
        const props = {
            task: {
                taskname: 'Testing',
                author: 'Karma'
            }
        };
        const vm = Helper.injectProps(TaskComponent, props)

        expect(vm.$el.textContent).toContain(props.task.taskname);
        expect(vm.$el.textContent).toContain(props.task.author);
    });

    it('should emit delete-task event when delete method is called', () => {
        const props = {
            task: {
                taskname: 'Testing',
                author: 'Karma',
                id: 1
            }
        };

        const vm = Helper.injectProps(TaskComponent, props);
        spyOn(vm, '$emit');

        vm.deleteTask(1);
        expect(vm.$emit.calls.count()).toEqual(1);
        expect(vm.$emit).toHaveBeenCalledWith('delete-task', 1);
    });

});
