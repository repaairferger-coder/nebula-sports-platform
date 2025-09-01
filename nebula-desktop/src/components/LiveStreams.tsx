import { motion } from 'framer-motion'
import { 
  EyeIcon, 
  HeartIcon, 
  ShareIcon,
  VideoCameraIcon,
  GlobeAltIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

export default function LiveStreams() {
  const liveMatches = [
    {
      id: 1,
      title: 'Барселона vs Реал Мадрид',
      league: 'La Liga',
      time: 'LIVE',
      viewers: '2.4M',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop',
      isLive: true,
      hasAR: true,
      hasVR: true
    },
    {
      id: 2,
      title: 'Манчестер Юнайтед vs Ливерпуль',
      league: 'Premier League',
      time: '19:30',
      viewers: '1.8M',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop',
      isLive: false,
      hasAR: true,
      hasVR: false
    },
    {
      id: 3,
      title: 'Бавария vs Боруссия Д',
      league: 'Bundesliga',
      time: '21:00',
      viewers: '950K',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop',
      isLive: false,
      hasAR: false,
      hasVR: true
    }
  ]

  const features = [
    { title: 'AR-режим', description: 'Визуализация игроков и статистики', icon: EyeIcon, color: 'from-blue-500 to-cyan-500' },
    { title: 'VR-погружение', description: 'Виртуальный стадион', icon: GlobeAltIcon, color: 'from-purple-500 to-pink-500' },
    { title: 'ИИ-комментатор', description: 'Персонализированные комментарии', icon: UserGroupIcon, color: 'from-green-500 to-emerald-500' },
    { title: 'Совместный просмотр', description: 'С друзьями в реальном времени', icon: VideoCameraIcon, color: 'from-orange-500 to-red-500' }
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
          <h1 className="text-3xl font-bold text-gradient mb-2">📺 Спортивные трансляции</h1>
          <p className="text-gray-300 text-lg">Смотрите матчи в AR/VR режиме с ИИ-комментатором</p>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="nebula-card text-center"
          >
            <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
              <feature.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Live Matches */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Прямые трансляции</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {liveMatches.map((match, index) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="nebula-card overflow-hidden"
            >
              {/* Match Image */}
              <div className="relative h-48 bg-gray-800 rounded-xl overflow-hidden mb-4">
                <img 
                  src={match.image} 
                  alt={match.title}
                  className="w-full h-full object-cover"
                />
                {match.isLive && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>LIVE</span>
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded-lg text-sm">
                  {match.viewers}
                </div>
                <div className="absolute bottom-3 left-3 flex space-x-2">
                  {match.hasAR && (
                    <span className="bg-blue-500/80 text-white px-2 py-1 rounded text-xs">AR</span>
                  )}
                  {match.hasVR && (
                    <span className="bg-purple-500/80 text-white px-2 py-1 rounded text-xs">VR</span>
                  )}
                </div>
              </div>

              {/* Match Info */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{match.title}</h3>
                  <p className="text-gray-400 text-sm">{match.league}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${
                    match.isLive ? 'text-red-400' : 'text-gray-300'
                  }`}>
                    {match.time}
                  </span>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
                      <HeartIcon className="w-5 h-5 text-gray-400" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
                      <ShareIcon className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full nebula-button ${
                    match.isLive 
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white' 
                      : 'nebula-button-secondary'
                  }`}
                >
                  {match.isLive ? 'Смотреть LIVE' : 'Напомнить'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* AI Commentator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="nebula-card bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">🎙️ ИИ-комментатор</h3>
            <p className="text-gray-300">Персонализированные комментарии и интересные факты о матчах</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="nebula-button-primary"
          >
            Настроить
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}
