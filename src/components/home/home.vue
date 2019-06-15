<template>
    <div class="container">{{count}}</div>
    
</template>

<script>
import {mapState} from "vuex";

export default {
    data() {
        return {};
    },
    components: {},
    computed: {
        ...mapState['count']
    }
};
</script>

<style scoped lang="scss">
</style>
