<!--我的邮寄地址-->
<template>
    <div class="my-address-panel">
        <header id="header" class="header panel-bottom">
            <span class="back event-back left" @click="back()">
                <i class="icon iconfont icon-back" style="font-size: 20px;"></i>
            </span>
            <div>我的邮寄地址</div>
        </header>
        <div class="main">
            <div class="address basic-padding " v-for="(item,index) in list" :key="index">
                <div class="default-margin  info">
                    <div class="name">
                        <span>{{item.name}}</span>
                        <span>{{item.tel}}</span>
                    </div>
                    <div class="detail single-row">{{item.detail}}</div>
                </div>

                <div class="setting">
                    <check-icon :value="item.defaulted">默认地址</check-icon>
                    <span class="edit">
                        <i class="icon iconfont icon-bianji grey-color"></i>
                        <i class="icon iconfont icon-huishouzhan grey-color"></i>
                    </span>

                </div>
            </div>

        </div>
        <footer class="footer text-center ">
            <div class="basic-margin">
                <x-button type="primary" class="main-background-color">添加新地址</x-button>
            </div>
        </footer>
    </div>
</template>
<script>
    import Lib from 'assets/js/Lib';
    import {XButton, Group, Panel, Flexbox, FlexboxItem, Rater, CheckIcon} from 'vux';
    export default{
        data(){
            return {
                list: [{
                    name: '张天天',
                    tel: '18810102000',
                    detail: '重庆市沙坪坝区三星里街道20号18栋2单元,重庆市沙坪坝区三星里街道20号18栋2单元',
                    defaulted: false

                }, {
                    name: '张天天',
                    tel: '18810102000',
                    detail: '重庆市沙坪坝区三星里街道20号18栋2单元',
                    defaulted: true
                }]
            }
        },
        components: {XButton, Panel, CheckIcon},
        methods: {
            back(){

            }
        }

    }
</script>
<style scoped lang="less">
    @import '~vux/src/styles/1px.less';

    .my-address-panel {

    }

    .my-address-panel .main {
        margin-top: 58px;
    }

    .address {
        height: 140px;
        background-color: white;
        margin: 10px 0;
    }

    .address .info {
        position: relative;
        height: 70px;
        padding: 10px 0;
        border-bottom: 1px solid #E5E5E5;
    }

    .info .name {
        padding: 10px auto;
        height: 35px;
        line-height: 35px;
    }

    .info .detail {
        height: 35px;
        line-height: 35px;
        font-size: 14px;
        overflow: hidden;
    }

    .address .setting {
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