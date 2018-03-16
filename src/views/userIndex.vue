<template>
    <div class="box">
        <div class="shadow-box item" @click="change">
            <div class="left-box">
                <img src="static/cat3.png"/>
            </div>
            <div class="right-box">
                <p>heyuheng</p>
                <p>查看或编辑个人主页</p>
            </div>
        </div>
        <div class="shadow-box">
            我的衣柜
        </div>
        <div class="shadow-box">
            我的收藏
        </div>
        <div class="shadow-box">
            设置
        </div>
    </div>
</template>

<script>
    export default {
        name: "user-index",
        methods: {
            change(){
                this.$router.push({
                    path: 'user'
                });
            }
        }
    }
</script>

<style scoped lang="less">
    .box{
        padding: 10px 10px 10px 10px;
        .item{
            height: 2rem;
            .left-box{
                width: 25%;
                height: 100%;
                float: left;
                img{
                    height: 1.5rem;
                    width: 1.5rem;
                    border-radius: 50%;
                }
            }
            .right-box{
                width: 75%;
                height: 100%;
                float: right;
            }
        }

    }

</style>