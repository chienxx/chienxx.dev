import { SITE_METADATA } from './site-metadata'

export const HEADER_NAV_LINKS = [
  { href: '/blog', title: 'Blog', emoji: 'writing-hand' },
  { href: '/snippets', title: 'Snippets', emoji: 'dna' },
  { href: '/tools', title: 'Tools', emoji: 'man-technologist' },
  { href: '/about', title: 'About', emoji: 'billed-cap' },
]

export const MORE_NAV_LINKS = [
  { href: '/movies', title: 'Movies', emoji: 'film-frames' },
  { href: '/tags', title: 'Tags', emoji: 'label' },
]

export const FOOTER_NAV_LINKS = [
  { href: '/blog', title: 'Blog' },
  { href: '/snippets', title: 'Snippets' },
  { href: '/tools', title: 'Tools' },
  { href: '/tags', title: 'Tags' },
  { href: '/feed.xml', title: 'RSS Feed' },
]

export const FOOTER_PERSONAL_STUFF = [
  { href: '/about', title: 'About' },
  { href: '/tools', title: 'Tools' },
  { href: '/movies', title: 'Movies' },
  { href: SITE_METADATA.music, title: 'Music' },
  { href: SITE_METADATA.analytics.plausibleAnalytics.url, title: 'Analytics' },
]
