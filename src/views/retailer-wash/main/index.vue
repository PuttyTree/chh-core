<!--门店洗车-车行列表-->
<template>
    <div id="home" class="retailer-wash-panel">

        <header id="header" class="header" style="background-color: white;">
            <span class="back left" style="margin-top: -5px;" @click="back()">
                <i class="icon iconfont icon-back" style="font-size: 20px;"></i>
            </span>
            <div class="search">
                <search @on-submit="onSubmit"
                        :auto-fixed="false"
                        placeholder="输入车行名"
                        ref="search"></search>
            </div>
            <span class="right" style="margin-top: -5px;">
                <i class="icon iconfont icon-dingwei1" style="font-size: 30px;"></i>
            </span>
        </header>
        <div class="propagation">
            <img src="../assets/retailer-propagation1.png" width="100%" height="90">
        </div>
        <flexbox class="retailer-order-panel" style="margin-top: 10px;background-color: white;">
            <flexbox-item>
                <div class="order">
                    全市
                    <i class="icon iconfont icon-down" style="font-size: 18px;"></i>
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="order main-color">
                    距离排序
                     <i class="icon iconfont icon-down" style="font-size: 18px;"></i>
                </div>
            </flexbox-item>
        </flexbox>
        <div class="retailer-list basic-padding">
            <div class="item" v-for="(item,index) in retailerList"
                 @click="onClickDetail(item)"
            >
                <div class="left">
                    <img v-bind:src="item.url" height="96" width="96"/>
                </div>

                <div class="right">
                    <h4 class="single-row">{{item.name}}</h4>
                    <div style="height:26px;line-height: 26px;">
                        <rater v-model="item.star" slot="value" disabled
                               :font-size="22"
                        >
                        </rater>
                        <span class="grey-color" style="font-size: 14px;">{{item.comment}}</span>
                    </div>
                    <div style="margin-top: 26px;font-size: 14px;position: relative;" class="grey-color">
                        <div style="position:absolute;left:0;right: 70px;" class="single-row">
                            <i class="icon iconfont icon-zhizhen" style="font-size: 18px;"></i>
                            <span>{{item.address}}</span>
                        </div>
                        <div style="position: absolute;right:0;width: 120px;" class="text-right">{{item.distance}}</div>
                    </div>
                </div>
            </div>

        </div>
        <load-more :show-loading="false" :tip="'没有更多商家了'" background-color="#fbf9fe"></load-more>

    </div>
</template>

<script>

    import Lib from 'assets/js/Lib';
    import {Search, Group, Panel, Flexbox, FlexboxItem, Rater, LoadMore} from 'vux'

    export default {
        data() {
            return {
                results: [],
                data3: 5,
                retailerList: [
                    {
                        name: '西郊汽车服务连锁(光电园站)',
                        url: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                        star: 5,
                        address: '渝北区金开大道西段',
                        distance: '离我300m',
                        comment: '51人点评'
                    },
                    {
                        name: '靓车洁汽车美容连锁机构（新南路店）',
                        url: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                        star: 5,
                        address: '渝北区新南路454号',
                        distance: '离我300m',
                        comment: '51人点评'
                    },
                    {
                        name: '尚美汽车生活馆',
                        url: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                        star: 5,
                        address: '江北区金科十年城东区2号门7号附7',
                        distance: '离我300m',
                        comment: '51人点评'
                    }

                ]
            }
        },
        components: {
            Search, Flexbox, FlexboxItem, Group, Panel, Rater, LoadMore
        },
        mounted(){
            //去掉“取消”按钮
            let cancelBtn = this.$refs.search.$el.querySelector('.weui-search-bar__cancel-btn');
            if (cancelBtn) {
                cancelBtn.style['display'] = 'none';
            }
            //隐藏背景
            let bar = this.$refs.search.$el.querySelector('.weui-search-bar');
            if (bar) {
                bar.style['background-color'] = 'transparent';
            }

        },
        //相关操作事件
        methods: {
            onClickDetail(item){
                if (window.device != null) {
                    api.openWin({
                        name: 'retailer-detail',
                        url: '../retailer-detail/index.html',
                        pageParam: {
                            name: 'test'
                        }
                    });
                } else {
                    window.open('../retailer-detail/index.html', '_blank');
                }
            },
            back(){
                if (window.device != null) {
                    api.closeWin();
                }
            },
            setFocus () {
                this.$refs.search.setFocus()
            },
            resultClick (item) {
                window.alert('you click the result item: ' + JSON.stringify(item))
            },
            getResult (val) {
                this.results = val ? getResult(this.value) : []
            },
            onSubmit () {
                this.$refs.search.setBlur()
                this.$vux.toast.show({
                    type: 'text',
                    position: 'top',
                    text: 'on submit'
                })
            },
            onFocus () {
                console.log('on focus')
            },
            onCancel () {
                console.log('on cancel')
            }
        }
    }
</script>

<style scoped lang="less">
    @import '~vux/src/styles/1px.less';

    .retailer-wash-panel {
        position: relative;
    }

    .retailer-wash-panel .header .search {
        margin-left: 50px;
        margin-right: 50px;
        height: 25px !important;
        line-height: 25px !important;
        background-color: white;
    }

    .weui-search-bar-ex {
        background-color: transparent !important;
    }

    .propagation {
        margin-top: 58px;
        height: 90px;
    }

    .retailer-order-panel {
        border-bottom: 1px solid #dddddd;
        height: 50px;
        line-height: 50px;
    }

    .retailer-order-panel .order {
        text-align: center;
    }

    .retailer-list {
        /* margin: 10px 15px;*/
        background-color: white;
    }

    .retailer-list .item {
        border-bottom: 1px solid #dddddd;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        margin: 8px auto;
        padding: 8px 0;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        overflow-y: hidden;
    }

    .retailer-list .item:last-child {
        border: none;
    }

    .retailer-list .item .left {
        margin-right: .8em;
        width: 96px;
        height: 96px;
        line-height: 96px;
        text-align: center;
    }

    .retailer-list .item .right {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        min-width: 0;
        height: 96px;
    }

    .retailer-list .item .right h4 {
        font-weight: 500;
        font-size: 18px;
    }

</style>



