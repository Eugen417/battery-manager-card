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
* 🔍 **Поиск и автоопределение**: Карточка автоматически выводит информацию обо всех устройствах с классом `battery`. Встроенная строка поиска мгновенно фильтрует список по имени устройства, Entity ID, типу батарейки или **названию комнаты (Area)**. Имеется удобная кнопка быстрой очистки (X).
* 📑 **Вкладки (Управление дашбордами)**:
  * **ОБЗОР:** Полный список всех элементов питания с указанием уровня заряда и комнаты.
  * **ВНИМАНИЕ:** Фильтр проблемных устройств (разряжены, нет связи, давно не обновлялись).
  * **ТИП:** Инвентаризация — показывает, сколько и каких батареек используется в доме, формирует список покупок и устройств на зарядку.
  * **РАСХОД:** Аналитика скорости разряда (% в день) на основе даты последней замены.
  * **ОБСЛУЖИВАНИЕ:** Кнопки для мгновенного обновления даты замены/зарядки прямо из интерфейса карточки (в 1 клик).
* ⚡ **Статус зарядки**: Отображение анимированного индикатора (+) для устройств, находящихся в процессе зарядки.
* ⏳ **Зависшие датчики**: Отображение устройств, которые отвалились от сети или давно не присылали данные.
* 🔠 **Кастомизация**: Возможность изменить размер шрифтов под ваш дашборд.

### 🛠 Установка
**Вариант 1: HACS (Рекомендуется)**
1. **HACS** -> Три точки -> **Пользовательские репозитории**.
2. Ссылка: `https://github.com/Eugen417/battery-manager-card`, категория **Lovelace** (Панель).
3. Установите карточку.
4. ⚠️ **ВАЖНО:** Очистите кэш браузера (Ctrl+F5) или кэш фронтенда в мобильном приложении!

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Eugen417&repository=battery-manager-card&category=plugin)

**Вариант 2: Вручную**
1. Скопируйте файл `battery-manager-card.js` в `/config/www/battery_manager_card/`.
2. Добавьте ресурс в настройках: **Настройки -> Панели управления -> Ресурсы**: `/local/battery_manager_card/battery-manager-card.js?v=1.3.5` (Модуль JavaScript).

---

## 🇬🇧 English

Modern and interactive custom card for Home Assistant, designed for **[HA-Battery-Notes](https://github.com/andrew-codechimp/HA-Battery-Notes)**. Features a minimalist design using robust Flexbox and Shadow DOM isolation.

### ✨ Features
* 🖥️ **Full Visual Editor (UI)**: No YAML required! Simply add the card and configure everything directly in the UI.
* 🔍 **Search & Auto-discovery**: Automatically displays all devices with the `battery` class. The built-in search bar instantly filters devices by Name, Entity ID, Battery Type, or **Area (Room) name**. Includes a quick-clear (X) button.
* 📑 **Interactive Tabs (Dashboards)**:
  * **OVERVIEW:** A complete list of all devices, showing battery levels and assigned areas.
  * **ATTENTION:** Highlights problematic devices (low battery, offline, or stale data).
  * **TYPE:** Inventory tracking — shows total batteries by type and generates a shopping/recharge list.
  * **DRAIN:** Analytics showing battery drain rate (% per day) based on replacement dates.
  * **MAINTENANCE:** 1-click buttons to quickly update replacement/charging dates directly from the card.
* ⚡ **Charging Status**: Displays an animated (+) indicator for devices currently being charged.
* ⏳ **Stale Devices**: Displays devices that have gone offline or haven't reported data in a while.
* 🔠 **Customizable Fonts**: Change font sizes to fit your dashboard perfectly.

### 🛠 Installation
**Option 1: HACS (Recommended)**
1. **HACS** -> Three dots -> **Custom repositories**.
2. URL: `https://github.com/Eugen417/battery-manager-card`, Category: **Lovelace** (Dashboard).
3. Install the card.
4. ⚠️ **IMPORTANT:** Clear your browser cache (Ctrl+F5) or frontend cache in the companion app!

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Eugen417&repository=battery-manager-card&category=plugin)

**Option 2: Manual**
1. Copy the `battery-manager-card.js` file to `/config/www/battery_manager_card/`.
2. Add the resource in Settings -> Dashboards -> Resources: `/local/battery_manager_card/battery-manager-card.js?v=1.3.5` (JavaScript Module).

---

## 🇩🇪 Deutsch

Moderne, interaktive benutzerdefinierte Karte für Home Assistant, optimiert für **[HA-Battery-Notes](https://github.com/andrew-codechimp/HA-Battery-Notes)**. Minimalistisches Design mit robustem Flexbox und Shadow DOM-Isolierung.

### ✨ Funktionen
* 🖥️ **Visueller Editor (UI)**: Kein YAML nötig! Alles direkt über die Benutzeroberfläche konfigurieren.
* 🔍 **Suche & Auto-Discovery**: Zeigt automatisch alle Geräte mit der Klasse `battery` an. Die Suchleiste filtert Geräte sofort nach Name, Entitäts-ID, Batterietyp oder **Raumnamen (Area)**. Inklusive Schnelllöschtaste (X).
* 📑 **Interaktive Tabs (Dashboards)**:
  * **ÜBERSICHT:** Liste aller Geräte mit Ladestand und Raumangabe.
  * **ACHTUNG:** Hebt problematische Geräte hervor (niedriger Ladestand, offline oder keine aktuellen Daten).
  * **TYP:** Bestandsaufnahme — zeigt Batterien nach Typ und erstellt eine Einkaufs-/Ladeliste.
  * **VERBRAUCH:** Analyse der Entladegeschwindigkeit (% pro Tag).
  * **WARTUNG:** 1-Klick-Buttons zum schnellen Aktualisieren der Wechsel-/Ladedaten direkt in der Karte.
* ⚡ **Ladestatus**: Zeigt einen animierten (+)-Indikator für Geräte an, die gerade geladen werden.
* ⏳ **Inaktive Geräte**: Zeigt Geräte an, die offline sind oder sich lange nicht gemeldet haben.
* 🔠 **Anpassbare Schriftarten**: Ändern Sie die Schriftgrößen für Ihr Dashboard.

### 🛠 Installation
**Option 1: HACS (Empfohlen)**
1. **HACS** -> Drei Punkte -> **Benutzerdefinierte Repositories**.
2. URL: `https://github.com/Eugen417/battery-manager-card`, Kategorie: **Lovelace** (Dashboard).
3. Installieren.
4. ⚠️ **WICHTIG:** Leeren Sie Ihren Browser-Cache (Strg+F5)!

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Eugen417&repository=battery-manager-card&category=plugin)

**Option 2: Manuell**
1. Kopieren Sie `battery-manager-card.js` nach `/config/www/battery_manager_card/`.
2. Ressource hinzufügen unter Einstellungen -> Dashboards -> Ressourcen: `/local/battery_manager_card/battery-manager-card.js?v=1.3.5` (JavaScript Modul).

---

## 🇪🇸 Español

Tarjeta interactiva moderna para Home Assistant, diseñada para **[HA-Battery-Notes](https://github.com/andrew-codechimp/HA-Battery-Notes)**. Diseño minimalista usando Flexbox robusto y aislamiento Shadow DOM.

### ✨ Características
* 🖥️ **Editor Visual (UI)**: ¡Sin necesidad de YAML! Configure todo directamente en la interfaz.
* 🔍 **Búsqueda y Auto-descubrimiento**: Muestra automáticamente todos los dispositivos con la clase `battery`. La barra de búsqueda filtra instantáneamente por Nombre, ID de entidad, Tipo de batería o **Nombre del Área (Habitación)**. Incluye botón de borrado rápido (X).
* 📑 **Pestañas Interactivas (Paneles)**:
  * **RESUMEN:** Lista completa de dispositivos, mostrando niveles de batería y áreas asignadas.
  * **ATENCIÓN:** Destaca dispositivos problemáticos (batería baja, sin conexión o datos obsoletos).
  * **TIPO:** Inventario: muestra el total de baterías por tipo y genera una lista de compras/recargas.
  * **DESCARGA:** Análisis del consumo diario (% por día).
  * **MANTENIMIENTO:** Botones de 1 clic para actualizar rápidamente las fechas de cambio/carga directamente en la tarjeta.
* ⚡ **Estado de carga**: Muestra un indicador animado (+) para los dispositivos que se están cargando actualmente.
* ⏳ **Dispositivos inactivos**: Muestra dispositivos que se han desconectado o no han enviado datos en mucho tiempo.
* 🔠 **Fuentes personalizables**: Cambie el tamaño de fuente para nombres y porcentajes.

### 🛠 Instalación
**Opción 1: HACS (Recomendado)**
1. **HACS** -> Tres puntos -> **Repositorios personalizados**.
2. URL: `https://github.com/Eugen417/battery-manager-card`, Categoría: **Lovelace** (Panel).
3. Instalar.
4. ⚠️ **IMPORTANTE:** ¡Limpie la caché de su navegador (Ctrl+F5)!

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Eugen417&repository=battery-manager-card&category=plugin)

**Opción 2: Manual**
1. Copie `battery-manager-card.js` a `/config/www/battery_manager_card/`.
2. Añada el recurso en Ajustes -> Paneles -> Recursos: `/local/battery_manager_card/battery-manager-card.js?v=1.3.5` (Módulo JavaScript).

---

## 🇫🇷 Français

Carte interactive moderne pour Home Assistant, conçue pour **[HA-Battery-Notes](https://github.com/andrew-codechimp/HA-Battery-Notes)**. Design minimaliste avec Flexbox robuste et isolation Shadow DOM.

### ✨ Fonctionnalités
* 🖥️ **Éditeur Visuel (UI)**: Pas de YAML requis ! Configurez tout directement dans l'interface.
* 🔍 **Recherche et Détection automatique**: Affiche automatiquement tous les appareils avec la classe `battery`. La barre de recherche filtre instantanément par Nom, ID d'entité, Type de pile ou **Nom de la pièce (Area)**. Inclut un bouton d'effacement rapide (X).
* 📑 **Onglets Interactifs (Tableaux de bord)**:
  * **APERÇU:** Liste complète des appareils avec niveau de batterie et pièce attribuée.
  * **ATTENTION:** Met en évidence les appareils problématiques (batterie faible, hors ligne ou données obsolètes).
  * **TYPE:** Inventaire — affiche le total par type et génère une liste d'achats/recharges.
  * **DÉCHARGE:** Analyse du taux de décharge (% par jour).
  * **ENTRETIEN:** Boutons en 1 clic pour mettre à jour rapidement les dates de remplacement/charge directement depuis la carte.
* ⚡ **État de charge**: Affiche un indicateur animé (+) pour les appareils en cours de charge.
* ⏳ **Appareils inactifs**: Affiche les appareils hors ligne ou qui n'ont pas envoyé de données depuis longtemps.
* 🔠 **Polices personnalisables**: Modifiez la taille du texte pour l'adapter à votre tableau de bord.

### 🛠 Installation
**Option 1: HACS (Recommandé)**
1. **HACS** -> Trois points -> **Dépôts personnalisés**.
2. URL: `https://github.com/Eugen417/battery-manager-card`, Catégorie: **Lovelace** (Tableau de bord).
3. Installer.
4. ⚠️ **IMPORTANT:** Videz le cache de votre navigateur (Ctrl+F5) !

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Eugen417&repository=battery-manager-card&category=plugin)

**Option 2: Manuel**
1. Copiez `battery-manager-card.js` dans `/config/www/battery_manager_card/`.
2. Ajoutez la ressource dans Paramètres -> Tableaux de bord -> Ressources: `/local/battery_manager_card/battery-manager-card.js?v=1.3.5` (Module JavaScript).
