import Vue from 'vue';
import VueRouter from 'vue-router';
import LatestMovie from '../components/LatestMovie.vue'

Vue.use(VueRouter);

export default new VueRouter ({
    routes: [
        {
            path:'/',
            name:'',
            component:LatestMovie,
        }
    ]
})