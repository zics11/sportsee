import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

interface ScoreDataItem {
  name: string
  value: number
}

interface ScoreProps {
  data: ScoreDataItem[]
}

export default function Score({ data }: ScoreProps) {
  return (
    <div className="  bg-gris-chart rounded-md w-1/3 relative ">
      <h2 className=" text-base font-medium mb-8 flex justify-between w-36 absolute top-7 left-8 text-noir-header">
        Score
      </h2>
      <div className=' absolute flex justify-center items-center w-full h-full'>
        <p className=" text-base text-center text-gris-text">
          <strong className=' text-black text-2xl'>{`${data[0]?.value * 100}%`}</strong>
          <br />
          de votre <br /> obectif
        </p>
      </div>
      <ResponsiveContainer width="100%" height={263}>
        <PieChart
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={80}
            cornerRadius={5}
            startAngle={90}
            endAngle={450}
            dataKey="value"
          >
            <Cell fill={'#e60000'} />
            <Cell fill={'transparent'} stroke={'transparent'} />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
