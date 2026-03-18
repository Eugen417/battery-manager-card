const translations = {
  en: {
    title_default: "Battery Status",
    tab_all: "OVERVIEW",
    tab_attention: "ATTENTION",
    tab_type: "TYPE",
    tab_drain: "DRAIN",
    no_connection: "Offline",
    drain_rate: "Drain: ~{0}%/day",
    attention_req: "⚠️ Attention required",
    offline_count: "❔ <b>{0}</b> offline device(s)",
    charge_count: "🔌 <b>{0}</b> batt. to charge",
    replace_note: "🛒 Replacements needed (see Type)",
    all_good: "✅ All devices are good",
    no_problems: "No problem devices found",
    no_buys: "✅ No charging or buying needed",
    need_charge: "🔌 Charging required (<{0}%)",
    need_buy: "🛒 Buy urgently (<{0}%)",
    pcs: "pcs",
    in_use: "In use (Inventory)",
    drain_speed: "Discharge rate",
    no_drain_data: "Not enough replacement data",
    total_devices: "Total devices: {0}"
  },
  ru: {
    title_default: "Элементы питания",
    tab_all: "ОБЗОР",
    tab_attention: "ВНИМАНИЕ",
    tab_type: "ТИП",
    tab_drain: "РАСХОД",
    no_connection: "Нет связи",
    drain_rate: "Расход: ~{0}% в день",
    attention_req: "⚠️ Требуется внимание",
    offline_count: "❔ <b>{0}</b> устройств(а) не на связи",
    charge_count: "🔌 <b>{0}</b> аккум. на зарядку",
    replace_note: "🛒 Есть элементы под замену (см. Тип)",
    all_good: "✅ Все устройства в норме",
    no_problems: "Проблемных устройств не найдено",
    no_buys: "✅ Зарядка и закупки не требуются",
    need_charge: "🔌 Требуется зарядка (<{0}%)",
    need_buy: "🛒 Срочно купить (<{0}%)",
    pcs: "шт.",
    in_use: "Используется в доме",
    drain_speed: "Скорость разряда",
    no_drain_data: "Недостаточно данных о заменах",
    total_devices: "Всего устройств: {0}"
  },
  de: {
    title_default: "Batteriestatus",
    tab_all: "ÜBERSICHT",
    tab_attention: "ACHTUNG",
    tab_type: "TYP",
    tab_drain: "VERBRAUCH",
    no_connection: "Offline",
    drain_rate: "Verbrauch: ~{0}%/Tag",
    attention_req: "⚠️ Achtung erforderlich",
    offline_count: "❔ <b>{0}</b> Gerät(e) offline",
    charge_count: "🔌 <b>{0}</b> Akku(s) laden",
    replace_note: "🛒 Ersatz benötigt (siehe Typ)",
    all_good: "✅ Alle Geräte in Ordnung",
    no_problems: "Keine problematischen Geräte gefunden",
    no_buys: "✅ Kein Laden oder Kaufen nötig",
    need_charge: "🔌 Laden erforderlich (<{0}%)",
    need_buy: "🛒 Dringend kaufen (<{0}%)",
    pcs: "Stk.",
    in_use: "Im Einsatz (Bestand)",
    drain_speed: "Entladegeschwindigkeit",
    no_drain_data: "Nicht genug Ersatzdaten",
    total_devices: "Geräte gesamt: {0}"
  },
  es: {
    title_default: "Estado de Baterías",
    tab_all: "RESUMEN",
    tab_attention: "ATENCIÓN",
    tab_type: "TIPO",
    tab_drain: "DESCARGA",
    no_connection: "Sin conexión",
    drain_rate: "Descarga: ~{0}%/día",
    attention_req: "⚠️ Atención requerida",
    offline_count: "❔ <b>{0}</b> disp. sin conexión",
    charge_count: "🔌 <b>{0}</b> bat. a cargar",
    replace_note: "🛒 Reemplazos necesarios (ver Tipo)",
    all_good: "✅ Todos los dispositivos bien",
    no_problems: "No se encontraron problemas",
    no_buys: "✅ No se necesita cargar ni comprar",
    need_charge: "🔌 Requiere carga (<{0}%)",
    need_buy: "🛒 Comprar urgente (<{0}%)",
    pcs: "un.",
    in_use: "En uso (Inventario)",
    drain_speed: "Tasa de descarga",
    no_drain_data: "Faltan datos de reemplazo",
    total_devices: "Total de dispositivos: {0}"
  },
  fr: {
    title_default: "État des Batteries",
    tab_all: "APERÇU",
    tab_attention: "ATTENTION",
    tab_type: "TYPE",
    tab_drain: "DÉCHARGE",
    no_connection: "Hors ligne",
    drain_rate: "Décharge : ~{0}%/jour",
    attention_req: "⚠️ Attention requise",
    offline_count: "❔ <b>{0}</b> appareil(s) hors ligne",
    charge_count: "🔌 <b>{0}</b> bat. à charger",
    replace_note: "🛒 Remplacements nécessaires (voir Type)",
    all_good: "✅ Tous les appareils sont bons",
    no_problems: "Aucun appareil défectueux",
    no_buys: "✅ Aucun chargement ou achat nécessaire",
    need_charge: "🔌 Chargement requis (<{0}%)",
    need_buy: "🛒 Acheter d'urgence (<{0}%)",
    pcs: "pcs",
    in_use: "En cours d'utilisation",
    drain_speed: "Taux de décharge",
    no_drain_data: "Pas assez de données de remplacement",
    total_devices: "Total des appareils : {0}"
  }
};

class BatteryManagerCard extends HTMLElement {
  setConfig(config) {
    this.config = {
      threshold: config.threshold || 20, 
      charge_threshold: config.charge_threshold || 15, 
      warning_threshold: config.warning_threshold || 40, 
      drain_count: config.drain_count || 5, // <-- НОВЫЙ ПАРАМЕТР
      ...config
    };

    if (!this.activeTab) this.activeTab = 'all';
  }

  localize(key, replaceVal = '') {
    const lang = (this._hass && this._hass.language) ? this._hass.language.substring(0, 2) : 'en';
    let translated = translations[lang] ? translations[lang][key] : translations['en'][key];
    if (!translated) translated = translations['en'][key];
    if (replaceVal !== '') translated = translated.replace('{0}', replaceVal);
    return translated;
  }

  getBatteryIcon(level, isAvailable) {
    if (!isAvailable) return 'mdi:battery-off-outline';
    if (isNaN(level)) return 'mdi:battery-unknown';
    const rounded = Math.round(level / 10) * 10;
    if (rounded >= 100) return 'mdi:battery';
    if (rounded <= 0) return 'mdi:battery-outline';
    return `mdi:battery-${rounded}`;
  }

  set hass(hass) {
    this._hass = hass;

    if (!this.content) {
      this.innerHTML = `
        <ha-card>
          <div class="card-header"></div>
          <div class="card-content" id="content"></div>
        </ha-card>
      `;
      this.content = this.querySelector('#content');
      this.header = this.querySelector('.card-header');
      this.addStyles();
    }

    this.header.innerText = this.config.title !== undefined ? this.config.title : this.localize('title_default');

    const threshold = this.config.threshold;
    const chargeThreshold = this.config.charge_threshold;
    
    let batteries = [];
    let typesToBuy = {}; 
    let typesToCharge = {}; 
    let allTypesInventory = {}; 
    let lowCount = 0;    
    let needChargeCount = 0; 
    let unavailableCount = 0; 

    Object.values(hass.states).forEach(state => {
      if (state.entity_id.startsWith('sensor.') && 
          state.attributes.device_class === 'battery' && 
          state.attributes.battery_type !== undefined) {

        const isAvailable = state.state !== 'unknown' && state.state !== 'unavailable';
        const level = isAvailable ? parseFloat(state.state) : NaN;
        const batteryType = state.attributes.battery_type;
        const batteryQuantity = state.attributes.battery_quantity || 1;
        const lastReplacedRaw = state.attributes.battery_last_replaced;
        const isRechargeable = batteryType.toLowerCase().includes('rechargeable');

        let typeStr = state.attributes.battery_type_and_quantity || batteryType;
        if (!typeStr.includes('×') && !typeStr.includes('x')) {
           typeStr = `${batteryQuantity}× ${batteryType}`;
        }

        let drainRate = 0;
        if (isAvailable && lastReplacedRaw) {
          const replacedDate = new Date(lastReplacedRaw);
          const now = new Date();
          const daysPassed = (now - replacedDate) / (1000 * 60 * 60 * 24);
          if (daysPassed > 1) { 
            const consumed = 100 - level;
            drainRate = consumed / daysPassed;
          }
        }

        batteries.push({
          entity_id: state.entity_id,
          name: state.attributes.friendly_name.replace(' Батарея+', '').trim(),
          level: level,
          isAvailable: isAvailable,
          type: batteryType,
          isRechargeable: isRechargeable,
          type_str: typeStr,
          quantity: batteryQuantity,
          last_replaced: isAvailable ? this.formatDate(lastReplacedRaw) : null,
          drain_rate: drainRate,
          icon: this.getBatteryIcon(level, isAvailable)
        });

        allTypesInventory[batteryType] = (allTypesInventory[batteryType] || 0) + batteryQuantity;

        if (!isAvailable) {
          unavailableCount++;
        } else {
          if (isRechargeable) {
            if (level < chargeThreshold) {
               needChargeCount++;
               typesToCharge[batteryType] = (typesToCharge[batteryType] || 0) + batteryQuantity;
            }
          } else {
            if (level < threshold) {
               lowCount++;
               typesToBuy[batteryType] = (typesToBuy[batteryType] || 0) + batteryQuantity;
            }
          }
        }
      }
    });

    batteries.sort((a, b) => {
      if (!a.isAvailable && b.isAvailable) return -1;
      if (a.isAvailable && !b.isAvailable) return 1;
      return a.level - b.level;
    });

    this.render(batteries, typesToBuy, typesToCharge, allTypesInventory, lowCount, needChargeCount, unavailableCount);
  }

  formatDate(rawDate) {
    if (!rawDate) return null;
    try {
      const lang = (this._hass && this._hass.language) ? this._hass.language : 'en';
      const date = new Date(rawDate);
      return date.toLocaleDateString(lang, { month: 'short', day: 'numeric', year: 'numeric' });
    } catch (e) {
      return null;
    }
  }

  render(batteries, typesToBuy, typesToCharge, allTypesInventory, lowCount, needChargeCount, unavailableCount) {
    let html = ``;

    html += `
      <div class="tabs-wrapper">
        <div class="tabs">
          <div class="tab ${this.activeTab === 'all' ? 'active' : ''}" data-tab="all">${this.localize('tab_all')}</div>
          <div class="tab ${this.activeTab === 'attention' ? 'active' : ''}" data-tab="attention">${this.localize('tab_attention')}</div>
          <div class="tab ${this.activeTab === 'type' ? 'active' : ''}" data-tab="type">${this.localize('tab_type')}</div>
          <div class="tab ${this.activeTab === 'drain' ? 'active' : ''}" data-tab="drain">${this.localize('tab_drain')}</div>
        </div>
      </div>
    `;

    const renderRow = (bat, showDrain = false) => {
      let levelClass = '';
      if (!bat.isAvailable) levelClass = 'problem';
      else if (bat.level < (bat.isRechargeable ? this.config.charge_threshold : this.config.threshold)) levelClass = 'critical';
      else if (bat.level < this.config.warning_threshold) levelClass = 'warning';
      else levelClass = 'good';

      let metaText = bat.type_str;
      if (!bat.isAvailable) metaText += ` • ${this.localize('no_connection')}`;
      else if (showDrain && bat.drain_rate > 0) metaText += ` • ${this.localize('drain_rate', bat.drain_rate.toFixed(1))}`;
      else if (bat.last_replaced) metaText += ` • ${bat.last_replaced}`;

      const displayLevel = bat.isAvailable ? `${bat.level}%` : '—';

      return `
        <div class="battery-row ${levelClass}" data-entity="${bat.entity_id}">
          <div class="icon-wrapper ${levelClass}">
            <ha-icon icon="${bat.icon}"></ha-icon>
          </div>
          <div class="name-col">
            <div class="name">${bat.name}</div>
            <div class="meta">${metaText}</div>
          </div>
          <div class="level-col">
            <span class="level ${levelClass}">${displayLevel}</span>
          </div>
        </div>
      `;
    };

    html += `<div class="tab-content">`;

    if (this.activeTab === 'all') {
      html += `<div class="list-title">${this.localize('total_devices', batteries.length)}</div>`;
      html += `<div class="battery-list">`;
      batteries.forEach(bat => { html += renderRow(bat); });
      html += `</div>`;
    }

    else if (this.activeTab === 'attention') {
      html += `<div class="rec-box ${lowCount > 0 || needChargeCount > 0 || unavailableCount > 0 ? 'warning' : 'ok'}">`;
      if (lowCount > 0 || needChargeCount > 0 || unavailableCount > 0) {
        html += `<div class="rec-title" style="color:var(--apple-orange)">${this.localize('attention_req')}</div>`;
        html += `<div class="rec-status-list">`;
        if (unavailableCount > 0) html += `<div class="rec-stat-item">${this.localize('offline_count', unavailableCount)}</div>`;
        if (needChargeCount > 0) html += `<div class="rec-stat-item">${this.localize('charge_count', needChargeCount)}</div>`;
        if (lowCount > 0) html += `<div class="rec-stat-item">${this.localize('replace_note')}</div>`;
        html += `</div>`;
      } else {
        html += `<div class="rec-title ok">${this.localize('all_good')}</div>`;
      }
      html += `</div>`;

      const attentionBatteries = batteries.filter(b => !b.isAvailable || b.level < (b.isRechargeable ? this.config.charge_threshold : this.config.threshold));
      html += `<div class="battery-list">`;
      if (attentionBatteries.length > 0) {
         attentionBatteries.forEach(bat => { html += renderRow(bat); });
      } else {
         html += `<div class="meta" style="padding: 16px; text-align: center;">${this.localize('no_problems')}</div>`;
      }
      html += `</div>`;
    }

    else if (this.activeTab === 'type') {
      html += `<div class="inventory-section">`;
      
      const hasToCharge = Object.keys(typesToCharge).length > 0;
      const hasToBuy = Object.keys(typesToBuy).length > 0;

      if (!hasToCharge && !hasToBuy) {
        html += `<div class="buy-box ok"><div class="box-title" style="margin-bottom:0;">${this.localize('no_buys')}</div></div>`;
      } else {
        if (hasToCharge) {
          html += `<div class="buy-box charge-box">`;
          html += `<div class="box-title" style="color: var(--apple-red);">${this.localize('need_charge', this.config.charge_threshold)}</div>`;
          html += `<ul class="type-list">`;
          for (const [type, qty] of Object.entries(typesToCharge)) {
            html += `<li><span class="type-badge charge-badge">${type}</span> <span class="qty">${qty} ${this.localize('pcs')}</span></li>`;
          }
          html += `</ul></div>`;
        }

        if (hasToBuy) {
          html += `<div class="buy-box active-buy">`;
          html += `<div class="box-title">${this.localize('need_buy', this.config.threshold)}</div>`;
          html += `<ul class="type-list">`;
          for (const [type, qty] of Object.entries(typesToBuy)) {
            html += `<li><span class="type-badge">${type}</span> <span class="qty">${qty} ${this.localize('pcs')}</span></li>`;
          }
          html += `</ul></div>`;
        }
      }

      html += `<div class="list-title" style="margin-top: 20px;">${this.localize('in_use')}</div>`;
      html += `<ul class="type-list minimal">`;
      for (const [type, qty] of Object.entries(allTypesInventory)) {
        html += `<li><span class="type-name">${type}</span> <span class="type-total">${qty} ${this.localize('pcs')}</span></li>`;
      }
      html += `</ul>`;
      html += `</div>`;
    }

    else if (this.activeTab === 'drain') {
      html += `<div class="list-title">${this.localize('drain_speed')}</div>`;
      
      // ИСПОЛЬЗУЕМ НОВУЮ НАСТРОЙКУ drain_count ЗДЕСЬ
      const drainBatteries = [...batteries]
        .filter(b => b.drain_rate > 0 && b.isAvailable)
        .sort((a, b) => b.drain_rate - a.drain_rate)
        .slice(0, this.config.drain_count);

      html += `<div class="battery-list" style="margin-top: 10px;">`;
      if (drainBatteries.length > 0) {
        drainBatteries.forEach(bat => { html += renderRow(bat, true); });
      } else {
        html += `<div class="meta" style="padding: 16px; text-align: center;">${this.localize('no_drain_data')}</div>`;
      }
      html += `</div>`;
    }

    html += `</div>`; 
    this.content.innerHTML = html;

    this.querySelectorAll('.tab').forEach(tabEl => {
      tabEl.addEventListener('click', (e) => {
        this.activeTab = e.target.dataset.tab;
        this.render(batteries, typesToBuy, typesToCharge, allTypesInventory, lowCount, needChargeCount, unavailableCount);
      });
    });

    this.querySelectorAll('.battery-row').forEach(row => {
      row.addEventListener('click', () => {
        if (!row.classList.contains('problem')) {
          const event = new Event('hass-more-info', { bubbles: true, cancelable: false, composed: true });
          event.detail = { entityId: row.dataset.entity };
          this.dispatchEvent(event);
        }
      });
    });
  }

  addStyles() {
    const style = document.createElement('style');
    style.textContent = `
      :host {
        --apple-bg: var(--card-background-color);
        --apple-secondary-bg: var(--secondary-background-color);
        --apple-red: #ff3b30;
        --apple-orange: #ff9500;
        --apple-green: #34c759;
        --apple-grey: #8e8e93;
        --apple-radius: 16px;
        --apple-row-padding: 12px 16px;
      }

      ha-card {
        border-radius: var(--apple-radius); box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        border: none; overflow: hidden; padding-bottom: 12px;
        font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif;
      }

      .card-header {
        font-size: 26px; font-weight: 700; letter-spacing: -0.5px;
        color: var(--primary-text-color); padding: 24px 20px 16px 20px;
      }
      .card-content { padding: 0 16px; }

      .tabs-wrapper { display: flex; justify-content: center; margin-bottom: 16px; }
      .tabs { display: flex; background-color: rgba(120, 120, 128, 0.1); border-radius: 9px; padding: 2px; width: 100%;}
      .tab {
        flex: 1; text-align: center; padding: 6px 2px; font-size: 11px; font-weight: 500;
        color: var(--primary-text-color); cursor: pointer; border-radius: 7px; transition: all 0.2s;
        text-transform: uppercase; letter-spacing: 0.5px;
      }
      .tab.active { background-color: var(--card-background-color); box-shadow: 0 3px 8px rgba(0,0,0,0.1); font-weight: 600; }

      .rec-box { border-radius: 12px; padding: 16px; margin-bottom: 20px; }
      .rec-box.warning { background-color: rgba(255, 149, 0, 0.08); }
      .rec-box.ok { background-color: rgba(52, 199, 89, 0.08); }
      .rec-title { font-weight: 600; font-size: 17px; margin-bottom: 8px; }
      .rec-title.ok { color: var(--apple-green); text-align: center; margin-bottom: 0; }
      .rec-status-list { display: flex; flex-direction: column; gap: 6px; font-size: 14px; }
      
      .buy-box { border-radius: 12px; padding: 16px; margin-bottom: 16px; }
      .buy-box.active-buy { background-color: rgba(255, 149, 0, 0.1); border: 1px solid rgba(255, 149, 0, 0.2); }
      .buy-box.charge-box { background-color: rgba(255, 59, 48, 0.1); border: 1px solid rgba(255, 59, 48, 0.2); }
      .buy-box.ok { background-color: rgba(52, 199, 89, 0.08); text-align: center; }
      .box-title { font-weight: 600; font-size: 15px; margin-bottom: 12px; }
      
      .type-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
      .type-list li { display: flex; justify-content: space-between; align-items: center; }
      .type-badge { background: var(--apple-orange); color: #fff; padding: 4px 10px; border-radius: 8px; font-weight: 600; font-size: 14px; }
      .charge-badge { background: var(--apple-red); }
      .type-list .qty { font-weight: bold; font-size: 16px; }
      .type-list.minimal li { padding: 8px 0; border-bottom: 1px solid var(--divider-color); }
      .type-name { font-weight: 500; font-size: 15px; }
      .type-total { color: var(--secondary-text-color); font-weight: 600; }

      .list-title { font-weight: 600; font-size: 18px; margin-bottom: 8px; }
      .battery-list { display: flex; flex-direction: column; gap: 2px; }
      .battery-row {
        display: flex; align-items: center; padding: var(--apple-row-padding);
        border-radius: 12px; transition: background 0.1s; margin: 0 -8px;
      }
      .battery-row:not(.problem) { cursor: pointer; }
      .battery-row:not(.problem):hover { background-color: var(--apple-secondary-bg); }
      
      .icon-wrapper {
        width: 40px; height: 40px; border-radius: 10px; 
        display: flex; align-items: center; justify-content: center; margin-right: 16px;
        transition: background-color 0.2s;
      }
      .icon-wrapper.good { background-color: rgba(52, 199, 89, 0.12); color: var(--apple-green); }
      .icon-wrapper.critical { background-color: rgba(255, 59, 48, 0.12); color: var(--apple-red); }
      .icon-wrapper.warning { background-color: rgba(255, 149, 0, 0.12); color: var(--apple-orange); }
      .icon-wrapper.problem { background-color: rgba(142, 142, 147, 0.12); color: var(--apple-grey); }

      .name-col { flex-grow: 1; display: flex; flex-direction: column; gap: 2px; }
      .name { font-weight: 600; font-size: 17px; color: var(--primary-text-color); }
      .meta { font-size: 13px; color: var(--secondary-text-color); font-weight: 400; }

      .level-col { text-align: right; margin-left: 10px; }
      .level { font-weight: 700; font-size: 20px; }
      .level.good { color: var(--apple-green); }
      .level.critical { color: var(--apple-red); }
      .level.warning { color: var(--apple-orange); }
      .level.problem { color: var(--apple-grey); }
    `;
    this.appendChild(style);
  }

  getCardSize() { return 6; }
}

customElements.define('battery-manager-card', BatteryManagerCard);
