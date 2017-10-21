<!--道路救援主页-->
<template>
    <div class="rescue-panel ">
        <header id="header" class="header panel-bottom">
             <span class="back event-back left" @click="back()">
                <i class="icon iconfont icon-back" style="font-size: 20px;"></i>
            </span>
            <span>道路救援</span>
            <span class="right main-color" style="font-size: 14px;" @click="myRescueList()">我的救援</span>
        </header>
        <div class="warning">您的年卡已过期，请重新购买</div>
        <div class="main basic-margin">
            <div class="display-board" style="background-color: white;">
                <div class="discount main-background-color">
                    <div style="padding-top: 20px;">车汇慧</div>
                    <div style="font-size: 24px;padding: 10px 0;">救援年卡</div>
                    <div style="margin-top: 5px;">
                        <span class="limitless">不限次</span>
                    </div>
                    <img src="../../assets/rescue-car.png" width="132" height="112">
                </div>
                <div class="bulletin clearfix">
                    <div class="right">24小时无忧救援</div>
                    <!--<div class="left main-color">保障中（2018-02-09到期）</div>-->
                    <div class="left">
                        <span style="color: #F5A623;font-size: 18px">99元</span>
                        <span style="text-decoration: line-through;" class="grey-color">199元</span>
                    </div>
                </div>


            </div>
            <h3 class="title text-center">99元包年 全天候道路救援</h3>

            <ul class="agreement basic-padding main-color">
                <li>
                    <div>全国全年不限次数免费道路救援，含拖车（100公里）、换台等。</div>
                </li>
                <li>
                    <div>高速救援费用报销、出租车费用报销、酒店费用报销。</div>
                </li>
                <li>
                    <div>48小时内审核通过后生效。</div>
                </li>
                <li>
                    <div>全国全年不限次数免费道路救援，含拖车（100公里）、换台等。</div>
                </li>
                <li>
                    <div>高速救援费用报销、出租车费用报销、酒店费用报销。</div>
                </li>
                <li>
                    <div>48小时内审核通过后生效。</div>
                </li>
                <li>
                    <div>全国全年不限次数免费道路救援，含拖车（100公里）、换台等。</div>
                </li>
                <li>
                    <div>高速救援费用报销、出租车费用报销、酒店费用报销。</div>
                </li>
                <li>
                    <div>48小时内审核通过后生效。</div>
                </li>
                <li>
                    <div>具体服务说明：</div>
                    <div>高速救援费用报销、出租车费用报销、酒店费用报销；</div>
                    <div>48小时内审核通过后生效。</div>
                </li>
            </ul>

        </div>
        <footer class="footer text-center ">
            <div class="basic-margin main-background-color" style="border-radius: 5px; ">
                <i class="icon iconfont icon-dianhua" style="font-size: 25px;"></i>
                <span>请求救援：400-899-1020</span>
            </div>
        </footer>

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
            return {}
        },
        components: {
            Flexbox, FlexboxItem, Group, Panel, Rater, LoadMore, XButton, Cell
        },
        mounted(){

        },
        //相关操作事件
        methods: {
            back(){
                if(window.device){
                    api.closeWin();
                }else{
                    this.$router.push({path: '/'});
                }
            },
            myRescueList(){
                this.$router.push({name: 'list'});
            }
        }
    }
</script>

<style scoped lang="less">
    @import '~vux/src/styles/1px.less';

    .rescue-panel {
        position: relative;
    }

    .rescue-panel .warning {
        background-color: #F5A623;
        color: white;
        margin-top: 48px;
        height: 36px;
        line-height: 36px;
        padding-left: 15px;
    }

    .rescue-panel .main {
        margin-top: 8px;
    }

    .display-board {
        height: 212px;
        border-radius: 5px;
        -moz-box-shadow: 1px 2px 5px #333333;
        -webkit-box-shadow: 1px 2px 5px #333333;
        box-shadow: 1px 2px 5px #333333;
        position: relative;
    }

    .display-board .discount {
        height: 168px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        padding-left: 18px;
        position: relative;
    }

    .discount img {
        position: absolute;
        right: 20px;
        bottom: 20px;
    }

    .discount .limitless {
        padding: 5px 20px;
        border-radius: 25px;
        background-color: #73d9b0;
    }

    .display-board .bulletin {
        height: 44px;
        font-size: 14px;

    }

    .bulletin .right {
        float: right;
        width: 140px;
        line-height: 44px;
    }

    .bulletin .left {
        margin-right: 141px;
        padding-left: 18px;
        line-height: 44px;

    }

    .rescue-panel .main .title {
        font-size: 20px;
        font-weight: 500;
        margin: 20px 0;
    }

    .agreement {
        padding: 0 10px 0 25px;
        margin-bottom: 55px;
    }

    .agreement li {
        list-style-type: circle;
        font-size: 16px;
        line-height: 30px;
    }

    .agreement li > div {
        color: black;
    }


</style>



