import Vue from 'vue';
import VueRouter from "vue-router";
import App from './App.vue';
import CreateAccountComponent from './components/CreateAccountComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import Tasks from './components/Tasks.vue';
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

Vue.use(VueRouter);

const routes = [
    { path: '/', component: CreateAccountComponent },
    { path: '/login', component:  LoginComponent},
    { path: '/tasks', component:  Tasks}
  ]

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App),
});
