# 🔋 Battery Manager Card

[🇷🇺 Русский](#-русский) | [🇬🇧 English](#-english) | [🇩🇪 Deutsch](#-deutsch) | [🇪🇸 Español](#-español) | [🇫🇷 Français](#-français)

---

## 🇷🇺 Русский

Современная и интерактивная карточка для Home Assistant, работающая в связке с интеграцией **HA-Battery-Notes**. Дизайн выполнен в минималистичном стиле.

### ✨ Возможности
* **Автоматический поиск**: Сама находит все устройства с классом `battery`.
* **Вкладки**: ОБЗОР (все), ВНИМАНИЕ (проблемные), ТИП (инвентарь), РАСХОД (аналитика).
* **Умная аналитика**: Расход заряда (% в день) на основе даты последней замены.
* **Инвентарь**: Общее количество батареек в доме по типам.

### 🛠 Установка
**Вариант 1: HACS (Рекомендуется)**
1. **HACS** -> **Интерфейс** -> Три точки -> **Пользовательские репозитории**.
2. Ссылка: `https://github.com/Eugen417/battery-manager-card`, категория **Lovelace** (Панель).
3. Установите и обновите страницу (Ctrl+F5).

**Вариант 2: Вручную**
1. Скопируйте файл `battery-manager-card.js` в `/config/www/battery_manager_card/`.
2. Добавьте ресурс в настройках системы или в `configuration.yaml` (секция `lovelace: resources:`): `/local/battery_manager_card/battery-manager-card.js`.

### ⚙️ Добавление на дашборд
Нажмите "Добавить карточку" -> "Вручную" (Manual Card) и вставьте:
```yaml
type: custom:battery-manager-card
charge_threshold: 15
threshold: 20
drain_count: 10
```

---

## 🇬🇧 English

Modern and interactive custom card for Home Assistant, designed for **HA-Battery-Notes**. Features a minimalist design.

### ✨ Features
* **Auto-discovery**: Automatically finds all devices with the `battery` class.
* **Tabs**: OVERVIEW (all), ATTENTION (issues), TYPE (inventory), DRAIN (analytics).
* **Smart Analytics**: Battery drain rate (% per day) based on replacement date.
* **Inventory Tracking**: Total count of all batteries in your home by type.

### 🛠 Installation
**Option 1: HACS (Recommended)**
1. **HACS** -> **Frontend** -> Three dots -> **Custom repositories**.
2. URL: `https://github.com/Eugen417/battery-manager-card`, Category: **Lovelace** (Dashboard).
3. Install and refresh the page (Ctrl+F5).

**Option 2: Manual**
1. Copy the `battery-manager-card.js` file to `/config/www/battery_manager_card/`.
2. Add the resource in system settings or in `configuration.yaml` (under `lovelace: resources:`): `/local/battery_manager_card/battery-manager-card.js`.

### ⚙️ Dashboard Configuration
Add a "Manual" card on your dashboard and paste:
```yaml
type: custom:battery-manager-card
charge_threshold: 15
threshold: 20
drain_count: 10
```

---

## 🇩🇪 Deutsch

Moderne, interaktive benutzerdefinierte Karte für Home Assistant, optimiert für **HA-Battery-Notes**. Minimalistisches Design.

### ✨ Funktionen
* **Auto-Discovery**: Findet automatisch alle Geräte mit der Klasse `battery`.
* **Tabs**: ÜBERSICHT (alle), ACHTUNG (Probleme), TYP (Bestand), VERBRAUCH (Analyse).
* **Intelligente Analyse**: Berechnet den täglichen Verbrauch (% pro Tag) basierend auf dem Austauschdatum.
* **Bestandsaufnahme**: Gesamtanzahl aller verwendeten Batterietypen in Ihrem Zuhause.

### 🛠 Installation
**Option 1: HACS (Empfohlen)**
1. **HACS** -> **Frontend** -> Drei Punkte -> **Benutzerdefinierte Repositories**.
2. URL: `https://github.com/Eugen417/battery-manager-card`, Kategorie: **Lovelace** (Dashboard).
3. Installieren und Seite neu laden (Strg+F5).

**Option 2: Manuell**
1. Kopieren Sie die Datei `battery-manager-card.js` nach `/config/www/battery_manager_card/`.
2. Fügen Sie die Ressource in den Systemeinstellungen oder in `configuration.yaml` (unter `lovelace: resources:`) hinzu: `/local/battery_manager_card/battery-manager-card.js`.

### ⚙️ Dashboard-Konfiguration
Fügen Sie eine "Manuelle Karte" auf Ihrem Dashboard hinzu und fügen Sie ein:
```yaml
type: custom:battery-manager-card
charge_threshold: 15
threshold: 20
drain_count: 10
```

---

## 🇪🇸 Español

Tarjeta interactiva moderna para Home Assistant, diseñada para **HA-Battery-Notes**. Diseño minimalista.

### ✨ Características
* **Auto-descubrimiento**: Encuentra automáticamente todos los dispositivos con la clase `battery`.
* **Pestañas**: RESUMEN (todos), ATENCIÓN (problemas), TIPO (inventario), DESCARGA (análisis).
* **Análisis inteligente**: Calcula el consumo diario (% por día) basado en la fecha de reemplazo.
* **Inventario**: Recuento total de baterías por tipo en el hogar.

### 🛠 Instalación
**Opción 1: HACS (Recomendado)**
1. **HACS** -> **Interfaz** -> Tres puntos -> **Repositorios personalizados**.
2. URL: `https://github.com/Eugen417/battery-manager-card`, Categoría: **Lovelace** (Panel).
3. Instalar y actualizar la página (Ctrl+F5).

**Opción 2: Manual**
1. Copie el archivo `battery-manager-card.js` en `/config/www/battery_manager_card/`.
2. Añada el recurso en la configuración del sistema o en `configuration.yaml` (bajo `lovelace: resources:`): `/local/battery_manager_card/battery-manager-card.js`.

### ⚙️ Configuración del Panel
Añada una tarjeta "Manual" en su panel y pegue:
```yaml
type: custom:battery-manager-card
charge_threshold: 15
threshold: 20
drain_count: 10
```

---

## 🇫🇷 Français

Carte interactive moderne pour Home Assistant, conçue pour **HA-Battery-Notes**. Design minimaliste.

### ✨ Fonctionnalités
* **Détection automatique**: Trouve automatiquement tous les appareils avec la classe `battery`.
* **Onglets**: APERÇU (tous), ATTENTION (problèmes), TYPE (inventaire), DÉCHARGE (analyse).
* **Analyse intelligente**: Calcule le taux de décharge (% par jour) basé sur la date de remplacement.
* **Inventaire**: Nombre total de piles par type dans la maison.

### 🛠 Installation
**Option 1: HACS (Recommandé)**
1. **HACS** -> **Interface** -> Trois points -> **Dépôts personnalisés**.
2. URL: `https://github.com/Eugen417/battery-manager-card`, Catégorie: **Lovelace** (Tableau de bord).
3. Installer et rafraîchir la page (Ctrl+F5).

**Option 2: Manuel**
1. Copiez le fichier `battery-manager-card.js` dans `/config/www/battery_manager_card/`.
2. Ajoutez la ressource dans les paramètres du système ou dans `configuration.yaml` (sous `lovelace: resources:`): `/local/battery_manager_card/battery-manager-card.js`.

### ⚙️ Configuration du Tableau de Bord
Ajoutez une carte "Manuel" sur votre tableau de bord et collez:
```yaml
type: custom:battery-manager-card
charge_threshold: 15
threshold: 20
drain_count: 10
```
