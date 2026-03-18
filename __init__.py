from homeassistant.core import HomeAssistant
from homeassistant.components.http import StaticPathConfig

DOMAIN = "battery_manager"

async def async_setup(hass: HomeAssistant, config: dict):
    # Регистрируем папку www внутри компонента (актуально для новых версий HA)
    await hass.http.async_register_static_paths([
        StaticPathConfig(
            "/battery_manager_local",
            hass.config.path(f"custom_components/{DOMAIN}/www"),
            cache_headers=False
        )
    ])
    return True
