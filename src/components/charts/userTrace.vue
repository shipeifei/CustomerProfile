<template>
<div>
  <div class="history">
    <div class="history-date" v-for="y in oldEvents">
      <div class="year">
        <div>{{y.year}}年</div>
      </div>
      <ul>
        <li :class="[index % 2 == 0 ? 'right' : 'left']" v-for="(e, index) in y.events">
          <template v-if="index % 2 == 0">
            <h3>{{e.date}}<span>{{y.year}}</span></h3>
            <dl>
                <el-tooltip v-if="e.desc" class="item" effect="light" :content="e.desc" placement="top">
                    <span>{{e.event}}</span>
                </el-tooltip>
                <span v-else>{{e.event}}</span>
            </dl>
          </template>
          <template v-else>
            <dl>
                <el-tooltip v-if="e.desc" class="item" effect="light" :content="e.desc" placement="top">
                    <span>{{e.event}}</span>
                </el-tooltip>
                <span v-else>{{e.event}}</span>
            </dl>
            <h3>{{e.date}}<span>{{y.year}}</span></h3>
          </template>
        </li>
      </ul>
    </div>
  </div>
  <div v-if="hasRecentEvents" class="dashed">
  </div>
  <div v-if="hasRecentEvents" class="history">
    <div class="history-date" v-for="(y, index) in recentEvents">
      <div class="year" v-if="(index > 0) || (y.year != oldEvents[oldEvents.length - 1].year)">
        <div>{{y.year}}年</div>
      </div>
      <ul>
        <li :class="[index % 2 == 0 ? 'right' : 'left']" v-for="(e, index) in y.events">
          <template v-if="index % 2 == 0">
            <h3>{{e.date}}<span>{{y.year}}</span></h3>
            <dl>
                <el-tooltip v-if="e.desc" class="item" effect="light" :content="e.desc" placement="top">
                    <span>{{e.event}}</span>
                </el-tooltip>
                <span v-else>{{e.event}}</span>
            </dl>
          </template>
          <template v-else>
            <dl>
                <el-tooltip v-if="e.desc" class="item" effect="light" :content="e.desc" placement="top">
                    <span>{{e.event}}</span>
                </el-tooltip>
                <span v-else>{{e.event}}</span>
            </dl>
            <h3>{{e.date}}<span>{{y.year}}</span></h3>
          </template>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script type="text/babel">
    import { mapGetters } from 'vuex'

    export default {
        name: 'userTrace',
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
            }),
            hasRecentEvents() {
              let hasRecentEvents = false;
              this.user_datas.userTrace.forEach(y => {
                y.events.forEach(e => {
                  if (!e.event) {
                    hasRecentEvents = true;
                  }
                });
              });
              return hasRecentEvents;
            },
            oldEvents() {
              // 获取最近轨迹之前的所有轨迹
              if (!this.hasRecentEvents) {
                return this.user_datas.userTrace;
              }

              const oldEvents = [];

              this.user_datas.userTrace.forEach(y => {
                let hasRecentEvents = false;
                const events = [];
                y.events.forEach(e => {
                  if (!e.event) {
                    hasRecentEvents = true;
                  }
                  if (e.event && !hasRecentEvents) {
                    events.push({...e});
                  }
                });
                if (events.length) {
                  oldEvents.push({
                    year: y.year,
                    events
                  });
                }
              });

              return oldEvents;
            },
            recentEvents() {
              // 获取最近的轨迹
              const recentEvents = [];

              if (this.hasRecentEvents) {
                this.user_datas.userTrace.forEach(y => {
                  let hasRecentEvents = false;
                  const events = [];
                  y.events.forEach(e => {
                    if (!e.event) {
                      hasRecentEvents = true;
                    }
                    if (e.event && hasRecentEvents) {
                      events.push({...e});
                    }
                  });
                  if (events.length) {
                    recentEvents.push({
                      year: y.year,
                      events
                    });
                  }
                });
              }

              return recentEvents;
            }
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

<style scoped>
    .history {
        background: url(../../assets/images/timeline/line4.png) repeat-y 50% 0;
    }

    .dashed {
        background: url(../../assets/images/timeline/dotted-line.png) repeat-y 50% 0;
        overflow: hidden;
        height: 77px;
        margin-left: -1px;
        margin-top: -6px;
    }
            
    .history-date {
        overflow: hidden;
        width: 100%;
    }

    .history-date .year {
        text-align: center;
        width: 100%;
        background: url(../../assets/images/timeline/icon9.png) no-repeat 50% 0;
        height: 87px;
        font-size: 25px;
    }

    .history-date .year div {
        display: inline-block;
        margin-left: -200px;
        margin-top: 25px;
    }

    .history-date ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }
            
    .history-date ul li {
        padding: 0;
        margin: 0;
        padding-top: 30px;
        padding-bottom: 30px;
        background: url(../../assets/images/timeline/icon7.png) no-repeat 50% 50px;
        +background: url(../../assets/images/timeline/icon7.png) no-repeat 50% 50px;
        zoom: 1;
        height: 14px;
    }
            
    .history-date ul li.left h3 {
        float: right;
        width: 50%;
        text-align: left;
        margin-right: -30px;
        margin-top: -30px;
        color: #878787;
        font: normal 18px/16px Arial;
    }

    .history-date ul li.right h3 {
        width: 50%;
        text-align: right;
        margin-left: -30px;
        margin-top: 15px;
        color: #878787;
        font: normal 18px/16px Arial;
    }
            
    .history-date ul li h3 span {
        display: block;
        color: #ADADAD;
        font-size: 12px;
        padding-left:15px;
    }
            
    .history-date ul li dl {
        margin-top: -13px;
    }

    .history-date ul li.left dl {
        background: url(../../assets/images/timeline/right_arrow.png) no-repeat 100% 0;
        float: right;
        margin-right: 52%;
        margin-top: 10px;
        padding-right: 20px;
        display: block;
        background-color: #FFBB42;
        height: 40px;
        width: auto;
    }

    .history-date ul li.right dl {
        background: url(../../assets/images/timeline/left_arrow.png) no-repeat 0 0;
        float: left;
        margin-left: 52%;
        margin-top: -58px;
        display: block;
        background-color: #FFBB42;
        height: 40px;
        width: auto;
    }
            
    .history-date ul li dl dt {
        font-size: 30px;
        line-height: 28px;
    }
            
    .history-date ul li dl span{
        display: block;
        font-size: 20px;
        padding: 2px 9px 9px 29px;
        color: #fff;
    }
            
    .history-date h2 a.right {
        margin: 15px 317px 0 0;
        +margin: 15px 600px 0 0;
        float: right;
    }
</style>
