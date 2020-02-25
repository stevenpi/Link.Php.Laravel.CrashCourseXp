<template>
    <header id="header">
        <div class="inner">
            <a href="index.html" class="logo"><strong>Projection</strong> by TEMPLATED</a>
            <nav id="nav">
                <router-link :to="{ name: 'Home' }">Home</router-link>
                <router-link :to="{ name: 'ExamplePage' }">ExamplePage</router-link>

                <a href="#" v-if="!userName" v-on:click="toggle()" >Login</a>
                <a href="#" v-if="userName" v-on:click="logout()" >Logout</a>
            </nav>
        </div>
        <modal name="hello-world" height="30%">
            <div id="login-modal">
                <div class="left-item">
                    <LoginForm />
                </div>
                <div class="right-item">
                    <img class="fill" src="images/pic02.jpg" alt="Pic 02" />
                </div>
            </div>
        </modal>
    </header>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import LoginForm from "./LoginForm";

    export default {
        components : {
            LoginForm,
        },
        data () {
            return {
                showModal: false,
            }
        },
        computed: mapGetters(["userId", "userName", "userEmail"]),
        methods : {
            ...mapActions(["logout"]),
            show () {
                this.$modal.show('hello-world');
            },
            hide () {
                this.$modal.hide('hello-world');
            },
            toggle () {
                if (this.showModal) {
                    this.hide();
                } else {
                    this.show();
                }
                this.showModal = !this.showModal;
            },
        }
    }
</script>

<style scoped>
#login-modal {
    display: grid;
    grid-template-columns: 2fr 1fr;
}

.left-item {
    grid-column: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.right-item {
    grid-column: 2 / 2;
    min-height: 100%;
}

img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
}

.fill {
    object-fit: fill;
}

</style>
