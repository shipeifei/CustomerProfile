<template>
    <div class="user-detail">
        <div class="left">
            <div class="consumer">
                <consumer></consumer>
            </div>
            <div class="social">
                <social></social>
            </div>
        </div>
        <div class="img middle">
            <img src="../../../assets/images/WordArt2.png" alt="" width="65%"></img>
        </div>
        <div class="basic-info">
            <basic-info></basic-info>
        </div>
    </div>
</template>

<script type="text/babel">
    import basicInfo from '@/components/user/userDetail/basicInfo.vue'
    import consumer from '@/components/user/userDetail/consumer.vue'
    import social from '@/components/user/userDetail/social.vue'
    import { mapGetters } from 'vuex'

    export default {
        name: 'personPrefecence',
        components: {
            'basicInfo': basicInfo,
            'consumer': consumer,
            'social': social
        },
        computed: {
            ...mapGetters({
                home_datas: 'home_datas',
                user_datas: 'user_datas'
            })
        },
        created() {
        }
    }
</script>

<style scoped>
    .left {
        float: left;
        width: 30%;
    }
    .middle {
        float: left;
        width: 40%;
    }
    .social {
        margin-top: 30px;
    }
    .basic-info {
        float: right;
        width: 30%;
    }
</style>
