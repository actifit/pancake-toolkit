import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.actifit.io",
      },
      {
        label: "Liquidity",
        href: "https://exchange.actifit.io/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    status: status.LIVE,
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Actifit',
        href: 'https://actifit.io',
      },
      {
        label: 'AFIT-Pancakeswap',
        href: 'https://pancakeswap.info/token/0x4516bb582f59befcbc945d8c2dac63ef21fba9f6',
      },
      {
        label: 'AFITX-Pancakeswap',
        href: 'https://pancakeswap.info/token/0x246d22ff6e0b90f80f2278613e8db93ff7a09b95',
      },
      {
        label: 'Coinmarketcap',
        href: 'https://coinmarketcap.com/currencies/actifit/',
      },
      {
        label: 'AFIT-Astrotools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x4516bb582f59befcbc945d8c2dac63ef21fba9f6',
      },
      {
        label: 'AFITX-Astrotools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x246d22ff6e0b90f80f2278613e8db93ff7a09b95',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/actifit',
      },
      {
        label: 'Docs',
        href: 'https://docs.actifit.io/',
  },
  {
        label: 'Blog',
        href: 'https://hive.blog/@actifit',
      },
      {
        label: 'Contact',
        href: 'info@actifit.io',
      },
      {
        label: 'BSC Scan AFIT',
        href: 'https://bscscan.com/token/0x4516bb582f59befcbc945d8c2dac63ef21fba9f6',
      },
      {
        label: 'BSC Scan AFITX',
        href: 'https://bscscan.com/token/0x246d22ff6e0b90f80f2278613e8db93ff7a09b95',
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    href: "https://t.me/actifit",
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://www.twitter.com/Actifit_fitness",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
