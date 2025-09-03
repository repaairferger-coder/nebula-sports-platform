# 🔧 Исправление ошибки Expo сервера

## ❌ Ошибка: "Could not connect to the server"

### 🚀 Решение - запустите сервер:

### 1. Откройте Terminal на Mac:
- Нажмите Cmd + Space
- Введите "Terminal"
- Нажмите Enter

### 2. Перейдите в папку проекта:
```bash
cd ~/Documents/nebula-sports-platform/nebula-mobile
```

### 3. Запустите Expo сервер:
```bash
npx expo start --tunnel
```

### 4. QR-код появится в терминале!

## 📱 Альтернативные способы:

### Веб-версия (работает всегда):
```bash
npx expo start --web
```
Откроется в браузере по адресу: http://localhost:19006

### Локальный сервер:
```bash
npx expo start
```
Работает только в той же Wi-Fi сети

## 🎯 Готово к тестированию!

**Сначала запустите сервер, потом сканируйте QR-код! 🚀**