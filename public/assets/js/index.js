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
    sec5title17: ''
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
        this.sec1Title = '鏈接虛擬與現實的<br>沉浸式娛樂代幣';
        this.sec2Title1 = '什麼是 SELF TOKEN';
        this.sec2Dsc1 =
          '透過以太坊智能合約所創建的代幣，同時也是開啟「沉浸式娛樂」體驗的關鍵鑰匙，將在電影《聖人大盜》與現實世界同步發行，邀請群眾跟我們共同創造一個打破現實、虛擬疆界的新世界。';
        this.sec2Title2 = '全球第一部華語區塊鏈電影《聖人大盜》';
        this.sec2Dsc2 =
          '由香港知名電影人曾志偉、《我的少女時代》總監製葉如芬共同監製，同時也是曾志偉睽違多年再次主演之台灣電影，而導演將由 SELFPICK PRODUCTION、SELF TOKEN 之創辦人 / 導演 徐嘉凱擔任，攜手打造出一個貼近世代潮流的全新華語商戰電影，開啟後《無間道》時代的全新鬥智類型片。';
        this.sec2Title3 = '全方位的娛樂生態系統';
        this.sec2Dsc3 =
          '除了將支持 100 SELF TOKEN = 1 張台灣、香港可流通之電影票外，我們將以食、衣、住、行、育、樂六大面向簽訂知名的合作品牌，並設立由 SELFPICK、SELF TOKEN 所共同控股之沉浸式娛樂娛樂場域，預計將在2020年拓展經營五間不同性質之場域，包含但並不限於酒吧、咖啡廳、共同工作空間、民宿、複合性商場。';
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
          '母公司 SELFPICK PRODUCTION 完成 pre A 輪一千五百萬元增資，並推出沉浸式娛樂計畫，啟動區塊鏈電影、SELF TOKEN 白皮書計畫。';
        this.sec4p2 =
          '整合各界資源完成聖人大盜電影劇本、企劃以及 SELF TOKEN 白皮書、團隊組建。';
        this.sec4p3 =
          '私募一千萬元新台幣完成 SELF TOKEN 公司設立，並與合作交易所簽訂合作協議。';
        this.sec4p4 =
          '電影聖人大盜進入正式前製期、正式成立以閉鎖型股份有限公司之形式成立 SELF WORKSHOP，正式運轉 SELF TOKEN 相關事宜。';
        this.sec4p5 =
          '電影聖人大盜進行前導預告拍攝計畫 SELF TOKEN 於線下招開 Pre IEO SALE 階段之說明會。';
        this.sec4p6 = '電影聖人大盜進入前導影片拍攝。SELF TOKEN白皮書釋出。';
        this.sec4p7 = 'SELF TOKEN 籌備進行 IEO';
        this.sec4p8 =
          '電影聖人大盜進入 60 天拍攝期、SELF TOKEN 進入商轉前技術開發。';
        this.sec4p9 = '電影正式預告上線、SELFTOKEN 上線合作交易所。';

        this.sec5intro1 =
          '1991 年生，2014 年創立 SELFPICK PRODUCTION、2017 年創立 SELF BAR，擔任 Mr.BArtender、我們是歐爸、私室等知名網劇導演，在網路上創造了千萬點擊，並成功帶領 SELFPICK PRODUCTION 榮獲 2017 年行銷傳播貢獻獎年度傑出行銷創意團隊、2017 年金炬獎年度傑出十大潛力經理人。';
        this.sec5name1 = '徐嘉凱';
        this.sec5title1 = 'SELF TOKEN 聯合創始人';

        this.sec5intro2 =
          '擁有超過十年的跨國、跨領域創新創業與實戰經驗。為目前國內少數熟赧 VR/AR, AI 以及 Blockchain 等新興科技專家,並協助多家跨國/上市公司科技技術與區塊鏈合約。現任國立台北科技大學設計學院互動設計系專任助理教授，經濟部、台北市政府與 VR/AR 計劃顧問，COBINHOOD, Ubitus Inc., Blueprint Japan 等多家企業區塊鏈深耕推廣。';
        this.sec5name2 = '葛如鈞';
        this.sec5title2 = 'SELF TOKEN 聯合創始人＆區塊鏈技術顧問';

        this.sec5intro3 =
          '為華人著名組織百人會下一代領袖成員，私募基金 Perseverance Capital Management LLC 共同合夥人，也擔任被投公司 Cold Genesys, Inc 執行長，共募資兩千五百萬美金，同時也是資深虛擬貨幣投資人，未來將透過豐沛的人脈資源協助SELF TOKEN往國際的市場推進，達成整合綜效。';
        this.sec5name3 = '關心';
        this.sec5title3 = 'SELF TOKEN 聯合創始人＆風險管理委員';

        this.sec5intro4 =
          '兩岸三地的著名製片人，也是電影製作公司影市堂的負責人，製作、出品知名華語電影九降風、殺手歐陽盆栽、變身、看不見的台灣等優秀作品，更獲得了台灣、香港金馬獎的多項肯定，未來將透過 SELF TOKEN 讓影視圈與區塊鏈科技更緊密結合，並共創出更多優秀的電影、網路影視內容。';
        this.sec5name4 = '曾國駿';
        this.sec5title4 = 'SELF TOKEN 聯合創始人＆風險管理委員';

        this.sec5intro5 =
          '曾任資策會產推處副處長、經濟部中小企業執行國家級對接歐美加速器的計畫主持人，曾協助全球第五大特效公司 - Rhythm & Hues (李安導演 Life of Pi 後製特效 ）在台募資含國發基金等投資 2100 萬美金，未來將協助 SELF TOKEN 在技術發展上有更穩固的基礎，並協同整合兩岸、國際資源，逐步落實各項應用。';
        this.sec5name5 = '洪雯娟';
        this.sec5title5 = 'SELF TOKEN 聯合創始人＆風險管理委員';

        this.sec5intro6 =
          '曾任澳商紅點行銷之行銷總監，協助 VISA 和中信金、日盛金推動異業結盟合作以及紅利點數回饋機制，現為大硯建築品牌行銷暨客戶關係總監、新竹縣不動產開發公會副理事長，創辦第一屆住宅博覽會，創造超過兩億新台幣的現場交易量，未來將協助 SELF TOKEN 落實與在地商家連接、拓展 SELF PAY 的多樣化娛樂餐飲商機，並建造完整的品牌形象。';
        this.sec5name6 = '林帝沅';
        this.sec5title6 = 'SELF TOKEN 聯合創始人＆風險管理委員';

        this.sec5intro7 =
          '資深的企業財務顧問、天使投資人，曾協助四家公司在台灣主板上市、渣打銀行董事總經理以及匯豐環球投資銀行大中華區董事總經理進行相關投資工作，同時也是資深虛擬貨幣投資人，將協助 SELF TOKEN 在未來營運上取得更多不同的幣圈內外互利合作的機會以及架構完整金融交易生態圈。';
        this.sec5name7 = '邱瑞文';
        this.sec5title7 = 'SELF TOKEN 聯合創始人＆風險管理委員';

        this.sec5intro8 =
          '前 Google 軟體工程師，智能合約工程師，製作並協助發行 2018 年中國第一款區塊鏈遊戲「以太萌王」、「以太水滸」、「冥幣」等七款智能合約遊戲，曾創下 24 小時全球交易量 Top3，兩週總流水 780ETH 的記錄。協助 SELF Token 進行智能合約的研發、測試與佈建。';
        this.sec5name8 = 'FEIHU';
        this.sec5title8 = 'SELF TOKEN 智能合約開發團隊總監';

        this.sec5intro9 =
          '芝加哥大學經濟學博士，現任美國 Clemson University 經濟學助理教授，専精於網路經濟學，數位經濟學。Tom 的研究包含共享經濟，電商評分系統，遊戲產業，工程招標及誘因合約設計。於上海、香港及美國等地主講有關計量經濟學及機器學習的講座及課程。協助 SELF Token 進行經濟學模型模擬與計算。';
        this.sec5name9 = '林仲生';
        this.sec5title9 = 'SELF TOKEN 首席經濟學家';

        this.sec5intro10 =
          '台大電機系畢業，目前是台大電信所碩士生。曾在 HTC、聯發科、幫你優等公司實習。擁有一年以上的智能合約開發經驗與兩年以上的網頁前端開發經驗。將協助 SELF TOKEN 進行智能合約的研發、測試與佈建，以及智能合約與 SELF PAY 前後端的整合。';
        this.sec5name10 = '吳冠融';
        this.sec5title10 = 'SELF TOKEN 專案經理';

        this.sec5intro11 =
          '香港知名演員、電視節目主持和電影製作人。近年多為電視節目主持，偶為電影導演，他同時亦投資、策劃及參與電影製作。現代表香港演藝人協會任香港電影金像獎董事局副主席。曾榮獲 第11屆香港金像獎《雙城故事》榮獲最佳男主角、第36屆香港金像獎《一念無明》榮獲最佳男配角、第53屆金馬獎《愈快樂愈墮落》榮獲最佳男配角。';
        this.sec5name11 = '曾志偉';
        this.sec5title11 = 'SELF TOKEN 原創電影聖人大盜監製';

        this.sec5intro12 =
          '台灣資深電影人，深耕電影逾二十載,合作對象皆為 享譽中外、作品題材各異的優秀導演。擅長電影資源整合、預算掌控與製作，具豐富的國際合作經驗。現擔任華文創總監制。曾獲得第 50 屆金馬獎年度台灣傑出電影工作者，並擔任第 35 屆香港金像獎提名最佳兩岸華語電影《我的少女時代》總監制以及第 53 屆金馬獎 8 項提名、第 36 屆香港金像獎最佳兩岸華語電影《一路順風》監制。';
        this.sec5name12 = '葉如芬';
        this.sec5title12 = 'SELF TOKEN 原創電影聖人大盜監製';

        this.sec5intro13 =
          '渺小（歌手：田馥甄）、寂寞寂寞就好（歌手：田馥甄）、意外（歌手：薛之謙）、曾經是少年（歌手：SHE）等華語暢銷歌曲、電影原創主題曲作曲，曾獲得金曲獎、上海音樂風雲榜年度十大金曲等殊榮，現任 SELFPICK PRODUCTION 音樂總監、華研音樂專屬詞曲音樂作者。';
        this.sec5name13 = '楊子樸';
        this.sec5title13 = 'SELF TOKEN 原創電影聖人大盜音樂總監';

        this.sec5intro14 =
          '畢業於南加州大學大眾傳播系，曾有在美國生物科技產業招募人才與社群行銷經驗，同時在 KB Capital Management 協助投資管理 。近期回台也在虛擬貨幣產業公司擔任主導招募與翻譯，協助行銷團隊對國外用戶進行推廣教育。未來將協助與代表 Self Token 對外進行區塊鏈教育和對英語系國家進行IEO計畫的公關宣傳。';
        this.sec5name14 = '許家瑄';
        this.sec5title14 = 'SELF TOKEN 公關經理';

        this.sec5intro15 =
          '從事平面設計工作近十年，擅長平面、網站版面、包裝、與美術設計。多項音樂展演、影視海報設計經驗，包含奧地利插畫家 Lisbeth Zwerger 來台巡迴展出海報與周邊商品之專案設計，東發生技水果啤酒系列包裝設計等。現為 SELFPICK PRODUCTION 藝術統籌，執行美術場景設計、周邊商品開發製作與企業 CIS 設計。';
        this.sec5name15 = '何姿瑩';
        this.sec5title15 = 'SELF TOKEN 藝術總監';

        this.sec5intro16 =
          '來自香港的區塊鏈開發者，曾於南韓，香港，台灣等地演講研究發展，並在 2018 年 6 月剛於德國慕尼黑發表最新的 ERC860 論文，同時為香港科技大學開發第一條以校園為基準的資源共享區塊鏈。目前任職紐約 Coining.ai 的區塊鏈技術總監，曾赴矽谷研發 Google Glass 醫療系統與香港首個 J.P.Morgan 自動化對話機器人。';
        this.sec5name16 = 'Jeff';
        this.sec5title16 = 'SELF TOKEN 智能合約開發技術顧問';

        this.sec5intro17 =
          '同樣來自香港的區塊鏈開發者，於南韓，香港，台灣等地演講研究發展，並同 JEFF 於 2018 年 6 月剛於德國慕尼黑發表最新的 ERC860 論文，同時為香港科技大學開發第一條以校園為基準的資源共享區塊鏈。於2018年暑假在微軟香港的人工智能開發團隊實習，並在 Medium 上發表以太坊系列教學，吸引 1400 多人追蹤。';
        this.sec5name17 = 'Tina';
        this.sec5title17 = 'SELF TOKEN 智能合約開發技術顧問';
      } else if (val === 'en') {
        this.navLinkAboutUs = 'About us';
        this.navLinkWhitePaper = 'White Paper';
        this.navLinkRoadMap = 'Roadmap';
        this.navLinkTeamMembers = 'Team Members';
        this.navLinkMedia = 'Media';
        this.navLinkContact = 'Contact';
        this.sec1Title =
          'An immersive entertainment token<br>connecting virtuality and reality ';
        this.sec2Title1 = 'WHAT IS SELF TOKEN';
        this.sec2Dsc1 =
          'SELF TOKEN is a unique digital token that allows users to support movie productions and reap rewards from box office revenues. Our goal is to spearhead the movement of a decentralized autonomous ecosystem starting in the movie industry.';
        this.sec2Title2 = 'Immersive';
        this.sec2Dsc2 =
          'From visiting the actual location of a scene in the film Self Alienation (2019) to supporting its making through SELF PAY, we are creating an immersive entertainment universe using smart contracts and blockchain technology.';
        this.sec2Title3 = 'All Inclusive';
        this.sec2Dsc3 =
          'SELF TOKEN bridges consumers to service providers of all fields of entertainment through one form of payment.';
        this.sec2Title4 = 'Transparent';
        this.sec2Dsc4 =
          'At SELF TOKEN, box office revenue is converted to cryptocurrency and distributed back to users based on accumulated points. With blockchain technology, all information will be accessible to the public - building a relationship of trust.';
        this.sec2Title5 = 'Global';
        this.sec2Dsc5 =
          'By collaborating with global exchanges, SELF TOKEN is a digital currency that can be used freely across borders.';
        this.sec2Title6 =
          'Our mission is to foster an entertainment ecosystem, making it a transparent business where everyone can advocate, support, and benefit from direct involvement.';
        this.sec3Label = 'selftoken@example.com';
        this.sec4p1 =
          'Parent company SELFPICK PRODUCTION completes pre A round fundraising 15M NTD, and SELF TOKEN white paper plan.';
        this.sec4p2 =
          'Compile resources to finish Self Alienation script. Complete business plan and model for SELF TOKEN.';
        this.sec4p3 =
          'SELF TOKEN completes private round of 10M NTD and signs partnertship agreement with partner Exchange';
        this.sec4p4 =
          'Self Alienation enters pre production, SELF WORKSHOP establishes it’s official entity.';
        this.sec4p5 =
          'SELFPICK PRODUCTION films teaser for Self Alienation (2019). SELF TOKEN begins off line pre IEO sale.';
        this.sec4p6 =
          'Post production editing for Self Alienation teaser. SELF TOKEN starts whitelisting and preparation for IEO';
        this.sec4p7 =
          'Self Alienation teaser release. SELF TOKEN official IEO.';
        this.sec4p8 =
          'Self Alienation in filming. SELF TOKEN enters it’s technical development.';
        this.sec4p9 =
          'Self Alienation trailor release. SELF TOKEN listed on partner exchange.';
        this.sec5intro1 =
          'Jack founded SELFPICK PRODUCTION in 2014 and SELF BAR in 2017. In addition to being an entrepreneur, he is also the director of well-known web-series Mr Bartender (2015-present), OBA (2016), and The Bar (2017-present). With over 10 million views on YouTube, Jack was named Top 10 Potential Manager at the 2017 Jubilee Awards, and SELFPICK PRODUCTION was named Outstanding Marketing Team at the 2017 Agency of the Year Awards.';
        this.sec5name1 = 'Jack';
        this.sec5title1 = 'Self token Founder';

        this.sec5intro2 =
          'JC is an assistant professor at National Taipei University of Technology’s Department of Interactive Design, a consultant on VR/AR for the Ministry of Economic Affairs, and an ambassador for multiple blockchain companies such as Cobinhood, Ubitus Inc., and Blueprint Japan. With more than 10 years of experience in transnational and cross-disciplinary innovation and entrepreneurship, JC is one of the leading experts in China on emerging technology such as VR/AR, AI, and blockchain.';
        this.sec5name2 = 'JC';
        this.sec5title2 = 'Co Founder & Risk Blockchain Consultant';

        this.sec5intro3 =
          'Arthur is a partner at private equity firm Perseverance Capital Management LLC and the CEO of Cold Genesys, Inc - where he raised over $25 million. As a senior cryptocurrency investor with extensive knowledge and network, Arthur will assist SELF TOKEN in entering the global market.';
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
          'Feihu is a former Google software engineer, and a respected smart contract developer. Feihu utilized smart contract to produce China’s first set of blockchain games such as Cyptomoe, Cyptohero, and 冥幣. These games have remained Top 3 in trading volume in its first 24 hours, and have mined a record of 780ETH in two weeks. Feihu will assist SELF TOKEN in developing, testing, and deploying new technology using smart contract.';
        this.sec5name8 = 'Feihu';
        this.sec5title8 = 'Lead Smart Contract Developer';

        this.sec5intro9 =
          'Tom holds a Ph.D in Economics from the University of Chicago and is currently an assistant professor of economics at Clemson University. Tom’s research specializes in sharing economy, e-commerce scoring system, gaming industry, project bidding, and incentive contract. Tom’s primary role at SELF TOKEN is the development and calculation of economic models.';
        this.sec5name9 = 'Tom';
        this.sec5title9 = 'Self token Chief Economist';

        this.sec5intro10 =
          'Roger graduated with a degree in Electrical Engineering from National Taiwan University (NTU) and is currently studying Telecommunications as a graduate student at NTU. Roger has worked in multiple telecommunications companies such as HTC, MediaTek, BoniQ, and is experienced with smart contract development and web design. Roger will assist SELF TOKEN in developing smart contracts and its integration with SELF PAY.';
        this.sec5name10 = 'Roger Wu';
        this.sec5title10 = 'Project Manager';

        this.sec5intro11 =
          'Eric is a renowned Cantonese actor, TV show personality, and filmmaker who also invests and participates in film production. Eric has won Best Actor at the 11th Hong Kong Film Awards for his role in Alan & Eric: Between Hello and Goodbye (1991), as well as Best Supporting Actor at the 36th and 53rd Golden Horse Awards for his roles in Mad World (2016)  and Hold You Tight (1998). Currently, Eric is the Vice Chairman of the Hong Kong Film Awards.';
        this.sec5name11 = 'Eric';
        this.sec5title11 = 'Self Alienation Executive Producer';

        this.sec5intro12 =
          'Yeh is a veteran producer with more than 20 years of experience and collaboration with directors in Taiwan and abroad. Yeh specializes in film resource integration, budget control, production, and has extensive experience in international cooperation. Yeh’s film Our Times (2015) won the 50th Golden Horse Awards for Outstanding Filmmaking and the 35th Hong Kong Film Awards for Best Film from Mainland and Taiwan. Yeh also received 8 nominations at the 53rd Golden Horse Awards, and her film Godspeed (2016) won Best Producer at the 36th Hong Kong Film Awards.';
        this.sec5name12 = 'Yeh';
        this.sec5title12 = 'Self Alienation Executive Producer';

        this.sec5intro13 =
          'Venk is an esteemed Golden Melody Award composer best known for writing Tien’s Insignificance (2013), Leave Me Alone (2010), and S.H.E’s Wings of My Words (2015). Vank is currently the Music Director at SELFPICK PRODUCTION and is a songwriter for HIM International Music Inc.';
        this.sec5name13 = 'Venk';
        this.sec5title13 = 'Self Alienation Music Producer';

        this.sec5intro14 =
          'Sharon is a graduate from the University of Southern California and specializes in recruitment and social media marketing. In the past she has worked at KB Capital Management and worked as HR Director and translator at a crypto exchange. Currently, Sharon is the PR manager for SELF TOKEN, where she manages domestic and international promotions, publicity, and oversees information regarding blockchain and IEO projects from English-speaking countries.';
        this.sec5name14 = 'Sharon';
        this.sec5title14 = 'PR manager';

        this.sec5intro15 =
          'Zying is an experienced graphic designer who specializes in graphics for music concerts, films, and posters. In the past, Zying has worked with esteemed Austrian illustrator, Lisbeth Zwerger, and is also known for creating the package design of a popular fruit beer brand. Currently, Zying is the Art Director for SELFPICK PRODUCTION and overseas production design, tie-in merchandising development, and corporate CIS design.';
        this.sec5name15 = 'Zying';
        this.sec5title15 = 'Art Director';

        this.sec5intro16 =
          'Jeff is a blockchain developer from Hong Kong with experience in the research and development of blockchain in South Korea, Hong Kong, and Taiwan. Jeff published the latest ERC 860 paper in June 2018 in Munich, Germany, and also published an article on a campus-based resource sharing blockchain at Hong Kong University of Science and Technology. Jeff is currently the blockchain technology director of Coining.ia and is at Silicon Valley to develop a medical system for Google Glass as well as an automated dialogue robot at J.P. Morgan in Hong Kong.';
        this.sec5name16 = 'Jeff';
        this.sec5title16 = 'Smart Contract Developer';

        this.sec5intro17 =
          'Tina is a blockchain developer from Hong Kong that works closely with Jeff. Tina has experience in the development in blockchain in South East Asia and co-published the ERC 860 paper in June with Jeff as well as the article regarding a campus-sourced sharing blockchain at Hong Kong University of Science and Technology. Currently, Tina is an intern in Microsoft’s artificial intelligence development team and has a following of more than 1,400 on Medium where she has a series of articles teaching Ethereum.';
        this.sec5name17 = 'Tina';
        this.sec5title17 = 'Smart Contract Developer';
      } else if (val === 'sc') {
        this.navLinkAboutUs = '關於我們';
        this.navLinkWhitePaper = '技術白皮書';
        this.navLinkRoadMap = '計畫發展';
        this.navLinkTeamMembers = '團隊成員';
        this.navLinkMedia = '媒體報導';
        this.navLinkContact = '聯絡我們';
        this.sec1Title = '鏈接虛擬與現實的<br>沉浸式娛樂代幣';
        this.sec2Title1 = '什麼是 SELF TOKEN';
        this.sec2Dsc1 =
          '未來看電影時我們將不再使用電影票，而是獨一無二的電影代幣，一個可以讓人人成為電影的支持者、推廣者、獲益者並入場觀影的電影區塊鏈加密代幣，而SELF TOKEN 將會是這個自生態代幣的領航者。 ';
        this.sec2Title2 = '全新的區塊鏈電影觀影體驗';
        this.sec2Dsc2 =
          '我們將透過以太坊智能合約技術，創造全新的電影區塊鏈加密代幣，打造對大眾更友善、高互動性的生態系統，並將以香港知名電影人曾志偉、億萬監製葉如芬共同監製、SELFPICK 製作之區塊鏈商戰電影「聖人大盜」，作為首次應用。 ';
        this.sec2Title3 = '全方位的娛樂支付';
        this.sec2Dsc3 =
          '我們將以食、衣、住、行、育、樂六大面向簽訂合作品牌，支持娛樂上的多元支付，並設立直營之多元娛樂場域（如SELF BAR、SELF CAFE、電影場景轉營運之共創空間SELF SPACE 等）。 ';
        this.sec2Title4 = '全透明的影視生態系獎勵';
        this.sec2Dsc4 =
          '我們將把電影的票房、直營店之營收以及其他相關之營銷盈餘轉成Ether或是其他數位加密貨幣，作為獎勵予以所有支持、使用SELF TOKEN 消費的使用者，而首次的獎勵將會由電影聖人大盜之100% 票房營收作爲基礎。 ';
        this.sec2Title5 = '全球流通的應用代幣';
        this.sec2Dsc5 =
          '除了作爲應用代幣之外，我們將跟交易所進行合作，成為可在全球流通、自由交易的 SELF 幣。 ';
        this.sec2Title6 =
          '讓人人都可以是電影娛樂生態中推廣者、支持者、觀眾、受益者，<br>創造一個共好的娛樂生態系。 ';
        this.sec3Label = '輸入您的郵件地址：';
        this.sec4p1 =
          '母公司 SELFPICK PRODUCTION 完成 pre A 輪一千五百萬元增資，並推出沉浸式娛樂計畫，啟動區塊鏈電影、SELF TOKEN 白皮書計畫。';
        this.sec4p2 =
          '整合各界資源完成聖人大盜電影劇本、企劃以及 SELF TOKEN 白皮書、團隊組建。';
        this.sec4p3 =
          '私募一千萬元新台幣完成 SELF TOKEN 公司設立，並與合作交易所簽訂合作協議。';
        this.sec4p4 =
          '電影聖人大盜進入正式前製期、正式成立以閉鎖型股份有限公司之形式成立 SELF WORKSHOP，正式運轉 SELF TOKEN 相關事宜。';
        this.sec4p5 =
          '電影聖人大盜進行前導預告拍攝計畫 SELF TOKEN 於線下招開 Pre IEO SALE 階段之說明會。';
        this.sec4p6 = '電影聖人大盜進入前導影片拍攝。SELF TOKEN白皮書釋出。';
        this.sec4p7 = 'SELF TOKEN 籌備進行 IEO';
        this.sec4p8 =
          '電影聖人大盜進入 60 天拍攝期、SELF TOKEN 進入商轉前技術開發。';
        this.sec4p9 = '電影正式預告上線、SELFTOKEN 上線合作交易所。';

        this.sec5intro1 =
          '1991 年生，2014 年創立SELFPICK PRODUCTION、2017 年創立SELF BAR，擔任Mr.BArtender、我們是歐爸、私室等知名網劇導演，在網路上創造了千萬點擊，並成功帶領SELFPICK PRODUCTION 榮獲2017 年行銷傳播貢獻獎年度傑出行銷創意團隊、2017 年金炬獎年度傑出十大潛力經理人。';
        this.sec5name1 = '徐嘉凱';
        this.sec5title1 = 'SELF TOKEN 聯合創始人';

        this.sec5intro2 =
          '擁有超過十年的跨國、跨領域創新創業與實戰經驗。為目前國內少數熟赧VR/AR, AI 以及Blockchain 等新興科技專家,並協助多家跨國/上市公司科技技術與區塊鏈合約。現任國立台北科技大學設計學院互動設計系專任助理教授，經濟部、台北市政府與VR/AR 計劃顧問，COBINHOOD, Ubitus Inc., Blueprint Japan 等多家企業區塊鏈深耕推廣。';
        this.sec5name2 = '葛如鈞';
        this.sec5title2 = 'SELF TOKEN 聯合創始人＆區塊鏈技術顧問';

        this.sec5intro3 =
          '為華人著名組織百人會下一代領袖成員，私募基金Perseverance Capital Management LLC 共同合夥人，也擔任被投公司Cold Genesys, Inc 執行長，共募資兩千五百萬美金，同時也是資深虛擬貨幣投資人，未來將透過豐沛的人脈資源協助SELF TOKEN往國際的市場推進，達成整合綜效。';
        this.sec5name3 = '關心';
        this.sec5title3 = 'SELF TOKEN 聯合創始人＆風險管理委員';

        this.sec5intro4 =
          '兩岸三地的著名製片人，也是電影製作公司影市堂的負責人，製作、出品知名華語電影九降風、殺手歐陽盆栽、變身、看不見的台灣等優秀作品，更獲得了台灣、香港金馬獎的多項肯定，未來將透過SELF TOKEN 讓影視圈與區塊鏈科技更緊密結合，並共創出更多優秀的電影、網路影視內容。';
        this.sec5name4 = '曾國駿';
        this.sec5title4 = 'SELF TOKEN 聯合創始人＆風險管理委員';

        this.sec5intro5 =
          '曾任资策会产推处副处长、经济部中小企业执行国家级对接欧美加速器的计画主持人，曾协助全球第五大特效公司- Rhythm & Hues (李安导演Life of Pi 后制特效）在台募资含国发基金等投资2100 万美金，未来将协助SELF TOKEN 在技术发展上有更稳固的基础，并协同整合两岸、国际资源，逐步落实各项应用。';
        this.sec5name5 = '洪雯娟';
        this.sec5title5 = 'SELF TOKEN 联合创始人＆风险管理委员';

        this.sec5intro6 =
          '曾任澳商红点行销之行销总监，协助VISA 和中信金、日盛金推动异业结盟合作以及红利点数回馈机制，现为大砚建筑品牌行销暨客户关系总监、新竹县不动产开发公会副理事长，创办第一届住宅博览会，创造超过两亿新台币的现场交易量，未来将协助SELF TOKEN 落实与在地商家连接、拓展SELF PAY 的多样化娱乐餐饮商机，并建造完整的品牌形象。';
        this.sec5name6 = '林帝沅';
        this.sec5title6 = 'SELF TOKEN 联合创始人＆风险管理委员';

        this.sec5intro7 =
          '资深的企业财务顾问、天使投资人，曾协助四家公司在台湾主板上市、渣打银行董事总经理以及汇丰环球投资银行大中华区董事总经理进行相关投资工作，同时也是资深虚拟货币投资人，将协助SELF TOKEN 在未来营运上取得更多不同的币圈内外互利合作的机会以及架构完整金融交易生态圈。';
        this.sec5name7 = '邱瑞文';
        this.sec5title7 = 'SELF TOKEN 联合创始人＆风险管理委员';

        this.sec5intro8 =
          '前Google 软体工程师，智能合约工程师，制作并协助发行2018 年中国第一款区块链游戏「以太萌王」、「以太水浒」、「冥币」等七款智能合约游戏，曾创下24 小时全球交易量Top3，两周总流水780ETH 的记录。协助 SELF Token 进行智能合约的研发、测试与布建。 ';
        this.sec5name8 = 'FEIHU';
        this.sec5title8 = 'SELF TOKEN 智能合约开发团队总监';

        this.sec5intro9 =
          '芝加哥大学经济学博士，现任美国Clemson University 经济学助理教授，専精于网路经济学，数位经济学。Tom 的研究包含共享经济，电商评分系统，游戏产业，工程招标及诱因合约设计。于上海、香港及美国等地主讲有关计量经济学及机器学习的讲座及课程。协助SELF Token 进行经济学模型模拟与计算。';
        this.sec5name9 = '林仲生';
        this.sec5title9 = 'SELF TOKEN 首席经济学家';

        this.sec5intro10 =
          '台大电机系毕业，目前是台大电信所硕士生。曾在HTC、联发科、帮你优等公司实习。拥有一年以上的智能合约开发经验与两年以上的网页前端开发经验。将协助SELF TOKEN 进行智能合约的研发、测试与布建，以及智能合约与SELF PAY 前后端的整合。';
        this.sec5name10 = '吴冠融';
        this.sec5title10 = 'SELF TOKEN 专案经理';

        this.sec5intro11 =
          '香港知名演员、电视节目主持和电影制作人。近年多为电视节目主持，偶为电影导演，他同时亦投资、策划及参与电影制作。现代表香港演艺人协会任香港电影金像奖董事局副主席。曾荣获第11届香港金像奖《双城故事》荣获最佳男主角、第36届香港金像奖《一念无明》荣获最佳男配角、第53届金马奖《愈快乐愈堕落》荣获最佳男配角。';
        this.sec5name11 = '曾志伟';
        this.sec5title11 = 'SELF TOKEN 原创电影圣人大盗监制';

        this.sec5intro12 =
          '台湾资深电影人，深耕电影逾二十载,合作对象皆为享誉中外、作品题材各异的优秀导演。擅长电影资源整合、预算掌控与制作，具丰富的国际合作经验。现担任华文创总监制。曾获得第50 届金马奖年度台湾杰出电影工作者，并担任第35 届香港金像奖提名最佳两岸华语电影《我的少女时代》总监制以及第53 届金马奖8项提名、第36 届香港金像奖最佳两岸华语电影《一路顺风》监制。';
        this.sec5name12 = '叶如芬';
        this.sec5title12 = 'SELF TOKEN 原创电影圣人大盗监制';

        this.sec5intro13 =
          '渺小（歌手：田馥甄）、寂寞寂寞就好（歌手：田馥甄）、意外（歌手：薛之谦）、曾经是少年（歌手：SHE）等华语畅销歌曲、电影原创主题曲作曲，曾获得金曲奖、上海音乐风云榜年度十大金曲等殊荣，现任SELFPICK PRODUCTION 音乐总监、华研音乐专属词曲音乐作者。';
        this.sec5name13 = '杨子朴';
        this.sec5title13 = 'SELF TOKEN 原创电影圣人大盗音乐总监';

        this.sec5intro14 =
          '毕业于南加州大学大众传播系，曾有在美国生物科技产业招募人才与社群行销经验，同时在KB Capital Management 协助投资管理。近期回台也在虚拟货币产业公司担任主导招募与翻译，协助行销团队对国外用户进行推广教育。未来将协助与代表Self Token 对外进行区块链教育和对英语系国家进行IEO计画的公关宣传。';
        this.sec5name14 = '许家瑄';
        this.sec5title14 = 'SELF TOKEN 公关经理';

        this.sec5intro15 =
          '从事平面设计工作近十年，擅长平面、网站版面、包装、与美术设计。多项音乐展演、影视海报设计经验，包含奥地利插画家Lisbeth Zwerger 来台巡回展出海报与周边商品之专案设计，东发生技水果啤酒系列包装设计等。现为SELFPICK PRODUCTION 艺术统筹，执行美术场景设计、周边商品开发制作与企业CIS 设计。';
        this.sec5name15 = '何姿莹';
        this.sec5title15 = 'SELF TOKEN 艺术总监';

        this.sec5intro16 =
          '来自香港的区块链开发者，曾于南韩，香港，台湾等地演讲研究发展，并在2018 年6 月刚于德国慕尼黑发表最新的ERC860 论文，同时为香港科技大学开发第一条以校园为基准的资源共享区块链。目前任职纽约Coining.ai 的区块链技术总监，曾赴矽谷研发Google Glass 医疗系统与香港首个JPMorgan 自动化对话机器人。';
        this.sec5name16 = 'Jeff';
        this.sec5title16 = 'SELF TOKEN 智能合约开发技术顾问';

        this.sec5intro17 =
          '同样来自香港的区块链开发者，于南韩，香港，台湾等地演讲研究发展，并同JEFF 于2018 年6 月刚于德国慕尼黑发表最新的ERC860 论文，同时为香港科技大学开发第一条以校园为基准的资源共享区块链。于2018年暑假在微软香港的人工智能开发团队实习，并在Medium 上发表以太坊系列教学，吸引1400 多人追踪。';
        this.sec5name17 = 'Tina';
        this.sec5title17 = 'SELF TOKEN 智能合约开发技术顾问';
      }
    }
  },

  ready: function() {
    this.lang = 'tc';
    $('.loading').removeClass('loading');
  }
});
