<!--我的爱车-->
<template>
    <div class="my-car-panel">
        <header id="header" class="header panel-bottom">
            <span class="back event-back left" @click="back()">
                <i class="icon iconfont icon-back" style="font-size: 20px;"></i>
            </span>
            <div>我的爱车</div>
        </header>
        <div class=" main">
            <div class="car basic-padding " v-for="(item,index) in list" :key="index">
                <div class="default-margin info clearfix">
                    <div class="snapshot vertical-middle ">
                        <img v-bind:src="item.img" width="100" height="70" class="vertical-middle">
                    </div>
                    <div class="desc">
                        <div class="car-region">{{item.region}}</div>
                        <div class="brand grey-color">{{item.brand}}</div>
                    </div>
                </div>

                <div class="setting">
                    <check-icon :value="item.defaulted">默认车辆</check-icon>
                    <span class="edit">
                        <i class="icon iconfont icon-bianji grey-color"></i>
                        <i class="icon iconfont icon-huishouzhan grey-color"></i>
                    </span>

                </div>
            </div>

        </div>
        <footer class="footer text-center ">
            <div class="basic-margin">
                <x-button type="primary" class="main-background-color">添加车辆</x-button>
            </div>
        </footer>
    </div>
</template>
<script>
    import Lib from 'assets/js/Lib';
    import {XButton, Group, Panel, Flexbox, FlexboxItem, Rater, CheckIcon} from 'vux';
    export default{
        data() {
            return {
                demo1: false,
                list: [{
                    region: '浙A KS129',
                    brand: '起亚KS',
                    img: '../../static/img/user-info/my-car-avatar.png',
                    defaulted: true

                }, {
                    region: '浙A KS129',
                    brand: '起亚KS',
                    img: '../../static/img/user-info/my-car-avatar.png',
                    defaulted: false
                }]
            }
        },
        components: {XButton, Panel, CheckIcon},
        methods: {
            back(){
                if(window.device){
                    /*api.closeWin();*/
                    api.closeFrame();
                }else{
                    this.$router.push({path: '/'});
                }
            }
        }

    }
</script>
<style scoped lang="less">
    @import '~vux/src/styles/1px.less';

    .my-car-panel .main {
        margin-top: 58px;
    }

    .car {
        height: 140px;
        background-color: white;
        margin: 10px 0;
    }

    .car .info {
        position: relative;
        height: 70px;
        padding: 10px 0;
        border-bottom: 1px solid #E5E5E5;
    }

    .info .snapshot {
        float: left;
        width: 100px;
        height: 100%;
        overflow: hidden;
    }

    .info .desc {
        margin-left: 100px;
        padding-left: 10px;
        height: 100%;
        overflow: hidden;
        position: relative;
    }

    .info .car-region {
        position: absolute;
        top: 10px;
        left: 5px;
    }

    .desc .brand {
        position: absolute;
        bottom: 10px;
        left: 5px;
        font-size: 15px;
    }

    .car .setting {
        margin: 10px 0;
        position: relative;
    }

    .setting .edit {
        position: absolute;
        right: 0;

    }

    .setting .edit i {
        margin: 0 10px;
        font-size: 25px;
    }
</style>
