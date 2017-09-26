<template>
    <div id="home" class="home-panel">
        <div id="home-header" class="home-header" v-bind:style="{backgroundColor:headerBackColor, color: headerColor}">
            <span class="position">
                <i class="icon iconfont icon-zhizhen" style="font-size: 30px;"></i>
                重庆
            </span>
            <span>车汇慧</span>

            <span class="scan" @click="test()">
                <i class="icon iconfont icon-saomiao" style="font-size: 25px;"></i>
            </span>
        </div>
        <div class="swiper">
            <swiper loop auto height='160px' :list="demo01_list" v-model="demo01_index"></swiper>
        </div>
        <div style="background-color: white;">
            <flexbox v-for="(row,index) in services" :key="index">
                <flexbox-item v-for="(item,index) in row" :key="index">
                    <div class="services" @click="openService(item)">
                        <img :src="item.icon" width="48" height="48"/>
                        <br/>
                        <span>{{item.alias}}</span>
                    </div>
                </flexbox-item>
            </flexbox>
        </div>
        <br>
        <div>
            <panel header="最新咨询" :footer="footer" :list="list" type="1" @on-img-error="onImgError"></panel>
        </div>
    </div>
</template>

<script>

    import Lib from 'assets/js/Lib';
    import {Cell, Group, Divider, Flexbox, FlexboxItem, Panel, Swiper} from 'vux'

    import {SERVICES} from './config';
    let _ = require('lodash');

    const baseList = [{
        url: 'javascript:',
        img: '../../static/img/home/swiper/1.jpg',
        title: '送你一朵fua'
    }, {
        url: 'javascript:',
        img: '../../static/img/home/swiper/2.jpg',
        title: '送你一辆车'
    }, {
        url: 'javascript:',
        img: 'https://static.vux.li/demo/5.jpg',
        title: '送你一次旅行',
        fallbackImg: '../../static/img/home/swiper/3.jpg'
    }];


    export default {
        data() {
            return {
                headerBackColor: 'transparent',
                headerColor: 'white',
                demo01_list: baseList,
                demo01_index: 0,
                services: [],
                list: [{
                    src: 'http://somedomain.somdomain/x.jpg',
                    fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                    title: '环保税倒计时：40年排污收费制将终结',
                    desc: '新浪网 2017-09-10 13:00:29',
                    url: 'http://www.baidu.com'
                }, {
                    src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                    title: '环保税倒计时：40年排污收费制将终结',
                    desc: '新浪网 2017-09-10 13:00:29',
                    url: {
                        path: 'http://www.baidu.com',
                        replace: false
                    },
                    meta: {
                        source: '来源信息',
                        date: '时间',
                        other: '其他信息'
                    }
                }],
                footer: {
                    title: '查看更多',
                    url: 'http://www.baidu.com'
                }
            }
        },
        components: {
            Cell, Group, Divider, Flexbox, FlexboxItem, Panel, Swiper
        },
        created(){
            this.services = _.chunk(SERVICES, 4);
        },
        mounted(){
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy(){
            window.removeEventListener('scroll', this.handleScroll);
        },
        //相关操作事件
        methods: {
            handleScroll () {
                let scrollY = window.scrollY;

            },
            openService(service){
                if (_.isNil(service) || _.isNil(service.url)) {
                    return;
                }
                if (window.device != null) {
                    api.openWin({
                        name: service.name,
                        url: service.url,
                        pageParam: {
                            name: 'test12'
                        }
                    });
                } else {
                    window.open(service.url, '_blank');
                }

            },
            test(){
                if (window.device != null) {
                    api.openWin({
                        name: 'page1',
                        url: '../apicloud/index.html',
                        pageParam: {
                            name: 'test'
                        }
                    });
                }


            }
        }
    }
</script>

<style scoped lang="less">
    @import '~vux/src/styles/1px.less';

    .home-panel {
        position: relative;
    }

    .home-header {
        height: 48px;
        line-height: 48px;
        text-align: center;
        position: fixed;
        z-index: 100;
        left: 0;
        right: 0;
        top: 0;
        width: 100%;
        font-size: 18px;
        color: black;
        background-color: white;
    }

    .home-header .position {
        position: absolute;
        left: 15px;
        height: 48px;
        line-height: 48px;
    }

    .home-header .scan {
        position: absolute;
        right: 15px;
        height: 48px;
        line-height: 48px;
    }

    .home-panel .swiper {
        margin-top: 0;
        height: 160px;
    }

    .services {
        text-align: center;
        margin: 8px 0;
        background-color: white;
    }


</style>



