---
title: Backfire — konfiguracja i API
---

# Konfiguracja i integracje

<div class="kr-eyebrow">DLA ADMINISTRATORA · v1.8.1</div>

Edytuj `k_backfire/config.lua`. Po zmianach uruchom ponownie `k_backfire`. Nazwy i wartości poniżej odpowiadają wersji 1.8.1.

## Ustawienia podstawowe

| Klucz | Domyślnie | Działanie |
| --- | --- | --- |
| `Config.ItemName` | `backfire_tablet` | Identyfikator przedmiotu w `ox_inventory` |
| `Config.RequireTabletItem` | `true` | Sprawdza przedmiot po stronie serwera |
| `Config.PaymentAccount` | `bank` | Konto ESX; `money` / `cash` oznacza gotówkę |
| `Config.Currency` | `$` | Symbol wyświetlany w tablecie |
| `Config.InstallPrice` | `45000` | Cena pierwszego montażu w walucie gry |
| `Config.RequireVehicleOwnerForPurchase` | `true` | Wymaga zgodności właściciela w bazie |
| `Config.RequireDriverSeat` | `true` | Wymaga miejsca kierowcy |
| `Config.MaxPurchaseSpeed` | `1.5` | Limit prędkości podczas otwierania / zakupu; jednostka natywna GTA |
| `Config.SyncDistance` | `70.0` | Zasięg synchronizacji efektów |
| `Config.AudioDistance` | `42.0` | Zasięg dźwięków strzału |
| `Config.SoundVolume` | `0.72` | Bazowa głośność |
| `Config.EnableTestCommand` | `false` | Włącza komendę testową |
| `Config.TestCommand` | `backfiretablet` | Nazwa komendy, gdy test jest włączony |

Komenda `/backfiretablet` jest **domyślnie wyłączona**. Jeśli tablet ma działać tylko przez przedmiot, pozostaw `Config.RequireTabletItem = true` i `Config.EnableTestCommand = false`.

## Własność pojazdu i garaże

Domyślnie skrypt porównuje znormalizowaną tablicę pojazdu z tabelą `owned_vehicles`, a kolumnę właściciela z identyfikatorem ESX gracza:

```lua
Config.OwnedVehicles = {
    table = 'owned_vehicles',
    plateColumn = 'plate',
    ownerColumn = 'owner'
}
```

Jeśli Twój garaż zapisuje auta w innej tabeli lub pod innymi nazwami kolumn, zmień te trzy pola. Nie zmieniaj ich na niezaufane dane dostarczane przez klienta: trafiają do zapytania SQL jako identyfikatory. Domyślna tabela zapisu tuningu `kr_backfire_vehicles` pozostaje osobna.

## Ceny i katalog

Edytuj `Config.Frequencies`, `Config.Colors`, `Config.Sounds`, `Config.FlameSizes` i `Config.EngineAudio.price`. Każdy wariant ma `id`, opis i `price`. Serwer wylicza cenę ponownie, więc zmiana samego tekstu w NUI nie wystarczy do zmiany kosztów. Przy pierwszym zakupie doliczany jest `Config.InstallPrice`; później naliczane są ceny zmienionych płatnych wariantów. Zmiana głośności i ON/OFF jest bezpłatna.

Dostępne fabrycznie: **3** częstotliwości, **6** kolorów, **4** rozmiary, **6** odgłosów strzału i **100 pozycji** katalogu silników. Obecność pozycji w katalogu nie potwierdza jeszcze kompletności odpowiadającego jej banku audio.

### Własny kolor

Dodaj kolejny element do tabeli `Config.Colors` (z unikatowym `id`):

```lua
{
    id = 'cyan',
    label = 'Arctic Cyan',
    description = 'Jasny turkusowy płomień.',
    price = 14000,
    hex = '#00eaff',
    rgb = { 0.0, 0.92, 1.0 }
},
```

`hex` służy do wyświetlania próbki w tablecie. Wartości `rgb` sterują efektem w grze i każda powinna mieścić się w zakresie **0.0–1.0**. Wymagany jest poprawnie uruchomiony zasób `kr_backfire_fx`.

### Wielkość płomienia i launch control

- `Config.FlameSizes`: `duration`, `length`, `width`, `backfireScale` oraz `nitroScale` regulują impuls i wielkość efektu; rozmiar awaryjnego renderera jest niezależny od skali particle.
- `Config.LaunchControl.enabled`: domyślnie `true`; `maxSpeed = 1.5`, `minRpm = 0.60`, `interval = 145` i mnożniki określają mocniejszą serię przy W + Spacja.
- `Config.LiftOffSound`: dodatkowy odgłos odpuszczenia gazu, poziom głośności i zasięg.
- `Config.FlameOverlay`: teksturowany renderer awaryjny, kości wydechu, jasny rdzeń i światło.

Nie przesadzaj z czasem i rozmiarem efektu przy dużej liczbie pojazdów. Wydajność należy zmierzyć w docelowym środowisku, a nie oceniać na podstawie samego kodu.

## Efekty i dźwięk silnika

```lua
Config.EngineAudio = {
    resource = 'Audio_Pack',
    price = 24000,
    requireResourceForPurchase = true,
    loadDelay = 2500,
    retryInterval = 500
}
```

Dźwięki silnika wymagają kompletnych, poprawnych banków w uruchomionym `Audio_Pack`. Domyślnie zakup jest blokowany, jeśli zasób nie został uruchomiony. `Config.ParticleFx.resource = 'kr_backfire_fx'` wskazuje zasób zawierający unikalne słowniki `krbf_core` i `krbf_nitro`. Starszy `kr_backfire_particles` jest nieaktualny.

Hotfix v1.8.1 ogranicza ponowne przypisywanie brzmienia silnika, aby strzały nie wywoływały niepotrzebnie native audio. Zachowanie radia trzeba potwierdzić testem w grze.

## Blokady i zabezpieczenia

- `Config.BlockedVehicleClasses` i `Config.BlockedModels` wyłączają określone pojazdy; lista domyślna obejmuje m.in. jednoślady i wybrane elektryki.
- `Config.Security` zawiera cooldown zakupu / przełączania i minimalne odstępy strzałów.
- Serwer ponownie sprawdza pojazd, tablicę, kierowcę, przedmiot, własność, wybrane warianty i środki przed zatwierdzeniem zakupu.
- Synchronizacja używa `Entity(vehicle).state.kr_backfire` oraz pobliskich graczy w tym samym routing bucket.

## API dla integratorów

W pliku `client/main.lua` zarejestrowano eksport klienta:

```lua
exports['k_backfire']:openTablet()
```

W trybie przedmiotowym eksport może otrzymać dane przedmiotu z `ox_inventory`; bez argumentu próbuje otworzyć tablet bezpośrednio, ale serwer nadal sprawdza warunki dostępu. W kodzie istnieje także zdarzenie klientowe `kr_backfire:client:openTablet`. To nie jest obejście walidacji ani uprawnień.

Wewnętrzne callbacki `kr_backfire:getVehicleData`, `kr_backfire:purchase`, `kr_backfire:toggle` i `kr_backfire:getRuntimeSettings` obsługują tablet oraz logikę klient–serwer. **Nie są dokumentowanym publicznym API zakupów** — nie wywołuj ich bezpośrednio z niezweryfikowanych zasobów.

**Dalej:** [Rozwiązywanie problemów →](./troubleshooting)
