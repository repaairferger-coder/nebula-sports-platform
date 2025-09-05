# 🔧 НАСТРОЙКА GITHUB PAGES

## ❌ **Проблема:** GitHub Pages не активирован

## ✅ **Решение:**

### **1. Перейдите в настройки репозитория:**
```
https://github.com/repaairferger-coder/nebula-sports-platform/settings
```

### **2. Найдите раздел "Pages" в левом меню**

### **3. В разделе "Source" выберите:**
- **Source:** Deploy from a branch
- **Branch:** main
- **Folder:** / (root)

### **4. Нажмите "Save"**

### **5. Подождите 5-10 минут** (GitHub Pages нужно время для активации)

## 🎯 **После активации попробуйте:**

### **Тестовая страница:**
```
https://repaairferger-coder.github.io/nebula-sports-platform/test.html
```

### **Главная страница:**
```
https://repaairferger-coder.github.io/nebula-sports-platform/
```

## 🔍 **Если все еще не работает:**

### **Альтернативные способы:**

#### **1. Netlify (быстрый способ):**
1. Перейдите на https://netlify.com
2. Зарегистрируйтесь через GitHub
3. Подключите репозиторий
4. Получите ссылку типа: `https://your-app.netlify.app`

#### **2. Vercel (альтернатива):**
1. Перейдите на https://vercel.com
2. Зарегистрируйтесь через GitHub
3. Импортируйте репозиторий
4. Получите ссылку типа: `https://your-app.vercel.app`

#### **3. Локальный сервер (для тестирования):**
```bash
# На Mac в терминале:
cd ~/Documents/nebula-sports-platform
python3 -m http.server 8000
# Затем откройте: http://localhost:8000
```

## 🎯 **Рекомендация:**

**Попробуйте сначала активировать GitHub Pages в настройках репозитория!**

**Если не получится - используйте Netlify или Vercel для быстрого деплоя.**