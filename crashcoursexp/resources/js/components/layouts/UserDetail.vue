<template>
<div>
    <h1>Hello {{ user.name }}!</h1>
    <p>your email is {{ user.email }}</p>
    <p>Have fun!</p>
</div>
</template>
<script>
    import { mapGetters } from "vuex";


    export default {
        name: 'UserDetail',
        computed: mapGetters(["userId", "userName", "userEmail"]),
        props: {
            user: null,
        },
        created() {
            if(this.user == null) {
                this.user = {
                    name: this.userName,
                    email: this.userEmail,
                }
            }
        }
    }
</script>
<style scoped>

</style>
