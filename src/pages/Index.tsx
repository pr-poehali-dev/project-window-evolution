import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "intro", label: "Введение" },
  { id: "chapters", label: "Главы" },
  { id: "history", label: "История" },
  { id: "conclusion", label: "Заключение" },
  { id: "sources", label: "Источники" },
];

const TIMELINE = [
  {
    year: "1985",
    version: "Windows 1.0",
    desc: "Первая графическая оболочка для MS-DOS. Поддержка мыши, перекрывающихся окон и базовых приложений.",
    tag: "Глава 1.1",
  },
  {
    year: "1990",
    version: "Windows 3.x",
    desc: "Расширенная поддержка памяти, улучшенный интерфейс. Начало массового распространения ПК.",
    tag: "Глава 1.1",
  },
  {
    year: "1995",
    version: "Windows 95",
    desc: "Революция: кнопка «Пуск», панель задач, 32-битная архитектура. Подключение к интернету для миллионов пользователей.",
    tag: "Глава 1.2",
  },
  {
    year: "1998",
    version: "Windows 98",
    desc: "Поддержка USB, DVD, глубокая интеграция с Internet Explorer. Расцвет домашних ПК.",
    tag: "Глава 1.2",
  },
  {
    year: "2000",
    version: "Windows 2000",
    desc: "Ядро NT для корпоративного рынка. Высокая стабильность, Active Directory, сетевые возможности.",
    tag: "Глава 1.3",
  },
  {
    year: "2001",
    version: "Windows XP",
    desc: "«Золотой стандарт»: объединение домашней и корпоративной линеек, интерфейс Luna, 12 лет жизни на рынке.",
    tag: "Глава 2.1",
  },
  {
    year: "2007",
    version: "Windows Vista",
    desc: "Интерфейс Aero, UAC, новая система безопасности. Критика за требовательность, но важный технологический шаг.",
    tag: "Глава 2.2",
  },
  {
    year: "2009",
    version: "Windows 7",
    desc: "Оптимизация Vista. Быстрота, стабильность, обновлённая панель задач — один из самых любимых релизов.",
    tag: "Глава 2.2",
  },
  {
    year: "2012",
    version: "Windows 8",
    desc: "Сенсорный Metro-интерфейс, удалена кнопка «Пуск». Неоднозначная реакция аудитории.",
    tag: "Глава 2.3",
  },
  {
    year: "2015",
    version: "Windows 10",
    desc: "Возврат «Пуска», Windows как сервис, Cortana, Edge. Бесплатное обновление для пользователей.",
    tag: "Глава 2.3",
  },
  {
    year: "2021",
    version: "Windows 11",
    desc: "Новый дизайн, центрированный «Пуск», поддержка Android-приложений, глубокая интеграция с облаком Microsoft.",
    tag: "Глава 2.3",
  },
];

const WIN_VERSIONS = [
  { name: "1.0", year: "1985", emoji: "🖥️", color: "#6b8fb4", rating: 2, desc: "Первая оболочка" },
  { name: "3.x", year: "1990", emoji: "💾", color: "#5a7fa8", rating: 3, desc: "Массовый рынок" },
  { name: "95", year: "1995", emoji: "🪟", color: "#1a56db", rating: 5, desc: "Революция!" },
  { name: "98", year: "1998", emoji: "🌐", color: "#1a56db", rating: 4, desc: "Интернет-эра" },
  { name: "XP", year: "2001", emoji: "⭐", color: "#0f2d6b", rating: 5, desc: "Золотой стандарт" },
  { name: "Vista", year: "2007", emoji: "💎", color: "#4a90d9", rating: 2, desc: "Красиво, но тяжело" },
  { name: "7", year: "2009", emoji: "🏆", color: "#0f2d6b", rating: 5, desc: "Народная любовь" },
  { name: "8", year: "2012", emoji: "📱", color: "#2f7cf6", rating: 2, desc: "Сенсорный провал" },
  { name: "10", year: "2015", emoji: "🔧", color: "#1a56db", rating: 4, desc: "Windows как сервис" },
  { name: "11", year: "2021", emoji: "✨", color: "#0f2d6b", rating: 4, desc: "Облачное будущее" },
];

const ERAS = [
  {
    period: "1985–1994",
    title: "Эпоха оболочки",
    subtitle: "Windows 1.0 — 3.x",
    desc: "Windows существовала как надстройка над MS-DOS. Компьютер был экзотикой, интерфейс — экспериментом.",
    icon: "Terminal",
    img: "https://cdn.poehali.dev/projects/400a0c1e-0a40-4b4e-a3b4-a9b1f44279a3/files/a3f84d1c-905b-47bb-829b-88412238aca5.jpg",
    accent: "#6b8fb4",
    versions: ["1.0", "2.0", "3.0", "3.1"],
  },
  {
    period: "1995–2000",
    title: "Домашняя революция",
    subtitle: "Windows 95, 98, ME",
    desc: "Кнопка «Пуск» изменила мир. Компьютеры вошли в каждый дом. Интернет стал массовым явлением.",
    icon: "Home",
    img: "https://cdn.poehali.dev/projects/400a0c1e-0a40-4b4e-a3b4-a9b1f44279a3/files/16f39c6d-18fb-499b-8cc8-38b7e98db121.jpg",
    accent: "#1a56db",
    versions: ["95", "98", "ME"],
  },
  {
    period: "2001–2014",
    title: "Золотой век",
    subtitle: "XP, Vista, 7",
    desc: "XP объединил всех пользователей. После неудачи Vista Windows 7 стала эталоном на годы вперёд.",
    icon: "Award",
    img: "https://cdn.poehali.dev/projects/400a0c1e-0a40-4b4e-a3b4-a9b1f44279a3/files/a3f84d1c-905b-47bb-829b-88412238aca5.jpg",
    accent: "#0f2d6b",
    versions: ["XP", "Vista", "7"],
  },
  {
    period: "2015–сегодня",
    title: "Облачная эра",
    subtitle: "Windows 10 и 11",
    desc: "Windows превратилась в сервис. Облако, ИИ, универсальность устройств — новая философия Microsoft.",
    icon: "Cloud",
    img: "https://cdn.poehali.dev/projects/400a0c1e-0a40-4b4e-a3b4-a9b1f44279a3/files/5431f96d-3d5b-42ed-b249-e938752616d5.jpg",
    accent: "#2f7cf6",
    versions: ["8", "10", "11"],
  },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_ITEMS.map((n) => document.getElementById(n.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-ibm">
      {/* NAV */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-blue-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="font-golos font-bold text-lg text-blue-deep tracking-tight"
          >
            Windows<span className="text-blue-main">История</span>
          </button>

          <nav className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`nav-link text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-blue-main active"
                    : "text-mid hover:text-blue-main"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2 bg-blue-ice border border-blue-100 rounded-full px-3 py-1.5">
            <div className="w-6 h-6 rounded-full bg-blue-main flex items-center justify-center flex-shrink-0">
              <Icon name="User" size={12} className="text-white" />
            </div>
            <div className="text-xs leading-tight">
              <div className="font-semibold text-blue-deep">Зобнин Глеб</div>
              <div className="text-light-custom">ИС-25-12б</div>
            </div>
          </div>

          <button
            className="md:hidden text-mid"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-blue-100 px-6 py-4 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left text-sm font-medium py-2 border-b border-blue-50 ${
                  activeSection === item.id ? "text-blue-main" : "text-mid"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/10 text-blue-light text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-white/20">
                <Icon name="GraduationCap" size={13} />
                Индивидуальный проект · 25 марта 2026
              </div>

              <h1 className="font-golos text-5xl md:text-6xl font-black text-white leading-tight mb-6">
                История
                <br />
                <span className="text-blue-light">Windows</span>
              </h1>

              <p className="text-blue-100 text-lg leading-relaxed mb-10 font-light">
                От графической оболочки MS-DOS до облачной операционной системы —
                путь длиной в четыре десятилетия, изменивший мир персональных
                компьютеров.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo("intro")}
                  className="bg-white text-blue-main font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
                >
                  Читать проект
                </button>
                <button
                  onClick={() => scrollTo("history")}
                  className="border border-white/40 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-all text-sm"
                >
                  Хронология
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
                {[
                  { val: "40+", label: "лет истории" },
                  { val: "11", label: "версий" },
                  { val: "2", label: "главы" },
                ].map((s) => (
                  <div key={s.val} className="text-center">
                    <div className="font-golos text-2xl font-black text-white">{s.val}</div>
                    <div className="text-blue-300 text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Карточка автора */}
            <div className="flex justify-center md:justify-end">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 w-full max-w-sm">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/15">
                  <div className="w-16 h-16 rounded-2xl bg-blue-main flex items-center justify-center text-3xl shadow-lg">
                    👨‍💻
                  </div>
                  <div>
                    <div className="font-golos font-black text-white text-xl">Зобнин Глеб</div>
                    <div className="text-blue-200 text-sm mt-0.5">Автор проекта</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { icon: "BookOpen", label: "Тип работы", val: "Индивидуальный проект" },
                    { icon: "GraduationCap", label: "Группа", val: "ИС-25-12б" },
                    { icon: "Layers", label: "Глав", val: "2 главы, 6 параграфов" },
                    { icon: "Calendar", label: "Дата", val: "25 марта 2026 г." },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center gap-3 py-2 border-b border-white/10 last:border-0">
                      <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={row.icon} size={13} className="text-blue-light" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-blue-300 text-xs">{row.label}</div>
                        <div className="text-white text-sm font-medium truncate">{row.val}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/15 text-center">
                  <div className="text-blue-200 text-xs">Специальность</div>
                  <div className="text-white font-semibold text-sm mt-1">Информационные системы</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-200 text-xs">
          <span>прокрутите вниз</span>
          <Icon name="ChevronDown" size={18} className="animate-bounce" />
        </div>
      </section>

      {/* INTRO */}
      <section id="intro" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-blue-main text-sm font-semibold uppercase tracking-widest mb-4">
                Введение
              </div>
              <h2 className="font-golos text-4xl md:text-5xl font-black text-blue-deep mb-6 leading-tight">
                Почему Windows
                <br />изменила мир?
              </h2>
              <p className="text-mid leading-relaxed mb-5">
                Операционная система Windows компании Microsoft прошла долгий и
                насыщенный путь от простой графической надстройки над MS-DOS до
                полноценной многофункциональной платформы, объединяющей миллиарды
                пользователей по всему миру.
              </p>
              <p className="text-mid leading-relaxed mb-5">
                Этот проект исследует ключевые этапы эволюции Windows: как
                каждая версия отвечала на вызовы своего времени, какие решения
                оказались революционными, а какие — провальными.
              </p>
              <p className="text-mid leading-relaxed">
                Понимание истории Windows — это понимание истории цифровой
                революции, которая сформировала современную экономику,
                культуру и общество.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: "Monitor",
                  title: "Графический интерфейс",
                  desc: "Windows сделала компьютеры доступными миллионам людей, впервые предложив интуитивный GUI.",
                },
                {
                  icon: "Shield",
                  title: "Безопасность и надёжность",
                  desc: "Переход от домашних систем к корпоративным решениям с высокими требованиями к стабильности.",
                },
                {
                  icon: "Cloud",
                  title: "Облачная эра",
                  desc: "Современные версии Windows интегрируют локальные и облачные возможности в единую экосистему.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="flex gap-4 p-5 bg-blue-ice rounded-xl border border-blue-100 chapter-card"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-main flex items-center justify-center flex-shrink-0">
                    <Icon name={card.icon} size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="font-golos font-bold text-blue-deep mb-1 text-sm">
                      {card.title}
                    </div>
                    <div className="text-mid text-sm leading-relaxed">{card.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VERSIONS INFOGRAPHIC */}
      <section className="py-20 bg-blue-deep overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-blue-light text-sm font-semibold uppercase tracking-widest mb-3">
              Инфографика
            </div>
            <h2 className="font-golos text-4xl font-black text-white">
              Все версии Windows — одним взглядом
            </h2>
            <p className="text-blue-200 mt-3 text-sm">Популярность каждой версии по 5-балльной шкале</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {WIN_VERSIONS.map((v) => (
              <div
                key={v.name}
                className="group bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-4 text-center transition-all hover:-translate-y-1 cursor-default"
              >
                <div className="text-3xl mb-2">{v.emoji}</div>
                <div className="font-golos font-black text-white text-xl leading-none">
                  Win {v.name}
                </div>
                <div className="text-blue-300 text-xs mt-1 mb-3">{v.year}</div>
                <div className="flex justify-center gap-0.5 mb-2">
                  {[1,2,3,4,5].map((star) => (
                    <div
                      key={star}
                      className="w-4 h-1.5 rounded-full transition-colors"
                      style={{ backgroundColor: star <= v.rating ? "#93c5fd" : "rgba(255,255,255,0.15)" }}
                    />
                  ))}
                </div>
                <div className="text-blue-200 text-xs">{v.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-blue-300 text-xs">
            <span className="flex items-center gap-2">
              <span className="flex gap-0.5">{[1,2,3,4,5].map(s=><span key={s} className="w-3 h-1 rounded-full bg-blue-300 inline-block"/>)}</span>
              Высокая оценка
            </span>
            <span className="flex items-center gap-2">
              <span className="flex gap-0.5">{[1,2].map(s=><span key={s} className="w-3 h-1 rounded-full bg-blue-300 inline-block"/>)}<span className="flex gap-0.5">{[3,4,5].map(s=><span key={s} className="w-3 h-1 rounded-full bg-white/20 inline-block"/>)}</span></span>
              Низкая оценка
            </span>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CHAPTERS */}
      <section id="chapters" className="py-24 bg-blue-ice">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-blue-main text-sm font-semibold uppercase tracking-widest mb-4">
              Структура проекта
            </div>
            <h2 className="font-golos text-4xl md:text-5xl font-black text-blue-deep">
              Главы
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-deep text-white flex items-center justify-center font-golos font-black text-lg">
                  1
                </div>
                <div>
                  <div className="text-xs text-blue-main font-semibold uppercase tracking-wider">Глава 1</div>
                  <h3 className="font-golos font-bold text-blue-deep text-lg leading-tight">
                    Становление: от оболочки до ОС
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    num: "1.1",
                    title: "Windows 1.0 – 3.x",
                    sub: "Первые шаги графического интерфейса",
                    desc: "Зарождение Windows как графической надстройки над MS-DOS. Поддержка мыши, базовые приложения, первые шаги к массовому рынку.",
                  },
                  {
                    num: "1.2",
                    title: "Windows 95, 98, ME",
                    sub: "Революция для домашних ПК",
                    desc: "Эпохальная кнопка «Пуск», 32-битная архитектура, USB, интернет для миллионов. Windows входит в каждый дом.",
                  },
                  {
                    num: "1.3",
                    title: "Windows NT и 2000",
                    sub: "Основа для бизнеса",
                    desc: "Параллельная корпоративная ветка: стабильность, безопасность, Active Directory. Фундамент для всех современных версий.",
                  },
                ].map((item) => (
                  <div key={item.num} className="chapter-card bg-blue-ice rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-main font-golos font-bold text-sm mt-0.5 flex-shrink-0">
                        {item.num}
                      </span>
                      <div>
                        <div className="font-golos font-semibold text-blue-deep text-sm">
                          {item.title}
                        </div>
                        <div className="text-blue-main text-xs mb-1">{item.sub}</div>
                        <div className="text-mid text-xs leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-main text-white flex items-center justify-center font-golos font-black text-lg">
                  2
                </div>
                <div>
                  <div className="text-xs text-blue-main font-semibold uppercase tracking-wider">Глава 2</div>
                  <h3 className="font-golos font-bold text-blue-deep text-lg leading-tight">
                    Унификация, безопасность и облако
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    num: "2.1",
                    title: "Windows XP",
                    sub: "Золотой стандарт",
                    desc: "Объединение домашней и корпоративной линеек. Интерфейс Luna, высокая стабильность. 12 лет на рынке без замены.",
                  },
                  {
                    num: "2.2",
                    title: "Windows Vista и 7",
                    sub: "Работа над ошибками и новый успех",
                    desc: "Vista — амбициозный, но перегруженный релиз. Windows 7 — оптимизированный ответ: быстрая, красивая, стабильная.",
                  },
                  {
                    num: "2.3",
                    title: "Windows 8, 10 и 11",
                    sub: "Эра универсальности и подписки",
                    desc: "Эксперимент с сенсорным Metro, возврат к классике в Windows 10, новый дизайн Windows 11. Windows как сервис.",
                  },
                ].map((item) => (
                  <div key={item.num} className="chapter-card bg-blue-ice rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-main font-golos font-bold text-sm mt-0.5 flex-shrink-0">
                        {item.num}
                      </span>
                      <div>
                        <div className="font-golos font-semibold text-blue-deep text-sm">
                          {item.title}
                        </div>
                        <div className="text-blue-main text-xs mb-1">{item.sub}</div>
                        <div className="text-mid text-xs leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ERAS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-blue-main text-sm font-semibold uppercase tracking-widest mb-3">
              Четыре эпохи
            </div>
            <h2 className="font-golos text-4xl font-black text-blue-deep">
              Как менялась Windows
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ERAS.map((era) => (
              <div
                key={era.period}
                className="group relative overflow-hidden rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={era.img}
                    alt={era.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-white text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: era.accent }}
                    >
                      {era.period}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4">
                    <h3 className="font-golos font-black text-white text-xl">{era.title}</h3>
                    <p className="text-blue-200 text-xs">{era.subtitle}</p>
                  </div>
                </div>

                <div className="p-5 bg-white">
                  <p className="text-mid text-sm leading-relaxed mb-4">{era.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {era.versions.map((v) => (
                      <span
                        key={v}
                        className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-pale"
                        style={{ color: era.accent }}
                      >
                        Win {v}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* TIMELINE */}
      <section id="history" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-blue-main text-sm font-semibold uppercase tracking-widest mb-4">
              Хронология
            </div>
            <h2 className="font-golos text-4xl md:text-5xl font-black text-blue-deep">
              История версий
            </h2>
            <p className="text-mid mt-4 max-w-xl mx-auto">
              11 ключевых релизов, изменивших облик персональных компьютеров
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -translate-x-1/2" />

            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <div
                  key={item.version}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-[18px] md:left-1/2 -translate-x-1/2 top-4 z-10">
                    <div className="timeline-dot" />
                  </div>

                  <div
                    className={`ml-10 md:ml-0 w-full md:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="glass-card rounded-xl p-5 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-golos font-black text-blue-deep text-lg">
                          {item.version}
                        </span>
                        <span className="text-white bg-blue-main text-xs font-semibold px-2.5 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <div className="text-blue-main text-xs font-medium mb-2">{item.tag}</div>
                      <p className="text-mid text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CONCLUSION */}
      <section id="conclusion" className="py-24 bg-blue-ice">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-blue-main text-sm font-semibold uppercase tracking-widest mb-4">
                Заключение
              </div>
              <h2 className="font-golos text-4xl md:text-5xl font-black text-blue-deep">
                Итоги исследования
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-blue-100 mb-8">
              <p className="text-mid leading-relaxed mb-5 text-base">
                История Windows — это история постоянной адаптации. Каждая версия
                отвечала на конкретный вызов своей эпохи: сначала Microsoft сделала
                компьютер доступным через интуитивный графический интерфейс,
                затем — надёжным через ядро NT, потом — массовым через XP.
              </p>
              <p className="text-mid leading-relaxed mb-5 text-base">
                Провалы — Windows ME, Vista, 8 — оказались не катастрофами, а
                точками роста. Именно они подтолкнули к созданию Windows 7, 10
                и, в конечном счёте, 11 — релизов, определивших новые стандарты.
              </p>
              <p className="text-mid leading-relaxed text-base">
                Сегодня Windows — это не просто операционная система, а
                платформа-сервис, интегрированная с облаком, ИИ и экосистемой
                Microsoft 365. Её история продолжается, и каждый новый шаг
                отражает глобальные изменения в том, как человечество использует
                технологии.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "TrendingUp", label: "40+ лет", sub: "непрерывного развития" },
                { icon: "Users", label: "1.4 млрд", sub: "активных устройств" },
                { icon: "Globe", label: "190+", sub: "стран мира" },
                { icon: "Zap", label: "11 версий", sub: "главных релизов" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-xl p-5 text-center border border-blue-100 shadow-sm"
                >
                  <Icon name={s.icon} size={22} className="text-blue-main mx-auto mb-3" />
                  <div className="font-golos font-black text-blue-deep text-lg">{s.label}</div>
                  <div className="text-light-custom text-xs mt-1">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THEN vs NOW */}
      <section className="py-20 bg-blue-deep">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-blue-light text-sm font-semibold uppercase tracking-widest mb-3">
              Трансформация
            </div>
            <h2 className="font-golos text-4xl font-black text-white">
              Тогда и сейчас
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* THEN */}
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🖥️</span>
                <div>
                  <div className="font-golos font-black text-white text-xl">Windows 1985</div>
                  <div className="text-blue-300 text-xs">Первые шаги</div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { icon: "HardDrive", label: "Объём", val: "256 КБ RAM" },
                  { icon: "Monitor", label: "Интерфейс", val: "Монохромный, 640×200" },
                  { icon: "Users", label: "Пользователи", val: "Тысячи энтузиастов" },
                  { icon: "Globe", label: "Сеть", val: "Не предусмотрена" },
                  { icon: "Cpu", label: "Процессор", val: "Intel 8086, 10 МГц" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between py-2 border-b border-white/10">
                    <div className="flex items-center gap-2 text-blue-200 text-sm">
                      <Icon name={row.icon} size={14} />
                      {row.label}
                    </div>
                    <span className="text-white text-sm font-medium">{row.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* NOW */}
            <div className="bg-blue-main/30 border border-blue-light/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-light/10 rounded-full blur-2xl" />
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">✨</span>
                <div>
                  <div className="font-golos font-black text-white text-xl">Windows 11 (2021)</div>
                  <div className="text-blue-300 text-xs">Облачная эра</div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { icon: "HardDrive", label: "Объём", val: "4+ ГБ RAM (мин.)" },
                  { icon: "Monitor", label: "Интерфейс", val: "4K HDR, 3840×2160+" },
                  { icon: "Users", label: "Пользователи", val: "1,4 млрд устройств" },
                  { icon: "Globe", label: "Сеть", val: "Встроенный облачный сервис" },
                  { icon: "Cpu", label: "Процессор", val: "x64/ARM, до 5+ ГГц" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between py-2 border-b border-white/10">
                    <div className="flex items-center gap-2 text-blue-200 text-sm">
                      <Icon name={row.icon} size={14} />
                      {row.label}
                    </div>
                    <span className="text-blue-light text-sm font-bold">{row.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-blue-300 text-sm">
              За 36 лет оперативная память выросла в <span className="text-white font-bold">15 000 раз</span>, 
              а пользовательская база — в <span className="text-white font-bold">миллион раз</span>
            </p>
          </div>
        </div>
      </section>

      {/* AUTHOR SECTION */}
      <section className="py-20 bg-blue-ice">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-blue-main text-sm font-semibold uppercase tracking-widest mb-3">
              Автор
            </div>
            <h2 className="font-golos text-4xl font-black text-blue-deep">
              О проекте
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Карточка автора */}
            <div className="md:col-span-1 bg-white rounded-2xl p-8 border border-blue-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-blue-main flex items-center justify-center text-4xl mb-4 shadow-lg">
                👨‍💻
              </div>
              <div className="font-golos font-black text-blue-deep text-2xl mb-1">
                Зобнин Глеб
              </div>
              <div className="text-blue-main font-semibold text-sm mb-4">
                Группа ИС-25-12б
              </div>
              <div className="w-12 h-0.5 bg-blue-100 mb-4" />
              <div className="text-mid text-sm leading-relaxed">
                Студент специальности «Информационные системы и программирование»
              </div>
            </div>

            {/* Метаданные проекта */}
            <div className="md:col-span-2 bg-white rounded-2xl p-8 border border-blue-100 shadow-sm">
              <div className="font-golos font-black text-blue-deep text-xl mb-6">
                Паспорт проекта
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: "FileText", label: "Вид работы", val: "Индивидуальный проект" },
                  { icon: "GraduationCap", label: "Учебная группа", val: "ИС-25-12б" },
                  { icon: "BookOpen", label: "Дисциплина", val: "Информатика / ИКТ" },
                  { icon: "Calendar", label: "Дата выполнения", val: "25 марта 2026 г." },
                  { icon: "Layers", label: "Структура", val: "2 главы, 6 параграфов" },
                  { icon: "List", label: "Источников", val: "7 источников" },
                  { icon: "Clock", label: "Охват темы", val: "1985 — 2021 гг." },
                  { icon: "Target", label: "Объект изучения", val: "ОС Microsoft Windows" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-3 p-3 bg-blue-ice rounded-xl">
                    <div className="w-8 h-8 rounded-lg bg-blue-main flex items-center justify-center flex-shrink-0">
                      <Icon name={row.icon} size={14} className="text-white" />
                    </div>
                    <div>
                      <div className="text-light-custom text-xs">{row.label}</div>
                      <div className="text-blue-deep font-semibold text-sm">{row.val}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-main/5 border border-blue-main/20 rounded-xl">
                <div className="flex items-start gap-3">
                  <Icon name="Info" size={16} className="text-blue-main mt-0.5 flex-shrink-0" />
                  <p className="text-mid text-sm leading-relaxed">
                    <span className="font-semibold text-blue-deep">Цель проекта:</span> исследовать 
                    эволюцию операционной системы Windows от графической оболочки до 
                    современной облачной платформы, выявив ключевые этапы и закономерности её развития.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* SOURCES */}
      <section id="sources" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-blue-main text-sm font-semibold uppercase tracking-widest mb-4">
                Список использованных источников
              </div>
              <h2 className="font-golos text-4xl font-black text-blue-deep">
                Источники
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  num: 1,
                  text: "Microsoft Corporation. История Windows. Официальная документация. — Режим доступа: https://microsoft.com/windows (дата обращения: 25.03.2026).",
                },
                {
                  num: 2,
                  text: "Таненбаум Э. Современные операционные системы. — 4-е изд. — СПб.: Питер, 2015. — 1120 с.",
                },
                {
                  num: 3,
                  text: "Харт Дж. Системное программирование в среде Windows. — М.: Вильямс, 2005. — 592 с.",
                },
                {
                  num: 4,
                  text: "Хелмс Э. Windows NT: архитектура ядра. — М.: Русская редакция, 2001. — 752 с.",
                },
                {
                  num: 5,
                  text: "Wikipedia. History of Microsoft Windows [Electronic resource]. — URL: https://en.wikipedia.org/wiki/History_of_Microsoft_Windows (accessed: 25.03.2026).",
                },
                {
                  num: 6,
                  text: "StatCounter Global Stats. Operating System Market Share Worldwide. — URL: https://gs.statcounter.com (дата обращения: 25.03.2026).",
                },
                {
                  num: 7,
                  text: "Russinovich M., Solomon D., Ionescu A. Windows Internals, Part 1. — 7th ed. — Microsoft Press, 2017. — 784 p.",
                },
              ].map((src) => (
                <div
                  key={src.num}
                  className="flex gap-4 p-4 rounded-xl hover:bg-blue-ice transition-colors border border-transparent hover:border-blue-100"
                >
                  <span className="text-blue-main font-golos font-bold text-sm flex-shrink-0 w-5 text-right">
                    {src.num}.
                  </span>
                  <p className="text-mid text-sm leading-relaxed">{src.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="hero-gradient py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="font-golos font-bold text-white text-lg mb-2">
            История операционной системы Windows
          </div>
          <div className="text-blue-200 text-sm mb-1">Индивидуальный проект</div>
          <div className="text-blue-100 text-base font-semibold mt-3">
            Зобнин Глеб
          </div>
          <div className="text-blue-300 text-sm">
            Студент группы ИС-25-12б
          </div>
          <div className="mt-6 pt-6 border-t border-white/20 text-blue-300 text-xs">
            © 25 марта 2026 — Все материалы предназначены для учебных целей
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;