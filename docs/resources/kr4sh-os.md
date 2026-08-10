# KR4SH OS / k_phone

<div class="kr-eyebrow">Flagship resource</div>

KR4SH OS to kompletny system telefonu dla FiveM rozwijany jako `k_phone`. Projekt łączy fizyczny telefon i kartę SIM, komunikację, social media, aparat, muzykę, mapę, marketplace, bankowość oraz integracje z pozostałymi resource'ami serwera.

<div class="kr-meta"><span class="kr-badge live">Flagship</span><span class="kr-badge">FiveM</span><span class="kr-badge">ESX Legacy</span><span class="kr-badge">React / TS</span><span class="kr-badge">ox_inventory</span></div>

::: info Aktualny status dokumentacji
Ta dokumentacja została uzupełniona na podstawie aktualnego kontekstu projektu. Architektura i znane moduły są opisane publicznie, ale nazwy eventów, exportów, callbacków i dokładne dependency zostaną opublikowane dopiero po weryfikacji najnowszego kodu `k_phone`.
:::

## Stack

Aktualna baza projektu korzysta z:

- **ESX Legacy**,
- Lua po stronie client/server,
- **React + TypeScript + Vite** dla NUI,
- **oxmysql**,
- **ox_inventory**,
- **pma-voice**,
- `screenshot-basic` dla aparatu,
- `xsound` dla systemów audio.

Projekt jest rozwijany z myślą o większym serwerze RP i ograniczaniu zbędnych zapytań SQL przez cache runtime.

## Najważniejsze założenia

### Telefon + karta SIM

Telefon jest urządzeniem, a karta SIM przechowuje tożsamość numeru. Bez aktywnej SIM podstawowe funkcje komunikacyjne telefonu nie powinny działać.

[SIM i telefon →](/resources/kr4sh-os/sim-phone)

### Aplikacje

KR4SH OS obejmuje m.in. wiadomości, połączenia, kontakty, Pulse, Lens, FREQ, KR Market, KR Maps, KR Wallet, Help oraz moduły addonowe.

[Aplikacje →](/resources/kr4sh-os/apps)

### Integracje

Telefon współpracuje z inventory, voice, mediami, audio, bankowością i innymi systemami KR4SH.

[Integracje i wymagania →](/resources/kr4sh-os/integrations)

### Known Issues

Projekt nadal posiada aktywne obszary rozwoju — szczególnie SIM, Pulse migrations, Lens, YouTube w FREQ, autofill, bank i część zachowania UI.

[Troubleshooting →](/resources/kr4sh-os/troubleshooting)

## Architektura danych

KR4SH OS utrzymuje relacje pomiędzy graczem, identyfikatorem i numerem telefonu w runtime cache. Cache jest aktualizowany podczas wejścia/wyjścia gracza oraz przy pobieraniu danych telefonu, aby nie wykonywać tych samych zapytań SQL przy każdej akcji.

Dane komunikacyjne są projektowane wokół numeru/SIM, dzięki czemu zmiana urządzenia nie powinna oznaczać utraty tożsamości numeru.

## UX telefonu

Docelowy interfejs pozostaje własnym designem KR4SH — bez kopiowania iOS, Androida lub konkurencyjnych telefonów FiveM.

Najważniejsze założenia UX:

- wielostronicowy homescreen,
- czytelne powiadomienia,
- brak niepotrzebnych widgetów i przesadnego brandingu,
- poprawna obsługa telefonu schowanego i wyciągniętego,
- blokowanie niepożądanego sterowania postacią/kamerą podczas korzystania z NUI,
- możliwość rozwijania telefonu o kolejne aplikacje.

## Security

`k_phone` korzysta z warstwy autoryzacji KR4SH.

::: warning Public docs
Szczegóły działania zabezpieczeń nie są publikowane. Dokumentacja klienta będzie opisywać wyłącznie wymagane dependency i poprawną instalację warstwy autoryzacji.
:::

## Developer API

Publiczne API zostanie rozpisane po analizie aktualnej paczki. Nie publikujemy nazw eventów/exportów z pamięci, ponieważ dokumentacja ma odpowiadać realnemu wydaniu, a nie starszym buildom.
