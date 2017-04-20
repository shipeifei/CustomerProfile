<template>
<div class="history-container">
    <div class="history" :style="{width: ((allEventsCount + (hasRecentEvents ? 1 : 0)) * 120 + 40) + 'px'}">
        <div class="event above">
            <div v-for="(e, index) in allOldEvents" :class="{'name': index % 2 == 0}">
                <el-tooltip v-if="e.desc" class="item" effect="light" :content="e.desc" placement="top">
                    <span v-if="index % 2 == 0">{{e.event}}</span>
                </el-tooltip>
                <span v-if="index % 2 == 0 && !e.desc">{{e.event}}</span>
            </div>
            <div v-if="hasRecentEvents" class="dashed">
            </div>
            <div v-for="(e, index) in allRecentEvents" :class="{'name': index % 2 == 0}">
                <el-tooltip v-if="e.desc" class="item" effect="light" :content="e.desc" placement="top">
                    <span v-if="index % 2 == 0">{{e.event}}</span>
                </el-tooltip>
                <span v-if="index % 2 == 0 && !e.desc">{{e.event}}</span>
            </div>
        </div>
        <div class="event-line above">
            <div v-for="(e, index) in allOldEvents" :class="{'name': index % 2 == 0}">
                <div></div>
            </div>
            <div v-if="hasRecentEvents" class="dashed">
            </div>
            <div v-for="(e, index) in allRecentEvents" :class="{'name': index % 2 == 0}">
                <div></div>
            </div>
        </div>
        <div class="date above">
            <div v-for="(e, index) in allOldEvents" :class="{'first-event-in-year': e.firstEventInYear}">
                <span v-if="index % 2 == 0" class="year">{{e.year}}</span><span v-if="index % 2 == 0">-{{e.date}}</span>
            </div>
            <div v-if="hasRecentEvents" class="dashed">
            </div>
            <div v-for="(e, index) in allRecentEvents" :class="{'first-event-in-year': e.firstEventInYear}">
                <span v-if="index % 2 == 0" class="year">{{e.year}}</span><span v-if="index % 2 == 0">-{{e.date}}</span>
            </div>
        </div>
        <div class="line">
            <div class="solid">
                <div v-for="e in allOldEvents">
                </div>
            </div>
            <div v-if="hasRecentEvents" class="dashed">
            </div>
            <div class="solid">
                <div v-for="e in allRecentEvents">
                </div>
            </div>
            <div class="arrow">
            </div>
        </div>
        <div class="date below">
            <div v-for="(e, index) in allOldEvents" :class="{'first-event-in-year': e.firstEventInYear}">
                <span v-if="index % 2 == 1" class="year">{{e.year}}</span><span v-if="index % 2 == 1">-{{e.date}}</span>
            </div>
            <div v-if="hasRecentEvents" class="dashed">
            </div>
            <div v-for="(e, index) in allRecentEvents" :class="{'first-event-in-year': e.firstEventInYear}">
                <span v-if="index % 2 == 1" class="year">{{e.year}}</span><span v-if="index % 2 == 1">-{{e.date}}</span>
            </div>
        </div>
        <div class="event-line below">
            <div v-for="(e, index) in allOldEvents" :class="{'name': index % 2 == 1}">
                <div></div>
            </div>
            <div v-if="hasRecentEvents" class="dashed">
            </div>
            <div v-for="(e, index) in allRecentEvents" :class="{'name': index % 2 == 1}">
                <div></div>
            </div>
        </div>
        <div class="event below">
            <div v-for="(e, index) in allOldEvents" :class="{'name': index % 2 == 1}">
                <el-tooltip v-if="e.desc" class="item" effect="light" :content="e.desc" placement="top">
                    <span v-if="index % 2 == 1">{{e.event}}</span>
                </el-tooltip>
                <span v-if="index % 2 == 1 && !e.desc">{{e.event}}</span>
            </div>
            <div v-if="hasRecentEvents" class="dashed">
            </div>
            <div v-for="(e, index) in allRecentEvents" :class="{'name': index % 2 == 1}">
                <el-tooltip v-if="e.desc" class="item" effect="light" :content="e.desc" placement="top">
                    <span v-if="index % 2 == 1">{{e.event}}</span>
                </el-tooltip>
                <span v-if="index % 2 == 1 && !e.desc">{{e.event}}</span>
            </div>
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
            allEvents() {
              let events = [];
              this.user_datas.userTrace.forEach(y => {
                let firstEventInYear = true;
                y.events.forEach((e, index) => {
                  if (e.event) {
                    events.push({
                        year: y.year,
                        firstEventInYear: firstEventInYear,
                        ...e
                    });
                    if (firstEventInYear) {
                        firstEventInYear = false;
                    }
                  }
                });
              });
              return events;
            },
            allEventsCount() {
                return this.allEvents.length;
            },
            allOldEvents() {
              const oldEvents = [];
              let hasRecentEvents = false;

              this.user_datas.userTrace.forEach(y => {
                y.events.forEach(e => {
                  if (!e.event) {
                    hasRecentEvents = true;
                  }
                  if (e.event && !hasRecentEvents) {
                    oldEvents.push({
                        year: y.year,
                        ...e
                    });
                  }
                });
              });

              return oldEvents;
            },
            allRecentEvents() {
              const recentEvents = [];
              let hasRecentEvents = false;

              this.user_datas.userTrace.forEach(y => {
                y.events.forEach(e => {
                  if (!e.event) {
                    hasRecentEvents = true;
                  }
                  if (e.event && hasRecentEvents) {
                    recentEvents.push({
                        year: y.year,
                        ...e
                    });
                  }
                });
              });

              return recentEvents;
            },
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

<style lang="less" scoped>
    .history-container {
        padding: 10px;
        text-align: center;
        overflow-x: auto;

        .history {
            display: inline-block;
            overflow-x: auto;
            text-align: left;

            .event {
                > div {
                    width: 120px;
                    display: inline-block;
                    text-align: center;

                    &.name {
                        border-radius: 3px;
                        padding: 4px 0;
                        background-color: #58C9F3;
                    }
                }
                &.below {
                    margin-top: 4px;
                }
            }

            .event-line {
                > div {
                    width: 120px;
                    display: inline-block;
                    text-align: center;

                    &.name {
                        > div {
                            width: 60px;
                            height: 50px;
                            border-right: 4px dotted #69aa35;
                            margin-top: 10px;
                        }
                    }
                }

                &.below {
                    > div {
                        &.name {
                            > div {
                                margin-top: 5px;
                            }
                        }
                    }
                }
            }

            .date {
                > div {
                    display: inline-block;
                    width: 120px;
                    text-align: center;

                    &.first-event-in-year {
                        .year {
                            font-size: 18px;
                        }
                    }
                }
            }

            .line {
                height: 22px;
                padding: 0;
                margin: 0;

                .solid {
                    background: url(../../assets/images/timeline/line4.png) repeat-x 0 50%;
                    display: inline-block;
                    height: 100%;

                    > div {
                        background: url(../../assets/images/timeline/icon7.png) no-repeat 50% 0;
                        display: inline-block;
                        width: 120px;
                        height: 100%;
                        padding: 0;
                        margin: 0;
                    }
                }

                .dashed {
                    border-top: 5px dotted #69aa35;
                    display: inline-block;
                    height: 8px;
                    padding: 0;
                    margin: 0;
                }

                .arrow {
                    display: inline-block;
                    width: 40px;
                    height: 100%;
                    background: url(../../assets/images/timeline/right-arrow.png) no-repeat 2px 0px;
                    background-size: 40px 22px;
                    margin-left: -24px;
                }
            }

            .dashed {
                width: 100px !important;
            }
        }
    }
</style>
