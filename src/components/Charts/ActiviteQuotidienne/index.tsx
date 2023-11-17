import {
  BarChart,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  ResponsiveContainer,
} from 'recharts'
import { TooltipProps } from 'recharts'

interface ActiviteQuotidienneDataItem {
  day: string
  kilogram: number
  calories: number
}

interface ActiviteQuotidienneProps {
  data: ActiviteQuotidienneDataItem[]
}

export default function ActiviteQuotidienne({
  data,
}: ActiviteQuotidienneProps) {
  return (
    <div className=" bg-gris-chart p-7 rounded-md w-full">
      <div className=" text-base font-medium mb-8 flex justify-between w-full">
        Activité quotidienne
        <div className=" text-gris-text flex gap-8">
          <div className=" flex flex-row items-center">
            <div className=" w-2 h-2 bg-red-SportSee rounded-full mr-2"></div>
            Poids (kg)
          </div>
          <div className=" flex flex-row items-center">
            <div className=" w-2 h-2  bg-noir-header rounded-full mr-2"></div>
            Calories brûlées (kCal)
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={208}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tick={{ fill: '#9B9EAC' }}
            axisLine={false}
            padding={{ left: -30, right: -30 }}
            domain={['dataMin', 'dataMax']}
            tickMargin={10}
          />
          <YAxis
            dataKey="kilogram"
            yAxisId="kilogram"
            orientation="right"
            tickLine={false}
            tick={{ fill: '#9B9EAC' }}
            axisLine={false}
            tickMargin={30}
            domain={['dataMin-2', 'dataMax+2']}
            tickCount={4}
          />
          <YAxis
            hide
            dataKey="calories"
            yAxisId="calories"
            orientation="right"
            domain={[0, 'dataMax+10']}
          />
          <Tooltip
            content={CustomToolTip}
            contentStyle={{
              backgroundColor: '#E60000',
              boxShadow: 'none',
              margin: '0 0px',
              color: 'white',
            }}
            itemStyle={{
              color: 'white',
            }}
          />
          <Bar
            dataKey="kilogram"
            yAxisId={'kilogram'}
            fill="#282D30"
            barSize={7}
            radius={[3.5, 3.5, 0, 0]}
          />

          <Bar
            dataKey="calories"
            yAxisId={'calories'}
            fill="#E60000"
            barSize={7}
            radius={[3.5, 3.5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

function CustomToolTip(props: TooltipProps<number, string>) {
  const { active, payload } = props
  if (active && payload && payload.length > 0) {
    return (
      <div className=" bg-red-SportSee w-10 text-[8px] h-16 text-white  flex flex-col justify-around items-center ml-5 mb-8">
        <p>{`${payload[0].value}`}kg</p>
        <p>{`${payload[1].value}`}kcal</p>
      </div>
    )
  }
  return null
}
