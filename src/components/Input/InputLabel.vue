<script>
export default {
    name: "InputLabel",
    props: {
        label: {
            type: String,
            default: ""
        },
        labelFor: {
            type: String,
            default: ""
        }
    }
}
</script>

<template>
    <label :for="labelFor" class="form-label text-secondary">{{ label }}</label>
</template>