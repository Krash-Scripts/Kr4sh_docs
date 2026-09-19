---
title: Backfire — instalacja
---

# Instalacja i aktualizacja

<div class="kr-eyebrow">KR4SH BACKFIRE · v1.8.1</div>

## 1. Wymagania

- Serwer FiveM z **OneSync** i działającą bazą MySQL.
- **ESX Legacy** (`es_extended`), `ox_lib`, `ox_inventory` i `oxmysql`.
- W końcowym ZIP: `k_backfire` (kod i tablet), `kr_backfire_fx` (efekty YPT) oraz `Audio_Pack` (banki dźwięków silnika).

QBCore, Qbox i tryb standalone **nie są zaimplementowane** w tym wydaniu. Foldery `kr_backfire_fx` i `Audio_Pack` trzeba dołączyć do paczki dystrybucyjnej; sama wersja deweloperska `k_backfire` ich nie zawiera. Przed redystrybucją sprawdź uprawnienia do banków audio, zmodyfikowanych YPT i pozostałych materiałów.

## 2. Wgraj foldery

Rozpakuj **jedno** finalne archiwum do katalogu zasobów. Nazwy katalogów muszą odpowiadać nazwom w konfiguracji:

```text
resources/
├── k_backfire/
├── kr_backfire_fx/
└── Audio_Pack/
```

Nie zmieniaj nazwy folderu `k_backfire` bez dostosowania eksportu przedmiotu i wszystkich odwołań w konfiguracji. Jeśli przenosisz zasoby do folderu zbiorczego `[scripts]`, wewnętrzne nazwy trzech folderów pozostają takie same.

## 3. Baza danych

Zaimportuj `k_backfire/sql/install.sql` do **tej samej bazy**, której używa ESX. Tworzy tabelę `kr_backfire_vehicles`, w której zapisywane są m.in. tablica rejestracyjna, właściciel, stan ON/OFF, profil strzałów, kolor, dźwięk, rozmiar płomienia, profil silnika i głośność.

```sql
-- Uruchom zawartość pliku:
-- k_backfire/sql/install.sql
```

Zasób wykonuje również obsługiwaną inicjalizację schematu i migracje podczas startu. Pliki `sql/migrate_v1.2.0.sql` i `sql/migrate_v1.2.1.sql` są zapasowymi migracjami ręcznymi, **nie uruchamiaj ich bez potrzeby**. `sql/migrate_bbv_antilag.sql` to oddzielny, opcjonalny import ze starego `bbv-antilag` — dopiero po wykonaniu `install.sql` i po zrobieniu kopii bazy.

## 4. Zarejestruj tablet w ox_inventory

Otwórz `ox_inventory/data/items.lua` i wstaw poniższy wpis **wewnątrz istniejącej tabeli przedmiotów**. Nie wklejaj dodatkowego `return { ... }` z pliku przykładowego.

```lua
['backfire_tablet'] = {
    label = 'Backfire Tablet',
    weight = 650,
    stack = false,
    close = true,
    consume = 0,
    description = 'Tablet do konfiguracji backfire.',
    client = {
        export = 'k_backfire.openTablet'
    }
},
```

::: warning Ważna poprawka przed spakowaniem produktu
W archiwum deweloperskim v1.8.1 plik `k_backfire/install/ox_inventory_item.lua` nadal wskazuje **`kr_backfire.openTablet`**. To błędna nazwa przy folderze `k_backfire`. Zmień ją również w pliku dołączanym klientom na `k_backfire.openTablet`, aby nikt nie skopiował wadliwego przykładu.
:::

Domyślna nazwa przedmiotu to `Config.ItemName = 'backfire_tablet'`. Zrestartuj `ox_inventory` / serwer, jeśli nowy item nie pojawia się po edycji, a następnie nadaj go graczowi przy użyciu narzędzi administracyjnych serwera lub dodaj do sklepu.

## 5. Kolejność w server.cfg

```cfg
ensure oxmysql
ensure ox_lib
ensure es_extended
ensure ox_inventory
ensure Audio_Pack
ensure kr_backfire_fx
ensure k_backfire
```

Jeśli pozostałe zależności są już uruchamiane wcześniej w konfiguracji serwera, nie musisz duplikować ich poleceń `ensure`; zachowaj jednak kolejność `Audio_Pack` i `kr_backfire_fx` przed `k_backfire`.

## 6. Test instalacji

1. Wejdź jako kierowca do **własnego, obsługiwanego samochodu** i zatrzymaj pojazd.
2. Użyj `backfire_tablet` i sprawdź, czy otwiera się interfejs oraz pokazuje dane pojazdu.
3. Kup instalację, przetestuj strzały przy odpuszczaniu gazu i mocniejszy efekt na postoju przy **W + Spacja**.
4. Wyłącz system w tablecie, zamknij UI, otwórz ponownie i sprawdź zapis stanu OFF.
5. Sprawdź dźwięk silnika, ręczną zmianę stacji radia i radio OFF podczas kolejnych strzałów.
6. Sprawdź zachowanie dla pobliskiego gracza oraz po restarcie `k_backfire` i całego serwera.

Zobacz [pełną checklistę problemów](./troubleshooting). Nie oznaczaj zestawu jako przetestowanego w grze wyłącznie na podstawie testów automatycznych Lua/UI.

## Aktualizacja z wcześniejszej wersji

- Zrób kopię `config.lua`, zmian lokalnych i tabeli `kr_backfire_vehicles`.
- Usuń stare foldery `kr_backfire_particles` oraz konfliktujące, przestarzałe assety YPT. Zastąp je aktualnym `kr_backfire_fx`.
- Podmień `k_backfire`, przywróć własne ustawienia konfiguracyjne i zweryfikuj poprawność eksportu przedmiotu.
- Wykonaj `restart k_backfire` albo zrestartuj serwer. **Hotfix 1.8.1 nie wymaga dodatkowej migracji SQL.**

**Następnie:** [Obsługa tabletu →](./usage)
