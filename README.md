# Tommy Fragrance Store

Премиальный интернет-магазин оригинальной парфюмерии на **Next.js 15 + TypeScript + Tailwind CSS + PostgreSQL + Prisma + NextAuth**.

## Что уже реализовано

- Главная страница в стиле премиального минимализма без золотого цвета.
- Каталог с поиском и фильтрами: бренд, пол, сезон, концентрация, тип аромата, цена.
- Карточка товара: бренд, год, парфюмер, концентрация, страна бренда, пирамида нот, история, описание, тип, стойкость, шлейф, сезонность, похожие ароматы, источники.
- Автоматический пересчёт цены по формуле: `цена за мл × объём = стоимость`.
- Объёмы: 1 / 2 / 3 / 5 / 10 / 15 / 20 / 30 / 50 мл + полный флакон.
- Заказ через Telegram и WhatsApp с готовым текстом сообщения.
- Админ-панель: товары, добавление, редактирование, удаление, цены, остатки, заказы/заявки.
- Загрузка фото в `/public/uploads` для локального/self-host сценария.
- Импорт Excel/CSV.
- SEO: metadata, Open Graph, Schema.org JSON-LD, `sitemap.xml`, `robots.txt`.
- Редакционная политика: пустые поля допустимы, если нет подтверждённых данных.

## Быстрый запуск

```bash
npm install
cp .env.example .env
```

В `.env` укажите PostgreSQL:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/tommy_fragrance?schema=public"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="change-me-long-random-string"
ADMIN_EMAIL="admin@tommyfragrance.ru"
ADMIN_PASSWORD="change-me-admin-password"
NEXT_PUBLIC_TELEGRAM_USERNAME="axmtommy"
NEXT_PUBLIC_WHATSAPP_PHONE="79389110115"
```

Создайте БД и примените миграции:

```bash
npx prisma migrate dev --name init
npm run db:seed
npm run dev
```

Сайт: `http://localhost:3000`  
Админка: `http://localhost:3000/admin`

## Редакционная политика

В карточках товара не нужно заполнять поля наугад.

Разрешённые источники:

1. официальный сайт бренда;
2. Fragrantica;
3. Parfumo.

Если нет подтверждённых данных по нотам, истории, стойкости или шлейфу — поле оставляйте пустым. На сайте оно отобразится как «Нет подтверждённых данных».

## Важное про Telegram

Telegram не всегда позволяет открыть конкретный личный чат с заранее вставленным текстом. Поэтому в проекте используется `t.me/share/url`, который открывает Telegram с подготовленным сообщением. WhatsApp работает через `wa.me` с предзаполненным текстом.

## Импорт CSV/Excel

Файл-шаблон: `/public/import-template.csv`.

Поддерживаемые колонки:

- brand
- name
- slug
- year
- perfumer
- concentration
- brandCountry
- gender
- aromaType
- description
- history
- longevity
- sillage
- seasonality
- topNotes
- heartNotes
- baseNotes
- similarAromas
- sources
- imageUrl
- pricePerMl
- fullBottleMl
- fullBottlePrice
- availableVolumesMl
- stockMl
- stockBottles
- isPublished

## Деплой

Подойдёт Vercel + PostgreSQL. Для загрузки фото на продакшене лучше заменить локальную загрузку на S3, Cloudinary или Vercel Blob, потому что файловая система serverless-платформ обычно не подходит для постоянного хранения загруженных изображений.
