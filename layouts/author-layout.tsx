import type { Author } from 'contentlayer/generated'
import type { ReactNode } from 'react'
import { SocialAccounts } from '~/components/author/social-accounts'
import { ProfileCard } from '~/components/cards/profile'
import { Container } from '~/components/ui/container'
import { Image } from '~/components/ui/image'
import { PageHeader } from '~/components/ui/page-header'
import { Twemoji } from '~/components/ui/twemoji'
import { SITE_METADATA } from '~/data/site-metadata'

interface Props {
  children?: ReactNode
  content: Omit<Author, '_id' | '_raw' | 'body'>
}

export function AuthorLayout({ children }: Props) {
  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="About"
        description="A bit of background on who I am, what I do, and why I started this blog. Nothing too serious, just a little intro to the person typing away behind the scenes."
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="py-8 md:grid md:grid-cols-3">
        <div className="pr-4">
          <ProfileCard />
        </div>
        <div className="md:col-span-2 md:pl-12 xl:pl-16">
          <div className="prose prose-lg dark:prose-invert">
            <div>
              <h2 className="mt-0">
                Hi there <Twemoji emoji="waving-hand" />
              </h2>
              <p>
                I'm <strong>Tschën</strong>, a backend engineer from <strong>Nanjing</strong>,
                mainly focused on <strong>Java web</strong> development, with occasional big data
                work . The technology stack involved includes <strong>Spring Cloud</strong>,{' '}
                <strong>RabbitMQ</strong>, <strong>Elasticsearch</strong>,{' '}
                <strong>ClickHouse</strong>, <strong>Filebeat</strong>, <strong>Mysql</strong>,
                <strong>Doris</strong>,<strong>Redis</strong>,<strong>Flink</strong>{' '}
                <strong>Kafka</strong> and etc.
              </p>

              <p>
                This blog template project uses popular front-end technologies like{' '}
                <strong>Next.js</strong>,<strong>TypeScript</strong>,<strong>Tailwind CSS</strong>,
                <strong>React</strong>. I’m learning front-end skills step by step through it,
                aiming to become a full-stack engineer. I’ll also share technical insights and daily
                life in my blog posts.
              </p>

              <p>
                Badminton is my hobby, I have used rackets including{' '}
                <strong>ASTROX 77 PRO(4ug5)</strong>, <strong>ASTROX 99(4ug5)</strong>,{' '}
                <strong>ARCSABER 11(3ug5)</strong>,<strong>HALBERTEC 8000(4ug5)</strong>,{' '}
                <strong>THRUSTER RYUGA(3ug5)</strong>. In the past, I like to offensive smash, but
                after a few injuries, I have been honest, and now I play to maintain my health.{' '}
                <strong>
                  Friendly reminder: warm up before exercise, stretch after exercise, healthy
                  exercise!
                </strong>{' '}
                If you are also a badminton enthusiast, welcome to exchange.
              </p>

              <p>
                I would greatly appreciate any comments and thoughts on my posts{' '}
                <Twemoji emoji="clinking-beer-mugs" />.
              </p>
            </div>
            <div>
              <h2>Tech stack</h2>
              <p>
                This blog is hosted on{' '}
                <a href="https://vercel.com/" target="_blank">
                  Vercel
                </a>
                , built with{' '}
                <a href="https://nextjs.org/" target="_blank">
                  Next.js
                </a>{' '}
                and{' '}
                <a href="https://tailwindcss.com/" target="_blank">
                  Tailwind CSS
                </a>{' '}
                using <strong>Tailwind Nextjs Starter Blog</strong>.
              </p>
              <p>
                A huge thanks to{' '}
                <a href="https://x.com/timlrxx" target="_blank">
                  Timothy Lin
                </a>{' '}
                for the minimal, lightweight, and super easy-to-customize blog starter,and{' '}
                <a href="https://x.com/hta218_" target="_blank">
                  Leo Huynh
                </a>{' '}
                for refactoring the code and optimising the ui for the project.
              </p>
            </div>
            <div>
              <h2>Assets</h2>
              <p>
                Most of the images in my blog are from{' '}
                <a href="https://unsplash.com/" target="_blank">
                  Unsplash
                </a>
                , gifs from{' '}
                <a href="https://giphy.com/" target="_blank">
                  GIPHY
                </a>
                , and illustrations are from{' '}
                <a href="https://storyset.com/" target="_blank">
                  Storyset
                </a>
                .
              </p>
              <p>
                Thanks for the free resources <Twemoji emoji="folded-hands" />.
              </p>
            </div>
            <div>
              <h2>Contact</h2>
              <p>
                Reach out to me at{' '}
                <a href={`mailto:${SITE_METADATA.email}`}>{SITE_METADATA.email}</a> or find me on
                social media:
              </p>
              <SocialAccounts />
            </div>
            <div>
              <h2>Support</h2>
              <p>If you appreciate my work, consider supporting me:</p>
              <div className="flex flex-col gap-4">
                <a
                  href={SITE_METADATA.support.buyMeACoffee}
                  target="_blank"
                  className="[&_.image-container]:mx-0"
                >
                  <Image
                    src="/static/images/bmc-button.png"
                    alt="Buy Me A Coffee"
                    width={213.7}
                    height={60}
                    style={{ height: 60 }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
