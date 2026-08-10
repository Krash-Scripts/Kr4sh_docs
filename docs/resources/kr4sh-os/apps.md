# Aplikacje KR4SH OS

KR4SH OS jest projektowany jako kompletny system telefonu, a nie pojedyncza aplikacja NUI. Poniżej znajduje się aktualny zakres modułów wraz ze stanem rozwoju znanym z projektu.

## Messages / Calls / Contacts

Bazowe funkcje komunikacji obejmują:

- wiadomości SMS,
- połączenia,
- kontakty,
- historię komunikacji powiązaną z numerem,
- powiadomienia telefonu,
- zdjęcia kontaktów z galerii lub zewnętrznego linku — funkcja pozostaje do pełnego dopracowania.

W interfejsie nadal wymagają dopracowania m.in. rozróżnienie przeczytanych wiadomości, powiadomienia przy ukrytym telefonie i zachowanie UI podczas pisania.

## Pulse

Pulse łączy funkcje social feedu i komunikacji społecznościowej. Projekt obejmuje:

- posty ze zdjęciami,
- komentarze,
- wiadomości prywatne,
- stories,
- profile,
- znajomych,
- obserwowanych oraz obserwatorów,
- avatary z galerii lub linku.

Docelowo konto Pulse jest oddzielone od samej karty SIM i ma korzystać z logowania, aby kradzież SIM nie oznaczała automatycznego przejęcia konta.

::: warning Known issue
W ostatnim stanie projektu Pulse potrafił wyświetlać komunikat o wymaganej migracji nawet po wykonaniu SQL lub na czystej paczce. Schemat migracji wymaga dalszej weryfikacji.
:::

## Lens

Lens odpowiada za aparat i galerię. Aktualna architektura korzysta z `screenshot-basic`, a projekt przewiduje integrację z zewnętrznym storage mediów.

Zakres Lens obejmuje:

- aparat uruchamiany w stylu GTA,
- galerię zdjęć,
- selfie,
- przełączanie kamery,
- zoom,
- filtry,
- wykorzystanie zdjęć w innych aplikacjach.

KR Market wymaga minimum dwóch zdjęć podczas dodawania wybranych ofert, np. pojazdu lub nieruchomości.

Znane problemy dotyczą m.in. rozciągania zdjęć przy powiększeniu, odstępów w galerii oraz widoczności modelu telefonu w kadrze.

## FREQ

FREQ jest aplikacją muzyczną KR4SH OS. Projekt jest integrowany z providerami muzycznymi oraz `xsound`.

Docelowe tryby odtwarzania:

- **SOLO** — muzykę słyszy tylko właściciel telefonu,
- **STREET** — dźwięk 3D od gracza, zasięg około 8 metrów,
- odtwarzanie w tle po schowaniu telefonu,
- współpraca z systemami audio pojazdów, w tym `k_radiocar`.

Aktualnie wyszukiwanie / odtwarzanie źródeł YouTube nadal wymaga naprawy i nie powinno być traktowane jako stabilne API.

## KR Market

Marketplace służy do publikowania ofert i wykorzystuje media z Lens. Projekt przewiduje walidację wymaganych zdjęć przed zaakceptowaniem ogłoszenia.

## KR Maps

Mapa telefonu wykorzystuje własne assety mapy i ma działać jako interaktywna mapa z przeciąganiem, zamiast statycznego podglądu.

## KR Wallet / Bank

Moduł finansowy obsługuje integrację z bankowością serwera. Docelowe ścieżki przelewów obejmują identyfikator, numer konta oraz numer telefonu.

Część integracji bankowej pozostaje do ponownej weryfikacji po zmianach w projekcie.

## Help

Help jest systemem zgłoszeń dla graczy i pracowników. Projekt zakłada:

- panel zgłoszeń dla pracowników,
- przejęcie zgłoszenia przez pracownika,
- automatyczne przejście obu stron do rozmowy,
- akcje typu połączenie i wysłanie lokalizacji.

## Autofill

KR4SH OS ma wspierać podpowiadanie kodów jednorazowych nad klawiaturą po odebraniu kodu SMS lub mailowego. Jest to odpowiednik systemowego autofill kodów, ale funkcja była nadal w trakcie implementacji — w ostatnim stanie projektu podpowiedź nie była widoczna w UI.

## Pozostałe moduły

W projekcie występują również inne aplikacje i moduły, m.in. Garage, Memo, Core/Vault oraz addonowe rozszerzenia. Ich publiczna dokumentacja będzie dodawana dopiero po weryfikacji aktualnej paczki.
