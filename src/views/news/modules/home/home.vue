<!--咨询主页-->
<template>
    <div class="news-panel basic-margin">
        <header id="header" class="header" style="border-bottom: 1px solid #dddddd">
            <span>咨询</span>
        </header>
        <div class="main">
            <div v-for="(news,index) in newsList" :key="index" class="news clearfix">
                <div class="snapshot vertical-middle">
                    <img v-bind:src="news.img" height="100%" width="120" class="vertical-middle">
                </div>
                <div class="title ">
                    <h4>{{news.title}}</h4>
                    <div class="date-time grey-color">
                        {{news.origin}} &nbsp; &nbsp; {{news.date}}
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    import Lib from 'assets/js/Lib';
    import {
        Badge, Group, Panel, Flexbox, FlexboxItem,
        Rater, LoadMore, XButton, Cell
    } from 'vux'

    export default {
        data() {
            return {
                newsList: [
                    {
                        img: '../../static/img/news/snapshot.png',
                        title: '环保税倒计时：40年排污收费制将终结',
                        origin: '新浪网',
                        date: '2017-09-10 13:00:29'
                    }, {
                        img: '../../static/img/news/snapshot.png',
                        title: '环保税倒计时：40年排污收费制将终结',
                        origin: '新浪网',
                        date: '2017-09-10 13:00:29'
                    }, {
                        img: '../../static/img/news/snapshot.png',
                        title: '环保税倒计时：40年排污收费制将终结',
                        origin: '新浪网',
                        date: '2017-09-10 13:00:29'
                    }
                ]
            }
        },
        components: {
            Badge, Flexbox, FlexboxItem, Group, Panel, Rater, LoadMore, XButton, Cell
        },
        mounted(){

        },
        //相关操作事件
        methods: {}
    }
</script>

<style scoped lang="less">
    @import '~vux/src/styles/1px.less';

    .news-panel {
        position: relative;
    }

    .news-panel .main {
        margin-top: 50px;
        padding-top: 2px;
    }

    .news {
        height: 120px;
        margin: 10px 0;
        background-color: white;
    }

    .news .snapshot {
        float: left;
        width: 100px;
        height: 100%;
        overflow: hidden;
    }

    .news .title {
        margin-left: 100px;
        padding-left: 10px;
        height: 100%;
        overflow: hidden;
        position: relative;
    }

    .news .title .date-time {
        position: absolute;
        bottom: 0;
        left: 5px;
    }


</style>



