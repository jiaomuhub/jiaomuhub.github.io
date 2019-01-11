<template>
    <transition name="mask-bg-fade">
        <div class="mask" v-show="show">
            <div class="mask_bg"></div>
            <transition name="slide-fade">
                <div class="modelBox" v-show="show">
                    <div class="tipIcon" v-bind:class="confirmModalOptions.type||'warning'"></div>
                    <div class="closeModel" v-on:click="closeModel()"></div>
                    <div class="title">{{confirmModalOptions.title || "提示"}}</div>
                    <div class="message textCenter">{{confirmModalOptions.message || " "}}</div>
                    <div class="model_btnBox">
                        <button class="dh_button_default2" v-on:click="confirmCancel()">
                            {{confirmModalOptions.btnCancelText || "取消"}}
                        </button>
                        <button class="dh_button_blue" v-on:click="confirmSubmit()">
                            {{confirmModalOptions.btnSubmitText || "确定"}}
                        </button>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>
<script>
    export default {
        props: ["confirmModalOptions"],
        data() {
            return {
                show: false,   // 是否显示模态框
            }
        },
        methods: {
            closeModel: function () {
                this.show = false;
            },
            showModel: function () {
                this.show = true;
            },
            confirmCancel: function () {
                this.show = false;
                if(typeof (this.confirmModalOptions.btnCancelFunction)==='function'){
                    this.confirmModalOptions.btnCancelFunction()
                }
            },
            confirmSubmit: function () {
                this.show = false;
                if(typeof (this.confirmModalOptions.btnSubmitFunction)==='function'){
                    this.confirmModalOptions.btnSubmitFunction()
                }
            }
        }
    }
</script>
<style lang="scss">
    .mask_bg {
        position: fixed;
        z-index: 1000;
        top: 0px;
        right: 0px;
        left: 0px;
        bottom: 0px;
        background: rgba(0, 0, 0, 0.6);
    }
    .modelBox {
        position: absolute;
        display: table;
        z-index: 5000;
        width: 80%;
        max-width: 300px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background-color: rgb(255, 255, 255);
        text-align: center;
        margin: auto;
        border-radius: 3px;
        overflow: hidden;
    }
    .title {
        font-weight: 400;
        font-size: 18px;
        padding: 1.0em 1.6em 0.5em;
    }
    .textCenter {
        min-height: 40px;
        font-size: 15px;
        line-height: 1.3;
        overflow-wrap: break-word;
        word-break: break-all;
        color: rgb(153, 153, 153);
        padding: 0px 1.6em 0.8em;
    }
    .model_btnBox {
        position: relative;
        line-height: 48px;
        font-size: 18px;
        display: flex;
        text-align: center;
    }
    .model_btnBox::after {
        content: " ";
        position: absolute;
        left: 0px;
        top: 0px;
        right: 0px;
        height: 1px;
        color: rgb(213, 213, 214);
        transform-origin: 0px 0px 0px;
        transform: scaleY(0.5);
        border-top: 1px solid rgb(213, 213, 214);
    }
    .dh_button_default2, .dh_button_blue {
        width: 50%;
        text-align: center;
        padding: 10px;
    }
    .dh_button_blue {
        color: #03b488;
        border-left: 1px solid #f2f2f2;
    }
</style>