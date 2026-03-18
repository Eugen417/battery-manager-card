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
      threshold: config.threshold !== undefined ? config.threshold : 20, 
      charge_threshold: config.charge_threshold !== undefined ? config.charge_threshold : 15, 
      warning_threshold: config.warning_threshold !== undefined ? config.warning_threshold : 40, 
      drain_count: config.drain_count !== undefined ? config.drain_count : 5, 
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
      this.innerHTML = `<ha-card><div class="card-header"></div><div class="card-content" id="content"></div></ha-card>`;
      this.content = this.querySelector('#content');
      this.header = this.querySelector('.card-header');
      this.addStyles();
    }
    this.header.innerText = this.config.title !== undefined ? this.config.title : this.localize('title_default');
    
    let batteries = [];
    let typesToBuy = {}; let typesToCharge = {}; let allTypesInventory = {}; 
    let lowCount = 0; let needChargeCount = 0; let unavailableCount = 0; 

    Object.values(hass.states).forEach(state => {
      if (state.entity_id.startsWith('sensor.') && state.attributes.device_class === 'battery' && state.attributes.battery_type !== undefined) {
        const isAvailable = state.state !== 'unknown' && state.state !== 'unavailable';
        const level = isAvailable ? parseFloat(state.state) : NaN;
        const batteryType = state.attributes.battery_type;
        const batteryQuantity = state.attributes.battery_quantity || 1;
        const isRechargeable = batteryType.toLowerCase().includes('rechargeable');

        let typeStr = state.attributes.battery_type_and_quantity || batteryType;
        if (!typeStr.includes('×') && !typeStr.includes('x')) typeStr = `${batteryQuantity}× ${batteryType}`;

        let drainRate = 0;
        if (isAvailable && state.attributes.battery_last_replaced) {
          const daysPassed = (new Date() - new Date(state.attributes.battery_last_replaced)) / (1000 * 86400);
          if (daysPassed > 1) drainRate = (100 - level) / daysPassed;
        }

        batteries.push({
          entity_id: state.entity_id,
          name: state.attributes.friendly_name.replace(' Батарея+', '').trim(),
          level, isAvailable, type: batteryType, isRechargeable, type_str: typeStr,
          last_replaced: isAvailable ? this.formatDate(state.attributes.battery_last_replaced) : null,
          drain_rate: drainRate, icon: this.getBatteryIcon(level, isAvailable)
        });

        allTypesInventory[batteryType] = (allTypesInventory[batteryType] || 0) + batteryQuantity;
        if (!isAvailable) unavailableCount++;
        else if (isRechargeable && level < this.config.charge_threshold) { needChargeCount++; typesToCharge[batteryType] = (typesToCharge[batteryType] || 0) + batteryQuantity; }
        else if (!isRechargeable && level < this.config.threshold) { lowCount++; typesToBuy[batteryType] = (typesToBuy[batteryType] || 0) + batteryQuantity; }
      }
    });

    batteries.sort((a, b) => (!a.isAvailable && b.isAvailable) ? -1 : (a.isAvailable && !b.isAvailable) ? 1 : a.level - b.level);
    this.render(batteries, typesToBuy, typesToCharge, allTypesInventory, lowCount, needChargeCount, unavailableCount);
  }

  formatDate(rawDate) {
    if (!rawDate) return null;
    const lang = (this._hass && this._hass.language) ? this._hass.language : 'en';
    return new Date(rawDate).toLocaleDateString(lang, { month: 'short', day: 'numeric', year: 'numeric' });
  }

  render(batteries, typesToBuy, typesToCharge, allTypesInventory, lowCount, needChargeCount, unavailableCount) {
    let html = `<div class="tabs-wrapper"><div class="tabs">`;
    ['all', 'attention', 'type', 'drain'].forEach(t => {
      html += `<div class="tab ${this.activeTab === t ? 'active' : ''}" data-tab="${t}">${this.localize('tab_'+t)}${t==='all'?' ('+batteries.length+')':''}</div>`;
    });
    html += `</div></div><div class="tab-content">`;

    const renderRow = (bat, showDrain = false) => {
      let lClass = !bat.isAvailable ? 'problem' : bat.level < (bat.isRechargeable ? this.config.charge_threshold : this.config.threshold) ? 'critical' : bat.level < this.config.warning_threshold ? 'warning' : 'good';
      let meta = bat.type_str + (!bat.isAvailable ? ` • ${this.localize('no_connection')}` : showDrain && bat.drain_rate > 0 ? ` • ${this.localize('drain_rate', bat.drain_rate.toFixed(1))}` : bat.last_replaced ? ` • ${bat.last_replaced}` : '');
      return `<div class="battery-row ${lClass}" data-entity="${bat.entity_id}"><div class="icon-wrapper ${lClass}"><ha-icon icon="${bat.icon}"></ha-icon></div><div class="name-col"><div class="name">${bat.name}</div><div class="meta">${meta}</div></div><div class="level-col"><span class="level ${lClass}">${bat.isAvailable ? bat.level+'%' : '—'}</span></div></div>`;
    };

    if (this.activeTab === 'all') {
      html += `<div class="list-title">${this.localize('total_devices', batteries.length)}</div><div class="battery-list">`;
      batteries.forEach(b => html += renderRow(b));
      html += `</div>`;
    } else if (this.activeTab === 'attention') {
      html += `<div class="rec-box ${lowCount+needChargeCount+unavailableCount>0?'warning':'ok'}"><div class="rec-title">${lowCount+needChargeCount+unavailableCount>0?this.localize('attention_req'):this.localize('all_good')}</div><div class="rec-status-list">`;
      if (unavailableCount>0) html += `<div class="rec-stat-item">${this.localize('offline_count', unavailableCount)}</div>`;
      if (needChargeCount>0) html += `<div class="rec-stat-item">${this.localize('charge_count', needChargeCount)}</div>`;
      if (lowCount>0) html += `<div class="rec-stat-item">${this.localize('replace_note')}</div>`;
      html += `</div></div><div class="battery-list">`;
      const att = batteries.filter(b => !b.isAvailable || b.level < (b.isRechargeable ? this.config.charge_threshold : this.config.threshold));
      att.length ? att.forEach(b => html += renderRow(b)) : html += `<div class="meta" style="text-align:center">${this.localize('no_problems')}</div>`;
      html += `</div>`;
    } else if (this.activeTab === 'type') {
      html += `<div class="inventory-section">`;
      if (Object.keys(typesToCharge).length || Object.keys(typesToBuy).length) {
        if (Object.keys(typesToCharge).length) html += `<div class="buy-box charge-box"><div class="box-title" style="color:var(--apple-red)">${this.localize('need_charge', this.config.charge_threshold)}</div><ul class="type-list">${Object.entries(typesToCharge).map(([t,q])=>`<li><span class="type-badge charge-badge">${t}</span> <b>${q} ${this.localize('pcs')}</b></li>`).join('')}</ul></div>`;
        if (Object.keys(typesToBuy).length) html += `<div class="buy-box active-buy"><div class="box-title">${this.localize('need_buy', this.config.threshold)}</div><ul class="type-list">${Object.entries(typesToBuy).map(([t,q])=>`<li><span class="type-badge">${t}</span> <b>${q} ${this.localize('pcs')}</b></li>`).join('')}</ul></div>`;
      } else html += `<div class="buy-box ok">${this.localize('no_buys')}</div>`;
      html += `<div class="list-title" style="margin-top:20px">${this.localize('in_use')}</div><ul class="type-list minimal">${Object.entries(allTypesInventory).map(([t,q])=>`<li><span class="type-name">${t}</span> <span class="type-total">${q} ${this.localize('pcs')}</span></li>`).join('')}</ul></div>`;
    } else if (this.activeTab === 'drain') {
      html += `<div class="list-title">${this.localize('drain_speed')}</div><div class="battery-list">`;
      const dr = batteries.filter(b => b.drain_rate > 0 && b.isAvailable).sort((a,b)=>b.drain_rate-a.drain_rate).slice(0, this.config.drain_count);
      dr.length ? dr.forEach(b => html += renderRow(b, true)) : html += `<div class="meta" style="text-align:center">${this.localize('no_drain_data')}</div>`;
      html += `</div>`;
    }

    this.content.innerHTML = html + `</div>`;
    this.querySelectorAll('.tab').forEach(t => t.addEventListener('click', e => { this.activeTab = e.target.dataset.tab; this.hass = this._hass; }));
    this.querySelectorAll('.battery-row').forEach(r => r.addEventListener('click', () => { if (!r.classList.contains('problem')) { const ev = new Event('hass-more-info', { bubbles: true, composed: true }); ev.detail = { entityId: r.dataset.entity }; this.dispatchEvent(ev); } }));
  }

  addStyles() {
    const s = document.createElement('style');
    s.textContent = `
      :host { --apple-red: #ff3b30; --apple-orange: #ff9500; --apple-green: #34c759; --apple-grey: #8e8e93; }
      ha-card { border-radius: 16px; box-shadow: 0 10px 20px rgba(0,0,0,0.05); overflow: hidden; padding-bottom: 12px; font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif; }
      .card-header { font-size: 26px; font-weight: 700; padding: 24px 20px 16px; }
      .tabs-wrapper { display: flex; padding: 0 16px 16px; }
      .tabs { display: flex; background: rgba(120, 120, 128, 0.1); border-radius: 9px; padding: 2px; width: 100%; }
      .tab { flex: 1; text-align: center; padding: 6px 2px; font-size: 11px; font-weight: 600; cursor: pointer; border-radius: 7px; transition: 0.2s; text-transform: uppercase; }
      .tab.active { background: var(--card-background-color); box-shadow: 0 3px 8px rgba(0,0,0,0.1); }
      .tab-content { padding: 0 16px; }
      .battery-list { display: flex; flex-direction: column; gap: 2px; }
      .battery-row { display: flex; align-items: center; padding: 12px 16px; border-radius: 12px; margin: 0 -8px; cursor: pointer; }
      .battery-row:hover { background: var(--secondary-background-color); }
      .icon-wrapper { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-right: 16px; }
      .icon-wrapper.good { background: rgba(52, 199, 89, 0.12); color: var(--apple-green); }
      .icon-wrapper.warning { background: rgba(255, 149, 0, 0.12); color: var(--apple-orange); }
      .icon-wrapper.critical { background: rgba(255, 59, 48, 0.12); color: var(--apple-red); }
      .icon-wrapper.problem { background: rgba(142, 142, 147, 0.12); color: var(--apple-grey); }
      .name { font-weight: 600; font-size: 17px; }
      .meta { font-size: 13px; color: var(--secondary-text-color); }
      .level { font-weight: 700; font-size: 20px; }
      .level.good { color: var(--apple-green); }
      .level.warning { color: var(--apple-orange); }
      .level.critical { color: var(--apple-red); }
      .rec-box { border-radius: 12px; padding: 16px; margin-bottom: 20px; }
      .rec-box.warning { background: rgba(255, 149, 0, 0.08); }
      .rec-box.ok { background: rgba(52, 199, 89, 0.08); color: var(--apple-green); text-align: center; }
      .rec-title { font-weight: 700; font-size: 17px; margin-bottom: 8px; }
      .buy-box { border-radius: 12px; padding: 16px; margin-bottom: 12px; }
      .active-buy { background: rgba(255, 149, 0, 0.1); border: 1px solid rgba(255, 149, 0, 0.2); }
      .charge-box { background: rgba(255, 59, 48, 0.1); border: 1px solid rgba(255, 59, 48, 0.2); }
      .type-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
      .type-list li { display: flex; justify-content: space-between; }
      .type-badge { background: var(--apple-orange); color: #fff; padding: 2px 8px; border-radius: 6px; font-size: 12px; font-weight: 700; }
      .charge-badge { background: var(--apple-red); }
      .list-title { font-weight: 700; font-size: 18px; margin-bottom: 12px; }
    `;
    this.appendChild(s);
  }
}
customElements.define('battery-manager-card', BatteryManagerCard);
