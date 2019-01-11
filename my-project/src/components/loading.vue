<template>
    <div class="loading" v-show="loadMsg.isShowLoading">
        <div class="out-box">
            <img src="./image/loading.png" alt="">
        </div>
        <!--<span>{{ tipMsg.msg }}</span>-->
    </div>
</template>

<script>
    var times;
    export default {
        name: 'alert',
        data () {
            return {
                flag: true
            }
        },
        props: ['loadMsg'],
        watch: {
            'loadMsg.isShowLoading': function (val) {
                let that = this;
                // if(times) {
                //     clearTimeout(times);
                // }
                // times = setTimeout(function () {
                //     that.loadMsg.isShowLoading = false;
                // }, 1600)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .loading {
        position: fixed;
        right: 0;
        left: 0;
        bottom: 0;
        top: 0;
    }
    .out-box {
        width: 6rem;
        height: 6rem;
        background: rgba(0,0,0,.7);
        margin: 6rem auto;
        border-radius: 0.2rem;
        display: flex;
        align-items: center;
        animation:rotating 0.3s linear 1;
    }
    .out-box img {
        width: 2.5rem;
        height: 2.5rem;
        display: block;
        margin: 0 auto;
        -webkit-animation: spin 2s linear infinite;
        animation: spin 1s linear infinite;
    }
    @-webkit-keyframes spin {
        0%   {
            -webkit-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes spin {
        0%   {
            -webkit-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes rotating{
        from{
            margin: 0 auto;
        }
        to{
            margin: 6rem auto;
        }
    }
</style>
