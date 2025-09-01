import { motion } from 'framer-motion'
import { 
  HomeIcon, 
  PlayIcon, 
  SparklesIcon, 
  HeartIcon, 
  MapPinIcon, 
  UsersIcon
} from '@heroicons/react/24/outline'

interface MobileNavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const navigation = [
  { id: 'dashboard', name: 'Главная', icon: HomeIcon },
  { id: 'live', name: 'Трансляции', icon: PlayIcon },
  { id: 'ai', name: 'ИИ', icon: SparklesIcon },
  { id: 'nutrition', name: 'Питание', icon: HeartIcon },
  { id: 'workouts', name: 'Тренировки', icon: UsersIcon },
  { id: 'travel', name: 'Путешествия', icon: MapPinIcon },
  { id: 'community', name: 'Сообщество', icon: UsersIcon },
]

export default function MobileNavigation({ activeTab, onTabChange }: MobileNavigationProps) {
  return (
    <motion.nav 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="mobile-nav z-50"
    >
      <div className="flex justify-around items-center py-2">
        {navigation.map((item) => {
          const isActive = activeTab === item.id
          return (
            <motion.button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              whileTap={{ scale: 0.9 }}
              className={`mobile-nav-item touch-target ${
                isActive ? 'active' : 'inactive'
              }`}
            >
              <item.icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">{item.name}</span>
            </motion.button>
          )
        })}
      </div>
    </motion.nav>
  )
}
