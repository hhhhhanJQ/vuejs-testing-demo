import Vue from 'vue';

/**
 * Inject props on a selected component
 * @param VueComponent Component Component where data will be injected
 * @param Object propsData Data to be injected
 */
const injectProps = (Component, propsData) => {
    const Ctor = Vue.extend(Component);
    const vm = new Ctor({
        el: document.createElement('div'),
        propsData: propsData
    });

    return vm;
};


export default {
    injectProps
}
