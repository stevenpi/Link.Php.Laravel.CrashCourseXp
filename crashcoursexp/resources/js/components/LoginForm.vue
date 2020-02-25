<template>
    <div class="LoginFormWrapper">
        <transition name="fade" mode="out-in">
            <form v-on:submit.prevent v-if="!showLoading" key="1">
                <input v-model="email" type="text" placeholder="Please enter your email"/>
                <input v-model="password" type="password" placeholder="********"/>
                <input v-model="remember_me" type="checkbox" name="remember"/>
                <input type="submit" value="Log in" v-on:click="loginUi()" />
            </form>
            <div id="LoadingSpinnerWrapper" v-else key="2">
                <LoadingSpinner/>
            </div>
        </transition>
    </div>
</template>
<script>
    import LoadingSpinner from "./LoadingSpinner";

    import { mapGetters, mapActions } from "vuex";

    export default {
        name: 'LoginForm',
        components: {
            LoadingSpinner,
        },
        data() {
            return {
                email: null,
                password: null,
                remember_me: null,
                showLoading: false,
            }
        },
        methods: {
            ...mapActions(["login"]),
            loginUi () {
                this.showLoading = true;
                const timer = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        this.login({email: this.email, password: this.password });
                        resolve();
                    }, 1500);  // This promise will be resolved in 1500 milli-seconds

                });
                Promise.all([timer,]).then( () => {
                    if (this.userName !== "") {
                        // worked, do stuff
                        this.$emit('loggedIn')
                    } else {
                        alert('Login Failed');
                    }
                    this.showLoading = false;
                });
            },
            logout () {

            }
        },
        computed: mapGetters(["userId", "userName", "userEmail"]),
    }
</script>
<style scoped>
form {
    margin: 3em;
}

input {
    margin-bottom: 1em;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to {
    opacity: 0
}
</style>
