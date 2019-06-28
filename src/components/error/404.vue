<template>
    <div class="container">
        <router-link to="/">
            <div class="img-container center">
                <h1 style="text-align:center">点击图片返回首页</h1>
                <img src="../../assets/404.png" alt="点击图片返回首页">
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    components: {}
};
</script>

<style>
@import url(../../css/public.css);
.img-container {
    transform: translateX(-50%) translateY(-50%);
    cursor: pointer;
}
</style>
