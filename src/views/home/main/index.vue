<template>
    <div id="home" class="home-panel">
        <div id="home-header" class="home-header">
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
            <img src="./assets/banner.png" width="100%" height="160"/>
        </div>
        <div style="background-color: white;">
            <flexbox v-for="(row,index) in tools" :key="index">
                <flexbox-item v-for="(item,index) in row" :key="index">
                    <div class="services">
                        <img :src="item.url" width="48" height="48"/>
                        <br/>
                        {{item.alias}}





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
    import {Cell, Group, Divider, Flexbox, FlexboxItem, Panel} from 'vux'

    import {TOOLS} from './config';

    export default {
        data() {
            return {
                headerBackColor: 'transparent',
                tools: TOOLS,
                list: [{
                    src: 'http://somedomain.somdomain/x.jpg',
                    fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                    title: '环保税倒计时：40年排污收费制将终结',
                    desc: '新浪网 2017-09-10 13:00:29',
                    url: '/component/cell'
                }, {
                    src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                    title: '环保税倒计时：40年排污收费制将终结',
                    desc: '新浪网 2017-09-10 13:00:29',
                    url: {
                        path: '/component/radio',
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
                    url: 'http://vux.li'
                }
            }
        },
        components: {
            Cell, Group, Divider, Flexbox, FlexboxItem, Panel
        },
        //相关操作事件
        methods: {
            onImgError (item, $event) {
                console.log(item, $event)
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
        margin-top: 48px;
        height: 160px;
    }

    .services {
        text-align: center;
        margin: 5px 0;
    }


</style>



