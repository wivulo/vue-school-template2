import Vue from 'vue';
import App from './App.vue';
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

new Vue({
    el: '#app',
    render: h => h(App),
});
