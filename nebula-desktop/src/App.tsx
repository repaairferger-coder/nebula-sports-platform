import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import LiveStreams from './components/LiveStreams'
import AIAssistant from './components/AIAssistant'
import Nutrition from './components/Nutrition'
import Workouts from './components/Workouts'
import Travel from './components/Travel'
import Community from './components/Community'
import MobileNavigation from './components/MobileNavigation'

type ActiveTab = 'dashboard' | 'live' | 'ai' | 'nutrition' | 'workouts' | 'travel' | 'community'

function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'live':
        return <LiveStreams />
      case 'ai':
        return <AIAssistant />
      case 'nutrition':
        return <Nutrition />
      case 'workouts':
        return <Workouts />
      case 'travel':
        return <Travel />
      case 'community':
        return <Community />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="flex h-screen">
        {/* Desktop Sidebar - hidden on mobile */}
        <div className="desktop-only">
          <Sidebar 
            activeTab={activeTab} 
            onTabChange={(tab: string) => setActiveTab(tab as ActiveTab)}
            isOpen={sidebarOpen}
            onToggle={() => setSidebarOpen(!sidebarOpen)}
          />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Desktop Header - hidden on mobile */}
          <div className="desktop-only">
            <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
          </div>
          
          {/* Content Area */}
          <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-20 md:pb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </main>
          
          {/* Mobile Navigation - visible only on mobile */}
          <div className="mobile-only">
            <MobileNavigation 
              activeTab={activeTab} 
              onTabChange={(tab: string) => setActiveTab(tab as ActiveTab)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
