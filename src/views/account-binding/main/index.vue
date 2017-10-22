<template>
    <div id="setting" class="account-binding-panel">
        <div class="basic-padding setting">
            <flexbox v-for="(item,index) in setting" :key="index"
                     class="default-margin item"
            >
                <flexbox-item>
                    <div class="text-left" style="background-color: white;">
                        <i class="icon iconfont" v-bind:class="item.icon" v-bind:style="{fontSize: item.iconSize}"></i>
                        <span style="font-size: 18px;" class="vertical-middle">{{item.title}}</span>
                    </div>
                </flexbox-item>
                <flexbox-item>
                    <div class="text-right " style="position: relative;padding-top: 3px;" tapmode
                         @click="onCellClick(item)">
                        <span style="position: absolute;top:4px;right:30px;"
                              v-bind:class="item.activeColor">{{item.value}}</span>
                        <span>
                            <x-icon type="ios-arrow-forward" size="30"></x-icon>
                        </span>

                    </div>
                </flexbox-item>
            </flexbox>
        </div>
        <br>
    </div>
</template>

<script>
    import Lib from 'assets/js/Lib';
    import {Flexbox, FlexboxItem, XButton} from 'vux';
    import {SETTING} from './config';
    let _ = require('lodash');
    export default {
        name: 'app',
        data(){
            return {
                setting: SETTING
            };
        },
        components: {
            Flexbox, FlexboxItem, XButton
        },
        methods: {
            onCellClick(item){
                if (_.isNil(item.link)) {
                    return;
                }
                if (window.device === 'app') {
                    api.openWin({
                            name: item.name,
                            url: item.link,
                            pageParam: {
                                name: 'test11'
                            }
                        }
                    );
                } else {
                    window.open(item.link, '_blank');
                }

            }
        }

    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';

    .account-binding-panel {
        position: relative;
        margin-top: 53px;
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
