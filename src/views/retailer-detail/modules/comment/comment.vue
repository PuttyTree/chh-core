<template>
    <div class="retail-comment-panel">
        <header id="header" class="header">
            <span class="back event-back left" @click="back()">
                <i class="icon iconfont icon-back" style="font-size: 20px;"></i>
            </span>
            <span>全部评论</span>

        </header>
        <div class="comments basic-margin">
            <tab>
                <tab-item selected @on-item-click="onItemClick(0)" style="font-size: 16px;">全部</tab-item>
                <tab-item @on-item-click="onItemClick(1)" style="font-size: 16px;">分类一</tab-item>
                <tab-item @on-item-click="onItemClick(2)" style="font-size: 16px;">分类二</tab-item>
            </tab>

            <div style="position: relative; font-size: 15px; margin: 10px 0;" v-for="(item,index) in comments"
                 :key="index">
                <flexbox>
                    <flexbox-item>

                        <div class="text-left single-row">
                            <span class="vertical-middle"> {{item.user}}</span>
                            <img v-if="item.coupon" src="../../assets/coupon1.png" class="vertical-middle"/>
                        </div>

                    </flexbox-item>
                    <flexbox-item>
                        <div class="text-right single-row">{{item.date}}</div>
                    </flexbox-item>
                </flexbox>
                <div class="default-margin">
                    <span>打分</span>
                    <rater v-model="item.star" slot="value" disabled :font-size="18"></rater>
                </div>
                <div class="grey-color default-margin single-row">{{item.comment}}</div>
            </div>
            <load-more :show-loading="false" :tip="'没有更多评论了'" background-color="#fbf9fe"></load-more>

            <x-button type="primary" class="main-background-color">发布评论</x-button>
        </div>
    </div>
</template>

<script>
    import {
        Tab, TabItem, Group, Cell,
        Flexbox, FlexboxItem,
        Rater, LoadMore,XButton
    } from 'vux'

    export default {
        components: {
            Tab, TabItem, Group, Cell, Flexbox, FlexboxItem,
            Rater, LoadMore,XButton
        },
        data () {
            return {
                comments: [
                    {
                        user: '用户188****7018',
                        date: '2017-09-08 12:00:00',
                        coupon: true,
                        star: 5,
                        comment: '#洗的很干净# #靠谱# 还不错，下次有机会再来'
                    }, {
                        user: '用户188****7018',
                        date: '2017-09-08 12:00:00',
                        coupon: false,
                        star: 4,
                        comment: '#洗的很干净# #靠谱# 还不错，下次有机会再来,下次有机会再来,下次有机会再来'
                    }
                ]
            }
        },
        methods: {
            back(){
                this.$router.push({path: '/'});
            },
            onItemClick(index){

            }
        },

    }
</script>

<style scoped>
    .comments {
        margin-top: 48px;
    }
    .vux-tab .vux-tab-item.vux-tab-selected{
        color: #11bf79 !important;
        border-bottom: 3px solid #11bf79 !important;
    }

</style>
