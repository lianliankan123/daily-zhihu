<template>
    <div>
        <div class="list" v-for="x in myList">
            <p class="list-time">{{x.date.substring(0,4)+"/"+x.date.substring(4,6)+"/"+x.date.substring(6,8)}}</p>
            <div class="list-con" link @click="go(y.id)" v-for="y in x.stories">
                <img :src="y.images[0]" />
                <p>{{y.title}}</p>
            </div>
        </div>
        <div class="loading" v-if="!myList.length&&!refreshing">
            <span class="left"></span>
            <span class="middle"></span>
            <span class="right"></span>
        </div>
        <!-- 滑动加载更多组件 -->
        <infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" />
    </div>
</template>

<script>
    export default {
        name: "discover",
        data() {
            return {
                demo01: 0,
                refreshing: false,
                trigger: null,
                loading: false,
                count: 1,
                scroller: window,
                list: [],
                myList: [{"date":"20171219",
                    "stories":[
                        {"images":["https:\/\/pic4.zhimg.com\/v2-809d4b7e25297b3fe7a55bbe3ff04043.jpg"],
                            "type":0,"id":9661733,"ga_prefix":"121915","title":"SHINee 成员钟铉去世：完美的偶像人设和残酷的韩流工业"},
                        {"images":["https:\/\/pic3.zhimg.com\/v2-ba700fc67a432aa3525bd18b4386741a.jpg"],
                            "type":0,"id":9661636,"ga_prefix":"121914","title":"都说气候变暖，可你有没有感觉现在冬天似乎越来越冷了？"},
                        {"images":["https:\/\/pic1.zhimg.com\/v2-d2ae57280fcd26b1fd890696b397c450.jpg"],
                            "type":0,"id":9661695,"ga_prefix":"121912","title":"医生在病人心电图停止时，会接着做手术吗？"},
                        {"images":["https:\/\/pic3.zhimg.com\/v2-9cd854428e9ede3bf564ab12d0384692.jpg"],
                            "type":0,"id":9661680,"ga_prefix":"121912","title":"大误 · 这个太阳系不简单"},
                        {"title":"没错，这个惹眼的颜色，就是 2018 年的「潘通流行色」了","ga_prefix":"121910",
                            "images":["https:\/\/pic3.zhimg.com\/v2-1da85fa625841b31b80d865b514e03f6.jpg"],
                            "multipic":true,"type":0,"id":9661333},
                        {"images":["https:\/\/pic1.zhimg.com\/v2-41ce8093eeba4540af9cb6839294608c.jpg"],
                            "type":0,"id":9661388,"ga_prefix":"121909","title":"中兴 42 岁研发负责人坠楼，也许，我们每个人都在走钢丝"},
                        {"images":["https:\/\/pic4.zhimg.com\/v2-31dbc6f9220a422c47bceabb8345424f.jpg"],
                            "type":0,"id":9661700,"ga_prefix":"121908","title":"直播开挂、被戳穿拒不承认，是背后那条灰色产业链给了他们底气"},
                        {"images":["https:\/\/pic4.zhimg.com\/v2-e18a8c56e76d8d620c52d0592eb01dbf.jpg"],
                            "type":0,"id":9661588,"ga_prefix":"121907","title":"从来没健过身，想开始运动，平时在家可以做些什么动作？"},{"images":["https:\/\/pic4.zhimg.com\/v2-4f82dedb3fec75522d0c0d5984731c03.jpg"],"type":0,"id":9661720,"ga_prefix":"121907","title":"和中国相比，美国二三线城市有哪些不同？"},{"images":["https:\/\/pic4.zhimg.com\/v2-864134a9b3677a66a431abf78fc25bdf.jpg"],"type":0,"id":9661690,"ga_prefix":"121907","title":"关于互联网 \/ 运营 \/ 数据分析，这可能是最全的专有名词字典"},{"images":["https:\/\/pic3.zhimg.com\/v2-e4dc66eab11073fa2178086b031d5dce.jpg"],"type":0,"id":9661603,"ga_prefix":"121906","title":"瞎扯 · 如何正确地吐槽"}],"top_stories":[{"image":"https:\/\/pic1.zhimg.com\/v2-c4ca8b318e3fdc82251565a1a0b1ec14.jpg","type":0,"id":9660122,"ga_prefix":"121719","title":"消消气，生气或者激动，真的会影响你的判断"},{"image":"https:\/\/pic2.zhimg.com\/v2-6a90be1f7fb7e5c3aff2a8ab44986e5d.jpg","type":0,"id":9661700,"ga_prefix":"121908","title":"直播开挂、被戳穿拒不承认，是背后那条灰色产业链给了他们底气"},{"image":"https:\/\/pic1.zhimg.com\/v2-843fb2ab0ab7c836695861401a4753f8.jpg","type":0,"id":9661690,"ga_prefix":"121907","title":"关于互联网 \/ 运营 \/ 数据分析，这可能是最全的专有名词字典"},{"image":"https:\/\/pic4.zhimg.com\/v2-38109c3a8a6a4368e3623dade70b2657.jpg","type":0,"id":9661636,"ga_prefix":"121914","title":"都说气候变暖，可你有没有感觉现在冬天似乎越来越冷了？"},{"image":"https:\/\/pic4.zhimg.com\/v2-278982dc32d8bdd56f95ddb549a674ff.jpg","type":0,"id":9661388,"ga_prefix":"121909","title":"中兴 42 岁研发负责人坠楼，也许，我们每个人都在走钢丝"}]}],
                swiper: "",
                tops: [{"image":"https:\/\/pic1.zhimg.com\/v2-c4ca8b318e3fdc82251565a1a0b1ec14.jpg",
                    "type":0,"id":9660122,"ga_prefix":"121719","title":"消消气，生气或者激动，真的会影响你的判断"},
                    {"image":"https:\/\/pic2.zhimg.com\/v2-6a90be1f7fb7e5c3aff2a8ab44986e5d.jpg","type":0,"id":9661700,"ga_prefix":"121908","title":"直播开挂、被戳穿拒不承认，是背后那条灰色产业链给了他们底气"},
                    {"image":"https:\/\/pic1.zhimg.com\/v2-843fb2ab0ab7c836695861401a4753f8.jpg","type":0,"id":9661690,"ga_prefix":"121907","title":"关于互联网 \/ 运营 \/ 数据分析，这可能是最全的专有名词字典"},
                    {"image":"https:\/\/pic4.zhimg.com\/v2-38109c3a8a6a4368e3623dade70b2657.jpg","type":0,"id":9661636,"ga_prefix":"121914","title":"都说气候变暖，可你有没有感觉现在冬天似乎越来越冷了？"},{"image":"https:\/\/pic4.zhimg.com\/v2-278982dc32d8bdd56f95ddb549a674ff.jpg","type":0,"id":9661388,"ga_prefix":"121909","title":"中兴 42 岁研发负责人坠楼，也许，我们每个人都在走钢丝"}]
            }
        },
        methods: {
            consoleIndex () {
                console.log('click demo01', this.demo01)
            },
            go(id) {
                this.$router.push({
                    path: "/article",
                    query: {
                        id: id
                    }
                });
            },
            getList(type) {
                var vue = this;
                vue.loading = false;
                // if (type) {
                // 	api.getNews().then(function(data) {
                // 		vue.tops = data.data.top_stories;
                // 		vue.list.push(data.data);
                // 		vue.loading = false;
                // 	});
                // }
                // else {
                // 	api.getNewsByDate(vue.GetDate(vue.count)).then(function(data) {
                // 		vue.list.push(data.data);
                // 		vue.loading = false;
                // 	});
                // }
            },
            loadMore() {
                let vue = this;
                this.loading = true;
                setTimeout(() => {
                    vue.count--;
                    vue.getList();
                }, 500)
            },
            GetDate(Count) {
                var dd = new Date();
                dd.setDate(dd.getDate() + Count); //获取AddDayCount天后的日期
                var y = dd.getFullYear();
                var m = dd.getMonth() + 1; //获取当前月份的日期
                m = m >= 10 ? m : "0" + m
                var d = dd.getDate();
                d = d >= 10 ? d : "0" + d;
                return y + "" + m + "" + d;
            }
        }
    }
</script>

<style scoped>

</style>