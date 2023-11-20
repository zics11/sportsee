import {
  LineChart,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  ResponsiveContainer,
} from 'recharts'
import { TooltipProps } from 'recharts'

interface SessionDataItem {
  day: string
  sessionLength: number
}

interface SessionsProps {
  data: SessionDataItem[]
}

export default function Sessions({ data }: SessionsProps) {
  return (
    <div className="  bg-red-SportSee rounded-md w-1/3 relative h-5/6">
      <div className=" text-base font-medium mb-8 flex justify-between w-3/4 absolute top-3 left-4 text-[#ffffff7f]">
        Durée moyenne des sessions
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
        >
          <CartesianGrid horizontal={false} vertical={false} />
          <XAxis
            dataKey="day"
            tick={{ fill: 'rgba(255, 255, 255, 0.5)', dx: 0 }}
            tickLine={false}
            axisLine={false}
            tickMargin={-15}
            padding={{ left: 0, right: 0 }}
          />
          <YAxis hide domain={['dataMin-10', 'dataMax+20']} />
          <Tooltip content={CustomToolTip} cursor={<CustomHover />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            strokeWidth={2}
            strokeOpacity={0.5}
            activeDot={{
              fill: '#FFFFFF',
              stroke: 'rgba(255, 255, 255, 0.3)',
              strokeWidth: 10,
              r: 4,
            }}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

function CustomToolTip(props: TooltipProps<number, string>) {
  const { active, payload } = props
  if (active && payload && payload.length > 0) {
    return (
      <div className=" bg-white w-10 text-[8px] h-6 text-black  flex flex-col justify-around items-center ml-5 mb-8">
        <p>{`${payload[0].value}`} min</p>
      </div>
    )
  }
  return null
}

function CustomHover({ points }: any) {
  if (!points || points.length === 0) return null

  return (
    <rect
      x={points[0].x}
      y={0}
      height="100%"
      width="100%"
      fill="rgba(0, 0, 0, 0.1)"
    />
  )
}
