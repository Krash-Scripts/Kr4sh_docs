# KR4SH Docs

Oficjalna dokumentacja resource'ów KR4SH, zbudowana na VitePress i przygotowana pod GitHub Pages.

## Local development

```bash
npm install
npm run docs:dev
```

## Production build

```bash
npm run docs:build
npm run docs:preview
```

## GitHub Pages

Repozytorium jest przygotowane do deploymentu przez `.github/workflows/deploy.yml`.

W GitHub otwórz `Settings -> Pages` i ustaw `Build and deployment -> Source` na `GitHub Actions`.

Aktualny `base` VitePress to `/Kr4sh_docs/`, więc standardowy adres Pages będzie miał postać:

```text
https://Krash-Scripts.github.io/Kr4sh_docs/
```

Po podpięciu własnej domeny zmień `base` w `docs/.vitepress/config.ts` na `/`.
