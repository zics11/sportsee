import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'

interface PerformanceDataItem {
  kind: string
  value: number
}

interface PerformanceProps {
  data: PerformanceDataItem[]
}

export default function Performance({ data }: PerformanceProps) {
  return (
    <div className=" bg-gris-chart-fonce rounded-md w-1/3 relative mb h-5/6">
      <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={data} margin={{ top: 0, right: 25, bottom: 0, left: 25 }} startAngle={-510} endAngle={-150}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="kind" tick={{ fill: '#FFFFFF', fontSize: '11px', dy: 4 }} radius={50} />
        <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
        <Radar dataKey="value" stroke="#ff0000" fill="#ff0000" fillOpacity={0.6} />
      </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
