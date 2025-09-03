# 📱 Обновление файлов на Mac

## 🔄 Синхронизация с GitHub:

### 1. В Terminal на Mac выполните:
```bash
cd ~/Documents/nebula-sports-platform
git pull origin main
```

### 2. Проверьте файлы:
```bash
ls -la *.html
```

### 3. Откройте тестовый файл:
```bash
open test.html
```

## 🎯 Если git pull не работает:

### Попробуйте принудительное обновление:
```bash
git fetch origin
git reset --hard origin/main
```

## 🆕 Альтернативный способ:

### Скачайте файлы напрямую с GitHub:
1. Перейдите на: https://github.com/repaairferger-coder/nebula-sports-platform
2. Скачайте файлы:
   - `test.html`
   - `index-new.html`
3. Поместите их в папку `~/Documents/nebula-sports-platform`

## 🔍 Проверка:

После обновления должны появиться файлы:
- `test.html` - тестовый файл
- `index-new.html` - новая версия с изменениями
- `API-KEYS-INFO.md` - информация об API ключах

## 🎯 Попробуйте:

1. **git pull origin main**
2. **open test.html**
3. **Проверьте, что видите зеленое сообщение**

**Это обновит все файлы на вашем Mac!**