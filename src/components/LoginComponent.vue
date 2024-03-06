<script>
import {Input} from "./Input";

export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        login(){
            console.log(this.email, this.password);
        },
        handlePassword(value) {
            this.password = value;
        },
        handleEmail(value) {
            this.email = value;
        }
    },
    components: {
        "Input-root": Input.Root,
        "Input-label": Input.Label,
        "Input-element": Input.Element
    }
}
</script>

<template>
    <main class="d-flex align-items-center flex-fill flex-column gap-4">
        <h2 class="text-white my-5">Log in</h2>

        <div class="w-35 h-55 p-4 bg-white rounded-10 overflow-hidden">
            <form class="d-flex flex-column gap-3" @submit.prevent="login">
                <Input-root>
                    <Input-label label="Your Email" labelFor="email" />
                    <Input-element 
                        type="email" 
                        name="email" 
                        placeholder="Enter your email" 
                        id="email"
                        @on-change="handleEmail"
                        />
                </Input-root>

                <div class="w-100 d-flex justify-content-end">
                    <router-link to="/forgot" class="text-limon">Forgot your password?</router-link>
                </div>

                <Input-root>
                    <Input-label label="Your Password" labelFor="password" />
                    <Input-element
                        type="password" 
                        name="password" 
                        placeholder="Enter your password" 
                        id="password"
                        @on-change="handlePassword"
                        />
                </Input-root>

                <button class="btn" id="btn-login" type="submit">Login</button>
            </form>
            
        </div>

        <div>
            <p class="text-secondary notYet">
                No account yet? 
                <router-link to="/create-account" class="text-limon">Register now</router-link>
            </p>
        </div>
    </main>
</template>

<style scoped>
form button#btn-login{
    background-color: var(--limon);
    height: 50px;
    color: white;
    text-transform: uppercase;
    font-weight: 600;
}

form button#btn-login:hover{
    background-color: var(--limon-soft);
}

.notYet{
    font-weight: 700;
    margin-top: -12px;
}

.notYet a{
    text-decoration: underline;
}
</style>

