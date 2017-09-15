<template>
    <div id="home" class="home-panel">
        <div id="home-header" class="home-header"
             v-bind:style="{backgroundColor: headerBackColor}"
        >
            <span class="position">
                <i class="icon iconfont icon-zhizhen" style="font-size: 30px;"></i>
                重庆
            </span>
            <span class="scan" @click="test()">
                <i class="icon iconfont icon-saomiao" style="font-size: 25px;"></i>
            </span>
        </div>
        <div style="height: 1000px;position: relative;">
            <div style="position: relative;">
                <img src="./assets/slide.png" width="100%" height="226"/>
            </div>

        </div>
    </div>
</template>

<script>

    import Lib from 'assets/js/Lib';
    import {Cell, Group, Divider} from 'vux'

    export default {
        data() {
            return {
                headerBackColor: 'transparent',
                webname: 5464,
            }
        },
        components: {
            Cell, Group, Divider
        },
        //实例初始化最之前，无法获取到data里的数据
        beforeCreate(){

        },
        //在挂载开始之前被调用
        beforeMount(){
        },
        //已成功挂载，相当ready()
        mounted(){
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy(){
            window.removeEventListener('scroll', this.handleScroll);
        },
        //相关操作事件
        methods: {
            handleScroll () {
                if (window.scrollY > 5 && window.scrollY < 150) {
                    this.headerBackColor = 'rgba(251, 168, 0, 0.4)';
                } else if (window.scrollY >= 150) {
                    this.headerBackColor = 'rgb(251, 168, 0)';
                }
                else {
                    this.headerBackColor = 'transparent';
                }
            },
            test(){
                if (window.device != null) {
                    api.openWin({
                        name: 'page1',
                        url: '../apicloud/index.html',
                        pageParam: {
                            name: 'test'
                        }
                    });
                }


            }
        }
    }
</script>

<style scoped>
    .home-panel {
        position: relative;
    }

    .home-header {
        height: 48px;
        line-height: 48px;
        text-align: center;
        position: fixed;
        z-index: 100;
        left: 0;
        right: 0;
        width: 100%;
        font-size: 18px;
        color: white;
        background-color: RGBA(251, 168, 0, 0.4);
    }

    .home-header .position {
        position: absolute;
        left: 15px;
        height: 48px;
        line-height: 48px;
    }

    .home-header .scan {
        position: absolute;
        right: 15px;
        height: 48px;
        line-height: 48px;
    }


</style>



