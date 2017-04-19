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
            <img v-if="user_datas.userFeature.sex === '男'" src="./../../../assets/images/wordArtBoy.png" alt=""></img>
            <img v-else src="./../../../assets/images/wordArtGirl.png" alt=""></img>
        </div>
        <div class="basic-info-container">
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
        margin-left: 50px;
        padding-bottom: 15px;
    }
    .middle {
        float: left;
        width: 30%;
        text-align: center;
    }
    .middle img {
        width: 65%;
    }
    .social {
        margin-top: 30px;
    }
    .basic-info-container {
        float: right;
        width: 30%;
    }
</style>
