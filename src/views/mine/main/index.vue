<template>
    <div id="mine" class="mine-panel ">
        <header id="header" class="header main-background-color" style="height: 210px !important;">
            <div class="portrait text-center">
                <i class="icon iconfont icon-morentouxiang" style="font-size: 80px; background-color: #6bd7ab;"></i>
            </div>
            <div class="badge" v-if="isLogin">会员</div>
            <div v-if="isLogin">
                <span>188****2930</span>
                <i class="icon iconfont icon-bianji" style="font-size: 20px;"></i>
            </div>
            <div v-else @click="loginOrRegister()">登录/注册</div>
        </header>
        <div style="margin-top: 210px;">
            <flexbox style="background-color: white;">
                <flexbox-item style="background-color: white;">
                    <div class="text-center" style="margin: 20px auto;background-color: white;">
                        <i class="icon iconfont icon-coupon" style="color: #f696a5;font-size: 30px;"></i>
                        <span style="font-size: 18px;">购物券</span>
                    </div>
                </flexbox-item>
                <flexbox-item style="background-color: white;">
                    <div class="text-center" style="margin: 20px auto;background-color: white;">
                        <i class="icon iconfont icon-daijinquan" style="color: #fbc469;font-size: 30px;"></i>
                        <span style="font-size: 18px;">代金券</span>
                    </div>
                </flexbox-item>
            </flexbox>
            <div class="basic-padding portfolio">
                <flexbox v-for="(item,index) in settings" :key="index"
                         class="default-margin item"
                >
                    <flexbox-item>
                        <div class="text-left" style="background-color: white;">
                            <i class="icon iconfont" v-bind:class="item.icon" style="font-size: 20px;"></i>
                            <span style="font-size: 18px;" class="vertical-middle">{{item.title}}</span>
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="text-right " style="position: relative;" @click="onCellClick(item)">
                            <span style="position:absolute;top:0;right:28px;height: 30px;line-height:30px;"
                                  v-if='item.slot'>
                                <badge v-if="item.slot.type === 'badge'" :text="item.slot.text"
                                       class="vertical-middle"></badge>
                            </span>
                            <span >
                                <x-icon type="ios-arrow-forward" size="30"></x-icon>
                            </span>

                        </div>
                    </flexbox-item>
                </flexbox>
            </div>

        </div>
    </div>
</template>

<script>
    import Lib from 'assets/js/Lib';
    import {SETTINGS} from './config';
    let _ = require('lodash');
    import {
        Badge, Group, Panel, Flexbox, FlexboxItem,
        Rater, LoadMore, XButton, Cell
    } from 'vux'
    export default {
        name: 'app',
        data() {
            return {
                isLogin: false,
                settings: SETTINGS
            }
        },
        components: {
            Badge, Flexbox, FlexboxItem, Group, Panel, Rater, LoadMore, XButton, Cell
        },
        mounted(){
        },
        //相关操作事件
        methods: {
            back(){
                if (window.device != null) {
                    api.closeWin();
                }
            },
            onCellClick(item){
                debugger
                if (_.isNil(item.link)) {
                    return;
                }
                /*    let substract = Math.abs(window.innerWidth - $event.clientX);
                 if (substract > 30) {
                 return;
                 }*/
                if (window.device) {
                    api.openWin({
                            name: item.name,
                            url: item.link,
                            pageParam: {
                                name: 'test11'
                            }
                        }
                    );
                } else {
                    window.open(item.link, '_blank');
                }

            },
            loginOrRegister(){
                if (window.device != null) {
                    api.openWin({
                            name: 'user-info',
                            url: '../user-info/index.html',
                            pageParam: {
                                name: 'test11'
                            }
                        }
                    );
                } else {
                    window.open('../user-info/index.html', '_blank');
                }
            }
        }
    }
</script>

<style scoped lang="less">
    @import '~vux/src/styles/reset.less';

    .vux-x-icon {
        fill: #D9D9D9;
    }

    .mine-panel {
        position: relative;
    }

    .portrait {
        position: relative;
        height: 80px;
        line-height: 80px;
        width: 80px;
        margin: 0 auto;
        margin-top: 75px;
        padding: 0;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        overflow: hidden;
        color: white;
    }

    .badge {
        position: relative;
        margin: 0 auto;
        margin-top: -15px;
        z-index: 100;
        font-size: 15px;
        width: 30px;
        height: 20px;
        line-height: 20px;
        padding: 0 13px;
        background-color: #f5a623 !important;
        border-radius: 5px;
    }

    .portfolio {
        background-color: white;
        border-top: 1px solid rgba(217, 217, 217, 0.5);
        border-bottom: 1px solid rgba(217, 217, 217, 0.5);
    }

    .portfolio .item {
        background-color: white;
        padding: 5px 0;
        border-bottom: 1px solid rgba(217, 217, 217, 0.5);
    }

    .portfolio .item:last-child {
        border-bottom: none !important;
    }

</style>
