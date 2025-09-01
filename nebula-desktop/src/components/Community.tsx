import { motion } from 'framer-motion'
import { 
  UsersIcon, 
  ChatBubbleLeftRightIcon,
  MicrophoneIcon,
  TrophyIcon,
  StarIcon,
  FireIcon,
  HeartIcon,
  ShareIcon
} from '@heroicons/react/24/outline'

export default function Community() {
  const communityStats = [
    { label: 'Участников', value: '24.5K', icon: UsersIcon, color: 'from-blue-500 to-cyan-500' },
    { label: 'Активных чатов', value: '156', icon: ChatBubbleLeftRightIcon, color: 'from-green-500 to-emerald-500' },
    { label: 'Голосовых комнат', value: '23', icon: MicrophoneIcon, color: 'from-purple-500 to-pink-500' },
    { label: 'Достижений', value: '1.2K', icon: TrophyIcon, color: 'from-yellow-500 to-orange-500' },
  ]

  const activeChats = [
    { name: 'Футбол Москва', members: 1.2, lastMessage: 'Кто идет на матч Спартак-ЦСКА?', time: '2 мин назад', unread: 3 },
    { name: 'Тренировки вместе', members: 856, lastMessage: 'Завтра в 7 утра на стадионе!', time: '15 мин назад', unread: 0 },
    { name: 'Питание спортсменов', members: 432, lastMessage: 'Рецепт протеинового коктейля', time: '1 час назад', unread: 5 },
    { name: 'Путешествия на матчи', members: 234, lastMessage: 'Отели в Питере на хоккей', time: '2 часа назад', unread: 1 },
  ]

  const voiceRooms = [
    { name: 'Обсуждение матчей', host: 'Алексей', listeners: 12, isLive: true },
    { name: 'Советы по тренировкам', host: 'Мария', listeners: 8, isLive: false },
    { name: 'Планирование поездок', host: 'Дмитрий', listeners: 5, isLive: false },
  ]

  const achievements = [
    { title: 'Первая тренировка', icon: FireIcon, color: 'from-orange-500 to-red-500', earned: true },
    { title: '10 матчей подряд', icon: TrophyIcon, color: 'from-yellow-500 to-orange-500', earned: true },
    { title: '100 дней активности', icon: StarIcon, color: 'from-blue-500 to-cyan-500', earned: false },
    { title: 'Помощь сообществу', icon: HeartIcon, color: 'from-red-500 to-pink-500', earned: true },
  ]

  const quickActions = [
    { title: 'Создать чат', icon: ChatBubbleLeftRightIcon, color: 'from-blue-500 to-cyan-500' },
    { title: 'Открыть комнату', icon: MicrophoneIcon, color: 'from-purple-500 to-pink-500' },
    { title: 'Найти команду', icon: UsersIcon, color: 'from-green-500 to-emerald-500' },
    { title: 'Поделиться', icon: ShareIcon, color: 'from-orange-500 to-red-500' },
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
          <h1 className="text-3xl font-bold text-gradient mb-2">👥 Сообщество Nebula</h1>
          <p className="text-gray-300 text-lg">Общайтесь, делитесь опытом и находите единомышленников</p>
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

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {communityStats.map((stat, index) => (
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
        {/* Active Chats */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="nebula-card"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Активные чаты</h3>
          <div className="space-y-3">
            {activeChats.map((chat, index) => (
              <motion.div
                key={chat.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-3 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:bg-gray-800/50 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-medium text-white">{chat.name}</h4>
                    <p className="text-sm text-gray-400">{chat.members}K участников</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500">{chat.time}</span>
                    {chat.unread > 0 && (
                      <div className="mt-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-medium">{chat.unread}</span>
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-300 truncate">{chat.lastMessage}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Voice Rooms */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="nebula-card"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Голосовые комнаты</h3>
          <div className="space-y-3">
            {voiceRooms.map((room, index) => (
              <motion.div
                key={room.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-3 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:bg-gray-800/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium text-white">{room.name}</h4>
                    {room.isLive && (
                      <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30">
                        LIVE
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-400">{room.listeners} слушают</span>
                </div>
                <p className="text-sm text-gray-300">Ведущий: {room.host}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Achievements */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Достижения</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`nebula-card text-center ${
                achievement.earned ? 'opacity-100' : 'opacity-50'
              }`}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center`}>
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-medium text-white mb-2">{achievement.title}</h4>
              <span className={`text-sm px-3 py-1 rounded-full ${
                achievement.earned 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
              }`}>
                {achievement.earned ? 'Получено' : 'В процессе'}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Community Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="nebula-card bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">🎭 NFT-достижения</h3>
              <p className="text-gray-300">Собирайте уникальные токены за ваши спортивные достижения</p>
            </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="nebula-button-secondary"
              >
                Посмотреть коллекцию
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
              <h3 className="text-xl font-semibold text-white mb-2">🏆 Рейтинги и челленджи</h3>
              <p className="text-gray-300">Соревнуйтесь с друзьями и поднимайтесь в рейтингах</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="nebula-button-secondary"
            >
              Участвовать
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Events and Meetups */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="nebula-card bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/30"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">📅 События и встречи</h3>
            <p className="text-gray-300">Сборы на спортплощадки, тренировки и фан-встречи в вашем городе</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="nebula-button-primary"
          >
            Найти события
          </motion.button>
        </div>
      </motion.div>

      {/* Digital Avatar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="nebula-card bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border-indigo-500/30"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">🤖 ИИ-аватар болельщика</h3>
            <p className="text-gray-300">Цифровой двойник, который растет и развивается вместе с вами</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="nebula-button-secondary"
          >
            Настроить аватар
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

