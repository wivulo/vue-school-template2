<script>
import { emailRegex, passwordRegex } from "../util/validator.js"

export default {
    data() {
        return {
            name: "",
            email: "",
            password: "",
            isCreateAccount: false,
            errorMessage: ""
        };
    },
    computed: {
        isButtonDisabled() {
            return !this.name || !this.email || !this.password;
        }
    },
    methods: {
        clearInputFields() {
            this.name = "";
            this.email = "";
            this.password = "";
        },
        handlerError(message) {
            this.errorMessage = message;
            setTimeout(() => {
                this.errorMessage = "";
            }, 3000);
        },
        async submitForm() {
            this.isCreateAccount = true;
            //simulate server request
            await  new Promise((resolve, reject) => setTimeout(() => resolve(true), 2000)) // sleep 2 sec

            if(!emailRegex.test(this.email)) {
                this.isCreateAccount = false;
                this.handlerError("Invalid email");
                return;
            }

            if(!passwordRegex.test(this.password)) {
                this.isCreateAccount = false;
                this.handlerError("Password must be at least 4 digits");
                return;
            }
            
            this.$emit("on-create-account", {
                name: this.name,
                email: this.email,
                password: this.password
            });
            this.clearInputFields();
            this.isCreateAccount = false;
        }
    },
}
</script>

<template>
    <form @submit.prevent="submitForm" class="form gap-3 d-flex flex-column position-relative">
        <div class="d-flex gap-2">
            <div class="flex-fill">
                <label for="inputName" class="form-label text-secondary">Name</label>
                <input 
                    type="text"
                    name="name"
                    v-model="name"
                    class="form-control" 
                    id="inputName"
                    placeholder="Enter your name"
                    required
                />
              </div>
              <div class="flex-fill">
                <label for="inputEmail" class="form-label text-secondary">Email</label>
                <input 
                    type="email"
                    name="email"
                    v-model="email" 
                    class="form-control" 
                    id="inputEmail"
                    placeholder="Enter your email"
                    required
                    />
              </div>
        </div>

        <div>
          <label for="inputPassword" class="form-label text-secondary">Password</label>
          <input 
            type="password" 
            name="password"
            v-model="password"
            class="form-control" 
            id="inputPassword" 
            placeholder="Enter your password"
            required
            />
        </div>

        <div class="alert alert-danger text-center position-absolute w-100 bottom-0 start-0 z-3" role="alert" v-show="errorMessage">
            {{ errorMessage }}
        </div>

        <div>
            <p class="text-center text-secondary termsAndPolicy">By creating an account you aggree our <span class="text-primary">terms</span> and <span class="text-primary">privacy policy</span></p>
        </div>

        <div class="d-flex justify-content-between">
            <a href="" class="alreadyHaveAnAccount">I already have an account</a>
            <button type="submit" class="btn py-2 px-3 text-white" id="create-account-2" :disabled="isButtonDisabled">
                <span v-show="!isCreateAccount">Create Account</span>

                <div 
                    :class="{'d-flex': isCreateAccount}" 
                    class="justify-content-center" 
                    v-show="isCreateAccount"
                >
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
            </button>
        </div>
      </form>
</template>

<style scoped>
form label{
    font-size: .8em;
}

.alreadyHaveAnAccount{
    font-weight: bold;
    opacity: .5;
    font-size: 1.2em;
}

button#create-account-2{
    background-color: var(--limon);
    border-radius: 20px;
}

button#create-account-2{
    background-color: var(--violet);
    font-weight: bold;
    font-size: 1.2em;
    cursor: pointer;
}

button#create-account-2:disabled{
    background-color: var(--violet-soft);
}
</style>