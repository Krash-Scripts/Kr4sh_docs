---
title: KR4SH Backfire
 description: Dokumentacja systemu backfire i tabletu do tuningu pojazdów FiveM.
---

# KR4SH Backfire

<div class="kr-eyebrow">FREE RESOURCE · ESX LEGACY · v1.8.1</div>

**Konfigurowalny system backfire z tabletem do tuningu pojazdów.** Gracz może zamontować zestaw w swoim samochodzie, wybrać efekty płomieni, odgłosy strzałów i profil dźwięku silnika, a następnie zapisać ustawienia osobno dla pojazdu.

::: info Darmowy produkt
Pobranie produktu na Tebex jest bezpłatne. Ceny montażu i modyfikacji widoczne w tablecie to **waluta serwera FiveM**, którą właściciel serwera może zmienić w `config.lua`.
:::

## Co oferuje system?

| Funkcja | Szczegóły |
| --- | --- |
| Tablet NUI | Konfiguracja zestawu, podsumowanie ceny, personalizacja wyglądu urządzenia |
| Profile strzałów | 3 warianty: Subtle, Street, Race |
| Kolory płomieni | 6 predefiniowanych kolorów; możliwość dopisania własnych |
| Wielkość płomieni | 4 warianty: Compact, Street, Track, Afterburner |
| Dźwięki strzałów | 6 profili z odsłuchem w tablecie |
| Dźwięki silnika | Przeszukiwalny katalog 100 wpisów; odtwarzanie wymaga zgodnego `Audio_Pack` |
| Launch control | Mocniejsza seria przy **W + Spacja** na postoju |
| ON / OFF | Bezpłatny przełącznik z zapisem stanu pojazdu |
| Zapis | Ustawienia w MySQL według tablicy rejestracyjnej |

Zasięgi synchronizacji i audio, ceny, dostępne klasy pojazdów, konta płatnicze oraz parametry efektów są konfigurowalne. Efekty są kierowane do pobliskich graczy w tym samym routing bucket; nie deklarujemy konkretnego wyniku `resmon` dla wszystkich serwerów.

## Dokumentacja

- [Instalacja i aktualizacja](./k_backfire/installation) — trzy zasoby w jednym ZIP, zależności, SQL, przedmiot `ox_inventory` i `server.cfg`.
- [Obsługa tabletu](./k_backfire/usage) — pierwszy montaż, zmiana ustawień, ON/OFF, launch control.
- [Konfiguracja](./k_backfire/configuration) — ceny, właściciel pojazdu, płomienie, dźwięki, blokady i API.
- [Rozwiązywanie problemów](./k_backfire/troubleshooting) — tablet, zakup, płomienie, audio, radio i baza danych.
- [Changelog](./k_backfire/changelog) — historia najnowszych poprawek i status testów.
- [English documentation](./k_backfire/en) — English installation and configuration guide.

## Zawartość planowanego wydania

Finalna paczka na Tebex jest przygotowywana jako **jedno archiwum** z folderami `k_backfire`, `kr_backfire_fx` oraz `Audio_Pack`. Każdy z nich uruchamia się osobno w `server.cfg`. ESX Legacy i zależności `ox_*` pozostają zależnościami serwera, a nie częścią tego archiwum.

::: warning Przed publikacją
Archiwum deweloperskie `k_backfire` w wersji 1.8.1, na podstawie którego opracowano te strony, **nie zawiera** `kr_backfire_fx` ani `Audio_Pack`. Wydawca dołącza je do końcowego ZIP po sprawdzeniu praw do ich redystrybucji. W pliku `install/ox_inventory_item.lua` należy również poprawić przestarzały eksport `kr_backfire.openTablet` na `k_backfire.openTablet`. Pełny test finalnego zestawu wewnątrz FiveM nie został jeszcze potwierdzony.
:::

[Przejdź do instalacji →](./k_backfire/installation)
