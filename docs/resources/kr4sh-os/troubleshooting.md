# Known Issues / Troubleshooting

Ta lista opisuje problemy znane z ostatniego stanu projektu. Nie każdy punkt musi występować w najnowszej paczce — po analizie aktualnego `k_phone` będziemy je oznaczać jako naprawione lub nadal aktywne.

## SIM / inventory

- numer SIM może nie pojawiać się poprawnie w `description` / metadata `ox_inventory`,
- starterowa karta SIM może nie dać się włożyć,
- customowa karta SIM może nie dać się włożyć,
- podczas aktywacji SIM występowały błędy native / `null` oraz błędy po stronie `oxmysql`.

## Pulse

- komunikat o wymaganej migracji może pojawiać się mimo wykonania SQL,
- problem występował również na czystej paczce,
- część elementów UI, m.in. akcje dodawania, wymagała dopracowania.

## Lens / Gallery

- telefon potrafi być widoczny w kadrze aparatu,
- zoom może rozciągać podgląd zdjęcia,
- odstępy pomiędzy zdjęciami w galerii są zbyt duże,
- część konfiguracji storage mediów nadal wymaga finalizacji.

## FREQ

- źródła YouTube nie są traktowane jako stabilne,
- wyszukiwanie / odtwarzanie YouTube wymaga dalszej naprawy,
- integracja audio musi zachować poprawne tryby SOLO / STREET i dźwięk 3D.

## Calls / Ringtones

- sygnał dzwonka potrafił zapętlać się bez końca,
- wybór dzwonków i ich zachowanie wymaga pełnej synchronizacji z połączeniami,
- przy połączeniu docelowo telefon ma korzystać z kompaktowego widoku zamiast blokować rozgrywkę pełnym UI.

## UI / UX

Znane problemy interfejsu obejmują:

- zbyt małą lub słabo czytelną typografię na części ekranów,
- rozmazany UI,
- input wyszukiwarki aplikacji wychodzący poza ekran,
- standardowe scrollbary przeglądarki,
- możliwość zaznaczania tekstu w miejscach, w których nie powinna być dostępna,
- otwieranie czatu FiveM przy użyciu klawisza `T` podczas pisania,
- poruszanie kamerą mimo otwartego telefonu,
- problemy części tapet z layoutem telefonu,
- brak pełnej obsługi powiadomień, gdy telefon jest schowany.

## Autofill

System podpowiadania kodów z SMS / maila nad klawiaturą był zaplanowany i implementowany, ale w ostatnim stanie projektu podpowiedź nadal nie była widoczna.

## Bank

Nie wszystkie ścieżki przelewów działały stabilnie. Do ponownej weryfikacji pozostają przelewy przez:

- ID,
- numer konta,
- numer telefonu.

## Kontakty

Zdjęcia kontaktów z galerii lub z linku wymagają pełnego spięcia z aktualnym UI oraz storage mediów.

## Kontrola postaci i kamery

Podczas korzystania z telefonu system powinien blokować niepożądane sterowanie postacią i kamerą. W ostatnim stanie projektu blokada nie była kompletna.

::: tip Zgłaszanie błędów
Przy zgłaszaniu problemu warto podać wersję `k_phone`, framework, inventory, voice, dokładny błąd konsoli oraz informację, czy problem występuje po czystej instalacji.
:::
