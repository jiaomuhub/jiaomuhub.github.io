<template>
    <div id="app">
        <!-- v-lazyload="item.src"-->
        <img v-for="item in imageSrc" :src="item.src"/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data () {
            return {
                imageSrc: [
                    {src: require('./assets/hj.jpg')},
                    {src: require('./assets/lj.png')},
                    {src: require('./assets/sm.jpg')},
                    {src: require('../fullPage/assets/1.jpg')},
                    {src: require('../fullPage/assets/2.jpg')},
                    {src: require('../fullPage/assets/3.jpg')},
                    {src: require('../fullPage/assets/4.jpg')},
                    {src: require('../fullPage/assets/5.jpg')},
                    {src: require('./assets/yy.jpg')},
                    {src: require('./assets/zs.jpg')}
                ]
            }
        },
        components: {
        },
        mounted () {
            // this.getList();
        },
        methods: {
        }
    }
</script>

<style>
    @import "../../../static/reset.css";
    body, html, #app {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
</style>
