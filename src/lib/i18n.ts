// ============================================================
// Award Prospect Limited — i18n Translation Dictionary
// 简体中文 | 繁體中文 | English | العربية
// ============================================================

export type Lang = "en" | "zh-CN" | "zh-TW" | "ar";

export const LANGUAGES: { code: Lang; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "zh-CN", label: "简体中文", native: "简体中文" },
  { code: "zh-TW", label: "繁體中文", native: "繁體中文" },
  { code: "ar", label: "Arabic", native: "العربية" },
];

export const RTL_LANGS: Lang[] = ["ar"];

type TranslationDict = Record<string, Record<Lang, string>>;

export const t: TranslationDict = {
  // ---- Navbar ----
  "nav.about": {
    en: "About",
    "zh-CN": "关于我们",
    "zh-TW": "關於我們",
    ar: "من نحن",
  },
  "nav.capabilities": {
    en: "Capabilities",
    "zh-CN": "核心能力",
    "zh-TW": "核心能力",
    ar: "قدراتنا",
  },
  "nav.timeline": {
    en: "Timeline",
    "zh-CN": "发展历程",
    "zh-TW": "發展歷程",
    ar: "مسيرتنا",
  },
  "nav.partners": {
    en: "Partners",
    "zh-CN": "合作品牌",
    "zh-TW": "合作品牌",
    ar: "شركاؤنا",
  },
  "nav.contact": {
    en: "Contact",
    "zh-CN": "联系我们",
    "zh-TW": "聯繫我們",
    ar: "اتصل بنا",
  },
  "nav.cta": {
    en: "Get in Touch",
    "zh-CN": "联系咨询",
    "zh-TW": "聯繫諮詢",
    ar: "تواصل معنا",
  },

  // ---- Hero ----
  "hero.eyebrow": {
    en: "Global Sourcing & Supply Chain · Hong Kong",
    "zh-CN": "全球采购与供应链 · 香港",
    "zh-TW": "全球採購與供應鏈 · 香港",
    ar: "التوريد العالمي وسلسلة التوريد · هونغ كونغ",
  },
  "hero.headline": {
    en: "We Bridge Markets,\nDeliver Trust.",
    "zh-CN": "连接全球市场\n交付可靠信任",
    "zh-TW": "連接全球市場\n交付可靠信任",
    ar: "نحن نربط الأسواق،\nونقدم الثقة",
  },
  "hero.subheadline": {
    en: "End-to-end cross-border procurement — from brand sourcing to last-mile logistics. We help the world's best products reach China's largest platforms.",
    "zh-CN": "端到端跨境采购——从品牌寻源到最后一公里物流。我们帮助全球优质产品进入中国最大的电商平台。",
    "zh-TW": "端到端跨境採購——從品牌尋源到最後一公里物流。我們幫助全球優質產品進入中國最大的電商平台。",
    ar: "مشتريات عابرة للحدود شاملة — من توريد العلامات التجارية إلى الخدمات اللوجستية النهائية. نساعد أفضل المنتجات العالمية في الوصول إلى أكبر منصات الصين.",
  },
  "hero.cta1": {
    en: "Explore Capabilities",
    "zh-CN": "了解我们的能力",
    "zh-TW": "了解我們的能力",
    ar: "استكشف قدراتنا",
  },
  "hero.cta2": {
    en: "Get in Touch",
    "zh-CN": "立即联系",
    "zh-TW": "立即聯繫",
    ar: "تواصل معنا",
  },

  // ---- About ----
  "about.title": {
    en: "Built on Experience.\nDriven by Integrity.",
    "zh-CN": "经验为基\n诚信为本",
    "zh-TW": "經驗為基\n誠信為本",
    ar: "بُنيت على الخبرة.\nيقودها النزاهة.",
  },
  "about.story": {
    en: "Founded in 2019 and headquartered in Hong Kong, Award Prospect Limited was built by seasoned foreign trade and cross-border logistics professionals who saw a better way to move goods across borders.\n\nWe partner directly with brands and authorized distributors worldwide — no grey market, no shortcuts. Every shipment comes with a complete, auditable supply chain. From ANZ health products to European and Japanese beauty, we've sourced and delivered over HKD 70 million in authentic goods for China's most demanding e-commerce platforms.",
    "zh-CN": "澳華發展有限公司于2019年成立于香港，由资深外贸人和跨境物流专家创立。我们看到了跨境贸易更好的方式——不走灰色渠道、不抄近路。\n\n我们与全球品牌方和授权经销商直接合作，每批货物都有完整、可追溯的供应链文件。从澳新保健品到欧美日韩美妆，我们已为中国最严苛的电商平台采购并交付超过7000万港币的正品。",
    "zh-TW": "澳華發展有限公司於2019年成立於香港，由資深外貿人和跨境物流專家創立。我們看到了跨境貿易更好的方式——不走灰色渠道、不抄近路。\n\n我們與全球品牌方和授權經銷商直接合作，每批貨物都有完整、可追溯的供應鏈文件。從澳新保健品到歐美日韓美妝，我們已為中國最嚴苛的電商平台採購並交付超過7000萬港幣的正品。",
    ar: "تأسست شركة Award Prospect Limited في عام 2019 ومقرها هونغ كونغ، وقد بناها محترفون متمرسون في التجارة الخارجية والخدمات اللوجستية العابرة للحدود الذين رأوا طريقة أفضل لنقل البضائع عبر الحدود.\n\nنتعامل مباشرة مع العلامات التجارية والموزعين المعتمدين في جميع أنحاء العالم — لا سوق رمادية، لا اختصارات. كل شحنة تأتي بسلسلة توريد كاملة قابلة للتدقيق. من المنتجات الصحية الأسترالية والنيوزيلندية إلى مستحضرات التجميل الأوروبية واليابانية، قمنا بتوريد وتسليم أكثر من 70 مليون دولار هونغ كونغي من السلع الأصلية لأكثر منصات التجارة الإلكترونية الصينية تطلبًا.",
  },
  "about.stat1.value": {
    en: "2019",
    "zh-CN": "2019",
    "zh-TW": "2019",
    ar: "2019",
  },
  "about.stat1.label": {
    en: "Founded",
    "zh-CN": "创立于",
    "zh-TW": "創立於",
    ar: "تأسست",
  },
  "about.stat1.sub": {
    en: "Hong Kong headquartered, global operations",
    "zh-CN": "香港总部，全球运营",
    "zh-TW": "香港總部，全球運營",
    ar: "المقر الرئيسي في هونغ كونغ، عمليات عالمية",
  },
  "about.stat2.value": {
    en: "HKD 70M+",
    "zh-CN": "7000万+ 港币",
    "zh-TW": "7000萬+ 港幣",
    ar: "+70M HKD",
  },
  "about.stat2.label": {
    en: "Procured",
    "zh-CN": "累计采购",
    "zh-TW": "累計採購",
    ar: "تم توريده",
  },
  "about.stat2.sub": {
    en: "Cumulative cross-border procurement volume",
    "zh-CN": "跨境采购累计总额",
    "zh-TW": "跨境採購累計總額",
    ar: "حجم المشتريات التراكمي عبر الحدود",
  },
  "about.stat3.value": {
    en: "100+",
    "zh-CN": "100+",
    "zh-TW": "100+",
    ar: "+100",
  },
  "about.stat3.label": {
    en: "Partners",
    "zh-CN": "合作伙伴",
    "zh-TW": "合作夥伴",
    ar: "شريك",
  },
  "about.stat3.sub": {
    en: "Stable relationships across brands, platforms & distributors",
    "zh-CN": "稳定的品牌、平台与经销商关系网络",
    "zh-TW": "穩定的品牌、平台與經銷商關係網絡",
    ar: "علاقات مستقرة عبر العلامات التجارية والمنصات والموزعين",
  },
  "about.imageCaption": {
    en: "Our Hong Kong office — Kwun Tong, Kowloon Bay",
    "zh-CN": "香港办公室 — 九龙湾观塘",
    "zh-TW": "香港辦公室 — 九龍灣觀塘",
    ar: "مكتبنا في هونغ كونغ — خليج كولون",
  },

  // ---- Capabilities ----
  "cap.title": {
    en: "What We Do",
    "zh-CN": "核心能力",
    "zh-TW": "核心能力",
    ar: "ما نقوم به",
  },
  "cap.subtitle": {
    en: "Three pillars of cross-border excellence",
    "zh-CN": "跨境贸易的三大支柱",
    "zh-TW": "跨境貿易的三大支柱",
    ar: "ثلاث ركائز للتميز عبر الحدود",
  },
  "cap.1.title": {
    en: "Global Sourcing",
    "zh-CN": "全球采购",
    "zh-TW": "全球採購",
    ar: "التوريد العالمي",
  },
  "cap.1.tagline": {
    en: "We don't just find products. We build supply chains.",
    "zh-CN": "我们不只是找产品，我们构建供应链。",
    "zh-TW": "我們不只是找產品，我們構建供應鏈。",
    ar: "نحن لا نجد المنتجات فقط. نبني سلاسل التوريد.",
  },
  "cap.1.p1": {
    en: "Direct from brand owners & tier-1 authorized distributors",
    "zh-CN": "品牌方及一级授权经销商直采",
    "zh-TW": "品牌方及一級授權經銷商直採",
    ar: "مباشرة من مالكي العلامات التجارية والموزعين المعتمدين من الدرجة الأولى",
  },
  "cap.1.p2": {
    en: "Full documentation: certificates of origin, brand authorization letters, compliance records",
    "zh-CN": "完整文件：原产地证、品牌授权书、合规记录",
    "zh-TW": "完整文件：原產地證、品牌授權書、合規記錄",
    ar: "توثيق كامل: شهادات المنشأ، خطابات تفويض العلامة التجارية، سجلات الامتثال",
  },
  "cap.1.p3": {
    en: "Multi-category expertise: health & nutrition, beauty & skincare, personal care, mother & baby",
    "zh-CN": "多品类专长：保健营养、美妆护肤、个人护理、母婴",
    "zh-TW": "多品類專長：保健營養、美妝護膚、個人護理、母嬰",
    ar: "خبرة متعددة الفئات: الصحة والتغذية، الجمال والعناية بالبشرة، العناية الشخصية، الأم والطفل",
  },
  "cap.1.footer": {
    en: "Every product we source comes with a paper trail you can trust.",
    "zh-CN": "每一件产品都有你可以信赖的纸质溯源。",
    "zh-TW": "每一件產品都有你可以信賴的紙質溯源。",
    ar: "كل منتج نورده يأتي بسجل ورقي يمكنك الوثوق به.",
  },
  "cap.2.title": {
    en: "Logistics & Warehousing",
    "zh-CN": "物流与仓储",
    "zh-TW": "物流與倉儲",
    ar: "الخدمات اللوجستية والتخزين",
  },
  "cap.2.tagline": {
    en: "Your goods, our responsibility — from port to platform.",
    "zh-CN": "从港口到平台，全程负责。",
    "zh-TW": "從港口到平台，全程負責。",
    ar: "بضائعكم، مسؤوليتنا — من الميناء إلى المنصة.",
  },
  "cap.2.p1": {
    en: "Hong Kong warehousing with climate-controlled storage",
    "zh-CN": "香港恒温仓储",
    "zh-TW": "香港恆溫倉儲",
    ar: "تخزين في هونغ كونغ مع مستودعات متحكم بمناخها",
  },
  "cap.2.p2": {
    en: "China bonded warehouse network for customs-cleared distribution",
    "zh-CN": "中国保税仓网络，清关后分销",
    "zh-TW": "中國保稅倉網絡，清關後分銷",
    ar: "شبكة مستودعات جمركية في الصين للتوزيع بعد التخليص الجمركي",
  },
  "cap.2.p3": {
    en: "Door-to-door tracking & real-time shipment visibility",
    "zh-CN": "门到门追踪，实时货物可視",
    "zh-TW": "門到門追蹤，實時貨物可視",
    ar: "تتبع من الباب إلى الباب ورؤية فورية للشحنات",
  },
  "cap.2.p4": {
    en: "Cross-border freight management across sea, air & land",
    "zh-CN": "海陆空跨境货运管理",
    "zh-TW": "海陸空跨境貨運管理",
    ar: "إدارة الشحن عبر الحدود بحرًا وجوًا وبرًا",
  },
  "cap.2.footer": {
    en: "One partner. One chain. Zero blind spots.",
    "zh-CN": "一个伙伴，一条链路，零盲区。",
    "zh-TW": "一個夥伴，一條鏈路，零盲區。",
    ar: "شريك واحد. سلسلة واحدة. صفر نقاط عمياء.",
  },
  "cap.3.title": {
    en: "Multi-Channel Distribution",
    "zh-CN": "多渠道分销",
    "zh-TW": "多渠道分銷",
    ar: "التوزيع متعدد القنوات",
  },
  "cap.3.tagline": {
    en: "We connect brands to the platforms that matter.",
    "zh-CN": "我们将品牌连接到最重要的平台。",
    "zh-TW": "我們將品牌連接到最重要的平台。",
    ar: "نربط العلامات التجارية بالمنصات المهمة.",
  },
  "cap.3.p1": {
    en: "Tmall Global, Suning & Pinduoduo flagship partnerships",
    "zh-CN": "天猫国际、苏宁、拼多多旗舰级合作",
    "zh-TW": "天貓國際、蘇寧、拼多多旗艦級合作",
    ar: "شراكات رئيسية مع Tmall Global و Suning و Pinduoduo",
  },
  "cap.3.p2": {
    en: "Self-operated cross-border e-commerce channels",
    "zh-CN": "自营跨境電商渠道",
    "zh-TW": "自營跨境電商渠道",
    ar: "قنوات التجارة الإلكترونية العابرة للحدود المدارة ذاتيًا",
  },
  "cap.3.p3": {
    en: "Platform-specific category strategy & compliance support",
    "zh-CN": "平台专属品类策略与合规支持",
    "zh-TW": "平台專屬品類策略與合規支持",
    ar: "استراتيجية الفئات الخاصة بالمنصة ودعم الامتثال",
  },
  "cap.3.p4": {
    en: "China market intelligence & consumer trend analysis",
    "zh-CN": "中国市场情报与消费趋势分析",
    "zh-TW": "中國市場情報與消費趨勢分析",
    ar: "استخبارات السوق الصيني وتحليل اتجاهات المستهلكين",
  },
  "cap.3.footer": {
    en: "Your products, in front of the right customers, on the right shelves.",
    "zh-CN": "你的产品，面对正确的客户，摆在正确的货架上。",
    "zh-TW": "你的產品，面對正確的客戶，擺在正確的貨架上。",
    ar: "منتجاتكم، أمام العملاء المناسبين، على الرفوف المناسبة.",
  },

  // ---- Why Us ----
  "why.title": {
    en: "Why Award Prospect",
    "zh-CN": "为什么选择我们",
    "zh-TW": "為什麼選擇我們",
    ar: "لماذا Award Prospect",
  },
  "why.subtitle": {
    en: "Numbers don't lie. Here's what sets us apart.",
    "zh-CN": "数字不会说谎。这就是我们的不同。",
    "zh-TW": "數字不會說謊。這就是我們的不同。",
    ar: "الأرقام لا تكذب. إليك ما يميزنا.",
  },
  "why.m1.label": {
    en: "Total procurement volume",
    "zh-CN": "累计采购总额",
    "zh-TW": "累計採購總額",
    ar: "إجمالي حجم المشتريات",
  },
  "why.m2.label": {
    en: "Brand partners worldwide",
    "zh-CN": "全球品牌合作伙伴",
    "zh-TW": "全球品牌合作夥伴",
    ar: "شركاء العلامات التجارية عالميًا",
  },
  "why.m3.label": {
    en: "Stable business partnerships",
    "zh-CN": "稳定商业合作关系",
    "zh-TW": "穩定商業合作關係",
    ar: "شراكات تجارية مستقرة",
  },
  "why.m4.label": {
    en: "Authorized supply chain — no grey market, ever",
    "zh-CN": "授权供应链 — 永不涉灰",
    "zh-TW": "授權供應鏈 — 永不涉灰",
    ar: "سلسلة توريد معتمدة — لا سوق رمادية أبدًا",
  },
  "why.b1.title": {
    en: "Brand Authorized",
    "zh-CN": "品牌授权",
    "zh-TW": "品牌授權",
    ar: "معتمد من العلامة التجارية",
  },
  "why.b1.text": {
    en: "Every product sourced directly from brand owners or their officially appointed distributors. Full documentation provided.",
    "zh-CN": "每件产品均直接采购自品牌方或其官方指定经销商。提供完整证明文件。",
    "zh-TW": "每件產品均直接採購自品牌方或其官方指定經銷商。提供完整證明文件。",
    ar: "كل منتج يتم توريده مباشرة من مالكي العلامات التجارية أو موزعيهم المعتمدين رسميًا. يتم توفير الوثائق الكاملة.",
  },
  "why.b2.title": {
    en: "Compliance First",
    "zh-CN": "合规优先",
    "zh-TW": "合規優先",
    ar: "الامتثال أولاً",
  },
  "why.b2.text": {
    en: "Complete customs documentation, certificates of origin, and regulatory compliance for every shipment.",
    "zh-CN": "每批货物均有完整的海关文件、原产地证书和法规合规文件。",
    "zh-TW": "每批貨物均有完整的海關文件、原產地證書和法規合規文件。",
    ar: "وثائق جمركية كاملة، شهادات منشأ، وامتثال تنظيمي لكل شحنة.",
  },
  "why.b3.title": {
    en: "Team You Can Trust",
    "zh-CN": "值得信赖的团队",
    "zh-TW": "值得信賴的團隊",
    ar: "فريق يمكنك الوثوق به",
  },
  "why.b3.text": {
    en: "Founded by foreign trade and logistics veterans with deep cross-border expertise across Asia-Pacific and Europe.",
    "zh-CN": "由资深外贸与物流专家创立，拥有亚太及欧洲深厚的跨境经验。",
    "zh-TW": "由資深外貿與物流專家創立，擁有亞太及歐洲深厚的跨境經驗。",
    ar: "أسسها خبراء في التجارة الخارجية والخدمات اللوجستية بخبرة عميقة عبر الحدود في آسيا والمحيط الهادئ وأوروبا.",
  },

  // ---- Timeline ----
  "time.title": {
    en: "Our Journey",
    "zh-CN": "发展历程",
    "zh-TW": "發展歷程",
    ar: "رحلتنا",
  },
  "time.subtitle": {
    en: "From a single desk in Hong Kong to a global sourcing network.",
    "zh-CN": "从香港的一张办公桌，到全球采购网络。",
    "zh-TW": "從香港的一張辦公桌，到全球採購網絡。",
    ar: "من مكتب واحد في هونغ كونغ إلى شبكة توريد عالمية.",
  },
  "time.1.year": {
    en: "2019",
    "zh-CN": "2019",
    "zh-TW": "2019",
    ar: "2019",
  },
  "time.1.title": {
    en: "The Beginning",
    "zh-CN": "扬帆起航",
    "zh-TW": "揚帆起航",
    ar: "البداية",
  },
  "time.1.text": {
    en: "Award Prospect Limited established in Hong Kong. Launched cross-border procurement focused on Australian and New Zealand health & nutrition brands — A2, Swisse, Blackmores, Bio Islands. First-year procurement: HKD 7M.",
    "zh-CN": "澳華發展有限公司在香港成立。启动跨境采购业务，主攻澳新保健营养品牌——A2、Swisse、Blackmores、Bio Islands。首年采购额：700万港币。",
    "zh-TW": "澳華發展有限公司在香港成立。啟動跨境採購業務，主攻澳新保健營養品牌——A2、Swisse、Blackmores、Bio Islands。首年採購額：700萬港幣。",
    ar: "تأسست Award Prospect Limited في هونغ كونغ. أطلقت المشتريات عبر الحدود مركزة على العلامات التجارية الصحية والغذائية الأسترالية والنيوزيلندية — A2، Swisse، Blackmores، Bio Islands. مشتريات السنة الأولى: 7 مليون دولار هونغ كونغي.",
  },
  "time.2.year": {
    en: "2020",
    "zh-CN": "2020",
    "zh-TW": "2020",
    ar: "2020",
  },
  "time.2.title": {
    en: "The Pivot",
    "zh-CN": "战略转型",
    "zh-TW": "戰略轉型",
    ar: "التحول",
  },
  "time.2.text": {
    en: "Recognizing shifting market dynamics in ANZ categories, we strategically expanded into beauty & skincare. Within 14 months, procured HKD 41M across brands including Estée Lauder, La Mer, Bioderma, Dior, and Shiseido. Monthly run rate: HKD 3M.",
    "zh-CN": "预判到澳新品类市场变化，我们战略性地扩展至美妆护肤品类。14个月内采购额达4100万港币，涵盖雅诗兰黛、海蓝之谜、贝德玛、迪奥、资生堂等品牌。月均采购额：300万港币。",
    "zh-TW": "預判到澳新品類市場變化，我們戰略性地擴展至美妝護膚品類。14個月內採購額達4100萬港幣，涵蓋雅詩蘭黛、海藍之謎、貝德瑪、迪奧、資生堂等品牌。月均採購額：300萬港幣。",
    ar: "إدراكًا لديناميكيات السوق المتغيرة في فئات أستراليا ونيوزيلندا، توسعنا استراتيجيًا في مجال الجمال والعناية بالبشرة. في غضون 14 شهرًا، قمنا بتوريد 41 مليون دولار هونغ كونغي عبر علامات تجارية تشمل Estée Lauder و La Mer و Bioderma و Dior و Shiseido. المعدل الشهري: 3 مليون دولار هونغ كونغي.",
  },
  "time.3.year": {
    en: "2024",
    "zh-CN": "2024",
    "zh-TW": "2024",
    ar: "2024",
  },
  "time.3.title": {
    en: "Strategic Partnerships",
    "zh-CN": "深耕合作",
    "zh-TW": "深耕合作",
    ar: "شراكات استراتيجية",
  },
  "time.3.text": {
    en: "Deepened brand relationships into multi-year strategic agreements. Expanded distribution reach to cover all major Chinese cross-border e-commerce platforms. Built proprietary supply chain infrastructure in Hong Kong.",
    "zh-CN": "将品牌关系深化为多年战略协议。分销覆盖中国所有主要跨境电商平台。在香港建立了自有供应链基础设施。",
    "zh-TW": "將品牌關係深化為多年戰略協議。分銷覆蓋中國所有主要跨境電商平台。在香港建立了自有供應鏈基礎設施。",
    ar: "عمقنا علاقات العلامات التجارية إلى اتفاقيات استراتيجية متعددة السنوات. وسعنا نطاق التوزيع ليشمل جميع منصات التجارة الإلكترونية الصينية الرئيسية عبر الحدود. بنينا بنية تحتية خاصة لسلسلة التوريد في هونغ كونغ.",
  },
  "time.4.year": {
    en: "2025+",
    "zh-CN": "2025+",
    "zh-TW": "2025+",
    ar: "2025+",
  },
  "time.4.title": {
    en: "Global Vision",
    "zh-CN": "全球视野",
    "zh-TW": "全球視野",
    ar: "رؤية عالمية",
  },
  "time.4.text": {
    en: "Expanding sourcing networks into new categories and geographies. Investing in digital supply chain tools. Building the bridge between the world's best brands and Asia's most dynamic markets.",
    "zh-CN": "将采购网络扩展至新品类和新地区。投资数字化供应链工具。在世界顶级品牌与亚洲最具活力的市场之间架起桥梁。",
    "zh-TW": "將採購網絡擴展至新品類和新地區。投資數字化供應鏈工具。在世界頂級品牌與亞洲最具活力的市場之間架起橋樑。",
    ar: "توسيع شبكات التوريد إلى فئات وجغرافيات جديدة. الاستثمار في أدوات سلسلة التوريد الرقمية. بناء الجسر بين أفضل العلامات التجارية في العالم وأكثر أسواق آسيا ديناميكية.",
  },

  // ---- Partners ----
  "partners.title": {
    en: "Brands We Work With",
    "zh-CN": "合作品牌",
    "zh-TW": "合作品牌",
    ar: "العلامات التجارية التي نعمل معها",
  },
  "partners.subtitle": {
    en: "Trusted by category leaders across health, beauty, and personal care.",
    "zh-CN": "深受保健、美妆、个人护理品类领导品牌信赖。",
    "zh-TW": "深受保健、美妝、個人護理品類領導品牌信賴。",
    ar: "موثوق من قبل قادة الفئات في الصحة والجمال والعناية الشخصية.",
  },

  // ---- Contact ----
  "contact.title": {
    en: "Let's Talk",
    "zh-CN": "联系洽谈",
    "zh-TW": "聯繫洽談",
    ar: "لنتحدث",
  },
  "contact.subtitle": {
    en: "Whether you're a brand looking to enter China, or a platform seeking reliable supply — we'd love to hear from you.",
    "zh-CN": "无论您是希望进入中国市场的品牌，还是寻求可靠供应的平台——我们期待与您沟通。",
    "zh-TW": "無論您是希望進入中國市場的品牌，還是尋求可靠供應的平台——我們期待與您溝通。",
    ar: "سواء كنت علامة تجارية تتطلع لدخول الصين، أو منصة تبحث عن إمدادات موثوقة — نود أن نسمع منك.",
  },
  "contact.addressLabel": {
    en: "Address",
    "zh-CN": "地址",
    "zh-TW": "地址",
    ar: "العنوان",
  },
  "contact.emailLabel": {
    en: "Email",
    "zh-CN": "邮箱",
    "zh-TW": "郵箱",
    ar: "البريد الإلكتروني",
  },
  "contact.namePlaceholder": {
    en: "Your name",
    "zh-CN": "您的姓名",
    "zh-TW": "您的姓名",
    ar: "اسمك",
  },
  "contact.emailPlaceholder": {
    en: "you@company.com",
    "zh-CN": "you@company.com",
    "zh-TW": "you@company.com",
    ar: "you@company.com",
  },
  "contact.msgPlaceholder": {
    en: "Tell us about your needs...",
    "zh-CN": "请告诉我们您的需求...",
    "zh-TW": "請告訴我們您的需求...",
    ar: "أخبرنا عن احتياجاتك...",
  },
  "contact.nameLabel": {
    en: "Name *",
    "zh-CN": "姓名 *",
    "zh-TW": "姓名 *",
    ar: "الاسم *",
  },
  "contact.emailLabelForm": {
    en: "Email *",
    "zh-CN": "邮箱 *",
    "zh-TW": "郵箱 *",
    ar: "البريد الإلكتروني *",
  },
  "contact.msgLabel": {
    en: "Message *",
    "zh-CN": "留言 *",
    "zh-TW": "留言 *",
    ar: "الرسالة *",
  },
  "contact.send": {
    en: "Send Message",
    "zh-CN": "发送消息",
    "zh-TW": "發送消息",
    ar: "أرسل الرسالة",
  },
  "contact.sent": {
    en: "Message Sent ✓",
    "zh-CN": "已发送 ✓",
    "zh-TW": "已發送 ✓",
    ar: "تم الإرسال ✓",
  },

  // ---- Footer ----
  "footer.tagline": {
    en: "Global Sourcing & Cross-Border Supply Chain",
    "zh-CN": "全球采购与跨境供应链",
    "zh-TW": "全球採購與跨境供應鏈",
    ar: "التوريد العالمي وسلسلة التوريد عبر الحدود",
  },
  "footer.subhead": {
    en: "Hong Kong · Since 2019",
    "zh-CN": "香港 · 始于2019",
    "zh-TW": "香港 · 始於2019",
    ar: "هونغ كونغ · منذ 2019",
  },
  "footer.copyright": {
    en: "© 2025 Award Prospect Limited. All rights reserved.",
    "zh-CN": "© 2025 澳華發展有限公司 版权所有",
    "zh-TW": "© 2025 澳華發展有限公司 版權所有",
    ar: "© 2025 Award Prospect Limited. جميع الحقوق محفوظة.",
  },

  // ---- Footer Columns ----
  "footer.quickLinks": {
    en: "Quick Links",
    "zh-CN": "快速链接",
    "zh-TW": "快速連結",
    ar: "روابط سريعة",
  },
  "footer.legal": {
    en: "Legal",
    "zh-CN": "法律条款",
    "zh-TW": "法律條款",
    ar: "قانوني",
  },
  "footer.privacy": {
    en: "Privacy Policy",
    "zh-CN": "隐私政策",
    "zh-TW": "隱私政策",
    ar: "سياسة الخصوصية",
  },
  "footer.terms": {
    en: "Terms of Service",
    "zh-CN": "服务条款",
    "zh-TW": "服務條款",
    ar: "شروط الخدمة",
  },
  "footer.cookies": {
    en: "Cookie Policy",
    "zh-CN": "Cookie 政策",
    "zh-TW": "Cookie 政策",
    ar: "سياسة ملفات تعريف الارتباط",
  },
  "footer.followUs": {
    en: "Follow Us",
    "zh-CN": "关注我们",
    "zh-TW": "關注我們",
    ar: "تابعنا",
  },
  "footer.contactUs": {
    en: "Contact Us",
    "zh-CN": "联系我们",
    "zh-TW": "聯繫我們",
    ar: "اتصل بنا",
  },

  // ---- Legal: Privacy Policy ----
  "privacy.title": {
    en: "Privacy Policy",
    "zh-CN": "隐私政策",
    "zh-TW": "隱私政策",
    ar: "سياسة الخصوصية",
  },
  "privacy.lastUpdated": {
    en: "Last updated: June 2025",
    "zh-CN": "最后更新：2025年6月",
    "zh-TW": "最後更新：2025年6月",
    ar: "آخر تحديث: يونيو 2025",
  },
  "privacy.intro": {
    en: "Award Prospect Limited (\"we\", \"our\", or \"us\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.",
    "zh-CN": "澳華發展有限公司（「我们」或「我们的」）致力于保护您的隐私。本隐私政策说明我们在您访问我们的网站或使用我们的服务时，如何收集、使用、披露和保护您的信息。",
    "zh-TW": "澳華發展有限公司（「我們」或「我們的」）致力於保護您的隱私。本隱私政策說明我們在您訪問我們的網站或使用我們的服務時，如何收集、使用、披露和保護您的信息。",
    ar: "تلتزم Award Prospect Limited (\"نحن\" أو \"خاصتنا\") بحماية خصوصيتك. تشرح سياسة الخصوصية هذه كيف نجمع ونستخدم ونفصح ونحمي معلوماتك عند زيارتك لموقعنا الإلكتروني أو تعاملك مع خدماتنا.",
  },
  "privacy.collect.title": {
    en: "Information We Collect",
    "zh-CN": "我们收集的信息",
    "zh-TW": "我們收集的信息",
    ar: "المعلومات التي نجمعها",
  },
  "privacy.collect.text": {
    en: "We may collect the following types of information:\n\n• Contact Information: Name, email address, phone number, and company details when you submit an inquiry or contact form.\n• Usage Data: IP address, browser type, operating system, pages visited, and time spent on our site through standard web analytics.\n• Communication Records: Emails, messages, and other correspondence you send to us.",
    "zh-CN": "我们可能收集以下类型的信息：\n\n• 联系信息：当您提交咨询或联系表单时，您的姓名、邮箱地址、电话号码和公司信息。\n• 使用数据：通过标准网站分析收集的 IP 地址、浏览器类型、操作系统、访问页面和停留时间。\n• 通信记录：您发送给我们的电子邮件、消息和其他通信内容。",
    "zh-TW": "我們可能收集以下類型的信息：\n\n• 聯繫信息：當您提交諮詢或聯繫表單時，您的姓名、郵箱地址、電話號碼和公司信息。\n• 使用數據：通過標準網站分析收集的 IP 地址、瀏覽器類型、操作系統、訪問頁面和停留時間。\n• 通信記錄：您發送給我們的電子郵件、消息和其他通信內容。",
    ar: "قد نجمع الأنواع التالية من المعلومات:\n\n• معلومات الاتصال: الاسم وعنوان البريد الإلكتروني ورقم الهاتف وتفاصيل الشركة عند تقديم استفسار أو نموذج اتصال.\n• بيانات الاستخدام: عنوان IP ونوع المتصفح ونظام التشغيل والصفحات التي تمت زيارتها والوقت المستغرق في موقعنا من خلال تحليلات الويب القياسية.\n• سجلات الاتصال: رسائل البريد الإلكتروني والرسائل والمراسلات الأخرى التي ترسلها إلينا.",
  },
  "privacy.use.title": {
    en: "How We Use Your Information",
    "zh-CN": "我们如何使用您的信息",
    "zh-TW": "我們如何使用您的信息",
    ar: "كيف نستخدم معلوماتك",
  },
  "privacy.use.text": {
    en: "We use the information we collect to:\n\n• Respond to your inquiries and provide our services.\n• Improve our website and user experience.\n• Communicate with you about our services, updates, and relevant business opportunities.\n• Comply with legal obligations and protect our legal rights.",
    "zh-CN": "我们使用收集的信息用于：\n\n• 回复您的咨询并提供我们的服务。\n• 改进我们的网站和用户体验。\n• 就我们的服务、更新和相关商业机会与您沟通。\n• 遵守法律义务并保护我们的合法权益。",
    "zh-TW": "我們使用收集的信息用於：\n\n• 回覆您的諮詢並提供我們的服務。\n• 改進我們的網站和用戶體驗。\n• 就我們的服務、更新和相關商業機會與您溝通。\n• 遵守法律義務並保護我們的合法權益。",
    ar: "نستخدم المعلومات التي نجمعها من أجل:\n\n• الرد على استفساراتك وتقديم خدماتنا.\n• تحسين موقعنا الإلكتروني وتجربة المستخدم.\n• التواصل معك بشأن خدماتنا وتحديثاتنا وفرص العمل ذات الصلة.\n• الامتثال للالتزامات القانونية وحماية حقوقنا القانونية.",
  },
  "privacy.share.title": {
    en: "Information Sharing",
    "zh-CN": "信息共享",
    "zh-TW": "信息共享",
    ar: "مشاركة المعلومات",
  },
  "privacy.share.text": {
    en: "We do not sell, trade, or rent your personal information to third parties. We may share information with:\n\n• Service providers who assist us in operating our website and business.\n• Legal authorities when required by applicable law.\n• Affiliated companies within our corporate group.",
    "zh-CN": "我们不会向第三方出售、交易或出租您的个人信息。我们可能与以下方共享信息：\n\n• 协助我们运营网站和业务的服务提供商。\n• 适用法律要求的法律机关。\n• 我们企业集团内的关联公司。",
    "zh-TW": "我們不會向第三方出售、交易或出租您的個人信息。我們可能與以下方共享信息：\n\n• 協助我們運營網站和業務的服務提供商。\n• 適用法律要求的法律機關。\n• 我們企業集團內的關聯公司。",
    ar: "نحن لا نبيع أو نتاجر أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك المعلومات مع:\n\n• مزودي الخدمات الذين يساعدوننا في تشغيل موقعنا الإلكتروني وأعمالنا.\n• السلطات القانونية عندما يقتضي القانون المعمول به ذلك.\n• الشركات التابعة ضمن مجموعتنا المؤسسية.",
  },
  "privacy.cookies.title": {
    en: "Cookies",
    "zh-CN": "Cookie 政策",
    "zh-TW": "Cookie 政策",
    ar: "ملفات تعريف الارتباط",
  },
  "privacy.cookies.text": {
    en: "Our website uses essential cookies to ensure proper functionality, and analytics cookies to understand how visitors interact with our site. You can control cookie preferences through your browser settings. For more details, please see our Cookie Policy.",
    "zh-CN": "我们的网站使用必要的 Cookie 以确保正常运行，以及分析 Cookie 以了解访客如何与我们的网站互动。您可以通过浏览器设置控制 Cookie 偏好。更多详情请参阅我们的 Cookie 政策。",
    "zh-TW": "我們的網站使用必要的 Cookie 以確保正常運行，以及分析 Cookie 以了解訪客如何與我們的網站互動。您可以通過瀏覽器設置控制 Cookie 偏好。更多詳情請參閱我們的 Cookie 政策。",
    ar: "يستخدم موقعنا الإلكتروني ملفات تعريف الارتباط الأساسية لضمان الوظائف السليمة، وملفات تعريف الارتباط التحليلية لفهم كيفية تفاعل الزوار مع موقعنا. يمكنك التحكم في تفضيلات ملفات تعريف الارتباط من خلال إعدادات المتصفح. لمزيد من التفاصيل، يرجى الاطلاع على سياسة ملفات تعريف الارتباط الخاصة بنا.",
  },
  "privacy.rights.title": {
    en: "Your Rights",
    "zh-CN": "您的权利",
    "zh-TW": "您的權利",
    ar: "حقوقك",
  },
  "privacy.rights.text": {
    en: "Depending on your jurisdiction, you may have the right to:\n\n• Access the personal data we hold about you.\n• Request correction of inaccurate data.\n• Request deletion of your personal data.\n• Object to or restrict processing of your data.\n• Data portability.\n\nTo exercise any of these rights, please contact us at kevin@awardprospect.com.",
    "zh-CN": "根据您所在的司法管辖区，您可能有权：\n\n• 访问我们持有的关于您的个人数据。\n• 要求更正不准确的数据。\n• 要求删除您的个人数据。\n• 反对或限制对您数据的处理。\n• 数据可移植性。\n\n如需行使任何这些权利，请通过 kevin@awardprospect.com 联系我们。",
    "zh-TW": "根據您所在的司法管轄區，您可能有權：\n\n• 訪問我們持有的關於您的個人數據。\n• 要求更正不準確的數據。\n• 要求刪除您的個人數據。\n• 反對或限制對您數據的處理。\n• 數據可移植性。\n\n如需行使任何這些權利，請通過 kevin@awardprospect.com 聯繫我們。",
    ar: "حسب اختصاصك القضائي، قد يكون لك الحق في:\n\n• الوصول إلى البيانات الشخصية التي نحتفظ بها عنك.\n• طلب تصحيح البيانات غير الدقيقة.\n• طلب حذف بياناتك الشخصية.\n• الاعتراض على معالجة بياناتك أو تقييدها.\n• قابلية نقل البيانات.\n\nلممارسة أي من هذه الحقوق، يرجى الاتصال بنا على kevin@awardprospect.com.",
  },
  "privacy.contact.title": {
    en: "Contact Us",
    "zh-CN": "联系我们",
    "zh-TW": "聯繫我們",
    ar: "اتصل بنا",
  },
  "privacy.contact.text": {
    en: "If you have any questions about this Privacy Policy, please contact us at:\n\nAward Prospect Limited\nFlat/Rm 307, Kam Hon Industrial Building\n8 Wang Kwun Road, Kowloon Bay\nHong Kong\n\nEmail: kevin@awardprospect.com",
    "zh-CN": "如果您对本隐私政策有任何疑问，请通过以下方式联系我们：\n\n澳華發展有限公司\n香港九龙九龙湾宏冠道八号\n金汉工业大厦307室\n\n邮箱：kevin@awardprospect.com",
    "zh-TW": "如果您對本隱私政策有任何疑問，請通過以下方式聯繫我們：\n\n澳華發展有限公司\n香港九龍九龍灣宏冠道八號\n金漢工業大廈307室\n\n郵箱：kevin@awardprospect.com",
    ar: "إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على:\n\nAward Prospect Limited\nFlat/Rm 307, Kam Hon Industrial Building\n8 Wang Kwun Road, Kowloon Bay\nHong Kong\n\nالبريد الإلكتروني: kevin@awardprospect.com",
  },

  // ---- Legal: Terms of Service ----
  "terms.title": {
    en: "Terms of Service",
    "zh-CN": "服务条款",
    "zh-TW": "服務條款",
    ar: "شروط الخدمة",
  },
  "terms.lastUpdated": {
    en: "Last updated: June 2025",
    "zh-CN": "最后更新：2025年6月",
    "zh-TW": "最後更新：2025年6月",
    ar: "آخر تحديث: يونيو 2025",
  },
  "terms.intro": {
    en: "Welcome to Award Prospect Limited. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully before using our site.",
    "zh-CN": "欢迎访问澳華發展有限公司。访问或使用我们的网站和服务，即表示您同意受本服务条款的约束。在使用我们的网站之前，请仔细阅读本条款。",
    "zh-TW": "歡迎訪問澳華發展有限公司。訪問或使用我們的網站和服務，即表示您同意受本服務條款的約束。在使用我們的網站之前，請仔細閱讀本條款。",
    ar: "مرحبًا بكم في Award Prospect Limited. من خلال الوصول إلى موقعنا الإلكتروني وخدماتنا أو استخدامهما، فإنك توافق على الالتزام بشروط الخدمة هذه. يرجى قراءتها بعناية قبل استخدام موقعنا.",
  },
  "terms.service.title": {
    en: "Services",
    "zh-CN": "服务",
    "zh-TW": "服務",
    ar: "الخدمات",
  },
  "terms.service.text": {
    en: "Award Prospect Limited provides cross-border procurement, supply chain management, logistics, and distribution services. All services are subject to separate agreements and are governed by the terms specified in those agreements. Information on this website is for general informational purposes only and does not constitute a binding offer.",
    "zh-CN": "澳華發展有限公司提供跨境采购、供应链管理、物流和分销服务。所有服务均受单独协议的约束，并受该等协议中规定的条款管辖。本网站上的信息仅供一般参考，不构成具有约束力的要约。",
    "zh-TW": "澳華發展有限公司提供跨境採購、供應鏈管理、物流和分銷服務。所有服務均受單獨協議的約束，並受該等協議中規定的條款管轄。本網站上的信息僅供一般參考，不構成具有約束力的要約。",
    ar: "تقدم Award Prospect Limited خدمات المشتريات عبر الحدود وإدارة سلسلة التوريد والخدمات اللوجستية والتوزيع. تخضع جميع الخدمات لاتفاقيات منفصلة وتحكمها الشروط المحددة في تلك الاتفاقيات. المعلومات على هذا الموقع هي لأغراض إعلامية عامة فقط ولا تشكل عرضًا ملزمًا.",
  },
  "terms.ip.title": {
    en: "Intellectual Property",
    "zh-CN": "知识产权",
    "zh-TW": "知識產權",
    ar: "الملكية الفكرية",
  },
  "terms.ip.text": {
    en: "All content on this website, including text, graphics, logos, images, and software, is the property of Award Prospect Limited or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content without our prior written consent.",
    "zh-CN": "本网站上的所有内容，包括文字、图形、标志、图像和软件，均为澳華發展有限公司或其内容供应商的财产，受适用的知识产权法保护。未经我们事先书面同意，您不得复制、分发或使用任何内容。",
    "zh-TW": "本網站上的所有內容，包括文字、圖形、標誌、圖像和軟件，均為澳華發展有限公司或其內容供應商的財產，受適用的知識產權法保護。未經我們事先書面同意，您不得複製、分發或使用任何內容。",
    ar: "جميع المحتويات على هذا الموقع الإلكتروني، بما في ذلك النصوص والرسومات والشعارات والصور والبرمجيات، هي ملك لشركة Award Prospect Limited أو موردي المحتوى التابعين لها ومحمية بموجب قوانين الملكية الفكرية المعمول بها. لا يجوز لك إعادة إنتاج أو توزيع أو استخدام أي محتوى دون موافقتنا الكتابية المسبقة.",
  },
  "terms.liability.title": {
    en: "Limitation of Liability",
    "zh-CN": "责任限制",
    "zh-TW": "責任限制",
    ar: "تحديد المسؤولية",
  },
  "terms.liability.text": {
    en: "To the fullest extent permitted by law, Award Prospect Limited shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of this website or our services. We make no warranties or representations about the accuracy or completeness of the website content.",
    "zh-CN": "在法律允许的最大范围内，澳華發展有限公司不对因使用本网站或我们的服务而产生的任何直接、间接、附带、后果性或惩罚性损害赔偿承担责任。我们对网站内容的准确性或完整性不作任何保证或陈述。",
    "zh-TW": "在法律允許的最大範圍內，澳華發展有限公司不對因使用本網站或我們的服務而產生的任何直接、間接、附帶、後果性或懲罰性損害賠償承擔責任。我們對網站內容的準確性或完整性不作任何保證或陳述。",
    ar: "إلى أقصى حد يسمح به القانون، لن تكون Award Prospect Limited مسؤولة عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو تبعية أو عقابية ناشئة عن استخدامك لهذا الموقع الإلكتروني أو خدماتنا. نحن لا نقدم أي ضمانات أو إقرارات حول دقة أو اكتمال محتوى الموقع.",
  },
  "terms.governing.title": {
    en: "Governing Law",
    "zh-CN": "适用法律",
    "zh-TW": "適用法律",
    ar: "القانون الحاكم",
  },
  "terms.governing.text": {
    en: "These Terms of Service shall be governed by and construed in accordance with the laws of the Hong Kong Special Administrative Region. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Hong Kong.",
    "zh-CN": "本服务条款受香港特别行政区法律管辖并据其解释。因本条款引起的任何争议应受香港法院的专属管辖。",
    "zh-TW": "本服務條款受香港特別行政區法律管轄並據其解釋。因本條款引起的任何爭議應受香港法院的專屬管轄。",
    ar: "تخضع شروط الخدمة هذه لقوانين منطقة هونغ كونغ الإدارية الخاصة وتفسر وفقًا لها. تخضع أي نزاعات تنشأ عن هذه الشروط للاختصاص القضائي الحصري لمحاكم هونغ كونغ.",
  },
  "terms.contact.title": {
    en: "Contact",
    "zh-CN": "联系",
    "zh-TW": "聯繫",
    ar: "اتصل",
  },
  "terms.contact.text": {
    en: "For questions about these Terms of Service, please contact us at kevin@awardprospect.com.",
    "zh-CN": "如对本服务条款有疑问，请通过 kevin@awardprospect.com 联系我们。",
    "zh-TW": "如對本服務條款有疑問，請通過 kevin@awardprospect.com 聯繫我們。",
    ar: "للأسئلة حول شروط الخدمة هذه، يرجى الاتصال بنا على kevin@awardprospect.com.",
  },

  // ---- Legal: Cookie Policy ----
  "cookies.title": {
    en: "Cookie Policy",
    "zh-CN": "Cookie 政策",
    "zh-TW": "Cookie 政策",
    ar: "سياسة ملفات تعريف الارتباط",
  },
  "cookies.lastUpdated": {
    en: "Last updated: June 2025",
    "zh-CN": "最后更新：2025年6月",
    "zh-TW": "最後更新：2025年6月",
    ar: "آخر تحديث: يونيو 2025",
  },
  "cookies.intro": {
    en: "This Cookie Policy explains how Award Prospect Limited uses cookies and similar technologies on our website. By using our website, you consent to the use of cookies as described in this policy.",
    "zh-CN": "本 Cookie 政策说明澳華發展有限公司如何在我们网站上使用 Cookie 及类似技术。使用我们的网站即表示您同意按照本政策所述使用 Cookie。",
    "zh-TW": "本 Cookie 政策說明澳華發展有限公司如何在我們網站上使用 Cookie 及類似技術。使用我們的網站即表示您同意按照本政策所述使用 Cookie。",
    ar: "تشرح سياسة ملفات تعريف الارتباط هذه كيف تستخدم Award Prospect Limited ملفات تعريف الارتباط والتقنيات المماثلة على موقعنا الإلكتروني. باستخدام موقعنا الإلكتروني، فإنك توافق على استخدام ملفات تعريف الارتباط كما هو موضح في هذه السياسة.",
  },
  "cookies.what.title": {
    en: "What Are Cookies",
    "zh-CN": "什么是 Cookie",
    "zh-TW": "什麼是 Cookie",
    ar: "ما هي ملفات تعريف الارتباط",
  },
  "cookies.what.text": {
    en: "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the site owners. Cookies may be \"session\" cookies (deleted when you close your browser) or \"persistent\" cookies (remain until they expire or are deleted).",
    "zh-CN": "Cookie 是您访问网站时放置在您设备上的小型文本文件。它们被广泛用于使网站更有效地运行，以及向网站所有者提供信息。Cookie 可能是「会话」Cookie（关闭浏览器时删除）或「持久」Cookie（保留直到过期或被删除）。",
    "zh-TW": "Cookie 是您訪問網站時放置在您設備上的小型文本文件。它們被廣泛用於使網站更有效地運行，以及向網站所有者提供信息。Cookie 可能是「會話」Cookie（關閉瀏覽器時刪除）或「持久」Cookie（保留直到過期或被刪除）。",
    ar: "ملفات تعريف الارتباط هي ملفات نصية صغيرة توضع على جهازك عند زيارتك لموقع إلكتروني. تُستخدم على نطاق واسع لجعل المواقع الإلكترونية تعمل بكفاءة أكبر، وكذلك لتوفير معلومات لأصحاب المواقع. قد تكون ملفات تعريف الارتباط \"جلسة\" (تُحذف عند إغلاق المتصفح) أو \"دائمة\" (تبقى حتى تنتهي صلاحيتها أو تُحذف).",
  },
  "cookies.types.title": {
    en: "Types of Cookies We Use",
    "zh-CN": "我们使用的 Cookie 类型",
    "zh-TW": "我們使用的 Cookie 類型",
    ar: "أنواع ملفات تعريف الارتباط التي نستخدمها",
  },
  "cookies.types.text": {
    en: "Essential Cookies: These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You may disable these by changing your browser settings, but this may affect how the website functions.\n\nAnalytics Cookies: These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.\n\nFunctional Cookies: These cookies enable the website to provide enhanced functionality and personalization, such as remembering your language preference.",
    "zh-CN": "必要 Cookie：这些 Cookie 是网站正常运行所必需的。它们支持核心功能，如安全、网络管理和可访问性。您可以通过更改浏览器设置禁用这些 Cookie，但这可能会影响网站的功能。\n\n分析 Cookie：这些 Cookie 使我们能够统计访问量和流量来源，以便我们衡量和改进网站的性能。它们帮助我们了解哪些页面最受欢迎和最少受欢迎，并查看访客如何在网站上移动。\n\n功能 Cookie：这些 Cookie 使网站能够提供增强的功能和个性化，例如记住您的语言偏好。",
    "zh-TW": "必要 Cookie：這些 Cookie 是網站正常運行所必需的。它們支持核心功能，如安全、網絡管理和可訪問性。您可以通過更改瀏覽器設置禁用這些 Cookie，但這可能會影響網站的功能。\n\n分析 Cookie：這些 Cookie 使我們能夠統計訪問量和流量來源，以便我們衡量和改進網站性能。它們幫助我們了解哪些頁面最受歡迎和最少受歡迎，並查看訪客如何在網站上移動。\n\n功能 Cookie：這些 Cookie 使網站能夠提供增強的功能和個性化，例如記住您的語言偏好。",
    ar: "ملفات تعريف الارتباط الأساسية: هذه الملفات ضرورية لعمل الموقع الإلكتروني بشكل صحيح. تمكن الوظائف الأساسية مثل الأمان وإدارة الشبكة وإمكانية الوصول. يمكنك تعطيلها عن طريق تغيير إعدادات المتصفح، لكن هذا قد يؤثر على كيفية عمل الموقع.\n\nملفات تعريف الارتباط التحليلية: تسمح لنا هذه الملفات بإحصاء الزيارات ومصادر الزيارات حتى نتمكن من قياس وتحسين أداء موقعنا. تساعدنا في معرفة الصفحات الأكثر والأقل شعبية ورؤية كيفية تنقل الزوار في الموقع.\n\nملفات تعريف الارتباط الوظيفية: تمكن هذه الملفات الموقع الإلكتروني من توفير وظائف محسنة وتخصيص، مثل تذكر تفضيل اللغة الخاص بك.",
  },
  "cookies.control.title": {
    en: "Managing Cookies",
    "zh-CN": "管理 Cookie",
    "zh-TW": "管理 Cookie",
    ar: "إدارة ملفات تعريف الارتباط",
  },
  "cookies.control.text": {
    en: "Most web browsers allow you to control cookies through their settings preferences. You can set your browser to block or alert you about these cookies, but some parts of the site may not work as a result. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.allaboutcookies.org.",
    "zh-CN": "大多数网络浏览器允许您通过其设置偏好来控制 Cookie。您可以将浏览器设置为阻止或提醒您这些 Cookie，但网站的某些部分可能因此无法正常工作。要了解更多关于 Cookie 的信息，包括如何查看已设置的 Cookie 以及如何管理和删除它们，请访问 www.allaboutcookies.org。",
    "zh-TW": "大多數網絡瀏覽器允許您通過其設置偏好來控制 Cookie。您可以將瀏覽器設置為阻止或提醒您這些 Cookie，但網站的某些部分可能因此無法正常工作。要了解更多關於 Cookie 的信息，包括如何查看已設置的 Cookie 以及如何管理和刪除它們，請訪問 www.allaboutcookies.org。",
    ar: "تسمح لك معظم متصفحات الويب بالتحكم في ملفات تعريف الارتباط من خلال تفضيلات الإعدادات. يمكنك ضبط متصفحك لحظر أو تنبيهك بشأن ملفات تعريف الارتباط هذه، ولكن قد لا تعمل بعض أجزاء الموقع نتيجة لذلك. لمعرفة المزيد عن ملفات تعريف الارتباط، بما في ذلك كيفية رؤية ملفات تعريف الارتباط التي تم تعيينها وكيفية إدارتها وحذفها، قم بزيارة www.allaboutcookies.org.",
  },
};

// Helper: get translation
export function tr(key: string, lang: Lang): string {
  if (key in t) {
    return t[key][lang] ?? t[key]["en"] ?? key;
  }
  return key;
}

// Get HTML dir attribute
export function getDir(lang: Lang): "ltr" | "rtl" {
  return RTL_LANGS.includes(lang) ? "rtl" : "ltr";
}
