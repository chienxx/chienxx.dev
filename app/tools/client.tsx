'use client'
import { useState } from 'react'
import { TOOLS } from '~/data/tools'
import InteractiveCard from '~/components/cards/tool/InteractiveCard'
import { Container } from '~/components/ui/container'
import { PageHeader } from '~/components/ui/page-header'

const LabelSwitcher = () => {
  const [activeTab, setActiveTab] = useState('iOS')

  const filteredTools = TOOLS.filter((tool) => tool.category === activeTab)

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Tools
        </h1>
        <p className="mt-4 text-lg leading-7 text-gray-500 dark:text-gray-400">
          Some tools I use on a daily basis.
        </p>
      </div>
      <div className="mb-8 flex justify-center space-x-12">
        <button
          className={`flex items-center rounded-lg px-4 py-2 font-semibold transition-colors duration-300 ${
            activeTab === 'iOS'
              ? 'bg-green-500 text-white'
              : 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100'
          }`}
          onClick={() => setActiveTab('iOS')}
        >
          <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 60 1024 1024">
            <path d="M769.597 525.909c1.291 132.878 125.137 177.014 126.564 177.674-1.125 2.992-19.845 62.994-65.354 124.945-39.361 53.498-80.094 106.773-144.379 107.844-63.214 1.125-83.525-34.886-155.797-34.886-72.244 0-94.806 33.815-154.589 36.012-62.005 2.196-109.273-57.751-148.962-111.11-81.083-109.079-143.006-308.218-59.782-442.604 41.254-66.754 115.063-109.024 195.212-110.15 60.934-1.017 118.494 38.263 155.686 38.263 37.302 0 107.213-47.184 180.665-40.267 30.77 1.18 117.149 11.527 172.567 86.985-4.364 2.662-103.068 56.022-101.833 167.297l0 0zM510.786 261.611c-7.164-50.478 19.543-102.959 50.066-135.923 34.063-37.137 91.54-64.751 138.997-66.508 6.066 51.438-16.194 103.068-49.105 140.234-32.965 37.109-87.01 66.013-139.958 62.197l0 0z" />
          </svg>
          iOS
        </button>
        <button
          className={`flex items-center rounded-lg px-4 py-2 font-semibold transition-colors duration-300 ${
            activeTab === 'macOS'
              ? 'bg-green-500 text-white'
              : 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100'
          }`}
          onClick={() => setActiveTab('macOS')}
        >
          <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 1024 1024">
            <path
              d="M896.35 138.667c41.231 0 74.65 33.432 74.65 74.666v597.334c0 41.235-33.418 74.666-74.65 74.666h-767.7c-41.231 0-74.65-33.431-74.65-74.666V213.333c0-41.234 33.42-74.666 74.65-74.666z m-342.229 64h-69.862a1157.34 1157.34 0 0 0-24.655 63.488C441.09 318.35 427.159 369.7 419.69 418.268c-6.705 43.6-7.974 83.678-2.846 119.59l0.071 0.47c2.45 15.528 15.842 27.005 31.608 27.005h98.011l5.574 83.64a460.342 460.342 0 0 1-39.608 1.694c-59.302 0-112.955-11.179-159.983-29.761-16.315-6.447-30.579-13.315-42.65-20.117l-0.72-0.408-1.403-0.802-1.353-0.784-0.658-0.386-1.278-0.758-0.62-0.371-1.202-0.73-1.152-0.709-0.557-0.347-1.075-0.678-0.518-0.331-1.008-0.653-0.871-0.576-0.64-0.432-0.687-0.478c-14.335-9.919-34.029-6.536-44.216 7.688-10.29 14.369-6.985 34.358 7.384 44.649l0.808 0.568 1.298 0.886 0.433 0.291 0.915 0.608 0.978 0.64 1.041 0.673 1.41 0.896 0.724 0.456 1.49 0.926a276.88 276.88 0 0 0 4.79 2.884l1.702 0.996c0.288 0.167 0.578 0.335 0.871 0.503l1.782 1.02 0.911 0.514c14.546 8.198 31.437 16.33 50.552 23.884 54.203 21.417 115.743 34.239 183.502 34.239 14.927 0 29.553-0.623 43.864-1.822l7.23 108.488h64.142l-7.856-117.899c26.14-5.614 51.001-13.183 74.494-22.367l1.628-0.64c19.115-7.553 36.006-15.685 50.552-23.883 0.306-0.172 0.61-0.344 0.91-0.515l1.783-1.019c0.293-0.168 0.583-0.336 0.871-0.503l1.703-0.996a276.88 276.88 0 0 0 4.79-2.884l1.489-0.926c0.731-0.458 1.443-0.909 2.134-1.352l0.528-0.34 1.01-0.657 0.946-0.624 0.883-0.59 0.418-0.283 0.88-0.604 0.673-0.471 0.563-0.409c14.005-10.378 17.144-30.112 6.956-44.337-10.187-14.224-29.881-17.607-44.216-7.688l-0.372 0.261-0.955 0.65-1.192 0.784-1.205 0.775-0.531 0.337-1.101 0.688-0.57 0.353-1.176 0.719-1.228 0.738-0.633 0.377-1.303 0.767-1.353 0.784-1.403 0.802-1.76 0.991c-11.848 6.611-25.761 13.271-41.61 19.534a417.8 417.8 0 0 1-56.911 17.884l-7.17-107.584-0.037-0.504c-1.363-16.566-15.213-29.369-31.892-29.369h-98.608l-0.048-1.602c-0.603-21.886 1.158-45.91 5.13-71.735 6.789-44.149 19.706-91.76 36.975-140.446a1092.039 1092.039 0 0 1 29.424-74.198l0.455-1.032 0.9-2.034 0.888-1.995 1.308-2.917 1.224-2.707zM725.75 309.333c-17.673 0-32 14.327-32 32V384l0.004 0.53c0.283 17.428 14.5 31.47 31.996 31.47 17.673 0 32-14.327 32-32v-42.667l-0.004-0.529c-0.283-17.429-14.5-31.47-31.996-31.47z m-426.5 0c-17.673 0-32 14.327-32 32V384l0.004 0.53c0.283 17.428 14.5 31.47 31.996 31.47 17.673 0 32-14.327 32-32v-42.667l-0.004-0.529c-0.283-17.429-14.5-31.47-31.996-31.47z"
              p-id="4415"
            />
          </svg>
          macOS
        </button>
        <button
          className={`flex items-center rounded-lg px-4 py-2 font-semibold transition-colors duration-300 ${
            activeTab === 'Web'
              ? 'bg-green-500 text-white'
              : 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100'
          }`}
          onClick={() => setActiveTab('Web')}
        >
          <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 1024 1024">
            <path d="M932.236 782.673h-285.768v75.202l60.163 60.162v15.039h-391.050v-15.039l60.162-60.162v-75.202h-285.767c-24.918 0-45.121-20.196-45.121-45.121v-601.612c0-24.912 20.203-45.122 45.121-45.122h842.259c24.924 0 45.121 20.21 45.121 45.122v601.612c0 24.925-20.197 45.121-45.121 45.121zM917.196 150.981h-812.178v511.371h812.178v-511.371z" />
          </svg>
          Web
        </button>
      </div>

      <Container className="pt-4 lg:pt-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {filteredTools.map((tool) => (
            <InteractiveCard
              key={tool.label}
              title={tool.title}
              description={tool.description}
              imgSrc={tool.imgSrc}
              href={tool.href}
              label={tool.label}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default LabelSwitcher
