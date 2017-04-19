import Mock from 'mockjs'

const user1 = {
    // 用户基本信息
    'userBaseInfo': {
        "LenovoID": ['18911004567'],
        "phone": '18911004567',
        "email": "zly1979129@163.com",
        "IMEI": "暂无",
        "MicroblogID": "暂无",
        "WechatID": "暂无",
        "serviceUsersID": "暂无",
    },
    // 用户个人属性
    "userFeature": {
        "origin": "商城",
        "age": "25-34",
        "sex": "男",
        "education": '大专、本科',
        "salary": "10000-15000",
        "career": "互联网/IT",
        "job": "IT工程师",
        "married": "否",
        "hasChildren": "无",
        "hasCar": "有",
        "isStudent": "否",
        "country": "中国",
        "province": "北京市",
        "city": "北京市"
    },
    // 用户地图
    userMap: {
        top: ['重庆','北京','河北'],
        data: [
            {name: '北京',value: 20000 },
            {name: '天津',value: 10000 },
            {name: '上海',value: 1000 },
            {name: '重庆',value: 25000 },
            {name: '河北',value: 10000 },
            {name: '河南',value: 806 }
        ]
    },
    // 设备接入
    "userDevice": {
        "legend": ["PC", "Mobile"],
        "series": [
            { "value": 100, "name": "PC" },
            { "value": 200, "name": "Mobile" }
        ]
    },
    // 手机型号接入
    "phoneModel": {
        "legend": ['Moto Z', 'ZUK'],
        "series": [
            { value: 1000, name: 'Moto Z' },
            { value: 2000, name: 'ZUK' }
        ]
    },
    "serviceBehavior": {
        "legend": ["联想服务网站", "电话服务", "现场服务", "微信公众号"],
        "data": [3, 1, 0, 1]
    },
    // 用户轨迹
    "userTrace": [
        {
            year: 2016,
            events: [
                {
                    date: "01-05",
                    event: "首次下载应用",
                    desc: "下载微信"
                },
                {
                    date: "02-01",
                    event: "注册Lenovo ID",
                    desc: "使用手机号18911004567成功注册联想账户"
                },
                {
                    date: "02-01",
                    event: "首次登陆",
                    desc: "第一次登陆联想官网www.lenovo.com.cn"
                },
                {
                    date: "03-18",
                    event: "首次发帖",
                    desc: "首次发主题为帮忙我选择一个合适的联想产品帖子"
                },
                {
                    date: "04-01",
                    event: "首次购买",
                    desc: "首次购买联想小新电脑一台，价格5996元"
                },
                {
                    date: "12-30",
                    event: "首次使用联想服务",
                    desc: "首次通过电话拨打联想服务寻求解决问题"
                }
            ]
        },
        {
            year: 2017,
            events: [
                {
                    date: "",
                    event: "",
                    desc: ""
                },
                {
                    date: "02-11",
                    event: "最新发帖",
                    desc: "最新发主题为小新粉丝节点赞帖子"
                },
                {
                    date: "03-18",
                    event: "最新购买",
                    desc: "最新购买联想Yoga Pro 5电脑一台，价格9996元"
                },
                {
                    date: "03-18",
                    event: "最新下载",
                    desc: "下载植物大战僵尸2"
                }
            ]
        }
    ],
    // 词云 - 消费购物服务
    "consumer": [
        ["品类购买偏好", "笔记本电脑-拯救者系列"],
        ["产品兴趣偏好", "YOGA710-11银(7Y30/4G/256G SSD)"],
        ["场景兴趣偏好", "商务办公"],
        ["服务用户产品", "笔记本"],
        ["累计购买次数", "3次以上"],
        ["消费总额", "7000以上"],
        ["客单价", "7000-10000"],
        ["笔单价", "4800-5000"],
        ["价值度", "重要价值"]
    ],
    // 词云 - 社区社交图谱
    "social": [
        ["意见领袖", "非意见领袖"],
        ["核心用户", "核心用户"],
        ["交际花", "非交际花"],
        ["活跃分子", "活跃分子"],
        ["好友数量", "3个以上"],
        ["发帖数量", "3个以上"],
        ["回贴数量", "3个以上"],
        ["看帖数量", "3个以上"],
        ["声音正负向", "中"]
    ],
    // 活跃度
    "activity": {
        "byMonth": {
            "app": [(Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0)],
            "forum": [(Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0)],
            "mall": [(Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0)],
            "device": [(Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0)]
        },
        "byDay": {
            "app": [(Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0)],
            "forum": [(Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0)],
            "mall": [(Math.random() * 1).toFixed(0),
                    (Math.random() * 2).toFixed(0),
                    (Math.random() * 1).toFixed(0),
                    (Math.random() * 2).toFixed(0),
                    (Math.random() * 2).toFixed(0),
                    (Math.random() * 2).toFixed(0),
                    (Math.random() * 2).toFixed(0),
                    (Math.random() * 2).toFixed(0),
                    (Math.random() * 2).toFixed(0)],
            "device": [(Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0)]
        }
    },
    // 手机行为偏好 - 应用
    "mobileApps": {
        "legend": ['工作学习','新闻阅读','游戏','生活购物','其它'],
        "data": [
            {value:335, name:'工作学习'},
            {value:233, name:'新闻阅读'},
            {value:678, name:'游戏'},
            {value:109, name:'生活购物'},  
            {value:654, name:'其它'}
        ]
    },
    // 手机行为偏好 - 社交偏好
    "mediaPreference": {
        "legend": [
            { text: '搜索引擎', max: 3600},
            { text: '贴吧', max: 365},
            { text: '微博', max: 700},
            { text: '微信', max: 365},
            { text: '邮箱', max: 365},
            { text: '其他', max: 2500}
        ],
        "data": [1800, 36, 280, 310, 210, 410]
    },
    // 手机行为偏好 - 消费偏好
    "consumePreference": {
        "legend": [
            { text: 'IT数码', max: 365},
            { text: '旅游', max: 1000},
            { text: '家居', max: 365},
            { text: '时尚', max: 700},
            { text: '服装', max: 1000},
            { text: '医疗', max: 600}
        ],
        "data": [180, 80, 200, 460, 270, 80]
    },
    // PC行为偏好 - 应用
    "pcApps": {
        "legend": ['主题壁纸','办公软件','浏览器','聊天通讯','其它'],
        "data": [
            {value:335, name:'主题壁纸'},
            {value:233, name:'办公软件'},
            {value:678, name:'浏览器'},
            {value:109, name:'聊天通讯'},  
            {value:654, name:'其它'}
        ]
    },
    // PC行为偏好 - 商城行为
    "mallBahavior": {
        "legend": ['用户浏览频度', '用户浏览量', '点击分享次数', '立即购买点击行为次数'],
        "data": [522, 220, 47,35]
    },
    // PC行为偏好 - 社区行为
    "communityBahavior": {
        "legend": ['好友数量','看帖数量', '发帖数量','回帖数量'],
        "data": [20,76, 29, 40]
    }
};

const user2 = {
    // 用户基本信息
    'userBaseInfo': {
        "LenovoID": ['zhangly3@lenovo.com'],
        "phone": '13916053476',
        "email": "zhangly3@lenovo.com",
        "IMEI": "暂无",
        "MicroblogID": "暂无",
        "WechatID": "13916053476",
        "serviceUsersID": "暂无",
    },
    // 用户个人属性
    "userFeature": {
        "origin": "商城",
        "age": "35-49",
        "sex": "女",
        "education": '硕士以上',
        "salary": "15000以上",
        "career": "互联网/IT",
        "job": "UI设计师",
        "married": "是",
        "hasChildren": "有",
        "hasCar": "无",
        "isStudent": "否",
        "country": "中国",
        "province": "重庆市",
        "city": "重庆市"
    },
    // 用户地图
    userMap: {
        top: ['重庆','北京','河北'],
        data: [
            {name: '北京',value: 30000 },
            {name: '天津',value: 10000 },
            {name: '上海',value: 1000 },
            {name: '重庆',value: 25000 },
            {name: '河北',value: 20000 },
            {name: '河南',value: 806 }
        ]
    },
    // 设备接入
    "userDevice": {
        "legend": ["PC", "Mobile"],
        "series": [
            { "value": 100, "name": "PC" },
            { "value": 300, "name": "Mobile" }
                    ]
    },
    // 手机型号接入
    "phoneModel": {
        "legend": ['Z2', 'Moto Z'],
        "series": [
            { value: 1000, name: 'Z2' },
            { value: 1000, name: 'Moto Z' }
        ]
    },
    "serviceBehavior": {
        "legend": ["联想服务网站", "电话服务", "现场服务", "微信公众号"],
        "data": [3, 1, 0, 2]
    },
    // 用户轨迹
    "userTrace": [
        {
            year: 2016,
            events: [
                {
                    date: "01-05",
                    event: "首次下载应用",
                    desc: "下载联想通讯录"
                },
                {
                    date: "02-01",
                    event: "注册Lenovo ID",
                    desc: "使用邮箱zhangly3@lenovo.com成功注册联想账户"
                },
                {
                    date: "02-01",
                    event: "首次登陆",
                    desc: "第一次登陆联想官网www.lenovo.com.cn"
                },
                {
                    date: "03-18",
                    event: "首次发帖",
                    desc: "首次发主题为无聊帖子"
                },
                {
                    date: "04-01",
                    event: "首次购买",
                    desc: "首次购买联想看家宝一台，价格99元"
                },
                {
                    date: "12-30",
                    event: "首次使用联想服务",
                    desc: "首次通过电话拨打联想服务寻求解决问题"
                }
            ]
        },
        {
            year: 2017,
            events: [
                {
                    date: "",
                    event: "",
                    desc: ""
                },
                {
                    date: "02-11",
                    event: "最新发帖",
                    desc: "最新发主题延保点赞帖子"
                },
                {
                    date: "03-18",
                    event: "最新购买",
                    desc: "最新购买联想Yoga Pro 5电脑一台，价格12999元"
                },
                {
                    date: "03-18",
                    event: "最新下载",
                    desc: "下载了七七直播"
                }
            ]
        }
    ],
    // 词云 - 消费购物服务
    "consumer": [
        ["品类购买偏好", "变形笔记本-YOGA系列"],
        ["产品兴趣偏好", "YOGA710-11银(7Y30/4G/256G SSD)"],
        ["场景兴趣偏好", "商务办公"],
        ["服务用户产品", "笔记本"],
        ["累计购买次数", "3次以上"],
        ["消费总额", "7000以上"],
        ["客单价", "7000-10000"],
        ["笔单价", "4600-4800"],
        ["价值度", "重要价值"]
    ],
    // 词云 - 社区社交图谱
    "social": [
        ["意见领袖", "非意见领袖"],
        ["核心用户", "非核心用户"],
        ["交际花", "非交际花"],
        ["活跃分子", "非活跃分子"],
        ["好友数量", "3个以上"],
        ["发帖数量", "1"],
        ["回贴数量", "2"],
        ["看帖数量", "3个以上"],
        ["声音正负向", "正"]
    ],
    // 活跃度
    "activity": {
        "byMonth": {
            "app": [(Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0)],
            "forum": [(Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0)],
            "mall": [(Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0)],
            "device": [(Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0)]
        },
        "byDay": {
            "app": [(Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0)],
            "forum": [(Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0)],
            "mall": [(Math.random() * 2).toFixed(0),
                    (Math.random() * 2).toFixed(0),
                    (Math.random() * 2).toFixed(0),
                    (Math.random() * 2).toFixed(0),
                    (Math.random() * 2).toFixed(0),
                    (Math.random() * 2).toFixed(0),
                    (Math.random() * 2).toFixed(0),
                    (Math.random() * 2).toFixed(0),
                    (Math.random() * 2).toFixed(0)],
            "device": [(Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0)]
        }
    },
    // 手机行为偏好 - 应用
    "mobileApps": {
        "legend": ['工作学习','新闻阅读','游戏','生活购物','其它'],
        "data": [
            {value:335, name:'工作学习'},
            {value:233, name:'新闻阅读'},
            {value:678, name:'游戏'},
            {value:809, name:'生活购物'},  
            {value:654, name:'其它'}
        ]
    },
    // 手机行为偏好 - 社交偏好
    "mediaPreference": {
        "legend": [
            { text: '搜索引擎', max: 3600},
            { text: '贴吧', max: 365},
            { text: '微博', max: 700},
            { text: '微信', max: 365},
            { text: '邮箱', max: 365},
            { text: '其他', max: 2500}
        ],
        "data": [180, 36, 280, 310, 210, 1020]
    },
    // 手机行为偏好 - 消费偏好
    "consumePreference": {
        "legend": [
            { text: 'IT数码', max: 365},
            { text: '旅游', max: 1000},
            { text: '家居', max: 365},
            { text: '时尚', max: 700},
            { text: '服装', max: 1000},
            { text: '医疗', max: 600}
        ],
        "data": [180, 200, 200, 460, 10, 80]
    },
     // PC行为偏好 - 应用
    "pcApps": {
        "legend": ['主题壁纸','办公软件','浏览器','聊天通讯','其它'],
        "data": [
            {value:35, name:'主题壁纸'},
            {value:233, name:'办公软件'},
            {value:28, name:'浏览器'},
            {value:109, name:'聊天通讯'},  
            {value:654, name:'其它'}
        ]
    },
    // PC行为偏好 - 商城行为
    "mallBahavior": {
        "legend": ['用户浏览频度', '用户浏览量', '点击分享次数','立即购买点击行为次数'],
        "data": [422, 220, 8,35]
    },
    // PC行为偏好 - 社区行为
    "communityBahavior": {
        "legend": ['好友数量','看帖数量', '发帖数量','回帖数量'],
        "data": [22,76, 2, 40]
    }
};

const user3 = {
    // 用户基本信息
    'userBaseInfo': {
        "LenovoID": ['13581853790'],
        "phone": '13581853790',
        "email": "zly1979129@126.com",
        "IMEI": "867695021773303",
        "MicroblogID": "暂无",
        "WechatID": "13581853790",
        "serviceUsersID": "暂无",
    },
    // 用户个人属性
    "userFeature": {
        "origin": "商城",
        "age": " 50以上",
        "sex": "女",
        "education": '硕士',
        "salary": "15000以上",
        "career": "互联网/IT",
        "job": "UI设计师",
        "married": "是",
        "hasChildren": "有",
        "hasCar": "无",
        "isStudent": "否",
        "country": "中国",
        "province": "河北",
        "city": "石家庄"
    },
    // 用户地图
    userMap: {
        top: ['重庆','北京','河北'],
        data: [
            {name: '北京',value: 30000 },
            {name: '天津',value: 10000 },
            {name: '上海',value: 1000 },
            {name: '重庆',value: 25000 },
            {name: '河北',value: 20000 },
            {name: '河南',value: 806 }
        ]
    },
    // 设备接入
    "userDevice": {
        "legend": ["PC", "Mobile"],
        "series": [
            { "value": 100, "name": "PC" },
            { "value": 100, "name": "Mobile" }
                    ]
    },
    // 手机型号接入
    "phoneModel": {
        "legend": ['Z1', 'Moto Z'],
        "series": [
            { value: 1000, name: 'Z1' },
            { value: 1000, name: 'Moto Z' }
        ]
    },
    "serviceBehavior": {
        "legend": ["联想服务网站", "电话服务", "现场服务", "微信公众号"],
        "data": [3, 1, 0, 2]
    },
    // 词云 - 消费购物服务
    "consumer": [
        ["品类购买偏好", "变形笔记本-YOGA系列"],
        ["产品兴趣偏好", "YOGA710-11银(7Y30/4G/256G SSD)"],
        ["场景兴趣偏好", "商务办公"],
        ["服务用户产品", "笔记本"],
        ["累计购买次数", "3次以上"],
        ["消费总额", "3900-4600"],
        ["客单价", "700-2600"],
        ["笔单价", "600-1000"],
        ["价值度", "重要价值"]
    ],
    // 词云 - 社区社交图谱
    "social": [
        ["意见领袖", "非意见领袖"],
        ["核心用户", "非核心用户"],
        ["交际花", "非交际花"],
        ["活跃分子", "非活跃分子"],
        ["好友数量", "3个以上"],
        ["发帖数量", "2"],
        ["回贴数量", "1"],
        ["看帖数量", "3个以上"],
        ["声音正负向", "正"]
    ],
    // 用户轨迹
    "userTrace": [
        {
            year: 2016,
            events: [
                {
                    date: "01-05",
                    event: "首次下载应用",
                    desc: "下载淘宝"
                },
                {
                    date: "02-01",
                    event: "注册Lenovo ID",
                    desc: "使用手机号13581853790成功注册联想账户"
                },
                {
                    date: "02-01",
                    event: "首次登陆",
                    desc: "第一次登陆联想官网www.lenovo.com.cn"
                },
                {
                    date: "03-18",
                    event: "首次发帖",
                    desc: "首次发主题为我为人人帖子"
                },
                {
                    date: "04-01",
                    event: "首次购买",
                    desc: "首次购买联想拯救者Y900一台，价格19996元"
                },
                {
                    date: "12-30",
                    event: "首次使用联想服务",
                    desc: "首次通过电话拨打联想服务寻求解决问题"
                }
            ]
        },
        {
            year: 2017,
            events: [
                {
                    date: "",
                    event: "",
                    desc: ""
                },
                {
                    date: "02-11",
                    event: "最新发帖",
                    desc: "最新发主题为延保点赞帖子"
                },
                {
                    date: "03-18",
                    event: "最新购买",
                    desc: "最新购买联想鼠标一个，价格96元"
                },
                {
                    date: "03-18",
                    event: "最新下载",
                    desc: "下载王者荣耀"
                }
            ]
        }
    ],
    // 活跃度
    "activity": {
        "byMonth": {
            "app": [(Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0)],
            "forum": [(Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0)],
            "mall": [(Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0)],
            "device": [(Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0)]
        },
        "byDay": {
            "app": [(Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0)],
            "forum": [(Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0)],
            "mall": [(Math.random() * 2).toFixed(0),
                    (Math.random() * 1).toFixed(0),
                    (Math.random() * 1).toFixed(0),
                    (Math.random() * 1).toFixed(0),
                    (Math.random() * 1).toFixed(0),
                    (Math.random() * 2).toFixed(0),
                    (Math.random() * 2).toFixed(0),
                    (Math.random() * 1).toFixed(0),
                    (Math.random() * 1).toFixed(0)],
            "device": [(Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0)]
        }
    },
    // 手机行为偏好 - 应用
    "mobileApps": {
        "legend": ['工作学习','新闻阅读','游戏','生活购物','其它'],
        "data": [
            {value:335, name:'工作学习'},
            {value:233, name:'新闻阅读'},
            {value:978, name:'游戏'},
            {value:809, name:'生活购物'},  
            {value:654, name:'其它'}
        ]
    },
  // 手机行为偏好 - 社交偏好
    "mediaPreference": {
        "legend": [
            { text: '搜索引擎', max: 3600},
            { text: '贴吧', max: 365},
            { text: '微博', max: 700},
            { text: '微信', max: 365},
            { text: '邮箱', max: 365},
            { text: '其他', max: 2500}
        ],
        "data": [480, 36, 280, 310, 210, 1020]
    },
    // 手机行为偏好 - 消费偏好
    "consumePreference": {
        "legend": [
            { text: 'IT数码', max: 365},
            { text: '旅游', max: 1000},
            { text: '家居', max: 365},
            { text: '时尚', max: 700},
            { text: '服装', max: 1000},
            { text: '医疗', max: 600}
        ],
        "data": [180, 200, 200, 460, 10, 80]
    },
      // PC行为偏好 - 应用
    "pcApps": {
        "legend": ['主题壁纸','办公软件','浏览器','聊天通讯','其它'],
        "data": [
            {value:335, name:'主题壁纸'},
            {value:233, name:'办公软件'},
            {value:678, name:'浏览器'},
            {value:109, name:'聊天通讯'},  
            {value:654, name:'其它'}
        ]
    },
    // PC行为偏好 - 商城行为
    "mallBahavior": {
        "legend": ['用户浏览频度', '用户浏览量', '点击分享次数','立即购买点击行为次数'],
        "data": [522, 320, 47,35]
    },
    // PC行为偏好 - 社区行为
    "communityBahavior": {
        "legend": ['好友数量','看帖数量', '发帖数量','回帖数量'],
        "data": [20,76, 9, 40]
    }
};

const user4 = {
    // 用户基本信息
    'userBaseInfo': {
        "LenovoID": ['13981853791'],
        "phone": '13981853791',
        "email": "暂无",
        "IMEI": "0008220446fc",
        "MicroblogID": "暂无",
        "WechatID": "暂无",
        "serviceUsersID": "暂无",
    },
    // 用户个人属性
    "userFeature": {
        "origin": "商城",
        "age": "19-24",
        "sex": "女",
        "education": '硕士',
        "salary": "3500-8000",
        "career": "互联网/IT",
        "job": "UI设计师",
        "married": "是",
        "hasChildren": "有",
        "hasCar": "无",
        "isStudent": "否",
        "country": "中国",
        "province": "河北",
        "city": "雄安"
    },
    // 用户地图
    userMap: {
        top: ['重庆','北京','河北'],
        data: [
            {name: '北京',value: 30000 },
            {name: '天津',value: 10000 },
            {name: '上海',value: 1000 },
            {name: '重庆',value: 25000 },
            {name: '河北',value: 20000 },
            {name: '河南',value: 806 }
        ]
    },
    // 设备接入
    "userDevice": {
        "legend": ["PC", "Mobile"],
        "series": [
            { "value": 100, "name": "PC" },
            { "value": 100, "name": "Mobile" }
                    ]
    },
    // 手机型号接入
    "phoneModel": {
        "legend": ['Z1', 'Moto Z'],
        "series": [
            { value: 1000, name: 'Z1' },
            { value: 1000, name: 'Moto Z' }
        ]
    },
    "serviceBehavior": {
        "legend": ["联想服务网站", "电话服务", "现场服务", "微信公众号"],
        "data": [3, 1, 0, 2]
    },
    // 词云 - 消费购物服务
    "consumer": [
        ["品类购买偏好", "变形笔记本-YOGA系列"],
        ["产品兴趣偏好", "YOGA710-11银(7Y30/4G/256G SSD)"],
        ["场景兴趣偏好", "商务办公"],
        ["服务用户产品", "笔记本"],
        ["累计购买次数", "3次以上"],
        ["消费总额", "3900-4600"],
        ["客单价", "700-2600"],
        ["笔单价", "600-1000"],
        ["价值度", "重要价值"]
    ],
    // 词云 - 社区社交图谱
    "social": [
        ["意见领袖", "非意见领袖"],
        ["核心用户", "非核心用户"],
        ["交际花", "非交际花"],
        ["活跃分子", "非活跃分子"],
        ["好友数量", "3个以上"],
        ["发帖数量", "2"],
        ["回贴数量", "1"],
        ["看帖数量", "3个以上"],
        ["声音正负向", "正"]
    ],
    // 用户轨迹
    "userTrace": [
        {
            year: 2016,
            events: [
                {
                    date: "01-05",
                    event: "首次下载应用",
                    desc: "下载QQ"
                },
                {
                    date: "02-01",
                    event: "注册Lenovo ID",
                    desc: "使用手机号13981853791成功注册联想账户"
                },
                {
                    date: "02-01",
                    event: "首次登陆",
                    desc: "第一次登陆联想官网www.lenovo.com.cn"
                },
                {
                    date: "03-18",
                    event: "首次发帖",
                    desc: "首次发主题为联想产品质量好帖子"
                },
                {
                    date: "04-01",
                    event: "首次购买",
                    desc: "首次购买联想小新电脑一台，价格5900元"
                },
                {
                    date: "12-30",
                    event: "首次使用联想服务",
                    desc: "首次通过电话拨打联想服务寻求解决问题"
                }
            ]
        },
        {
            year: 2017,
            events: [
                {
                    date: "",
                    event: "",
                    desc: ""
                },
                {
                    date: "02-11",
                    event: "最新发帖",
                    desc: "最新发主题为延保点赞帖子"
                },
                {
                    date: "03-18",
                    event: "最新购买",
                    desc: "最新购买联想Yoga Pro 5电脑一台，价格8999元"
                },
                {
                    date: "03-18",
                    event: "最新下载",
                    desc: "最新下载苏宁易购"
                }
            ]
        }
    ],
    // 活跃度
    "activity": {
        "byMonth": {
            "app": [(Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0)],
            "forum": [(Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0)],
            "mall": [(Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0)],
            "device": [(Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0)]
        },
        "byDay": {
            "app": [(Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0)],
            "forum": [(Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0)],
            "mall": [(Math.random() * 2).toFixed(0),
                    (Math.random() * 1).toFixed(0),
                    (Math.random() * 1).toFixed(0),
                    (Math.random() * 1).toFixed(0),
                    (Math.random() * 2).toFixed(0),
                    (Math.random() * 1).toFixed(0),
                    (Math.random() * 1).toFixed(0),
                    (Math.random() * 2).toFixed(0),
                    (Math.random() * 1).toFixed(0)],
            "device": [(Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0)]
        }
    },
    // 手机行为偏好 - 应用
    "mobileApps": {
        "legend": ['工作学习','新闻阅读','游戏','生活购物','其它'],
        "data": [
            {value:335, name:'工作学习'},
            {value:233, name:'新闻阅读'},
            {value:978, name:'游戏'},
            {value:809, name:'生活购物'},  
            {value:654, name:'其它'}
        ]
    },
  // 手机行为偏好 - 社交偏好
    "mediaPreference": {
        "legend": [
            { text: '搜索引擎', max: 3600},
            { text: '贴吧', max: 365},
            { text: '微博', max: 700},
            { text: '微信', max: 365},
            { text: '邮箱', max: 365},
            { text: '其他', max: 2500}
        ],
        "data": [480, 36, 280, 310, 210, 1020]
    },
    // 手机行为偏好 - 消费偏好
    "consumePreference": {
        "legend": [
            { text: 'IT数码', max: 365},
            { text: '旅游', max: 1000},
            { text: '家居', max: 365},
            { text: '时尚', max: 700},
            { text: '服装', max: 1000},
            { text: '医疗', max: 600}
        ],
        "data": [180, 200, 200, 460, 10, 80]
    },
     // PC行为偏好 - 应用
    "pcApps": {
        "legend": ['主题壁纸','办公软件','浏览器','聊天通讯','其它'],
        "data": [
            {value:335, name:'主题壁纸'},
            {value:233, name:'办公软件'},
            {value:678, name:'浏览器'},
            {value:809, name:'聊天通讯'},  
            {value:654, name:'其它'}
        ]
    },
    // PC行为偏好 - 商城行为
    "mallBahavior": {
        "legend": ['用户浏览频度', '用户浏览量', '点击分享次数','立即购买点击行为次数'],
        "data": [122, 220, 47,35]
    },
    // PC行为偏好 - 社区行为
    "communityBahavior": {
        "legend": ['好友数量','看帖数量', '发帖数量','回帖数量'],
        "data": [10,176, 29, 40]
    }
};

const user5 = {
    // 用户基本信息
    'userBaseInfo': {
        "LenovoID": ['18910860757'],
        "phone": '18910860757',
        "email": "暂无",
        "IMEI": "暂无",
        "MicroblogID": "暂无",
        "WechatID": "暂无",
        "serviceUsersID": "120130727804412",
    },
    // 用户个人属性
    "userFeature": {
        "origin": "商城",
        "age": "19-24",
        "sex": "女",
        "education": '高中、中专及以下',
        "salary": "3500以下",
        "career": "学生",
        "job": "",
        "married": "否",
        "hasChildren": "否",
        "hasCar": "无",
        "isStudent": "是",
        "country": "中国",
        "province": "重庆",
        "city": "重庆"
    },
    // 用户地图
    userMap: {
        top: ['重庆','北京','河北'],
        data: [
            {name: '北京',value: 30000 },
            {name: '天津',value: 10000 },
            {name: '上海',value: 1000 },
            {name: '重庆',value: 25000 },
            {name: '河北',value: 20000 },
            {name: '河南',value: 806 }
        ]
    },
    // 设备接入
    "userDevice": {
        "legend": ["PC", "Mobile"],
        "series": [
            { "value": 100, "name": "PC" },
            { "value": 100, "name": "Mobile" }
                    ]
    },
    // 手机型号接入
    "phoneModel": {
        "legend": ['Z1', 'Moto Z'],
        "series": [
            { value: 1000, name: 'Z1' },
            { value: 1000, name: 'Moto Z' }
        ]
    },
    "serviceBehavior": {
        "legend": ["联想服务网站", "电话服务", "现场服务", "微信公众号"],
        "data": [3, 1, 0, 2]
    },
    // 词云 - 消费购物服务
    "consumer": [
        ["品类购买偏好", "变形笔记本-YOGA系列"],
        ["产品兴趣偏好", "YOGA710-11银(7Y30/4G/256G SSD)"],
        ["场景兴趣偏好", "商务办公"],
        ["服务用户产品", "笔记本"],
        ["累计购买次数", "3次以上"],
        ["消费总额", "3900-4600"],
        ["客单价", "700-2600"],
        ["笔单价", "600-1000"],
        ["价值度", "一般价值"]
    ],
    // 词云 - 社区社交图谱
    "social": [
        ["意见领袖", "非意见领袖"],
        ["核心用户", "非核心用户"],
        ["交际花", "非交际花"],
        ["活跃分子", "非活跃分子"],
        ["好友数量", "3个以上"],
        ["发帖数量", "2"],
        ["回贴数量", "1"],
        ["看帖数量", "3个以上"],
        ["声音正负向", "正"]
    ],
    // 用户轨迹
    "userTrace": [
        {
            year: 2016,
            events: [
                {
                    date: "01-05",
                    event: "首次下载应用",
                    desc: "下载一起做作业"
                },
                {
                    date: "02-01",
                    event: "注册Lenovo ID",
                    desc: "使用手机号18910860757成功注册联想账户"
                },
                {
                    date: "02-01",
                    event: "首次登陆",
                    desc: "第一次登陆联想官网www.lenovo.com.cn"
                },
                {
                    date: "03-18",
                    event: "首次发帖",
                    desc: "首次发主题为今天真高兴帖子"
                },
                {
                    date: "04-01",
                    event: "首次购买",
                    desc: "首次购买联想thinkpad T450电脑一台,价格4996元"
                },
                {
                    date: "12-30",
                    event: "首次使用联想服务",
                    desc: "首次通过电话拨打联想服务寻求解决问题"
                }
            ]
        },
        {
            year: 2017,
            events: [
                {
                    date: "",
                    event: "",
                    desc: ""
                },
                {
                    date: "02-11",
                    event: "最新发帖",
                    desc: "最新发主题为延保点赞帖子"
                },
                {
                    date: "03-18",
                    event: "最新购买",
                    desc: "最新购买联想Thinkpad X1电脑一台，价格12996元"
                },
                {
                    date: "03-18",
                    event: "最新下载",
                    desc: "最新下载联想服务"
                }
            ]
        }
    ],
    // 活跃度
    "activity": {
        "byMonth": {
            "app": [(Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0),
                    (Math.random(1,9) * 100).toFixed(0)],
            "forum": [(Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0)],
            "mall": [(Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0),
                    (Math.random() * 100).toFixed(0)],
            "device": [(Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0),
                    (Math.random(1,9) * 300).toFixed(0)]
        },
        "byDay": {
            "app": [(Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0)],
            "forum": [(Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0),
                    (Math.random() * 5).toFixed(0)],
            "mall": [(Math.random() * 1).toFixed(0),
                    (Math.random() * 1).toFixed(0),
                    (Math.random() * 1).toFixed(0),
                    (Math.random() * 1).toFixed(0),
                    (Math.random() * 2).toFixed(0),
                    (Math.random() * 1).toFixed(0),
                    (Math.random() * 3).toFixed(0),
                    (Math.random() * 1).toFixed(0),
                    (Math.random() * 1).toFixed(0)],
            "device": [(Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0),
                    (Math.random(1,9) * 10).toFixed(0)]
        }
    },
    // 手机行为偏好 - 应用
    "mobileApps": {
        "legend": ['工作学习','新闻阅读','游戏','生活购物','其它'],
        "data": [
            {value:335, name:'工作学习'},
            {value:233, name:'新闻阅读'},
            {value:978, name:'游戏'},
            {value:809, name:'生活购物'},  
            {value:654, name:'其它'}
        ]
    },
  // 手机行为偏好 - 社交偏好
    "mediaPreference": {
        "legend": [
            { text: '搜索引擎', max: 3600},
            { text: '贴吧', max: 365},
            { text: '微博', max: 700},
            { text: '微信', max: 365},
            { text: '邮箱', max: 365},
            { text: '其他', max: 2500}
        ],
        "data": [480, 36, 280, 310, 210, 1020]
    },
    // 手机行为偏好 - 消费偏好
    "consumePreference": {
        "legend": [
            { text: 'IT数码', max: 365},
            { text: '旅游', max: 1000},
            { text: '家居', max: 365},
            { text: '时尚', max: 700},
            { text: '服装', max: 1000},
            { text: '医疗', max: 600}
        ],
        "data": [180, 200, 200, 460, 10, 80]
    },
     // PC行为偏好 - 应用
    "pcApps": {
        "legend": ['主题壁纸','办公软件','浏览器','聊天通讯','其它'],
        "data": [
            {value:335, name:'主题壁纸'},
            {value:233, name:'办公软件'},
            {value:678, name:'浏览器'},
            {value:109, name:'聊天通讯'},  
            {value:64, name:'其它'}
        ]
    },
    // PC行为偏好 - 商城行为
    "mallBahavior": {
        "legend": ['用户浏览频度', '用户浏览量', '点击分享次数','立即购买点击行为次数'],
        "data": [522, 220, 47,35]
    },
    // PC行为偏好 - 社区行为
    "communityBahavior": {
        "legend": ['好友数量','看帖数量', '发帖数量','回帖数量'],
        "data": [20,146, 29, 40]
    }
};

export default [user1, user2, user3, user4, user5];
