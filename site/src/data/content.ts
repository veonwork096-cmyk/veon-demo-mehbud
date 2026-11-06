// Homepage content: only facts from veon/client.json and real article titles/covers from the client's blog.
export const phones = {
  kyiv: { label: "+38 (044) 455 78 33", href: "tel:+380444557833" },
  kyivMobile: { label: "+38 (050) 304 67 26", href: "tel:+380503046726" },
  lviv: { label: "+38 (032) 257 18 85", href: "tel:+380322571885" },
  odesa: { label: "+38 (048) 799 89 10", href: "tel:+380487998910" },
} as const;

export const email = { label: "sales@mehbud.com.ua", href: "mailto:sales@mehbud.com.ua" } as const;

// Messengers confirmed in client.json (buttons on mehbud.com.ua).
export const messengers = [
  { name: "WhatsApp", href: "https://api.whatsapp.com/send?phone=380503822883" },
  { name: "Telegram", href: "https://t.me/zavod_mehbud_bot" },
] as const;

export const socials = [
  { name: "Facebook", href: "https://www.facebook.com/ZavodMehbud/", icon: "facebook" },
  { name: "Instagram", href: "https://www.instagram.com/mehbud1/", icon: "instagram" },
  { name: "YouTube", href: "https://www.youtube.com/c/MehbudUa", icon: "youtube" },
] as const;

export interface Cover { src: string; widths: number[]; w: number; h: number; }
const cover = (src: string, widths = [480, 800, 1200], w = 1376, h = 768): Cover => ({ src, widths, w, h });

export type Rubric = "fasadi" | "steli" | "parkany" | "metal" | "sad";
export const rubricNames: Record<Rubric, string> = {
  fasadi: "Фасади",
  steli: "Стелі",
  parkany: "Паркани",
  metal: "Метал",
  sad: "Сад і город",
};

export interface Hub {
  id: string;
  rubric: Rubric;
  name: string;
  tone: "primary" | "dark" | "light";
  makes: string[];
  ask: string;
  product: string;
  articles: string[];
  cover?: { img: Cover; title: string };
}

export const hubs: Hub[] = [
  {
    id: "fasadi",
    rubric: "fasadi",
    name: "Фасади",
    tone: "primary",
    makes: [
      "Навісні вентильовані фасади: касетні, рейкові та жалюзійні",
      "Фасадні касети і рейки на європейському обладнанні",
      "Сертифікати відповідності нормам України",
    ],
    ask: "Запитати про фасади",
    product: "Продукція: фасади",
    articles: [
      "Сумісність металевих фасадів Мехбуд з віконними системами Reynaers, Schüco та Alutech: Технічний аналіз та інженерні рішення",
      "Паспорт Опорядження Фасаду в Києві та Великих Містах: Покроковий Гід з Отримання Дозволів у 2026 Році",
      "Блискавкозахист: чи може металевий фасад виконувати роль громовідводу?",
    ],
    cover: {
      img: cover("/img/fasadi-sumisnist"),
      title: "Сумісність металевих фасадів Мехбуд з віконними системами Reynaers, Schüco та Alutech: Технічний аналіз та інженерні рішення",
    },
  },
  {
    id: "steli",
    rubric: "steli",
    name: "Стелі",
    tone: "dark",
    makes: [
      "Підвісні металеві стелі: рейкові, кубоподібні, Т-подібні та інші",
      "Стелі з дозволами СЕС і служби техногенної безпеки",
    ],
    ask: "Запитати про стелі",
    product: "Продукція: стелі",
    articles: [
      "Як правильно скласти технічне завдання (ТЗ) на закупівлю металевих стель, щоб уникнути недобросовісних постачальників.",
      "Архітектурні та інженерні рішення для вологих приміщень: Застосування металевих підвісних стельових систем",
      "Рейкова стеля від заводу Мехбуд для гаража",
    ],
    cover: {
      img: cover("/img/steli-volohi"),
      title: "Архітектурні та інженерні рішення для вологих приміщень: Застосування металевих підвісних стельових систем",
    },
  },
  {
    id: "parkany",
    rubric: "parkany",
    name: "Паркани",
    tone: "primary",
    makes: [
      "Ексклюзивні металеві паркани: «Ексклюзив Лего», «Ранчо», «Жалюзі»",
      "Замір на об'єкті та шеф-монтаж",
    ],
    ask: "Запитати про паркани",
    product: "Продукція: паркани",
    articles: [
      "Огорожа для приватного будинку: види, норми та монтаж",
      "Монтаж огорож на складних ґрунтах: Помилки фундаменту та шляхи їх усунення",
      "Мінімалістичні огорожі: Ідеальні рішення для будинків у скандинавському стилі (Barnhouse)",
    ],
    cover: {
      img: cover("/img/parkany-minimal"),
      title: "Мінімалістичні огорожі: Ідеальні рішення для будинків у скандинавському стилі (Barnhouse)",
    },
  },
  {
    id: "metal",
    rubric: "metal",
    name: "Метал і профілі",
    tone: "light",
    makes: [
      "Сервісний металоцентр: сталь у кольорах RAL",
      "Нестандартні гнуті профілі: сталь 0,45–2,0 мм, алюміній до 5,0 мм",
      "Виготовлення за ескізом за допомогою власного конструктора",
    ],
    ask: "Запитати про метал і профілі",
    product: "Продукція: профілі",
    articles: [
      "Як гнути листовий метал у домашніх умовах",
      "Сталь для тонколистового металу: марки, товщина й цинк",
    ],
  },
];

export interface Article { rubric: Rubric; title: string; lead?: string; img: Cover; }
export const articles: Article[] = [
  {
    rubric: "parkany",
    title: "Зимовий догляд за металевими воротами та хвіртками: Комплексний захист механізмів, автоматики та покриття",
    lead: "Практичний посібник із зимового догляду за металевими воротами та хвіртками Мехбуд. Як змащувати замки, захистити автоматику та зберегти покриття.",
    img: cover("/img/statti-zymovyy"),
  },
  {
    rubric: "fasadi",
    title: "Особливості проектування вентильованих фасадів для будівель у прибережній морській зоні",
    img: cover("/img/statti-uzberezhzhya"),
  },
  {
    rubric: "steli",
    title: "5 критичних помилок монтажу підвісних металевих стель: експертний інженерний аналіз",
    img: cover("/img/statti-montazh-stel"),
  },
  {
    rubric: "metal",
    title: "Кріплення тонколистового металу: заклепки чи саморізи",
    img: cover("/img/statti-kriplennya"),
  },
  {
    rubric: "metal",
    title: "Ребра жорсткості металу: як згини змінюють прогин листа",
    img: cover("/img/statti-rebra", [480, 800, 1200], 1200, 628),
  },
  {
    rubric: "sad",
    title: "Блоги для городників: 5 ресурсів про сад і город",
    img: cover("/img/statti-sad"),
  },
];

export const guarantees = [
  { years: 15, prefix: "від ", name: "Порошкове полімерне покриття" },
  { years: 20, prefix: "", name: "Покриття PVDF" },
  { years: 30, prefix: "", name: "Антикорозійний захист" },
] as const;

export const forDesigners = [
  "Власне конструкторське бюро і візуалізація",
  "Нестандартні гнуті профілі за ескізом: сталь 0,45–2,0 мм, алюміній до 5,0 мм",
  "Замір на об'єкті",
  "Шеф-монтаж",
  "Заявлена відповідність продукції ДБН, ДСТУ",
  "Стелі з дозволами СЕС і служби техногенної безпеки",
];

export const offices = [
  { city: "Львів", phone: phones.lviv, address: "вул. Авіаційна, 13", note: "Представництво" },
  { city: "Одеса", phone: phones.odesa, address: "ж/м Райдужний, буд. 20, 1-й під'їзд, оф. 6", note: "Представництво" },
  { city: "Тернопіль", phone: phones.kyivMobile, address: "вул. Руська, 14", note: "Представник" },
];

export const experts = [
  { area: "фасади", name: "Володимир Рубленко" },
  { area: "паркани та нестандартні профілі", name: "Лариса Войська" },
  { area: "стелі", name: "Іван Жиленков" },
];

export const mapHref = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Київ, вул. Академіка Кримського, 4а");

export const srcset = (c: Cover) => c.widths.filter((w) => w <= c.w).map((w) => `${c.src}-${w}.webp ${w}w`).join(", ");
