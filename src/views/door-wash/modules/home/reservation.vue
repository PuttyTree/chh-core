<!--等待上门-->
<template>
    <div class="reservation-panel">
        <!-- <div class="main basic-padding" style="background-color: white;">
         </div>-->
    </div>
</template>
<script>

    import Lib from 'assets/js/Lib';
    import {
        Group, Panel
    } from 'vux';
    export default {
        data() {
            return {
                map: null
            }
        },
        components: {
            Group, Panel
        },
        mounted(){
            this.initHeaderPanel();
            if (window.device === 'app') {
                this.map = api.require('bMap');
                this.openMap();
            }


        },
        beforeDestroy(){
            if (this.map) {
                this.map.close();
            }
        },
        methods: {
            initHeaderPanel(){
                document.querySelector('header #title').innerHTML = '等待上门';
            },
            openMap(){
                this.map.open({
                    rect: {
                        x: 0,
                        y: 58,
                        h: 600
                    },
                    center: {
                        lon: 116.4021310000,
                        lat: 39.9994480000
                    },
                    zoomLevel: 10,
                    showUserLocation: true,
                    fixedOn: api.frameName,
                    fixed: true
                }, function (ret) {
                    if (ret.status) {
                        alert('地图打开成功');
                    }
                });
            }
        }
    }
</script>
<style scoped lang="less">
    .reservation-panel {
        position: relative;
    }

    .reservation-panel .main {
        margin: 58px 0;
    }

</style>