<template>
    <div class="con">
        <div class="loading" v-if="false">
            <span class="left"></span>
            <span class="middle"></span>
            <span class="right"></span>
        </div>
        <div class="con-img">
            <img src="static/cat2.jpg" />
            <div class="con-img-mask"></div>
            <h2>{{title}}123</h2>
        </div>
        <!--<div v-if="data.image" class="con-img">-->
            <!--<img :src="data.image" />-->
            <!--<div class="con-img-mask"></div>-->
            <!--<h2>{{data.title}}</h2>-->
        <!--</div>-->
        <div class="user-box">
            <div class="list-con">
                <img src="static/cat2.jpg">
                <div class="conteng-box">HYH</div>
            </div>
        </div>
        <div class="con-answer">
            <p>Vue官方文档的基础篇看完感觉好像没学到什么,找些小项目练练,</p>
            <p>结果用sublime text3时,不支持.vue文件,写什么都是白色的,没有语法高亮显示,</p>
            <p>辣眼睛。。</p>
            <p>就看见了可怜见可怜见可怜见看来</p>
            <p>Vue官方文档的基础篇看完感觉好像没学到什么,找些小项目练练,</p>
            <p>结果用sublime text3时,不支持.vue文件,写什么都是白色的,没有语法高亮显示,</p>
            <p>辣眼睛。。</p>
            <p>就看见了可怜见可怜见可怜见看来</p>
            <p>Vue官方文档的基础篇看完感觉好像没学到什么,找些小项目练练,</p>
            <p>结果用sublime text3时,不支持.vue文件,写什么都是白色的,没有语法高亮显示,</p>
            <p>辣眼睛。。</p>
            <p>就看见了可怜见可怜见可怜见看来</p>
            <img src="static/cat2.jpg"/>
        </div>
        <div class="tool-box">
            <i>喜欢</i>
            <i>评论</i>
            <i>收藏</i>
        </div>

        <!-- <div class="con-answer" @click.prevent="pop($event)" v-html="data.body"></div> -->
        <model-obj src="example/models/obj/LeePerrySmith.obj"></model-obj>
        <back-scroll :scroller="scroller" :flag="circle"></back-scroll>
    </div>
</template>
<script>
import api from './../api/index'
import { ModelObj } from 'vue-3d-model'
import {
	mapState
} from 'vuex'
export default {
	computed: mapState({
		circle: state => state.circleFlag,
		article: state => state.article
	}),
	mounted: function() {
		this.scroller = this.$el;
	},
	activated: function() {
		let vue = this,
			id = this.$route.query.id;
		// if (this.article.hasOwnProperty(id)) {
		// 	this.data = this.article[id];
		// } else {
		// 	api.getNewsById(id).then(function(data) {
		// 		vue.article[id] = data.data;
		// 		vue.data = data.data;
		// 	});
		// }
	},
	deactivated: function() {
		this.data = "";
	},
	data() {
		return {
			title:"「新片」十月份，值得你走进影院的电影总会有一些",
			scroller: window
		}
	},
	methods: {
		pop(e) {
			let href = e.target.href;
			if (href) {
				window.open(href);
			}
		}
	},
    components: { ModelObj }
}
</script>
<style lang="less">
@red: #FC4482;
@yellow: #FFD300;
@blue: #5B7492;
@gray: #acb9c8;
img {
    width: 100%;
}
.page-content {
    text-align: center;
}
.con {
    color: #666;
    height: 100vh;
    .con-img {
        height: 6rem;
        overflow: hidden;
        position: relative;
        img {
            top: 50%;
            width: 100%;
            position: relative;
            transform: translate(0,-50%);
        }
        h2 {
            width: 60%;
            margin: 0;
            padding: 0;
            right: 5%;
            bottom: 1rem;
            text-align: right;
            font-size: 0.45rem;
            color: rgba(255,255,255,.9);
            position: absolute;
            text-shadow: 0 0 5px rgba(0,0,0,.5);
        }
        &-mask {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(91,116,146,0.50);
            position: absolute;
        }
    }
    .user-box{
        padding: 5%;
        position: relative;
        top: -1.5rem;
    }
    .con-answer {
        padding: 5%;
        position: relative;
        top: -1.5rem;
        h2,
        li,
        p {
            text-align: justify!important;
        }
        h2 {
            color: @blue;
            position: relative;
            z-index: 1;
        }
        a {
            color: @yellow;
            word-break: break-word;
        }
        .headline-title {
            color: @blue;
        }
        .meta {
            text-align: left;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            .avatar {
                vertical-align: middle;
                display: inline-block;
                width: 0.6rem;
                margin-right: 0.1rem;
            }
            span {
                color: #666;
            }
            .author {
                color: @red;
                display: inline-table;
            }
        }
        .content {
            font-size: 0.35rem;
        }
        .question {
            blockquote {
                text-align: justify;
                position: relative;
                &::before {
                    content: '';
                    left: -.5rem;
                    display: block;
                    height: 100%;
                    border-left: 0.1rem solid @yellow;
                    position: absolute;
                }
            }
            &:first-child {
                padding-top: 0;
            }
            &:last-child {
                padding-bottom: 0;
                &::before {
                    display: none;
                }
            }
            ul {
                padding-left: 0.3rem;
                li {
                    text-align: left;
                }
            }
        }
        .content-image {
            width: inherit;
            max-width: 100%;
            margin: 0 auto;
            display: block;
        }
        .view-more {
            text-align: center;
            margin-bottom: 0.5rem;
            a {
                z-index: 1;
                position: relative;
            }
        }
    }
    .tool-box{
        padding: 5%;
        position: relative;
        top: -1.5rem;
        i{
            margin: 0 10px;
        }
    }
}
</style>
