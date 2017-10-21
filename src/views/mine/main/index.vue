<template>
    <div id="mine" class="mine-panel ">
        <header id="header" class="main-background-color" style="height: 210px !important;padding-top: 75px;">
            <div class="portrait text-center">
                <i class="icon iconfont icon-morentouxiang" style="font-size: 80px; background-color: #6bd7ab;"></i>
            </div>
            <div class="badge" v-if="isLogin">会员</div>
            <div v-if="isLogin">
                <span>188****2930</span>
                <i class="icon iconfont icon-bianji" style="font-size: 20px;"></i>
            </div>
            <div class="text-center" v-else @click="loginOrRegister()" style="margin-top: 10px;">登录/注册</div>
        </header>
        <!--style="margin-top: 210px;"-->
        <div>
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
                <flexbox v-for="(item,index) in portfolio" :key="index"
                         class="default-margin item"
                >
                    <flexbox-item>
                        <div class="text-left" style="background-color: white;">
                            <i class="icon iconfont" v-bind:class="item.icon" style="font-size: 20px;"></i>
                            <span style="font-size: 18px;" class="vertical-middle">{{item.title}}</span>
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="text-right " style="position: relative;" tapmode @click="onCellClick(item)">
                            <span style="position:absolute;top:0;right:28px;height: 30px;line-height:30px;"
                                  v-if='item.slot'>
                                <badge v-if="item.slot.type === 'badge'" :text="item.slot.text"
                                       class="vertical-middle"></badge>
                            </span>
                            <span>
                                <x-icon type="ios-arrow-forward" size="30"></x-icon>
                            </span>

                        </div>
                    </flexbox-item>
                </flexbox>
            </div>

        </div>

        <actionsheet v-model="show2" :menus="menus2" @on-click-menu="onClickActionSheet" show-cancel></actionsheet>

    </div>
</template>

<script>
    import Lib from 'assets/js/Lib';
    import {PORTFOLIO} from './config';
    let _ = require('lodash');
    import {
        Badge, Group, Panel, Flexbox, FlexboxItem,
        Rater, LoadMore, XButton, Cell, Actionsheet
    } from 'vux'
    export default {
        name: 'app',
        data() {
            return {
                isLogin: false,
                portfolio: PORTFOLIO,
                show2: false,
                menus2: {
                    menu1: '微信',
                    menu2: '微信朋友圈'
                }
            }
        },
        components: {
            Badge, Flexbox, FlexboxItem, Group, Panel, Rater, LoadMore, XButton, Cell, Actionsheet
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
                if (item.link) {
                    if (window.device) {
                        api.openWin({
                                name: item.name,
                                url: item.link,
                                delay: 1,
                                pageParam: {
                                    name: 'test11'
                                }
                            }
                        );
                    }
                    else {
                        window.open(item.link, '_blank');
                    }
                } else if (item.actionSheet) {
                    if (window.device) {
                        api.actionSheet({
                            title: '选择要分享的平台',
                            cancelTitle: '取消',
                            buttons: ['微信', '微信朋友圈']
                        }, function (ret, err) {
                            let index = ret.buttonIndex;
                            alert(index);
                        });

                        /* api.openFrame({
                         name: item.name,
                         url: item.frame,
                         rect: {
                         x: 0,
                         y: 50,
                         w: 'auto',
                         h: 'auto'
                         },
                         bgColor: 'rgba(128, 128, 128)',
                         pageParam: {
                         name: 'test11'
                         }
                         }
                         );*/
                    } else {
                        this.show2 = true;
                    }


                }

            },
            loginOrRegister(){
                if (window.device != null) {
                    api.openWin({
                            name: 'user-info',
                            url: '../user-info/index.html',
                            delay: 1,
                            pageParam: {
                                name: 'test11'
                            }
                        }
                    );
                } else {
                    window.open('../user-info/index.html', '_blank');
                }
            },
            onClickActionSheet (key) {
            },
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
        /*   margin-top: 75px;*/

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
