import { InformationCircleIcon } from '@heroicons/react/24/solid'
import { Popover } from '@headlessui/react'

export default function Tip({ image }) {
  return (
    <Popover className="absolute inset-y-0 right-0 flex items-center pr-2">
      <Popover.Button className="relative -ml-px inline-flex items-center rounded-full shadow-sm bg-indigo-500 p-1 text-sm font-medium text-gray-700 hover:bg-indigo-300 focus:border-0 focus:outline-none focus:ring-0">
        <InformationCircleIcon className="h-5 w-5 text-white" aria-hidden="true" />
      </Popover.Button>

      <Popover.Panel className="absolute border rounded shadow bg-white p-4 w-[100px] ml-10 mt-3 left-0 top-0 z-10">
        <img src={`/${image}.svg`} alt="" />
      </Popover.Panel>
    </Popover>
  )
}
