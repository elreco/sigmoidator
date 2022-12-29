import Form from './Form'
import Chart from './Chart'
import { useState } from 'react'

export default function Sigmoidator() {
  const defaultSeries = { start: 10, end: 100, step: 10, mean: 0.1, deviation: 10, totalValue: 100000 }
  const [series, setSeries] = useState(defaultSeries)
  const handleSubmit = (inputs) => {
    setSeries(inputs)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-x-10">
      <div className="col-span-1">
        <Form defaultSeries={defaultSeries} onSubmit={handleSubmit} />
      </div>
      <div className="col-span-1 lg:col-span-2 mt-10 lg:mt-0">
        <Chart series={series} />
      </div>
    </div>
  )
}
