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
