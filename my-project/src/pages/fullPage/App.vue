<template>
    <div>
        <div class="header">首页</div>
        <div id="fullpage">
            <div class="section">
                <img src="./assets/1.jpg" alt="">
            </div>
            <div class="section">
                <img src="./assets/2.jpg" alt="">
            </div>
            <div class="section">
                <img src="./assets/3.jpg" alt="">
            </div>
            <div class="section">
                <img src="./assets/4.jpg" alt="">
            </div>
            <div class="section fp-auto-height">
                <div>尾部<br/><br/><br/><br/>到底了</div>

            </div>
        </div>
    </div>
</template>

<script type="es6">
    export default {
        name: 'slider',
        props: {
        },
        data () {
            return {
            }
        },
        computed:{
        },
        mounted() {
            var fullPageInstance = new fullpage('#fullpage', {
                /*navigation: true,*/
                // sectionsColor:['#ff5f45', '#0798ec', '#fc6c7c', 'grey']
            })
        },
        methods:{
        }
    }
</script>
<style>
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    .header {
        height: 80px;
        background-color: #000000;
        color: #03b488;
        position: relative;
        z-index: 2;
    }
    .section, img {
        height: 100%;
        width: 100%;
    }
</style>
