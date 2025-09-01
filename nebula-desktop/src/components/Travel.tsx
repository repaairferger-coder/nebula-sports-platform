import { motion } from 'framer-motion'
import { 
  MapPinIcon, 
  TruckIcon,
  BuildingOfficeIcon,
  TicketIcon,
  CreditCardIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

export default function Travel() {
  const travelStats = [
    { label: 'Поездок в этом месяце', value: '8', icon: MapPinIcon, color: 'from-blue-500 to-cyan-500' },
    { label: 'Потрачено на транспорт', value: '₽12,450', icon: CreditCardIcon, color: 'from-green-500 to-emerald-500' },
    { label: 'Отелей забронировано', value: '3', icon: BuildingOfficeIcon, color: 'from-purple-500 to-pink-500' },
    { label: 'Билетов куплено', value: '12', icon: TicketIcon, color: 'from-orange-500 to-red-500' },
  ]

  const upcomingTrips = [
    { 
      destination: 'Москва', 
      date: '15-17 декабря', 
      purpose: 'Футбол: Спартак vs ЦСКА', 
      transport: 'Поезд', 
      hotel: 'Отель забронирован',
      status: 'confirmed'
    },
    { 
      destination: 'Санкт-Петербург', 
      date: '22-24 декабря', 
      purpose: 'Хоккей: СКА vs Динамо', 
      transport: 'Самолет', 
      hotel: 'Поиск отеля',
      status: 'planning'
    },
  ]

  const transportOptions = [
    { type: 'Такси', icon: TruckIcon, color: 'from-yellow-500 to-orange-500', price: 'от ₽200' },
    { type: 'Каршеринг', icon: TruckIcon, color: 'from-blue-500 to-cyan-500', price: 'от ₽150/час' },
    { type: 'Самокат', icon: TruckIcon, color: 'from-green-500 to-emerald-500', price: 'от ₽50/час' },
    { type: 'Общественный', icon: TruckIcon, color: 'from-purple-500 to-pink-500', price: 'от ₽45' },
  ]

  const quickActions = [
    { title: 'Вызвать такси', icon: TruckIcon, color: 'from-yellow-500 to-orange-500' },
    { title: 'Арендовать авто', icon: TruckIcon, color: 'from-blue-500 to-cyan-500' },
    { title: 'Найти отель', icon: BuildingOfficeIcon, color: 'from-purple-500 to-pink-500' },
    { title: 'Купить билеты', icon: TicketIcon, color: 'from-green-500 to-emerald-500' },
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
          <h1 className="text-3xl font-bold text-gradient mb-2">✈️ Путешествия и транспорт</h1>
          <p className="text-gray-300 text-lg">Планирование поездок, бронирование отелей и заказ транспорта</p>
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

      {/* Travel Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {travelStats.map((stat, index) => (
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Trips */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="nebula-card"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Предстоящие поездки</h3>
          <div className="space-y-4">
            {upcomingTrips.map((trip, index) => (
              <motion.div
                key={trip.destination}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-xl bg-gray-800/30 border border-gray-700/30"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-white">{trip.destination}</h4>
                    <p className="text-sm text-gray-400">{trip.date}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    trip.status === 'confirmed' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {trip.status === 'confirmed' ? 'Подтверждено' : 'Планирование'}
                  </span>
                </div>
                <p className="text-sm text-gray-300 mb-2">{trip.purpose}</p>
                <div className="space-y-1 text-sm">
                  <p className="text-gray-400">🚗 {trip.transport}</p>
                  <p className="text-gray-400">🏨 {trip.hotel}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transport Options */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="nebula-card"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Варианты транспорта</h3>
          <div className="space-y-3">
            {transportOptions.map((option, index) => (
              <motion.div
                key={option.type}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-3 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:bg-gray-800/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${option.color} flex items-center justify-center`}>
                    <option.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-white">{option.type}</span>
                </div>
                <span className="text-sm text-gray-300">{option.price}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* AI Travel Assistant */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="nebula-card bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/30"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">🤖 ИИ-помощник для путешествий</h3>
            <p className="text-gray-300">Подбор отелей рядом с матчами, оптимальные маршруты и персональные рекомендации</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="nebula-button-primary"
          >
            Планировать поездку
          </motion.button>
        </div>
      </motion.div>

      {/* Booking Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="nebula-card bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">🏨 Поиск отелей</h3>
              <p className="text-gray-300">Отели рядом со стадионами и спортивными объектами</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="nebula-button-secondary"
            >
              Найти отель
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="nebula-card bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">🎫 Билеты на транспорт</h3>
              <p className="text-gray-300">Авиа, ЖД, автобус - все в одном месте</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="nebula-button-secondary"
            >
              Купить билеты
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Payment Methods */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="nebula-card"
      >
        <h3 className="text-xl font-semibold text-white mb-4">💳 Способы оплаты</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-gray-800/30 border border-gray-700/30 text-center">
            <CreditCardIcon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <p className="text-white font-medium">Банковские карты</p>
            <p className="text-sm text-gray-400">Visa, MasterCard, МИР</p>
          </div>
          <div className="p-4 rounded-xl bg-gray-800/30 border border-gray-700/30 text-center">
            <GlobeAltIcon className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="text-white font-medium">Электронные кошельки</p>
            <p className="text-sm text-gray-400">ЮMoney, QIWI, PayPal</p>
          </div>
          <div className="p-4 rounded-xl bg-gray-800/30 border border-gray-700/30 text-center">
            <MapPinIcon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <p className="text-white font-medium">Проездные карты</p>
            <p className="text-sm text-gray-400">Пополнение и проверка</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
