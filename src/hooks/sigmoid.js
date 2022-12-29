export default function useSigmoid() {
  const _getSeries = (start, end, step) => {
    const series = []

    if (start !== 0) {
      series.push(0)
    }
    let i
    for (i = start; i <= end; i += step) series.push(i)

    if (i !== end + step) series.push(end)

    return series
  }

  const series = ({ start, end, mean, deviation, totalValue }) => {
    const step = Math.floor((end - start) / 10)
    const sigmoid = (x) => {
      if (x <= 0) return 0
      if (x === end - start) return totalValue

      return (1 / (1 + Math.exp(-mean * (x - deviation)))) * totalValue
    }

    const series = _getSeries(start, end, step)
    let sigmoidSeries = []
    series.forEach((x) => {
      sigmoidSeries.push({ x, value: sigmoid(x - start) })
    })
    return sigmoidSeries
  }

  return {
    series
  }
}
