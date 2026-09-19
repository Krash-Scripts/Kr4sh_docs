---
title: KR4SH Backfire — English guide
---

# KR4SH Backfire — English guide

<div class="kr-eyebrow">FREE RESOURCE · ESX LEGACY · v1.8.1</div>

KR4SH Backfire is a per-vehicle exhaust tuning system for FiveM. Players install and configure backfire through a tablet, choose exhaust flame effects and sounds, optionally change an engine audio profile, and save their choices in MySQL. The Tebex download is **free**; installation and modification prices shown inside the game are configurable server-currency charges.

## Features

- Tablet NUI with purchase summary and appearance preferences.
- 3 backfire frequency profiles, 6 flame colors, 4 flame sizes and 6 shot sounds.
- Searchable catalog of 100 engine sound entries; actual playback requires matching banks in `Audio_Pack`.
- Stationary launch-control effect using **W + Space** with the default control mapping.
- Free ON/OFF switch with per-vehicle persistence, shot-volume control and owner validation.
- Nearby sound/effect synchronization within the same routing bucket.

## Requirements and included resources

The **planned final Tebex ZIP** contains three folders:

```text
resources/
├── k_backfire/
├── kr_backfire_fx/
└── Audio_Pack/
```

Each folder is an independently started FiveM resource. Your server must already provide **ESX Legacy (`es_extended`)**, **ox_lib**, **ox_inventory**, **oxmysql**, **OneSync** and a working MySQL database. QBCore, Qbox and standalone modes are **not supported by this version**.

::: warning Release packaging
The developer archive reviewed for this documentation contains `k_backfire` only. The publisher will add `kr_backfire_fx` and `Audio_Pack` to the final download after checking redistribution permissions and required credits. The assembled three-resource ZIP has not been verified in a live FiveM server in this documentation review.
:::

## Installation

1. Extract the final ZIP into `resources` with the **exact** names above.
2. Import `k_backfire/sql/install.sql` into the database used by ESX. Supported schema creation/column migrations also run at resource startup; manual migration files are backups for older versions.
3. Register the following item **inside** the existing `ox_inventory/data/items.lua` items table; do not paste an extra top-level `return`:

```lua
['backfire_tablet'] = {
    label = 'Backfire Tablet',
    weight = 650,
    stack = false,
    close = true,
    consume = 0,
    description = 'Configure your vehicle backfire system.',
    client = {
        export = 'k_backfire.openTablet'
    }
},
```

::: danger Fix the bundled item example
The v1.8.1 developer archive's `k_backfire/install/ox_inventory_item.lua` still uses the outdated `kr_backfire.openTablet` export. If the resource folder is called `k_backfire`, **change that line to `k_backfire.openTablet` in the release package as well**. The documentation does not patch the resource itself.
:::

4. Ensure the start order in `server.cfg`:

```cfg
ensure oxmysql
ensure ox_lib
ensure es_extended
ensure ox_inventory
ensure Audio_Pack
ensure kr_backfire_fx
ensure k_backfire
```

5. Restart the server, grant yourself the `backfire_tablet` item using your server's admin tools, enter an eligible **owned** car as the driver, stop and use the item.
6. Test installation, purchase, ON/OFF persistence, regular shots, W + Space, engine audio and radio before publishing your release.

Remove outdated `kr_backfire_particles` / conflicting legacy YPT resources when upgrading. Back up `config.lua` and the `kr_backfire_vehicles` table; **v1.8.1 does not require an additional SQL migration**. The optional `sql/migrate_bbv_antilag.sql` is only for intentional migration from the older `bbv-antilag` resource, after the main installation.

## Player controls

Open the tablet as the driver of a stopped, supported, owned car using `backfire_tablet`. Choose frequency, flame color, shot sound, flame size, engine sound and volume. On the first purchase, the script charges a base install price plus selected options; subsequent purchases charge for changed priced options only. The ON/OFF switch and volume adjustment are free. Settings are saved per license plate, so plates should be unique on your server.

Release the throttle after reaching sufficient RPM for normal backfire. Stationary revving may also trigger a shot. For the stronger stationary effect, hold **W + Space** with the engine running and the required RPM; controls may differ with custom key bindings. The tablet's appearance settings change only the UI, not the exhaust color or server HUD.

## Configuration reference

Edit `k_backfire/config.lua` and restart the resource.

| Key | Default | Purpose |
| --- | --- | --- |
| `Config.ItemName` | `backfire_tablet` | Inventory item identifier |
| `Config.RequireTabletItem` | `true` | Server verifies item ownership |
| `Config.PaymentAccount` | `bank` | ESX account; `money` or `cash` selects cash |
| `Config.InstallPrice` | `45000` | Base price in **in-game currency** |
| `Config.RequireVehicleOwnerForPurchase` | `true` | Only registered vehicle owner can modify |
| `Config.RequireDriverSeat` | `true` | Driver seat required |
| `Config.MaxPurchaseSpeed` | `1.5` | Speed threshold for tablet/purchases in native game units |
| `Config.SyncDistance` | `70.0` | Effect synchronization range |
| `Config.AudioDistance` | `42.0` | Shot-audio range |
| `Config.EngineAudio.resource` | `Audio_Pack` | Engine-audio resource folder |
| `Config.EngineAudio.requireResourceForPurchase` | `true` | Block purchases if audio pack isn't running |
| `Config.ParticleFx.resource` | `kr_backfire_fx` | Particle resource folder |
| `Config.EnableTestCommand` | `false` | Enables testing command if set to true |
| `Config.TestCommand` | `backfiretablet` | Default testing command name |

The `Config.OwnedVehicles` table defaults to `owned_vehicles` with columns `plate` and `owner`. Change these if your garage stores ownership elsewhere; the owner value must match the ESX player identifier. `Config.Frequencies`, `Config.Colors`, `Config.FlameSizes`, `Config.Sounds` and `Config.EngineAudio.price` control in-game prices. `Config.LaunchControl`, `Config.BlockedVehicleClasses`, `Config.BlockedModels`, `Config.Security`, `Config.LiftOffSound` and `Config.FlameOverlay` control effects and restrictions.

To add a flame color, add a unique entry to `Config.Colors`. `hex` controls the tablet swatch and `rgb` contains three normalized 0.0–1.0 components for the in-game effect:

```lua
{
    id = 'cyan',
    label = 'Arctic Cyan',
    description = 'Bright cyan exhaust flames.',
    price = 14000,
    hex = '#00eaff',
    rgb = { 0.0, 0.92, 1.0 }
},
```

A client export is defined as `exports['k_backfire']:openTablet()`. Internal purchase/toggle server callbacks are **not a public purchase API**; they perform server-side validation and should not be bypassed.

## Troubleshooting

| Problem | Check |
| --- | --- |
| Tablet does not open | Correct item export `k_backfire.openTablet`, folder name, inventory loading, driver seat and ownership. |
| Cannot purchase | `Config.PaymentAccount`, funds, owner table and whether `Audio_Pack` is started. |
| Missing engine audio | Audio bank files and their identifiers, load order and F8 console messages. |
| No flames / wrong color | `kr_backfire_fx`, `krbf_core` / `krbf_nitro`, stale old particle files and F8. |
| No shot sounds | `web/sounds/1.ogg`–`6.ogg`, `lift_off.ogg`, volume and range. |
| OFF switch fails | v2.1 toggle fix, `kr_backfire:toggle` callback and SQL `enabled` field. |
| Radio changes during shots | Use the v1.8.1 `client/main.lua` radio hotfix; test OFF and manual station changes, and check for other conflicting audio scripts. |
| Database not ready | oxmysql connection, `kr_backfire_vehicles` and server errors. |

### Release checklist

- [ ] All three folders are present and start without errors.
- [ ] The **bundled** item example uses `k_backfire.openTablet`.
- [ ] Purchases, persistence, ON/OFF, radio and W + Space pass on a real FiveM server.
- [ ] Engine bank files and rights to redistribute all external assets have been verified.
- [ ] Dependencies and configuration match the actual release.

**Version 1.8.1 notes:** Prevents engine-sound reassignment on each shot and adds per-vehicle audio caching with local radio-station preservation when changing an engine profile. Previous tablet fixes correct ON/OFF persistence and keep the disabled state after later purchases. Earlier mock-based Lua and UI tests are not a substitute for the live release checks above.

[Back to Polish overview](../k_backfire) · [Polish installation](./installation) · [Polish troubleshooting](./troubleshooting)
