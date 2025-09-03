# 🔧 Исправление пустой папки

## 🚀 Проблема: папка nebula-mobile пустая!

### Решение:

### 1. Перейдите в корень проекта:
```bash
cd ~/Documents/nebula-sports-platform
```

### 2. Посмотрите, что есть в проекте:
```bash
ls -la
```

### 3. Перейдите в папку nebula-mobile-app:
```bash
cd nebula-mobile-app
```

### 4. Посмотрите файлы:
```bash
ls -la
```

### 5. Скопируйте файлы в nebula-mobile:
```bash
cp -r * ../nebula-mobile/
```

### 6. Перейдите в nebula-mobile:
```bash
cd ../nebula-mobile
```

### 7. Установите зависимости:
```bash
npm install --legacy-peer-deps
```

### 8. Запустите приложение:
```bash
npx expo start --web
```

## 🎯 Готово к тестированию!

**Скопируйте файлы из nebula-mobile-app в nebula-mobile! 📁**