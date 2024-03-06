<script>
export default {
    name: "InputElement",
    props: {
        type: {
            type: String,
            default: "text"
        },
        name: {
            type: String,
            default: ""
        },
        id: {
            type: String,
            default: ""
        },
        placeholder: {
            type: String,
            default: ""
        }
    },
    methods: {
        handleInput(e) {
            this.$emit("on-change", e.target.value);
        }
    }
}
</script>

<template>
        <input 
          :type="type" 
          :name="name"
          class="form-control"
          :id="id"
          :placeholder="placeholder"
          @input="handleInput"
          required
          />
</template>