# 🔋 Battery Manager Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)
[![GitHub Release](https://img.shields.io/github/v/release/Eugen417/battery-manager-card?style=for-the-badge)](https://github.com/Eugen417/battery-manager-card/releases)


[🇷🇺 Русский](#-русский) | [🇬🇧 English](#-english) | [🇩🇪 Deutsch](#-deutsch) | [🇪🇸 Español](#-español) | [🇫🇷 Français](#-français)

---

## 🇷🇺 Русский

Современная и интерактивная карточка для Home Assistant, работающая в связке с интеграцией **HA-Battery-Notes**. Дизайн выполнен в минималистичном стиле (Apple-style) с использованием CSS Grid.

### ✨ Возможности
* 🖥️ **Визуальный редактор (UI)**: Никакого YAML! Все параметры настраиваются прямо в интерфейсе.
* 🔍 **Автоматический поиск**: Сама находит все устройства с классом `battery`.
* 📑 **Вкладки**: ОБЗОР (все), ВНИМАНИЕ (проблемные), ТИП (инвентарь), РАСХОД (аналитика).
* 📉 **Умная аналитика**: Расход заряда (% в день) на основе даты последней замены.
* 🔠 **Кастомизация**: Возможность изменить размер шрифтов под ваш дашборд.
* 📦 **Инвентарь**: Общее количество батареек в доме по типам.

### 🛠 Установка
**Вариант 1: HACS (Рекомендуется)**
1. **HACS** -> Три точки -> **Пользовательские репозитории**.
2. Ссылка: `https://github.com/Eugen417/battery-manager-card`, категория **Lovelace** (Панель).
3. Установите карточку.
4. ⚠️ **ВАЖНО:** Очистите кэш браузера (Ctrl+F5) или кэш фронтенда в мобильном приложении!

**Вариант 2: Вручную**
1. Скопируйте файл `battery-manager-card.js` в `/config/www/battery_manager_card/`.
2. Добавьте ресурс в настройках: **Настройки -> Панели управления -> Ресурсы**: `/local/battery_manager_card/battery-manager-card.js?v=1.0.7` (Модуль JavaScript).

### ⚙️ Настройка
Просто добавьте карточку на дашборд и настройте её через **визуальный интерфейс**. 
Для любителей YAML доступна ручная конфигурация:
```yaml
type: custom:battery-manager-card
title: Элементы питания
charge_threshold: 15 # Порог заряда для аккумуляторов (%)
threshold: 20        # Порог критического заряда для обычных батареек (%)
drain_count: 10      # Количество устройств на вкладке "РАСХОД"
name_font_size: 17   # Размер шрифта для названий (px)
level_font_size: 20  # Размер шрифта для заряда (px)
```

---

## 🇬🇧 English

Modern and interactive custom card for Home Assistant, designed for **HA-Battery-Notes**. Features a minimalist Apple-style design using CSS Grid.

### ✨ Features
* 🖥️ **Full Visual Editor (UI)**: No YAML required! Configure everything directly in the interface.
* 🔍 **Auto-discovery**: Automatically finds all devices with the `battery` class.
* 📑 **Tabs**: OVERVIEW (all), ATTENTION (issues), TYPE (inventory), DRAIN (analytics).
* 📉 **Smart Analytics**: Battery drain rate (% per day) based on replacement date.
* 🔠 **Customizable Fonts**: Change font sizes to fit your dashboard perfectly.
* 📦 **Inventory Tracking**: Total count of all batteries in your home by type.

### 🛠 Installation
**Option 1: HACS (Recommended)**
1. **HACS** -> Three dots -> **Custom repositories**.
2. URL: `https://github.com/Eugen417/battery-manager-card`, Category: **Lovelace** (Dashboard).
3. Install the card.
4. ⚠️ **IMPORTANT:** Clear your browser cache (Ctrl+F5) or frontend cache in the companion app!

**Option 2: Manual**
1. Copy the `battery-manager-card.js` file to `/config/www/battery_manager_card/`.
2. Add the resource in Settings -> Dashboards -> Resources: `/local/battery_manager_card/battery-manager-card.js?v=1.0.7` (JavaScript Module).

### ⚙️ Configuration
Simply add the card to your dashboard and use the **Visual Editor**.
For advanced YAML users:
```yaml
type: custom:battery-manager-card
title: Battery Status
charge_threshold: 15 # Critical charge level for rechargeable batteries (%)
threshold: 20        # Critical charge level for standard batteries (%)
drain_count: 10      # Number of devices in the "DRAIN" tab
name_font_size: 17   # Font size for device names (px)
level_font_size: 20  # Font size for battery levels (px)
```

---

## 🇩🇪 Deutsch

Moderne, interaktive benutzerdefinierte Karte für Home Assistant, optimiert für **HA-Battery-Notes**. Minimalistisches Apple-Style Design mit CSS Grid.

### ✨ Funktionen
* 🖥️ **Visueller Editor (UI)**: Kein YAML nötig! Alles direkt im Interface konfigurieren.
* 🔍 **Auto-Discovery**: Findet automatisch alle Geräte mit der Klasse `battery`.
* 📑 **Tabs**: ÜBERSICHT (alle), ACHTUNG (Probleme), TYP (Bestand), VERBRAUCH (Analyse).
* 📉 **Intelligente Analyse**: Berechnet den täglichen Verbrauch (% pro Tag).
* 🔠 **Anpassbare Schriftarten**: Ändern Sie die Schriftgrößen für Ihr Dashboard.
* 📦 **Bestandsaufnahme**: Gesamtanzahl aller Batterietypen in Ihrem Zuhause.

### 🛠 Installation
**Option 1: HACS (Empfohlen)**
1. **HACS** -> Drei Punkte -> **Benutzerdefinierte Repositories**.
2. URL: `https://github.com/Eugen417/battery-manager-card`, Kategorie: **Lovelace** (Dashboard).
3. Installieren.
4. ⚠️ **WICHTIG:** Leeren Sie Ihren Browser-Cache (Strg+F5)!

**Option 2: Manuell**
1. Kopieren Sie `battery-manager-card.js` nach `/config/www/battery_manager_card/`.
2. Ressource hinzufügen unter Einstellungen -> Dashboards -> Ressourcen: `/local/battery_manager_card/battery-manager-card.js?v=1.0.7` (JavaScript Modul).

### ⚙️ Konfiguration
Nutzen Sie den **Visuellen Editor** im Dashboard. Für YAML:
```yaml
type: custom:battery-manager-card
charge_threshold: 15 
threshold: 20        
drain_count: 10      
name_font_size: 17   
level_font_size: 20  
```

---

## 🇪🇸 Español

Tarjeta interactiva moderna para Home Assistant, diseñada para **HA-Battery-Notes**. Diseño minimalista tipo Apple usando CSS Grid.

### ✨ Características
* 🖥️ **Editor Visual (UI)**: ¡Sin necesidad de YAML!
* 🔍 **Auto-descubrimiento**: Encuentra dispositivos con la clase `battery`.
* 📑 **Pestañas**: RESUMEN (todos), ATENCIÓN (problemas), TIPO (inventario), DESCARGA (análisis).
* 📉 **Análisis inteligente**: Consumo diario (% por día).
* 🔠 **Fuentes personalizables**: Cambie el tamaño de fuente para nombres y porcentajes.
* 📦 **Inventario**: Recuento total de baterías por tipo.

### 🛠 Instalación
**Opción 1: HACS (Recomendado)**
1. **HACS** -> Tres puntos -> **Repositorios personalizados**.
2. URL: `https://github.com/Eugen417/battery-manager-card`, Categoría: **Lovelace** (Panel).
3. Instalar.
4. ⚠️ **IMPORTANTE:** ¡Limpie la caché de su navegador (Ctrl+F5)!

### ⚙️ Configuración
Use el **Editor Visual**. Ejemplo YAML:
```yaml
type: custom:battery-manager-card
charge_threshold: 15 
threshold: 20        
drain_count: 10      
name_font_size: 17   
level_font_size: 20  
```

---

## 🇫🇷 Français

Carte interactive moderne pour Home Assistant, conçue pour **HA-Battery-Notes**. Design minimaliste style Apple avec CSS Grid.

### ✨ Fonctionnalités
* 🖥️ **Éditeur Visuel (UI)**: Pas de YAML requis !
* 🔍 **Détection automatique**: Trouve les appareils avec la classe `battery`.
* 📑 **Onglets**: APERÇU (tous), ATTENTION (problèmes), TYPE (inventaire), DÉCHARGE (analyse).
* 📉 **Analyse intelligente**: Taux de décharge (% par jour).
* 🔠 **Polices personnalisables**: Modifiez la taille du texte.
* 📦 **Inventaire**: Nombre total de piles par type.

### 🛠 Installation
**Option 1: HACS (Recommandé)**
1. **HACS** -> Trois points -> **Dépôts personnalisés**.
2. URL: `https://github.com/Eugen417/battery-manager-card`, Catégorie: **Lovelace** (Tableau de bord).
3. Installer.
4. ⚠️ **IMPORTANT:** Videz le cache de votre navigateur (Ctrl+F5) !

### ⚙️ Configuration
Utilisez l'**Éditeur Visuel**. Exemple YAML:
```yaml
type: custom:battery-manager-card
charge_threshold: 15 
threshold: 20        
drain_count: 10      
name_font_size: 17   
level_font_size: 20  
```
