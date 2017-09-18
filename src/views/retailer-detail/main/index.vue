<!--车行详情页-->
<template>
    <div id="home" class="retailer-detail-panel">

        <header id="header" class="header header-ex">
            <span class="back event-back left">
                <i class="icon iconfont icon-back" style="font-size: 20px;"></i>
            </span>
            <span class="right">
                <i class="icon iconfont icon-youhuiquan" style="font-size: 25px;"></i>
                <i class="icon iconfont icon-fenxiang" style="font-size: 30px;"></i>

            </span>
        </header>

        <img src="../assets/exhibition.jpg" width="100%" height="200"/>
        <div class="basic-service">
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

            <flexbox style="margin-top: 25px;">
                <flexbox-item>
                    <div class="order text-center  main-color">
                        <i class="icon iconfont icon-dianhua  vertical-middle" style="font-size: 18px;"></i>
                        <span>电话</span>
                    </div>
                </flexbox-item>
                <flexbox-item>
                    <div class="order text-center  main-color">
                        <i class="icon iconfont icon-dingwei1 vertical-middle" style="font-size: 24px;"></i>
                        <span>地图</span>
                    </div>
                </flexbox-item>
            </flexbox>

        </div>

    </div>
</template>

<script>

    import Lib from 'assets/js/Lib';
    import {Search, Group, Panel, Flexbox, FlexboxItem, Rater, LoadMore} from 'vux';
    import {SERVICES} from './config';

    let _ = require('lodash');


    export default {
        data() {
            return {
                star: 5,
                services: []
            }
        },
        components: {
            Search, Flexbox, FlexboxItem, Group, Panel, Rater, LoadMore
        },
        mounted(){
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
        methods: {}
    }
</script>

<style scoped lang="less">
    @import '~vux/src/styles/1px.less';

    .header-ex {
        color: white;
        background-color: transparent;
    }

    .basic-service {
        margin: 10px 15px;
    }

    .service {
        margin: 5px auto;
    }


</style>



