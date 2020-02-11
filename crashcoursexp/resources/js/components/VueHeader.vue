<template>
    <header id="header">
        <div class="inner">
            <a href="index.html" class="logo"><strong>Projection</strong> by TEMPLATED</a>
            <nav id="nav">
                <router-link :to="{ name: 'Home' }">Home</router-link>
                <router-link :to="{ name: 'ExamplePage' }">ExamplePage</router-link>
                <a href="#">Login</a>
            </nav>
            <a href="#navPanel" class="navPanelToggle"><span class="fa fa-bars"></span></a>
        </div>
    </header>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
