import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
  ShareButtonConfig
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Fuwari',
  subtitle: 'Demo Site',
  lang: 'en',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 250,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center', // Equivalent to object-position, defaults center
    credit: {
      enable: false,         // Display the credit text of the banner image
      text: '',              // Credit text to be displayed
      url: ''                // (Optional) URL link to the original artwork or artist's page
    }
  },
  favicon: [    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ],
  googleAnalytics: {
    enabled: true, // Whether to use Google Analytics
    trackingId: import.meta.env.VITE_GOOGLE_ANALYTICS_ID || '', // Get the tracking ID from the environment variable
  }
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/h-nakashima/fuwa-fuwari',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/demo-avatar.png',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'Lorem Ipsum',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',       // Visit https://icones.js.org/ for icon codes
                                        // You will need to install the corresponding icon set if it's not already included
                                        // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://twitter.com',
    },
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: 'https://store.steampowered.com',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/h-nakashima/fuwa-fuwari',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}

export const shareButtonsConfig: ShareButtonConfig[] = [
  {
    name: 'Hatena',
    icon: 'simple-icons:hatenabookmark',
    url: (encodedUrl) => `//b.hatena.ne.jp/entry/${encodedUrl}`,
    openInNewWindow: false,
  },
  {
    name: 'Twitter',
    icon: 'fa6-brands:twitter',
    url: (encodedUrl, encodedTitle) => `//twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    openInNewWindow: true,
  },
  {
    name: 'Facebook',
    icon: 'fa6-brands:facebook',
    url: (encodedUrl, encodedTitle) => `//www.facebook.com/sharer/sharer.php?u=${encodedUrl}&t=${encodedTitle}`,
    openInNewWindow: true,
  },
  {
    name: 'Pocket',
    icon: 'fa6-brands:get-pocket',
    url: (encodedUrl) => `//getpocket.com/edit?url=${encodedUrl}`,
    openInNewWindow: true,
  },
  {
    name: 'Line',
    icon: 'fa6-brands:line',
    url: (encodedUrl) => `https://line.me/R/msg/text/?${encodedUrl}`,
    openInNewWindow: true,
  },
];
