import Vue from 'vue'
import TaskComponent from '../../components/task.vue';
import Helper from "../helper";

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

    it('should emit delete-task event when delete button is clicked', () => {
        const props = {
            task: {
                taskname: 'Testing',
                author: 'Karma',
                id: 1
            }
        };

        const component = Helper.injectProps(TaskComponent, props);
        spyOn(component, '$emit');

        component.deleteTask(1);
        expect(component.$emit.calls.count()).toEqual(1);
        expect(component.$emit).toHaveBeenCalledWith('delete-task', 1);
    });

});
