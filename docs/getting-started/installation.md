# Instalacja resource'ów

Poniższy schemat jest wspólną bazą. Każdy skrypt może mieć dodatkowe kroki opisane na swojej stronie.

## 1. Zależności

Przed uruchomieniem sprawdź sekcję **Requirements** wybranego resource'u. Nie instaluj zależności „na ślepo” — konkretne wymagania będą podane per skrypt.

## 2. Pliki

Umieść resource w odpowiednim katalogu serwera, np.:

```text
resources/
└── [kr4sh]/
    └── nazwa_resource/
```

## 3. Baza danych

Jeśli resource zawiera migrację SQL, wykonaj ją przed pierwszym startem. Strona danego skryptu będzie wskazywać wymagane tabele i migracje.

## 4. server.cfg

Uruchamiaj zależności przed resource'em:

```cfg
ensure dependency_name
ensure resource_name
```

::: warning
Nie kopiuj nazw zależności z przykładów do produkcji. Używaj listy podanej w dokumentacji konkretnego skryptu.
:::

## 5. Weryfikacja

Po restarcie sprawdź konsolę serwera i klienta. Resource nie powinien generować błędów przy starcie, a wymagane migracje powinny być zakończone.
