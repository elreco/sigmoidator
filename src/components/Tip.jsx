import { InformationCircleIcon } from '@heroicons/react/24/solid'
import { Popover } from '@headlessui/react'

export default function Tip({ image }) {
  return (
    <Popover className="absolute inset-y-0 right-0 flex items-center pr-2">
      {({ open }) => (
        <>
          <Popover.Button as="div" className="cursor-pointer relative">
            <InformationCircleIcon
              className={`relative z-50 h-5 w-5 ${open ? 'text-gray-800' : 'text-indigo-500'}`}
              aria-hidden="true"
            />
          </Popover.Button>

          <Popover.Panel className="absolute overflow-hidden border rounded shadow bg-white p-4 w-[100px] ml-10 mt-3 left-0 top-0 z-10">
            <img src={`/${image}.svg`} alt="" />
          </Popover.Panel>
        </>
      )}
    </Popover>
  )
}
