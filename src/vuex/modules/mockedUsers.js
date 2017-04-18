import Mock from 'mockjs'

const user1 = {
    //用户基本信息
    'userBaseInfo': {
        "LenovoID": ['testLenovoID'],
        "phone": '18911004567',
        "email": "test@163.com",
        "IMEI": "暂无",
        "MicroblogID": "暂无",
        "WechatID": "暂无",
        "serviceUsersID": "暂无",
    },
    //用户个人属性
    "userFeature": {
        "origin": "商城",
        'age': 30,
        "sex": "男",
        "education": '大专、本科',
        "salary": 10000,
        "career": "互联网/IT",
        "job": "IT工程师",
        "married": "否",
        "hasChildren": "无",
        "hasCar": "有",
        "isStudent": "否"
    },
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
    //设备接入
    "userDevice": {
        "legend": ["PC", "Mobile"],
        "series": [
            { "value": 100, "name": "PC" },
            { "value": 200, "name": "Mobile" }
        ]
    },
    //手机型号
    "phoneModel": {
        "legend": ['iPhone', 'ZUK', 'Vivo', '小米', '其它'],
        "series": [
            { value: 1000, name: 'iPhone' },
            { value: 2000, name: 'ZUK' },
            { value: 500, name: 'Vivo' },
            { value: 800, name: '小米' },
            { value: 600, name: '其它' }
        ]
    },
    "serviceBehavior": {
        "legend": ["联想服务网站", "电话服务", "现场服务", "微信公众号"],
        "data": [3, 1, 0, 1]
    },
    "mediaPreference": {
        "legend": [
            { text: '搜索引擎', max: 6500},
            { text: '贴吧', max: 16000},
            { text: '微博', max: 30000},
            { text: '微信', max: 38000},
            { text: '邮箱', max: 52000},
            { text: '其他', max: 25000}
        ],
        "data": [4300, 10000, 28000, 35000, 50000, 19000]
    },
    "consumePreference": {
        "legend": [
            { text: 'IT数码', max: 6500},
            { text: '旅游', max: 10000},
            { text: '家居', max: 3000},
            { text: '时尚', max: 8000},
            { text: '服装', max: 5000},
            { text: '医疗', max: 1000}
        ],
        "data": [5500, 8000, 2000, 4600, 2700, 800]
    }
};

const user2 = {
    //用户基本信息
    'userBaseInfo': {
        "LenovoID": ['testLenovoID2'],
        "phone": '13916053476',
        "email": "admin@lenovo.com",
        "IMEI": "暂无",
        "MicroblogID": "暂无",
        "WechatID": "13916053476",
        "serviceUsersID": "暂无",
    },
    //用户个人属性
    "userFeature": {
        "origin": "商城",
        'age': 40,
        "sex": "女",
        "education": '硕士以上',
        "salary": 20000,
        "career": "互联网/IT",
        "job": "UI设计师",
        "married": "是",
        "hasChildren": "有",
        "hasCar": "无",
        "isStudent": "否"
    },
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
    //设备接入
    "userDevice": {
        "legend": ["PC", "Mobile"],
        "series": [
            { "value": 100, "name": "PC" },
            { "value": 500, "name": "Mobile" }
                    ]
    },
    //手机型号
    "phoneModel": {
        "legend": ['iPhone', 'ZUK', 'Vivo', '小米', '其它'],
        "series": [
            { value: 1000, name: 'iPhone' },
            { value: 2000, name: 'ZUK' },
            { value: 500, name: 'Vivo' },
            { value: 800, name: '小米' },
            { value: 600, name: '其它' }
        ]
    },
    "serviceBehavior": {
        "legend": ["联想服务网站", "电话服务", "现场服务", "微信公众号"],
        "data": [3, 1, 0, 2]
    },
    "mediaPreference": {
        "legend": [
            { text: '搜索引擎', max: 6500},
            { text: '贴吧', max: 16000},
            { text: '微博', max: 30000},
            { text: '微信', max: 38000},
            { text: '邮箱', max: 52000},
            { text: '其他', max: 25000}
        ],
        "data": [4300, 10000, 28000, 35000, 50000, 19000]
    },
    "consumePreference": {
        "legend": [
            { text: 'IT数码', max: 6500},
            { text: '旅游', max: 10000},
            { text: '家居', max: 3000},
            { text: '时尚', max: 8000},
            { text: '服装', max: 5000},
            { text: '医疗', max: 1000}
        ],
        "data": [5500, 8000, 2000, 4600, 2700, 800]
    }
};

export default [user1, user2];

// export default {
//     //用户基本信息
//     'userBaseInfo': {
//         "LenovoID": Mock.Random.range(1, 10, 2),
//         "phone": /1[3｜5|8]\d{5,10}/,
//         "email": Mock.Random.first() + "@163.com",
//         "IMEI": "暂无",
//         "MicroblogID": "暂无",
//         "WechatID": "暂无",
//         "serviceUsersID": "暂无"
//     },
//     //用户个人属性
//     "userFeature": {
//         "origin": "商城",
//         'age|1-100': 100,
//         "sex": "男",
//         "education": /['本科'|'专科'|'研究生'|'博士']/,
//         "salary": Mock.Random.integer(10000, 19999) + "-" + Mock.Random.integer(20000, 30000),
//         "job": "IT工程师"
//     },
//     //设备接入
//     "userDevice": {
//         "legend": ["PC", "Mobile", "Tablet"],
//         "series": [
//             { "value": Mock.Random.integer(100, 200), "name": "PC" },
//             { "value": Mock.Random.integer(300, 400), "name": "Mobile" },
//             { "value": Mock.Random.integer(200, 300), "name": "Tablet" }
//         ]
//     },
//     //手机型号
//     "phoneModel": {
//         "legend": ['iPhone', 'ZUK', 'Vivo', '小米', '其它'],
//         "series": [
//             { value: Mock.Random.integer(1000, 2000), name: 'iPhone' },
//             { value: Mock.Random.integer(300, 6000), name: 'ZUK' },
//             { value: Mock.Random.integer(130, 200), name: 'Vivo' },
//             { value: Mock.Random.integer(110, 200), name: '小米' },
//             { value: Mock.Random.integer(110, 200), name: '其它' }
//         ]
//     }
// };