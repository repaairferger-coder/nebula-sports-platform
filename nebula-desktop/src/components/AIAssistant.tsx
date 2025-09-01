import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  SparklesIcon, 
  PaperAirplaneIcon,
  LightBulbIcon,
  ChartBarIcon,
  HeartIcon,
  MapPinIcon,
  TruckIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Привет! Я ваш персональный ИИ-помощник Nebula. Я помогу вам с тренировками, питанием, путешествиями и многим другим. Что вас интересует?",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const quickActions = [
    { title: 'Подобрать тренировку', icon: ChartBarIcon, color: 'from-green-500 to-emerald-500' },
    { title: 'Составить рацион', icon: HeartIcon, color: 'from-red-500 to-orange-500' },
    { title: 'Найти отель', icon: BuildingOfficeIcon, color: 'from-blue-500 to-cyan-500' },
    { title: 'Заказать такси', icon: TruckIcon, color: 'from-purple-500 to-pink-500' },
    { title: 'Планировать поездку', icon: MapPinIcon, color: 'from-indigo-500 to-purple-500' },
    { title: 'Персональные советы', icon: LightBulbIcon, color: 'from-yellow-500 to-orange-500' }
  ]

  const sendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: generateAIResponse(),
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (): string => {
    const responses = [
      "Отличный вопрос! Давайте разберем это подробнее. Что именно вас интересует?",
      "Я понимаю вашу задачу. У меня есть несколько рекомендаций для вас.",
      "Это интересная тема! Позвольте мне поделиться полезной информацией.",
      "Спасибо за вопрос! Вот что я могу предложить по этому поводу.",
      "Отличная идея! Давайте вместе найдем лучшее решение для вас."
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const handleQuickAction = (action: string) => {
    const message: Message = {
      id: messages.length + 1,
      text: `Хочу ${action.toLowerCase()}`,
      isUser: true,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, message])
    setInputText('')
    setIsTyping(true)

    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: `Отлично! Давайте подберем для вас ${action.toLowerCase()}. Расскажите больше о ваших предпочтениях.`,
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="nebula-card"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gradient mb-2">🤖 ИИ-помощник Nebula</h1>
          <p className="text-gray-300 text-lg">Ваш персональный помощник для спорта, здоровья и путешествий</p>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quickActions.map((action, index) => (
          <motion.button
            key={action.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => handleQuickAction(action.title)}
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

      {/* Chat Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat */}
        <div className="lg:col-span-2 nebula-card">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <SparklesIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Чат с ИИ-помощником</h3>
              <p className="text-sm text-gray-400">Онлайн и готов помочь</p>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto space-y-4 mb-4 scrollbar-hide">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  message.isUser 
                    ? 'bg-gradient-to-r from-nebula-500 to-cosmic-500 text-white' 
                    : 'bg-gray-800/50 text-gray-100'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-gray-800/50 px-4 py-2 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Input */}
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Введите ваш вопрос..."
              className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nebula-500 focus:border-transparent"
            />
            <motion.button
              onClick={sendMessage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-nebula-500 to-cosmic-500 text-white rounded-xl hover:shadow-lg transition-all duration-200"
            >
              <PaperAirplaneIcon className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* AI Features */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="nebula-card"
          >
            <h3 className="text-lg font-semibold text-white mb-3">Возможности ИИ</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-300">Персональные рекомендации</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-300">Анализ данных</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-300">Умные подсказки</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-gray-300">Планирование</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="nebula-card bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30"
          >
            <h3 className="text-lg font-semibold text-white mb-3">Интеграции</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>• Apple Watch</p>
              <p>• Garmin</p>
              <p>• Samsung Health</p>
              <p>• Fitbit</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
