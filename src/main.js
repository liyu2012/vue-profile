import Vue from 'vue'
import MyResume from './components/myresume.vue'
let my = new Vue({
    el: '#app',
    data() {
        return {}
    },

    methods: {

    },
    components: {
        'my-resume': MyResume,

    }
})