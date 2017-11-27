module.exports = {
  language: 'English',
  companyName: 'Tempurong Golden Beach Resort',
  menu: {
    quickMenu: 'Quick Menu',
    about: 'About',
    rooms: 'Rooms & Amenities',
    activities: 'Area & Activities',
    food: 'Food',
    contact: 'Contact',
    reservations: 'Reservations',
    companyName: 'Tempurong <br> Golden Beach <br> Resort'
  },
  address: {
    title: 'Address',
    address: 'Jalan Kampung Tempurung Kuala Penyu 89740'
  },
  tel: {
    title: 'Tel',
    tel: '+60 88-230 916'
  },
  paymentAccept: {
    title: 'Payment Accepted by',
    master: 'master-card',
    visa: 'visa-card'
  },
  copyright: '© CopyRight 2017 Tempurong Golden Beach Resort. All Rights Reserved.',
  pages: {
    home: {
      welcome: 'Welcome to Tempurong',
      services: 'Services',
      activities: 'Activities',
      features: 'Features',
      reviews: 'Reviews'
    },
    about: {
      pageTitle: 'About',
      sectionTitle: 'Want to explore more about kuala penyu?'
    },
    rooms: {
      pageTitle: 'Rooms & Amenities'
    },
    activities: {
      pageTitle: 'Area & Activities',
      activities: 'Activities'
    },
    food: {
      pageTitle: 'Food'
    },
    contact: {
      pageTitle: 'Contact'
    },
    reservations: {
      pageTitle: 'Reservations'
    },
    reservationsContact: {
      pageTitle: 'Contact Information',
      fillInContact: 'Please fill in all the following information.',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      remarks: 'Remarks',
      additionalNotes: 'Additional notes (airport pickup, interested in activities etc.',
      tnc: 'Terms & Conditions',
      tncCheckbox: 'I have read and agree to the above Terms and Conditions and cancellation policy.'
    },
    reservationsSummary: {
      pageTitle: 'Booking Summary',
      clientName: 'Name',
      clientEmail: 'Email',
      totalAmount: 'Total Amount'
    }
  },
  datePicker: {
    night: 'Night',
    nights: 'Nights',
    'day-names': ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
    'check-in': 'Check-in',
    'check-out': 'Check-Out',
    'month-names': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  },
  button: {
    book: 'Book',
    bookNow: 'Book Now',
    more: 'More',
    moreRooms: 'More Rooms',
    viewRooms: 'View Rooms',
    moreDetails: 'More Details',
    hideDetails: 'Hide Details',
    moreAreaAndActivities: 'More Area & Activities',
    discoverMore: 'Discover More',
    dropMessage: 'Drop a Message',
    justAsk: 'Just Ask',
    submit: 'Submit',
    back: 'Back',
    checkOut: 'Check Out',
    pay: 'Proceed to Payment'
  },
  dateUnit: {
    days: '{count} days | {count} days | {count} days',
    nights: '{count} nights | {count} night | {count} nights'
  },
  commonUnits: {
    guests: '{count} guests | {count} guest | {count} guests',
    adults: '{count} adults | {count} adult | {count} adults',
    children: '{count} children | {count} child | {count} children',
    room: '{count} rooms | {count} room | {count} rooms',
    breakfast: '{count} breakfasts | {count} breakfast | {count} breakfasts',
    mattress: '{count} mattresses | {count} mattress | {count} mattresses'
  },
  components: {
    booking: {
      bookingSticky: {
        total: 'Total',
        adultTitle: 'Adults',
        childrenTitle: 'Children',
        totalRoom: 'Total Rooms',
        priceDescription: '$ {price} MYR for {nights}',
        policyRemarks: 'Please refer to our Resort Policy.'
      }
    },
    card: {
      roomCard: {
        guests: '{count} guests | {count} guest | {count} guests',
        addMattressRemarks: '(adding 1 extra mattress for max. {count} guests)',
        addMattressAndBreakfastOption: 'Extra mattress or breakfast',
        extraBreakfast: 'extra breakfast (MYR12 per night)',
        breakfastRemarks: '* max 1 extra breakfast per room',
        extraMattress: 'extra mattress (MYR18 per night)',
        mattressRemarks: '* max 1 extra mattress per room',
        queenBed: '0 queen beds | 1 queen bed | {count} queen beds',
        bunkBed: '0 bunk beds | 1 bunk bed | {count} bunk beds',
        roomAvailable: '{count} rooms available | {count} room available | {count} rooms available',
        description: 'Description',
        amenities: 'Amenities',
        resortPolicy: 'Resort Policy',
        cancellations: 'Cancellations'
      },
      roomSummaryCard: {
        capacity: 'Max. {capacity} guests per room',
        extraMattressRemarks: '(If extra mattress is added, the capacity of that room is increased to {capacity})',
        mattressAndBreakfast: '(including extra {mattress} and {breakfast})'
      }
    }
  },
  error: {
    noCheckInOut: 'Please select check in and check out date.',
    noGuestSelected: 'Please select at least one guest.',
    noRoomSelected: 'Please select at least one room.',
    guestAndRoomNoConflict: 'Total guest cannot larger than maximum capacity of all rooms.',
    email: 'Please insert valid email address.',
    tnc: 'Please agree the term and condition.',
    required: 'The {field} field is required.'
  }
}
