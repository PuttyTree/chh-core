<template>
    <div class="account-binding-change-panel">

        <div class="basic-padding" style="background-color: white;">
            <group>
                <x-input title="原手机号" name="mobile" keyboard="number" value="18862730101"
                         is-type="china-mobile" disabled></x-input>
            </group>
        </div>

        <div class="basic-padding" style="background-color: white; margin-top: -10px;">
            <group ref="group1">
                <x-input title="新手机号" name="mobile" placeholder="请输入新的手机" keyboard="number"
                         is-type="china-mobile"></x-input>
                <x-input title="验证码" class="weui-vcode" placeholder="请输入验证码" ref="verify">
                    <span slot="right" class="verify-code main-color text-right"
                          style="margin-right: -15px;">获取验证码</span>
                </x-input>
            </group>
        </div>

        <br>
        <div class="basic-margin">
            <x-button type="primary" class="main-background-color">确认更改</x-button>
        </div>
    </div>
</template>

<script>
    import Lib from 'assets/js/Lib';
    import {Group, Flexbox, FlexboxItem, XButton, XInput} from 'vux';
    export default {
        name: 'app',
        data(){
            return {};
        },
        components: {
            Group, Flexbox, FlexboxItem, XButton, XInput
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
        methods: {}

    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';

    .account-binding-change-panel {
        position: relative;
        margin-top: 58px;
    }

    .setting {
        background-color: white;
        border-top: 1px solid rgba(217, 217, 217, 0.5);
        border-bottom: 1px solid rgba(217, 217, 217, 0.5);
    }

    .setting .item {
        background-color: white;
        padding: 5px 0;
        border-bottom: 1px solid rgba(217, 217, 217, 0.5);
    }

    .setting .item:last-child {
        border-bottom: none !important;
    }

    .vux-x-icon {
        fill: #D9D9D9;
    }
</style>
