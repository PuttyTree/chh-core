<!--上门洗车-->
<template>
    <div class="door-wash-panel basic-margin">
        <header id="header" class="header header-ex">
            <span class="back event-back left" @click="back()">
                <i class="icon iconfont icon-back" style="font-size: 20px;"></i>
            </span>
            <span>上门洗车</span>
        </header>
        <div class="main-section">
            <div class="item">
                <div class="grey-color subitem">上门时间</div>
                <div class="subitem">今天12:00</div>
            </div>
            <div class="item">
                <div class="grey-color subitem">上门时间</div>
                <div class="subitem">
                    <flexbox>
                        <flexbox-item :span="3/4" style="position: relative;">
                            <div>天目山路128号2单元602,天目山路128号2单元602</div>
                        </flexbox-item>
                        <flexbox-item :span="1/4">
                            <div class="text-right main-color">
                                <i class="icon iconfont icon-dingwei" style="font-size: 20px;"></i>
                                <span>重新定位</span>
                            </div>
                        </flexbox-item>
                    </flexbox>
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

    .header-ex {
        border-bottom: 1px solid rgba(178, 178, 178, 0.5);
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



