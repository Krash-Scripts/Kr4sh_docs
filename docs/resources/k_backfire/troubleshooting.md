---
title: Backfire — rozwiązywanie problemów
---

# Rozwiązywanie problemów

<div class="kr-eyebrow">SUPPORT · v1.8.1</div>

Zacznij od upewnienia się, że wszystkie trzy zasoby znajdują się w finalnej paczce i uruchamiają się w odpowiedniej kolejności: `Audio_Pack`, `kr_backfire_fx`, `k_backfire`. Sprawdź konsolę serwera, konsolę **F8** klienta i błędy NUI.

## Typowe problemy

| Objaw | Co sprawdzić |
| --- | --- |
| Tablet nie reaguje na użycie przedmiotu | Wpis w `ox_inventory/data/items.lua`, przedmiot `backfire_tablet`, folder `k_backfire` i eksport `k_backfire.openTablet`. Nie kopiuj błędnego `kr_backfire.openTablet` z niepoprawionego pliku instalacyjnego v1.8.1. |
| Tablet nie otwiera się w pojeździe | Siedzenie kierowcy, obsługiwaną klasę/model, zatrzymanie auta, własność w bazie, OneSync i obecność przedmiotu. |
| „Możesz modyfikować wyłącznie swój pojazd” | Tabela i kolumny `Config.OwnedVehicles`, tablica rejestracyjna (trim / wielkie litery) oraz identyfikator ESX właściciela. |
| Nie można kupić / brakuje pieniędzy | `Config.PaymentAccount`, ceny i środki; sprawdź też, czy `Audio_Pack` ma stan `started` (domyślnie wymagany przy zakupie). |
| Brak dźwięku silnika lub silnik milczy | Kompletność banków wybranego profilu w `Audio_Pack`, zgodność identyfikatora z `engine_sounds.lua`, kolejność startu oraz F8. Sam wpis katalogowy nie gwarantuje, że pliki audio istnieją. |
| Brak płomieni lub niewłaściwy kolor | `kr_backfire_fx`, poprawne słowniki `krbf_core` / `krbf_nitro`, konflikty ze starymi YPT i komunikaty o ładowaniu. Usuń stare `kr_backfire_particles`. |
| Nie słychać strzałów | Obecność `web/sounds/1.ogg`–`6.ogg` i `lift_off.ogg`, ustawioną głośność, `Config.AudioDistance` oraz zasięg od auta. |
| Brak strzałów podczas jazdy | Zamontowany zestaw, stan ON, silnik, fotel kierowcy, profil częstotliwości, odpowiednie obroty i odpuszczenie gazu. |
| Nie działa W + Spacja | `Config.LaunchControl.enabled`, małą prędkość pojazdu, minimalne RPM, standardowe mapowanie klawiszy i ręczny hamulec. |
| Backfire sam się włącza po zakupie | Sprawdź, czy używasz poprawki ON/OFF z tablet v2.1 / gałęzi skryptu v1.8.1. Aktualizacja opcji powinna zachowywać istniejące `enabled`. |
| Przełącznik pokazuje zły stan | Sprawdź callback `kr_backfire:toggle`, połączenie `oxmysql`, zapis `enabled` w tabeli i logi błędów. Interfejs nie powinien potwierdzać nieudanego zapisu. |
| Radio przestawia się podczas strzałów | Sprawdź `client/main.lua` z hotfixa **1.8.1**. Zobacz, czy inny zasób nie wymusza audio lub stacji radia. Zweryfikuj także ręczną zmianę stacji i stan OFF w grze. |
| „Baza Backfire nie jest gotowa” | Połączenie `oxmysql`, poprawność danych SQL, tabela `kr_backfire_vehicles`, błędy migracji w konsoli. |
| Tablet wygląda źle w 1280×720 | Zaktualizowane `web/index.html`, `web/style.css` i `web/app.js`; sprawdź skalę NUI i konflikty z cudzymi stylami. |

## Diagnostyka bazy

W bazie ESX sprawdź, czy istnieje tabela `kr_backfire_vehicles` i czy rekord auta ma poprawną tablicę oraz `enabled` = `0` lub `1`. Przed ręczną naprawą kolumn wykonaj backup. `sql/install.sql` nadaje się do nowej instalacji; aktualizacja 1.8.1 nie wymaga osobnej migracji.

Jeśli pojazdy korzystają z własnego systemu garaży, upewnij się, że jego kolumny `plate` / `owner` zgadzają się z `Config.OwnedVehicles`. Uwaga: zapis tuningu jest oparty na **tablicy rejestracyjnej** — nie używaj powtarzających się numerów dla wielu pojazdów.

## Scenariusz testu przed publikacją

- [ ] Czysty start trzech zasobów po wymaganych frameworkach, bez błędów konsoli.
- [ ] Otworzenie tabletu przedmiotem i poprawne sprawdzenie kierowcy / właściciela.
- [ ] Montaż, płatność, zmiana wszystkich kategorii i zapis po restarcie.
- [ ] ON → OFF → ponowny zakup: samochód pozostaje wyłączony.
- [ ] Zwykłe strzały i W + Spacja działają dla kierowcy i pobliskiego obserwatora.
- [ ] Radio nie zmienia stacji po strzałach ani po zmianie profilu; przetestuj również radio OFF.
- [ ] Każdy wybrany bank silnika jest rzeczywiście dostępny w dołączonym `Audio_Pack`.
- [ ] Tablet jest czytelny w 1920×1080 i 1280×720.
- [ ] Prawa do redystrybucji audio, YPT i OGG oraz wymagane atrybucje są sprawdzone.

Wcześniejsze testy deweloperskie obejmowały mockowane Lua i logikę UI; **nie stanowią potwierdzenia, że finalny ZIP z trzema zasobami został przetestowany w FiveM**.

## Jak zgłosić błąd

Podaj wersję `k_backfire`, wersje ESX / ox_*, model pojazdu, kroki odtworzenia oraz logi serwera i F8. Przy problemach wizualnych dołącz nagranie lub zrzut ekranu. Nie publikuj haseł do bazy, tokenów ani klucza licencyjnego serwera.

[Wróć do dokumentacji Backfire](../k_backfire) · [Instalacja](./installation)
