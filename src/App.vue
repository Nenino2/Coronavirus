<template>
    <div id="app" v-visibility-change="visibilityChange">
        <router-view />
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    created() {
        document.title = this.$route.name;
        this.load();
    },
    methods: {
        ...mapActions(["load"]),
        visibilityChange(e, hidden) {
            if (!hidden) {
                this.load();
            }
        }
    },
    watch: {
        $route(to) {
            document.title = to.name || "Coronavirus Info";
        }
    }
};
</script>

<style lang="scss">
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#app {
    width: 100vw;
    height: 100vh;
    font-family: "Open Sans";
}
</style>
