import { clsx } from 'clsx'
import { Github, Mail } from 'lucide-react'
import { SITE_METADATA } from '~/data/site-metadata'
import X from '~/icons/x.svg'

export function SocialAccounts({ className }: { className?: string }) {
  return (
    <div className={clsx('flex items-center space-x-4', className)}>
      <a
        href={SITE_METADATA.github}
        target="_blank"
        plausible-event-name="contact-github"
        className="text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
        rel="noopener noreferrer"
      >
        <span className="sr-only">Github</span>
        <Github strokeWidth={1.5} />
      </a>
      <a
        href={SITE_METADATA.x}
        target="_blank"
        plausible-event-name="contact-twitter"
        className="text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
        rel="noopener noreferrer"
      >
        <span className="sr-only">X</span>
        <X className="h-5 w-5" fill="#fff" viewBox="0 0 1200 1227" />
      </a>

      <a
        href={`mailto:${SITE_METADATA.email}`}
        target="_self"
        plausible-event-name="contact-mail"
        className="text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
        rel="noopener noreferrer"
      >
        <span className="sr-only">Mail</span>
        <Mail strokeWidth={1.5} />
      </a>
    </div>
  )
}
