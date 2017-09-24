<!--上门洗车-->
<template>
    <div class="door-wash-panel">
        <header id="header" class="header panel-bottom" style="background-color: white;">
            <span class="back event-back left" @click="back()">
                <i class="icon iconfont icon-back" style="font-size: 20px;"></i>
            </span>
            <span>上门洗车</span>
        </header>
        <div class="main basic-padding" style="background-color: white;">
            <div class="item panel-bottom">
                <div class="grey-color subitem">上门时间</div>
                <div class="subitem">今天12:00</div>
            </div>
            <div class="item panel-bottom">
                <div class="grey-color subitem">上门时间</div>
                <div class="subitem clearfix">
                    <div class="position text-right main-color">
                        <i class="icon iconfont icon-dingwei" style="font-size: 20px;"></i>
                        <span>重新定位</span>
                    </div>
                    <div class="address">天目山路128号2单元602,天目山路128号2单元602</div>
                </div>

            </div>

            <div class="item">
                <div class="grey-color subitem">联系电话</div>
                <div class="subitem">18810291930</div>
            </div>
        </div>
        <footer class="footer">
            <div class="basic-margin">
                <x-button type="primary" class="main-background-color">确认预约</x-button>
            </div>

        </footer>

    </div>
</template>

<script>

    import Lib from 'assets/js/Lib';
    import {
        Search, Group, Panel, Flexbox, FlexboxItem,
        Rater, LoadMore, XButton, Cell
    } from 'vux'

    export default {
        data() {
            return {}
        },
        components: {
            Search, Flexbox, FlexboxItem, Group, Panel, Rater, LoadMore, XButton, Cell
        },
        mounted(){

        },
        //相关操作事件
        methods: {
            back(){
                if (window.device != null) {
                    api.closeWin();
                }
            }
        }
    }
</script>

<style scoped lang="less">
    @import '~vux/src/styles/1px.less';

    .door-wash-panel {
        position: relative;
    }
    .door-wash-panel .main {
        margin: 58px 0;
    }

    .door-wash-panel .main .item {
       padding: 10px 0;
    }

    .main .item:first-child {
        margin-top: 10px;
    }

    .main .item .subitem {
        margin: 10px 0;
    }

    .popover-demo-content {

        padding: 5px 10px;
    }

    .subitem .position {
        width: 95px;
        float: right;
    }

    .address {
        margin-right: 96px;

    }


</style>



