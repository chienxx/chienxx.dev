import Script from 'next/script.js'

interface PlausibleAnalyticsProps {
  dataDomain?: string
  src?: string
}

export function PlausibleAnalytics({ dataDomain, src = 'https://collect.jxzsite.com/js/script.outbound-links.tagged-events.js' }: PlausibleAnalyticsProps) {
  if (dataDomain) {
    return <Script async defer data-domain={dataDomain} src={src} />
  }
  return null
}
