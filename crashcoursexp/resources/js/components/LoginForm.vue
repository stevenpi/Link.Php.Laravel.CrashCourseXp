<template>
    <div class="LoginFormWrapper">
        <transition name="fade" mode="out-in">
            <form v-on:submit.prevent v-if="!showLoading" key="1">
                <input v-model="email" type="text" placeholder="Please enter your email"/>
                <input v-model="password" type="password" placeholder="********"/>
                <input v-model="remember_me" type="checkbox" name="remember"/>
                <input type="submit" value="Log in" v-on:click="login()" />
            </form>
            <div id="LoadingSpinnerWrapper" v-else key="2">
                <LoadingSpinner></LoadingSpinner>
            </div>
        </transition>
    </div>
</template>
<script>
    import ApiClient from "./../ApiClient";
    import LoadingSpinner from "./LoadingSpinner";

    export default {
        name: 'LoginForm',
        components: {
            LoadingSpinner,
        },
        data() {
            return {
                apiClient: new ApiClient(),
                email: null,
                password: null,
                remember_me: null,
                showLoading: false,
            }
        },
        methods: {
            login () {
                this.showLoading = true;
                let success;
                var myTimerPromise = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        console.log("1.5 seconds up, resolving myTimerPromise");
                        resolve();
                    }, 1500);  // This promise will be resolved in 2000 milli-seconds
                    success = this.apiClient.login(this.email, this.password);
                });
                Promise.all([myTimerPromise,]).then( () => {
                    if (success) {
                        this.$session.set('loggedIn', true);
                        this.$router.push({ name: 'Home' });
                    } else {
                        alert('Login Failed');
                    }
                    this.showLoading = false;
                });
            },
            logout () {
                this.apiClient.logout();
            }
        }
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
