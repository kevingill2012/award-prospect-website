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
    en: "End-to-end cross-border procurement — from overseas sourcing and international logistics to bonded warehousing and last-mile delivery. Hong Kong is our hub; Asia is our market. Every product comes with complete documentation and full traceability.",
    "zh-CN": "端到端跨境采购——从海外寻源、国际物流、保税仓储到最后一公里配送。香港为枢纽，亚洲为市场。每件商品都有据可查、有源可溯。",
    "zh-TW": "端到端跨境採購——從海外尋源、國際物流、保稅倉儲到最後一公里配送。香港為樞紐，亞洲為市場。每件商品都有據可查、有源可溯。",
    ar: "مشتريات شاملة عبر الحدود — من التوريد من المتاجر العالمية والخدمات اللوجستية الدولية والتخليص الجمركي إلى التسليم النهائي في الصين. نساعد العلامات التجارية العالمية المتميزة في دخول المنصات الصينية الرائدة — بتوثيق كامل وإمكانية تتبع شاملة.",
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
    en: "Founded in 2019 and headquartered in Hong Kong, Award Prospect Limited was built by seasoned foreign trade and cross-border logistics professionals who saw a better way to move goods across borders.\n\nWe source from department store counters, duty-free shops, and official designated distributors worldwide — no grey market, no shortcuts. Every order comes with a complete chain of brand authorization and procurement records, fully traceable from source to delivery. Our sourcing team has deep expertise across ANZ, Japan, Korea, Europe, and North American markets, with intimate knowledge of local retail channels and distributor networks, ensuring we can source authentic products at competitive prices, with supply you can depend on.\n\nFrom ANZ health products to European and Asian beauty, from mother-and-baby to personal care, we have delivered over 700,000 units of authentic goods to leading cross-border e-commerce platforms and distributors across Asia. Hong Kong is our free-port hub — goods flow in from the world's best sources, and out to buyers across mainland China, Southeast Asia, the Middle East, and beyond. Whether you're an e-commerce platform, a brick-and-mortar retailer, or a wholesale distributor — every item comes with complete documentation, so you sell with confidence and your customers buy with peace of mind.",
    "zh-CN": "澳華發展有限公司于2019年成立于香港，由资深外贸人和跨境物流专家创立。我们看到了跨境贸易更好的方式——不走灰色渠道、不抄近路。\n\n我们从世界各地的百货商店柜台、免税店及其官方指定经销商采购，每一笔订单均可提供完整的品牌授权链和采购凭证，从源头到交付全程可追溯。我们的采购团队深耕澳新、日韩、欧洲及北美市场，熟悉各地零售渠道与经销商网络，能以合理价格稳定获取正品货源。\n\n从澳新保健品到欧美日韩美妆，从母婴用品到个人护理，我们已为亚洲各大跨境电商平台和海外经销商稳定交付超过70万件正品。香港作为自由贸易港，是我们连接全球货源与亚洲买家的核心枢纽——全球好货汇聚香港，再从香港发往中国内地、东南亚、中东乃至更远的市场。无论您是电商平台、线下零售商还是批发经销商，每一件商品都附带完整链路文件，让您卖得放心，终端消费者买得安心。",
    "zh-TW": "澳華發展有限公司於2019年成立於香港，由資深外貿人和跨境物流專家創立。我們看到了跨境貿易更好的方式——不走灰色渠道、不抄近路。\n\n我們從世界各地的百貨商店櫃檯、免稅店及其官方指定經銷商採購，每一筆訂單均可提供完整的品牌授權鏈和採購憑證，從源頭到交付全程可追溯。我們的採購團隊深耕澳新、日韓、歐洲及北美市場，熟悉各地零售渠道與經銷商網絡，能以合理價格穩定獲取正品貨源。\n\n從澳新保健品到歐美日韓美妝，從母嬰用品到個人護理，我們已為亞洲各大跨境電商平台和海外經銷商穩定交付超過70萬件正品。香港作為自由貿易港，是我們連接全球貨源與亞洲買家的核心樞紐——全球好貨匯聚香港，再從香港發往中國內地、東南亞、中東乃至更遠的市場。無論您是電商平台、線下零售商還是批發經銷商，每一件商品都附帶完整鏈路文件，讓您賣得放心，終端消費者買得安心。",
    ar: "تأسست شركة Award Prospect Limited في عام 2019 ومقرها هونغ كونغ، وقد بناها محترفون متمرسون في التجارة الخارجية والخدمات اللوجستية العابرة للحدود الذين رأوا طريقة أفضل لنقل البضائع عبر الحدود.\n\nنحن نورد من عدادات المتاجر الكبرى والأسواق الحرة والموزعين الرسميين المعتمدين في جميع أنحاء العالم — لا سوق رمادية، لا اختصارات. يأتي كل طلب بسلسلة كاملة من تفويض العلامة التجارية وسجلات الشراء، قابلة للتتبع بالكامل من المصدر إلى التسليم. يتمتع فريق التوريد لدينا بخبرة عميقة في أسواق أستراليا ونيوزيلندا واليابان وكوريا وأوروبا وأمريكا الشمالية، مع معرفة وثيقة بقنوات البيع بالتجزئة المحلية وشبكات الموزعين، مما يمكننا من تأمين منتجات أصلية بأسعار تنافسية مع إمدادات موثوقة.\n\nمن المنتجات الصحية الأسترالية والنيوزيلندية إلى مستحضرات التجميل الأوروبية والآسيوية، ومن منتجات الأم والطفل إلى العناية الشخصية، قمنا بتسليم أكثر من 700,000 وحدة من السلع الأصلية لمنصات التجارة الإلكترونية الرائدة عبر الحدود والموزعين في جميع أنحاء آسيا. كل قطعة تأتي مع وثائق كاملة — ليبع شركاؤنا بثقة ويشتري عملاؤهم براحة بال.",
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
    en: "700K+",
    "zh-CN": "70万+",
    "zh-TW": "70萬+",
    ar: "+700K",
  },
  "about.stat2.label": {
    en: "Delivered",
    "zh-CN": "累计交付",
    "zh-TW": "累計交付",
    ar: "تم تسليمه",
  },
  "about.stat2.sub": {
    en: "Authentic cross-border units delivered",
    "zh-CN": "跨境正品累计交付件数",
    "zh-TW": "跨境正品累計交付件數",
    ar: "الوحدات الأصلية المسلمة عبر الحدود",
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
    en: "Trusted by leading brands, platforms & distributors",
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
    en: "We don't just find products — we build complete procurement pipelines, from supplier vetting and price negotiation to quality inspection and delivery.",
    "zh-CN": "我们不只找产品——我们帮你建立完整采购链路，从选品、比价、验货到交付，每一步都有人把关。",
    "zh-TW": "我們不只找產品——我們幫你建立完整採購鏈路，從選品、比價、驗貨到交付，每一步都有人把關。",
    ar: "نحن لا نجد المنتجات فقط — نبني خطوط مشتريات كاملة، من فحص الموردين والتفاوض على الأسعار إلى فحص الجودة والتسليم.",
  },
  "cap.1.p1": {
    en: "Direct from department store counters, duty-free shops & brand-appointed distributors — no grey market, no unknown sources",
    "zh-CN": "从百货专柜、免税店及品牌官方指定经销商直接采购，拒绝水货和来路不明的货源",
    "zh-TW": "從百貨專櫃、免稅店及品牌官方指定經銷商直接採購，拒絕水貨和來路不明的貨源",
    ar: "مباشرة من عدادات المتاجر الكبرى والأسواق الحرة والموزعين المعتمدين من العلامات التجارية — لا واردات موازية، لا سوق رمادية",
  },
  "cap.1.p2": {
    en: "Complete documentation per order: brand authorization letters, procurement receipts, logistics records — traceable to source",
    "zh-CN": "每笔订单提供完整文件链：品牌授权书、采购凭证、物流记录——可追溯至源头",
    "zh-TW": "每筆訂單提供完整文件鏈：品牌授權書、採購憑證、物流記錄——可追溯至源頭",
    ar: "توثيق كامل لكل طلب: خطابات تفويض العلامة التجارية، إيصالات الشراء، شهادات المنشأ، سجلات الخدمات اللوجستية — قابلة للتتبع حتى المصدر",
  },
  "cap.1.p3": {
    en: "Four core categories — health & nutrition, beauty & skincare, personal care, mother & baby — each with dedicated sourcing specialists",
    "zh-CN": "覆盖保健营养、美妆护肤、个人护理、母婴用品四大品类，每个品类有专属采购专家",
    "zh-TW": "覆蓋保健營養、美妝護膚、個人護理、母嬰用品四大品類，每個品類有專屬採購專家",
    ar: "أربع فئات أساسية — الصحة والتغذية، الجمال والعناية بالبشرة، العناية الشخصية، الأم والطفل — لكل منها أخصائيو توريد مخصصون",
  },
  "cap.1.footer": {
    en: "Every product comes with a complete paper trail — so you know exactly where it came from.",
    "zh-CN": "每件产品附带完整溯源文件——从哪里买的、谁授权的、怎么运的，一目了然。",
    "zh-TW": "每件產品附帶完整溯源文件——從哪裡買的、誰授權的、怎麼運的，一目了然。",
    ar: "كل منتج يأتي بسجل ورقي كامل — لتعرف بالضبط من أين أتى.",
  },
  "cap.2.title": {
    en: "Logistics & Warehousing",
    "zh-CN": "物流与仓储",
    "zh-TW": "物流與倉儲",
    ar: "الخدمات اللوجستية والتخزين",
  },
  "cap.2.tagline": {
    en: "From overseas sourcing to global delivery — we handle logistics and warehousing end-to-end. Hong Kong is our hub; the world is our delivery zone.",
    "zh-CN": "从海外寻源到全球发货，物流仓储一手包办。香港为枢纽，发往世界各地。",
    "zh-TW": "從海外尋源到全球發貨，物流倉儲一手包辦。香港為樞紐，發往世界各地。",
    ar: "من التوريد الخارجي إلى التسليم العالمي — نتولى الخدمات اللوجستية والتخزين من البداية إلى النهاية. هونغ كونغ هي مركزنا؛ العالم هو منطقة التسليم لدينا.",
  },
  "cap.2.p1": {
    en: "Self-operated climate-controlled warehouse in Hong Kong — meets strict temperature & humidity requirements for health products and cosmetics",
    "zh-CN": "香港自营恒温仓库，满足保健品、美妆等对温湿度有严格要求的品类存储需求",
    "zh-TW": "香港自營恆溫倉庫，滿足保健品、美妝等對溫濕度有嚴格要求的品類存儲需求",
    ar: "مستودع ذاتي التشغيل متحكم بمناخه في هونغ كونغ — يلبي متطلبات درجة الحرارة والرطوبة الصارمة للمنتجات الصحية ومستحضرات التجميل",
  },
  "cap.2.p2": {
    en: "Hong Kong free-port re-export — goods flow in and out without tariff friction, shipped directly to buyers across Asia, the Middle East, and beyond",
    "zh-CN": "香港自由港转口——货物进出零关税摩擦，直发亚洲各地、中东及其他海外市场",
    "zh-TW": "香港自由港轉口——貨物進出零關稅摩擦，直發亞洲各地、中東及其他海外市場",
    ar: "إعادة التصدير من ميناء هونغ كونغ الحر — البضائع تتدفق داخلاً وخارجاً دون احتكاك جمركي، وتشحن مباشرة إلى المشترين في جميع أنحاء آسيا والشرق الأوسط وما وراءهما",
  },
  "cap.2.p3": {
    en: "End-to-end logistics tracking — every node from overseas pickup to final delivery, visible in real time, wherever the destination",
    "zh-CN": "全程物流追踪系统，从海外提货到最终交付，无论目的地在哪里，每个节点实时可见",
    "zh-TW": "全程物流追蹤系統，從海外提貨到最終交付，無論目的地在哪裡，每個節點實時可見",
    ar: "تتبع لوجستي شامل — كل عقدة من الاستلام الخارجي إلى التسليم النهائي، مرئية في الوقت الفعلي، أينما كانت الوجهة",
  },
  "cap.2.p4": {
    en: "Multi-modal freight — sea, air, and land — flexible combinations optimized for volume, speed, and cost",
    "zh-CN": "整合海运、空运、陆运多种运输方式，根据货量、时效和成本灵活组合最优方案",
    "zh-TW": "整合海運、空運、陸運多種運輸方式，根據貨量、時效和成本靈活組合最優方案",
    ar: "شحن متعدد الوسائط — بحري وجوي وبري — تركيبات مرنة محسنة للحجم والسرعة والتكلفة",
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
    en: "We don't just move boxes — we connect products to buyers. From cross-border e-commerce platforms to wholesale distributors across Asia and the Middle East, we get your goods to the right channel.",
    "zh-CN": "不只是运货——我们把货卖到对的人手里。从跨境电商平台到亚洲、中东的批发经销商，我们帮你把货铺到正确的渠道。",
    "zh-TW": "不只是運貨——我們把貨賣到對的人手裡。從跨境電商平台到亞洲、中東的批發經銷商，我們幫你把貨鋪到正確的渠道。",
    ar: "نحن لا ننقل الصناديق فقط — نوصل المنتجات إلى المشترين. من منصات التجارة الإلكترونية عبر الحدود إلى الموزعين بالجملة في آسيا والشرق الأوسط، نوصل بضائعك إلى القناة الصحيحة.",
  },
  "cap.3.p1": {
    en: "China cross-border platforms — Tmall Global, Suning International, Pinduoduo — deep partnerships, full onboarding & operations support",
    "zh-CN": "中国跨境平台——天猫国际、苏宁国际、拼多多——深度合作，入驻+运营全程支持",
    "zh-TW": "中國跨境平台——天貓國際、蘇寧國際、拼多多——深度合作，入駐+運營全程支持",
    ar: "منصات التجارة الإلكترونية الصينية عبر الحدود — Tmall Global وSuning International وPinduoduo — شراكات عميقة ودعم كامل للتسجيل والعمليات",
  },
  "cap.3.p2": {
    en: "Overseas wholesale distribution — supplying distributors and retailers across Southeast Asia, the Middle East, and beyond from our Hong Kong hub",
    "zh-CN": "海外批发分销——以香港为枢纽，向东南亚、中东等地的经销商和零售商供应正品货源",
    "zh-TW": "海外批發分銷——以香港為樞紐，向東南亞、中東等地的經銷商和零售商供應正品貨源",
    ar: "التوزيع بالجملة الخارجي — توريد الموزعين وتجار التجزئة في جنوب شرق آسيا والشرق الأوسط وخارجها من مركزنا في هونغ كونغ",
  },
  "cap.3.p3": {
    en: "Channel-specific strategy — different markets demand different approaches; we tailor product selection, pricing, and route-to-market for each channel",
    "zh-CN": "差异化渠道策略——不同市场需要不同打法，我们为每个渠道定制选品、定价和入市路径",
    "zh-TW": "差異化渠道策略——不同市場需要不同打法，我們為每個渠道定製選品、定價和入市路徑",
    ar: "استراتيجية خاصة بكل قناة — الأسواق المختلفة تتطلب نهجًا مختلفًا؛ نخصص اختيار المنتجات والتسعير ومسار الوصول إلى السوق لكل قناة",
  },
  "cap.3.p4": {
    en: "Market intelligence across Asia & the Middle East — ongoing consumer trend tracking and competitive analysis to guide your channel decisions",
    "zh-CN": "覆盖亚洲及中东的市场情报——持续跟踪消费趋势和竞品动态，为你的渠道决策提供数据支撑",
    "zh-TW": "覆蓋亞洲及中東的市場情報——持續跟踪消費趨勢和競品動態，為你的渠道決策提供數據支撐",
    ar: "استخبارات السوق عبر آسيا والشرق الأوسط — تتبع مستمر لاتجاهات المستهلكين وتحليل تنافسي لتوجيه قرارات القناة الخاصة بك",
  },
  "cap.3.footer": {
    en: "Your products, in front of the right buyers, through the right channels — wherever they are.",
    "zh-CN": "你的产品，通过正确的渠道，到达正确的买家——无论他们在哪里。",
    "zh-TW": "你的產品，通過正確的渠道，到達正確的買家——無論他們在哪裡。",
    ar: "منتجاتكم، أمام المشترين المناسبين، عبر القنوات المناسبة — أينما كانوا.",
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
    "zh-CN": "数字会说话。以下是我们与众不同的地方。",
    "zh-TW": "數字會說話。以下是我們與眾不同的地方。",
    ar: "الأرقام لا تكذب. إليك ما يميزنا.",
  },
  "why.m1.label": {
    en: "Units delivered",
    "zh-CN": "累计交付件数",
    "zh-TW": "累計交付件數",
    ar: "الوحدات المسلمة",
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
    en: "Every product we procure comes directly from department store counters, duty-free shops, or brand-appointed distributors — never grey-market or undocumented goods. Every shipment includes complete brand authorization documents and procurement records, fully traceable from source to delivery.",
    "zh-CN": "我们采购的每一件商品，都直接来自百货专柜、免税店或品牌官方指定经销商——绝非水货或来源不明的货品。每批货物均附带完整的品牌授权文件和采购凭证，确保从源头到交付全程可追溯。",
    "zh-TW": "我們採購的每一件商品，都直接來自百貨專櫃、免稅店或品牌官方指定經銷商——絕非水貨或來源不明的貨品。每批貨物均附帶完整的品牌授權文件和採購憑證，確保從源頭到交付全程可追溯。",
    ar: "كل منتج نشتريه يأتي مباشرة من عدادات المتاجر الكبرى أو الأسواق الحرة أو الموزعين المعتمدين من العلامات التجارية — لا واردات موازية أو سلع سوق رمادية غير موثقة أبدًا. كل شحنة تتضمن وثائق تفويض كاملة للعلامة التجارية وسجلات شراء، قابلة للتتبع بالكامل من المصدر إلى التسليم.",
  },
  "why.b2.title": {
    en: "Compliance First",
    "zh-CN": "合规优先",
    "zh-TW": "合規優先",
    ar: "الامتثال أولاً",
  },
  "why.b2.text": {
    en: "Cross-border trade involves customs, inspection, and taxation across multiple jurisdictions. Our compliance team knows the regulatory requirements of Hong Kong, mainland China, and key source countries. Every shipment includes complete clearance and compliance documentation — ensuring smooth customs and lawful sales across every border.",
    "zh-CN": "跨境贸易涉及海关、商检、税务等多个监管环节。我们的合规团队熟悉香港、中国内地及主要货源国的法规要求，为每批货物准备齐全的清关和合规文件，确保每一道关都顺利通过、销售合法合规。",
    "zh-TW": "跨境貿易涉及海關、商檢、稅務等多個監管環節。我們的合規團隊熟悉香港、中國內地及主要貨源國的法規要求，為每批貨物準備齊全的清關和合規文件，確保每一道關都順利通過、銷售合法合規。",
    ar: "تتضمن التجارة عبر الحدود الجمارك والتفتيش والضرائب. يعرف فريق الامتثال لدينا اللوائح عن ظهر قلب — في الصين ودول المصدر الرئيسية. كل شحنة تتضمن وثائق تخليص كاملة: شهادات المنشأ، تقارير الفحص الصحي، شهادات اختبار المكونات — لضمان جمارك سلسة ومبيعات قانونية.",
  },
  "why.b3.title": {
    en: "Team You Can Trust",
    "zh-CN": "值得信赖的团队",
    "zh-TW": "值得信賴的團隊",
    ar: "فريق يمكنك الوثوق به",
  },
  "why.b3.text": {
    en: "Our founding team has 10+ years on the front lines of cross-border trade. We've built stable local sourcing networks across ANZ, Japan, Korea, Europe, and North America — combining big-company professionalism with the agility of a focused team. Clients deal with one team, not a chain of middlemen.",
    "zh-CN": "创始团队来自跨境贸易一线，平均从业经验超过十年。我们在澳新、日韩、欧洲和北美建立了稳定的本地采购网络，既有大公司的专业素养，也有小团队的灵活高效。客户不需要对接多个中间商——我们一个团队解决全链路。",
    "zh-TW": "創始團隊來自跨境貿易一線，平均從業經驗超過十年。我們在澳新、日韓、歐洲和北美建立了穩定的本地採購網絡，既有大公司的專業素養，也有小團隊的靈活高效。客戶不需要對接多個中間商——我們一個團隊解決全鏈路。",
    ar: "فريقنا المؤسس لديه أكثر من 10 سنوات في الخطوط الأمامية للتجارة عبر الحدود. بنينا شبكات توريد محلية مستقرة عبر أستراليا ونيوزيلندا واليابان وكوريا وأوروبا وأمريكا الشمالية — نجمع بين احترافية الشركات الكبرى ومرونة الفريق المركز. يتعامل العملاء مع فريق واحد، وليس سلسلة من الوسطاء.",
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
    en: "Award Prospect Limited formally established in Kowloon Bay, Hong Kong. Leveraging the founding team's existing networks in foreign trade and logistics, we quickly entered the cross-border procurement space. Initial focus: Australian and New Zealand health & nutrition brands — A2, Swisse, Blackmores, Bio Islands — supplying major Chinese e-commerce platforms with authentic, documented goods. First-year procurement reached HKD 7M, validating the business model.",
    "zh-CN": "澳華發展有限公司在香港九龙湾正式成立。创始团队凭借此前在外贸和物流领域积累的资源和经验，迅速切入跨境采购赛道。起步阶段聚焦澳大利亚和新西兰的保健营养品类，成功为国内电商平台稳定供应A2、Swisse、Blackmores、Bio Islands等知名品牌。首年完成采购额700万港币，验证了商业模式的可行性。",
    "zh-TW": "澳華發展有限公司在香港九龍灣正式成立。創始團隊憑藉此前在外貿和物流領域積累的資源和經驗，迅速切入跨境採購賽道。起步階段聚焦澳大利亞和新西蘭的保健營養品類，成功為國內電商平台穩定供應A2、Swisse、Blackmores、Bio Islands等知名品牌。首年完成採購額700萬港幣，驗證了商業模式的可行性。",
    ar: "تأسست Award Prospect Limited رسميًا في خليج كولون، هونغ كونغ. بالاستفادة من شبكات الفريق المؤسس الحالية في التجارة الخارجية والخدمات اللوجستية، دخلنا بسرعة مجال المشتريات عبر الحدود. التركيز الأولي: العلامات التجارية الصحية والغذائية الأسترالية والنيوزيلندية — A2، Swisse، Blackmores، Bio Islands — لتوريد منصات التجارة الإلكترونية الصينية الرئيسية بسلع أصلية موثقة. بلغت مشتريات السنة الأولى 7 مليون دولار هونغ كونغي، مما أثبت صحة نموذج العمل.",
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
    en: "As ANZ health product competition intensified, we made a strategic pivot into beauty and skincare. Leveraging our procurement capabilities across department store counters and duty-free channels, we scaled rapidly — HKD 41M in procurement within 14 months, covering premium international brands including Estée Lauder, La Mer, Bioderma, Dior, and Shiseido. Monthly procurement stabilized above HKD 3M.",
    "zh-CN": "澳新保健品市场竞争加剧，团队果断将业务重心扩展至美妆护肤品类。凭借在百货专柜和免税店渠道的采购能力，14个月内累计采购额达4100万港币，品牌矩阵覆盖雅诗兰黛、海蓝之谜、贝德玛、迪奥、资生堂等国际一线品牌，月均采购额稳定在300万港币以上。",
    "zh-TW": "澳新保健品市場競爭加劇，團隊果斷將業務重心擴展至美妝護膚品類。憑藉在百貨專櫃和免稅店渠道的採購能力，14個月內累計採購額達4100萬港幣，品牌矩陣覆蓋雅詩蘭黛、海藍之謎、貝德瑪、迪奧、資生堂等國際一線品牌，月均採購額穩定在300萬港幣以上。",
    ar: "مع اشتداد المنافسة في المنتجات الصحية الأسترالية والنيوزيلندية، قمنا بتحول استراتيجي إلى مجال الجمال والعناية بالبشرة. بالاستفادة من قدراتنا في المشتريات عبر عدادات المتاجر الكبرى وقنوات الأسواق الحرة، توسعنا بسرعة — 41 مليون دولار هونغ كونغي في المشتريات خلال 14 شهرًا، لتشمل علامات تجارية دولية متميزة بما في ذلك Estée Lauder و La Mer و Bioderma و Dior و Shiseido. استقرت المشتريات الشهرية فوق 3 مليون دولار هونغ كونغي.",
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
    en: "Signed multi-year strategic agreements with multiple core brands and distributors, securing preferential pricing and stable quota allocations. Distribution reach expanded to cover all major Chinese cross-border e-commerce platforms, while building an overseas distributor network spanning Southeast Asia and the Middle East. Built proprietary warehousing and supply chain management systems in Hong Kong — evolving from a pure procurement service provider into an end-to-end supply chain and distribution platform.",
    "zh-CN": "与多家核心品牌和经销商签订多年战略合作协议，获得更优的采购价格和稳定的配额保障。中国跨境平台渠道全面覆盖的同時，開始構建覆盖东南亚和中东的海外经销商网络。在香港自建仓储和供应链管理系统，从单纯的采购服务商升级为端到端供应链与分销平台。",
    "zh-TW": "與多家核心品牌和經銷商簽訂多年戰略合作協議，獲得更優的採購價格和穩定的配額保障。中國跨境平台渠道全面覆蓋的同時，開始構建覆蓋東南亞和中東的海外經銷商網絡。在香港自建倉儲和供應鏈管理系統，從單純的採購服務商升級為端到端供應鏈與分銷平台。",
    ar: "وقعنا اتفاقيات استراتيجية متعددة السنوات مع العديد من العلامات التجارية والموزعين الأساسيين، مما أمن أسعارًا تفضيلية وحصصًا مستقرة. توسع نطاق التوزيع ليشمل جميع منصات التجارة الإلكترونية الصينية الرئيسية عبر الحدود. بنينا أنظمة تخزين وإدارة سلسلة توريد خاصة في هونغ كونغ — متطورين من مزود خدمات مشتريات بحت إلى منصة إدارة سلسلة توريد شاملة.",
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
    en: "Expanding in two directions — sourcing from more origins (adding the Middle East and Southeast Asia to our ANZ, Japan-Korea, Europe, and North America base) and distributing to more destinations (deepening our buyer network across Southeast Asia, the Middle East, and Africa). Hong Kong remains our anchor — goods flow in from the world, and out to the world. Continued investment in digital tools to enhance supply chain efficiency and transparency.",
    "zh-CN": "双向拓展——采购端：在巩固澳新、日韩、欧美基础上，开辟中东、东南亚等新货源市场；分销端：深化东南亚、中东、非洲等地的买家网络，让更多海外经销商通过香港获得优质正品货源。香港始终是核心枢纽——全球货源汇入，再发往全球市场。持续投入数字化工具，用技术提升供应链效率和透明度。",
    "zh-TW": "雙向拓展——採購端：在鞏固澳新、日韓、歐美基礎上，開闢中東、東南亞等新貨源市場；分銷端：深化東南亞、中東、非洲等地的買家網絡，讓更多海外經銷商通過香港獲得優質正品貨源。香港始終是核心樞紐——全球貨源匯入，再發往全球市場。持續投入數字化工具，用技術提升供應鏈效率和透明度。",
    ar: "التوسع في اتجاهين — التوريد من مصادر أكثر (إضافة الشرق الأوسط وجنوب شرق آسيا إلى قاعدتنا في أستراليا ونيوزيلندا واليابان وكوريا وأوروبا وأمريكا الشمالية) والتوزيع إلى وجهات أكثر (تعميق شبكة المشترين لدينا عبر جنوب شرق آسيا والشرق الأوسط وأفريقيا). تبقى هونغ كونغ مرتكزنا — البضائع تتدفق من العالم، وإلى العالم. استثمار مستمر في الأدوات الرقمية لتعزيز كفاءة وشفافية سلسلة التوريد.",
  },

  // ---- Partners ----
  "partners.title": {
    en: "Brands We Work With",
    "zh-CN": "合作品牌",
    "zh-TW": "合作品牌",
    ar: "العلامات التجارية التي نعمل معها",
  },
  "partners.subtitle": {
    en: "Over 50 international brands and tier-1 distributors maintain long-term partnerships with us across health & nutrition, beauty & skincare, personal care, and mother & baby — the four pillars of cross-border e-commerce.",
    "zh-CN": "超过50家国际知名品牌和一级经销商与我们建立了长期稳定的合作关系，涵盖保健营养、美妆护肤、个人护理和母婴用品四大核心品类。",
    "zh-TW": "超過50家國際知名品牌和一級經銷商與我們建立了長期穩定的合作關係，涵蓋保健營養、美妝護膚、個人護理和母嬰用品四大核心品類。",
    ar: "أكثر من 50 علامة تجارية دولية وموزع من الدرجة الأولى يحتفظون بشراكات طويلة الأمد معنا عبر الصحة والتغذية والجمال والعناية بالبشرة والعناية الشخصية والأم والطفل — الركائز الأربع للتجارة الإلكترونية عبر الحدود.",
  },

  // ---- Contact ----
  "contact.title": {
    en: "Let's Talk",
    "zh-CN": "联系洽谈",
    "zh-TW": "聯繫洽談",
    ar: "لنتحدث",
  },
  "contact.subtitle": {
    en: "Whether you're a brand entering Asia, or a distributor seeking quality supply from Hong Kong — we'd love to hear from you. Drop us a message and we'll respond within 24 hours.",
    "zh-CN": "无论您是希望进入亚洲市场的品牌方，还是寻找香港正品货源的海外经销商——欢迎留言，我们会在24小时内回复。",
    "zh-TW": "無論您是希望進入亞洲市場的品牌方，還是尋找香港正品貨源的海外經銷商——歡迎留言，我們會在24小時內回覆。",
    ar: "سواء كنت علامة تجارية تتطلع لدخول آسيا، أو موزعاً يبحث عن إمدادات عالية الجودة من هونغ كونغ — يسعدنا أن نسمع منك. أرسل لنا رسالة وسنرد عليك خلال 24 ساعة.",
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
  "contact.whatsapp.title": {
    en: "Scan to chat on WhatsApp",
    "zh-CN": "扫码 WhatsApp 联系",
    "zh-TW": "掃碼 WhatsApp 聯繫",
    ar: "امسح للدردشة على واتساب",
  },
  "contact.whatsapp.button": {
    en: "Chat on WhatsApp",
    "zh-CN": "WhatsApp 联系",
    "zh-TW": "WhatsApp 聯繫",
    ar: "الدردشة على واتساب",
  },
  "contact.whatsapp.hint": {
    en: "Scan the QR code or click below to reach us directly on WhatsApp.",
    "zh-CN": "扫描二维码或点击下方按钮，直接通过 WhatsApp 联系我们。",
    "zh-TW": "掃描二維碼或點擊下方按鈕，直接通過 WhatsApp 聯繫我們。",
    ar: "امسح رمز الاستجابة السريعة أو انقر أدناه للتواصل معنا مباشرة على واتساب.",
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
    en: "© {year} Award Prospect Limited. All rights reserved.",
    "zh-CN": "© {year} 澳華發展有限公司 版权所有",
    "zh-TW": "© {year} 澳華發展有限公司 版權所有",
    ar: "© {year} Award Prospect Limited. جميع الحقوق محفوظة.",
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
    en: "Depending on your jurisdiction, you may have the right to:\n\n• Access the personal data we hold about you.\n• Request correction of inaccurate data.\n• Request deletion of your personal data.\n• Object to or restrict processing of your data.\n• Data portability.\n\nTo exercise any of these rights, please contact us at info@awardprospect.com.",
    "zh-CN": "根据您所在的司法管辖区，您可能有权：\n\n• 访问我们持有的关于您的个人数据。\n• 要求更正不准确的数据。\n• 要求删除您的个人数据。\n• 反对或限制对您数据的处理。\n• 数据可移植性。\n\n如需行使任何这些权利，请通过 info@awardprospect.com 联系我们。",
    "zh-TW": "根據您所在的司法管轄區，您可能有權：\n\n• 訪問我們持有的關於您的個人數據。\n• 要求更正不準確的數據。\n• 要求刪除您的個人數據。\n• 反對或限制對您數據的處理。\n• 數據可移植性。\n\n如需行使任何這些權利，請通過 info@awardprospect.com 聯繫我們。",
    ar: "حسب اختصاصك القضائي، قد يكون لك الحق في:\n\n• الوصول إلى البيانات الشخصية التي نحتفظ بها عنك.\n• طلب تصحيح البيانات غير الدقيقة.\n• طلب حذف بياناتك الشخصية.\n• الاعتراض على معالجة بياناتك أو تقييدها.\n• قابلية نقل البيانات.\n\nلممارسة أي من هذه الحقوق، يرجى الاتصال بنا على info@awardprospect.com.",
  },
  "privacy.contact.title": {
    en: "Contact Us",
    "zh-CN": "联系我们",
    "zh-TW": "聯繫我們",
    ar: "اتصل بنا",
  },
  "privacy.contact.text": {
    en: "If you have any questions about this Privacy Policy, please contact us at:\n\nAward Prospect Limited\nFlat/Rm 307, Kam Hon Industrial Building\n8 Wang Kwun Road, Kowloon Bay\nHong Kong\n\nEmail: info@awardprospect.com",
    "zh-CN": "如果您对本隐私政策有任何疑问，请通过以下方式联系我们：\n\n澳華發展有限公司\n香港九龙九龙湾宏冠道八号\n金汉工业大厦307室\n\n邮箱：info@awardprospect.com",
    "zh-TW": "如果您對本隱私政策有任何疑問，請通過以下方式聯繫我們：\n\n澳華發展有限公司\n香港九龍九龍灣宏冠道八號\n金漢工業大廈307室\n\n郵箱：info@awardprospect.com",
    ar: "إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على:\n\nAward Prospect Limited\nFlat/Rm 307, Kam Hon Industrial Building\n8 Wang Kwun Road, Kowloon Bay\nHong Kong\n\nالبريد الإلكتروني: info@awardprospect.com",
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
    en: "For questions about these Terms of Service, please contact us at info@awardprospect.com.",
    "zh-CN": "如对本服务条款有疑问，请通过 info@awardprospect.com 联系我们。",
    "zh-TW": "如對本服務條款有疑問，請通過 info@awardprospect.com 聯繫我們。",
    ar: "للأسئلة حول شروط الخدمة هذه، يرجى الاتصال بنا على info@awardprospect.com.",
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
