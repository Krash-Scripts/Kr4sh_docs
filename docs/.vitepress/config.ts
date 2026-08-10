import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'pl-PL',
  title: 'KR4SH Docs',
  description: 'Oficjalna dokumentacja skryptów i systemów KR4SH dla FiveM.',
  base: '/Kr4sh_docs/',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#090b0a' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/Kr4sh_docs/logo.svg' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'KR4SH Docs',
    nav: [
      { text: 'Start', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Skrypty', link: '/resources/' },
      { text: 'API', link: '/developers/events-exports' },
      { text: 'Pomoc', link: '/support/troubleshooting' }
    ],
    sidebar: {
      '/getting-started/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Wprowadzenie', link: '/getting-started/' },
            { text: 'Instalacja', link: '/getting-started/installation' }
          ]
        }
      ],
      '/resources/': [
        {
          text: 'Resources',
          items: [
            { text: 'Wszystkie skrypty', link: '/resources/' },
            { text: 'k_core', link: '/resources/k_core' },
            { text: 'k_hud', link: '/resources/k_hud' },
            { text: 'k_clothes', link: '/resources/k_clothes' },
            {
              text: 'KR4SH OS',
              link: '/resources/kr4sh-os',
              collapsed: false,
              items: [
                { text: 'SIM i telefon', link: '/resources/kr4sh-os/sim-phone' },
                { text: 'Aplikacje', link: '/resources/kr4sh-os/apps' },
                { text: 'Integracje', link: '/resources/kr4sh-os/integrations' },
                { text: 'Known Issues', link: '/resources/kr4sh-os/troubleshooting' }
              ]
            },
            { text: 'k_backfire', link: '/resources/k_backfire' }
          ]
        }
      ],
      '/developers/': [
        {
          text: 'Developer API',
          items: [
            { text: 'Wprowadzenie', link: '/developers/' },
            { text: 'Events & Exports', link: '/developers/events-exports' }
          ]
        }
      ],
      '/support/': [
        {
          text: 'Support',
          items: [
            { text: 'Troubleshooting', link: '/support/troubleshooting' }
          ]
        }
      ]
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Szukaj', buttonAriaLabel: 'Szukaj w dokumentacji' },
          modal: {
            noResultsText: 'Brak wyników dla',
            resetButtonTitle: 'Wyczyść wyszukiwanie',
            footer: {
              selectText: 'wybierz',
              navigateText: 'nawiguj',
              closeText: 'zamknij'
            }
          }
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Krash-Scripts' }
    ],
    lastUpdated: {
      text: 'Ostatnia aktualizacja',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    docFooter: {
      prev: 'Poprzednia strona',
      next: 'Następna strona'
    },
    outline: {
      label: 'Na tej stronie',
      level: [2, 3]
    },
    returnToTopLabel: 'Wróć na górę',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Motyw',
    lightModeSwitchTitle: 'Jasny motyw',
    darkModeSwitchTitle: 'Ciemny motyw'
  }
})
