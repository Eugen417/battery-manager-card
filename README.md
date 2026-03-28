# 🔋 Battery Manager Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)
[![GitHub Release](https://img.shields.io/github/v/release/Eugen417/battery-manager-card?style=for-the-badge)](https://github.com/Eugen417/battery-manager-card/releases)

[🇷🇺 Русский](#-русский) | [🇬🇧 English](#-english) | [🇩🇪 Deutsch](#-deutsch) | [🇪🇸 Español](#-español) | [🇫🇷 Français](#-français)

---

<table>
  <tr>
    <td width="25%" align="center" valign="top">
      <b>ОБЗОР и Настройки</b><br>
      <img src="https://github.com/user-attachments/assets/71eba7de-4deb-4ac9-ac8d-37f987d50572" width="100%">
    </td>
    <td width="25%" align="center" valign="top">
      <b>Вкладка «РАСХОД»</b><br>
      <img src="https://github.com/user-attachments/assets/8ed35463-60ef-4df3-b304-6b4f504b4927" width="100%">
    </td>
    <td width="25%" align="center" valign="top">
      <b>Вкладка «ТИП»</b><br>
      <img src="https://github.com/user-attachments/assets/6cab7036-9657-4215-9590-68fc26198a73" width="100%">
    </td>
    <td width="25%" align="center" valign="top">
      <b>Вкладка «ВНИМАНИЕ»</b><br>
      <img src="https://github.com/user-attachments/assets/2996abfd-160b-4f76-bea5-dd14f1d8debc" width="100%">
    </td>
  </tr>
</table>

---

## 🇷🇺 Русский

Современная и интерактивная карточка для Home Assistant, работающая в связке с интеграцией **[HA-Battery-Notes](https://github.com/andrew-codechimp/HA-Battery-Notes)**. Дизайн выполнен в минималистичном стиле с надежной Flexbox-версткой и защитой от чужих стилей (Shadow DOM).

### ✨ Возможности
* 🖥️ **Визуальный редактор (UI)**: Никакого YAML! Просто добавьте карточку и настройте все параметры в удобном интерфейсе.
* 🔍 **Автоматический поиск**: Сама находит все устройства с классом `battery`.
* 📑 **Вкладки**: ОБЗОР (все), ВНИМАНИЕ (проблемные), ТИП (инвентарь), РАСХОД (аналитика).
* ⏳ **Поиск зависших датчиков**: Отслеживание устройств, которые отвалились от сети и давно не присылали данные.
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
2. Добавьте ресурс в настройках: **Настройки -> Панели управления -> Ресурсы**: `/local/battery_manager_card/battery-manager-card.js?v=1.0.11` (Модуль JavaScript).

---

## 🇬🇧 English

Modern and interactive custom card for Home Assistant, designed for **[HA-Battery-Notes](https://github.com/andrew-codechimp/HA-Battery-Notes)**. Features a minimalist design using robust Flexbox and Shadow DOM isolation.

### ✨ Features
* 🖥️ **Full Visual Editor (UI)**: No YAML required! Simply add the card and configure everything directly in the UI.
* 🔍 **Auto-discovery**: Automatically finds all devices with the `battery` class.
* 📑 **Tabs**: OVERVIEW (all), ATTENTION (issues), TYPE (inventory), DRAIN (analytics).
* ⏳ **Stale Device Tracking**: Detects devices that have gone offline and haven't reported data in a while.
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
2. Add the resource in Settings -> Dashboards -> Resources: `/local/battery_manager_card/battery-manager-card.js?v=1.0.11` (JavaScript Module).

---

## 🇩🇪 Deutsch

Moderne, interaktive benutzerdefinierte Karte für Home Assistant, optimiert für **[HA-Battery-Notes](https://github.com/andrew-codechimp/HA-Battery-Notes)**. Minimalistisches Design mit robustem Flexbox und Shadow DOM-Isolierung.

### ✨ Funktionen
* 🖥️ **Visueller Editor (UI)**: Kein YAML nötig! Alles direkt über die Benutzeroberfläche konfigurieren.
* 🔍 **Auto-Discovery**: Findet automatisch alle Geräte mit der Klasse `battery`.
* 📑 **Tabs**: ÜBERSICHT (alle), ACHTUNG (Probleme), TYP (Bestand), VERBRAUCH (Analyse).
* ⏳ **Erkennung inaktiver Geräte**: Findet Geräte, die offline sind und sich lange nicht gemeldet haben.
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
2. Ressource hinzufügen unter Einstellungen -> Dashboards -> Ressourcen: `/local/battery_manager_card/battery-manager-card.js?v=1.0.11` (JavaScript Modul).

---

## 🇪🇸 Español

Tarjeta interactiva moderna para Home Assistant, diseñada para **[HA-Battery-Notes](https://github.com/andrew-codechimp/HA-Battery-Notes)**. Diseño minimalista usando Flexbox robusto y aislamiento Shadow DOM.

### ✨ Características
* 🖥️ **Editor Visual (UI)**: ¡Sin necesidad de YAML! Configure todo directamente en la interfaz.
* 🔍 **Auto-descubrimiento**: Encuentra dispositivos con la clase `battery`.
* 📑 **Pestañas**: RESUMEN (todos), ATENCIÓN (problemas), TIPO (inventario), DESCARGA (análisis).
* ⏳ **Dispositivos inactivos**: Detecta dispositivos que se han desconectado y no han enviado datos en mucho tiempo.
* 📉 **Análisis inteligente**: Consumo diario (% por día).
* 🔠 **Fuentes personalizables**: Cambie el tamaño de fuente para nombres y porcentajes.
* 📦 **Inventario**: Recuento total de baterías por tipo.

### 🛠 Instalación
**Opción 1: HACS (Recomendado)**
1. **HACS** -> Tres puntos -> **Repositorios personalizados**.
2. URL: `https://github.com/Eugen417/battery-manager-card`, Categoría: **Lovelace** (Panel).
3. Instalar.
4. ⚠️ **IMPORTANTE:** ¡Limpie la caché de su navegador (Ctrl+F5)!

**Opción 2: Manual**
1. Copie `battery-manager-card.js` a `/config/www/battery_manager_card/`.
2. Añada el recurso en Ajustes -> Paneles -> Recursos: `/local/battery_manager_card/battery-manager-card.js?v=1.0.11` (Módulo JavaScript).

---

## 🇫🇷 Français

Carte interactive moderne pour Home Assistant, conçue pour **[HA-Battery-Notes](https://github.com/andrew-codechimp/HA-Battery-Notes)**. Design minimaliste avec Flexbox robuste et isolation Shadow DOM.

### ✨ Fonctionnalités
* 🖥️ **Éditeur Visuel (UI)**: Pas de YAML requis ! Configurez tout directement dans l'interface.
* 🔍 **Détection automatique**: Trouve les appareils avec la classe `battery`.
* 📑 **Onglets**: APERÇU (tous), ATTENTION (problèmes), TYPE (inventaire), DÉCHARGE (analyse).
* ⏳ **Appareils inactifs**: Détecte les appareils hors ligne qui n'ont pas envoyé de données depuis longtemps.
* 📉 **Analyse intelligente**: Taux de décharge (% par jour).
* 🔠 **Polices personnalisables**: Modifiez la taille du texte.
* 📦 **Inventaire**: Nombre total de piles par type.

### 🛠 Installation
**Option 1: HACS (Recommandé)**
1. **HACS** -> Trois points -> **Dépôts personnalisés**.
2. URL: `https://github.com/Eugen417/battery-manager-card`, Catégorie: **Lovelace** (Tableau de bord).
3. Installer.
4. ⚠️ **IMPORTANT:** Videz le cache de votre navigateur (Ctrl+F5) !

**Option 2: Manual**
1. Copiez `battery-manager-card.js` dans `/config/www/battery_manager_card/`.
2. Ajoutez la ressource dans Paramètres -> Tableaux de bord -> Ressources: `/local/battery_manager_card/battery-manager-card.js?v=1.0.11` (Module JavaScript).> Ressources: `/local/battery_manager_card/battery-manager-card.js?v=1.0.11` (Module JavaScript).
