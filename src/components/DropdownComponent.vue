<script>
export default {
    props: ["dropdownTittle", "dropdownItems"],
    data() {
        return {
            isOpen: false
        };
    }
}
</script>

<template>
    <div class="dropdown">
        <a class="btn text-white dropdown-toggle border-none outline-none" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {{ dropdownTittle }}
        </a>
      
        <ul class="dropdown-menu h-auto bg-blue">
            <li v-for="(item, i) in dropdownItems" v-bind:key="i">
                <a class="dropdown-item text-white" href="#">{{ item }}</a>
            </li>
        </ul>
      </div>
</template>

<style scoped>
.dropdown .dropdown-menu li:hover,
.dropdown .dropdown-menu li a:hover{
   background-color: rgba(255, 255, 255, .7);
   color: #000 !important;
}
</style>