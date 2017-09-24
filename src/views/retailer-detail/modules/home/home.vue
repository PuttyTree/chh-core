<!--车行详情页-->
<template>
    <div id="home" class="retailer-detail-panel">

        <header id="header" class="header header-ex">
            <span class="back event-back left" @click="back()">
                <i class="icon iconfont icon-back" style="font-size: 20px;"></i>
            </span>
            <span class="right">
                <i class="icon iconfont icon-youhuiquan" style="font-size: 25px;"></i>
                <i class="icon iconfont icon-fenxiang" style="font-size: 30px;"></i>

            </span>
        </header>
        <div>
            <img src="../../assets/exhibition.jpg" width="100%" height="200"/>
        </div>

        <div class="basic-padding basic-service" style="background-color: white;">
            <h3 style="font-weight: 500;">靓车洁汽车美容连锁机构（新南路店）</h3>
            <div style="margin: 5px 0;">
                <rater v-model="star" slot="value" disabled :font-size="22"></rater>
                <span class="grey-color" style="font-size: 14px;">51人点评</span>
            </div>
            <div style="font-size: 14px;position: relative;" class="grey-color single-row">
                <i class="icon iconfont icon-zhizhen" style="font-size: 18px;"></i>
                <span> 渝北区新南路454号</span>
            </div>
            <div style="background-color: white; margin-top: 10px;">
                <flexbox v-for="(row,index) in services" :key="index">
                    <flexbox-item v-for="(item,index) in row" :key="index">
                        <div class="service" v-if="item.url">
                            <img :src="item.url" width="20" height="21" class="vertical-middle"/>
                            <span>{{item.alias}}</span>
                        </div>
                    </flexbox-item>
                </flexbox>
            </div>
        </div>


        <flexbox style="background-color: white;">
            <flexbox-item style="background-color: white;">
                <div class="order text-center  main-color">
                    <i class="icon iconfont icon-dianhua  vertical-middle" style="font-size: 18px;"></i>
                    <span>电话</span>
                </div>
            </flexbox-item>
            <flexbox-item style="background-color: white;">
                <div class="order text-center  main-color">
                    <i class="icon iconfont icon-dingwei1 vertical-middle" style="font-size: 24px;"></i>
                    <span>地图</span>
                </div>
            </flexbox-item>
        </flexbox>
        <group style="border: none !important;background-color: white; margin-top: -10px !important;" ref="group"
               class="basic-padding">
            <cell :title="'用户点评'" :value="'查看全部51条评论'" style="padding: 15px 0 !important; font-size: 14px;"
                  is-link :link="{path:'/comment'}"></cell>
            <div style="position: relative; font-size: 14px;margin-bottom: 10px;" v-for="(item,index) in comments"
                 :key="index">
                <flexbox>
                    <flexbox-item>
                        <div class="text-left single-row">
                            <span class="vertical-middle"> {{item.user}}</span>
                            <img v-if="item.coupon" src="../../assets/coupon1.png" class="vertical-middle"/>
                        </div>

                    </flexbox-item>
                    <flexbox-item>
                        <div class="text-right single-row">{{item.date}}</div>
                    </flexbox-item>
                </flexbox>
                <div class="default-margin">
                    <span>打分</span>
                    <rater v-model="item.star" slot="value" disabled :font-size="18"></rater>
                </div>
                <div class="grey-color default-margin single-row">{{item.comment}}</div>
            </div>
        </group>

        <div class="main-color text-center" style="margin: 20px auto 70px;">发布评论</div>

        <footer class="footer">
            <div class="main-background-color buy text-center basic-margin">
                <i class="icon iconfont icon-youhuiquan1" style="font-size: 25px;"></i>
                <span>特惠洗车买单</span>
            </div>
        </footer>


    </div>
</template>

<script>

    import Lib from 'assets/js/Lib';
    import {
        Search, Group, Cell, Panel, Flexbox, FlexboxItem,
        Rater, LoadMore, XButton
    } from 'vux';
    import {SERVICES} from './config';

    let _ = require('lodash');


    export default {
        data() {
            return {
                star: 5,
                services: [],
                comments: [
                    {
                        user: '用户188****7018',
                        date: '2017-09-08 12:00:00',
                        coupon: true,
                        star: 5,
                        comment: '#洗的很干净# #靠谱# 还不错，下次有机会再来'
                    }, {
                        user: '用户188****7018',
                        date: '2017-09-08 12:00:00',
                        coupon: false,
                        star: 4,
                        comment: '#洗的很干净# #靠谱# 还不错，下次有机会再来,下次有机会再来,下次有机会再来'
                    }
                ]
            }
        },
        components: {
            Search, Flexbox, FlexboxItem, Group, Panel, Rater, LoadMore, Cell, XButton
        },
        mounted(){
            let dom = this.$refs.group.$el.querySelector('.weui-cells');
            if (dom) {
                dom.style['margin-top'] = '0 !important';
            }
            //二维数组
            this.services = _.chunk(SERVICES, 4);
            //补齐二维数组的最后一个长度为4
            let len = this.services[this.services.length - 1].length;
            switch (len) {
                case 1:
                    this.services[this.services.length - 1].push({});
                    this.services[this.services.length - 1].push({});
                    this.services[this.services.length - 1].push({});
                    break;
                case 2:
                    this.services[this.services.length - 1].push({});
                    this.services[this.services.length - 1].push({});
                    break;
                case 3:
                    this.services[this.services.length - 1].push({});
                    break;
                default:
                    break;
            }

        },
        //相关操作事件
        methods: {
            back(){
                if (window.device != null) {
                    api.closeWin();
                }
            },
        }
    }
</script>

<style scoped lang="less">
    .header-ex {
        color: white;
        background-color: transparent;
    }

    .basic-service {
        margin: 10px 0;
    }

    .order {
        height: 40px;
        line-height: 40px;
    }

    .service {
        margin: 5px auto;
    }

    .buy {
        border-radius: 5px;
        height: 42px;
        line-height: 42px;
    }


</style>



