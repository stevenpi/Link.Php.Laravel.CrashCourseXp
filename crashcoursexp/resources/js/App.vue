<template>
    <div>
        <VueHeader></VueHeader>
        <div class="container">
            <transition
                name="fade"
                mode="out-in"
                @beforeLeave="beforeLeave"
                @enter="enter"
                @afterEnter="afterEnter"
            >
                <router-view/>
            </transition>
        </div>
        <VueFooter></VueFooter>
    </div>
</template>

<script>
    import VueHeader from "./components/VueHeader";
    import VueFooter from "./components/VueFooter";

    export default {
        components: {
            VueHeader,
            VueFooter
        },
        data() {
            return {
                prevHeight: 0,
            };
        },
        methods: {
            beforeLeave(element) {
                this.prevHeight = getComputedStyle(element).height;
            },
            enter(element) {
                const { height } = getComputedStyle(element);

                element.style.height = this.prevHeight;

                setTimeout(() => {
                    element.style.height = height;
                });
            },
            afterEnter(element) {
                element.style.height = 'auto';
            },
        },
    }

</script>
<style>
    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: height, opacity;
        transition-timing-function: ease;
        overflow: hidden;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>
