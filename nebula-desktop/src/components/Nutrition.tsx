import { motion } from 'framer-motion'
import { 
  HeartIcon, 
  CameraIcon,
  ChartBarIcon,
  ShoppingCartIcon,
  BeakerIcon,
  FireIcon,
  ScaleIcon
} from '@heroicons/react/24/outline'

export default function Nutrition() {
  const nutritionStats = [
    { label: 'Калории', value: '1,847', target: '2,100', unit: 'ккал', icon: FireIcon, color: 'from-orange-500 to-red-500' },
    { label: 'Белки', value: '156', target: '180', unit: 'г', icon: ScaleIcon, color: 'from-blue-500 to-cyan-500' },
    { label: 'Жиры', value: '65', target: '70', unit: 'г', icon: ChartBarIcon, color: 'from-yellow-500 to-orange-500' },
    { label: 'Углеводы', value: '198', target: '250', unit: 'г', icon: FireIcon, color: 'from-green-500 to-emerald-500' },
  ]

  const recentMeals = [
    { name: 'Завтрак', time: '08:00', calories: 450, type: 'breakfast' },
    { name: 'Обед', time: '13:00', calories: 680, type: 'lunch' },
    { name: 'Перекус', time: '16:00', calories: 120, type: 'snack' },
    { name: 'Ужин', time: '19:00', calories: 597, type: 'dinner' },
  ]

  const supplements = [
    { name: 'Протеин', type: 'protein', dosage: '30г', time: 'После тренировки' },
    { name: 'BCAA', type: 'amino', dosage: '5г', time: 'Во время тренировки' },
    { name: 'Витамин D', type: 'vitamin', dosage: '2000 МЕ', time: 'Утром' },
    { name: 'Омега-3', type: 'omega', dosage: '1000мг', time: 'С едой' },
  ]

  const quickActions = [
    { title: 'Сканировать продукт', icon: CameraIcon, color: 'from-green-500 to-emerald-500' },
    { title: 'Добавить прием пищи', icon: HeartIcon, color: 'from-red-500 to-orange-500' },
    { title: 'Анализ рациона', icon: ChartBarIcon, color: 'from-blue-500 to-cyan-500' },
    { title: 'Заказать продукты', icon: ShoppingCartIcon, color: 'from-purple-500 to-pink-500' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="nebula-card"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gradient mb-2">🍎 Питание и здоровье</h1>
          <p className="text-gray-300 text-lg">ИИ-конструктор рациона и анализ питания</p>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickActions.map((action, index) => (
          <motion.button
            key={action.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-4 rounded-xl bg-gradient-to-r ${action.color} text-white hover:shadow-lg transition-all duration-200`}
          >
            <div className="flex items-center space-x-3">
              <action.icon className="w-6 h-6" />
              <span className="font-medium">{action.title}</span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Nutrition Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {nutritionStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="nebula-card"
          >
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                    style={{ width: `${(parseInt(stat.value) / parseInt(stat.target)) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Цель: {stat.target} {stat.unit}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Meals */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="nebula-card"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Приемы пищи сегодня</h3>
          <div className="space-y-3">
            {recentMeals.map((meal, index) => (
              <motion.div
                key={meal.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-3 rounded-xl bg-gray-800/30 border border-gray-700/30"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    meal.type === 'breakfast' ? 'bg-yellow-500' : 
                    meal.type === 'lunch' ? 'bg-orange-500' : 
                    meal.type === 'dinner' ? 'bg-blue-500' : 'bg-green-500'
                  }`}></div>
                  <div>
                    <p className="font-medium text-white">{meal.name}</p>
                    <p className="text-sm text-gray-400">{meal.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-white">{meal.calories} ккал</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Supplements */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="nebula-card"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Спортивные добавки</h3>
          <div className="space-y-3">
            {supplements.map((supplement, index) => (
              <motion.div
                key={supplement.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-3 rounded-xl bg-gray-800/30 border border-gray-700/30"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <BeakerIcon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{supplement.name}</p>
                    <p className="text-sm text-gray-400">{supplement.dosage}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-300">{supplement.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* AI Nutrition Assistant */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="nebula-card bg-gradient-to-r from-red-500/20 to-orange-500/20 border-red-500/30"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">🤖 ИИ-конструктор рациона</h3>
            <p className="text-gray-300">Персональные рекомендации по питанию на основе ваших целей и предпочтений</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="nebula-button-primary"
          >
            Создать рацион
          </motion.button>
        </div>
      </motion.div>

      {/* Product Scanner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="nebula-card bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">📱 Сканер продуктов</h3>
            <p className="text-gray-300">Сканируйте штрих-коды и получайте полную информацию о БЖУ, калориях и нутриценности</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="nebula-button-secondary"
          >
            Открыть сканер
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

