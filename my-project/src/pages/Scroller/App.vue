<template>
    <div id="app">
        <nav>
            <p v-for="(item,$index) in arr" @click="toggle($index)" :class="{active:$index==active}">{{item}}</p>
        </nav>
    </div>
</template>


<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                active:0,
                arr:[
                    "新闻",
                    "视频",
                    "社会",
                    "军事",
                    "军事1",
                    "军事2",
                    "军事3",
                    "军事4",
                ]
            }

        },
        methods:{
            toggle(index){
                this.active=index
            }
        }
    }
</script>
<style>
    #app{
        height: 50px;
        width: 100%;
        overflow: hidden;
    }
    #app nav{
        height: 60px;
        padding: 0 10px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: middle;
        -ms-flex-align: middle;
        align-items: middle;
        overflow: scroll;
    }
    #app p{
        text-align: center;
        font-size: 16px;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        padding: 10px;
        margin: 5px;

    }
    #app p.active{
        color: #ffff00;
        background-color: #000000;
    }
</style>