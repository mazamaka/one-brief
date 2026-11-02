// Все раунды стенда. Новая модель = новый объект в entries нужного раунда:
// slug — имя папки в rounds/<id>/sites/ и префикс скринов в rounds/<id>/shots/.
window.ONE_BRIEF = {
  repo: "https://github.com/mazamaka/one-brief",
  criteria: [
    { key: "visual", label: "Съёмка", hint: "ч/б, контраст, человек в центре, фон размыт" },
    { key: "palette", label: "Палитра и шрифт", hint: "чёрный и графит, неоновый оранжевый, металлическое серебро, жирный гротеск" },
    { key: "structure", label: "Структура", hint: "герой с командой, программы по целям, тренеры с сертификатами, истории, пробное" },
    { key: "density", label: "Плотность", hint: "мало воздуха, сжатая подача, правдоподобный текст" },
    { key: "mechanics", label: "Механика", hint: "запись, фильтры, переключатели работают" },
    { key: "ready", label: "Готовность", hint: "сколько можно отдать клиенту без доработки" },
  ],
  rounds: [
    {
      id: "2026-11-02-fitness",
      date: "02.11.2026",
      title: "Раунд 2 — клуб силовой подготовки",
      lead:
        "Тот же промпт, что в брифе В первого раунда: дорогая фитнес-студия, профессионализм и чувство принадлежности, контрастная ч/б съёмка, чёрный с неоновым оранжевым и серебром, высокая плотность. Один промпт без изменений, ноль правок после генерации.",
      audit: "rounds/2026-11-02-fitness/AUDIT.md",
      prompt: "rounds/2026-11-02-fitness/prompt.txt",
      entries: [
        {
          slug: "glm-5-3-flash",
          model: "GLM 5.3 Flash",
          env: "Z.ai · Space, Next.js",
          work: "FORGE",
          time: null,
          verdict: "своя ч/б съёмка и запись с настоящим бэкендом",
          pros: [
            "Единственная работа с собственными кадрами: 14 сгенерированных ч/б снимков, атлет в центре, фон утоплен",
            "Настоящее приложение: табы целей, форма с валидацией отправляет заявку в API /api/trial",
            "Живой голос: «a crew that learns your name by your second session», первое занятие бесплатно",
          ],
          cons: ["Команда тренеров в герое — только аватарки", "Серебра из брифа нет, акцент один оранжевый"],
          scores: { visual: 9, palette: 8, structure: 9, density: 8, mechanics: 9, ready: 9 },
          original: "https://s1j919sexu51-d.space-z.ai/",
          note: "Копия — статичное зеркало Next.js-приложения: страница и скрипты как есть, картинки без оптимизатора. Бэкенда у копии нет, поэтому запись работает только в оригинале.",
        },
        {
          slug: "argon-4",
          model: "Argon 4",
          env: "Gemini · Canvas",
          work: "VULCAN COLLECTIVE",
          time: null,
          verdict: "самая плотная: 6 программ, 6 тренеров, кейсы с DEXA",
          pros: [
            "Герой ровно по брифу: манифест слева, справа прожектор тренера с переключением по составу",
            "Шесть программ с фильтром по целям, шесть тренеров с сертификатами и метриками, четыре кейса с таблицами «день 1 → финал»",
            "Запись выдаёт посадочный талон с кодом, тренером и слотом",
          ],
          cons: [
            "Телеметрийный жаргон перегибает голос: «Coaching Directorate», «Dispatch slot», «Sector 04»",
            "Все фото — Unsplash по хотлинку; на телефоне шапка тесная, кнопка в три строки",
          ],
          scores: { visual: 8, palette: 8, structure: 10, density: 10, mechanics: 9, ready: 6 },
          original: "https://share.gemini.google/IbAh1wPqknGn",
          note: "Копия — HTML канваса из шары Gemini байт в байт.",
        },
        {
          slug: "gemini-3-8-flash",
          model: "Gemini 3.8 Flash",
          env: "Gemini · Canvas",
          work: "KINETIK // ATHLETIC LAB",
          time: null,
          verdict: "лабораторный стиль Argon, но тоньше и со стоковыми портретами",
          pros: [
            "Треки по целям со слотами и счётчиком мест",
            "Конструктор пропуска: карточка справа заполняется по мере ввода",
            "Блок оборудования и цифр зала — принадлежность через факты",
          ],
          cons: [
            "Тренеры — студийные стоковые портреты с улыбкой, мимо «sweat, muscle definition»",
            "У историй участников нет фото, команды тренеров в герое нет",
          ],
          scores: { visual: 6, palette: 8, structure: 8, density: 8, mechanics: 8, ready: 6 },
          original: "https://share.gemini.google/iWz0loKo6Kc5",
          note: "Копия — HTML канваса из шары Gemini байт в байт.",
        },
        {
          slug: "fable-5-1",
          model: "Fable 5.1",
          env: "claude.ai · Design",
          work: "ANVIL Strength Club",
          time: null,
          verdict: "лучшая палитра и серебро, но макет без фото и без JS",
          pros: [
            "Единственная с настоящим металлическим серебром и фактурами (насечка грифа, зерно) плюс отдельный style tile",
            "Самая точная структура: шесть тренеров прямо в герое, 3 цели × 3 программы, кейсы «до/после» с метриками",
            "Вместо фото — рамки с заданием фотографу: кадр, объектив, свет",
          ],
          cons: [
            "Это макет Design-канваса: форма и переключатели не работают, меню на телефоне не сворачивается",
            "Фотографий нет вовсе, в футере плейсхолдеры [Street address], [Phone number]",
          ],
          scores: { visual: 4, palette: 10, structure: 10, density: 9, mechanics: 3, ready: 4 },
          original: "https://claude.ai/artifact/NUkt2QkWFhmgTjEo9ZRtAu#page-dcb81aee8d83",
          extra: [
            { label: "Style tile", href: "rounds/2026-11-02-fitness/sites/fable-5-1/style-tile.html" },
            { label: "Исходник .dc.html", href: "https://github.com/mazamaka/one-brief/tree/main/rounds/2026-11-02-fitness/sites/fable-5-1/source" },
          ],
          note: "Копия — артборд канваса, отрисованный с параметрами по умолчанию (accent #FF5A1F, texture on); исходник лежит рядом без изменений.",
        },
        {
          slug: "gpt-6-luna",
          model: "GPT-6 Luna",
          env: "Codex",
          work: "IRONVALE",
          time: null,
          verdict: "чисто и аккуратно, но пусто против брифа на плотность",
          pros: [
            "Самая опрятная вёрстка: ровная сетка, крупный гротеск, мобильная версия без единого сбоя",
            "Табы целей и форма с подтверждением работают",
          ],
          cons: [
            "Около 3 тыс. знаков на всю страницу и много воздуха — прямо против «minimal whitespace, high density»",
            "Одна история участника, тренеры описаны одной строкой; фото — Unsplash",
          ],
          scores: { visual: 7, palette: 7, structure: 6, density: 4, mechanics: 7, ready: 7 },
          original: null,
          note: "Файл из рабочей папки Codex; опубликован только здесь.",
        },
      ],
      findings: [
        "Ассеты снова решают. Вперёд вышел GLM — впервые на стенде модель принесла собственные снимки. В первом раунде этот же бриф выиграл GPT-6 Astra ровно потому, что единственный принёс настоящую съёмку.",
        "Две модели Gemini пишут как одна: Elena Rostova есть в обеих, фамилии Vance и Thorne тоже, оба героя начинаются с «FORGED IN», общий словарь — DEXA, Eleiko, cadre, tribe, dawn-слот.",
        "Имена кочуют между моделями и раундами. Marcus — во всех пяти работах, у трёх он главный тренер. FORGE был у GPT-6 Astra — теперь у GLM; ANVIL был у Opus 5 — теперь у Fable; «Stronger. Together.» был у GPT-6 Astra — теперь у GPT-6 Luna. Hale, Lindqvist, Dana, Viktor, Maya повторяются между сайтами.",
        "Палитру все пятеро прочли одинаково: чёрный и ровно один неоновый оранжевый. Металлическое серебро из брифа сделал только Fable.",
        "Среда задаёт формат. Fable в Design-канвасе сдал макет, а не сайт; GLM в Z.ai — полноценное Next.js-приложение с API; Gemini Canvas и Codex — один HTML-файл.",
      ],
      gaps: [
        "Время генерации не зафиксировано — колонку добавим, когда будут таймеры.",
        "Режим рассуждения у каждой модели не записан; промпт сверен по шарам Gemini, у остальных — по названию задачи и содержанию.",
        "Запись у GLM проверена только в копии: эндпоинт /api/trial в оригинале отвечает, но тестовую заявку туда не отправляли.",
        "Оценки — один проход ревьюера по шкале 1–10 на десктопе 1440 и телефоне 390.",
      ],
    },
    {
      id: "2026-09-08-three-briefs",
      date: "08.09.2026",
      title: "Раунд 1 — три брифа, четыре модели",
      lead:
        "Каждый бриф ушёл всем моделям без изменений: веб-чат, максимальный режим рассуждения, ни одной правки после генерации. Здесь только ссылки и короткие выводы; полный разбор — в аудите.",
      audit: "rounds/2026-09-08-three-briefs/AUDIT.md",
      archive: true,
      briefs: [
        {
          name: "Бриф A — йога-студия",
          entries: [
            { model: "GLM-5.3", work: "morrow", time: "≈14 мин", href: "https://chat.z.ai/space/c1km27v04vm0-art", verdict: "реальные даты недели, бронь уменьшает места" },
            { model: "Claude Opus 5", work: "Aubade", time: "≈9 мин", href: "https://claude.ai/public/artifacts/e4fbe13f-2ef5-421f-8a4a-c6e16c20d690", verdict: "своя нарисованная сцена вместо фото, быстрее всех" },
            { model: "Fable 5.1", work: "Sunroom", time: "≈18 мин", href: "https://claude.ai/public/artifacts/3aa6b446-f3ed-40a2-96e8-5d2425d68367", verdict: "сильнейший первый экран: дышащее солнце" },
            { model: "GPT-6 Astra", work: "still.", time: "23:44", href: "https://still-yoga.mazamaka603.chatgpt.site/", verdict: "фото, живое расписание, запись на 50+ слотов" },
          ],
        },
        {
          name: "Бриф Б — портфолио дизайнера",
          entries: [
            { model: "GLM-5.3", work: "Mara Voss", time: "≈15 мин", href: "https://chat.z.ai/space/w1emb7su6gk1-art", verdict: "пастборд с перетаскиванием, настоящий A4 PDF" },
            { model: "Claude Opus 5", work: "Anouk Merz", time: "≈25 мин", href: "https://claude.ai/public/artifacts/f6687445-c016-422e-9f32-efdd77f3020c", verdict: "палитра из ризографа, misregistration как приём" },
            { model: "Fable 5.1", work: "Ines Kalder", time: "≈35 мин", href: "https://claude.ai/public/artifacts/c55afb1e-85ab-460b-8591-4afb0ab5e89b", verdict: "книга на 104 полосы со счётчиком страниц" },
            { model: "GPT-6 Astra", work: "Alex Morgan®", time: "18:02", href: "https://alex-morgan-monograph.mazamaka603.chatgpt.site", verdict: "наборная комната и настоящие лекции Бирута" },
          ],
        },
        {
          name: "Бриф В — клуб силовой подготовки (тот же промпт, что в раунде 2)",
          entries: [
            { model: "GLM-5.3", work: "IRONHAUS", time: "≈15 мин", href: "https://chat.z.ai/space/u18mu7q5ukc0-art", verdict: "тренировочный журнал, принадлежность в цифрах" },
            { model: "Claude Opus 5", work: "ANVIL", time: "≈13 мин", href: "https://claude.ai/public/artifacts/e6e780cf-09af-4132-b4ba-1bf6ed372750", verdict: "лучшая палитра, честные рамки под съёмку" },
            { model: "Fable 5.1", work: "MASSIF", time: "≈18 мин", href: "https://claude.ai/public/artifacts/4b22ad02-0e07-4b55-a3ba-9495d0150c1d", verdict: "расписание по реальным часам, адрес в Праге" },
            { model: "GPT-6 Astra", work: "FORGE", time: "16:12", href: "https://forge-training-club.mazamaka603.chatgpt.site", verdict: "единственная настоящая ч/б съёмка" },
          ],
        },
      ],
      summary:
        "По одному критерию — сколько можно отдать клиенту без доработки — во всех трёх брифах впереди GPT-6 Astra: единственный доносит реальные ассеты, ценой самого долгого времени и двух внешних срывов. GLM-5.3 — лучшее соотношение работающей механики к минутам; Opus и Fable сильнее в художественной идее, но сдают меньше готового.",
    },
  ],
};
