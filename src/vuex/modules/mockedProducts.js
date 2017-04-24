const product1 = {
  basic: {
    name: "Thinkpad X1 Carbon",
    business: {
      title: "全网电商",
      data: [
        {
          name: "E-Ccomerce",
          type: "电商偏好",
          desc: "对该产品关注度较高的人群喜欢购买数码产品，爱保健爱运动；也经常购买美食、家电、服装"
        }
      ]
    },
    media: {
      title: "媒体品牌",
      data: [
        {
          name: "Media",
          type: "媒体偏好",
          desc: "该人群喜欢浏览IT数码资讯，经常看电影，喜欢美食；也经常浏览军事和读书板块"
        },
        {
          name: "Brand",
          type: "品牌偏好",
          desc: "该人群偏好电子类品牌较多，为Thinkpad联想的忠诚粉"
        }
      ]
    },
    basic: {
      title: "基本画像",
      data: [
        {
          name: "Gender",
          type: "性别",
          desc: "男性用户占比近六成"
        },
        {
          name: "Age",
          type: "年龄",
          desc: "以25-49岁人群为主要群体；其中25-34岁占比46%"
        },
        {
          name: "Consumption Level",
          type: "消费等级",
          desc: "高端消费者占比超5成\n中端消费者占比35.8%"
        },
        {
          name: "Geographic",
          type: "地域分布",
          desc: "国外用户占比仅为1.8%\n北上广等一线城市用户对Carbon的关注度较高\n长三角地区对该产品关注度也相对较高"
        }
      ]
    }
  },
  // 地域
  area: {
    legend: ['北京', '广东', '江苏', '上海', '浙江'],
    data: [
        {value: 13.6, name: '北京'},
        {value: 12.2, name: '广东'},
        {value: 9.2, name: '江苏'},
        {value: 8.6, name: '上海'},
        {value: 6.7, name: '浙江'}
      ]
  },
  // 上网特征
 internetFeature: {
    //上网时段
    times: {
      legend: ['1-6', '7-8', '9-11', '12-13', '14-16', '17-18', '19-21', '22-24'],
      data: [
          {
              name:'电脑上网时段',
              type:'line',
              stack: '总量',
              data: [5, 100, 60, 50, 20, 30, 50, 15]
          },
          {
              name:'手机上网时段',
              type:'line',
              stack: '总量',
              data: [15, 20, 30, 40, 50, 60, 1, 10]
          }
      ]
    },
    // 手机端浏览器使用情况
    browser: {
      legend: ['Safari', 'Android Webkit Browser', 'UC浏览器', 'QQ浏览器', 'IE', 'Chrome', '搜狗浏览器', '360手机浏览器', '其它'],
      data: [
        {value: 1000, name: 'Safari'},
        {value: 800, name: 'Android Webkit Browser'},
        {value: 780, name: 'UC浏览器'},
        {value: 570, name: 'QQ浏览器'},
        {value: 400, name: 'IE'},
        {value: 270, name: 'Chrome'},
        {value: 250, name: '搜狗浏览器'},
        {value: 190, name: '360手机浏览器'},
        {value: 280, name: '其它'}
      ]
    }
  },
  // 用户性别年龄分布
  ageSex: {
    // 年龄分布
    age: {
      legend: ['小于18岁', '18-24岁', '25-34岁', '35-49岁', '49岁以上'],
      data: [
        {value: 8, name: '小于18岁'},
        {value: 12, name: '18-24岁'},
        {value: 46, name: '25-34岁'},
        {value: 20, name: '35-49岁'},
        {value: 13, name: '49岁以上'}
      ]
    }
  },
  // 家庭状况
  familyStatus: {
    // 性别
    sex: {
      legend: ['男', '女'],
      data: [
        {value: 59, name: '男'},
        {value: 41, name: '女'}
      ]
    },
    // 是否已婚
    married: {
      legend: ['已婚', '已婚'],
      data: [
        {value: 75, name: '已婚'},
        {value: 25, name: '未婚'}
      ]
    },
    // 是否有孩子
    baby: {
      legend: ['有孩子', '无孩子'],
      data: [
        {value: 43, name: '有孩子'},
        {value: 57, name: '无孩子'}
      ]
    }
  },
  // LenovoID - LenovoID有无
  lenovoID: {
    whetherOrNot: {
      legend: ['无LenovoID', '已有LenovoID'],
      data: [
        {value: 60, name: '无LenovoID'},
        {value: 30, name: '已有LenovoID'}
      ]
    },
    newOldUser: {
      legend: ['一周内新注册LenovoID', '已有LenovoID'],
      data: [
        {value: 2, name: '新注册LenovoID'},
        {value: 98, name: '已有LenovoID'}
      ]
    }
  },
  // 行为偏好 - 手机应用
  mobileApps: {
    legend: ['工作学习', '拍摄美图', '新闻阅读', '社交聊天', '其它'],
    data: [
      {value: 45, name: '工作学习'},
      {value: 7, name: '拍摄美图'},
      {value: 12, name: '新闻阅读'},
      {value: 7, name: '社交聊天'},
      {value: 1, name: '其它'}
    ]
  },
  // 行为偏好 - PC应用
  pcApps: {
    legend: ['主题壁纸', '办公软件', '浏览器', '聊天通讯', '其它'],
    data: [
      {value: 335, name: '主题壁纸'},
      {value: 433, name: '办公软件'},
      {value: 178, name: '浏览器'},
      {value: 109, name: '聊天通讯'},
      {value: 64, name: '其它'}
    ]
  }
};

const product2 = {
  basic: {
    name: "小新",
    business: {
      title: "全网电商",
      data: [
        {
          name: "E-Ccomerce",
          type: "电商偏好",
          desc: "用户更偏爱电脑办公、美食特产和出差旅行"
        }
      ]
    },
    media: {
      title: "媒体品牌",
      data: [
        {
          name: "Media",
          type: "媒体偏好",
          desc: "该用户多数对IT数码、财经、教育培训类兴趣度较高"
        },
        {
          name: "Brand",
          type: "品牌偏好",
          desc: "用户对电脑及周边产品、评测等兴趣度较高"
        }
      ]
    },
    basic: {
      title: "基本画像",
      data: [
        {
          name: "Gender",
          type: "性别",
          desc: "男性用户占比近7成"
        },
        {
          name: "Age",
          type: "年龄",
          desc: "将近8成的用户集中在25~49岁；25~34岁用户最多，占比达48.3%"
        },
        {
          name: "Consumption Level",
          type: "消费等级",
          desc: "8成为中高端消费者\nLEVEL6、LEVEL7用户占比为46%"
        },
        {
          name: "Geographic",
          type: "地域分布",
          desc: "一半以上的用户来自北上广等一线城市\n北京、广东、河南用户数量较多"
        }
      ]
    }
  },
  // 地域
  area: {
    legend: ['北京', '广东', '河南', '上海', '浙江'],
    data: [
        {value: 28, name: '北京'},
        {value: 12, name: '广东'},
        {value: 8, name: '河南'},
        {value: 7, name: '上海'},
        {value: 7, name: '浙江'}
      ]
  },
  // 上网特征
  internetFeature: {
    //上网时段
    times: {
      legend: ['1-6', '7-8', '9-11', '12-13', '14-16', '17-18', '19-21', '22-24'],
      data: [
          {
              name:'电脑上网时段',
              type:'line',
              stack: '总量',
              data: [5, 100, 60, 50, 20, 30, 50, 15]
          },
          {
              name:'手机上网时段',
              type:'line',
              stack: '总量',
              data: [15, 20, 30, 40, 50, 60, 1, 10]
          }
      ]
    },
    // 手机端浏览器使用情况
    browser: {
      legend: ['Safari', 'Android Webkit Browser', 'UC浏览器', 'QQ浏览器', 'IE', 'Chrome', '搜狗浏览器', '360手机浏览器', '其它'],
      data: [
        {value: 1000, name: 'Safari'},
        {value: 800, name: 'Android Webkit Browser'},
        {value: 780, name: 'UC浏览器'},
        {value: 570, name: 'QQ浏览器'},
        {value: 400, name: 'IE'},
        {value: 270, name: 'Chrome'},
        {value: 250, name: '搜狗浏览器'},
        {value: 190, name: '360手机浏览器'},
        {value: 280, name: '其它'}
      ]
    }
  },
  // 用户性别年龄分布
  ageSex: {
    // 年龄分布
    age: {
      legend: ['小于18岁', '18-24岁', '25-34岁', '35-49岁', '49岁以上'],
      data: [
        {value: 3, name: '小于18岁'},
        {value: 18, name: '18-24岁'},
        {value: 48, name: '25-34岁'},
        {value: 30, name: '35-49岁'},
        {value: 1, name: '49岁以上'}
      ]
    }
  },
  // 家庭状况
  familyStatus: {
    // 性别
    sex: {
      legend: ['男', '女'],
      data: [
        {value: 80, name: '男'},
        {value: 50, name: '女'}
      ]
    },
    // 是否已婚
    married: {
      legend: ['已婚', '已婚'],
      data: [
        {value: 19, name: '已婚'},
        {value: 81, name: '未婚'}
      ]
    },
    // 是否有孩子
    baby: {
      legend: ['有孩子', '无孩子'],
      data: [
        {value: 77, name: '有孩子'},
        {value: 23, name: '无孩子'}
      ]
    }
  },
  // LenovoID - LenovoID有无
  lenovoID: {
    whetherOrNot: {
      legend: ['无LenovoID', '已有LenovoID'],
      data: [
        {value: 95, name: '无LenovoID'},
        {value: 30, name: '已有LenovoID'}
      ]
    },
    newOldUser: {
      legend: ['新注册LenovoID', '已有LenovoID'],
      data: [
        {value: 1, name: '新注册LenovoID'},
        {value: 69, name: '已有LenovoID'}
      ]
    }
  },
  // 行为偏好 - 手机应用
 mobileApps: {
    legend: ['工作学习', '拍摄美图', '新闻阅读', '社交聊天', '其它'],
    data: [
      {value: 45, name: '工作学习'},
      {value: 7, name: '拍摄美图'},
      {value: 12, name: '新闻阅读'},
      {value: 7, name: '社交聊天'},
      {value: 1, name: '其它'}
    ]
  } ,
  // 行为偏好 - PC应用
  pcApps: {
    legend: ['主题壁纸', '办公软件', '浏览器', '聊天通讯', '其它'],
    data: [
      {value: 335, name: '主题壁纸'},
      {value: 233, name: '办公软件'},
      {value: 678, name: '浏览器'},
      {value: 109, name: '聊天通讯'},
      {value: 64, name: '其它'}
    ]
  }
};

export default [product1, product2];
