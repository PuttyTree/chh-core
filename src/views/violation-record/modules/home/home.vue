<template>
    <div class="violation-panel">
        <!--  <header id="header" class="header panel-bottom">
              <span class="back event-back left" @click="back()">
                  <i class="icon iconfont icon-back" style="font-size: 20px;"></i>
              </span>
              <span>违章查询</span>
          </header>-->
        <div class="progress">
            <x-progress :percent="percent" :show-cancel="false" v-if="percent<100"></x-progress>
        </div>
        <div class="main">
            <group label-width="6em" label-margin-right="1em" label-align="left">
                <x-address title="查询城市" v-model="addressValue" raw-value :list="addressData"
                           value-text-align="left"></x-address>
                <x-input title="车牌号" placeholder="必填" v-model="value3"></x-input>
                <x-input title="身份证后4位" placeholder="必填" v-model="value4"></x-input>
            </group>
            <br>
            <div class="basic-padding">
                <x-button type="primary" class="main-background-color">保存</x-button>
            </div>
        </div>
    </div>
</template>
<script>
    import Lib from 'assets/js/Lib';
    import {
        Group,
        ChinaAddressData,
        Cell,
        XButton,
        XInput,
        XNumber,
        Datetime,
        Selector,
        XAddress,
        XProgress,
        XTextarea
    } from 'vux';
    export default{
        data(){
            return {
                addressData: ChinaAddressData,
                addressValue: ['重庆市', '市辖区', '江北区'],
                value3: '',
                value4: '',
                percent: 20,
            }
        },
        components: {
            Group, Cell, XButton, XInput, XNumber, XAddress, XProgress
        },
        created(){
            this.percent = 50;
        },
        mounted(){
//            this.percent = 100;
        },
        methods: {
            back(){
                if (window.device === 'app') {
                    api.closeWin();
                } else {
                    this.$router.push({path: '/'});
                }
            }
        }

    }
</script>
<style scoped>
    .violation-panel {
        position: relative;
    }

    .violation-panel .main {
        margin-top: 58px;
    }
</style>