# SIM i telefon

KR4SH OS traktuje telefon i kartę SIM jako dwa osobne elementy. Telefon jest urządzeniem, natomiast karta SIM odpowiada za tożsamość numeru i ciągłość danych użytkownika.

## Wymagane itemy

Aktualna baza projektu zakłada co najmniej:

- `phone` — fizyczny telefon,
- `sim_card` — fizyczna karta SIM obsługiwana przez inventory.

::: warning Telefon bez SIM
Telefon bez aktywnej karty SIM nie powinien udostępniać podstawowych funkcji komunikacyjnych. Docelowo urządzenie bez SIM pozostaje praktycznie bezużyteczne do wiadomości i połączeń.
:::

## Tożsamość SIM

Karta SIM posiada własny identyfikator (`sim_uid`) oraz powiązany numer telefonu. Numer powinien być widoczny w metadata / description itemu w `ox_inventory`, dzięki czemu gracz może rozpoznać kartę jeszcze przed jej użyciem.

Dane komunikacyjne są wiązane z numerem/SIM, a nie wyłącznie z samym urządzeniem. Pozwala to zachować tożsamość numeru po przełożeniu karty do innego telefonu.

## Wkładanie karty

SIM ma działać jak używalny item z inventory — użytkownik używa karty, a system przypisuje ją do aktualnego telefonu.

Aktualny projekt przewiduje również startery i możliwość tworzenia niestandardowych numerów przez administrację.

## Znane problemy

Na ostatnim zapisanym stanie projektu występowały problemy z:

- wkładaniem starterowych kart SIM,
- wkładaniem customowych kart SIM,
- poprawnym wyświetlaniem numeru w `description` / metadata itemu,
- błędem native / indeksem `null` podczas próby użycia niektórych kart,
- błędami po stronie `oxmysql` związanymi z procesem aktywacji SIM.

::: info Status
Ta sekcja opisuje aktualną architekturę projektu i znane problemy. Dokładne nazwy eventów oraz struktura metadata zostaną opublikowane dopiero po weryfikacji najnowszego kodu `k_phone`.
:::
