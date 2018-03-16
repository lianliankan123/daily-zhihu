<template>
    <div>
        <group class="content">
            <x-input  v-model="value1" type="text"  text-align = "center" class="item"></x-input>
            <x-input  v-model="value2" type="password"  text-align = "center" class="item"></x-input>

        </group>
        <x-button text="提交" id="submit" link="home"/>
    </div>
</template>

<script>
    import {XInput , Group,XButton } from 'vux'
    export default {
        name: "login",
        data() {
            return{
                value1:'用户名',
                value2:'密码'
            }
        },
        components: {
            XInput,
            Group,
            XButton
        }
    }
</script>

<style scoped lang="less">

    .content{
        margin: 150px 20px 20px 20px;
    }
    .item{
        margin: 10px 0;
    }
    #submit{
        width: 80%;
        background: antiquewhite;
        margin-top: 50px;
    }
</style>