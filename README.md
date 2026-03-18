# 🔋 Battery Manager Card

[🇷🇺 Русский](#-русский) | [🇬🇧 English](#-english) | [🇩🇪 Deutsch](#-deutsch) | [🇪🇸 Español](#-español) | [🇫🇷 Français](#-français)

---

## 🇷🇺 Русский

Современная, компактная и интерактивная пользовательская карточка (Custom Lovelace Card) для Home Assistant. Создана специально для работы в связке с интеграцией **HA-Battery-Notes**.

### ✨ Возможности
* **Автоматический поиск**: Карточка сама находит все устройства с классом `battery` и считывает атрибуты типа и количества батареек.
* **Вкладки (Многостраничность)**: ОБЗОР, ВНИМАНИЕ, ТИП, РАСХОД.
* **Умная аналитика**: Высчитывает расход заряда (в % за день) на основе даты последней замены.
* **Инвентарь**: Показывает общее количество всех используемых элементов питания в доме по типам.
* **Мультиязычность**: Автоматически переводит интерфейс на язык системы (RU, EN, DE, ES, FR).

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

Modern and interactive custom Lovelace card for Home Assistant, inspired by the Apple iOS design.

### ✨ Features
* **Auto-discovery**: Automatically finds all `battery` class devices and reads their types.
* **Smart Analytics**: Calculates approximate battery drain (% per day).
* **Inventory Tracking**: Shows total battery count by type used in your home.

### 🛠 Installation
**Option 1: HACS (Recommended)**
1. Open **HACS** -> **Frontend**.
2. Click the three dots (top right) -> **Custom repositories**.
3. Paste the repository URL: `https://github.com/Eugen417/battery-manager-card`, Category: **Lovelace**.
4. Install `Battery Manager Card` and refresh your browser (Ctrl+F5).

**Option 2: Manual**
1. Download `battery-manager-card.js`.
2. Place it in `/config/www/battery_manager_card/battery-manager-card.js`.
3. In Home Assistant: **Settings** -> **Dashboards** -> **Resources** -> Add: `/local/battery_manager_card/battery-manager-card.js` (Type: JavaScript Module).

---

## 🇩🇪 Deutsch

Moderne Lovelace-Karte für Home Assistant, inspiriert vom Apple iOS-Design.

### ✨ Funktionen
* **Auto-Discovery**: Findet automatisch alle Batterie-Geräte.
* **Bestandsaufnahme**: Zeigt die Gesamtzahl aller verwendeten Batterietypen an.

### 🛠 Installation
**Option 1: HACS (Empfohlen)**
1. **HACS** -> **Frontend** öffnen.
2. Drei Punkte -> **Benutzerdefinierte Repositories**.
3. URL hinzufügen: `https://github.com/Eugen417/battery-manager-card`, Kategorie: **Lovelace**.
4. Installieren und Seite neu laden (Strg+F5).

---

## 🇪🇸 Español

Tarjeta Lovelace personalizada para Home Assistant, estilo Apple iOS.

### ✨ Características
* **Descubrimiento automático**: Encuentra todos los dispositivos con clase `battery`.
* **Inventario**: Muestra el número total de baterías por tipo.

### 🛠 Instalación
**Opción 1: HACS (Recomendado)**
1. Abrir **HACS** -> **Interfaz** (Frontend).
2. Tres puntos -> **Repositorios personalizados**.
3. Añadir URL: `https://github.com/Eugen417/battery-manager-card`, Categoría: **Lovelace**.
4. Instalar y recargar la página (Ctrl+F5).

---

## 🇫🇷 Français

Carte Lovelace moderne pour Home Assistant, design Apple iOS.

### ✨ Fonctionnalités
* **Détection automatique**: Trouve tous les appareils de la classe `battery`.
* **Inventaire**: Affiche le nombre total de piles par type utilisées.

### 🛠 Installation
**Option 1: HACS (Recommandé)**
1. Ouvrir **HACS** -> **Interface** (Frontend).
2. Trois points -> **Dépôts personnalisés**.
3. Ajouter l'URL : `https://github.com/Eugen417/battery-manager-card`, Catégorie : **Lovelace**.
4. Installer et rafraîchir la page (Ctrl+F5).

---

## ⚙️ Configuration (YAML)
```yaml
type: custom:battery-manager-card
charge_threshold: 15
threshold: 20
warning_threshold: 40
drain_count: 5
