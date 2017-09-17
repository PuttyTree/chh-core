<template>
    <div id="home" class="retailer-wash-panel">

        <header id="header" class="header">
            <div class="back event-back"></div>
            <div class="search">
                <search @on-submit="onSubmit"
                        :auto-fixed="false"
                        placeholder="输入车行名"
                        ref="search"></search>
            </div>
            <span class="right">
                <i class="icon iconfont icon-zhizhen" style="font-size: 30px;"></i>
            </span>
        </header>
        <div class="propagation">
            <img src="../assets/retailer-propagation.png" width="100%" height="90">
        </div>
    </div>
</template>

<script>

    import Lib from 'assets/js/Lib';
    import {Search} from 'vux'

    export default {
        data() {
            return {
                results: []
            }
        },
        components: {
            Search
        },
        mounted(){
            debugger;
            console.log(this.$refs.search);
            var dom = this.$el.querySelector('.weui-search-bar__cancel-btn');
            if (dom) {
                dom.style.display = 'none';
            }
        },
        //相关操作事件
        methods: {
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
        display: inline-block;
        height: 30px !important;
        line-height: 30px !important;
    }

    .propagation {
        margin-top: 48px;
        height: 90px;
    }

</style>



