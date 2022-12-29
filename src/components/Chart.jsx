import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip } from 'chart.js'
import { Line } from 'react-chartjs-2'
import useSigmoid from '@/hooks/sigmoid'
import { useEffect, useState } from 'react'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip)

export default function Chart({ series }) {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        borderColor: 'rgb(79, 70, 229)',
        fill: true,
        backgroundColor: 'rgba(79, 70, 229, 0.5)'
      }
    ]
  })
  const sigmoid = useSigmoid()

  useEffect(() => {
    const dataset = sigmoid.series(series)
    setData({
      labels: dataset.map((d) => d.x),
      datasets: [
        {
          ...data.datasets[0],
          data: dataset.map((d) => Math.round(d.value))
        }
      ]
    })
  }, [series, setData])

  const options = {
    responsive: true
  }

  return <Line options={options} data={data} />
}
