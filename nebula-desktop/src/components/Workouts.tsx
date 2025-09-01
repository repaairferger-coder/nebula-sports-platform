import { motion } from 'framer-motion'
import { 
  UsersIcon, 
  PlayIcon,
  ClockIcon,
  FireIcon,
  HeartIcon,
  ChartBarIcon,
  VideoCameraIcon,
  TrophyIcon
} from '@heroicons/react/24/outline'

export default function Workouts() {
  const workoutStats = [
    { label: 'Тренировок сегодня', value: '2', icon: UsersIcon, color: 'from-green-500 to-emerald-500' },
    { label: 'Время активности', value: '2ч 15м', icon: ClockIcon, color: 'from-blue-500 to-cyan-500' },
    { label: 'Калории сожжено', value: '1,240', icon: FireIcon, color: 'from-orange-500 to-red-500' },
    { label: 'Средний пульс', value: '142', icon: HeartIcon, color: 'from-red-500 to-pink-500' },
  ]

  const todayWorkouts = [
    { name: 'Кардио + Сила', time: '07:00', duration: '45 мин', calories: 680, type: 'cardio' },
    { name: 'Йога', time: '18:30', duration: '30 мин', calories: 180, type: 'yoga' },
  ]

  const upcomingWorkouts = [
    { name: 'Силовая тренировка', time: '07:00', duration: '60 мин', type: 'strength', trainer: 'ИИ-тренер' },
    { name: 'Плавание', time: '19:00', duration: '45 мин', type: 'swimming', trainer: 'Алексей Петров' },
    { name: 'Бег', time: '06:30', duration: '30 мин', type: 'running', trainer: 'ИИ-тренер' },
  ]

  const workoutTypes = [
    { title: 'Кардио', icon: FireIcon, color: 'from-red-500 to-orange-500', count: 12 },
    { title: 'Сила', icon: UsersIcon, color: 'from-blue-500 to-cyan-500', count: 8 },
    { title: 'Йога', icon: HeartIcon, color: 'from-green-500 to-emerald-500', count: 6 },
    { title: 'Плавание', icon: ChartBarIcon, color: 'from-indigo-500 to-purple-500', count: 4 },
    { title: 'Бег', icon: PlayIcon, color: 'from-yellow-500 to-orange-500', count: 10 },
    { title: 'Велосипед', icon: TrophyIcon, color: 'from-purple-500 to-pink-500', count: 7 },
  ]

  const quickActions = [
    { title: 'Начать тренировку', icon: PlayIcon, color: 'from-green-500 to-emerald-500' },
    { title: 'Планировать неделю', icon: ClockIcon, color: 'from-blue-500 to-cyan-500' },
    { title: 'Видео-уроки', icon: VideoCameraIcon, color: 'from-purple-500 to-pink-500' },
    { title: 'Анализ прогресса', icon: ChartBarIcon, color: 'from-orange-500 to-red-500' },
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
          <h1 className="text-3xl font-bold text-gradient mb-2">💪 Тренировки и активность</h1>
          <p className="text-gray-300 text-lg">Персональные тренировки от ИИ и профессиональных тренеров</p>
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

      {/* Workout Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {workoutStats.map((stat, index) => (
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
        {/* Today's Workouts */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1 nebula-card"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Сегодняшние тренировки</h3>
          <div className="space-y-3">
            {todayWorkouts.map((workout, index) => (
              <motion.div
                key={workout.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-3 rounded-xl bg-gray-800/30 border border-gray-700/30"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">{workout.name}</h4>
                  <span className="text-sm text-gray-400">{workout.time}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">{workout.duration}</span>
                  <span className="text-orange-400">{workout.calories} ккал</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Workouts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 nebula-card"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Предстоящие тренировки</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingWorkouts.map((workout, index) => (
              <motion.div
                key={workout.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-white">{workout.name}</h4>
                  <span className="text-sm text-gray-400">{workout.time}</span>
                </div>
                <div className="flex items-center justify-between text-sm mb-3">
                  <span className="text-gray-300">{workout.duration}</span>
                  <span className="text-blue-400">{workout.trainer}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full nebula-button-secondary text-sm"
                >
                  Подробнее
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Workout Types */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Типы тренировок</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workoutTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="nebula-card hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${type.color} flex items-center justify-center`}>
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-white">{type.title}</h4>
                  <p className="text-sm text-gray-400">{type.count} программ</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* AI Trainer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="nebula-card bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">🤖 ИИ-тренер</h3>
            <p className="text-gray-300">Персональные тренировки, адаптированные под ваши цели и уровень подготовки</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="nebula-button-primary"
          >
            Начать тренировку
          </motion.button>
        </div>
      </motion.div>

      {/* Progress Tracking */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="nebula-card bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/30"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">📊 Отслеживание прогресса</h3>
            <p className="text-gray-300">Анализ сна, пульса, восстановления и интеграция с фитнес-устройствами</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="nebula-button-secondary"
          >
            Посмотреть аналитику
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

