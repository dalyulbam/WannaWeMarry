/**
 * @file translation.js
 * @description Contains translations for the website in English, Korean, French, and Japanese,
 *              covering various sections such as navbar, RSVP, registry, money gift, and more.
 * @author Emanuele Sgroi
 * @date 19 October 2024
 */

const translations = {
  // ENGLISH <---------------------------------------------------------------------------------------
  en: {
    couple: {
      her: "Karolina",
      him: "Emanuele",
      footer_her: "Karolina",
      footer_him: "Emanuele",
    },
    navbar: {
      welcome: "Welcome",
      save_the_date: "Save the Date",
      schedule: "Wedding Timeline",
      info: "Details",
      rsvp: "RSVP",
      registry: "Registry",
      music: "Playlist",
    },
    welcome_section: {
      small_text: "The wedding of...",
      days: "Days",
      day: "Day",
      hours: "Hours",
      hour: "Hours",
      minutes: "Minutes",
      minute: "Minute",
      seconds: "Seconds",
      second: "second",
      button: "Save the Date",
    },
    saveTheDate_section: {
      title: "SAVE",
      title_cursive: "The Date",
      date: "26th of July 2025",
      place: "in Kolonia Łobudzice, Poland",
      story_1: "We Met",
      story_2: "We Got Engaged",
      story_3_future: "We Will Marry",
      story_3_past: "We Got Married",
    },
    schedule_section: {
      title: {
        main: "WEDDING",
        sub: "Timeline",
      },
      description:
        "The wedding celebration will start on Saturday, 26th of July, and end on Sunday, 27th of July 2025.",
      day_1: {
        title: "Day 1",
        events: {
          ceremony: {
            time: "4:00 PM",
            title: "Ceremony Begins",
          },
          dinner: {
            time: "6:00 PM",
            title: "Dinner Served",
          },
          dance: {
            time: "6:00 PM",
            title: "First Dance",
          },
          photo: {
            time: "8:00 - 11:00 PM",
            title: "Photo Booth",
          },
          pig: {
            time: "12:00 AM",
            title: "Special Dish",
          },
          cake_cutting: {
            time: "22:30 PM",
            title: "Cake Cutting",
          },
          games: {
            time: "12:30 AM",
            title: "Party Games",
          },
          party: {
            time: "All Night",
            title: "Eat, Drink, Dance, Repeat!",
          },
        },
      },
      day_2: {
        title: "Day 2",
        events: {
          after: {
            time: "3:00 PM",
            title: "After Party Starts",
          },
          vespa: {
            time: "3:00 - 8:00 PM",
            title: "Vespa Bar",
          },
          party_continues: {
            time: "All Day",
            title: "Eat, Drink, Dance, Repeat!",
          },
          end: {
            time: "9:00 PM",
            title: "The End",
          },
        },
      },
    },
    info_section: {
      title: {
        main: "THE",
        sub: "Details",
      },
      details: {
        when_where: "When & Where",
        dates: [
          {
            bold: true,
            text: "Dates: ",
          },
          "Saturday, 26th of July & Sunday, 27th of July 2025.",
        ],
        location: [
          {
            bold: true,
            text: "Location: ",
          },
          'Venue "Przy Patykach", Kolonia Łobudzice 18c, 97-425, Poland.',
        ],
        button_loc: "SEE THE VENUE",
      },
      accommodations: {
        title: "Accommodations",
        description_1: [
          "For our international guests, we are pleased to offer accommodation at the venue's hotel on the ",
          {
            bold: true,
            text: "Friday 25th of July, Saturday 26th of July, and Sunday 27th of July.",
          },
        ],
        breakfast: [
          { bold: true, text: "Breakfast" },
          " is included with your stay and will be served from ",
          { bold: true, text: "9 AM to 12 PM" },
          " each morning.",
        ],
        checkout: [
          { bold: true, text: "Hotel/Apartment Checkout:" },
          " The checkout is on Monday at 11:00 AM, please have your breakfast before then.",
        ],
      },
      travel_transport: {
        title: "Travel & Transportation",
        description_1: [
          "For our international guests, we will provide transportation from the airport to the venue on Friday, 25th of July, and from the venue to the airport on Monday, 28th of July.",
        ],
        description_2: [
          {
            bold: true,
            text: "Before booking your travel, please contact us to let us know the time and the airport that works best for you. We will then organize a group transport that fits the majority. Please do it before the 26th of May 2025.",
          },
        ],
        description_3: [
          "The closest airports are Katowice Airport (KTW), Warsaw Modlin Airport (WMI), and Warsaw Chopin Airport (WAW).",
        ],
        description_4: [
          "We will try our best to accommodate everyone. If you cannot land/depart at the same day/time as everyone else, we will help you organize another way of getting to and from the venue.",
        ],
        transport_details: {
          arrival: {
            title: "Friday 25th of July",
            desc1: [
              { bold: true, text: "Warsaw Airport (WAW):" },
              " Bus leaves around 7:30PM - Karolina will be waiting at the arrivals.",
            ],
            desc2: [
              { bold: true, text: "Katowice Airport:" },
              " Bus leaves around 5:00PM - Emanuele will be waiting at the arrivals.",
            ],
          },
          departure: {
            title: "Monday 28th of July",
            desc1: [
              { bold: true, text: "" },
              " Buses for both airports leave at 12:00 PM",
            ],
          },
        },
      },
      contact: {
        title: "Contact Us",
      },
    },
    rsvp_section: {
      top_title: "RSVP",
      title: { main: "Confirm your", sub: "Attendance" },
      description_1: [
        { bold: true, text: "Please RSVP by the 26th of May 2025!" },
        " Simply search for your name on the form and confirm your attendance.",
      ],
      description_2:
        "Please leave us a note if you have any special requests, dietary restrictions, or if there's anything else you'd like to discuss. We want to make sure everyone is comfortable and has an amazing time!",
      label: "Search your name in the guests list",
      placeholder: "Search for your name",
      no_found: "No guests found with this name",
      multiple_guests_1: {
        hi: "Hi ",
        you: " You, ",
        and: " and ",
        are_invited:
          ", are warmly invited to join us on our special day. Celebrating with all of you will make it unforgettable!",
      },
      multiple_guests_2:
        "Select who is attending the wedding. We hope all of you can make it.",
      single_guest_1: {
        hi: "Hi ",
        are_invited:
          " you are warmly invited to join us on our special day. Celebrating with you will make it unforgettable!",
      },
      single_guest_2: "Are you attending the wedding?",
      answers: { yes: "Yes", no: "No", unknown: "Don't know yet" },
      note_placeholder: "Would you like to leave a note?",
      rsvp_success: {
        thanks: "Thank you!",
        submitted: " Your RSVP has been submitted.",
        change_by: [
          "Remember that you can change the attendance any time before the ",
          { bold: true, text: "26th of May 2025" },
          ".",
        ],
      },
      error_enter_name: "Please enter your answer before submitting",
      error_submitting: "Error submitting RSVP. Please try again.",
      button: {
        submit: "Send RSVP",
        loading: "Loading...",
      },
    },
    registry_section: {
      title: { main: "GIFT", sub: "Registry" },
      description_1:
        "Your presence at our wedding is truly the greatest gift we could ask for!",
      description_2:
        "However, if you wish to honor us with a gift, we would greatly appreciate a monetary contribution to help us build our future together.",
      description_3:
        "In lieu of flowers, alcohol, and other physical gifts, we would be delighted to receive scratch cards or lottery tickets as a fun and exciting way to celebrate our new beginning.",
      description_4:
        "We kindly ask our international guests to consider sending their gift via a bank transfer. To access our bank details, please click the button below and enter the password that's on your invitation. As always, feel free to contact us directly if you have any questions!",
      button: "Access Bank Details",
      thanks: "THANK YOU!",
      error_from_api: "There is a problem. Try again later or contact us",
      error_incorrect_password: "Incorrect password",
      error_insert_password: "Insert password",
      account_holder: "Beneficiary: ",
      iban: "IBAN: ",
      bank_name: "Bank address: ",
      bic: "BIC / SWIFT: ",
      sort_code: "Sort Code: ",
      account_number: "Account Number: ",
      eur: "Eur",
      gbp: "Pound",
      pln: "Polish Zlotych",
      toast_copied: "Copied to clipboard",
      toast_error: "Couldn't copy it",
      dialog_title: {
        before: "Enter the password",
        after: "The password is correct",
      },
      placeholder: "Enter password",
      submit_button: { submit: "Submit", loading: "Checking..." },
      copy_all: "Copy All",
    },
    money_gift_section: {
      title: { main: "MONETARY", sub: "Gift" },
      description:
        "Your presence at our wedding is the greatest gift. For those who wish to celebrate with a monetary gift, here are our details.",
      show_account: "Show Account Details",
      hide_account: "Hide Account Details",
      bank_label: "Bank",
      account_holder_label: "Account Holder",
      account_number_label: "Account Number",
      toss_button: "Send via Toss",
      kakaopay_button: "Send via KakaoPay",
      toast_copied: "Copied to clipboard",
      toast_error: "Failed to copy",
      thanks: "THANK YOU!",
    },
    music_section: {
      title: { main: "OUR", sub: "Playlist" },
      description:
        "Add your favorite party songs to our playlist and help us shape the perfect soundtrack for our wedding! ",
      placeholder: "Enter the song name",
      small_note:
        "* Some songs can't be played here, but you can still add them to the playlist.",
      toast_success: {
        title: "Song added to the playlist",
        description: "Would you like to add another song?",
      },
      toast_error: {
        title: "Unable to add the song",
        description:
          "We're sorry, but something went wrong on our end. Please try again later.",
      },
    },
    footer: {
      text_1: "Website created with ",
      text_2: "by ",
      text_3: "Photos by",
    },
    not_found: {
      message: "The page you are looking for does not exist.",
      button: "Go Back",
    },
  },

  // KOREAN <---------------------------------------------------------------------------------------
  ko: {
    couple: {
      her: "신부이름",
      him: "신랑이름",
      footer_her: "신부이름",
      footer_him: "신랑이름",
    },
    navbar: {
      welcome: "소개",
      save_the_date: "날짜 안내",
      schedule: "식순 안내",
      info: "상세 정보",
      rsvp: "참석 확인",
      registry: "축의금",
      music: "플레이리스트",
    },
    welcome_section: {
      small_text: "우리 결혼합니다",
      days: "일",
      day: "일",
      hours: "시간",
      hour: "시간",
      minutes: "분",
      minute: "분",
      seconds: "초",
      second: "초",
      button: "날짜 저장하기",
    },
    saveTheDate_section: {
      title: "날짜를",
      title_cursive: "기억해주세요",
      date: "2025년 7월 26일",
      place: "장소 이름을 입력하세요",
      story_1: "처음 만난 날",
      story_2: "약혼한 날",
      story_3_future: "결혼하는 날",
      story_3_past: "결혼한 날",
    },
    schedule_section: {
      title: {
        main: "결혼식",
        sub: "식순 안내",
      },
      description:
        "결혼식은 2025년 7월 26일 토요일에 시작하여 7월 27일 일요일에 마무리됩니다.",
      day_1: {
        title: "첫째 날",
        events: {
          ceremony: {
            time: "오후 4:00",
            title: "예식 시작",
          },
          dinner: {
            time: "오후 6:00",
            title: "피로연",
          },
          dance: {
            time: "오후 6:00",
            title: "첫 번째 댄스",
          },
          photo: {
            time: "오후 8:00 - 11:00",
            title: "포토 부스",
          },
          pig: {
            time: "오전 12:00",
            title: "특별 요리",
          },
          cake_cutting: {
            time: "오후 10:30",
            title: "케이크 커팅",
          },
          games: {
            time: "오전 12:30",
            title: "파티 게임",
          },
          party: {
            time: "밤새도록",
            title: "먹고, 마시고, 춤추고!",
          },
        },
      },
      day_2: {
        title: "둘째 날",
        events: {
          after: {
            time: "오후 3:00",
            title: "애프터 파티 시작",
          },
          vespa: {
            time: "오후 3:00 - 8:00",
            title: "베스파 바",
          },
          party_continues: {
            time: "하루 종일",
            title: "먹고, 마시고, 춤추고!",
          },
          end: {
            time: "오후 9:00",
            title: "끝",
          },
        },
      },
    },
    info_section: {
      title: {
        main: "상세",
        sub: "정보",
      },
      details: {
        when_where: "일시 및 장소",
        dates: [
          {
            bold: true,
            text: "날짜: ",
          },
          "2025년 7월 26일(토) & 7월 27일(일)",
        ],
        location: [
          {
            bold: true,
            text: "장소: ",
          },
          "장소 이름을 입력하세요",
        ],
        button_loc: "장소 보기",
      },
      accommodations: {
        title: "숙소 안내",
        description_1: [
          "해외에서 오시는 하객분들을 위해 ",
          {
            bold: true,
            text: "7월 25일(금), 26일(토), 27일(일)",
          },
          " 숙소를 준비하였습니다.",
        ],
        breakfast: [
          { bold: true, text: "조식" },
          "이 포함되어 있으며 매일 아침 ",
          { bold: true, text: "오전 9시~12시" },
          "에 제공됩니다.",
        ],
        checkout: [
          { bold: true, text: "체크아웃:" },
          " 월요일 오전 11시까지 체크아웃해 주시기 바랍니다.",
        ],
      },
      travel_transport: {
        title: "교통 안내",
        description_1: [
          "해외에서 오시는 하객분들을 위해 7월 25일 공항에서 행사장까지, 7월 28일 행사장에서 공항까지 교통편을 제공해 드립니다.",
        ],
        description_2: [
          {
            bold: true,
            text: "여행을 예약하시기 전에 먼저 연락하여 편리한 시간과 공항을 알려주세요. 2025년 5월 26일 이전에 알려주시면 감사하겠습니다.",
          },
        ],
        description_3: [""],
        description_4: [
          "모든 분들을 위해 최선을 다하겠습니다. 다른 분들과 같은 날짜/시간에 도착하거나 출발하기 어려운 경우, 다른 교통 수단을 찾는 데 도움을 드리겠습니다.",
        ],
        transport_details: {
          arrival: {
            title: "",
            desc1: [{ bold: true, text: "" }, ""],
            desc2: [{ bold: true, text: "" }, ""],
          },
          departure: {
            title: "",
            desc1: [{ bold: true, text: "" }, ""],
          },
        },
      },
      contact: {
        title: "문의하기",
      },
    },
    rsvp_section: {
      top_title: "참석 확인",
      title: { main: "참석 여부를", sub: "알려주세요" },
      description_1: [
        { bold: true, text: "2025년 5월 26일까지 참석 여부를 알려주세요!" },
        " 아래에서 이름을 검색하고 참석 여부를 확인해 주세요.",
      ],
      description_2:
        "특별한 요청이나 식이 제한, 또는 다른 사항이 있으시면 메모를 남겨주세요. 모든 분들이 편안하고 즐거운 시간을 보내실 수 있도록 하겠습니다!",
      label: "하객 명단에서 이름을 검색하세요",
      placeholder: "이름을 입력하세요",
      no_found: "이 이름으로 등록된 하객이 없습니다",
      multiple_guests_1: {
        hi: "안녕하세요 ",
        you: " 님, ",
        and: " 그리고 ",
        are_invited:
          "님, 저희의 특별한 날에 함께해 주시면 정말 기쁘겠습니다. 여러분과 함께하는 축하는 잊을 수 없는 추억이 될 것입니다!",
      },
      multiple_guests_2:
        "결혼식에 참석하실 분을 선택해 주세요. 모두 함께해 주시길 바랍니다.",
      single_guest_1: {
        hi: "안녕하세요 ",
        are_invited:
          "님, 저희의 특별한 날에 함께해 주시면 정말 기쁘겠습니다. 함께해 주시는 것만으로도 잊을 수 없는 하루가 될 것입니다!",
      },
      single_guest_2: "결혼식에 참석하시겠습니까?",
      answers: { yes: "예", no: "아니오", unknown: "아직 모르겠습니다" },
      note_placeholder: "메모를 남기시겠습니까?",
      rsvp_success: {
        thanks: "감사합니다!",
        submitted: " 참석 확인이 전송되었습니다.",
        change_by: [
          "",
          { bold: true, text: "2025년 5월 26일" },
          " 이전에 참석 여부를 변경하실 수 있습니다.",
        ],
      },
      error_enter_name: "제출하기 전에 답변을 입력해 주세요",
      error_submitting: "참석 확인 전송 중 오류가 발생했습니다. 다시 시도해 주세요.",
      button: {
        submit: "참석 확인 보내기",
        loading: "로딩 중...",
      },
    },
    registry_section: {
      title: { main: "축의금", sub: "안내" },
      description_1:
        "저희 결혼식에 참석해 주시는 것만으로도 가장 큰 선물입니다!",
      description_2:
        "축하의 마음을 전해 주시고 싶으신 분들을 위해 아래 계좌 정보를 안내드립니다.",
      description_3: "",
      description_4: "",
      button: "계좌 정보 보기",
      thanks: "감사합니다!",
      error_from_api: "문제가 발생했습니다. 나중에 다시 시도하거나 연락해 주세요",
      error_incorrect_password: "비밀번호가 틀렸습니다",
      error_insert_password: "비밀번호를 입력하세요",
      account_holder: "예금주: ",
      iban: "IBAN: ",
      bank_name: "은행명: ",
      bic: "BIC / SWIFT: ",
      sort_code: "Sort Code: ",
      account_number: "계좌번호: ",
      eur: "유로",
      gbp: "파운드",
      pln: "즐로티",
      toast_copied: "클립보드에 복사되었습니다",
      toast_error: "복사에 실패했습니다",
      dialog_title: {
        before: "비밀번호를 입력하세요",
        after: "비밀번호가 확인되었습니다",
      },
      placeholder: "비밀번호 입력",
      submit_button: { submit: "확인", loading: "확인 중..." },
      copy_all: "전체 복사",
    },
    money_gift_section: {
      title: { main: "축의금", sub: "안내" },
      description:
        "저희 두 사람의 새로운 시작을 축하해 주시는 마음만으로도 큰 힘이 됩니다. 축하의 마음을 전해 주실 분들을 위해 안내드립니다.",
      show_account: "계좌번호 보기",
      hide_account: "계좌번호 닫기",
      bank_label: "은행",
      account_holder_label: "예금주",
      account_number_label: "계좌번호",
      toss_button: "토스로 송금하기",
      kakaopay_button: "카카오페이로 송금하기",
      toast_copied: "클립보드에 복사되었습니다",
      toast_error: "복사에 실패했습니다",
      thanks: "감사합니다",
    },
    music_section: {
      title: { main: "우리의", sub: "플레이리스트" },
      description:
        "좋아하는 파티 노래를 우리의 플레이리스트에 추가하고 완벽한 결혼식 사운드트랙을 만드는 데 도움을 주세요!",
      placeholder: "노래 제목을 입력하세요",
      small_note:
        "* 일부 노래는 여기서 재생할 수 없지만 플레이리스트에 추가할 수 있습니다.",
      toast_success: {
        title: "플레이리스트에 노래가 추가되었습니다",
        description: "다른 노래도 추가하시겠습니까?",
      },
      toast_error: {
        title: "노래를 추가할 수 없습니다",
        description:
          "죄송합니다. 문제가 발생했습니다. 나중에 다시 시도해 주세요.",
      },
    },
    footer: {
      text_1: "이 웹사이트는 ",
      text_2: "에 의해 ",
      text_3: "사진 촬영",
    },
    not_found: {
      message: "찾으시는 페이지가 존재하지 않습니다.",
      button: "돌아가기",
    },
  },

  // FRENCH <---------------------------------------------------------------------------------------
  fr: {
    couple: {
      her: "Karolina",
      him: "Emanuele",
      footer_her: "Karolina",
      footer_him: "Emanuele",
    },
    navbar: {
      welcome: "Accueil",
      save_the_date: "Save the Date",
      schedule: "Programme",
      info: "Détails",
      rsvp: "RSVP",
      registry: "Cadeaux",
      music: "Playlist",
    },
    welcome_section: {
      small_text: "Le mariage de...",
      days: "Jours",
      day: "Jour",
      hours: "Heures",
      hour: "Heure",
      minutes: "Minutes",
      minute: "Minute",
      seconds: "Secondes",
      second: "seconde",
      button: "Save the Date",
    },
    saveTheDate_section: {
      title: "RÉSERVEZ",
      title_cursive: "La Date",
      date: "26 juillet 2025",
      place: "à Kolonia Łobudzice, Pologne",
      story_1: "Nous Nous Sommes Rencontrés",
      story_2: "Nous Nous Sommes Fiancés",
      story_3_future: "Nous Nous Marierons",
      story_3_past: "Nous Nous Sommes Mariés",
    },
    schedule_section: {
      title: {
        main: "PROGRAMME",
        sub: "Du Mariage",
      },
      description:
        "La célébration du mariage commencera le samedi 26 juillet et se terminera le dimanche 27 juillet 2025.",
      day_1: {
        title: "Jour 1",
        events: {
          ceremony: {
            time: "16h00",
            title: "Début de la Cérémonie",
          },
          dinner: {
            time: "18h00",
            title: "Dîner Servi",
          },
          dance: {
            time: "18h00",
            title: "Première Danse",
          },
          photo: {
            time: "20h00 - 23h00",
            title: "Photomaton",
          },
          pig: {
            time: "00h00",
            title: "Plat Spécial",
          },
          cake_cutting: {
            time: "22h30",
            title: "Découpe du Gâteau",
          },
          games: {
            time: "00h30",
            title: "Jeux de Groupe",
          },
          party: {
            time: "Toute la Nuit",
            title: "Manger, Boire, Danser, Répéter !",
          },
        },
      },
      day_2: {
        title: "Jour 2",
        events: {
          after: {
            time: "15h00",
            title: "After Party",
          },
          vespa: {
            time: "15h00 - 20h00",
            title: "Bar Vespa",
          },
          party_continues: {
            time: "Toute la Journée",
            title: "Manger, Boire, Danser, Répéter !",
          },
          end: {
            time: "21h00",
            title: "La Fin",
          },
        },
      },
    },
    info_section: {
      title: {
        main: "LES",
        sub: "Détails",
      },
      details: {
        when_where: "Quand et Où",
        dates: [
          {
            bold: true,
            text: "Dates : ",
          },
          "Samedi 26 et Dimanche 27 Juillet 2025",
        ],
        location: [
          {
            bold: true,
            text: "Lieu : ",
          },
          '"Przy Patykach", Kolonia Łobudzice 18c, 97-425, Pologne.',
        ],
        button_loc: "VOIR LE LIEU",
      },
      accommodations: {
        title: "Hébergement",
        description_1: [
          "Pour nos invités internationaux, nous offrons l'hébergement à l'hôtel du lieu le ",
          {
            bold: true,
            text: "vendredi 25, samedi 26 et dimanche 27 juillet.",
          },
        ],
        breakfast: [
          { bold: true, text: "Le petit-déjeuner" },
          " est inclus et sera servi de ",
          { bold: true, text: "9h à 12h" },
          " chaque matin.",
        ],
        checkout: [
          { bold: true, text: "Check-out :" },
          " Le check-out est le lundi à 11h00.",
        ],
      },
      travel_transport: {
        title: "Transport",
        description_1: [
          "Pour nos invités internationaux, nous fournirons le transport de l'aéroport au lieu le vendredi 25 juillet et du lieu à l'aéroport le lundi 28 juillet.",
        ],
        description_2: [
          {
            bold: true,
            text: "Avant de réserver votre voyage, veuillez nous contacter pour nous indiquer l'heure et l'aéroport qui vous conviennent le mieux. Merci de le faire avant le 26 mai 2025.",
          },
        ],
        description_3: [
          "Les aéroports les plus proches sont l'aéroport de Katowice (KTW), l'aéroport de Varsovie Modlin (WMI) et l'aéroport de Varsovie Chopin (WAW).",
        ],
        description_4: [
          "Nous ferons de notre mieux pour accommoder tout le monde.",
        ],
        transport_details: {
          arrival: {
            title: "",
            desc1: [{ bold: true, text: "" }, ""],
            desc2: [{ bold: true, text: "" }, ""],
          },
          departure: {
            title: "",
            desc1: [{ bold: true, text: "" }, ""],
          },
        },
      },
      contact: {
        title: "Contactez-nous",
      },
    },
    rsvp_section: {
      top_title: "RSVP",
      title: { main: "Confirmez votre", sub: "Présence" },
      description_1: [
        {
          bold: true,
          text: "Merci de confirmer votre présence avant le 26 mai 2025 !",
        },
        " Cherchez votre nom dans le formulaire et confirmez votre participation.",
      ],
      description_2:
        "N'hésitez pas à nous laisser un message si vous avez des demandes spéciales, des restrictions alimentaires ou toute autre chose à nous communiquer.",
      label: "Cherchez votre nom dans la liste des invités",
      placeholder: "Cherchez votre nom",
      no_found: "Aucun invité trouvé avec ce nom",
      multiple_guests_1: {
        hi: "Bonjour ",
        you: " Vous, ",
        and: " et ",
        are_invited:
          ", êtes chaleureusement invités à notre jour spécial. Célébrer avec vous tous rendra ce moment inoubliable !",
      },
      multiple_guests_2:
        "Sélectionnez qui participera au mariage. Nous espérons que vous pourrez tous venir.",
      single_guest_1: {
        hi: "Bonjour ",
        are_invited:
          " vous êtes chaleureusement invité(e) à notre jour spécial. Votre présence rendra ce moment inoubliable !",
      },
      single_guest_2: "Participerez-vous au mariage ?",
      answers: { yes: "Oui", no: "Non", unknown: "Je ne sais pas encore" },
      note_placeholder: "Souhaitez-vous laisser un message ?",
      rsvp_success: {
        thanks: "Merci !",
        submitted: " Votre confirmation a été envoyée.",
        change_by: [
          "Vous pouvez modifier votre réponse avant le ",
          { bold: true, text: "26 mai 2025" },
          ".",
        ],
      },
      error_enter_name: "Veuillez entrer votre réponse avant de soumettre",
      error_submitting:
        "Erreur lors de l'envoi de la confirmation. Veuillez réessayer.",
      button: {
        submit: "Envoyer",
        loading: "Chargement...",
      },
    },
    registry_section: {
      title: { main: "LISTE", sub: "De Cadeaux" },
      description_1:
        "Votre présence à notre mariage est le plus beau cadeau que nous puissions recevoir !",
      description_2:
        "Cependant, si vous souhaitez nous honorer d'un cadeau, nous apprécierions grandement une contribution financière pour nous aider à construire notre avenir ensemble.",
      description_3:
        "Au lieu de fleurs ou d'autres cadeaux physiques, nous serions ravis de recevoir des tickets à gratter ou des billets de loterie !",
      description_4:
        "Nous demandons à nos invités internationaux de bien vouloir envisager d'envoyer leur cadeau par virement bancaire. Pour accéder à nos coordonnées bancaires, cliquez sur le bouton ci-dessous et entrez le mot de passe figurant sur votre invitation.",
      button: "Accéder aux Coordonnées Bancaires",
      thanks: "MERCI !",
      error_from_api:
        "Un problème est survenu. Réessayez plus tard ou contactez-nous",
      error_incorrect_password: "Mot de passe incorrect",
      error_insert_password: "Entrez le mot de passe",
      account_holder: "Bénéficiaire : ",
      iban: "IBAN : ",
      bank_name: "Banque : ",
      bic: "BIC / SWIFT : ",
      sort_code: "Sort Code : ",
      account_number: "Numéro de compte : ",
      eur: "Euro",
      gbp: "Livre Sterling",
      pln: "Zloty Polonais",
      toast_copied: "Copié dans le presse-papiers",
      toast_error: "Impossible de copier",
      dialog_title: {
        before: "Entrez le mot de passe",
        after: "Le mot de passe est correct",
      },
      placeholder: "Entrez le mot de passe",
      submit_button: { submit: "Valider", loading: "Vérification..." },
      copy_all: "Tout Copier",
    },
    money_gift_section: {
      title: { main: "CADEAU", sub: "Financier" },
      description:
        "Votre présence à notre mariage est le plus beau cadeau. Pour ceux qui souhaitent offrir un cadeau financier, voici nos coordonnées.",
      show_account: "Voir les coordonnées bancaires",
      hide_account: "Masquer les coordonnées",
      bank_label: "Banque",
      account_holder_label: "Titulaire du compte",
      account_number_label: "Numéro de compte",
      toss_button: "Envoyer via Toss",
      kakaopay_button: "Envoyer via KakaoPay",
      toast_copied: "Copié dans le presse-papiers",
      toast_error: "Impossible de copier",
      thanks: "MERCI !",
    },
    music_section: {
      title: { main: "NOTRE", sub: "Playlist" },
      description:
        "Ajoutez vos chansons préférées à notre playlist et aidez-nous à créer la bande-son parfaite pour notre mariage !",
      placeholder: "Nom de la chanson",
      small_note:
        "* Certaines chansons ne peuvent pas être jouées ici, mais vous pouvez quand même les ajouter à la playlist.",
      toast_success: {
        title: "Chanson ajoutée à la playlist",
        description: "Voulez-vous en ajouter une autre ?",
      },
      toast_error: {
        title: "Impossible d'ajouter la chanson",
        description:
          "Nous sommes désolés, quelque chose s'est mal passé. Veuillez réessayer plus tard.",
      },
    },
    footer: {
      text_1: "Site créé avec ",
      text_2: "par ",
      text_3: "Photos par",
    },
    not_found: {
      message: "La page que vous recherchez n'existe pas.",
      button: "Retour",
    },
  },

  // JAPANESE <---------------------------------------------------------------------------------------
  ja: {
    couple: {
      her: "Karolina",
      him: "Emanuele",
      footer_her: "Karolina",
      footer_him: "Emanuele",
    },
    navbar: {
      welcome: "ようこそ",
      save_the_date: "日程",
      schedule: "スケジュール",
      info: "詳細",
      rsvp: "出欠確認",
      registry: "ご祝儀",
      music: "プレイリスト",
    },
    welcome_section: {
      small_text: "私たちの結婚式",
      days: "日",
      day: "日",
      hours: "時間",
      hour: "時間",
      minutes: "分",
      minute: "分",
      seconds: "秒",
      second: "秒",
      button: "日程を保存",
    },
    saveTheDate_section: {
      title: "日程を",
      title_cursive: "お忘れなく",
      date: "2025年7月26日",
      place: "ポーランド コロニア・ウォブジツェにて",
      story_1: "出会い",
      story_2: "婚約",
      story_3_future: "結婚式",
      story_3_past: "結婚しました",
    },
    schedule_section: {
      title: {
        main: "結婚式",
        sub: "スケジュール",
      },
      description:
        "結婚式は2025年7月26日(土)に始まり、7月27日(日)に終了します。",
      day_1: {
        title: "1日目",
        events: {
          ceremony: {
            time: "16:00",
            title: "挙式開始",
          },
          dinner: {
            time: "18:00",
            title: "ディナー",
          },
          dance: {
            time: "18:00",
            title: "ファーストダンス",
          },
          photo: {
            time: "20:00 - 23:00",
            title: "フォトブース",
          },
          pig: {
            time: "0:00",
            title: "特別料理",
          },
          cake_cutting: {
            time: "22:30",
            title: "ケーキカット",
          },
          games: {
            time: "0:30",
            title: "パーティーゲーム",
          },
          party: {
            time: "一晩中",
            title: "食べて、飲んで、踊って！",
          },
        },
      },
      day_2: {
        title: "2日目",
        events: {
          after: {
            time: "15:00",
            title: "アフターパーティー開始",
          },
          vespa: {
            time: "15:00 - 20:00",
            title: "ベスパバー",
          },
          party_continues: {
            time: "終日",
            title: "食べて、飲んで、踊って！",
          },
          end: {
            time: "21:00",
            title: "終了",
          },
        },
      },
    },
    info_section: {
      title: {
        main: "詳細",
        sub: "情報",
      },
      details: {
        when_where: "日時・場所",
        dates: [
          {
            bold: true,
            text: "日程：",
          },
          "2025年7月26日(土) & 7月27日(日)",
        ],
        location: [
          {
            bold: true,
            text: "場所：",
          },
          '"Przy Patykach", Kolonia Łobudzice 18c, 97-425, ポーランド',
        ],
        button_loc: "会場を見る",
      },
      accommodations: {
        title: "宿泊",
        description_1: [
          "海外からお越しのゲストの皆様には、",
          {
            bold: true,
            text: "7月25日(金)、26日(土)、27日(日)",
          },
          "の宿泊をご用意しております。",
        ],
        breakfast: [
          { bold: true, text: "朝食" },
          "付きで、毎朝",
          { bold: true, text: "9時〜12時" },
          "に提供されます。",
        ],
        checkout: [
          { bold: true, text: "チェックアウト：" },
          " 月曜日午前11時までにチェックアウトをお願いします。",
        ],
      },
      travel_transport: {
        title: "交通",
        description_1: [
          "海外からお越しのゲストの皆様には、7月25日に空港から会場まで、7月28日に会場から空港までの交通手段を提供いたします。",
        ],
        description_2: [
          {
            bold: true,
            text: "ご旅行の予約前に、ご都合の良い時間と空港をお知らせください。2025年5月26日までにお願いいたします。",
          },
        ],
        description_3: [""],
        description_4: [
          "皆様にご満足いただけるよう最善を尽くします。",
        ],
        transport_details: {
          arrival: {
            title: "",
            desc1: [{ bold: true, text: "" }, ""],
            desc2: [{ bold: true, text: "" }, ""],
          },
          departure: {
            title: "",
            desc1: [{ bold: true, text: "" }, ""],
          },
        },
      },
      contact: {
        title: "お問い合わせ",
      },
    },
    rsvp_section: {
      top_title: "出欠確認",
      title: { main: "ご出席を", sub: "お知らせください" },
      description_1: [
        {
          bold: true,
          text: "2025年5月26日までにご出欠をお知らせください！",
        },
        " フォームでお名前を検索し、ご出席を確認してください。",
      ],
      description_2:
        "特別なご要望や食事制限、その他ご相談がございましたら、メモを残してください。皆様に快適で素晴らしい時間をお過ごしいただけるようにいたします！",
      label: "ゲストリストからお名前を検索してください",
      placeholder: "お名前を入力",
      no_found: "この名前のゲストは見つかりませんでした",
      multiple_guests_1: {
        hi: "こんにちは ",
        you: " 様、",
        and: " と ",
        are_invited:
          "様、私たちの特別な日にぜひお越しください。皆様と一緒にお祝いできることを楽しみにしています！",
      },
      multiple_guests_2:
        "結婚式に出席される方を選択してください。皆様のご参加をお待ちしています。",
      single_guest_1: {
        hi: "こんにちは ",
        are_invited:
          "様、私たちの特別な日にぜひお越しください。ご一緒にお祝いできることを楽しみにしています！",
      },
      single_guest_2: "結婚式に出席されますか？",
      answers: { yes: "はい", no: "いいえ", unknown: "まだわかりません" },
      note_placeholder: "メモを残しますか？",
      rsvp_success: {
        thanks: "ありがとうございます！",
        submitted: " ご出欠の確認が送信されました。",
        change_by: [
          "",
          { bold: true, text: "2025年5月26日" },
          "までにご変更いただけます。",
        ],
      },
      error_enter_name: "送信前にお答えをご入力ください",
      error_submitting:
        "出欠確認の送信中にエラーが発生しました。もう一度お試しください。",
      button: {
        submit: "出欠確認を送信",
        loading: "読み込み中...",
      },
    },
    registry_section: {
      title: { main: "ご祝儀", sub: "のご案内" },
      description_1:
        "結婚式にご出席いただくことが、私たちにとって最大の贈り物です！",
      description_2:
        "ご祝儀をお考えの方は、下記の口座情報をご参照ください。",
      description_3: "",
      description_4: "",
      button: "口座情報を見る",
      thanks: "ありがとうございます！",
      error_from_api:
        "問題が発生しました。後でもう一度お試しいただくか、お問い合わせください",
      error_incorrect_password: "パスワードが正しくありません",
      error_insert_password: "パスワードを入力してください",
      account_holder: "口座名義：",
      iban: "IBAN：",
      bank_name: "銀行名：",
      bic: "BIC / SWIFT：",
      sort_code: "Sort Code：",
      account_number: "口座番号：",
      eur: "ユーロ",
      gbp: "ポンド",
      pln: "ズウォティ",
      toast_copied: "クリップボードにコピーしました",
      toast_error: "コピーに失敗しました",
      dialog_title: {
        before: "パスワードを入力してください",
        after: "パスワードが確認されました",
      },
      placeholder: "パスワードを入力",
      submit_button: { submit: "送信", loading: "確認中..." },
      copy_all: "すべてコピー",
    },
    money_gift_section: {
      title: { main: "ご祝儀", sub: "のご案内" },
      description:
        "私たちの新しい門出を祝福してくださるお気持ちだけで十分です。ご祝儀をお考えの方のためにご案内いたします。",
      show_account: "口座情報を表示",
      hide_account: "口座情報を閉じる",
      bank_label: "銀行",
      account_holder_label: "口座名義",
      account_number_label: "口座番号",
      toss_button: "Tossで送金",
      kakaopay_button: "KakaoPayで送金",
      toast_copied: "クリップボードにコピーしました",
      toast_error: "コピーに失敗しました",
      thanks: "ありがとうございます",
    },
    music_section: {
      title: { main: "私たちの", sub: "プレイリスト" },
      description:
        "お気に入りの曲をプレイリストに追加して、結婚式の完璧なサウンドトラック作りにご協力ください！",
      placeholder: "曲名を入力してください",
      small_note:
        "* 一部の曲はここで再生できませんが、プレイリストに追加することは可能です。",
      toast_success: {
        title: "プレイリストに曲が追加されました",
        description: "別の曲も追加しますか？",
      },
      toast_error: {
        title: "曲を追加できませんでした",
        description:
          "申し訳ございません。問題が発生しました。後でもう一度お試しください。",
      },
    },
    footer: {
      text_1: "ウェブサイト制作 ",
      text_2: "制作者 ",
      text_3: "写真撮影",
    },
    not_found: {
      message: "お探しのページは存在しません。",
      button: "戻る",
    },
  },
};

export default translations;
