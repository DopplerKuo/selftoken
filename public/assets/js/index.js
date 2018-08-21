var selftoken = new Vue({
  el: '#vue-app',
  data: {
    lang: '',
    mobileMenu: false,
    navLinkAboutUs: '',
    navLinkWhitePaper: '',
    navLinkRoadMap: '',
    navLinkTeamMembers: '',
    navLinkMedia: '',
    navLinkContact: '',
    sec1Title: '',
    sec2Title1: '',
    sec2Dsc1: '',
    sec2Title2: '',
    sec2Dsc2: '',
    sec2Title3: '',
    sec2Dsc3: '',
    sec2Title4: '',
    sec2Dsc4: '',
    sec2Title5: '',
    sec2Dsc5: '',
    sec2Title6: '',
    sec3Label: '',
    sec4p1: '',
    sec4p2: '',
    sec4p3: '',
    sec4p4: '',
    sec4p5: '',
    sec4p6: '',
    sec4p7: '',
    sec4p8: '',
    sec4p9: '',

    sec5intro1: '',
    sec5name1: '',
    sec5title1: '',

    sec5intro2: '',
    sec5name2: '',
    sec5title2: '',

    sec5intro3: '',
    sec5name3: '',
    sec5title3: '',

    sec5intro4: '',
    sec5name4: '',
    sec5title4: '',

    sec5intro5: '',
    sec5name5: '',
    sec5title5: '',

    sec5intro6: '',
    sec5name6: '',
    sec5title6: '',

    sec5intro7: '',
    sec5name7: '',
    sec5title7: '',

    sec5intro8: '',
    sec5name8: '',
    sec5title8: '',

    sec5intro9: '',
    sec5name9: '',
    sec5title9: '',

    sec5intro10: '',
    sec5name10: '',
    sec5title10: '',

    sec5intro11: '',
    sec5name11: '',
    sec5title11: '',

    sec5intro12: '',
    sec5name12: '',
    sec5title12: '',

    sec5intro13: '',
    sec5name13: '',
    sec5title13: '',

    sec5intro14: '',
    sec5name14: '',
    sec5title14: '',

    sec5intro15: '',
    sec5name15: '',
    sec5title15: '',

    sec5intro16: '',
    sec5name16: '',
    sec5title16: '',

    sec5intro17: '',
    sec5name17: '',
    sec5title17: '',

    emailAlert: ''
  },

  computed: {
    pointsHeader1: function() {
      var width = $('header .content').width();
      var height = $('header').height();
      var string = `${width / 4},0 0,${width / 4} ${width / 4},${width / 2}`;
      return string;
    }
  },

  watch: {
    lang: function(val) {
      if (val === 'tc') {
        this.navLinkAboutUs = '關於我們';
        this.navLinkWhitePaper = '技術白皮書';
        this.navLinkRoadMap = '計畫發展';
        this.navLinkTeamMembers = '團隊成員';
        this.navLinkMedia = '媒體報導';
        this.navLinkContact = '聯絡我們';
        this.sec1Title = '鏈接虛擬與現實的<br>沉浸式娛樂';
        this.sec2Title1 = '什麼是 SELF';
        this.sec2Dsc1 =
          '透過以太坊智能合約所創建的代幣，同時也是開啟「沉浸式娛樂」體驗的關鍵鑰匙，將在電影《聖人大盜》與現實世界同步發行，邀請群眾跟我們共同創造一個打破現實、虛擬疆界的新世界。';
        this.sec2Title2 = '全球第一部華語區塊鏈電影《聖人大盜》';
        this.sec2Dsc2 =
          '由香港知名電影人曾志偉、《我的少女時代》總監製葉如芬共同監製，同時也是曾志偉睽違多年再次主演之台灣電影，而導演將由 SELFPICK PRODUCTION、SELF TOKEN 之創辦人 / 導演 徐嘉凱擔任，攜手打造出一個貼近世代潮流的全新華語商戰電影，開啟後《無間道》時代的全新鬥智類型片。';
        this.sec2Title3 = '全方位的娛樂生態系統';
        this.sec2Dsc3 =
          '除了將支持 100 SELF  = 1 張台灣、香港可流通之電影票外，我們將以食、衣、住、行、育、樂六大面向簽訂知名的合作品牌，並設立由 SELFPICK、SELF TOKEN 所共同控股之沉浸式娛樂場域，預計將在2020年拓展經營五間不同性質之場域，包含但並不限於酒吧、咖啡廳、共同工作空間、民宿、複合性商場。';
        this.sec2Title4 = '全透明的獎勵機制';
        this.sec2Dsc4 =
          '透過團隊中的芝加哥大學經濟學博士林仲生所建立之區塊鏈經濟模型，我們將可以公平、透明的讓系統中所有的參與者成為受益者，並依據參與者每一次推動電影票房、直營店營收、生態系成長的行為，進行積分累積獲得實質獎勵，而首次的獎勵來源將是電影《聖人大盜》 100% 的台灣票房淨利。';
        this.sec2Title5 = '全球流通的應用代幣';
        this.sec2Dsc5 =
          '除了作為生態系統中的應用代幣，並可到台、港之影城、合作娛樂場域進行消費外，我們也將跟交易所進行合作，成為可在全球流通、自由交易的代幣。同時隨著電影、生態系的成長，預計在2021年時，我們也將擴展支持到全球影城的消費支付，並建立起全球各地預計十家以上的沉浸式娛樂空間以及百家以上的合作夥伴。';
        this.sec2Title6 =
          '讓人人都可以是電影娛樂生態中<br>推廣者、支持者、觀眾、受益者，<br>創造一個共好的娛樂生態系。';
        this.sec3Label = '輸入您的郵件地址：';
        this.sec4p1 =
          '母公司 SELFPICK PRODUCTION 完成 Pre A 輪一千五百萬元增資，並推出沉浸式娛樂計畫，正式啟動區塊鏈電影、白皮書開發計畫。';
        this.sec4p2 =
          '整合各界資源推動《聖人大盜》電影劇本、企劃以及技術白皮書、團隊組建。';
        this.sec4p3 =
          '與橫跨電影圈、金融圈、鏈圈之夥伴組成聯合創始團隊，共同出資一千兩百萬元新台幣，登記設立區塊鏈項目之執行公司 SELF TOKEN，並與合作交易所簽訂合作備忘錄。';
        this.sec4p4 =
          '電影製作基金「聖人大盜電影有限合夥」進行登記（詳細製作規格、金額將在八月記者會公布），同時間啟動 SELF TOKEN 正式商轉，並招聘內部工程、營運人員進行技術研發。';
        this.sec4p5 =
          '簽訂將在電影中曝光並實際支援 SELF 進行消費的台灣、國際知名餐飲集團、娛樂應用合作方，並同步進行技術研發。';
        this.sec4p6 =
          '電影《聖人大盜》前導影片拍攝，並同時進行非公開之私募，限定必須通過 KYC 或是邀請制度參與。';
        this.sec4p7 =
          '8/22 將於舉辦記者會，正式對外公布沉浸式娛樂計畫。';
        this.sec4p8 = '電影聖人大盜進入 60 天拍攝期、SELF 進入商轉前技術開發。';
        this.sec4p9 =
          '電影正式預告上線、SELF 上線合作交易所。後續進程請詳參白皮書。';

        this.sec5intro1 =
          '1991 年生，2014 年創立 SELFPICK PRODUCTION、2017 年創立 SELF BAR，擔任 Mr.Bartender、我們是歐爸、私室等知名網劇導演，在網路上創造了千萬點擊，並成功帶領 SELFPICK PRODUCTION 榮獲 2017 年行銷傳播貢獻獎年度傑出行銷創意團隊、2017 年金炬獎年度傑出十大潛力經理人。';
        this.sec5name1 = '徐嘉凱';
        this.sec5title1 = 'SELF 創始人 ＆ 電影《聖人大盜》導演';

        this.sec5intro2 =
          '1981年生，國立臺灣大學資訊工程學博士，日本慶応大學博士後研究員，美國奇點大學首位臺灣學員，創辦多家公司曾獲紅點設計獎與 HTC 投資。現任教於北科大互動設計系，亦為奇點大學台灣大使，替多家跨國公司及政府單位如經濟部、北市府，COBINHOOD, Ubitus Inc., Blueprint Japan 等跨國企業提供區塊鏈智能合約開發之研究協助。';
        this.sec5name2 = '葛如鈞';
        this.sec5title2 = 'SELF 共同發起人＆區塊鏈技術顧問';

        this.sec5intro3 =
          '為美國永恆生技（Cold Genesys Inc.）執行長，為全美最年輕的生技公司負責人，擁有掌管十億台幣資本額，募資超過兩千五百萬美元的實力！關心同時為資深虛擬貨幣投資人，並創辦以投資區塊鏈為重點之一的恆心資本（Perseverance Capital Management LLC) 。 精準的眼光與豐沛的人脈資源，未來必定能協助SELF TOKEN往國際市場推進，達成整合綜效。';
        this.sec5name3 = '關心';
        this.sec5title3 = 'SELF 聯合創始人＆風險管理委員';

        this.sec5intro4 =
          '兩岸三地的著名製片人，也是電影製作公司影市堂的負責人，製作、出品知名華語電影九降風、殺手歐陽盆栽、變身、看不見的台灣等優秀作品，更獲得了台灣、香港金馬獎的多項肯定，未來將透過 SELF TOKEN 讓影視圈與區塊鏈科技更緊密結合，並共創出更多優秀的電影、網路影視內容。';
        this.sec5name4 = '曾國駿';
        this.sec5title4 = 'SELF 聯合創始人＆風險管理委員';

        this.sec5intro5 =
          '曾任資策會產推處副處長、經濟部中小企業執行國家級對接歐美加速器的計畫主持人，曾協助全球第五大特效公司 - Rhythm & Hues (李安導演 Life of Pi 後製特效 ）在台募資含國發基金等投資 2100 萬美金，未來將協助 SELF TOKEN 在技術發展上有更穩固的基礎，並協同整合兩岸、國際資源，逐步落實各項應用。';
        this.sec5name5 = '洪雯娟';
        this.sec5title5 = 'SELF 聯合創始人＆風險管理委員';

        this.sec5intro6 =
          '曾任澳商紅點行銷之行銷總監，協助 VISA 和中信金、日盛金推動異業結盟合作以及紅利點數回饋機制，現為大硯建築品牌行銷暨客戶關係總監、新竹縣不動產開發公會副理事長，創辦第一屆住宅博覽會，創造超過兩億新台幣的現場交易量，未來將協助 SELF TOKEN 落實與在地商家連接、拓展 SELF PAY 的多樣化娛樂餐飲商機，並建造完整的品牌形象。';
        this.sec5name6 = '林帝沅';
        this.sec5title6 = 'SELF 聯合創始人＆風險管理委員';

        this.sec5intro7 =
          '資深的企業財務顧問、天使投資人，曾協助四家公司在台灣主板上市、渣打銀行董事總經理以及匯豐環球投資銀行大中華區董事總經理進行相關投資工作，同時也是資深虛擬貨幣投資人，將協助 SELF TOKEN 在未來營運上取得更多不同的幣圈內外互利合作的機會以及架構完整金融交易生態圈。';
        this.sec5name7 = '邱瑞文';
        this.sec5title7 = 'SELF 聯合創始人＆風險管理委員';

        this.sec5intro8 =
          '前 Google 軟體工程師，哈工大畢業，2015年微軟編程之美競賽總冠軍，包括星雲鏈、BlockCity Hackthon 等競賽獲獎，傳奇智能合約工程師，製作並協助發行2018年中國第一款區塊鏈遊戲「以太萌王」、「以太水滸」、「冥幣」等七款智能合約遊戲，曾創下 24小時全球交易量 Top#3，兩週總流水 780ETH 的記錄。協助 SELF CHAIN 進行智能合約的研發、測試與佈建。';
        this.sec5name8 = '唐飛虎';
        this.sec5title8 = 'SELF 智能合約開發團隊總監';

        this.sec5intro9 =
          '芝加哥大學經濟學博士，現任美國 Clemson University 經濟學助理教授，専精於網路經濟學，數位經濟學。Tom 的研究包含共享經濟，電商評分系統，遊戲產業，工程招標及誘因合約設計。於上海、香港及美國等地主講有關計量經濟學及機器學習的講座及課程。協助 SELF Token 進行經濟學模型模擬與計算。';
        this.sec5name9 = '林仲生';
        this.sec5title9 = 'SELF 首席經濟學家';

        this.sec5intro10 =
          '台大電機系畢業，目前是台大電信所碩士生。曾在 HTC、聯發科、Ubitus等公司工作實習。擁有多年智能合約開發經驗與網頁前端開發經驗。將協助 SELF CHAIN 進行智能合約研發、測試與佈建，亦著重智能合約與 SELF PAY 前後端的整合，未來亦將協助探索 SELF Dapps 架構設計與實作研發。';
        this.sec5name10 = '吳冠融';
        this.sec5title10 = 'SELF DApp 專案經理';

        this.sec5intro11 =
          '香港知名演員、電視節目主持和電影製作人。近年多為電視節目主持，偶為電影導演，他同時亦投資、策劃及參與電影製作。現代表香港演藝人協會任香港電影金像獎董事局副主席。曾榮獲 第11屆香港金像獎《雙城故事》榮獲最佳男主角、第36屆香港金像獎《一念無明》榮獲最佳男配角、第53屆金馬獎《愈快樂愈墮落》榮獲最佳男配角。';
        this.sec5name11 = '曾志偉';
        this.sec5title11 = 'SELF 原創電影《聖人大盜》監製';

        this.sec5intro12 =
          '台灣資深電影人，深耕電影逾二十載,合作對象皆為 享譽中外、作品題材各異的優秀導演。擅長電影資源整合、預算掌控與製作，具豐富的國際合作經驗。現擔任華文創總監制。曾獲得第 50 屆金馬獎年度台灣傑出電影工作者，並擔任第 35 屆香港金像獎提名最佳兩岸華語電影《我的少女時代》總監制以及第 53 屆金馬獎 8 項提名、第 36 屆香港金像獎最佳兩岸華語電影《一路順風》監制。';
        this.sec5name12 = '葉如芬';
        this.sec5title12 = 'SELF 原創電影《聖人大盜》監製';

        this.sec5intro13 =
          '渺小（歌手：田馥甄）、寂寞寂寞就好（歌手：田馥甄）、意外（歌手：薛之謙）、曾經是少年（歌手：SHE）等華語暢銷歌曲、電影原創主題曲作曲，曾獲得金曲獎、上海音樂風雲榜年度十大金曲等殊榮，現任 SELFPICK PRODUCTION 音樂總監、華研音樂專屬詞曲音樂作者。';
        this.sec5name13 = '楊子樸';
        this.sec5title13 = 'SELF 原創電影《聖人大盜》音樂總監';

        this.sec5intro14 =
          '畢業於南加州大學大眾傳播系，曾有在美國生物科技產業招募人才與社群行銷經驗，同時在恆心資本 (Perseverance Capital Management LLC) 協助投資管理 。近期回台也在虛擬貨幣產業公司擔任主導招募與翻譯，協助行銷團隊對國外用戶進行推廣教育。未來將協助與代表 Self Token 對外進行區塊鏈教育和對英語系國家進行IEO計畫的公關宣傳。';
        this.sec5name14 = '許家瑄';
        this.sec5title14 = 'SELF 公關經理';

        this.sec5intro15 =
          '從事平面設計工作近十年，擅長平面、網站版面、包裝、與美術設計。多項音樂展演、影視海報設計經驗，包含奧地利插畫家 Lisbeth Zwerger 來台巡迴展出海報與周邊商品之專案設計，東發生技水果啤酒系列包裝設計等。現為 SELFPICK PRODUCTION 藝術統籌，執行美術場景設計、周邊商品開發製作與企業 CIS 設計。';
        this.sec5name15 = '何姿瑩';
        this.sec5title15 = 'SELF 藝術總監';

        this.sec5intro16 =
          '香港科技大學一級榮譽畢業，現任圖靈鍊科技公司創始人與執行長，兼任紐約 Blackbird.AI 區塊鏈科技總監。是歷史首位港科大題名至矽谷的實習生，負責Google Glass醫療科技，隔年於 J.P. Morgan 研發NLP核心。曾獲香港 Microsoft Imagine Cup 亞軍及AI Cup季軍，Uber 電梯演講冠軍，韓國 UpTown 商務程競亞軍，法國 Atos IT 挑戰賽世界二十強與德國 CryBlock 論壇 Best Paper 等國內外數十獎項。將協助 SELF Dapp 進行技術開發以及建置，並結合其公司團隊成員一同完成 SELF Dapp 之 原型。';
        this.sec5name16 = '胡耀傑';
        this.sec5title16 = 'SELF DApp 合作開發者＆區塊鏈技術顧問';

        this.sec5intro17 =
          '現任微軟 Microsoft 亞太區人工智能研究員，橫跨香港、印度、廣州及深圳，於香港科技大學就學中，並擔任圖靈鍊科技公司區塊鏈總監。曾於香港 Digitas 開發數項知名ICO項目，2018年榮獲德國慕尼黑CryBlock論壇最佳論文，其著作 ERC860 將受邀於國際期刊 CPE 刊出。曾在加拿大 ETHWaterloo 盛會作為香港區塊鏈代表，同時也於知名寫作平台 Medium 撰寫加密貨幣與 Ethereum 專欄，獲選為 Top Writer。將協助 SELF Dapp 進行技術開發以及建置。';
        this.sec5name17 = '李婷婷';
        this.sec5title17 = 'SELF DApp 合作開發者＆區塊鏈技術顧問';
        this.emailAlert = '已收到您的電子郵件，我們將盡快回覆您。';
      } else if (val === 'en') {
        this.navLinkAboutUs = 'About us';
        this.navLinkWhitePaper = 'White Paper';
        this.navLinkRoadMap = 'Roadmap';
        this.navLinkTeamMembers = 'Team Members';
        this.navLinkMedia = 'Media';
        this.navLinkContact = 'Contact';
        this.sec1Title =
          'An immersive entertainment ecosystem<br>connecting virtuality and reality';
        this.sec2Title1 = 'WHAT IS SELF';
        this.sec2Dsc1 =
          'SELF is a unique digital asset that allows users to support movie productions and reap rewards from box office revenues. Our goal is to spearhead the movement of a decentralized autonomous ecosystem starting in the movie industry.';
        this.sec2Title2 = 'Immersive';
        this.sec2Dsc2 =
          'From visiting the actual location of a scene in the film <i class="movie-name">The Last Thieves</i> (2019) to supporting its making through SELF PAY, we are creating an immersive entertainment universe using smart contracts and blockchain technology.';
        this.sec2Title3 = 'All Inclusive';
        this.sec2Dsc3 =
          'SELF bridges consumers to service providers of all fields of entertainment through one form of payment.';
        this.sec2Title4 = 'Transparent';
        this.sec2Dsc4 =
          'With SELF, Box office revenue is converted to cryptocurrency and distributed back to users based on accumulated points. With blockchain technology, all information will be accessible to the public - building a relationship of trust.';
        this.sec2Title5 = 'Global';
        this.sec2Dsc5 =
          'By collaborating with global exchanges, SELF can be used freely across borders.';
        this.sec2Title6 =
          'Our mission is to foster an entertainment ecosystem, making it a transparent business where everyone can advocate, support, and benefit from direct involvement.';
        this.sec3Label = 'selftoken@example.com';
        this.sec4p1 =
          'Parent company SELFPICK PRODUCTION completes pre A round fundraising 15M NTD, and SELF TOKEN white paper plan.';
        this.sec4p2 =
          'Compile resources to finish <i class="movie-name">The Last Thieves</i> script. Complete business plan and model for SELF CHAIN and hire on additional team members.';
        this.sec4p3 =
          'SELF TOKEN is found with partners across the film, financial, and blockchain industries to jointly invest $12 million NTD and sign memorandum of cooperation with exchange.';
        this.sec4p4 =
          'Register film production fund “Self Alienation Co., Ltd.” (detailed production specifications and amount will be announced in the August press conference) and recruit internal staff to carry out technical development, marketing research, and public relation matters.';
        this.sec4p5 =
          'Sign with world-renowned restaurant chains, entertainment businesses to support SELF as a form of payment in Taiwan and begin research and development.';
        this.sec4p6 =
          'Begin pre-production for <i class="movie-name">The Last Thieves</i> and start private sale, limited to those having passed KYC.';
        this.sec4p7 =
          'Hold press conference on 8/22, publicly announce the immersive entertainment plan.';
        this.sec4p8 =
          'Begin 60 days of <i class="movie-name">The Last Thieves</i> production and SELF enters pre-commercial tech development.';
        this.sec4p9 =
          'Teaser for <i class="movie-name">The Last Thieves</i> is released online and SELF is listed on exchange.';
        this.sec5intro1 =
          'Jack founded SELFPICK PRODUCTION in 2014 and SELF BAR in 2017. In addition to being an entrepreneur, he is also the director of well-known web-series Mr Bartender (2015-present), OBA (2016), and The Bar (2017-present). With over 10 million views on YouTube, Jack was named Top 10 Potential Manager at the 2017 Jubilee Awards, and SELFPICK PRODUCTION was named Outstanding Marketing Team at the 2017 Agency of the Year Awards.';
        this.sec5name1 = 'Jack';
        this.sec5title1 = 'Founder & Director';

        this.sec5intro2 =
          'Born in 1981, JC received his PhD in Computer Science at National Taipei University and completed his postdoctoral research at Keio University. JC is the first Taiwanese student to attend Singularity University, has helped multiple companies win Red Dot Design Awards, and has invested in HTC. Currently, he is a professor of Interactive Design at Taipei Tech, an ambassador at Singularity University, a consultant on VR/AR for the Ministry of Economic Affairs, and a smart contract advisor for multiple blockchain companies such as Cobinhood, Ubitus Inc., and Blueprint Japan.';
        this.sec5name2 = 'JC';
        this.sec5title2 = 'Co Founder & Risk Blockchain Consultant';

        this.sec5intro3 =
          'Arthur is the CEO of Cold Genesys Inc., the youngest biotech company in the United States with over $1 billion in capital and raised more than $25 million. Arthur is also a veteran cryptocurrency investor, having founded Perseverance Capital Management LLC, which focuses on blockchain investments. With a precise vision and abundant network resources, he will help SELF TOKEN advance to the international market and achieve complete integration.';
        this.sec5name3 = 'Arthur';
        this.sec5title3 = 'Co Founder & Risk Advisor';

        this.sec5intro4 =
          'Gary, a distinguished producer based in Hong Kong, China, and Taiwan, is the director of film production company Film Mall, and is best known for producing Winds of September (2008), The Killer Who Never Kills (2011), Machi Action (2013), and A Journey with Invisible Friends (2018). Having won several accolades from Golden Horse Awards, Gary will help SELFPICK create media content, and help integrate the entertainment industry with blockchain technology.';
        this.sec5name4 = 'Gary';
        this.sec5title4 = 'Co Founder & Risk Advisor';

        this.sec5intro5 =
          'Cherry is the former Deputy Director of the Institute for Information Industry (Product Promotion Division) and Executive Director of Ministry of Economics Affairs (Small and Medium Enterprise Administration). In the past, Cherry has worked with Rhythm & Hues, the fifth-largest special effects company in the world. Cherry will assist SELF TOKEN in establishing a foundation for technology development and coordinate the integration of cross-strait and international resources.';
        this.sec5name5 = 'Cherry';
        this.sec5title5 = 'Co Founder & Risk Advisor';

        this.sec5intro6 =
          'Jackson is the Director of Marketing and Customer Relations of Stonehenge Construction as well as the Deputy Director of Real Estate Development Association of Hsinchu County. In the past, Jackson served as the Marketing Director of REDdot Marketing, and assisted VISA, CTBC, and Jihsun Holdings in cross-industry cooperation and reward management. Jackson will help SELF TOKEN establish relationships with local businesses.';
        this.sec5name6 = 'Jackson';
        this.sec5title6 = 'Co Founder & Risk Advisor';

        this.sec5intro7 =
          'Allen is a senior corporate financial advisor and an angel investor. In the past, Allen has helped four companies become listed on the Taipei Exchange Market. Currently, he is the Managing Director of both Standard Charter Bank and HSBC Global Investment for Greater China; where he also works as a Senior Cryptocurrency Investor. Allen will help SELF TOKEN seek opportunities within and outside the cryptocurrency domain, and construct a stable financial trading ecosystem.';
        this.sec5name7 = 'Allen';
        this.sec5title7 = 'Co Founder & Risk Advisor';

        this.sec5intro8 =
          'Feihu is a former Google software engineer and a respected smart contract developer, having graduated from Harbin Institute of Technology, won first place in the 2015 Beauty of Programming, the Nebulas, and the BlockCity Hackathon. Feihu utilized smart contract to produce China’s first set of blockchain games such as Cyptomoe and Cyptohero. These games have remained Top 3 in trading volume in its first 24 hours, and have mined a record of 780ETH in two weeks. Feihu will assist SELF Chain in developing, testing, and deploying new technology using smart contract.';
        this.sec5name8 = 'Feihu';
        this.sec5title8 = 'Lead Smart Contract Developer';

        this.sec5intro9 =
          'Tom holds a Ph.D in Economics from the University of Chicago and is currently an assistant professor of economics at Clemson University. Tom’s research specializes in sharing economy, e-commerce scoring system, gaming industry, project bidding, and incentive contract. Tom’s primary role at SELF TOKEN is the development and calculation of economic models.';
        this.sec5name9 = 'Tom';
        this.sec5title9 = 'Chief Economist';

        this.sec5intro10 =
          'Roger graduated with a degree in Electrical Engineering from National Taiwan University (NTU) and is currently studying Telecommunications as a graduate student at NTU. Roger has worked in multiple telecommunications companies such as HTC, MediaTek, BoniQ, and is experienced with smart contract development and web design. Roger will assist SELF Chain in developing smart contracts and its integration with our SELF Dapp framework and SELF PAY system.';
        this.sec5name10 = 'Roger Wu';
        this.sec5title10 = 'Self Dapp Project Manager';

        this.sec5intro11 =
          'Eric is a renowned Cantonese actor, TV show personality, and filmmaker who also invests and participates in film production. Eric has won Best Actor at the 11th Hong Kong Film Awards for his role in Alan & Eric: Between Hello and Goodbye (1991), as well as Best Supporting Actor at the 36th and 53rd Golden Horse Awards for his roles in Mad World (2016) and Hold You Tight (1998). Currently, Eric is the Vice Chairman of the Hong Kong Film Awards.';
        this.sec5name11 = 'Eric';
        this.sec5title11 =
          '<i class="movie-name">The Last Thieves</i> Executive Producer';

        this.sec5intro12 =
          'Yeh is a veteran producer with more than 20 years of experience and collaboration with directors in Taiwan and abroad. Yeh specializes in film resource integration, budget control, production, and has extensive experience in international cooperation. Yeh’s film Our Times (2015) won the 50th Golden Horse Awards for Outstanding Filmmaking and the 35th Hong Kong Film Awards for Best Film from Mainland and Taiwan. Yeh also received 8 nominations at the 53rd Golden Horse Awards, and her film Godspeed (2016) won Best Producer at the 36th Hong Kong Film Awards.';
        this.sec5name12 = 'Yeh';
        this.sec5title12 =
          '<i class="movie-name">The Last Thieves</i> Executive Producer';

        this.sec5intro13 =
          'Venk is an esteemed Golden Melody Award composer best known for writing Tien’s Insignificance (2013), Leave Me Alone (2010), and S.H.E’s Wings of My Words (2015). Venk is currently the Music Director at SELFPICK PRODUCTION and is a songwriter for HIM International Music Inc.';
        this.sec5name13 = 'Venk';
        this.sec5title13 =
          '<i class="movie-name">The Last Thieves</i> Music Producer';

        this.sec5intro14 =
          'Sharon is a graduate from the University of Southern California and specializes in recruitment and social media marketing. In the past she has worked at Perseverance Capital Management LLC and worked as HR Director and translator at a crypto exchange. Currently, Sharon is the PR manager for SELF TOKEN, where she manages domestic and international promotions, publicity, and oversees information regarding blockchain and IEO projects from English-speaking countries.';
        this.sec5name14 = 'Sharon';
        this.sec5title14 = 'PR Manager';

        this.sec5intro15 =
          'Zying is an experienced graphic designer who specializes in graphics for music concerts, films, and posters. In the past, Zying has worked with esteemed Austrian illustrator, Lisbeth Zwerger, and is also known for creating the package design of a popular fruit beer brand. Currently, Zying is the Art Director for SELFPICK PRODUCTION and overseas production design, tie-in merchandising development, and corporate CIS design.';
        this.sec5name15 = 'Zying';
        this.sec5title15 = 'Art Director';

        this.sec5intro16 =
          'Jeff graduated top of his class from the Hong Kong University of Science and Technology (HKUST) and is the founder and CEO of Turing Chain. Jeff is the current adjunct director of Blackbird.AI blockchain technology and the first HKUST student to intern at Silicon Valley where he worked on a medical system for Google Glass. After Jeff’s internship in Silicon Valley, he worked on an NLP Core at J.P. Morgan. Jeff has received countless accolades and won many awards, including: the Uber Elevator Pitch, Best Paper from Germany’s CryBlock Forum, Top 20 in the French Atos IT Challenge, runner-up for the Korean UpTown, as well as runner-up for Hong Kong Microsoft’s Imagine Cup and third place for the AI Cup. Jeff will be assisting with the prototyping and development of SELF Dapp.';
        this.sec5name16 = 'Jeff';
        this.sec5title16 = 'Self Dapp Developer & Blockchain Consultant ';

        this.sec5intro17 =
          'Tina is currently an A.I. researcher at Microsoft Pacific, spanning Hong Kong, India, Guangzhou, and Shenzhen. Tina attended Hong Kong University of Science and Technology, and is now serving as the blockchain director of Turing Chain. Tina has developed numerous ICO projects at Hong Kong’s Digitas and won the 2018 Munich CryBlock Best Paper with a paper on ERC860 - which has been invited for publication on international journal CPE. Tina was the former representative of Hong Kong blockchain at Canada’s ETHWaterloo, and is also a established Top Writer on Medium about cryptocurrency and Ethereum. Tina will be assisting with the development of SELF Dapp.';
        this.sec5name17 = 'Tina';
        this.sec5title17 = 'Self Dapp Developer & Blockchain Consultant';
        this.emailAlert =
          "Thanks for your interest, we've received your request and will get back to you shortly.";
      } else if (val === 'sc') {
        this.navLinkAboutUs = '关于我们';
        this.navLinkWhitePaper = '技术白皮书';
        this.navLinkRoadMap = '计画发展';
        this.navLinkTeamMembers = '团队成员';
        this.navLinkMedia = '媒体报导';
        this.navLinkContact = '联络我们';
        this.sec1Title = '链接虚拟与现实的<br>沉浸式娱乐';
        this.sec2Title1 = '什么是 SELF';
        this.sec2Dsc1 =
          '透过以太坊智能合约所创建的代币，同时也是开启「沉浸式娱乐」体验的关键钥匙，将在电影《圣人大盗》与现实世界同步发行，邀请群众跟我们共同创造一个打破现实、虚拟疆界的新世界。 ';
        this.sec2Title2 = '全球第一部华语区块链电影《圣人大盗》';
        this.sec2Dsc2 =
          '由香港知名电影人曾志伟、《我的少女时代》总监制叶如芬共同监制，同时也是曾志伟睽违多年再次主演之台湾电影，而导演将由SELFPICK PRODUCTION、SELF TOKEN 之创办人/ 导演徐嘉凯担任，携手打造出一个贴近世代潮流的全新华语商战电影，开启后《无间道》时代的全新斗智类型片。 ';
        this.sec2Title3 = '全方位的娱乐生态系统';
        this.sec2Dsc3 =
          '除了将支持100 SELF = 1 张台湾、香港可流通之电影票外，我们将以食、衣、住、行、育、乐六大面向签订知名的合作品牌，并设立由SELFPICK、SELF TOKEN 所共同控股之沉浸式娱乐场域，预计将在2020年拓展经营五间不同性质之场域，包含但并不限于酒吧、咖啡厅、共同工作空间、民宿、复合性商场。 ';
        this.sec2Title4 = '全透明的奖励机制';
        this.sec2Dsc4 =
          '透过团队中的芝加哥大学经济学博士林仲生所建立之区块链经济模型，我们将可以公平、透明的让系统中所有的参与者成为受益者，并依据参与者每一次推动电影票房、直营店营收、生态系成长的行为，进行积分累积获得实质奖励，而首次的奖励来源将是电影《圣人大盗》 100% 的台湾票房净利。 ';
        this.sec2Title5 = '全球流通的应用代币';
        this.sec2Dsc5 =
          '除了作为生态系统中的应用代币，并可到台、港之影城、合作娱乐场域进行消费外，我们也将跟交易所进行合作，成为可在全球流通、自由交易的代币。同时随着电影、生态系的成长，预计在2021年时，我们也将扩展支持到全球影城的消费支付，并建立起全球各地预计十家以上的沉浸式娱乐空间以及百家以上的合作伙伴。 ';
        this.sec2Title6 =
          '让人人都可以是电影娱乐生态中<br>推广者、支持者、观众、受益者，<br>创造一个共好的娱乐生态系。 ';
        this.sec3Label = '输入您的邮件地址：';
        this.sec4p1 =
          '母公司 SELFPICK PRODUCTION 完成 Pre A 轮一千五百万元增资，并推出沉浸式娱乐计画，正式启动区块链电影、白皮书开发计画。 ';
        this.sec4p2 =
          '整合各界资源推动《圣人大盗》电影剧本、企划以及技术白皮书、团队组建。 ';
        this.sec4p3 =
          '与横跨电影圈、金融圈、链圈之伙伴组成联合创始团队，共同出资一千两百万元新台币，登记设立区块链项目之执行公司SELF TOKEN，并与合作交易所签订合作备忘录。 ';
        this.sec4p4 =
          '电影制作基金「圣人大盗电影有限合伙」进行登记（详细制作规格、金额将在八月记者会公布），同时间启动 SELF TOKEN 正式商转，并招聘内部工程、营运人员进行技术研发。 ';
        this.sec4p5 =
          '签订将在电影中曝光并实际支援 SELF 进行消费的台湾、国际知名餐饮集团、娱乐应用合作方，并同步进行技术研发。 ';
        this.sec4p6 =
          '电影《圣人大盗》前导影片拍摄，并同时进行非公开之私募，限定必须通过 KYC 或是邀请制度参与。 ';
        this.sec4p7 =
          '8/22 将于举办记者会，正式对外公布沉浸式娱乐计画。 ';
        this.sec4p8 =
          '电影圣人大盗进入 60 天拍摄期、SELF 进入商转前技术开发。 ';
        this.sec4p9 =
          '电影正式预告上线、SELF 上线合作交易所。后续进程请详参白皮书。 ';

        this.sec5intro1 =
          '1991 年生，2014 年创立SELFPICK PRODUCTION、2017 年创立SELF BAR，担任Mr.Bartender、我们是欧爸、私室等知名网剧导演，在网路上创造了千万点击，并成功带领SELFPICK PRODUCTION 荣获2017年行销传播贡献奖年度杰出行销创意团队、2017 年金炬奖年度杰出十大潜力经理人。 ';
        this.sec5name1 = '徐嘉凯';
        this.sec5title1 = 'SELF 创始人 ＆ 电影《圣人大盗》导演';

        this.sec5intro2 =
          '1981年生，国立台湾大学资讯工程学博士，日本庆応大学博士后研究员，美国奇点大学首位台湾学员，创办多家公司曾获红点设计奖与 HTC 投资。现任教于北科大互动设计系，亦为奇点大学台湾大使，替多家跨国公司及政府单位如经济部、北市府，COBINHOOD, Ubitus Inc., Blueprint Japan 等跨国企业提供区块链智能合约开发之研究协助。 ';
        this.sec5name2 = '葛如钧';
        this.sec5title2 = 'SELF 共同發起人＆区块链技术顾问';

        this.sec5intro3 =
          '为美国永恒生技（Cold Genesys Inc.）执行长，为全美最年轻的生技公司负责人，拥有掌管十亿台币资本额，募资超过两千五百万美元的实力！关心同时为资深虚拟货币投资人，并创办以投资区块链为重点之一的恒心资本（Perseverance Capital Management LLC）。精准的眼光与丰沛的人脉资源，未来必定能协助SELF TOKEN往国际市场推进，达成整合综效。';
        this.sec5name3 = '关心';
        this.sec5title3 = 'SELF 联合创始人＆风险管理委员';

        this.sec5intro4 =
          '两岸三地的著名制片人，也是电影制作公司影市堂的负责人，制作、出品知名华语电影九降风、杀手欧阳盆栽、变身、看不见的台湾等优秀作品，更获得了台湾、香港金马奖的多项肯定，未来将透过SELF TOKEN 让影视圈与区块链科技更紧密结合，并共创出更多优秀的电影、网路影视内容。 ';
        this.sec5name4 = '曾国骏';
        this.sec5title4 = 'SELF 联合创始人＆风险管理委员';

        this.sec5intro5 =
          '曾任资策会产推处副处长、经济部中小企业执行国家级对接欧美加速器的计画主持人，曾协助全球第五大特效公司- Rhythm & Hues (李安导演Life of Pi 后制特效）在台募资含国发基金等投资2100 万美金，未来将协助SELF TOKEN 在技术发展上有更稳固的基础，并协同整合两岸、国际资源，逐步落实各项应用。 ';
        this.sec5name5 = '洪雯娟';
        this.sec5title5 = 'SELF 联合创始人＆风险管理委员';

        this.sec5intro6 =
          '曾任澳商红点行销之行销总监，协助VISA 和中信金、日盛金推动异业结盟合作以及红利点数回馈机制，现为大砚建筑品牌行销暨客户关系总监、新竹县不动产开发公会副理事长，创办第一届住宅博览会，创造超过两亿新台币的现场交易量，未来将协助SELF TOKEN 落实与在地商家连接、拓展SELF PAY 的多样化娱乐餐饮商机，并建造完整的品牌形象。 ';
        this.sec5name6 = '林帝沅';
        this.sec5title6 = 'SELF 联合创始人＆风险管理委员';

        this.sec5intro7 =
          '资深的企业财务顾问、天使投资人，曾协助四家公司在台湾主板上市、渣打银行董事总经理以及汇丰环球投资银行大中华区董事总经理进行相关投资工作，同时也是资深虚拟货币投资人，将协助SELF TOKEN 在未来营运上取得更多不同的币圈内外互利合作的机会以及架构完整金融交易生态圈。 ';
        this.sec5name7 = '邱瑞文';
        this.sec5title7 = 'SELF 联合创始人＆风险管理委员';

        this.sec5intro8 =
          '前Google 软体工程师，哈工大毕业，2015年微软编程之美竞赛总冠军，包括星云链、BlockCity Hackthon 等竞赛获奖，传奇智能合约工程师，制作并协助发行2018年中国第一款区块链游戏「以太萌王」、「以太水浒」、「冥币」等七款智能合约游戏，曾创下24小时全球交易量Top#3，两周总流水780ETH 的记录。协助 SELF CHAIN 进行智能合约的研发、测试与布建。 ';
        this.sec5name8 = '唐飞虎';
        this.sec5title8 = 'SELF 智能合约开发团队总监';

        this.sec5intro9 =
          '芝加哥大学经济学博士，现任美国 Clemson University 经济学助理教授，専精于网路经济学，数位经济学。 Tom 的研究包含共享经济，电商评分系统，游戏产业，工程招标及诱因合约设计。于上海、香港及美国等地主讲有关计量经济学及机器学习的讲座及课程。协助 SELF Token 进行经济学模型模拟与计算。 ';
        this.sec5name9 = '林仲生';
        this.sec5title9 = 'SELF 首席经济学家';

        this.sec5intro10 =
          '台大电机系毕业，目前是台大电信所硕士生。曾在 HTC、联发科、Ubitus等公司工作实习。拥有多年智能合约开发经验与网页前端开发经验。将协助 SELF CHAIN 进行智能合约研发、测试与布建，亦着重智能合约与 SELF PAY 前后端的整合，未来亦将协助探索 SELF Dapps 架构设计与实作研发。 ';
        this.sec5name10 = '吴冠融';
        this.sec5title10 = 'SELF DApp 专案经理';

        this.sec5intro11 =
          '香港知名演员、电视节目主持和电影制作人。近年多为电视节目主持，偶为电影导演，他同时亦投资、策划及参与电影制作。现代表香港演艺人协会任香港电影金像奖董事局副主席。曾荣获第11届香港金像奖《双城故事》荣获最佳男主角、第36届香港金像奖《一念无明》荣获最佳男配角、第53届金马奖《愈快乐愈堕落》荣获最佳男配角。 ';
        this.sec5name11 = '曾志伟';
        this.sec5title11 = 'SELF 原创电影《圣人大盗》监制';

        this.sec5intro12 =
          '台湾资深电影人，深耕电影逾二十载,合作对象皆为 享誉中外、作品题材各异的优秀导演。擅长电影资源整合、预算掌控与制作，具丰富的国际合作经验。现担任华文创总监制。曾获得第50 届金马奖年度台湾杰出电影工作者，并担任第35 届香港金像奖提名最佳两岸华语电影《我的少女时代》总监制以及第53 届金马奖8 项提名、第36 届香港金像奖最佳两岸华语电影《一路顺风》监制。 ';
        this.sec5name12 = '叶如芬';
        this.sec5title12 = 'SELF 原创电影《圣人大盗》监制';

        this.sec5intro13 =
          '渺小（歌手：田馥甄）、寂寞寂寞就好（歌手：田馥甄）、意外（歌手：薛之谦）、曾经是少年（歌手：SHE）等华语畅销歌曲、电影原创主题曲作曲，曾获得金曲奖、上海音乐风云榜年度十大金曲等殊荣，现任SELFPICK PRODUCTION 音乐总监、华研音乐专属词曲音乐作者。 ';
        this.sec5name13 = '杨子朴';
        this.sec5title13 = 'SELF 原创电影《圣人大盗》音乐总监';

        this.sec5intro14 =
          '毕业于南加州大学大众传播系，曾有在美国生物科技产业招募人才与社群行销经验，同时在恒心资本（Perseverance Capital Management LLC) 协助投资管理 。近期回台也在虚拟货币产业公司担任主导招募与翻译，协助行销团队对国外用户进行推广教育。未来将协助与代表 Self Token 对外进行区块链教育和对英语系国家进行IEO计画的公关宣传。 ';
        this.sec5name14 = '许家瑄';
        this.sec5title14 = 'SELF 公关经理';

        this.sec5intro15 =
          '从事平面设计工作近十年，擅长平面、网站版面、包装、与美术设计。多项音乐展演、影视海报设计经验，包含奥地利插画家 Lisbeth Zwerger 来台巡回展出海报与周边商品之专案设计，东发生技水果啤酒系列包装设计等。现为 SELFPICK PRODUCTION 艺术统筹，执行美术场景设计、周边商品开发制作与企业 CIS 设计。 ';
        this.sec5name15 = '何姿莹';
        this.sec5title15 = 'SELF 艺术总监';

        this.sec5intro16 =
          '香港科技大学一级荣誉毕业，现任图灵链科技公司创始人与执行长，兼任纽约 Blackbird.AI 区块链科技总监。是历史首位港科大题名至矽谷的实习生，负责Google Glass医疗科技，隔年于 J.P. Morgan 研发NLP核心。曾获香港 Microsoft Imagine Cup 亚军及AI Cup季军，Uber 电梯演讲冠军，韩国 UpTown 商务程竞亚军，法国 Atos IT 挑战赛世界二十强与德国 CryBlock 论坛 Best Paper 等国内外数十奖项。将协助 SELF Dapp 进行技术开发以及建置，并结合其公司团队成员一同完成 SELF Dapp 之 原型。 ';
        this.sec5name16 = '胡耀杰';
        this.sec5title16 = 'SELF DApp 合作开发者＆区块链技术顾问';

        this.sec5intro17 =
          '现任微软 Microsoft 亚太区人工智能研究员，横跨香港、印度、广州及深圳，于香港科技大学就学中，并担任图灵链科技公司区块链总监。曾于香港 Digitas 开发数项知名ICO项目，2018年荣获德国慕尼黑CryBlock论坛最佳论文，其著作 ERC860 将受邀于国际期刊 CPE 刊出。曾在加拿大 ETHWaterloo 盛会作为香港区块链代表，同时也于知名写作平台 Medium 撰写加密货币与 Ethereum 专栏，获选为 Top Writer。将协助 SELF Dapp 进行技术开发以及建置。 ';
        this.sec5name17 = '李婷婷';
        this.sec5title17 = 'SELF DApp 合作开发者＆区块链技术顾问';

        this.emailAlert = '已收到您的电子邮件，我们将尽快回覆您。 ';
      }
    }
  },

  ready: function() {
    this.lang = 'tc';
    $('.loading').removeClass('loading');
  }
});
