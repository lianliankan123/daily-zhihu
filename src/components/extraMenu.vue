<template>
    <div class="box">

    </div>
</template>

<script>
    export default {
        name: "extra-menu"
    }
</script>

<style scoped lang="less">
    @radius: 75px;
    .box{

        width: @radius;
        height: @radius;

        background-color: antiquewhite;

        margin-left: -@radius/2;

        position: fixed;
        left: 50%;
        bottom: -@radius/5*3;
        z-index: 21;

        border-radius: 50%;
    }

</style>