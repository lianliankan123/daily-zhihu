<template>
    <div class="user">
        <img src="static/cat2.jpg" class="back-ground">
        <div class="user-head">
            <img src="static/cat3.png"/>
        </div>
        <p class="user-name">HYH</p>
        <div class="list-con">
            <div class="item">
                <p>25</p>
                关注
            </div>
            <div class="item">
                <p>2</p>
                粉丝
            </div>
            <div class="item">
                <p>1</p>
                获赞与收藏
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "user"
    }
</script>

<style scoped lang="less">
    .list-con{
        margin: auto;

        width: 80%;

        .item{
            width: 30%;
            text-align: center;

            p{
                text-align: center;
            }
        }
        .item:nth-child(2){
            width: 40%;
            border-style: dashed;
            border-width: 0 2px;
            border-color: #ccc;
        }

    }
    .user{

        .back-ground{
            position: absolute;
            width: 100%;
            z-index: -1;

            opacity: 0.5;

        }
        .user-head{
            margin: 50px 0 0 0;
            height: 100px;
            width: 100%;

            img{
                border-radius: 50%;
                width: 100px;
                height: 100px;
                margin-left: 50%;
                transform: translateX(-50px);
            }
        }
        .user-name{
            margin: 10px 0;

            font-weight: bold;
            text-align: center;
            font-size: 25px;
        }
    }
</style>