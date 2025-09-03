# 🔑 API Ключи для реальных продуктов

## 🍕 Доставка еды

### 1. **Yandex.Eats API** (Самый простой)
- **Регистрация**: https://yandex.ru/dev/eats/
- **Стоимость**: Бесплатно до 1000 запросов/месяц
- **Документация**: https://yandex.ru/dev/eats/doc/
- **Ключ**: Получается автоматически после регистрации

### 2. **Delivery Club API**
- **Регистрация**: https://api.delivery-club.ru/
- **Стоимость**: Бесплатно до 500 запросов/день
- **Документация**: https://api.delivery-club.ru/docs/

## 🛒 Продуктовые магазины

### 1. **Яндекс.Лавка API**
- **Регистрация**: https://yandex.ru/dev/lavka/
- **Стоимость**: Бесплатно до 1000 запросов/месяц
- **Документация**: https://yandex.ru/dev/lavka/doc/

### 2. **Сбермаркет API**
- **Регистрация**: https://sbermarket.ru/api/
- **Стоимость**: Бесплатно до 100 запросов/день
- **Документация**: https://sbermarket.ru/api/docs/

## 🗺️ Карты и геолокация

### 1. **Яндекс.Карты API** (Рекомендуется)
- **Регистрация**: https://yandex.ru/dev/maps/
- **Стоимость**: Бесплатно до 1000 запросов/день
- **Документация**: https://yandex.ru/dev/maps/doc/

### 2. **Google Maps API**
- **Регистрация**: https://console.cloud.google.com/
- **Стоимость**: $200 кредитов бесплатно
- **Документация**: https://developers.google.com/maps

## 🎮 Игры и геймификация

### 1. **Steam Web API**
- **Регистрация**: https://steamcommunity.com/dev/apikey
- **Стоимость**: Бесплатно
- **Документация**: https://developer.valvesoftware.com/wiki/Steam_Web_API

### 2. **Twitch API**
- **Регистрация**: https://dev.twitch.tv/console/apps
- **Стоимость**: Бесплатно
- **Документация**: https://dev.twitch.tv/docs/api/

## 💰 Платежи

### 1. **ЮKassa API** (Яндекс.Касса)
- **Регистрация**: https://yookassa.ru/
- **Стоимость**: 2.8% + 15₽ за транзакцию
- **Документация**: https://yookassa.ru/developers/

### 2. **Сбербанк API**
- **Регистрация**: https://developer.sberbank.ru/
- **Стоимость**: 2.5% за транзакцию
- **Документация**: https://developer.sberbank.ru/doc/

## 🏥 Здоровье и фитнес

### 1. **Google Fit API**
- **Регистрация**: https://console.cloud.google.com/
- **Стоимость**: Бесплатно
- **Документация**: https://developers.google.com/fit

### 2. **Apple HealthKit**
- **Регистрация**: https://developer.apple.com/
- **Стоимость**: $99/год (только для iOS)
- **Документация**: https://developer.apple.com/documentation/healthkit

## 📱 Push-уведомления

### 1. **Firebase Cloud Messaging**
- **Регистрация**: https://console.firebase.google.com/
- **Стоимость**: Бесплатно
- **Документация**: https://firebase.google.com/docs/cloud-messaging

### 2. **OneSignal**
- **Регистрация**: https://onesignal.com/
- **Стоимость**: Бесплатно до 30,000 подписчиков
- **Документация**: https://documentation.onesignal.com/

## 🤖 AI и машинное обучение

### 1. **OpenAI API**
- **Регистрация**: https://platform.openai.com/
- **Стоимость**: $5 кредитов бесплатно
- **Документация**: https://platform.openai.com/docs/

### 2. **YandexGPT API**
- **Регистрация**: https://yandex.ru/dev/gpt/
- **Стоимость**: Бесплатно до 1000 запросов/месяц
- **Документация**: https://yandex.ru/dev/gpt/doc/

## 🎯 Рекомендации для начала:

1. **Начните с Яндекс.Карты** - самый простой API
2. **Добавьте Yandex.Eats** - для доставки еды
3. **Используйте Firebase** - для уведомлений
4. **Подключите YandexGPT** - для AI-помощника

## 📝 Пример интеграции:

```javascript
// Яндекс.Карты
const map = new ymaps.Map('map', {
    center: [55.751574, 37.573856],
    zoom: 10
});

// Yandex.Eats
fetch('https://api.yandex.ru/eats/v1/restaurants', {
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY'
    }
})
.then(response => response.json())
.then(data => console.log(data));
```

**Все API ключи можно получить за 5-10 минут! 🚀**