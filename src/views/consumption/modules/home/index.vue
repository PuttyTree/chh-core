<!--我的消费-->
<template>
    <div class="consumption-panel">
        <header id="header" class="header panel-bottom">
            <span class="back event-back left" @click="back()">
                <i class="icon iconfont icon-back" style="font-size: 20px;"></i>
            </span>
            <span>我的消费记录</span>
        </header>
        <div class="main">
            <tab>
                <tab-item selected @on-item-click="onItemClick(0)" style="font-size: 16px;">全部</tab-item>
                <tab-item @on-item-click="onItemClick(1)" style="font-size: 16px;">分类一</tab-item>
                <tab-item @on-item-click="onItemClick(2)" style="font-size: 16px;">分类二</tab-item>
            </tab>

            <div style="background-color: white;" class="basic-padding">
                <div class="fees panel-bottom" v-for="(item,index) in data" :key="index">
                    <div class="desc clearfix">
                        <span style="float: left;" class="text-left">{{item.desc}}</span>
                        <span style="float: right;" class="text-right">{{item.fees}}</span>
                    </div>
                    <div class="date grey-color " style="">{{item.date}}</div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>

    import Lib from 'assets/js/Lib';
    import {XButton, Group, Panel, Tab, TabItem, Rater, CheckIcon} from 'vux';
    export default{
        data(){
            return {
                data: [
                    {
                        desc: '上门洗车付费',
                        fees: '-12.00',
                        date: '2017-09-10 12:00:12'
                    },
                    {
                        desc: '上门洗车付费',
                        fees: '-12.00',
                        date: '2017-09-10 12:00:12'
                    },
                    {
                        desc: '退款',
                        fees: '+12.00',
                        date: '2017-09-10 12:00:12'
                    }
                ]
            }
        },
        components: {
            XButton, Panel, Tab, TabItem
        },
        methods: {
            back(){
                if(window.device === 'app'){
                    api.closeWin();
                }else{
                    this.$router.push({path: '/'});
                }
            },
            onItemClick(index){

            }
        }

    }
</script>
<style scoped lang="less">
    @import '~vux/src/styles/1px.less';

    .consumption-panel .main {
        margin-top: 58px;
    }

    .fees {
        background-color: white;
    }

    .fees .desc {
        position: relative;
        padding: 10px 0 5px;
    }

    .fees .date {
        padding: 5px 0;
    }

    .fees:last-child {
        border: none;
    }

</style>