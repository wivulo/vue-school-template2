<script>
import FormComponent from "./FormComponent.vue";

export default {
    data() {
        return {
            message: "Main component"
        };
    },
    components: {
        "form-component": FormComponent
    },
    methods: {
        handleCreateAccount(payload) {
            this.$emit("on-create-account-tunnel", payload);
        }
    }
}
</script>

<template>
    <main class="d-flex align-items-center flex-fill flex-column gap-4">
        <h2 class="text-white my-5">Create Account</h2>

        <div class="w-43 h-60 p-4 bg-white rounded-10">
            <h4 class="text-secondary">Create Account</h4>
            <form-component @on-create-account="handleCreateAccount"></form-component>
        </div>
    </main>
</template>