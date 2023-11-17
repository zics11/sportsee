import CaloriesIcon from '../../assets/calories-icon.png'
import ProteinesIcon from '../../assets/protein-icon.png'
import GlucidesIcon from '../../assets/carbs-icon.png'
import LipidesIcon from '../../assets/fat-icon.png'

interface CardInfosProps {
  type: string
  value: string
}

export function CardInfos({ type, value }: CardInfosProps) {
  const imgMap: { [key: string]: string } = {
    Calories: CaloriesIcon,
    Proteines: ProteinesIcon,
    Glucides: GlucidesIcon,
    Lipides: LipidesIcon,
  }
  const unitMap: { [key: string]: string } = {
    Calories: 'Kcal',
    Proteines: 'g',
    Glucides: 'g',
    Lipides: 'g',
  }

  return (
    <div className=" w-full bg-gris-chart p-8 flex space-x-8">
      <img src={imgMap[type]} alt={`${type} icon`} className=" h-14" />
      <p className=" flex flex-col justify-center text-sm text-gris-text">
        <strong className="text-xl text-noir-header">
          {value}
          {unitMap[type]}
        </strong>
        {type}
      </p>
    </div>
  )
}
