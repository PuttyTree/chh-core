<template>
    <div id="mine" class="mine-panel basic-margin">
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
            <flexbox>
                <flexbox-item>
                    <div class="text-center" style="margin: 20px auto;">
                        <i class="icon iconfont icon-coupon" style="color: #f696a5;font-size: 30px;"></i>
                        <span style="font-size: 18px;">购物券</span>
                    </div>
                </flexbox-item>
                <flexbox-item>
                    <div class="text-center" style="margin: 20px auto;">
                        <i class="icon iconfont icon-daijinquan" style="color: #fbc469;font-size: 30px;"></i>
                        <span style="font-size: 18px;">代金券</span>
                    </div>
                </flexbox-item>
            </flexbox>
            <group>
                <cell is-link>
                    <span slot="title">
                        <i class="icon iconfont icon-xiaofeijilu" style="font-size: 20px;color:grey;"></i>
                        <span>我的消费记录</span>
                    </span>
                </cell>
                <cell is-link>
                    <span slot="title">
                        <i class="icon iconfont icon-che" style="font-size: 20px;color:grey;"></i>
                        <span>我的爱车</span>
                    </span>
                </cell>
                <cell is-link>
                    <span slot="title">
                        <i class="icon iconfont icon-youjiguanli" style="font-size: 20px;color:grey;"></i>
                        <span>我的邮寄地址</span>
                    </span>
                </cell>
                <cell is-link>
                    <span slot="title">
                        <i class="icon iconfont icon-huiyuan" style="font-size: 20px;color:grey;"></i>
                        <span>我的会员</span>
                    </span>
                    <span slot="value">
                        <badge text="成为会员"></badge>
                    </span>

                </cell>
                <cell is-link>
                    <span slot="title">
                        <i class="icon iconfont icon-tuijian" style="font-size: 20px;color:grey;"></i>
                        <span>推荐车汇惠</span>
                    </span>
                </cell>
                <cell is-link>
                    <span slot="title">
                        <i class="icon iconfont icon-artboard7" style="font-size: 20px;color:grey;"></i>
                        <span>设置</span>
                    </span>
                </cell>
            </group>
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
        name: 'app',
        data() {
            return {
                isLogin: false
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
            loginOrRegister(){
                // this.$router.push({name:'login'});
                if (window.device != null) {
                    api.openWin({
                            name: 'user-info',
                            url: '../user-info/index.html#/login',
                            pageParam: {
                                name: 'test11'
                            }
                        }
                    );
                } else {
                    window.open('../user-info/index.html#/login', '_blank');
                }
            }
        }
    }
</script>

<style scoped lang="less">
    @import '~vux/src/styles/reset.less';

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

    .main-section {
        margin: 48px auto;
    }

    .main-section .item {
        margin: 25px 0;
    }

    .main-section .item:first-child {
        margin-top: 68px;
    }

    .main-section .item .subitem {
        margin: 10px 0;
    }

    .popover-demo-content {

        padding: 5px 10px;
    }

</style>
