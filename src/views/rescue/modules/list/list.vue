<!--我的救援-->
<template>
    <div class="rescue-list-panel">
        <header id="header" class="header panel-bottom">
             <span class="back event-back left" @click="back()">
                <i class="icon iconfont icon-back" style="font-size: 20px;"></i>
            </span>
            <span>我的救援</span>
        </header>
        <div class="main">
            <tab>
                <tab-item selected @on-item-click="onItemClick(0)" style="font-size: 16px;">全部</tab-item>
                <tab-item @on-item-click="onItemClick(1)" style="font-size: 16px;">分类一</tab-item>
                <tab-item @on-item-click="onItemClick(2)" style="font-size: 16px;">分类二</tab-item>
            </tab>
            <div style="background-color: white;" class="basic-padding">
                <div class="item panel-bottom" v-for="(item,index) in data" :key="index">
                    <div class="desc clearfix">
                        <span style="float: left;" class="text-left">{{item.type}}</span>
                        <span style="float: right;" class="text-right"
                              v-bind:class="{'main-color':item.status === 'wait'}">{{item.result}}</span>
                    </div>
                    <div class="date grey-color " style="">{{item.date}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Lib from 'assets/js/Lib';
    import {
        Tab, TabItem, Group, Panel, Flexbox, FlexboxItem,
        Rater, LoadMore, XButton, Cell
    } from 'vux';

    export default{
        data() {
            return {
                data: [
                    {
                        type: '道路救援',
                        result: '等待救援',
                        date: '2017-09-10 12:00:12',
                        status: 'wait'
                    },
                    {
                        type: '道路救援',
                        result: '救援完成',
                        date: '2017-09-10 12:00:12',
                        status: 'finished'
                    },
                    {
                        type: '道路救援',
                        result: '救援完成',
                        date: '2017-09-10 12:00:12',
                        status: 'finished'
                    }
                ]
            }
        },
        components: {
            Tab, TabItem, Group, Panel, Rater, LoadMore, XButton, Cell
        },
        mounted(){

        },
        //相关操作事件
        methods: {
            back(){
                this.$router.push({name:'home'});
            },
            onItemClick(index){

            }
        }
    }
</script>
<style scoped lang="less">
    @import '~vux/src/styles/1px.less';

    .rescue-list-panel {
        position: relative;
    }

    .rescue-list-panel .main {
        margin-top: 58px;
    }

    .item {
        background-color: white;
    }

    .item .desc {
        position: relative;
        padding: 10px 0 5px;
    }

    .item .date {
        padding: 5px 0;
    }

    .item:last-child {
        border: none;
    }

</style>