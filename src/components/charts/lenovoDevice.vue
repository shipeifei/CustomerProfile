<template>
<div  class="lenovo-device-container">
    <h2>已有联想设备</h2>
    <ul>
        <li>ZUK</li>
        <li>Moto Z</li>
    </ul>
</div>
</template>
<script type="text/babel">
    import { mapGetters } from 'vuex'
    export default {
        name: 'lenovoDevice',
        data() {
            return {
               chart:null, 
               labelPosition: 'right',
               activeNames: ['1']
            }
        },
        computed: {
            ...mapGetters({
                home_datas: 'home_datas',
                user_datas: 'user_datas'
            })
        },
        created () {
            //this.$store.dispatch('getHomeInfo')
        },
        methods: {
            
        },
        mounted() {
          
        }
    }
</script>
<style lang='less' scoped>
    .lenovo-device-container{
        padding: 0;
        margin:0;
        margin-left: 80px;
        margin-top: -19px;
        h2{
            font-size: 18px;
        }
        ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        li{
        width:80px;    
        padding: 0 15px;
        margin: 10px;
        border-radius: 2px;
        font-size: 12px;
        height: 30px;
        line-height: 30px;
        text-align: left;
        border-color: #20a0ff;
        background-color: #20a0ff;
        color: #fff;
        cursor: default;
        }
    }
    }
</style>
