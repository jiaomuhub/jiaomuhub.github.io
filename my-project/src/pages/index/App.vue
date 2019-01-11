<template>
    <div id="app">
        <button class="test-btn" @click="click_btn('1')">alert</button>
        <button class="test-btn" @click="click_btn('2')">comfirm</button>
        <button class="test-btn" @click="click_btn('3')">loading</button>
        <button class="test-btn" @click="click_btn('4')">scroll</button>
        <button class="test-btn" @click="click_btn('5')">swipe</button>
        <button class="test-btn" @click="click_btn('6')">upload</button>
        <button class="test-btn" @click="click_btn('7')">lazyLoad</button>
        <button class="test-btn" @click="click_btn('8')">全屏滚动</button>
        <button class="test-btn" @click="click_btn('9')">左滑删除</button>
        <button class="test-btn" @click="click_btn('10')">左右滑动</button>


        <alert :alertMsg="alertMsg"></alert>
        <d-confirm :confirmModalOptions="confirmOptions" ref="myConfirm"></d-confirm>
        <d-loading :loadMsg="loadMsg"></d-loading>
        <!--<router-view/>-->
    </div>
</template>

<script>
    import alert from '@/components/alert'
    import DConfirm from '@/components/comfirm'
    import DLoading from '@/components/loading'
    export default {
        name: 'App',
        data () {
            return {
                alertMsg: { //alert配置参数
                    msg: '获取成功',
                    isShowAlert: false
                },
                loadMsg: { //loading配置参数
                    // msg: '加载中',
                    isShowLoading: false
                },
                confirmOptions: {}, //确认框参数
            }
        },
        components: {
            alert,
            DConfirm,
            DLoading
        },
        methods: {
            click_btn: function (index) {
                let that = this;
                if (index == 1) { //alert
                    that.alertMsg.isShowAlert = true;
                }
                if (index == 2) { //comfirm
                    that.$refs.myConfirm.showModel();
                    that.confirmOptions = {
                        type: "warning",//warning
                        title: "提示",//提示
                        message: "are you ok?",//""
                        btnCancelText: "取消",//取消
                        btnSubmitText: "确定",//确定
                        btnSubmitFunction: function () {
                            console.log('ok')
                        },
                        btnCancelFunction: function () {
                            console.log('no')
                        }
                    }
                }
                if (index == 3) { //loading
                    that.loadMsg.isShowLoading = true;
                    setTimeout(function () {
                        that.loadMsg.isShowLoading = false;
                    }, 2000)
                }
                if (index == 4) { //scroll
                   window.location.href = '/scroll.html'
                }
                if (index == 5) { //轮播
                   window.location.href = '/swipe.html'
                }
                //上传裁剪
                if (index == 6) { //npm install --save cropper js    npm install --save jquery
                    window.location.href = '/upload.html'
                }
                if (index == 7) { //npm install --save cropper js    npm install --save jquery
                    window.location.href = '/lazyLoad.html'
                }
                if (index == 8) { //npm install --save cropper js    npm install --save jquery
                    window.location.href = '/fullPage.html'
                }
                if (index == 9) {
                    window.location.href = '/deleteSlider.html'
                }
                if (index == 10) {
                    window.location.href = '/Scroller.html'
                }
            }
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
    .test-btn {
        width: 100%;
        height: 30px;
        margin-bottom: 0.3rem;
        margin-top: 0.3rem;
    }
</style>
