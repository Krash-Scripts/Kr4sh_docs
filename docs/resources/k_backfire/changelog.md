---
title: Backfire — changelog
---

# Changelog

<div class="kr-eyebrow">KR4SH BACKFIRE · RELEASE NOTES</div>

## 1.8.1 — Radio hotfix

- Usunięto ponowne przypisywanie dźwięku silnika z obsługi każdego strzału.
- Dodano cache użytego dźwięku dla pojazdu, żeby ograniczyć niepotrzebne wywołania natywnego audio.
- Przy rzeczywistej zmianie profilu dźwięku mechanizm próbuje zachować lokalną stację radia, również stan OFF.
- Zachowano wcześniejszą poprawkę tabletu i przełącznika ON/OFF.
- **Bez dodatkowej migracji SQL.**

::: warning Status testów
W paczce deweloperskiej odnotowano 11/11 testów Lua na mockach oraz 8/8 testów interfejsu. Nie potwierdzają one jeszcze działania na docelowym serwerze FiveM ani kompletności końcowego ZIP z `k_backfire`, `kr_backfire_fx` i `Audio_Pack`. Przed publikacją wykonaj [testy wdrożeniowe](./troubleshooting#scenariusz-testu-przed-publikacja).
:::

## Tablet v2.1 — przełącznik ON/OFF

- Poprawiono wartość wysyłaną z NUI do Lua przy zmianie stanu.
- Dodano obsługę potwierdzenia zapisu i błędów serwera.
- Kolejny zakup nie powinien samoczynnie włączać wcześniej wyłączonego systemu.
- Zaplanowana seria strzałów nie powinna trwać po wyłączeniu.

## Tablet UI — odświeżenie interfejsu

- Wprowadzono ramę tabletu, pasek systemowy i uproszczoną nawigację.
- Uporządkowano informacje o samochodzie, podsumowanie zmian i przyciski.
- Dodano ustawienia akcentu i tła interfejsu oraz dostęp do przełącznika również na niższych rozdzielczościach.
- Zachowano wyszukiwarkę katalogu silników i dotychczasowe callbacki NUI.

## Starsze wersje — wybrane zmiany

| Wersja | Najważniejsza zmiana |
| --- | --- |
| 1.5.1 | Unikalne nazwy słowników particle `krbf_core` i `krbf_nitro` |
| 1.5.0 | Zmienione krzywe kolorów YPT, tintowanie efektów oraz zasób `kr_backfire_fx` |
| 1.3.0 | Osobne skalowanie płomieni przy kościach wydechu |
| 1.2.1 | Regulacja i zapis głośności strzałów |
| 1.2.0 | Cztery wielkości płomienia, mocniejszy tryb W + Spacja i katalog profili silników |
| 1.1.0 | Backfire także przy przegazowaniu na postoju |

**Dokumentacja bazuje na kodzie `k_backfire` v1.8.1.** Opis finalnego pakietu zakłada dołączenie dwóch pozostałych zasobów przez wydawcę.

[Powrót do Backfire](../k_backfire)
