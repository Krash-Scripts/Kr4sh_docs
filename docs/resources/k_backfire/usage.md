---
title: Backfire — obsługa tabletu
---

# Obsługa tabletu

<div class="kr-eyebrow">INSTRUKCJA DLA GRACZA</div>

## Otwieranie tabletu

Usiądź na miejscu kierowcy obsługiwanego samochodu, zatrzymaj go i użyj przedmiotu `backfire_tablet` z ekwipunku. Domyślnie konfiguracja wymaga, aby samochód był przypisany do Ciebie w `owned_vehicles`; administrator może zmienić te zasady.

Jeżeli nie masz przedmiotu, jedziesz za szybko, siedzisz na miejscu pasażera lub samochód jest zablokowany w konfiguracji, tablet może odmówić otwarcia. Komunikaty błędów są wyświetlane przez `ox_lib`.

## Pierwszy montaż

1. Otwórz tablet w zatrzymanym samochodzie.
2. Wybierz częstotliwość, kolor, dźwięk strzału, rozmiar płomienia i profil silnika.
3. Opcjonalnie dopasuj głośność i wygląd interfejsu.
4. Sprawdź końcową cenę, a następnie zatwierdź zakup. Pierwszy zakup obejmuje bazowy koszt montażu i wybrane, płatne opcje.
5. Opuść tablet i przetestuj działanie podczas jazdy.

Pobranie skryptu z Tebex jest **darmowe**, ale właściciel serwera może pobierać za montaż pieniądze **w grze**. Domyślne konto płatnicze to bank.

## Sekcje konfiguracji

| Sekcja | Co zmienia |
| --- | --- |
| Częstotliwość | Charakter i intensywność serii: Subtle, Street lub Race |
| Kolor | Barwę płomienia; sześć wariantów domyślnych |
| Dźwięk | Jeden z sześciu odgłosów strzału; można odsłuchać przed wyborem |
| Skala | Cztery rozmiary płomienia, osobno skalowane dla backfire i launch control |
| Dźwięk silnika | Wybór i wyszukiwanie spośród 100 wpisów katalogu `Audio_Pack` |
| Głośność | Regulacja głośności strzałów zapisywana dla auta |
| Wygląd | Akcent, tło i animacje samego interfejsu tabletu |

Zmiana wyglądu tabletu **nie zmienia koloru płomienia** ani globalnego motywu HUD. Dostępność faktycznego brzmienia silnika zależy od kompletności banków w dołączonym `Audio_Pack`.

## Późniejsze modyfikacje

Wróć do tabletu w tym samym samochodzie. Przy kolejnej konfiguracji serwer nalicza opłaty za zmienione elementy, a nie za ponowny montaż całości. Sama regulacja głośności jest bezpłatna.

Ustawienia są przechowywane w bazie dla tablicy rejestracyjnej. Zachowaj unikalność tablic na serwerze; przy duplikatach dwa samochody mogą odwoływać się do tego samego rekordu.

## Włączanie i wyłączanie backfire

Użyj przełącznika **ON/OFF** w tablecie. Operacja nic nie kosztuje; stan zapisuje się w SQL. Po wyłączeniu skrypt nie powinien kontynuować zaplanowanej serii strzałów, a zakup kolejnych modyfikacji nie powinien samoczynnie zmieniać OFF na ON. Jeśli serwer odrzuci operację, interfejs powinien wyświetlić rzeczywisty stan zamiast potwierdzać niezapisany wybór.

Jeżeli przełącznik nie działa, sprawdź wersję kodu i logi według [instrukcji rozwiązywania problemów](./troubleshooting).

## Strzały podczas jazdy i launch control

- **Normalny backfire:** osiągnij odpowiednie obroty silnika i puść gaz. Parametry progu RPM, szansy i odstępów zależą od wybranego profilu. Działa również podczas przegazowania na postoju.
- **Launch control:** przy niemal zatrzymanym samochodzie, uruchomionym silniku i odpowiednich obrotach przytrzymaj **W + Spacja** (standardowe klawisze). Powstaje dłuższy efekt i intensywniejsza seria; skrypt nie dodaje pojazdowi mocy natywnego nitro.

Domyślny tryb launch control ma własną sekcję `Config.LaunchControl` i można go wyłączyć na serwerze. Nie każda konfiguracja klawiszy gracza musi odpowiadać standardowym W + Spacja.

## Zamykanie tabletu

Kliknij przycisk zamknięcia lub użyj **Esc**. Jeśli po zamknięciu kursor pozostaje na ekranie, sprawdź konflikty z innymi zasobami NUI.

**Dla administratora:** [Konfiguracja i integracje →](./configuration)
