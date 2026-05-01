import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_BG = "https://cdn.poehali.dev/projects/96f077e8-0ece-46b4-8f71-5de4866d74b2/bucket/2e523c9c-96f3-4b69-afb9-a52ab9d67941.png";

export default function Index() {
  const [formData, setFormData] = useState({ name: "", phone: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="font-sans bg-[#1C1C1C] text-white">

      {/* ── НАВИГАЦИЯ ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1C1C1C]/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 relative shrink-0">
              <svg viewBox="0 0 48 48" className="w-full h-full">
                {/* Шестерёнка */}
                <g fill="#D1D5DB">
                  {Array.from({ length: 12 }).map((_, i) => {
                    const angle = (i * 30 * Math.PI) / 180;
                    const x1 = 24 + Math.cos(angle) * 18;
                    const y1 = 24 + Math.sin(angle) * 18;
                    const x2 = 24 + Math.cos(angle) * 23;
                    const y2 = 24 + Math.sin(angle) * 23;
                    return <rect key={i} x={x1 - 2} y={y1 - 2} width="4" height="6" transform={`rotate(${i * 30} ${x1} ${y1})`} />;
                  })}
                </g>
                <circle cx="24" cy="24" r="18" fill="none" stroke="#D1D5DB" strokeWidth="2.5" />
                <circle cx="24" cy="24" r="14" fill="#1C1C1C" />
                {/* Компас-роза */}
                <polygon points="24,10 26,24 24,38 22,24" fill="#D97706" />
                <polygon points="10,24 24,22 38,24 24,26" fill="#E5E7EB" />
                <circle cx="24" cy="24" r="2" fill="#1C1C1C" />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="text-[12px] font-bold tracking-[0.18em] text-white uppercase">Свердловск</div>
              <div className="text-[12px] font-bold tracking-[0.18em] text-white uppercase">Фундамент</div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {[["О нас", "about"], ["Услуги", "services"], ["Проекты", "team"], ["Цены", "reviews"], ["Контакты", "contact"]].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)}
                className="text-base text-white/85 hover:text-white transition-colors">
                {label}
              </button>
            ))}
          </nav>

          <a href="tel:+79090090971" className="hidden lg:block text-[#D97706] font-semibold text-lg tracking-wide hover:text-[#F59E0B] transition-colors">
            +7 909 009-09-71
          </a>

          <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-[#2A2A2A] border-t border-white/10 px-4 py-6 flex flex-col gap-4">
            {[["О нас", "about"], ["Услуги", "services"], ["Проекты", "team"], ["Цены", "reviews"], ["Контакты", "contact"]].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)}
                className="text-left text-white/80 hover:text-white py-1 text-base">
                {label}
              </button>
            ))}
            <a href="tel:+79090090971" className="text-[#D97706] font-semibold text-lg mt-2">
              +7 909 009-09-71
            </a>
          </div>
        )}
      </header>

      {/* ── ГЕРОЙ ── */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center text-center overflow-hidden bg-[#1C1C1C]">
        {/* Фоновая картинка фундамента — занимает нижние 60% */}
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="Фундамент" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C] via-[#1C1C1C]/40 to-[#1C1C1C]/85" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-32 lg:pt-40 pb-16 w-full">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[80px] font-normal leading-[1.05] text-white mb-8 animate-fade-in" style={{ animationDelay: "0.15s", opacity: 0 }}>
            Фундамент без трещин: лазерная<br className="hidden lg:block" />
            {" "}точность геометрии и гарантия 15 лет
          </h1>

          <p className="text-white/80 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-12 animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            Фиксируем смету в договоре до начала работ. Используем малогабаритную технику, чтобы сохранить ваш ландшафт и забор в целости.
          </p>

          <button onClick={() => scrollTo("contact")}
            className="inline-block bg-gradient-to-b from-[#F59E0B] to-[#D97706] hover:from-[#FBBF24] hover:to-[#B45309] text-white font-semibold text-base sm:text-lg px-10 sm:px-14 py-4 sm:py-5 rounded-md shadow-lg shadow-[#D97706]/30 transition-all duration-200 hover:scale-[1.02] animate-fade-in"
            style={{ animationDelay: "0.45s", opacity: 0 }}>
            Рассчитать стоимость и забронировать выезд инженера
          </button>

          <div className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-12 mt-8 animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0 }}>
            <div className="flex items-center justify-center gap-2 text-white/85 text-sm sm:text-base">
              <Icon name="HardHat" size={18} className="text-[#D97706]" />
              <span>Бесплатный выезд инженера</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white/85 text-sm sm:text-base">
              <Icon name="FileText" size={18} className="text-[#D97706]" />
              <span>Работаем по договору</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── О НАС ── */}
      <section id="about" className="py-20 lg:py-28 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="text-[#D97706] text-xs uppercase tracking-[0.25em] mb-4">О компании</div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
                Строим основу вашего дома с инженерной точностью
              </h2>
              <p className="text-white/65 text-base leading-relaxed mb-6">
                С 2009 года специализируемся исключительно на фундаментах. Не строим «всё подряд» — знаем про основания всё. Каждый объект получает лазерный контроль геометрии и персонального прораба.
              </p>
              <p className="text-white/65 text-base leading-relaxed mb-8">
                Работаем по официальному договору с фиксированной сметой. Используем малогабаритную технику — заезжаем через стандартные ворота, не разворачиваем ваш участок.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[["15+", "Лет опыта"], ["500+", "Готовых объектов"], ["100%", "Оплата после сдачи"]].map(([v, l]) => (
                  <div key={l} className="border border-white/10 rounded p-4 text-center">
                    <div className="font-serif text-2xl font-bold text-[#D97706]">{v}</div>
                    <div className="text-white/55 text-xs mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#2A2A2A] rounded-lg p-8 border border-white/10">
              <div className="text-[#D97706] text-xs uppercase tracking-[0.2em] mb-6">Наши принципы</div>
              {[
                ["🔒", "Фиксированная смета", "Цена не меняется после подписания договора. Даже если подорожал бетон."],
                ["🎯", "Лазерный контроль", "Отклонение не более 1,5 мм на 10 метров. Задокументировано актом."],
                ["📸", "Фотоотчёт ежедневно", "Каждый этап — вязка арматуры, подушка, приёмка бетона — в WhatsApp."],
                ["🏗", "Малогабаритная техника", "Заезжаем через стандартные ворота. Ваш забор и ландшафт остаются целы."],
              ].map(([icon, title, text]) => (
                <div key={title} className="flex gap-4 mb-6 last:mb-0">
                  <span className="text-2xl mt-0.5">{icon}</span>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">{title}</div>
                    <div className="text-white/55 text-sm leading-relaxed">{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── УСЛУГИ ── */}
      <section id="services" className="py-20 lg:py-28 bg-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#D97706] text-xs uppercase tracking-[0.25em] mb-4">Что мы делаем</div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">Наши услуги</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🏛",
                title: "Монолитная плита",
                subtitle: "Для сложных грунтов",
                pain: "Боитесь, что дом «поплывёт» на торфе или глине?",
                result: "Жёсткое основание с двойным армированием, которое распределяет нагрузку дома равномерно. Никаких перекосов дверей и трещин на фасаде через 2 сезона.",
                tag: "Популярно",
              },
              {
                icon: "🌡",
                title: "УШП",
                subtitle: "Фундамент и отопление в одном цикле",
                pain: "Не хотите тратить месяцы на разводку труб и стяжку?",
                result: "За 15 дней вы получаете готовое основание с интегрированными тёплыми полами и выводами коммуникаций. Сразу после застывания бетона можно приступать к чистовой отделке.",
                tag: "Быстро",
              },
              {
                icon: "🔩",
                title: "Ленточный фундамент",
                subtitle: "Глубокого заложения",
                pain: "Страх, что силы морозного пучения «выдавят» фундамент зимой.",
                result: "Заглубление ниже уровня промерзания (2 метра) и дренажная система. Ваш дом стоит неподвижно даже в самые суровые уральские морозы.",
                tag: "Надёжно",
              },
            ].map((s) => (
              <div key={s.title} className="bg-[#1C1C1C] rounded-lg overflow-hidden border border-white/10 hover:border-[#D97706]/50 transition-colors duration-300 group flex flex-col">
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{s.icon}</span>
                    <span className="text-[10px] uppercase tracking-widest text-[#D97706] border border-[#D97706]/40 px-2 py-1 rounded">{s.tag}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-white mb-1">{s.title}</h3>
                  <div className="text-white/45 text-xs uppercase tracking-wide mb-5">{s.subtitle}</div>

                  <div className="bg-[#2A2A2A] rounded p-4 mb-4">
                    <div className="text-[#D97706] text-xs font-semibold uppercase tracking-wide mb-2">Боль клиента</div>
                    <p className="text-white/65 text-sm leading-relaxed italic">«{s.pain}»</p>
                  </div>

                  <div>
                    <div className="text-white/40 text-xs font-semibold uppercase tracking-wide mb-2">Результат</div>
                    <p className="text-white/70 text-sm leading-relaxed">{s.result}</p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <button onClick={() => scrollTo("contact")}
                    className="w-full border border-[#D97706] text-[#D97706] group-hover:bg-[#D97706] group-hover:text-white transition-all duration-300 py-3 text-sm font-semibold rounded">
                    Получить расчёт
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── МАСТЕРА ── */}
      <section id="team" className="py-20 lg:py-28 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#D97706] text-xs uppercase tracking-[0.25em] mb-4">Кто делает работу</div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">Наши мастера</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Дмитрий",
                role: "Главный инженер",
                icon: "📐",
                fact: "240 монолитных плит",
                result: "За последние 10 лет — ни одного гарантийного случая или жалобы на трещины. Лично спроектировал и проконтролировал заливку каждой из них.",
                years: "10+ лет в профессии",
              },
              {
                name: "Алексей",
                role: "Прораб объекта",
                icon: "🎯",
                fact: "1,5 мм на 10 м",
                result: "Эксперт по лазерной геометрии. Заказчики сдают объекты отделочникам без дополнительных затрат на выравнивание.",
                years: "Лазерный контроль",
              },
              {
                name: "Иван",
                role: "Специалист по инженерным сетям",
                icon: "🔧",
                fact: "100% точность гильз",
                result: "Отвечает за закладку гильз под воду и канализацию. Вам никогда не придётся «долбить» готовый бетон из-за забытой трубы.",
                years: "По проекту точно",
              },
            ].map((m) => (
              <div key={m.name} className="border border-white/10 rounded-lg p-8 hover:border-[#D97706]/40 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#2A2A2A] rounded-full flex items-center justify-center text-3xl border border-white/10">
                    {m.icon}
                  </div>
                  <div>
                    <div className="font-serif text-xl font-semibold text-white">{m.name}</div>
                    <div className="text-[#D97706] text-xs uppercase tracking-wide mt-0.5">{m.role}</div>
                  </div>
                </div>

                <div className="bg-[#D97706]/10 border border-[#D97706]/30 rounded p-3 mb-4 flex items-center gap-3">
                  <Icon name="Award" size={16} className="text-[#D97706] shrink-0" />
                  <span className="text-[#D97706] font-semibold text-sm">{m.fact}</span>
                </div>

                <p className="text-white/65 text-sm leading-relaxed mb-4">{m.result}</p>

                <div className="flex items-center gap-2 text-white/35 text-xs">
                  <Icon name="Clock" size={12} />
                  <span>{m.years}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ОТЗЫВЫ ── */}
      <section id="reviews" className="py-20 lg:py-28 bg-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#D97706] text-xs uppercase tracking-[0.25em] mb-4">Что говорят клиенты</div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">Отзывы</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Сергей В.",
                location: "КП «Резиденция»",
                rating: 5,
                date: "Июнь 2024",
                text: "Заказывал плиту 12×14 под кирпич. Понравилось, что не разворотили участок — заехали на маленьком экскаваторе, забор не тронули. Каждый вечер присылали фотоотчёт в WhatsApp: вязка арматуры, подушка, приёмка бетона. Смета не выросла ни на рубль, хотя бетон в июне подорожал.",
                tag: "Монолитная плита",
              },
              {
                name: "Ирина К.",
                location: "Сысерть",
                rating: 5,
                date: "Август 2024",
                text: "Долго искала, кто сделает фундамент с коммуникациями. Ребята из этой компании сразу заложили все гильзы под воду и свет. Проверяла диагонали своим лазером — всё до миллиметра. После себя вывезли весь мусор и обрезки досок. Рекомендую за порядочность.",
                tag: "УШП",
              },
              {
                name: "Михаил",
                location: "Косулино",
                rating: 5,
                date: "Сентябрь 2024",
                text: "Строил баню на ЖБ сваях. Забили за 1 день. Понравилось, что договор официальный и гарантия прописана чётко. Прошло две зимы, двери не клинит, всё стоит ровно. Ребята знают своё дело, лишнего не навязывают.",
                tag: "Свайный фундамент",
              },
            ].map((r) => (
              <div key={r.name} className="bg-[#1C1C1C] rounded-lg p-6 border border-white/10 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="font-semibold text-white">{r.name}</div>
                    <div className="text-white/45 text-xs mt-0.5 flex items-center gap-1">
                      <Icon name="MapPin" size={10} />
                      {r.location}
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <span key={i} className="text-[#D97706] text-sm">★</span>
                    ))}
                  </div>
                </div>

                <p className="text-white/70 text-sm leading-relaxed flex-1 mb-4">«{r.text}»</p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-[10px] uppercase tracking-wide text-[#D97706] border border-[#D97706]/30 px-2 py-1 rounded">{r.tag}</span>
                  <span className="text-white/35 text-xs">{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ФОРМА ── */}
      <section id="contact" className="py-20 lg:py-28 bg-[#1C1C1C] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D97706]/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[#D97706] text-xs uppercase tracking-[0.25em] mb-4">Бесплатно</div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4">
              Получите бесплатный инженерный аудит вашего участка
            </h2>
            <p className="text-white/60 text-base max-w-2xl mx-auto leading-relaxed">
              Наш специалист приедет с лазерным оборудованием, измерит перепады высот и составит точную смету под ваш тип грунта. Это позволит вам избежать переплаты за лишний бетон и выбрать тип фундамента, который выдержит вес вашего дома.
            </p>
          </div>

          <div className="bg-[#2A2A2A] rounded-xl border border-white/10 p-6 sm:p-10">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-serif text-2xl text-white mb-2">Заявка принята!</h3>
                <p className="text-white/60">Инженер свяжется с вами в течение 30 минут в рабочее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/55 text-xs uppercase tracking-wide block mb-2">Ваше имя *</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Петров"
                      className="w-full bg-[#1C1C1C] border border-white/20 rounded px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#D97706] transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-white/55 text-xs uppercase tracking-wide block mb-2">Телефон *</label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full bg-[#1C1C1C] border border-white/20 rounded px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#D97706] transition-colors text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-white/55 text-xs uppercase tracking-wide block mb-2">Комментарий</label>
                  <textarea
                    rows={3}
                    value={formData.comment}
                    onChange={e => setFormData({ ...formData, comment: e.target.value })}
                    placeholder="Тип грунта, размер дома, адрес участка..."
                    className="w-full bg-[#1C1C1C] border border-white/20 rounded px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#D97706] transition-colors text-sm resize-none"
                  />
                </div>
                <div>
                  <button type="submit"
                    className="w-full bg-[#D97706] hover:bg-[#B45309] text-white font-semibold py-4 rounded transition-all duration-200 hover:scale-[1.01] text-base">
                    Записаться на бесплатный аудит
                  </button>
                  <p className="text-white/35 text-xs text-center mt-3">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности. Выезд инженера — бесплатно.
                  </p>
                </div>
              </form>
            )}
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {[
              { icon: "Phone", label: "Телефон", value: "+7 909 009-09-71", href: "tel:+79090090971" },
              { icon: "Clock", label: "Время работы", value: "Пн–Сб, 8:00–20:00", href: null },
              { icon: "MapPin", label: "Регион", value: "Екатеринбург и область", href: null },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-3 bg-[#2A2A2A] rounded-lg p-4 border border-white/10">
                <div className="w-10 h-10 bg-[#D97706]/15 rounded-full flex items-center justify-center shrink-0">
                  <Icon name={c.icon as "Phone"} size={18} className="text-[#D97706]" />
                </div>
                <div>
                  <div className="text-white/40 text-xs">{c.label}</div>
                  {c.href ? (
                    <a href={c.href} className="text-white text-sm font-medium hover:text-[#D97706] transition-colors">{c.value}</a>
                  ) : (
                    <div className="text-white text-sm font-medium">{c.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ФУТЕР ── */}
      <footer className="bg-[#141414] border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-[#D97706]/60 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-4 h-4 text-[#D97706]" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="20,3 37,13 37,27 20,37 3,27 3,13" />
              </svg>
            </div>
            <span className="text-white/60 text-xs uppercase tracking-widest">Свердловск Фундамент</span>
          </div>
          <div className="text-white/30 text-xs text-center">
            © 2009–2026 · Все права защищены · Екатеринбург
          </div>
          <a href="tel:+79090090971" className="text-[#D97706] text-sm font-semibold hover:text-[#F59E0B] transition-colors">
            +7 909 009-09-71
          </a>
        </div>
      </footer>

    </div>
  );
}