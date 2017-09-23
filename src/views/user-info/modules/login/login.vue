<template>
    <div class="login-panel">
        <header id="header" class="header panel-bottom">
            <span class="back event-back left" @click="back()">
                <i class="icon iconfont icon-back" style="font-size: 20px;"></i>
            </span>
            <span>车汇惠</span>

        </header>
        <div class=" basic-margin main">

            <group ref="group1">
                <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number"
                         is-type="china-mobile"></x-input>
                <x-input title="密码" class="weui-vcode" placeholder="请输入验证码" ref="verify"
                         style="border: none !important;">
                    <span slot="right" class="verify-code main-color">获取动态密码</span>
                </x-input>

            </group>
            <br>
            <x-button type="primary" class="main-background-color">开始使用</x-button>
            <br>
            <div class="text-center" style="font-size: 14px;">
                <span class="grey-color">开始使用即表示同意</span>
                <a class="main-color">《车汇惠用户服务协议》</a>
            </div>
        </div>
        <footer class="footer text-center" style="height: 125px !important;line-height: normal;">
            <div class="grey-color">社交帐号登录</div>
            <flexbox>
                <flexbox-item>
                    <div class="text-center">
                        <img src="../../assets/weixin.png">
                        <br>
                        <span>微信登录</span>
                    </div>
                </flexbox-item>
                <flexbox-item>
                    <div class="text-center">
                        <img src="../../assets/qq.png"/>
                        <br>
                        <span>QQ登录</span>

                    </div>
                </flexbox-item>

            </flexbox>

        </footer>
    </div>
</template>

<script>
    import Lib from 'assets/js/Lib';
    import {
        Tab, TabItem, Group, Cell,
        Flexbox, FlexboxItem,
        XInput, LoadMore, XButton
    } from 'vux'

    export default {
        components: {
            Tab, TabItem, Group, Cell, Flexbox, FlexboxItem,
            XInput, LoadMore, XButton
        },
        data () {
            return {
                password: ''
            }
        },
        mounted(){


            let dom = this.$refs.verify.$el.querySelector('.weui-label');
            if (dom) {
                dom.style['width'] = '5em';
            }
            let group = this.$refs.group1.$el.querySelector('.weui-cells');
            if (group) {
                let className = group.getAttribute('class');
                group.setAttribute('class', className + ' weui-cells-ex');
            }
        },
        methods: {
            back(){
                this.$router.push({path: '/'});
            },
            onBlur (val) {
                console.log('on blur', val)
            },
        },

    }
</script>

<style scoped>
    .login-panel .main {
        margin-top: 58px;
    }

    .verify-code {
        background-color: transparent !important;
        border: none !important;
        font-size: 15px;
    }

    .weui-cells-ex {

    }

    .weui-cells-ex::before {
        border-top: none !important;
        border-bottom: none !important;
    }

    .weui-cells-ex::after {
        border-top: none !important;
        border-bottom: none !important;
    }

    .weui-cell:before {
        border: none !important;
    }

</style>
