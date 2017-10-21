<template>
    <div class="address-panel">
        <header id="header" class="header" style="border-bottom: 1px solid #D9D9D9;">
            <span class="back event-back left" @click="back()">
                <i class="icon iconfont icon-back" style="font-size: 20px;"></i>
            </span>
            <span>{{title}}</span>

        </header>
        <div class="main-panel basic-margin">

        </div>

    </div>
</template>

<script>
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
                title: '添加新地址'
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
        margin-top: 50px;
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
