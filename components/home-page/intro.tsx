import { Twemoji } from '~/components/ui/twemoji'

export function Intro() {
  return (
    <h1 className="text-neutral-900 dark:text-neutral-200">
      I'm <span className="font-medium">chienxx</span> - a funny and humorous back-end developer in
      <span className="hidden font-medium">China</span>
      <span className="absolute ml-1.5 inline-flex pt-[3px]">
        <Twemoji emoji="flag-china" />
      </span>
    </h1>
  )
}
