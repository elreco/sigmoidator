import { useEffect, useState } from 'react'
import Tip from './Tip'

export default function Form({ onSubmit, defaultSeries }) {
  const [inputs, setInputs] = useState(defaultSeries)
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const name = event.target.name
    const value = Number(event.target.value)
    setInputs((values) => ({ ...values, [name]: value }))
  }

  useEffect(() => {
    if (inputs.start > inputs.end) {
      setError('Start value should be lower to end value')
    } else {
      setError('')
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (error) {
      return
    }
    onSubmit(inputs)
  }
  return (
    <form className="bg-white border shadow-sm rounded-lg flex flex-col gap-y-5 p-5" onSubmit={handleSubmit}>
      <div className="isolate bg-gray-50 -space-y-px rounded-md shadow-sm">
        <div className="relative rounded-md rounded-b-none border border-gray-300 px-3 py-2 focus:ring-0">
          <label htmlFor="name" className="block text-xs font-medium text-gray-900">
            Start
          </label>
          <input
            type="number"
            name="start"
            value={inputs.start}
            onChange={handleChange}
            className="block bg-transparent w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          />
          <Tip image="start" />
        </div>
        <div
          className={`${
            error ? 'border-red-500' : 'border-gray-300'
          } relative rounded-md rounded-t-none border  px-3 py-2 focus:ring-0`}
        >
          <label
            htmlFor="job-title"
            className={`${error ? 'text-red-500' : 'text-gray-900'} block text-xs font-medium `}
          >
            End
          </label>
          <input
            type="number"
            name="end"
            value={inputs.end}
            onChange={handleChange}
            className={`${
              error ? 'text-red-500' : 'text-gray-900'
            } block appearance-none bg-transparent w-full border-0 p-0 placeholder-gray-500 focus:ring-0 sm:text-sm`}
          />
          <Tip image="end" />
        </div>
      </div>
      {error && <span className=" bg-white -mt-3 pl-1 text-sm text-red-500">{error}</span>}
      <div className="isolate bg-gray-50 -space-y-px rounded-md shadow-sm">
        <div className="relative rounded-md rounded-b-none border border-gray-300 px-3 py-2 focus-within:ring-0">
          <label htmlFor="name" className="block text-xs font-medium text-gray-900">
            Mean
          </label>
          <input
            type="number"
            name="mean"
            value={inputs.mean}
            onChange={handleChange}
            className="block bg-transparent appearance-none w-full border-0 p-0 text-gray-900 focus:ring-0 sm:text-sm"
          />
          <Tip image="mean-deviation" />
        </div>
        <div className="relative rounded-md rounded-t-none border border-gray-300 px-3 py-2 focus:ring-0">
          <label htmlFor="job-title" className="block text-xs font-medium text-gray-900">
            Deviation
          </label>
          <input
            type="number"
            name="deviation"
            value={inputs.deviation}
            onChange={handleChange}
            className="block appearance-none bg-transparent w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          />
          <Tip image="mean-deviation" />
        </div>
      </div>
      <div className="bg-gray-50 -space-y-px rounded-md shadow-sm">
        <div className="relative rounded-md border border-gray-300 px-3 py-2 focus:ring-0">
          <label htmlFor="name" className="block text-xs font-medium text-gray-900">
            Total value
          </label>
          <input
            type="number"
            name="totalValue"
            value={inputs.totalValue}
            onChange={handleChange}
            className="block bg-transparent w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          />
          <Tip image="total" />
        </div>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Generate curve
        </button>
      </div>
    </form>
  )
}
