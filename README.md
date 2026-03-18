# 🔋 Battery Manager Card (Apple Design Edition)

[🇷🇺 Русский](#-русский) | [🇬🇧 English](#-english) | [🇩🇪 Deutsch](#-deutsch) | [🇪🇸 Español](#-español) | [🇫🇷 Français](#-français)

---

## 🇷🇺 Русский

Современная, компактная и интерактивная пользовательская карточка (Custom Lovelace Card) для Home Assistant. Создана специально для работы в связке с интеграцией **HA-Battery-Notes**.

Дизайн карточки вдохновлен интерфейсами **Apple iOS**: эффекты матового стекла (Glassmorphism), скругленные углы (Squircles), нативные шрифты и удобный переключатель вкладок (Segmented Control).

### ✨ Возможности
* **Автоматический поиск**: Карточка сама находит все устройства с классом `battery` и считывает атрибуты типа и количества батареек. Никакого ручного перечисления сущностей!
* **Вкладки (Многостраничность)**: Информация разбита на секции: ОБЗОР, ВНИМАНИЕ, ТИП, РАСХОД.
* **Умная аналитика**: Высчитывает расход заряда (в % за день) на основе даты последней замены.
* **Разделение типов**: Обычные батарейки — в список покупок, аккумуляторы — в список на зарядку.
* **Инвентарь**: Показывает общее количество всех используемых элементов питания в доме по типам.
* **Мультиязычность**: Автоматически переводит интерфейс на язык системы (RU, EN, DE, ES, FR).

### 🛠 Установка
**Вариант 1: HACS (Рекомендуется)**
1. Откройте **HACS** -> **Интерфейс** (Frontend).
2. Нажмите три точки (справа вверху) -> **Пользовательские репозитории**.
3. Вставьте ссылку на этот репозиторий: `https://github.com/Eugen417/battery-manager-card`, категория **Lovelace**.
4. Установите `Battery Manager Card` и перезагрузите страницу (Ctrl+F5).

---

## 🇬🇧 English

A modern and interactive custom Lovelace card for Home Assistant, inspired by the Apple iOS design.

### ✨ Features
* **Auto-discovery**: Automatically finds all `battery` class devices and reads attributes from `HA-Battery-Notes`.
* **Multi-tab Interface**: Neatly organized sections: OVERVIEW, ATTENTION, TYPE, and DRAIN.
* **Smart Analytics**: Calculates approximate battery drain (% per day).
* **Inventory Tracking**: Shows total battery count by type currently used in your home.
* **Native Multilingual UI**: Supports RU, EN, DE, ES, FR based on your HA profile.

### 🛠 Installation (HACS)
1. Open **HACS** -> **Frontend**.
2. Click the three dots in the top right corner -> **Custom repositories**.
3. Paste this repository URL: `https://github.com/Eugen417/battery-manager-card` and select **Lovelace** as the category.
4. Find `Battery Manager Card` in HACS, install it, and refresh your browser (Ctrl+F5).

---

## 🇩🇪 Deutsch

Moderne und interaktive Lovelace-Karte für Home Assistant, inspiriert vom Apple iOS-Design.

### ✨ Funktionen
* **Auto-Discovery**: Findet automatisch alle Batterie-Geräte.
* **Tab-Oberfläche**: Übersicht, Achtung, Typ und Verbrauch.
* **Bestandsaufnahme**: Zeigt die Gesamtzahl aller verwendeten Batterietypen an.

### 🛠 Installation (HACS)
1. **HACS** -> **Frontend** -> Drei Punkte -> **Benutzerdefinierte Repositories**.
2. URL hinzufügen: `https://github.com/Eugen417/battery-manager-card`, Kategorie: **Lovelace**.

---

## 🇪🇸 Español

Tarjeta Lovelace personalizada, moderna e interactiva para Home Assistant, estilo Apple iOS.

### ✨ Características
* **Descubrimiento automático**: Encuentra todos los dispositivos con clase `battery`.
* **Análisis inteligente**: Calcula el consumo de batería por día.
* **Inventario**: Muestra el número total de baterías por tipo.

---

## 🇫🇷 Français

Carte Lovelace moderne et interactive pour Home Assistant, design Apple iOS.

### ✨ Fonctionnalités
* **Détection automatique**: Trouve tous les appareils de la classe `battery`.
* **Analyse intelligente**: Calcule l'épuisement de la batterie par jour.
* **Inventaire**: Affiche le nombre total de piles par type utilisées.

---

## ⚙️ Configuration (YAML)
```yaml
type: custom:battery-manager-card
charge_threshold: 15
threshold: 20
warning_threshold: 40
drain_count: 5
