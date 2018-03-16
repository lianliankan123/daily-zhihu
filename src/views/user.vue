<template>
    <div class="user">
        <img src="static/cat2.jpg" class="back-ground">
        <div class="user-head">
            <img src="static/cat3.png"/>
        </div>
        <p class="user-name">HYH</p>
        <div class="list-con tag">
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
        <icon id="edit" name="edit" scale="5"></icon>
        <div class="list-con user-info">
            <div class="base">
                <div class="item">
                    <span>账号</span>
                    <span>1051333460@qq.com</span>
                </div>
                <div class="item"><span>昵称</span><span>rian</span></div>
                <div class="item"><span>手机</span><span>177****</span></div>
                <div class="item"><span>邮箱</span><span>1051333460@qq.com</span></div>
                <div class="item"><span>职业</span><span>学生</span></div>
                <div class="icon" v-if="showextra" @click="hideextra"><icon name="down" scale="3"></icon></div>
            </div>
            <div class="extra" v-if="showextra == false">
                <div class="item"><span>服务</span><span>SuperVIP</span></div>
                <div class="item"><span>个人</span><span>19 男 狮子座</span></div>
                <div class="item"><span>所在地</span><span>浙江 宁波</span></div>
                <div class="item"><span>学校</span><span>杭电</span></div>
                <div class="item"><span>公司</span><span>123</span></div>
            </div>
        </div>



    </div>
</template>

<script>

    export default {
        name: "user",
        data() {
            return{
                showextra : true
            }
        },
        methods: {
            hideextra() {
                this.showextra = false;
            }
        },
        components: {
        }
    }
</script>

<style scoped lang="less">
    .list-con{
        margin: 0 auto 20px auto;
        display: block;
        width: 80%;
    }
    .user-info{
        position: relative;
        top: -4%;

    }
    .tag{
        display: flex;
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
    #edit{
        position: relative;
        z-index: 2;
        left: 75%;
        color: #007aff;
    }
    .base{
        display: block;

        width: 100%;

        padding: 10px 0 15px 0;
        .item{

            width: 100%;

            padding: 10px 0;

            clear: both;
            span{
                float: right;

                width: 65%;
                text-align: left;
            }
            span:first-child{
                float: left;

                width: 35%;
                text-align: right;

                padding: 0px 10px;
            }
        }
        .icon{
            margin: 40px auto 0 auto;


            text-align: center;
        }
    }
    .extra{
        display: block;

        width: 100%;

        padding: 10px 0 15px 0;

        .item{

            width: 100%;

            padding: 10px 0;

            clear: both;
            span{
                float: right;

                width: 65%;
                text-align: left;
            }
            span:first-child{
                float: left;

                width: 35%;
                text-align: right;

                padding: 0px 10px;
            }
        }
        .icon{
            margin: 40px auto 0 auto;


            text-align: center;
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

            color: white;

            font-weight: bold;
            text-align: center;
            font-size: 25px;
        }
    }
</style>