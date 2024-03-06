<script>
import CreateAccountComponent from './components/CreateAccountComponent.vue';
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
    data() {
        return {
            user: {}
        };
    },
    methods: {
        handleCreateAccount(payload) {
            this.user = payload;
        }
    },
    components: {
        "header-component": HeaderComponent,
        "create-account-component": CreateAccountComponent
    }
};
</script>

<template>
    <div class="app-component background w-100 h-100">
        <div class="w-100 h-100 d-flex flex-column">
            <header-component :user="user"></header-component>
            
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
    .app-component {
        min-height: 100vh;
    }
</style>