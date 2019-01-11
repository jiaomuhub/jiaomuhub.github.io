<template>
    <div id="app">
        <d-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
            <ul>
                <li v-for="(item,index) in listdata" >{{item.name}}</li>
                <li v-for="(item,index) in downdata" >{{item.name}}</li>
            </ul>
        </d-scroll>
        <!--<router-view/>-->
    </div>
</template>

<script>
    import DScroll from '@/components/scroll';
    export default {
        name: 'App',
        data () {
            return {
                //上拉下拉开始
                counter : 1, //默认已经显示出15条数据 count等于一是让从16条开始加载
                num : 20,  // 一次显示多少条
                pageStart : 0, // 开始页数
                pageEnd : 0, // 结束页数
                listdata: [], // 下拉更新数据存放数组
                downdata: []  // 上拉更多的数据存放数组
            }
        },
        components: {
            DScroll
        },
        mounted () {
            this.getList();
        },
        methods: {
            getList(){
                let vm = this;
                $.ajax({
                    url: 'https://api.github.com/repos/typecho-fans/plugins/contents/',
                    type: 'get',
                    dataType: 'json',
                    success: function (res) {
                        // res = res.slice(0,15);
                        if (res.length < vm.num) {
                            vm.$el.querySelector('.load-more').style.display = 'none';
                            vm.listdata = res;
                            return;
                        }else {
                            vm.listdata = res.slice(0,vm.num);
                        }
                    }
                })
            },
            onRefresh(done) {
                this.getList();
                done() // call done

            },
            onInfinite(done) {
                let vm = this;
                $.ajax({
                    url: 'https://api.github.com/repos/typecho-fans/plugins/contents/',
                    type: 'get',
                    dataType: 'json',
                    success: function (res) {
                        vm.counter++;
                        vm.pageEnd = vm.num * vm.counter;
                        vm.pageStart = vm.pageEnd - vm.num;
                        let arr = res;
                        let i = vm.pageStart;
                        let end = vm.pageEnd;
                        for(; i<end; i++){
                            let obj ={};
                            obj["name"] = arr[i].name;
                            vm.downdata.push(obj);
                            if((i + 1) >= res.length){
                                vm.$el.querySelector('.load-more').style.display = 'none';
                                return;
                            }
                        }
                        done() // call done
                    }
                })
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
        overflow: hidden;
    }
</style>
