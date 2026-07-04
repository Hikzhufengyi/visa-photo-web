export type AppPhotoSpec = {
  id: string;
  country: string;
  countryZh: string;
  title: string;
  titleZh: string;
  category: "passport" | "visa" | "immigration" | "print";
  size: string;
  pixels: string;
};

export const appPhotoSpecs = [
  {
    "id": "us-passport",
    "country": "United States",
    "countryZh": "美国",
    "title": "U.S. Passport",
    "titleZh": "美国护照",
    "category": "passport",
    "size": "51 x 51 mm",
    "pixels": "600 x 600 px"
  },
  {
    "id": "us-visa",
    "country": "United States",
    "countryZh": "美国",
    "title": "U.S. Visa",
    "titleZh": "美国签证",
    "category": "visa",
    "size": "51 x 51 mm",
    "pixels": "600 x 600 px"
  },
  {
    "id": "uk-passport",
    "country": "United Kingdom",
    "countryZh": "英国",
    "title": "UK Passport",
    "titleZh": "英国护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "600 x 750 px"
  },
  {
    "id": "canada-passport",
    "country": "Canada",
    "countryZh": "加拿大",
    "title": "Canada Passport",
    "titleZh": "加拿大护照",
    "category": "passport",
    "size": "50 x 70 mm",
    "pixels": "600 x 840 px"
  },
  {
    "id": "schengen-visa",
    "country": "Schengen Area",
    "countryZh": "申根区",
    "title": "Schengen Visa",
    "titleZh": "申根签证",
    "category": "visa",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "australia-passport",
    "country": "Australia",
    "countryZh": "澳大利亚",
    "title": "Australia Passport",
    "titleZh": "澳大利亚护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "420 x 540 px"
  },
  {
    "id": "china-visa",
    "country": "China",
    "countryZh": "中国",
    "title": "China Visa",
    "titleZh": "中国签证",
    "category": "visa",
    "size": "33 x 48 mm",
    "pixels": "390 x 567 px"
  },
  {
    "id": "india-visa",
    "country": "India",
    "countryZh": "印度",
    "title": "India Visa",
    "titleZh": "印度签证",
    "category": "visa",
    "size": "51 x 51 mm",
    "pixels": "350 x 350 px"
  },
  {
    "id": "us-green-card",
    "country": "United States",
    "countryZh": "美国",
    "title": "Green Card / USCIS",
    "titleZh": "美国绿卡 / USCIS",
    "category": "immigration",
    "size": "51 x 51 mm",
    "pixels": "600 x 600 px"
  },
  {
    "id": "dv-lottery",
    "country": "United States",
    "countryZh": "美国",
    "title": "DV Lottery",
    "titleZh": "美国 DV 抽签",
    "category": "immigration",
    "size": "51 x 51 mm",
    "pixels": "600 x 600 px"
  },
  {
    "id": "uscis-ead",
    "country": "United States",
    "countryZh": "美国",
    "title": "USCIS EAD / OPT",
    "titleZh": "美国 EAD / OPT",
    "category": "immigration",
    "size": "51 x 51 mm",
    "pixels": "600 x 600 px"
  },
  {
    "id": "canada-pr",
    "country": "Canada",
    "countryZh": "加拿大",
    "title": "Canada PR Card",
    "titleZh": "加拿大枫叶卡",
    "category": "immigration",
    "size": "50 x 70 mm",
    "pixels": "600 x 840 px"
  },
  {
    "id": "uk-immigration",
    "country": "United Kingdom",
    "countryZh": "英国",
    "title": "UK Immigration Photo",
    "titleZh": "英国移民照片",
    "category": "immigration",
    "size": "35 x 45 mm",
    "pixels": "600 x 750 px"
  },
  {
    "id": "australia-immigration",
    "country": "Australia",
    "countryZh": "澳大利亚",
    "title": "Australia Immigration Photo",
    "titleZh": "澳大利亚移民照片",
    "category": "immigration",
    "size": "35 x 45 mm",
    "pixels": "420 x 540 px"
  },
  {
    "id": "eu-residence-permit",
    "country": "European Union",
    "countryZh": "欧盟",
    "title": "EU Residence Permit",
    "titleZh": "欧盟居留许可",
    "category": "immigration",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "saudi-iqama",
    "country": "Saudi Arabia",
    "countryZh": "沙特阿拉伯",
    "title": "Saudi Iqama",
    "titleZh": "沙特 Iqama 居留证",
    "category": "immigration",
    "size": "40 x 60 mm",
    "pixels": "472 x 709 px"
  },
  {
    "id": "uae-emirates-id",
    "country": "United Arab Emirates",
    "countryZh": "阿联酋",
    "title": "UAE Emirates ID",
    "titleZh": "阿联酋 Emirates ID",
    "category": "immigration",
    "size": "40 x 60 mm",
    "pixels": "472 x 709 px"
  },
  {
    "id": "qatar-residence-permit",
    "country": "Qatar",
    "countryZh": "卡塔尔",
    "title": "Qatar Residence Permit",
    "titleZh": "卡塔尔居留证",
    "category": "immigration",
    "size": "40 x 60 mm",
    "pixels": "472 x 709 px"
  },
  {
    "id": "kuwait-civil-id",
    "country": "Kuwait",
    "countryZh": "科威特",
    "title": "Kuwait Civil ID",
    "titleZh": "科威特 Civil ID",
    "category": "immigration",
    "size": "40 x 60 mm",
    "pixels": "472 x 709 px"
  },
  {
    "id": "oman-residence-card",
    "country": "Oman",
    "countryZh": "阿曼",
    "title": "Oman Residence Card",
    "titleZh": "阿曼居留卡",
    "category": "immigration",
    "size": "40 x 60 mm",
    "pixels": "472 x 709 px"
  },
  {
    "id": "bahrain-cpr",
    "country": "Bahrain",
    "countryZh": "巴林",
    "title": "Bahrain CPR / Residence Permit",
    "titleZh": "巴林 CPR / 居留许可",
    "category": "immigration",
    "size": "40 x 60 mm",
    "pixels": "472 x 709 px"
  },
  {
    "id": "print-us-2x2",
    "country": "Print",
    "countryZh": "打印",
    "title": "2 x 2 in Photo",
    "titleZh": "2 x 2 英寸照片",
    "category": "print",
    "size": "51 x 51 mm",
    "pixels": "600 x 600 px"
  },
  {
    "id": "print-1x1",
    "country": "Print",
    "countryZh": "打印",
    "title": "1 x 1 in Photo",
    "titleZh": "1 x 1 英寸照片",
    "category": "print",
    "size": "25 x 25 mm",
    "pixels": "300 x 300 px"
  },
  {
    "id": "print-35x45",
    "country": "Print",
    "countryZh": "打印",
    "title": "35 x 45 mm Photo",
    "titleZh": "35 x 45 毫米照片",
    "category": "print",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "print-33x48",
    "country": "Print",
    "countryZh": "打印",
    "title": "33 x 48 mm Photo",
    "titleZh": "33 x 48 毫米照片",
    "category": "print",
    "size": "33 x 48 mm",
    "pixels": "390 x 567 px"
  },
  {
    "id": "print-40x50",
    "country": "Print",
    "countryZh": "打印",
    "title": "40 x 50 mm Photo",
    "titleZh": "40 x 50 毫米照片",
    "category": "print",
    "size": "40 x 50 mm",
    "pixels": "472 x 591 px"
  },
  {
    "id": "print-50x70",
    "country": "Print",
    "countryZh": "打印",
    "title": "50 x 70 mm Photo",
    "titleZh": "50 x 70 毫米照片",
    "category": "print",
    "size": "50 x 70 mm",
    "pixels": "600 x 840 px"
  },
  {
    "id": "print-square-digital",
    "country": "Print",
    "countryZh": "打印",
    "title": "Square Digital Upload",
    "titleZh": "正方形电子上传",
    "category": "print",
    "size": "51 x 51 mm",
    "pixels": "600 x 600 px"
  },
  {
    "id": "print-linkedin-headshot",
    "country": "Print",
    "countryZh": "打印",
    "title": "Clean Profile Headshot",
    "titleZh": "清爽头像照",
    "category": "print",
    "size": "51 x 51 mm",
    "pixels": "1200 x 1200 px"
  },
  {
    "id": "eu-passport",
    "country": "European Union",
    "countryZh": "欧盟",
    "title": "European Union Passport",
    "titleZh": "欧盟护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "germany-passport",
    "country": "Germany",
    "countryZh": "德国",
    "title": "Germany Passport",
    "titleZh": "德国护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "france-passport",
    "country": "France",
    "countryZh": "法国",
    "title": "France Passport",
    "titleZh": "法国护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "italy-passport",
    "country": "Italy",
    "countryZh": "意大利",
    "title": "Italy Passport",
    "titleZh": "意大利护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "spain-passport",
    "country": "Spain",
    "countryZh": "西班牙",
    "title": "Spain Passport",
    "titleZh": "西班牙护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "netherlands-passport",
    "country": "Netherlands",
    "countryZh": "荷兰",
    "title": "Netherlands Passport",
    "titleZh": "荷兰护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "ireland-passport",
    "country": "Ireland",
    "countryZh": "爱尔兰",
    "title": "Ireland Passport",
    "titleZh": "爱尔兰护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "switzerland-passport",
    "country": "Switzerland",
    "countryZh": "瑞士",
    "title": "Switzerland Passport",
    "titleZh": "瑞士护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "sweden-passport",
    "country": "Sweden",
    "countryZh": "瑞典",
    "title": "Sweden Passport",
    "titleZh": "瑞典护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "norway-passport",
    "country": "Norway",
    "countryZh": "挪威",
    "title": "Norway Passport",
    "titleZh": "挪威护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "denmark-passport",
    "country": "Denmark",
    "countryZh": "丹麦",
    "title": "Denmark Passport",
    "titleZh": "丹麦护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "finland-passport",
    "country": "Finland",
    "countryZh": "芬兰",
    "title": "Finland Passport",
    "titleZh": "芬兰护照",
    "category": "passport",
    "size": "36 x 47 mm",
    "pixels": "425 x 555 px"
  },
  {
    "id": "austria-passport",
    "country": "Austria",
    "countryZh": "奥地利",
    "title": "Austria Passport",
    "titleZh": "奥地利护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "belgium-passport",
    "country": "Belgium",
    "countryZh": "比利时",
    "title": "Belgium Passport",
    "titleZh": "比利时护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "portugal-passport",
    "country": "Portugal",
    "countryZh": "葡萄牙",
    "title": "Portugal Passport",
    "titleZh": "葡萄牙护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "poland-passport",
    "country": "Poland",
    "countryZh": "波兰",
    "title": "Poland Passport",
    "titleZh": "波兰护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "czech-passport",
    "country": "Czech Republic",
    "countryZh": "捷克",
    "title": "Czech Republic Passport",
    "titleZh": "捷克护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "greece-passport",
    "country": "Greece",
    "countryZh": "希腊",
    "title": "Greece Passport",
    "titleZh": "希腊护照",
    "category": "passport",
    "size": "40 x 60 mm",
    "pixels": "472 x 709 px"
  },
  {
    "id": "turkey-passport",
    "country": "Turkey",
    "countryZh": "土耳其",
    "title": "Turkey Passport",
    "titleZh": "土耳其护照",
    "category": "passport",
    "size": "50 x 60 mm",
    "pixels": "590 x 709 px"
  },
  {
    "id": "russia-passport",
    "country": "Russia",
    "countryZh": "俄罗斯",
    "title": "Russia Passport",
    "titleZh": "俄罗斯护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "ukraine-passport",
    "country": "Ukraine",
    "countryZh": "乌克兰",
    "title": "Ukraine Passport",
    "titleZh": "乌克兰护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "romania-passport",
    "country": "Romania",
    "countryZh": "罗马尼亚",
    "title": "Romania Passport",
    "titleZh": "罗马尼亚护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "hungary-passport",
    "country": "Hungary",
    "countryZh": "匈牙利",
    "title": "Hungary Passport",
    "titleZh": "匈牙利护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "iceland-passport",
    "country": "Iceland",
    "countryZh": "冰岛",
    "title": "Iceland Passport",
    "titleZh": "冰岛护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "croatia-passport",
    "country": "Croatia",
    "countryZh": "克罗地亚",
    "title": "Croatia Passport",
    "titleZh": "克罗地亚护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "slovenia-passport",
    "country": "Slovenia",
    "countryZh": "斯洛文尼亚",
    "title": "Slovenia Passport",
    "titleZh": "斯洛文尼亚护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "slovakia-passport",
    "country": "Slovakia",
    "countryZh": "斯洛伐克",
    "title": "Slovakia Passport",
    "titleZh": "斯洛伐克护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "estonia-passport",
    "country": "Estonia",
    "countryZh": "爱沙尼亚",
    "title": "Estonia Passport",
    "titleZh": "爱沙尼亚护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "latvia-passport",
    "country": "Latvia",
    "countryZh": "拉脱维亚",
    "title": "Latvia Passport",
    "titleZh": "拉脱维亚护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "lithuania-passport",
    "country": "Lithuania",
    "countryZh": "立陶宛",
    "title": "Lithuania Passport",
    "titleZh": "立陶宛护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "bulgaria-passport",
    "country": "Bulgaria",
    "countryZh": "保加利亚",
    "title": "Bulgaria Passport",
    "titleZh": "保加利亚护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "mexico-passport",
    "country": "Mexico",
    "countryZh": "墨西哥",
    "title": "Mexico Passport",
    "titleZh": "墨西哥护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "brazil-passport",
    "country": "Brazil",
    "countryZh": "巴西",
    "title": "Brazil Passport",
    "titleZh": "巴西护照",
    "category": "passport",
    "size": "50 x 70 mm",
    "pixels": "591 x 827 px"
  },
  {
    "id": "argentina-passport",
    "country": "Argentina",
    "countryZh": "阿根廷",
    "title": "Argentina Passport",
    "titleZh": "阿根廷护照",
    "category": "passport",
    "size": "40 x 40 mm",
    "pixels": "472 x 472 px"
  },
  {
    "id": "chile-passport",
    "country": "Chile",
    "countryZh": "智利",
    "title": "Chile Passport",
    "titleZh": "智利护照",
    "category": "passport",
    "size": "45 x 45 mm",
    "pixels": "531 x 531 px"
  },
  {
    "id": "colombia-passport",
    "country": "Colombia",
    "countryZh": "哥伦比亚",
    "title": "Colombia Passport",
    "titleZh": "哥伦比亚护照",
    "category": "passport",
    "size": "40 x 50 mm",
    "pixels": "472 x 591 px"
  },
  {
    "id": "peru-passport",
    "country": "Peru",
    "countryZh": "秘鲁",
    "title": "Peru Passport",
    "titleZh": "秘鲁护照",
    "category": "passport",
    "size": "35 x 43 mm",
    "pixels": "413 x 508 px"
  },
  {
    "id": "japan-passport",
    "country": "Japan",
    "countryZh": "日本",
    "title": "Japan Passport",
    "titleZh": "日本护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "south-korea-passport",
    "country": "South Korea",
    "countryZh": "韩国",
    "title": "South Korea Passport",
    "titleZh": "韩国护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "singapore-passport",
    "country": "Singapore",
    "countryZh": "新加坡",
    "title": "Singapore Passport",
    "titleZh": "新加坡护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "malaysia-passport",
    "country": "Malaysia",
    "countryZh": "马来西亚",
    "title": "Malaysia Passport",
    "titleZh": "马来西亚护照",
    "category": "passport",
    "size": "35 x 50 mm",
    "pixels": "413 x 591 px"
  },
  {
    "id": "thailand-passport",
    "country": "Thailand",
    "countryZh": "泰国",
    "title": "Thailand Passport",
    "titleZh": "泰国护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "vietnam-passport",
    "country": "Vietnam",
    "countryZh": "越南",
    "title": "Vietnam Passport",
    "titleZh": "越南护照",
    "category": "passport",
    "size": "40 x 60 mm",
    "pixels": "472 x 709 px"
  },
  {
    "id": "indonesia-passport",
    "country": "Indonesia",
    "countryZh": "印度尼西亚",
    "title": "Indonesia Passport",
    "titleZh": "印度尼西亚护照",
    "category": "passport",
    "size": "40 x 60 mm",
    "pixels": "472 x 709 px"
  },
  {
    "id": "philippines-passport",
    "country": "Philippines",
    "countryZh": "菲律宾",
    "title": "Philippines Passport",
    "titleZh": "菲律宾护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "taiwan-passport",
    "country": "Taiwan",
    "countryZh": "中国台湾",
    "title": "Taiwan Passport",
    "titleZh": "中国台湾护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "hong-kong-passport",
    "country": "Hong Kong",
    "countryZh": "中国香港",
    "title": "Hong Kong Passport",
    "titleZh": "中国香港护照",
    "category": "passport",
    "size": "40 x 50 mm",
    "pixels": "472 x 591 px"
  },
  {
    "id": "uae-passport",
    "country": "United Arab Emirates",
    "countryZh": "阿联酋",
    "title": "United Arab Emirates Passport",
    "titleZh": "阿联酋护照",
    "category": "passport",
    "size": "40 x 60 mm",
    "pixels": "472 x 709 px"
  },
  {
    "id": "saudi-passport",
    "country": "Saudi Arabia",
    "countryZh": "沙特阿拉伯",
    "title": "Saudi Arabia Passport",
    "titleZh": "沙特阿拉伯护照",
    "category": "passport",
    "size": "40 x 60 mm",
    "pixels": "472 x 709 px"
  },
  {
    "id": "qatar-passport",
    "country": "Qatar",
    "countryZh": "卡塔尔",
    "title": "Qatar Passport",
    "titleZh": "卡塔尔护照",
    "category": "passport",
    "size": "40 x 60 mm",
    "pixels": "472 x 709 px"
  },
  {
    "id": "kuwait-passport",
    "country": "Kuwait",
    "countryZh": "科威特",
    "title": "Kuwait Passport",
    "titleZh": "科威特护照",
    "category": "passport",
    "size": "40 x 60 mm",
    "pixels": "472 x 709 px"
  },
  {
    "id": "oman-passport",
    "country": "Oman",
    "countryZh": "阿曼",
    "title": "Oman Passport",
    "titleZh": "阿曼护照",
    "category": "passport",
    "size": "40 x 60 mm",
    "pixels": "472 x 709 px"
  },
  {
    "id": "bahrain-passport",
    "country": "Bahrain",
    "countryZh": "巴林",
    "title": "Bahrain Passport",
    "titleZh": "巴林护照",
    "category": "passport",
    "size": "40 x 60 mm",
    "pixels": "472 x 709 px"
  },
  {
    "id": "israel-passport",
    "country": "Israel",
    "countryZh": "以色列",
    "title": "Israel Passport",
    "titleZh": "以色列护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "south-africa-passport",
    "country": "South Africa",
    "countryZh": "南非",
    "title": "South Africa Passport",
    "titleZh": "南非护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "new-zealand-passport",
    "country": "New Zealand",
    "countryZh": "新西兰",
    "title": "New Zealand Passport",
    "titleZh": "新西兰护照",
    "category": "passport",
    "size": "35 x 45 mm",
    "pixels": "420 x 540 px"
  },
  {
    "id": "uk-visa",
    "country": "United Kingdom",
    "countryZh": "英国",
    "title": "United Kingdom Visa",
    "titleZh": "英国签证",
    "category": "visa",
    "size": "35 x 45 mm",
    "pixels": "600 x 750 px"
  },
  {
    "id": "canada-visa",
    "country": "Canada",
    "countryZh": "加拿大",
    "title": "Canada Visa",
    "titleZh": "加拿大签证",
    "category": "visa",
    "size": "35 x 45 mm",
    "pixels": "420 x 540 px"
  },
  {
    "id": "australia-visa",
    "country": "Australia",
    "countryZh": "澳大利亚",
    "title": "Australia Visa",
    "titleZh": "澳大利亚签证",
    "category": "visa",
    "size": "35 x 45 mm",
    "pixels": "420 x 540 px"
  },
  {
    "id": "new-zealand-visa",
    "country": "New Zealand",
    "countryZh": "新西兰",
    "title": "New Zealand Visa",
    "titleZh": "新西兰签证",
    "category": "visa",
    "size": "35 x 45 mm",
    "pixels": "420 x 540 px"
  },
  {
    "id": "japan-visa",
    "country": "Japan",
    "countryZh": "日本",
    "title": "Japan Visa",
    "titleZh": "日本签证",
    "category": "visa",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "south-korea-visa",
    "country": "South Korea",
    "countryZh": "韩国",
    "title": "South Korea Visa",
    "titleZh": "韩国签证",
    "category": "visa",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "singapore-visa",
    "country": "Singapore",
    "countryZh": "新加坡",
    "title": "Singapore Visa",
    "titleZh": "新加坡签证",
    "category": "visa",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "malaysia-visa",
    "country": "Malaysia",
    "countryZh": "马来西亚",
    "title": "Malaysia Visa",
    "titleZh": "马来西亚签证",
    "category": "visa",
    "size": "35 x 50 mm",
    "pixels": "413 x 591 px"
  },
  {
    "id": "thailand-visa",
    "country": "Thailand",
    "countryZh": "泰国",
    "title": "Thailand Visa",
    "titleZh": "泰国签证",
    "category": "visa",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "vietnam-visa",
    "country": "Vietnam",
    "countryZh": "越南",
    "title": "Vietnam Visa",
    "titleZh": "越南签证",
    "category": "visa",
    "size": "40 x 60 mm",
    "pixels": "472 x 709 px"
  },
  {
    "id": "indonesia-visa",
    "country": "Indonesia",
    "countryZh": "印度尼西亚",
    "title": "Indonesia Visa",
    "titleZh": "印度尼西亚签证",
    "category": "visa",
    "size": "40 x 60 mm",
    "pixels": "472 x 709 px"
  },
  {
    "id": "philippines-visa",
    "country": "Philippines",
    "countryZh": "菲律宾",
    "title": "Philippines Visa",
    "titleZh": "菲律宾签证",
    "category": "visa",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "taiwan-visa",
    "country": "Taiwan",
    "countryZh": "中国台湾",
    "title": "Taiwan Visa",
    "titleZh": "中国台湾签证",
    "category": "visa",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "hong-kong-visa",
    "country": "Hong Kong",
    "countryZh": "中国香港",
    "title": "Hong Kong Visa",
    "titleZh": "中国香港签证",
    "category": "visa",
    "size": "40 x 50 mm",
    "pixels": "472 x 591 px"
  },
  {
    "id": "turkey-visa",
    "country": "Turkey",
    "countryZh": "土耳其",
    "title": "Turkey Visa",
    "titleZh": "土耳其签证",
    "category": "visa",
    "size": "50 x 60 mm",
    "pixels": "590 x 709 px"
  },
  {
    "id": "uae-visa",
    "country": "United Arab Emirates",
    "countryZh": "阿联酋",
    "title": "United Arab Emirates Visa",
    "titleZh": "阿联酋签证",
    "category": "visa",
    "size": "40 x 60 mm",
    "pixels": "472 x 709 px"
  },
  {
    "id": "saudi-visa",
    "country": "Saudi Arabia",
    "countryZh": "沙特阿拉伯",
    "title": "Saudi Arabia Visa",
    "titleZh": "沙特阿拉伯签证",
    "category": "visa",
    "size": "40 x 60 mm",
    "pixels": "472 x 709 px"
  },
  {
    "id": "qatar-visa",
    "country": "Qatar",
    "countryZh": "卡塔尔",
    "title": "Qatar Visa",
    "titleZh": "卡塔尔签证",
    "category": "visa",
    "size": "40 x 60 mm",
    "pixels": "472 x 709 px"
  },
  {
    "id": "kuwait-visa",
    "country": "Kuwait",
    "countryZh": "科威特",
    "title": "Kuwait Visa",
    "titleZh": "科威特签证",
    "category": "visa",
    "size": "40 x 60 mm",
    "pixels": "472 x 709 px"
  },
  {
    "id": "oman-visa",
    "country": "Oman",
    "countryZh": "阿曼",
    "title": "Oman Visa",
    "titleZh": "阿曼签证",
    "category": "visa",
    "size": "40 x 60 mm",
    "pixels": "472 x 709 px"
  },
  {
    "id": "bahrain-visa",
    "country": "Bahrain",
    "countryZh": "巴林",
    "title": "Bahrain Visa",
    "titleZh": "巴林签证",
    "category": "visa",
    "size": "40 x 60 mm",
    "pixels": "472 x 709 px"
  },
  {
    "id": "brazil-visa",
    "country": "Brazil",
    "countryZh": "巴西",
    "title": "Brazil Visa",
    "titleZh": "巴西签证",
    "category": "visa",
    "size": "50 x 70 mm",
    "pixels": "591 x 827 px"
  },
  {
    "id": "mexico-visa",
    "country": "Mexico",
    "countryZh": "墨西哥",
    "title": "Mexico Visa",
    "titleZh": "墨西哥签证",
    "category": "visa",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "russia-visa",
    "country": "Russia",
    "countryZh": "俄罗斯",
    "title": "Russia Visa",
    "titleZh": "俄罗斯签证",
    "category": "visa",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "france-visa",
    "country": "France",
    "countryZh": "法国",
    "title": "France Visa",
    "titleZh": "法国签证",
    "category": "visa",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "germany-visa",
    "country": "Germany",
    "countryZh": "德国",
    "title": "Germany Visa",
    "titleZh": "德国签证",
    "category": "visa",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "italy-visa",
    "country": "Italy",
    "countryZh": "意大利",
    "title": "Italy Visa",
    "titleZh": "意大利签证",
    "category": "visa",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  },
  {
    "id": "spain-visa",
    "country": "Spain",
    "countryZh": "西班牙",
    "title": "Spain Visa",
    "titleZh": "西班牙签证",
    "category": "visa",
    "size": "35 x 45 mm",
    "pixels": "413 x 531 px"
  }
] satisfies AppPhotoSpec[];
