window.MojoI18N = window.MojoI18N || {};
window.MojoI18N.ar = {
  "nav.home": "الصفحة الرئيسية",
  "nav.features": "الخصائص",
  "nav.news": "الإصدارات",
  "nav.download": "تنزيل",
  "nav.components": "مكونات",
  "hero.title": "Minecraft, في أي مكان، في أي وقت.",
  "hero.lede": "موجو لانشر (MojoLauncher) هو مشغّل مفتوح المصدر للعبة ماينكرافت: إصدار الكمبيوتر لأجهزة الأندرويد.",
  "hero.download": "تنزيل",
  "hero.learn": "معرفة المزيد",

  "features.title": "لماذا موجو لانشر هو الخيار الأفضل؟",
  "features.subtitle": "تعرّف على الميزات المتقدمة للمُشغِّل",
  "features.card1.title": "التحكم الكامل",
  "features.card1.body": "خصص المشغل بسهولة باستخدام أزرار تحكم متقدمة على الشاشة، وخيارات لضبط الأداء، ومجموعة متنوعة من برامج تشغيل OpenGL وطبقات الترجمة لمحركات العرض",
  "features.card2.title": "متوافق مع العديد من المودات",
  "features.card2.body": "حزم المودات ومحركات المودات المفضلة لديك - سهلة التثبيت. المشغل متوافق مع معظم مودات ماينكرافت",
  "features.card3.title": "متوافق مع النسخ المستقلة",
  "features.card3.body": "فصل بيانات اللعبة تلقائياً للتثبيتات المعدلة - لا داعي لخلط المجلدات المخصصة أو التنقل بينها.",

  "news.title": "الإصدارات الأخيرة",
  "news.subtitle": "أحدث الإصدارات المنشورة على GitHub.",
  "news.loading": "...جاري تحميل الإصدارات\u2026",
  "news.error": "تعذر تحميل الإصدارات حالياً.",
  "news.noReleases": "لا توجد إصدارات منشورة بعد.",
  "news.viewAll": "عرض جميع الإصدارات على GitHub",
  "news.prerelease": "الإصدارات التجريبية",

  "download.title": "تنزيل MojoLauncher",
  "download.subtitle": "احصل على المشغّل لأجهزة أندرويد. الإصدارات المستقرة متوفرة على متجر جوجل بلاي، بينما إصدارات البيتا متوفرة على GitHub.",
  "download.nightly": "إصدار البيتا",
  "download.nightlyWarning": "تُحدَّث إصدارات البيتا بشكل متكرر، وتحتوي على ميزات تجريبية قد تواجه فيها أخطاء برمجية جسيمة تؤثر على عمل اللعبة. استخدمها فقط إذا كنت على دراية بما تقوم به.",
  "play.src": "assets/badges/google-play-en.webp",
  "play.alt": "احصل عليه على Google Play",
  "components.title": "المكونات",
  "components.subtitle": "يتم تجميع MojoLauncher من مكونات مفتوحة المصدر، و يتم صيانة معظمها من قبل مجموعة مطوري MojoLauncher.",

  "components.ltw.title": "LTW - Large Thin Wrapper",
  "components.ltw.body": "مترجم رسوميات خفيف من OpenGL إلى OpenGL ES 3 يطبق جزئياً واجهة OpenGL 3.3 Core، ويتميز بتوافقية عالية مع العديد من شيدرز (Shaders) مع تقديم أداء ممتاز",
  "components.ltw.link": "عرض LTW على GitHub",

  "components.gl4es.title": "GL4ES",
  "components.gl4es.body": "مترجم كفء للغاية من OpenGL إلى OpenGL ES 2 مع دعم للبُنية الأساسية ثابتة الوظائف تتضمن نسخة GL4ES المُعدّلة, توافق أكبر مع الشيدرز (Shaders) ودعماً كبيراً للمودز.",
  "components.gl4es.link": "عرض Holy GL4ES على GitHub",

  "components.mojoexec.title": "MojoExec",
  "components.mojoexec.body": "مكتبة أدوات مخصصة تُنَفِّذ تحميل مشغلات (Drivers) Vulkan و OpenGL.",
  "components.mojoexec.link": "عرض MojoExec على GitHub",

  "components.sdl.title": "SDL / GLFW",
  "components.sdl.body": "واجهتان خلفيتان (backends) قابلتان للتبديل لإدارة النوافذ والإدخال. كلتاهما تنشئ نافذة اللعبة وتتعامل مع إدخال لوحة المفاتيح والماوس وذراع التحكم (gamepad)، ويختار الـ launcher بين SDL3 وGLFW حسب متطلبات اللعبة",
  "components.sdl.note": "كلٌّ من SDL3 وGLFW يتم الحفاظ عليه كـ fork معدَّل ليناسب تشغيل تطبيقات سطح المكتب داخل MojoLauncher.",

  "components.openjdk.title": "OpenJDK",
  "components.openjdk.body": "بيئة تشغيل Java (Java runtime) التي تشغّل اللعبة. إصدارات MojoLauncher من OpenJDK مبنية لجميع معماريات Android الرئيسية، وتتضمن تعديلات (patches) لضمان استقرار الاتصال بالشبكة، وواجهة AWT الرسومية بدون الاعتماد على X11، وإصلاحات لمشاكل Android الخاصة.",
  "components.openjdk.link": "إصدارات OpenJDK المبنية",

  "components.mesa.title": "Mesa 3D",
  "components.mesa.body": "نسخة (fork) من مشروع Mesa 3D مع تعديلات (patches) إضافية لتحسين التوافق مع Turnip، ودعم Android EGL لكلٍّ من Kopper وFreedreno (Gallium) على KGSL.",
  "components.mesa.note": "بسبب إساءة الاستخدام من أطراف خارجية، لم تعد نسخة الـ fork متاحة للعامة",
  "components.mesa.link": "صفحة مشروع Mesa الأصلية",

  "menu.language": "اللغة",
  "menu.community": "المجتمع",

  "outro.title": "جاهز عندما تكون جاهزاً",
  "outro.body": "حَمِّل والعب فوراً",
  "outro.play": "العب",
 
  "footer.docs": "التوثيق",
  "footer.privacy": "الخصوصية",
  "footer.source": "المصدر",
  "footer.copy": "\u00a9 2026 MojoLauncher"
};
