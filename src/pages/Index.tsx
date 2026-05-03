import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_BG = "https://cdn.poehali.dev/projects/96f077e8-0ece-46b4-8f71-5de4866d74b2/files/9f217796-09dd-4da5-bfc7-5756cb8842fa.jpg";
const TRUST_BG = "https://cdn.poehali.dev/projects/96f077e8-0ece-46b4-8f71-5de4866d74b2/files/bc9dc21b-e4fa-442f-a3fe-fabbf3ac6cd8.jpg";
const SERVICE_USHP = "https://cdn.poehali.dev/projects/96f077e8-0ece-46b4-8f71-5de4866d74b2/files/96476f3b-8861-4f9d-a13f-b677d7567298.jpg";
const SERVICE_PILES = "https://cdn.poehali.dev/projects/96f077e8-0ece-46b4-8f71-5de4866d74b2/files/99f73dff-20da-4a76-9afa-d120b07c3399.jpg";
const SERVICE_STRIP = "https://cdn.poehali.dev/projects/96f077e8-0ece-46b4-8f71-5de4866d74b2/files/be385bfc-43fc-4633-9733-795b82b167c2.jpg";
const TEAM_BG = "https://cdn.poehali.dev/projects/96f077e8-0ece-46b4-8f71-5de4866d74b2/files/bc9dc21b-e4fa-442f-a3fe-fabbf3ac6cd8.jpg";
const REBAR_BG = "https://cdn.poehali.dev/projects/96f077e8-0ece-46b4-8f71-5de4866d74b2/files/e5d360d3-312d-4a9d-bba0-bb91c14330a0.jpg";

const PERSON_1 = "https://cdn.poehali.dev/projects/96f077e8-0ece-46b4-8f71-5de4866d74b2/files/15be168d-ccbe-4bcf-b006-42fd15688781.jpg";
const PERSON_2 = "https://cdn.poehali.dev/projects/96f077e8-0ece-46b4-8f71-5de4866d74b2/files/12b71933-1f56-4d7d-a60c-9b39d6a90d8c.jpg";
const PERSON_3 = "https://cdn.poehali.dev/projects/96f077e8-0ece-46b4-8f71-5de4866d74b2/files/3390c4d6-372c-45c5-b400-508aebe84ccd.jpg";

export default function Index() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim().length < 6) return;
    setSubmitted(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="font-sans bg-[#0D0D0D] text-white antialiased">

      {/* ── ШАПКА ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border border-[#D4AF37] flex items-center justify-center shrink-0">
              <span className="font-display font-bold text-[#D4AF37] text-lg leading-none">СФ</span>
            </div>
            <div className="leading-tight hidden sm:block">
              <div className="text-[10px] font-semibold tracking-[0.32em] text-white/90 uppercase">Свердловск</div>
              <div className="text-[10px] font-semibold tracking-[0.32em] text-white/50 uppercase">Фундамент</div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {[["Преимущества", "trust"], ["Услуги", "services"], ["Мастера", "team"], ["Отзывы", "reviews"], ["Контакты", "contact"]].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)}
                className="text-[13px] tracking-wide text-white/70 hover:text-[#D4AF37] transition-colors">
                {label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:+79090090971" className="text-white font-medium text-base tracking-wide hover:text-[#D4AF37] transition-colors">
              +7 909 009-09-71
            </a>
            <button onClick={() => scrollTo("contact")}
              className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D0D0D] text-[12px] uppercase tracking-[0.2em] px-5 py-2.5 transition-all">
              Заказать звонок
            </button>
          </div>

          <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-[#0D0D0D] border-t border-white/5 px-6 py-6 flex flex-col gap-4">
            {[["Преимущества", "trust"], ["Услуги", "services"], ["Мастера", "team"], ["Отзывы", "reviews"], ["Контакты", "contact"]].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)}
                className="text-left text-white/80 hover:text-[#D4AF37] py-1 text-base">
                {label}
              </button>
            ))}
            <a href="tel:+79090090971" className="text-white font-medium text-lg mt-2">+7 909 009-09-71</a>
            <button onClick={() => scrollTo("contact")}
              className="border border-[#D4AF37] text-[#D4AF37] text-xs uppercase tracking-[0.2em] px-5 py-3 mt-1">
              Заказать звонок
            </button>
          </div>
        )}
      </header>

      {/* ── 1. HERO ── */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#0D0D0D]">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-[#0D0D0D]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D]/60" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
              <span className="w-12 h-px bg-[#D4AF37]"></span>
              <span className="text-[11px] tracking-[0.4em] uppercase text-[#D4AF37] font-medium">Екатеринбург · с 2014 года</span>
            </div>

            <h1 className="font-display text-[40px] sm:text-[56px] lg:text-[72px] font-bold leading-[1.02] text-white mb-8 animate-fade-in tracking-tight" style={{ animationDelay: "0.15s", opacity: 0 }}>
              Боитесь трещин<br/>весной? <span className="text-[#D4AF37]">Зальем</span><br/>
              фундамент с гарантией <span className="text-[#D4AF37]">25 лет.</span>
            </h1>

            <p className="text-white/65 text-base sm:text-lg max-w-xl leading-relaxed mb-12 animate-fade-in font-light" style={{ animationDelay: "0.3s", opacity: 0 }}>
              Делаем геологию участка, подбираем армирование под уральский грунт и фиксируем смету в договоре. Вы не платите за скрытые расходы и логистику.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 animate-fade-in" style={{ animationDelay: "0.45s", opacity: 0 }}>
              <button onClick={() => scrollTo("contact")}
                className="group bg-[#D4AF37] hover:bg-[#E6C76A] text-[#0D0D0D] font-semibold text-[13px] uppercase tracking-[0.18em] px-10 py-5 transition-all duration-300 flex items-center gap-3">
                Вызвать инженера на анализ грунта
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <p className="text-white/40 text-xs sm:text-sm mt-6 animate-fade-in font-light" style={{ animationDelay: "0.6s", opacity: 0 }}>
              Выезд бесплатно. Результат геологии останется у вас.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "0.9s", opacity: 0 }}>
          <span className="text-[10px] tracking-[0.4em] uppercase text-white/40">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
        </div>
      </section>

      {/* ── 2. БЛОК ДОВЕРИЯ ── */}
      <section id="trust" className="relative py-24 lg:py-32 bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <img src={TRUST_BG} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
            <div className="text-[11px] tracking-[0.4em] uppercase text-[#D4AF37] mb-4">Цифры, которые важны</div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Каждое число — результат строгого инженерного контроля
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/[0.06]">
            {[
              {
                value: "0 мм",
                title: "усадки за 12 лет",
                text: "С 2014 года мы залили 450+ фундаментов в Свердловской области. Ни один из них не дал трещин."
              },
              {
                value: "До 2 мм",
                title: "точность геометрии",
                text: "Выставляем опалубку лазером. Идеально ровный горизонт экономит до 50 000 ₽ на кладочном растворе."
              },
              {
                value: "М300+",
                title: "марка нашего бетона",
                text: "Не используем «самомес». Каждая машина с паспортом качества. Обязательно вибрируем смесь."
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#1A1A1A] p-10 lg:p-14 hover:bg-[#222222] transition-colors duration-500 group">
                <div className="font-display text-5xl lg:text-6xl font-bold text-[#D4AF37] mb-4 tracking-tight">
                  {item.value}
                </div>
                <div className="text-white text-lg font-medium mb-4">— {item.title}</div>
                <p className="text-white/55 text-sm leading-relaxed font-light">
                  {item.text}
                </p>
                <div className="w-12 h-px bg-[#D4AF37]/30 mt-8 group-hover:w-20 group-hover:bg-[#D4AF37] transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. УСЛУГИ ── */}
      <section id="services" className="py-24 lg:py-32 bg-[#0D0D0D]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20 gap-6">
            <div className="max-w-2xl">
              <div className="text-[11px] tracking-[0.4em] uppercase text-[#D4AF37] mb-4">Наши услуги</div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                Решения под уральский грунт<br/>и сезонные нагрузки
              </h2>
            </div>
            <p className="text-white/55 text-sm max-w-md font-light leading-relaxed">
              Подбираем тип фундамента после геологии. Никаких «по аналогии с соседом» — расчёт ведётся под ваш конкретный участок.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: SERVICE_USHP,
                title: "Утеплённая шведская плита",
                short: "УШП",
                pain: "Устали от ледяных полов и космических счетов за отопление?",
                result: "УШП блокирует холод от земли и снижает затраты на обогрев до 30%. Готовое основание с вшитыми трубами тёплого пола.",
              },
              {
                img: SERVICE_PILES,
                title: "Железобетонные забивные сваи",
                short: "ЖБ сваи",
                pain: "На участке торф, а строить нужно уже в этом месяце?",
                result: "Забиваем сваи до плотных слоёв грунта за 1–2 дня. Ландшафт остаётся целым, а возводить стены можно сразу.",
              },
              {
                img: SERVICE_STRIP,
                title: "Монолитный ленточный фундамент",
                short: "Лента",
                pain: "Переживаете, что из-за морозного пучения стены перекосит?",
                result: "Жёсткий армокаркас из стальной арматуры 14 мм. Лента выдержит давление почвы при −35 °C без деформаций.",
              },
            ].map((s) => (
              <div key={s.title}
                className="group relative bg-[#141414] border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500 overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent"></div>
                  <div className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-medium border border-[#D4AF37]/40 px-3 py-1 bg-[#0D0D0D]/60 backdrop-blur">
                    {s.short}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-5 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed mb-4 italic font-light">
                    {s.pain}
                  </p>
                  <div className="w-8 h-px bg-[#D4AF37]/40 mb-4"></div>
                  <p className="text-white/85 text-[15px] leading-relaxed font-light">
                    {s.result}
                  </p>

                  <button onClick={() => scrollTo("contact")}
                    className="mt-7 flex items-center gap-2 text-[#D4AF37] text-[12px] uppercase tracking-[0.22em] font-medium hover:gap-4 transition-all">
                    Подробнее
                    <Icon name="ArrowUpRight" size={14} />
                  </button>
                </div>

                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_30px_rgba(212,175,55,0.15)]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. МАСТЕРА ── */}
      <section id="team" className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#1A1A1A]">
          <img src={TEAM_BG} alt="" className="w-full h-full object-cover opacity-[0.05]" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
            <div className="text-[11px] tracking-[0.4em] uppercase text-[#D4AF37] mb-4">Наши мастера</div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Люди, которые<br/>отвечают за ваш фундамент
            </h2>
          </div>

          <div className="space-y-20 lg:space-y-32">
            {[
              {
                img: PERSON_1,
                name: "Анатолий Шаров",
                role: "Главный инженер · стаж 14 лет",
                text: "Спроектировал 320 фундаментов. Лично изучает результаты бурения. Точные расчёты экономят материалы заказчика, сохраняя 100% несущей способности.",
                reverse: false,
              },
              {
                img: PERSON_2,
                name: "Кирилл Кулагин",
                role: "Прораб · стаж 12 лет",
                text: "Отвечает за миллиметровую точность геометрии. Контролирует плотность вязки арматуры и уход за бетоном в первые дни после заливки.",
                reverse: true,
              },
              {
                img: PERSON_3,
                name: "Андрей Наумов",
                role: "Бригадир монолитчиков · стаж 11 лет",
                text: "Отвечает за чистоту. Застилает въезд, чтобы техника не повредила заборы. После его бригады на участке нет строительного мусора.",
                reverse: false,
              },
            ].map((p, i) => (
              <div key={p.name} className={`grid lg:grid-cols-2 gap-10 lg:gap-20 items-center ${p.reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 w-full overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover grayscale" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent"></div>
                  <div className="absolute -bottom-4 -right-4 lg:-right-8 border border-[#D4AF37]/40 px-5 py-3 bg-[#0D0D0D]">
                    <div className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-medium">№ 0{i + 1}</div>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-3xl lg:text-4xl font-bold text-[#D4AF37] mb-2 tracking-tight">
                    {p.name}
                  </h3>
                  <div className="text-white/60 text-sm tracking-wide mb-6 font-light">
                    {p.role}
                  </div>
                  <div className="w-16 h-px bg-[#D4AF37]/40 mb-6"></div>
                  <p className="text-white/85 text-lg leading-relaxed font-light">
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. ОТЗЫВЫ ── */}
      <section id="reviews" className="py-24 lg:py-32 bg-[#1A1A1A]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="text-[11px] tracking-[0.4em] uppercase text-[#D4AF37] mb-4">Отзывы клиентов</div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                Реальные истории<br/>с участков нашей работы
              </h2>
            </div>
            <div className="flex items-center gap-4 text-white/60">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={18} className="text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>
              <span className="text-sm">4.9 / 5 · 87 отзывов</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                location: "п. Горный Щит",
                name: "Игорь",
                text: "Искал, кто зальёт плиту без скрытых доплат. Включили в договор всё: от насоса до проживания рабочих. Перепад всего 3 мм. Каменщики сказали, что давно такой идеальной геометрии не видели.",
              },
              {
                location: "г. Берёзовский",
                name: "Елена М.",
                text: "Боялась, что дом поплывёт. Приехал инженер, пробурил грунт, объяснил, что нужны сваи. Сделали ЖБ сваи за пару дней. Соседям ничего не сломали, грязи не развели. Стоит намертво.",
              },
              {
                location: "Сысерть",
                name: "Дмитрий С.",
                text: "Всё максимально прозрачно. На каждую машину бетона прораб показывал документы с завода, марка М350. Прислали видео, как вибрируют бетон. Гарантия 25 лет.",
              },
            ].map((r) => (
              <div key={r.name + r.location} className="bg-[#0D0D0D] border border-white/5 p-8 hover:border-[#D4AF37]/30 transition-colors duration-500 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-white/70">
                    <Icon name="MapPin" size={14} className="text-[#D4AF37]" />
                    <span className="text-[13px] tracking-wide">{r.location}</span>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={12} className="text-[#D4AF37] fill-[#D4AF37]" />
                    ))}
                  </div>
                </div>

                <p className="text-white/80 text-[15px] leading-relaxed font-light flex-1 mb-6">
                  «{r.text}»
                </p>

                <div className="border-t border-white/5 pt-5 flex items-center justify-between">
                  <div className="font-display font-semibold text-white text-sm">{r.name}</div>
                  <div className="text-white/30 text-[11px] tracking-[0.2em] uppercase">Проверено</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. ФОРМА ЗАХВАТА ── */}
      <section id="contact" className="relative py-24 lg:py-32 bg-[#0D0D0D] overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <img src={REBAR_BG} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-transparent to-transparent"></div>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="text-[11px] tracking-[0.4em] uppercase text-[#D4AF37] mb-4">Финальный аккорд</div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.05] mb-8">
                Получите точную смету<br/>и расчёт нагрузок
              </h2>
              <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-12 max-w-lg font-light">
                Оставьте заявку, и наш инженер бесплатно приедет к вам для экспресс-анализа грунта буром. Подготовим детализированную смету, сумма в которой не изменится.
              </p>

              {submitted ? (
                <div className="border border-[#D4AF37]/40 p-8 bg-[#D4AF37]/5">
                  <Icon name="Check" size={32} className="text-[#D4AF37] mb-4" />
                  <div className="font-display text-2xl font-bold text-white mb-2">Заявка принята</div>
                  <p className="text-white/60 font-light">Инженер свяжется с вами в течение 30 минут.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-md">
                  <div className="mb-10">
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-white/40 mb-3">
                      Ваш телефон
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 ___ ___-__-__"
                      className="w-full bg-transparent border-0 border-b border-white/20 focus:border-[#D4AF37] outline-none text-white text-xl py-3 placeholder:text-white/20 transition-colors font-light"
                      required
                    />
                  </div>

                  <button type="submit"
                    className="group w-full bg-[#D4AF37] hover:bg-[#E6C76A] text-[#0D0D0D] font-semibold text-[13px] uppercase tracking-[0.2em] px-10 py-5 transition-all duration-300 flex items-center justify-center gap-3">
                    Пригласить инженера
                    <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-white/30 text-xs mt-5 font-light">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
                  </p>
                </form>
              )}
            </div>

            <div className="hidden lg:flex items-center justify-center relative">
              <div className="relative w-full aspect-square max-w-md">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <defs>
                    <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#E6C76A" />
                      <stop offset="100%" stopColor="#A8862A" />
                    </linearGradient>
                  </defs>
                  {/* Армокаркас — изометрия */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line key={`v${i}`} x1={50 + i * 40} y1="80" x2={50 + i * 40} y2="320" stroke="url(#goldGrad)" strokeWidth="1.5" opacity="0.7" />
                  ))}
                  {Array.from({ length: 7 }).map((_, i) => (
                    <line key={`h${i}`} x1="50" y1={80 + i * 40} x2="330" y2={80 + i * 40} stroke="url(#goldGrad)" strokeWidth="1.5" opacity="0.7" />
                  ))}
                  {/* Угловые элементы */}
                  <rect x="40" y="70" width="20" height="20" fill="none" stroke="#D4AF37" strokeWidth="2" />
                  <rect x="320" y="70" width="20" height="20" fill="none" stroke="#D4AF37" strokeWidth="2" />
                  <rect x="40" y="310" width="20" height="20" fill="none" stroke="#D4AF37" strokeWidth="2" />
                  <rect x="320" y="310" width="20" height="20" fill="none" stroke="#D4AF37" strokeWidth="2" />
                  {/* Подписи */}
                  <text x="200" y="50" textAnchor="middle" fill="#D4AF37" fontSize="10" letterSpacing="3" fontFamily="Montserrat">АРМОКАРКАС · 14 ММ</text>
                  <text x="200" y="370" textAnchor="middle" fill="#D4AF37" fontSize="10" letterSpacing="3" fontFamily="Montserrat">ШАГ 200 · СТАЛЬ А500С</text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-32 h-32 rounded-full bg-[#D4AF37]/5 blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ФУТЕР ── */}
      <footer className="bg-[#0D0D0D] border-t border-white/5 py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border border-[#D4AF37] flex items-center justify-center">
              <span className="font-display font-bold text-[#D4AF37] text-lg leading-none">СФ</span>
            </div>
            <div className="leading-tight">
              <div className="text-[10px] font-semibold tracking-[0.32em] text-white/90 uppercase">Свердловск</div>
              <div className="text-[10px] font-semibold tracking-[0.32em] text-white/50 uppercase">Фундамент</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-white/50 font-light">
            <a href="tel:+79090090971" className="hover:text-[#D4AF37] transition-colors">+7 909 009-09-71</a>
            <span className="hidden sm:block w-px h-4 bg-white/10"></span>
            <a href="mailto:info@sverdlovsk-fundament.ru" className="hover:text-[#D4AF37] transition-colors">info@sverdlovsk-fundament.ru</a>
            <span className="hidden sm:block w-px h-4 bg-white/10"></span>
            <span>Екатеринбург, Свердловская область</span>
          </div>

          <div className="text-white/30 text-xs">© 2026 · Все права защищены</div>
        </div>
      </footer>
    </div>
  );
}
