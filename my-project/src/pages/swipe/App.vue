<template>
    <slide-show :slides="slides"></slide-show>
</template>
<script>
    import SlideShow from '@/components/slide'
    export default {
        data () {
            return {
                slides: [
                    {
                        src: 'http://img1.imgtn.bdimg.com/it/u=2657191649,1605050594&fm=26&gp=0.jpg',
                        title: 'nihaoas'
                    },
                    {
                        src: 'http://img0.imgtn.bdimg.com/it/u=2402006254,1188222884&fm=26&gp=0.jpg',
                        title: '23nihaoas2'
                    },
                    {
                        src: 'http://img3.imgtn.bdimg.com/it/u=3334850068,3747139857&fm=26&gp=0.jpg',
                        title: '21nihaoas'
                    },
                    {
                        src: 'http://img0.imgtn.bdimg.com/it/u=954723592,2217864944&fm=26&gp=0.jpg',
                        title: '3423nihaoas'
                    }
                ]
            }
        },
        components: {
            SlideShow,
        }
    }
</script>