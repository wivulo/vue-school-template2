<script>
import DropdownComponent from "./DropdownComponent.vue";
import logo from "../assets/logo.png";

export default {
    props: ["user"],
    data() {
        return {
            title: "Haeder component",
            logoImage: logo,
            courses: [
                'Video Courses',
                'Vue.js Master Class 2024 Edition',
                'Vue.js Master Class',
                'Workshops',
                'Mastering Nuxt'
            ],
            businessServices: [
                'Vue.js Corporate Training', 
                'Workshops', 
                'Hiring'
            ],
            events: [
                "Vue.js Nation",
                "Nuxt Nation",
                "Vue.js Forge"
            ]
        };
    },
    components: {
        "dropdown-component": DropdownComponent
    }
}
</script>

<template>
    <nav class="my-nav w-100 h-10 text-white d-flex align-items-center">
        <div class="my-nav-content px-5 d-flex gap-1 w-100">
            <a href="" class="m-0">
                <img :src="logoImage" alt="logo" >
                <!-- VUEschool -->
            </a>

            <ul class="d-flex gap-3 list align-items-center m-0 flex-fill">
                <li>
                    <dropdown-component 
                        dropdownTittle="Courses" 
                        v-bind:dropdownItems="courses">
                    </dropdown-component>
                </li>
                <li>Plans</li>
                <li>
                    <dropdown-component 
                        dropdownTittle="Business Services" 
                        v-bind:dropdownItems="businessServices">
                    </dropdown-component>
                </li>
                <li>Lerning Paths</li>
                <li>Articles</li>
                <li>
                    <dropdown-component 
                        dropdownTittle="Events" 
                        v-bind:dropdownItems="events">
                    </dropdown-component>
                </li>
                <li>Get Certified</li>
                <li>
                    <button class="btn btn-outline-info" id="offer">
                        50% offer 
                    </button>
                </li>
            </ul>

            <ul class="list d-flex gap-3 align-items-center m-0">
                <li>
                    <button class="btn text-white" id="nav-btn-search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                          </svg>
                    </button>
                </li>
                <template v-if="user.name">
                    <li class="d-flex justify-content-center align-items-center">
                        <div class="user-icon">
                            {{ user.name.charAt(0) }}
                        </div>
                    </li>
                </template>
                <template v-else>
                    <li>
                        <router-link to="/login">
                            <button class="btn text-white">
                                Login
                            </button>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/">
                        <button class="btn py-2 px-3" id="create-account">
                            Create Account
                        </button>
                    </router-link>
                    </li>
                </template>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
.my-nav-content a, 
.my-nav-content ul{
    height: 43px;
}

.my-nav-content ul li button#offer{
    width: 100px;
    height: 30px;
    border-radius: 20px;
    font-size: .8em;
    color: var(--white-1);
    display: flex;
    align-items: center;
    justify-content: center;
}

.user-icon{
    width: 30px;
    height: 30px;
    border-radius: 100%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--violet);
}

.my-nav-content ul li button#create-account{
    background-color: var(--limon);
    border-radius: 20px;
}
</style>