const PageUiEvolution = () => {
  return (
    <>
      <div className="section-divider" />

      {/* UI EVOLUTION INFOGRAPHIC */}
      <section id="sources" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-blue-main text-sm font-semibold uppercase tracking-widest mb-4">
              Визуальная эволюция
            </div>
            <h2 className="font-golos text-4xl font-black text-blue-deep mb-4">
              Как менялся интерфейс Windows
            </h2>
            <p className="text-mid text-lg max-w-2xl mx-auto">
              От монохромных окон 1985 года — до стекла и прозрачности сегодня
            </p>
          </div>

          {/* Timeline bar */}
          <div className="relative mb-16 hidden md:block">
            <div className="h-1 bg-gradient-to-r from-gray-300 via-blue-300 to-blue-main rounded-full" />
            <div className="absolute top-0 left-0 right-0 flex justify-between -translate-y-1/2">
              {["1985","1995","2001","2007","2012","2015","2021"].map((y) => (
                <div key={y} className="flex flex-col items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-blue-main border-2 border-white shadow" />
                  <span className="text-xs text-mid font-semibold mt-2">{y}</span>
                </div>
              ))}
            </div>
          </div>

          {/* UI Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {/* Windows 1.0 / 2.0 */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-shadow group">
              <div className="bg-[#c0c0c0] p-3 relative" style={{height: 200}}>
                <div className="bg-[#c0c0c0] border-2 border-[#808080] w-full h-full relative overflow-hidden" style={{boxShadow: "inset -2px -2px 0 #ffffff, inset 2px 2px 0 #404040"}}>
                  <div className="bg-[#000080] text-white text-[10px] px-2 py-0.5 flex items-center justify-between">
                    <span>Program Manager</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-[#c0c0c0] border border-[#808080] text-[8px] flex items-center justify-center text-black">▲</div>
                    </div>
                  </div>
                  <div className="p-2 grid grid-cols-4 gap-1 mt-1">
                    {["📁","📂","🖥️","⚙️","📝","🖨️","🔧","📊"].map((ic, i) => (
                      <div key={i} className="flex flex-col items-center gap-0.5">
                        <div className="text-lg">{ic}</div>
                        <div className="text-[7px] text-black text-center leading-tight">Prog {i+1}</div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-1 left-1 right-1 bg-[#c0c0c0] border border-[#808080] text-[8px] px-1 py-0.5 flex justify-between" style={{boxShadow: "inset -1px -1px 0 #ffffff, inset 1px 1px 0 #404040"}}>
                    <span>Start</span><span>12:00</span>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-golos font-black text-blue-deep text-lg">Windows 1.0–2.0</h3>
                  <span className="text-xs bg-gray-100 text-mid px-2 py-1 rounded-full">1985–1990</span>
                </div>
                <p className="text-mid text-sm leading-relaxed mb-3">Монохромный интерфейс с плиточными окнами. Без цветов и теней — только серый фон и прямоугольники. Мышь была экзотикой.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded">Плиточные окна</span>
                  <span className="text-[11px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded">Без цвета</span>
                  <span className="text-[11px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded">MS-DOS под капотом</span>
                </div>
              </div>
            </div>

            {/* Windows 95 / 98 */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-shadow group">
              <div className="p-3 relative" style={{height: 200, background: "#008080"}}>
                <div className="bg-[#c0c0c0] border-2 border-[#ffffff] w-full h-full relative overflow-hidden" style={{boxShadow: "2px 2px 0 #404040"}}>
                  <div className="bg-gradient-to-r from-[#000080] to-[#1084d0] text-white text-[10px] px-2 py-0.5 flex items-center justify-between">
                    <span>💻 Мой компьютер</span>
                    <div className="flex gap-0.5">
                      <div className="w-4 h-4 bg-[#c0c0c0] border border-[#808080] flex items-center justify-center text-black text-[8px]">_</div>
                      <div className="w-4 h-4 bg-[#c0c0c0] border border-[#808080] flex items-center justify-center text-black text-[8px]">□</div>
                      <div className="w-4 h-4 bg-[#cc0000] border border-[#808080] flex items-center justify-center text-white text-[8px]">✕</div>
                    </div>
                  </div>
                  <div className="p-2 grid grid-cols-3 gap-2 mt-1">
                    {[["💾","Диск C:"],["💿","Диск D:"],["🖨️","Принтер"],["📁","Документы"],["🌐","Интернет"],["🗑️","Корзина"]].map(([ic, name], i) => (
                      <div key={i} className="flex flex-col items-center gap-0.5">
                        <div className="text-xl">{ic}</div>
                        <div className="text-[8px] text-black text-center">{name}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-1 left-1 right-1 bg-[#c0c0c0] h-6 flex items-center px-1 gap-1 border-t-2 border-white" style={{boxShadow: "inset 0 1px 0 #404040"}}>
                  <div className="bg-gradient-to-r from-[#1f5f1f] to-[#3a9c3a] text-white text-[9px] px-2 py-0.5 rounded-sm font-bold flex items-center gap-1">
                    <span>⊞</span> Пуск
                  </div>
                  <div className="ml-auto text-[9px] text-black">12:00</div>
                </div>
              </div>
              <div className="p-5 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-golos font-black text-blue-deep text-lg">Windows 95–98</h3>
                  <span className="text-xs bg-blue-50 text-blue-main px-2 py-1 rounded-full">1995–2000</span>
                </div>
                <p className="text-mid text-sm leading-relaxed mb-3">Рождение кнопки «Пуск» и Панели задач. Бирюзовый рабочий стол, 3D-кнопки. Первый по-настоящему массовый интерфейс для простых людей.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded">Кнопка «Пуск»</span>
                  <span className="text-[11px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded">Панель задач</span>
                  <span className="text-[11px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded">3D-стиль</span>
                </div>
              </div>
            </div>

            {/* Windows XP */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-shadow group">
              <div className="p-3 relative" style={{height: 200, background: "linear-gradient(180deg, #2563a8 0%, #5ba3e0 40%, #3d9140 40%, #5cb85c 100%)"}}>
                <div className="bg-white border border-gray-300 w-3/4 mx-auto relative overflow-hidden rounded-t" style={{boxShadow: "0 2px 8px rgba(0,0,0,0.3)"}}>
                  <div className="h-5 flex items-center px-2 gap-1" style={{background: "linear-gradient(to bottom, #2a84d4, #1a5fa8)"}}>
                    <div className="text-[9px] text-white font-bold flex-1">Internet Explorer</div>
                    <div className="w-3 h-3 rounded-sm bg-yellow-400 border border-yellow-600 text-[7px] flex items-center justify-center">_</div>
                    <div className="w-3 h-3 rounded-sm bg-green-400 border border-green-600 text-[7px] flex items-center justify-center">□</div>
                    <div className="w-3 h-3 rounded-sm bg-red-500 border border-red-700 text-white text-[7px] flex items-center justify-center">✕</div>
                  </div>
                  <div className="h-4 bg-gray-100 border-b border-gray-300 flex items-center px-1 gap-1">
                    <div className="text-[7px] text-gray-500 bg-white border border-gray-300 px-1 py-0.5 rounded flex-1 truncate">http://www.google.com</div>
                  </div>
                  <div className="p-2 text-center">
                    <div className="text-[11px] text-blue-600 font-bold">Google</div>
                    <div className="text-[8px] text-gray-400 mt-1">Поиск в Интернете</div>
                  </div>
                </div>
                <div className="absolute bottom-1 left-1 right-1 h-6 flex items-center px-1 gap-1 rounded-t" style={{background: "linear-gradient(to bottom, #2a84d4, #1a5fa8)"}}>
                  <div className="bg-green-500 hover:bg-green-400 text-white text-[9px] px-2 py-0.5 rounded-sm font-bold flex items-center gap-1 border border-green-700">
                    <span>⊞</span> Пуск
                  </div>
                  <div className="ml-auto text-[9px] text-white">12:00 AM</div>
                </div>
              </div>
              <div className="p-5 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-golos font-black text-blue-deep text-lg">Windows XP</h3>
                  <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">2001–2014</span>
                </div>
                <p className="text-mid text-sm leading-relaxed mb-3">«Луна» — синяя панель задач, зелёный холм на рабочем столе. Закруглённые кнопки, яркие цвета. Самая популярная Windows всех времён.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] bg-green-50 text-green-700 px-2 py-0.5 rounded">Luna-стиль</span>
                  <span className="text-[11px] bg-green-50 text-green-700 px-2 py-0.5 rounded">Яркие цвета</span>
                  <span className="text-[11px] bg-green-50 text-green-700 px-2 py-0.5 rounded">Темы оформления</span>
                </div>
              </div>
            </div>

            {/* Windows Vista / 7 */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-shadow group">
              <div className="p-3 relative" style={{height: 200, background: "linear-gradient(135deg, #0a1628 0%, #1a2f5e 50%, #0d1f3c 100%)"}}>
                <div className="relative overflow-hidden rounded" style={{background: "rgba(255,255,255,0.08)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)", boxShadow: "0 4px 20px rgba(0,0,0,0.5)"}}>
                  <div className="h-6 flex items-center px-2 gap-1" style={{background: "linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.1))"}}>
                    <span className="text-[9px] text-white font-bold">📁 Мои документы</span>
                    <div className="ml-auto flex gap-0.5">
                      <div className="w-4 h-4 rounded-full bg-yellow-400/80 flex items-center justify-center text-[7px]">_</div>
                      <div className="w-4 h-4 rounded-full bg-green-400/80 flex items-center justify-center text-[7px]">□</div>
                      <div className="w-4 h-4 rounded-full bg-red-500/80 flex items-center justify-center text-[7px] text-white">✕</div>
                    </div>
                  </div>
                  <div className="p-3 grid grid-cols-4 gap-2">
                    {["📄","📊","🎵","🎬","📸","📁","⚙️","📧"].map((ic, i) => (
                      <div key={i} className="flex flex-col items-center gap-0.5">
                        <div className="text-xl drop-shadow">{ic}</div>
                        <div className="text-[7px] text-white/80 text-center">Файл {i+1}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-1 left-1 right-1 h-7 flex items-center px-2 gap-1 rounded" style={{background: "rgba(0,40,120,0.7)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)"}}>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center text-[11px]" style={{background: "radial-gradient(circle, #60a0ff, #0040c0)"}}>⊞</div>
                  <div className="flex gap-1 mx-1">
                    <div className="h-5 px-2 rounded text-[8px] text-white/90 flex items-center" style={{background: "rgba(255,255,255,0.15)"}}>📁 Документы</div>
                  </div>
                  <div className="ml-auto text-[9px] text-white/90">12:00</div>
                </div>
              </div>
              <div className="p-5 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-golos font-black text-blue-deep text-lg">Windows Vista / 7</h3>
                  <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">2007–2012</span>
                </div>
                <p className="text-mid text-sm leading-relaxed mb-3">Aero Glass — прозрачные окна с эффектом матового стекла. Тёмный фон, синие блики, анимации. Красивейший Windows своего времени.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded">Aero Glass</span>
                  <span className="text-[11px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded">Прозрачность</span>
                  <span className="text-[11px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded">Живые превью</span>
                </div>
              </div>
            </div>

            {/* Windows 8 */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-shadow group">
              <div className="p-3 relative" style={{height: 200, background: "#00aad4"}}>
                <div className="grid grid-cols-4 grid-rows-3 gap-1.5 h-full">
                  {[
                    {bg:"#0078d7", label:"Почта", icon:"📧", wide: false},
                    {bg:"#107c10", label:"Xbox", icon:"🎮", wide: false},
                    {bg:"#ca3c26", label:"Фото", icon:"📸", wide: false},
                    {bg:"#7a1bca", label:"Музыка", icon:"🎵", wide: false},
                    {bg:"#e3a21a", label:"Карты", icon:"🗺️", wide: false},
                    {bg:"#00aad4", label:"Погода", icon:"☀️", wide: false},
                    {bg:"#1e7145", label:"Excel", icon:"📊", wide: false},
                    {bg:"#d83b01", label:"Word", icon:"📝", wide: false},
                    {bg:"#0078d7", label:"Браузер", icon:"🌐", wide: false},
                    {bg:"#107c10", label:"Камера", icon:"📷", wide: false},
                    {bg:"#5c2d91", label:"Видео", icon:"🎬", wide: false},
                    {bg:"#c52a2a", label:"Игры", icon:"🕹️", wide: false},
                  ].map((tile, i) => (
                    <div key={i} className="rounded flex flex-col items-center justify-center gap-0.5" style={{background: tile.bg}}>
                      <div className="text-lg">{tile.icon}</div>
                      <div className="text-[7px] text-white font-semibold">{tile.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-5 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-golos font-black text-blue-deep text-lg">Windows 8 / 8.1</h3>
                  <span className="text-xs bg-cyan-50 text-cyan-700 px-2 py-1 rounded-full">2012–2015</span>
                </div>
                <p className="text-mid text-sm leading-relaxed mb-3">Metro UI — плоские живые плитки вместо рабочего стола. Революция ради планшетов. Пользователи ПК оказались в замешательстве без кнопки «Пуск».</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] bg-cyan-50 text-cyan-700 px-2 py-0.5 rounded">Metro/Modern UI</span>
                  <span className="text-[11px] bg-cyan-50 text-cyan-700 px-2 py-0.5 rounded">Живые плитки</span>
                  <span className="text-[11px] bg-cyan-50 text-cyan-700 px-2 py-0.5 rounded">Без кнопки Пуск</span>
                </div>
              </div>
            </div>

            {/* Windows 10 / 11 */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-shadow group">
              <div className="p-3 relative" style={{height: 200, background: "linear-gradient(135deg, #1e3a5f 0%, #2d6a9f 50%, #4a90d9 100%)"}}>
                <div className="relative overflow-hidden rounded-lg" style={{background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)"}}>
                  <div className="h-6 flex items-center px-3 gap-2" style={{background: "rgba(0,0,0,0.3)"}}>
                    <span className="text-[9px] text-white/90">🌐 Microsoft Edge</span>
                    <div className="ml-auto flex gap-1">
                      <div className="text-[10px] text-white/60 hover:text-white cursor-pointer">—</div>
                      <div className="text-[10px] text-white/60 hover:text-white cursor-pointer">□</div>
                      <div className="text-[10px] text-white/60 hover:text-white cursor-pointer">×</div>
                    </div>
                  </div>
                  <div className="p-2 flex items-center gap-1" style={{background: "rgba(255,255,255,0.05)"}}>
                    <div className="flex-1 bg-white/10 rounded-full px-2 py-0.5 text-[8px] text-white/60 flex items-center gap-1">
                      🔒 <span>microsoft.com</span>
                    </div>
                  </div>
                  <div className="p-2 grid grid-cols-3 gap-1">
                    {[["⊞","Окна"],["📱","Виджеты"],["🔍","Поиск"],["📁","Файлы"],["⚙️","Настройки"],["💬","Teams"]].map(([ic, label], i) => (
                      <div key={i} className="flex flex-col items-center py-1 rounded" style={{background: "rgba(255,255,255,0.08)"}}>
                        <div className="text-base">{ic}</div>
                        <div className="text-[7px] text-white/70">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-1 left-1 right-1 h-7 flex items-center justify-center gap-2 rounded-lg" style={{background: "rgba(0,0,0,0.5)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)"}}>
                  <div className="text-base">⊞</div>
                  <div className="text-base">🔍</div>
                  <div className="text-base">🌐</div>
                  <div className="text-base">📁</div>
                  <div className="text-base">📧</div>
                  <div className="text-base">🏪</div>
                  <div className="ml-auto mr-2 text-[9px] text-white/80">12:00</div>
                </div>
              </div>
              <div className="p-5 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-golos font-black text-blue-deep text-lg">Windows 10 / 11</h3>
                  <span className="text-xs bg-violet-50 text-violet-700 px-2 py-1 rounded-full">2015–сегодня</span>
                </div>
                <p className="text-mid text-sm leading-relaxed mb-3">Fluent Design — округлые углы, акриловая прозрачность, центрированная панель задач. Лучшее из Vista и Metro, без компромиссов. Ежемесячные обновления.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] bg-violet-50 text-violet-700 px-2 py-0.5 rounded">Fluent Design</span>
                  <span className="text-[11px] bg-violet-50 text-violet-700 px-2 py-0.5 rounded">Mica / Acrylic</span>
                  <span className="text-[11px] bg-violet-50 text-violet-700 px-2 py-0.5 rounded">Скруглённые окна</span>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison bar */}
          <div className="mt-16 rounded-2xl p-8 border border-blue-100" style={{background: "linear-gradient(135deg, #f0f7ff 0%, #e8f0fe 100%)"}}>
            <h3 className="font-golos font-black text-blue-deep text-2xl text-center mb-8">Что изменилось за 40 лет</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {label: "Цветов в палитре", old: "2", now: "16 млн+", icon: "🎨"},
                {label: "Разрешение экрана", old: "320×200", now: "7680×4320", icon: "🖥️"},
                {label: "Иконок в системе", old: "~20", now: "1000+", icon: "🗂️"},
                {label: "Шрифтов по умолчанию", old: "1", now: "100+", icon: "🔤"},
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="text-xs text-mid uppercase tracking-wider mb-2">{item.label}</div>
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    <span className="text-sm bg-gray-200 text-gray-600 px-3 py-1 rounded-full font-mono">{item.old}</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-sm bg-blue-main text-white px-3 py-1 rounded-full font-mono font-bold">{item.now}</span>
                  </div>
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
    </>
  );
};

export default PageUiEvolution;
