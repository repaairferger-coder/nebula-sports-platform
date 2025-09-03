import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';

const { width, height } = Dimensions.get('window');

// Configure notifications
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userCoins, setUserCoins] = useState(1250);
  const [userLevel, setUserLevel] = useState(15);
  const [securityLevel, setSecurityLevel] = useState(3);

  useEffect(() => {
    // Show welcome notification
    setTimeout(() => {
      showNotification('Добро пожаловать в Nebula Sports! 🚀');
    }, 1000);
  }, []);

  const showNotification = async (message) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Nebula Sports',
        body: message,
        sound: true,
      },
      trigger: null,
    });
  };

  const addCoins = (amount) => {
    setUserCoins(prev => prev + amount);
    showNotification(`Получено ${amount} Coins! 🎉`);
  };

  const startMinigame = (gameType) => {
    const games = {
      'quiz': { name: 'Спортивная викторина', reward: 50 },
      'memory': { name: 'Память спортсмена', reward: 30 },
      'reaction': { name: 'Реакция', reward: 40 },
      'puzzle': { name: 'Спортивная головоломка', reward: 60 }
    };

    const game = games[gameType];
    Alert.alert(
      `Запустить игру "${game.name}"?`,
      `Награда: +${game.reward} Coins`,
      [
        { text: 'Отмена', style: 'cancel' },
        {
          text: 'Играть',
          onPress: () => {
            setTimeout(() => {
              const success = Math.random() > 0.3;
              if (success) {
                addCoins(game.reward);
                Alert.alert('🎉 Поздравляем!', `Вы выиграли ${game.reward} Coins!`);
              } else {
                Alert.alert('😔', 'Попробуйте еще раз!');
              }
            }, 2000);
          }
        }
      ]
    );
  };

  const renderDashboard = () => (
    <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>🏠 Dashboard</Text>
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{userCoins.toLocaleString()}</Text>
            <Text style={styles.statLabel}>Nebula Coins</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{userLevel}</Text>
            <Text style={styles.statLabel}>Уровень</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📊 Статистика</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Тренировки</Text>
          <Text style={styles.cardValue}>24 за неделю</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Калории</Text>
          <Text style={styles.cardValue}>2,450 сожжено</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Шаги</Text>
          <Text style={styles.cardValue}>12,500 сегодня</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🎯 Быстрые действия</Text>
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionBtn} onPress={() => setActiveTab('games')}>
            <Text style={styles.actionIcon}>🎮</Text>
            <Text style={styles.actionText}>Игры</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn} onPress={() => setActiveTab('nutrition')}>
            <Text style={styles.actionIcon}>🥗</Text>
            <Text style={styles.actionText}>Питание</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn} onPress={() => setActiveTab('workouts')}>
            <Text style={styles.actionIcon}>💪</Text>
            <Text style={styles.actionText}>Тренировки</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn} onPress={() => setActiveTab('health')}>
            <Text style={styles.actionIcon}>🏥</Text>
            <Text style={styles.actionText}>Здоровье</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );

  const renderGames = () => (
    <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>🎮 Игры и турниры</Text>
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{userCoins.toLocaleString()}</Text>
            <Text style={styles.statLabel}>Coins</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>#42</Text>
            <Text style={styles.statLabel}>Рейтинг</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🎯 Мини-игры</Text>
        <View style={styles.gamesGrid}>
          <TouchableOpacity style={styles.gameCard} onPress={() => startMinigame('quiz')}>
            <Text style={styles.gameIcon}>🧠</Text>
            <Text style={styles.gameName}>Спортивная викторина</Text>
            <Text style={styles.gameReward}>+50 Coins</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gameCard} onPress={() => startMinigame('memory')}>
            <Text style={styles.gameIcon}>🧩</Text>
            <Text style={styles.gameName}>Память спортсмена</Text>
            <Text style={styles.gameReward}>+30 Coins</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gameCard} onPress={() => startMinigame('reaction')}>
            <Text style={styles.gameIcon}>⚡</Text>
            <Text style={styles.gameName}>Реакция</Text>
            <Text style={styles.gameReward}>+40 Coins</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gameCard} onPress={() => startMinigame('puzzle')}>
            <Text style={styles.gameIcon}>🔢</Text>
            <Text style={styles.gameName}>Головоломка</Text>
            <Text style={styles.gameReward}>+60 Coins</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🏆 Турниры</Text>
        <View style={styles.tournamentCard}>
          <Text style={styles.tournamentName}>Еженедельный фитнес-челлендж</Text>
          <Text style={styles.tournamentPrize}>🏆 500 Coins</Text>
          <Text style={styles.tournamentInfo}>👥 247 участников • ⏰ 3 дня осталось</Text>
          <TouchableOpacity style={styles.joinBtn}>
            <Text style={styles.joinBtnText}>Присоединиться</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );

  const renderNutrition = () => (
    <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>🥗 Питание</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📸 Умная камера</Text>
        <TouchableOpacity style={styles.cameraBtn}>
          <Text style={styles.cameraIcon}>📷</Text>
          <Text style={styles.cameraText}>Сканировать еду</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🍽️ Рецепты</Text>
        <View style={styles.recipeCard}>
          <Text style={styles.recipeName}>Салат "Цезарь"</Text>
          <Text style={styles.recipeCalories}>320 ккал</Text>
          <Text style={styles.recipeTime}>⏱️ 15 мин</Text>
        </View>
        <View style={styles.recipeCard}>
          <Text style={styles.recipeName}>Куриная грудка с овощами</Text>
          <Text style={styles.recipeCalories}>280 ккал</Text>
          <Text style={styles.recipeTime}>⏱️ 25 мин</Text>
        </View>
      </View>
    </ScrollView>
  );

  const renderWorkouts = () => (
    <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>💪 Тренировки</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📅 Календарь тренировок</Text>
        <View style={styles.calendarCard}>
          <Text style={styles.calendarDate}>Сегодня, 15 декабря</Text>
          <Text style={styles.calendarWorkout}>🏃‍♂️ Кардио - 30 мин</Text>
          <Text style={styles.calendarTime}>⏰ 18:00</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🎯 Программы</Text>
        <View style={styles.programCard}>
          <Text style={styles.programName}>Начальный уровень</Text>
          <Text style={styles.programProgress}>Прогресс: 65%</Text>
        </View>
        <View style={styles.programCard}>
          <Text style={styles.programName}>Продвинутый</Text>
          <Text style={styles.programProgress}>Прогресс: 30%</Text>
        </View>
      </View>
    </ScrollView>
  );

  const renderHealth = () => (
    <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>🏥 Здоровье</Text>
        <View style={styles.healthStatus}>
          <Text style={styles.healthIcon}>💚</Text>
          <Text style={styles.healthText}>Отличное здоровье</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📊 Показатели</Text>
        <View style={styles.metricsGrid}>
          <View style={styles.metricCard}>
            <Text style={styles.metricIcon}>❤️</Text>
            <Text style={styles.metricName}>Пульс</Text>
            <Text style={styles.metricValue}>72 уд/мин</Text>
          </View>
          <View style={styles.metricCard}>
            <Text style={styles.metricIcon}>🩸</Text>
            <Text style={styles.metricName}>Давление</Text>
            <Text style={styles.metricValue}>120/80</Text>
          </View>
          <View style={styles.metricCard}>
            <Text style={styles.metricIcon}>⚖️</Text>
            <Text style={styles.metricName}>Вес</Text>
            <Text style={styles.metricValue}>70 кг</Text>
          </View>
          <View style={styles.metricCard}>
            <Text style={styles.metricIcon}>🌡️</Text>
            <Text style={styles.metricName}>Температура</Text>
            <Text style={styles.metricValue}>36.6°C</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⌚ Устройства</Text>
        <View style={styles.deviceCard}>
          <Text style={styles.deviceIcon}>⌚</Text>
          <View style={styles.deviceInfo}>
            <Text style={styles.deviceName}>Apple Watch Series 9</Text>
            <Text style={styles.deviceStatus}>Подключено</Text>
          </View>
          <TouchableOpacity style={styles.syncBtn}>
            <Text style={styles.syncBtnText}>🔄</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return renderDashboard();
      case 'games': return renderGames();
      case 'nutrition': return renderNutrition();
      case 'workouts': return renderWorkouts();
      case 'health': return renderHealth();
      default: return renderDashboard();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
      <LinearGradient
        colors={['#0f172a', '#1e293b', '#334155']}
        style={styles.gradient}
      >
        {renderContent()}
        
        <View style={styles.bottomNav}>
          <TouchableOpacity
            style={[styles.navItem, activeTab === 'dashboard' && styles.navItemActive]}
            onPress={() => setActiveTab('dashboard')}
          >
            <Ionicons name="home" size={24} color={activeTab === 'dashboard' ? '#8b5cf6' : '#94a3b8'} />
            <Text style={[styles.navText, activeTab === 'dashboard' && styles.navTextActive]}>Главная</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.navItem, activeTab === 'games' && styles.navItemActive]}
            onPress={() => setActiveTab('games')}
          >
            <Ionicons name="game-controller" size={24} color={activeTab === 'games' ? '#8b5cf6' : '#94a3b8'} />
            <Text style={[styles.navText, activeTab === 'games' && styles.navTextActive]}>Игры</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.navItem, activeTab === 'nutrition' && styles.navItemActive]}
            onPress={() => setActiveTab('nutrition')}
          >
            <Ionicons name="nutrition" size={24} color={activeTab === 'nutrition' ? '#8b5cf6' : '#94a3b8'} />
            <Text style={[styles.navText, activeTab === 'nutrition' && styles.navTextActive]}>Питание</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.navItem, activeTab === 'workouts' && styles.navItemActive]}
            onPress={() => setActiveTab('workouts')}
          >
            <Ionicons name="fitness" size={24} color={activeTab === 'workouts' ? '#8b5cf6' : '#94a3b8'} />
            <Text style={[styles.navText, activeTab === 'workouts' && styles.navTextActive]}>Тренировки</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.navItem, activeTab === 'health' && styles.navItemActive]}
            onPress={() => setActiveTab('health')}
          >
            <Ionicons name="medical" size={24} color={activeTab === 'health' ? '#8b5cf6' : '#94a3b8'} />
            <Text style={[styles.navText, activeTab === 'health' && styles.navTextActive]}>Здоровье</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  header: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f8fafc',
    marginBottom: 20,
  },
  stats: {
    flexDirection: 'row',
    gap: 30,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8b5cf6',
  },
  statLabel: {
    fontSize: 14,
    color: '#94a3b8',
    marginTop: 4,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#f8fafc',
    marginBottom: 15,
  },
  card: {
    backgroundColor: 'rgba(30, 41, 59, 0.8)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.2)',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f8fafc',
    marginBottom: 4,
  },
  cardValue: {
    fontSize: 14,
    color: '#10b981',
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  actionBtn: {
    backgroundColor: 'rgba(30, 41, 59, 0.8)',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    width: (width - 60) / 2,
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.2)',
  },
  actionIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  actionText: {
    fontSize: 14,
    color: '#f8fafc',
    fontWeight: '500',
  },
  gamesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  gameCard: {
    backgroundColor: 'rgba(30, 41, 59, 0.8)',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    width: (width - 60) / 2,
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.2)',
  },
  gameIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  gameName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#f8fafc',
    textAlign: 'center',
    marginBottom: 4,
  },
  gameReward: {
    fontSize: 12,
    color: '#10b981',
    fontWeight: '600',
  },
  tournamentCard: {
    backgroundColor: 'rgba(30, 41, 59, 0.8)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.2)',
  },
  tournamentName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f8fafc',
    marginBottom: 8,
  },
  tournamentPrize: {
    fontSize: 14,
    color: '#f59e0b',
    fontWeight: '600',
    marginBottom: 8,
  },
  tournamentInfo: {
    fontSize: 12,
    color: '#94a3b8',
    marginBottom: 12,
  },
  joinBtn: {
    backgroundColor: '#8b5cf6',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  joinBtnText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  cameraBtn: {
    backgroundColor: 'rgba(30, 41, 59, 0.8)',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.2)',
  },
  cameraIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  cameraText: {
    fontSize: 16,
    color: '#f8fafc',
    fontWeight: '500',
  },
  recipeCard: {
    backgroundColor: 'rgba(30, 41, 59, 0.8)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.2)',
  },
  recipeName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f8fafc',
    marginBottom: 4,
  },
  recipeCalories: {
    fontSize: 14,
    color: '#10b981',
    marginBottom: 4,
  },
  recipeTime: {
    fontSize: 12,
    color: '#94a3b8',
  },
  calendarCard: {
    backgroundColor: 'rgba(30, 41, 59, 0.8)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.2)',
  },
  calendarDate: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f8fafc',
    marginBottom: 8,
  },
  calendarWorkout: {
    fontSize: 14,
    color: '#8b5cf6',
    marginBottom: 4,
  },
  calendarTime: {
    fontSize: 12,
    color: '#94a3b8',
  },
  programCard: {
    backgroundColor: 'rgba(30, 41, 59, 0.8)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.2)',
  },
  programName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f8fafc',
    marginBottom: 4,
  },
  programProgress: {
    fontSize: 14,
    color: '#10b981',
  },
  healthStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#10b981',
  },
  healthIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  healthText: {
    fontSize: 14,
    color: '#10b981',
    fontWeight: '500',
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  metricCard: {
    backgroundColor: 'rgba(30, 41, 59, 0.8)',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    width: (width - 60) / 2,
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.2)',
  },
  metricIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  metricName: {
    fontSize: 12,
    color: '#94a3b8',
    marginBottom: 4,
  },
  metricValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f8fafc',
  },
  deviceCard: {
    backgroundColor: 'rgba(30, 41, 59, 0.8)',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.2)',
  },
  deviceIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  deviceInfo: {
    flex: 1,
  },
  deviceName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f8fafc',
    marginBottom: 4,
  },
  deviceStatus: {
    fontSize: 14,
    color: '#10b981',
  },
  syncBtn: {
    backgroundColor: '#8b5cf6',
    borderRadius: 8,
    padding: 8,
  },
  syncBtnText: {
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: 'rgba(15, 23, 42, 0.95)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(148, 163, 184, 0.2)',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  navItemActive: {
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    borderRadius: 8,
  },
  navText: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 4,
  },
  navTextActive: {
    color: '#8b5cf6',
    fontWeight: '600',
  },
});