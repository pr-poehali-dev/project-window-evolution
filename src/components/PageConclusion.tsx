import Icon from "@/components/ui/icon";

const PageConclusion = () => {
  return (
    <>
      <div className="section-divider" />

      {/* CONCLUSION */}
      <section id="conclusion" className="py-24 bg-blue-ice">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
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
    </>
  );
};

export default PageConclusion;
