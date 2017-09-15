<template>
    <div id="home" class="home-panel">
        <header id="header">
            <div class="back event-back"></div>
            <h1 id="title">shop</h1>
        </header>
        <div>
            hello

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
        },
        beforeDestroy(){
        },
        //相关操作事件
        methods: {}
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



