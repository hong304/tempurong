module.exports = {
  language: '中文',
  languageShort: '简',
  companyName: '金沙龙沙度假村',
  menu: {
    companyName: '金沙龙沙<br>度假村',
    quickMenu: '快捷主单',
    about: '关於我们',
    rooms: '房间及设施',
    activities: '推荐景点及活动',
    food: '精彩美食',
    contact: '联系我们',
    reservations: '房间预订',
    resortPolicy: '度假村政策',
    FAQ: '常见问题'
  },
  address: {
    title: '地址',
    address: 'Jalan Kampung Tempurung Kuala Penyu 89740'
  },
  tel: {
    title: '电话',
    tel: '+60 88-230 916'
  },
  paymentAccept: {
    title: '付款方法',
    master: '万事达卡',
    visa: '维萨卡'
  },
  copyright: '© 2017 金沙龙沙度假村 版权所有。',
  pages: {
    home: {
      welcome: '欢迎来到瓜拉彭尤',
      services: '我们的服务',
      activities: '推荐活动',
      features: '当地特色',
      reviews: '顾客评价'
    },
    about: {
      pageTitle: '关於我们',
      sectionTitle: '想了解更多有关 kuala penyu?'
    },
    rooms: {
      pageTitle: '房间及设施'
    },
    activities: {
      pageTitle: '推荐景点及活动',
      activities: '活动',
      adventures: '历奇探险'
    },
    food: {
      pageTitle: '精彩美食'
    },
    contact: {
      pageTitle: '联系我们'
    },
    reservations: {
      pageTitle: '房间预订'
    },
    reservationsContact: {
      pageTitle: '联系资料',
      fillInContact: '请填写以下资料。',
      firstName: '名字',
      lastName: '姓氏',
      email: '电邮',
      remarks: '备注',
      additionalNotes: '附加资料，如机场接送及感兴趣的活动',
      tnc: '条款及细则',
      tncCheckbox: '我已细阅并同意以上的条款及细则和取消政策。'
    },
    reservationsSummary: {
      pageTitle: '订单详情',
      clientName: '姓名',
      clientEmail: '电邮',
      totalAmount: '合计'
    }
  },
  datePicker: {
    night: '晚',
    nights: '晚',
    'day-names': ['日', '一', '二', '三', '四', '五', '六'],
    'check-in': '入住',
    'check-out': '退房',
    'month-names': ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  },
  button: {
    book: '预订',
    bookNow: '立即预订',
    more: '更多',
    moreRooms: '更多房间',
    viewRooms: '浏览房间',
    moreDetails: '更多详情',
    hideDetails: '隐藏详情',
    moreAreaAndActivities: '更多景点及活动',
    discoverMore: '探索更多',
    dropMessage: '留言',
    justAsk: '留言',
    submit: '提交',
    back: '返回',
    checkOut: '提交订单',
    pay: '付款'
  },
  dateUnit: {
    days: '{count} 日 | {count} 日 | {count} 日',
    nights: '{count} 晚 | {count} 晚 | {count} 晚'
  },
  commonUnits: {
    guests: '{count}人 | {count}人 | {count}人',
    adults: '{count}位成人 | {count}位成人 | {count}位成人',
    children: '{count}位小孩 | {count}位小孩 | {count}位小孩',
    room: '{count}间房间 | {count}间房间 | {count}间房间',
    breakfast: '{count}份早餐 | {count}份早餐 | {count}份早餐',
    mattress: '{count}张床褥 | {count}张床褥 | {count}张床褥'
  },
  components: {
    booking: {
      bookingSticky: {
        total: '合计',
        adultTitle: '成人',
        childrenTitle: '小孩',
        totalRoom: '房间总数',
        priceDescription: '{nights}共 $ {price} MYR',
        policyRemarks: '请参阅我们的度假村及取消政策。'
      }
    },
    card: {
      roomCard: {
        guests: '{count} 人 | {count} 人 | {count} 人',
        addMattressRemarks: '（可加一张床褥，房间最多容纳{count}人)',
        addMattressAndBreakfastOption: '加床褥或早餐',
        extraBreakfast: '加早餐 (MYR12 每天)',
        breakfastRemarks: '* 每间房间最多只能加一份早餐',
        extraMattress: '加床褥 (MYR18 每晚)',
        mattressRemarks: '* 每间房间最多只能加一张床褥',
        queenBed: '0 双人大床 | 1 双人大床 | {count} 双人大床',
        bunkBed: '0 单人双层床 | 1 单人双层床 | {count} 单人双层床',
        roomAvailable: '尚馀{count}间房间 | 尚馀{count}间房间 | 尚馀{count}间房间',
        description: '描述',
        amenities: '设施',
        resortPolicy: '度假村政策',
        cancellations: '取消政策'
      },
      roomSummaryCard: {
        capacity: '每间房间可容纳{capacity}人',
        extraMattressRemarks: '（如果添加了额外床褥，则最多可容纳{capacity}人)',
        mattressAndBreakfast: '（已额外添加{mattress}和{breakfast})'
      }
    }
  },
  error: {
    noCheckInOut: '请选择入住及退房日期。',
    noGuestSelected: '请选择最少一位客人。',
    noRoomSelected: '请选择最少一间房间。',
    guestAndRoomNoConflict: '总客人人数不能多於房间的可容纳人数。',
    email: '请输入有效的电邮。',
    tnc: '请同意条款及细则',
    required: '请填写{field}。'
  }
}
