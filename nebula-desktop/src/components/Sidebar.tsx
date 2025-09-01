import { motion } from 'framer-motion'
import { 
  HomeIcon, 
  PlayIcon, 
  SparklesIcon, 
  HeartIcon, 
  MapPinIcon, 
  UsersIcon, 
  CogIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'

interface SidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
  isOpen: boolean
  onToggle: () => void
}

const navigation = [
  { id: 'dashboard', name: 'Главная', icon: HomeIcon, color: 'from-blue-500 to-cyan-500' },
  { id: 'live', name: 'Трансляции', icon: PlayIcon, color: 'from-green-500 to-emerald-500' },
  { id: 'ai', name: 'ИИ Помощник', icon: SparklesIcon, color: 'from-purple-500 to-pink-500' },
  { id: 'nutrition', name: 'Питание', icon: HeartIcon, color: 'from-red-500 to-orange-500' },
  { id: 'workouts', name: 'Тренировки', icon: UsersIcon, color: 'from-yellow-500 to-orange-500' },
  { id: 'travel', name: 'Путешествия', icon: MapPinIcon, color: 'from-indigo-500 to-blue-500' },
  { id: 'community', name: 'Сообщество', icon: UsersIcon, color: 'from-pink-500 to-rose-500' },
]

export default function Sidebar({ activeTab, onTabChange, isOpen, onToggle }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed lg:static inset-y-0 left-0 z-50 w-80 bg-gray-900/95 backdrop-blur-xl border-r border-gray-800/50 shadow-2xl lg:shadow-none`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800/50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl nebula-gradient flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">N</span>
              </div>
              <h1 className="text-2xl font-display font-bold text-gradient">NEBULA</h1>
            </div>
            <button
              onClick={onToggle}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
            >
              <XMarkIcon className="w-6 h-6 text-gray-400" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const isActive = activeTab === item.id
              return (
                <motion.button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r ' + item.color + ' text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <item.icon className="w-6 h-6" />
                  <span className="font-medium">{item.name}</span>
                </motion.button>
              )
            })}
          </nav>

          {/* Bottom section */}
          <div className="p-4 border-t border-gray-800/50">
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors">
              <CogIcon className="w-6 h-6" />
              <span className="font-medium">Настройки</span>
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  )
}

