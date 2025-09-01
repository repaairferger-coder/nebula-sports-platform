import { motion } from 'framer-motion'
import { 
  PlayIcon, 
  HeartIcon, 
  UsersIcon, 
  MapPinIcon,
  FireIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export default function Dashboard() {
  const stats = [
    { label: 'Активность сегодня', value: '8,547', icon: FireIcon, color: 'from-orange-500 to-red-500' },
    { label: 'Калории сожжено', value: '2,340', icon: ArrowTrendingUpIcon, color: 'from-green-500 to-emerald-500' },
    { label: 'Время тренировок', value: '2ч 15м', icon: ClockIcon, color: 'from-blue-500 to-cyan-500' },
    { label: 'Достижения', value: '24', icon: StarIcon, color: 'from-yellow-500 to-orange-500' },
  ]

  const upcomingEvents = [
    { title: 'Футбол: Барселона vs Реал Мадрид', time: '20:00', type: 'live' },
    { title: 'Тренировка: Кардио + Сила', time: '18:30', type: 'workout' },
    { title: 'Консультация с ИИ-тренером', time: '16:00', type: 'ai' },
  ]

  const quickActions = [
    { title: 'Начать тренировку', icon: UsersIcon, color: 'from-green-500 to-emerald-500' },
    { title: 'Сканировать еду', icon: HeartIcon, color: 'from-red-500 to-orange-500' },
    { title: 'Найти матч', icon: PlayIcon, color: 'from-blue-500 to-cyan-500' },
    { title: 'Планировать поездку', icon: MapPinIcon, color: 'from-indigo-500 to-purple-500' },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="nebula-card"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gradient mb-2">Добро пожаловать в Nebula! 🌌</h1>
          <p className="text-gray-300 text-lg">Ваш персональный спортивный помощник готов к работе</p>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
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
              <div>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1 nebula-card"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Быстрые действия</h3>
          <div className="space-y-3">
            {quickActions.map((action) => (
              <motion.button
                key={action.title}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r ${action.color} text-white hover:shadow-lg transition-all duration-200`}
              >
                <action.icon className="w-5 h-5" />
                <span className="font-medium">{action.title}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 nebula-card"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Ближайшие события</h3>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    event.type === 'live' ? 'bg-red-500' : 
                    event.type === 'workout' ? 'bg-green-500' : 'bg-purple-500'
                  }`}></div>
                  <div>
                    <p className="font-medium text-white">{event.title}</p>
                    <p className="text-sm text-gray-400">{event.type === 'live' ? 'Прямая трансляция' : 
                      event.type === 'workout' ? 'Тренировка' : 'ИИ консультация'}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-white">{event.time}</p>
                  <p className="text-xs text-gray-400">Сегодня</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* AI Assistant Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="nebula-card bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">🤖 ИИ-помощник готов помочь</h3>
            <p className="text-gray-300">Получите персональные рекомендации по тренировкам, питанию и образу жизни</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="nebula-button-primary"
          >
            Начать чат
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}
