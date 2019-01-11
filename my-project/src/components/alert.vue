<template>
    <div class="alert" v-show="alertMsg.isShowAlert">
        <span>{{ alertMsg.msg }}</span>
    </div>
</template>

<script>
    var times;
    export default {
        name: 'alert',
        data () {
            return {
            }
        },
        props: ['alertMsg'],
        watch: {
            'alertMsg.isShowAlert': function (val) {
                let that = this;
                if(times) {
                    clearTimeout(times);
                }
                times = setTimeout(function () {
                    that.alertMsg.isShowAlert = false;
                }, 1600)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .alert {
        position: fixed;
        right: 0;
        left: 0;
        bottom: 0;
        top: 0;
        margin: 6rem auto;
        text-align: -webkit-center;
        text-align: center;
        animation:rotating 0.3s linear 1;
    }
    .alert span {
        background: rgba(0,0,0,.7);
        color: #fff;
        padding: 0.4rem 0.6rem;
        border-radius: 0.2rem;
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
