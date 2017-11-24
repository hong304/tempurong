module.exports = {
  language: '中文',
  companyName: '金沙龍沙<br>度假村',
  menu: {
    quickMenu: '快捷主單',
    about: '關於我們',
    rooms: '房間及設施',
    activities: '推薦景點及活動',
    food: '精彩美食',
    contact: '聯繫我們',
    reservations: '房間預訂'
  },
  address: {
    title: '地址',
    address: 'Jalan Kampung Tempurung Kuala Penyu 89740'
  },
  tel: {
    title: '電話',
    tel: '+60 88-230 916'
  },
  paymentAccept: {
    title: '付款方法',
    master: '萬事達卡',
    visa: '維薩卡'
  },
  copyright: '© 2017 金沙龍沙度假村 版權所有。',
  pages: {
    home: {
      welcome: '歡迎來到瓜拉彭尤',
      services: '我們的服務',
      activities: '推薦活動',
      features: '當地特色',
      reviews: '顧客評價'
    },
    about: {
      pageTitle: '關於我們',
      sectionTitle: '想了解更多有關 kuala penyu?'
    },
    rooms: {
      pageTitle: '房間及設施'
    },
    activities: {
      pageTitle: '推薦景點及活動',
      activities: '活動'
    },
    food: {
      pageTitle: '精彩美食'
    },
    contact: {
      pageTitle: '聯繫我們'
    },
    reservations: {
      pageTitle: '房間預訂'
    },
    reservationsContact: {
      pageTitle: '聯繫資料',
      fillInContact: '請填寫以下資料。',
      firstName: '名字',
      lastName: '姓氏',
      email: '電郵',
      remarks: '備註',
      additionalNotes: '附加資料，如機場接送及感興趣的活動',
      tnc: '條款及細則',
      tncCheckbox: '我已細閱並同意以上的條款及細則和取消政策。'
    },
    reservationsSummary: {
      pageTitle: '訂單詳情',
      clientName: '姓名',
      clientEmail: '電郵',
      totalAmount: '合計'
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
    book: '預訂',
    bookNow: '立即預訂',
    more: '更多',
    moreRooms: '更多房間',
    viewRooms: '瀏覽房間',
    moreDetails: '更多詳情',
    hideDetails: '隱藏詳情',
    moreAreaAndActivities: '更多景點及活動',
    discoverMore: '探索更多',
    dropMessage: '留言',
    justAsk: '留言',
    submit: '提交',
    back: '返回',
    checkOut: '提交訂單',
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
    room: '{count}間房間 | {count}間房間 | {count}間房間',
    breakfast: '{count}份早餐 | {count}份早餐 | {count}份早餐',
    mattress: '{count}張床褥 | {count}張床褥 | {count}張床褥'
  },
  components: {
    booking: {
      bookingSticky: {
        total: '合計',
        adultTitle: '成人',
        childrenTitle: '小孩',
        totalRoom: '房間總數',
        priceDescription: '{nights}共 $ {price} MYR',
        policyRemarks: '請參閱我們的度假村政策。'
      }
    },
    card: {
      roomCard: {
        guests: '{count} 人 | {count} 人 | {count} 人',
        addMattressRemarks: '（可加一張床褥，房間最多容納{count}人)',
        addMattressAndBreakfastOption: '加床褥或早餐',
        extraBreakfast: '加早餐 (MYR12 每天)',
        breakfastRemarks: '* 每間房間最多只能加一份早餐',
        extraMattress: '加床褥 (MYR18 每晚)',
        mattressRemarks: '* 每間房間最多只能加一張床褥',
        queenBed: '0 雙人大床 | 1 雙人大床 | {count} 雙人大床',
        bunkBed: '0 單人雙層床 | 1 單人雙層床 | {count} 單人雙層床',
        roomAvailable: '尚餘{count}間房間 | 尚餘{count}間房間 | 尚餘{count}間房間',
        description: '描述',
        amenities: '設施',
        resortPolicy: '度假村政策',
        cancellations: '取消政策'
      },
      roomSummaryCard: {
        capacity: '每間房間可容納{capacity}人',
        extraMattressRemarks: '（如果添加了額外床褥，則最多可容納{capacity}人)',
        mattressAndBreakfast: '（已額外添加{mattress}和{breakfast})'
      }
    }
  },
  error: {
    noCheckInOut: '請選擇入住及退房日期。',
    noGuestSelected: '請選擇最少一位客人。',
    noRoomSelected: '請選擇最少一間房間。',
    guestAndRoomNoConflict: '總客人人數不能多於房間的可容納人數。',
    email: '請輸入有效的電郵。',
    tnc: '請同意條款及細則',
    required: '請填寫{field}。'
  }
}
