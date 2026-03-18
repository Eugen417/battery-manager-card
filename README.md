# 🔋 Battery Manager Card (Apple Design Edition)

[🇷🇺 Русский](#-русский) | [🇬🇧 English](#-english) | [🇩🇪 Deutsch](#-deutsch) | [🇪🇸 Español](#-español) | [🇫🇷 Français](#-français)

---

## 🇷🇺 Русский

Современная, компактная и интерактивная пользовательская карточка (Custom Lovelace Card) для Home Assistant. Создана специально для работы в связке с интеграцией **HA-Battery-Notes**.

Дизайн карточки вдохновлен интерфейсами **Apple iOS**: эффекты матового стекла (Glassmorphism), скругленные углы (Squircles), нативные шрифты и удобный переключатель вкладок (Segmented Control).

### ✨ Возможности
* **Автоматический поиск**: Карточка сама находит все устройства с классом `battery` и читает атрибуты от `HA-Battery-Notes`. Никакого ручного перечисления сущностей!
* **Вкладки (Многостраничность)**: Информация разбита на удобные секции: ОБЗОР, ВНИМАНИЕ, ТИП, РАСХОД.
* **Умная аналитика**: Высчитывает примерный расход заряда (в % за день) на основе даты последней замены батареек.
* **Разделение типов**: Обычные батарейки отправляются в список "Срочно купить", а аккумуляторы (Rechargeable) — в "Требуется зарядка".
* **Инвентарь**: Показывает точное количество всех используемых элементов питания в доме по типам, включая недоступные устройства.
* **Мультиязычность**: Автоматически переводит интерфейс на язык вашего Home Assistant (RU, EN, DE, ES, FR).

### 🛠 Установка
**Вариант 1: HACS (Рекомендуется)**
1. Откройте **HACS** -> **Интерфейс** (Frontend).
2. Нажмите три точки (справа вверху) -> **Пользовательские репозитории**.
3. Вставьте ссылку на этот репозиторий: `https://github.com/Eugen417/battery-manager-card`, категория **Lovelace**.
4. Установите `Battery Manager Card` и перезагрузите страницу (Ctrl+F5).

**Вариант 2: Вручную**
1. Скачайте `battery-manager-card.js`.
2. Поместите его в `/config/www/battery_manager_card/battery-manager-card.js`.
3. В Home Assistant: **Настройки** -> **Панели управления** -> **Ресурсы** -> Добавить: `/local/battery_manager_card/battery-manager-card.js` (Тип: JavaScript Module).

---

## 🇬🇧 English

Modern and interactive custom Lovelace card for Home Assistant, inspired by Apple iOS design.

### ✨ Features
* **Auto-discovery**: Automatically finds all `battery` class devices.
* **Tabs**: Organized into Overview, Attention, Type, and Drain.
* **Smart Analytics**: Calculates approximate battery drain per day.
* **Inventory**: Shows total battery types used in your home.
* **Multilingual**: Automatic UI translation (RU, EN, DE, ES, FR).

---

## 🇩🇪 Deutsch

Moderne und interaktive Lovelace-Karte für Home Assistant im Apple iOS-Design.

### ✨ Funktionen
* **Auto-Discovery**: Findet automatisch alle Batterie-Geräte.
* **Intelligente Analyse**: Berechnet den ungefähren Batterieverbrauch pro Tag.
* **Bestand**: Zeigt die genaue Anzahl aller verwendeten Batterietypen.

---

## 🇪🇸 Español

Tarjeta Lovelace moderna e interactiva para Home Assistant con diseño estilo Apple iOS.

### ✨ Características
* **Descubrimiento automático**: Encuentra todos los dispositivos de batería.
* **Análisis inteligente**: Calcula el consumo aproximado de batería por día.
* **Inventario**: Muestra el número exacto de todos los tipos de baterías.

---

## 🇫🇷 Français

Carte Lovelace moderne et interactive pour Home Assistant, design Apple iOS.

### ✨ Fonctionnalités
* **Détection automatique**: Trouve tous les appareils à batterie.
* **Analyse intelligente**: Calcule l'épuisement approximatif de la batterie par jour.
* **Inventaire**: Affiche le nombre exact de tous les types de piles utilisés.

---

## ⚙️ Конфигурация / Configuration (YAML)
```yaml
type: custom:battery-manager-card
charge_threshold: 15
threshold: 20
warning_threshold: 40
drain_count: 5
