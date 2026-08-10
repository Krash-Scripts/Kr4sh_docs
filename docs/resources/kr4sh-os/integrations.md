# Integracje i wymagania

Ta sekcja opisuje aktualny stos technologiczny i integracje znane z projektu `k_phone`. Dokładne dependency z `fxmanifest.lua` zostaną dopięte po analizie najnowszej paczki.

## Framework

KR4SH OS jest rozwijany przede wszystkim dla:

- **FiveM**,
- **ESX Legacy**,
- Lua po stronie client/server,
- NUI opartego o **React + TypeScript + Vite**,
- **oxmysql** do warstwy danych.

## Inventory

Główna integracja inventory to `ox_inventory`.

Telefon i SIM są fizycznymi itemami, a karta SIM korzysta z metadata do identyfikacji numeru i `sim_uid`.

System musi poprawnie reagować na:

- użycie telefonu,
- użycie karty SIM,
- zmianę / przełożenie SIM,
- brak karty,
- synchronizację numeru z inventory i bazą.

## Voice

Projekt współpracuje z `pma-voice` dla funkcji związanych z komunikacją głosową i połączeniami.

## Media

Lens korzysta z `screenshot-basic` do wykonywania zdjęć. Projekt przewiduje zewnętrzny storage mediów — w przeszłości testowana była integracja z Fivemanage Media API.

Przed wdrożeniem produkcyjnym należy zweryfikować aktualny provider storage oraz limity uploadu.

## Audio

FREQ i integracje audio wykorzystują `xsound` do lokalnego oraz przestrzennego odtwarzania dźwięku.

Projekt zakłada również współpracę z `k_radiocar`, aby audio telefonu mogło być spójne z systemem muzyki w pojeździe.

## Bank

KR Wallet / moduł bankowy jest integrowany z bankowością serwera. W projekcie występowała integracja z `p_banking` oraz obsługa numerów kont i numerów telefonu.

Dokładny zestaw exportów i callbacków wymaga ponownej weryfikacji z aktualnym kodem banku i telefonu.

## Runtime cache

Po stronie serwera KR4SH OS wykorzystuje cache runtime dla najczęściej używanych relacji:

- source ↔ identifier,
- identifier ↔ numer telefonu,
- numer telefonu ↔ aktywny gracz.

Cache jest odświeżany podczas ładowania i opuszczania serwera oraz przy pobieraniu danych telefonu. Ma to ograniczyć zbędne zapytania SQL przy większej liczbie graczy.

## Autoryzacja

KR4SH OS korzysta z warstwy autoryzacji KR4SH.

::: warning Security
Publiczna dokumentacja celowo nie opisuje wewnętrznej logiki zabezpieczeń ani mechanizmów walidacji. Integrator powinien jedynie traktować warstwę `kr4sh_auth` jako wymagany element instalacji zgodnie z wydaniem produktu.
:::

## Integracje addonowe

Projekt telefonu posiada kierunek rozwoju pod moduły addonowe, tak aby dodatkowe aplikacje lub narzędzia mogły być dostarczane bez przebudowy core telefonu.

Publiczny SDK / kontrakt dla addonów zostanie opisany po ustabilizowaniu API.
