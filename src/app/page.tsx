"use client"

import { useState, useEffect } from 'react'
import { 
  TrendingUp, 
  PiggyBank, 
  Target, 
  DollarSign, 
  Briefcase, 
  BookOpen, 
  Award, 
  Bell, 
  Settings, 
  Globe, 
  Crown,
  Plus,
  ArrowUp,
  ArrowDown,
  Calculator,
  FileText,
  Video,
  Star,
  Trophy,
  Zap,
  Shield,
  ChevronRight,
  BarChart3,
  Wallet,
  TrendingDown
} from 'lucide-react'

// Tipos de dados
interface FinancialData {
  totalIncome: number
  totalSavings: number
  totalInvestments: number
  monthlyGoal: number
  currentStreak: number
}

interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlocked: boolean
  progress: number
  maxProgress: number
}

interface IncomeIdea {
  id: string
  title: string
  category: string
  difficulty: 'Fácil' | 'Médio' | 'Difícil'
  potentialIncome: string
  description: string
  isPremium: boolean
}

interface Investment {
  id: string
  name: string
  type: 'Renda Fixa' | 'Renda Variável' | 'Fundos'
  risk: 'Baixo' | 'Médio' | 'Alto'
  expectedReturn: string
  description: string
  isPremium: boolean
}

export default function MoneyWay() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [language, setLanguage] = useState<'pt' | 'en'>('pt')
  const [isPremium, setIsPremium] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  // Dados financeiros simulados
  const [financialData, setFinancialData] = useState<FinancialData>({
    totalIncome: 5420.00,
    totalSavings: 2850.00,
    totalInvestments: 8750.00,
    monthlyGoal: 1000.00,
    currentStreak: 12
  })

  // Conquistas simuladas
  const achievements: Achievement[] = [
    {
      id: '1',
      title: language === 'pt' ? 'Primeiro Investimento' : 'First Investment',
      description: language === 'pt' ? 'Fez seu primeiro investimento' : 'Made your first investment',
      icon: '🎯',
      unlocked: true,
      progress: 1,
      maxProgress: 1
    },
    {
      id: '2',
      title: language === 'pt' ? 'Poupador Consistente' : 'Consistent Saver',
      description: language === 'pt' ? 'Poupou por 30 dias seguidos' : 'Saved for 30 consecutive days',
      icon: '💰',
      unlocked: false,
      progress: 12,
      maxProgress: 30
    },
    {
      id: '3',
      title: language === 'pt' ? 'Investidor Experiente' : 'Experienced Investor',
      description: language === 'pt' ? 'Diversificou em 5 tipos de investimento' : 'Diversified into 5 investment types',
      icon: '📈',
      unlocked: false,
      progress: 2,
      maxProgress: 5
    }
  ]

  // Ideias de renda extra
  const incomeIdeas: IncomeIdea[] = [
    {
      id: '1',
      title: language === 'pt' ? 'Freelance de Design' : 'Design Freelancing',
      category: language === 'pt' ? 'Criativo' : 'Creative',
      difficulty: 'Médio',
      potentialIncome: 'R$ 500-2000/mês',
      description: language === 'pt' ? 'Crie logos, banners e materiais visuais para empresas' : 'Create logos, banners and visual materials for companies',
      isPremium: false
    },
    {
      id: '2',
      title: language === 'pt' ? 'Consultoria Online' : 'Online Consulting',
      category: language === 'pt' ? 'Consultoria' : 'Consulting',
      difficulty: 'Difícil',
      potentialIncome: 'R$ 1000-5000/mês',
      description: language === 'pt' ? 'Ofereça consultoria na sua área de expertise' : 'Offer consulting in your area of expertise',
      isPremium: true
    },
    {
      id: '3',
      title: language === 'pt' ? 'Venda de Produtos Digitais' : 'Digital Products Sales',
      category: language === 'pt' ? 'Digital' : 'Digital',
      difficulty: 'Médio',
      potentialIncome: 'R$ 300-1500/mês',
      description: language === 'pt' ? 'Crie e venda cursos, ebooks ou templates' : 'Create and sell courses, ebooks or templates',
      isPremium: true
    },
    {
      id: '4',
      title: language === 'pt' ? 'Delivery de Comida' : 'Food Delivery',
      category: language === 'pt' ? 'Serviços' : 'Services',
      difficulty: 'Fácil',
      potentialIncome: 'R$ 800-1200/mês',
      description: language === 'pt' ? 'Trabalhe como entregador nos fins de semana' : 'Work as a delivery driver on weekends',
      isPremium: false
    }
  ]

  // Investimentos
  const investments: Investment[] = [
    {
      id: '1',
      name: 'Tesouro Direto',
      type: 'Renda Fixa',
      risk: 'Baixo',
      expectedReturn: '10-12% a.a.',
      description: language === 'pt' ? 'Investimento seguro garantido pelo governo' : 'Safe investment guaranteed by government',
      isPremium: false
    },
    {
      id: '2',
      name: 'Ações Blue Chips',
      type: 'Renda Variável',
      risk: 'Médio',
      expectedReturn: '12-18% a.a.',
      description: language === 'pt' ? 'Ações de empresas consolidadas no mercado' : 'Stocks from established market companies',
      isPremium: true
    },
    {
      id: '3',
      name: 'Fundos Imobiliários',
      type: 'Fundos',
      risk: 'Médio',
      expectedReturn: '8-15% a.a.',
      description: language === 'pt' ? 'Invista no mercado imobiliário sem comprar imóveis' : 'Invest in real estate market without buying properties',
      isPremium: true
    }
  ]

  // Textos multilíngue
  const texts = {
    pt: {
      appName: 'MoneyWay',
      dashboard: 'Painel',
      income: 'Renda Extra',
      savings: 'Poupança',
      investments: 'Investimentos',
      premium: 'Premium',
      settings: 'Configurações',
      totalIncome: 'Renda Total',
      totalSavings: 'Total Poupado',
      totalInvestments: 'Total Investido',
      monthlyGoal: 'Meta Mensal',
      currentStreak: 'Sequência Atual',
      days: 'dias',
      achievements: 'Conquistas',
      viewAll: 'Ver Todas',
      incomeIdeas: 'Ideias de Renda Extra',
      difficulty: 'Dificuldade',
      potential: 'Potencial',
      savingsGoals: 'Metas de Poupança',
      expenseControl: 'Controle de Gastos',
      organizationTips: 'Dicas de Organização',
      investmentTypes: 'Tipos de Investimento',
      simulations: 'Simulações',
      riskLevel: 'Nível de Risco',
      expectedReturn: 'Retorno Esperado',
      upgradeNow: 'Assinar Agora',
      premiumFeatures: 'Recursos Premium',
      advancedStrategies: 'Estratégias Avançadas',
      exclusiveSpreadsheets: 'Planilhas Exclusivas',
      financialCalculators: 'Calculadoras Financeiras',
      recordedMentoring: 'Mentorias Gravadas',
      notifications: 'Notificações',
      language: 'Idioma',
      portuguese: 'Português',
      english: 'English'
    },
    en: {
      appName: 'MoneyWay',
      dashboard: 'Dashboard',
      income: 'Extra Income',
      savings: 'Savings',
      investments: 'Investments',
      premium: 'Premium',
      settings: 'Settings',
      totalIncome: 'Total Income',
      totalSavings: 'Total Saved',
      totalInvestments: 'Total Invested',
      monthlyGoal: 'Monthly Goal',
      currentStreak: 'Current Streak',
      days: 'days',
      achievements: 'Achievements',
      viewAll: 'View All',
      incomeIdeas: 'Income Ideas',
      difficulty: 'Difficulty',
      potential: 'Potential',
      savingsGoals: 'Savings Goals',
      expenseControl: 'Expense Control',
      organizationTips: 'Organization Tips',
      investmentTypes: 'Investment Types',
      simulations: 'Simulations',
      riskLevel: 'Risk Level',
      expectedReturn: 'Expected Return',
      upgradeNow: 'Upgrade Now',
      premiumFeatures: 'Premium Features',
      advancedStrategies: 'Advanced Strategies',
      exclusiveSpreadsheets: 'Exclusive Spreadsheets',
      financialCalculators: 'Financial Calculators',
      recordedMentoring: 'Recorded Mentoring',
      notifications: 'Notifications',
      language: 'Language',
      portuguese: 'Português',
      english: 'English'
    }
  }

  const t = texts[language]

  // Componente de Card Financeiro
  const FinancialCard = ({ title, value, icon: Icon, trend, color }: {
    title: string
    value: string
    icon: any
    trend?: 'up' | 'down'
    color: string
  }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        {trend && (
          <div className={`flex items-center gap-1 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
            <span className="text-sm font-medium">
              {trend === 'up' ? '+12%' : '-5%'}
            </span>
          </div>
        )}
      </div>
      <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  )

  // Componente de Achievement Badge
  const AchievementBadge = ({ achievement }: { achievement: Achievement }) => (
    <div className={`p-4 rounded-xl border-2 transition-all duration-300 ${
      achievement.unlocked 
        ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200' 
        : 'bg-gray-50 border-gray-200'
    }`}>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{achievement.icon}</span>
        <div className="flex-1">
          <h4 className={`font-semibold ${achievement.unlocked ? 'text-yellow-800' : 'text-gray-600'}`}>
            {achievement.title}
          </h4>
          <p className="text-sm text-gray-500">{achievement.description}</p>
        </div>
        {achievement.unlocked && <Trophy className="w-5 h-5 text-yellow-600" />}
      </div>
      {!achievement.unlocked && (
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(achievement.progress / achievement.maxProgress) * 100}%` }}
          />
        </div>
      )}
    </div>
  )

  // Componente de Ideia de Renda
  const IncomeIdeaCard = ({ idea }: { idea: IncomeIdea }) => (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 relative">
      {idea.isPremium && !isPremium && (
        <div className="absolute top-3 right-3">
          <Crown className="w-5 h-5 text-yellow-500" />
        </div>
      )}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
            {idea.category}
          </span>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            idea.difficulty === 'Fácil' ? 'bg-green-100 text-green-800' :
            idea.difficulty === 'Médio' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {idea.difficulty}
          </span>
        </div>
        <h3 className="font-semibold text-gray-900 mb-1">{idea.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{idea.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-green-600 font-semibold">{idea.potentialIncome}</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  )

  // Componente de Investimento
  const InvestmentCard = ({ investment }: { investment: Investment }) => (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 relative">
      {investment.isPremium && !isPremium && (
        <div className="absolute top-3 right-3">
          <Crown className="w-5 h-5 text-yellow-500" />
        </div>
      )}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
            {investment.type}
          </span>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            investment.risk === 'Baixo' ? 'bg-green-100 text-green-800' :
            investment.risk === 'Médio' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {t.riskLevel}: {investment.risk}
          </span>
        </div>
        <h3 className="font-semibold text-gray-900 mb-1">{investment.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{investment.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-green-600 font-semibold">{investment.expectedReturn}</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  )

  // Renderização do Dashboard
  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Cards Financeiros */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <FinancialCard
          title={t.totalIncome}
          value={`R$ ${financialData.totalIncome.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
          icon={DollarSign}
          trend="up"
          color="bg-gradient-to-r from-green-500 to-emerald-600"
        />
        <FinancialCard
          title={t.totalSavings}
          value={`R$ ${financialData.totalSavings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
          icon={PiggyBank}
          trend="up"
          color="bg-gradient-to-r from-blue-500 to-cyan-600"
        />
        <FinancialCard
          title={t.totalInvestments}
          value={`R$ ${financialData.totalInvestments.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
          icon={TrendingUp}
          trend="up"
          color="bg-gradient-to-r from-purple-500 to-indigo-600"
        />
        <FinancialCard
          title={t.currentStreak}
          value={`${financialData.currentStreak} ${t.days}`}
          icon={Zap}
          color="bg-gradient-to-r from-orange-500 to-red-600"
        />
      </div>

      {/* Meta Mensal */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">{t.monthlyGoal}</h2>
          <Target className="w-6 h-6 text-blue-600" />
        </div>
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>R$ {financialData.totalSavings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            <span>R$ {financialData.monthlyGoal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${Math.min((financialData.totalSavings / financialData.monthlyGoal) * 100, 100)}%` }}
            />
          </div>
        </div>
        <p className="text-sm text-gray-600">
          {Math.round((financialData.totalSavings / financialData.monthlyGoal) * 100)}% da meta alcançada
        </p>
      </div>

      {/* Conquistas */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">{t.achievements}</h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
            {t.viewAll}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement) => (
            <AchievementBadge key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>
    </div>
  )

  // Renderização do módulo de Renda Extra
  const renderIncome = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">{t.incomeIdeas}</h2>
        <p className="text-green-100">
          {language === 'pt' 
            ? 'Descubra maneiras práticas de aumentar sua renda mensal'
            : 'Discover practical ways to increase your monthly income'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {incomeIdeas.map((idea) => (
          <IncomeIdeaCard key={idea.id} idea={idea} />
        ))}
      </div>

      {!isPremium && (
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Crown className="w-8 h-8 text-yellow-600" />
            <div>
              <h3 className="text-lg font-bold text-yellow-800">Conteúdo Premium</h3>
              <p className="text-yellow-700">Desbloqueie estratégias avançadas e ideias exclusivas</p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
            {t.upgradeNow}
          </button>
        </div>
      )}
    </div>
  )

  // Renderização do módulo de Poupança
  const renderSavings = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">{t.savings}</h2>
        <p className="text-blue-100">
          {language === 'pt' 
            ? 'Organize suas finanças e alcance suas metas de poupança'
            : 'Organize your finances and reach your savings goals'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
          <Target className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.savingsGoals}</h3>
          <p className="text-gray-600 text-sm mb-4">
            {language === 'pt' 
              ? 'Defina metas claras e acompanhe seu progresso'
              : 'Set clear goals and track your progress'
            }
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1">
            {language === 'pt' ? 'Criar Meta' : 'Create Goal'}
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
          <BarChart3 className="w-8 h-8 text-green-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.expenseControl}</h3>
          <p className="text-gray-600 text-sm mb-4">
            {language === 'pt' 
              ? 'Monitore seus gastos e identifique oportunidades de economia'
              : 'Monitor your expenses and identify saving opportunities'
            }
          </p>
          <button className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-1">
            {language === 'pt' ? 'Ver Gastos' : 'View Expenses'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
          <BookOpen className="w-8 h-8 text-purple-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.organizationTips}</h3>
          <p className="text-gray-600 text-sm mb-4">
            {language === 'pt' 
              ? 'Dicas práticas para organizar sua vida financeira'
              : 'Practical tips to organize your financial life'
            }
          </p>
          <button className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center gap-1">
            {language === 'pt' ? 'Ver Dicas' : 'View Tips'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Simulador de Poupança */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {language === 'pt' ? 'Simulador de Poupança' : 'Savings Simulator'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'pt' ? 'Valor Mensal (R$)' : 'Monthly Amount (R$)'}
            </label>
            <input 
              type="number" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'pt' ? 'Período (meses)' : 'Period (months)'}
            </label>
            <input 
              type="number" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="12"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'pt' ? 'Taxa de Juros (% a.a.)' : 'Interest Rate (% p.a.)'}
            </label>
            <input 
              type="number" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="10"
            />
          </div>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
          <Calculator className="w-5 h-5 inline mr-2" />
          {language === 'pt' ? 'Calcular' : 'Calculate'}
        </button>
      </div>
    </div>
  )

  // Renderização do módulo de Investimentos
  const renderInvestments = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">{t.investments}</h2>
        <p className="text-purple-100">
          {language === 'pt' 
            ? 'Aprenda a investir de forma inteligente e consistente'
            : 'Learn to invest intelligently and consistently'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {investments.map((investment) => (
          <InvestmentCard key={investment.id} investment={investment} />
        ))}
      </div>

      {/* Simulador de Investimentos */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {language === 'pt' ? 'Simulador de Investimentos' : 'Investment Simulator'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'pt' ? 'Valor Inicial (R$)' : 'Initial Amount (R$)'}
            </label>
            <input 
              type="number" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="1000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'pt' ? 'Aporte Mensal (R$)' : 'Monthly Contribution (R$)'}
            </label>
            <input 
              type="number" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'pt' ? 'Período (anos)' : 'Period (years)'}
            </label>
            <input 
              type="number" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="5"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'pt' ? 'Rentabilidade (% a.a.)' : 'Return Rate (% p.a.)'}
            </label>
            <input 
              type="number" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="12"
            />
          </div>
        </div>
        <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
          <Calculator className="w-5 h-5 inline mr-2" />
          {language === 'pt' ? 'Simular' : 'Simulate'}
        </button>
      </div>

      {!isPremium && (
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Crown className="w-8 h-8 text-purple-600" />
            <div>
              <h3 className="text-lg font-bold text-purple-800">
                {language === 'pt' ? 'Estratégias Avançadas' : 'Advanced Strategies'}
              </h3>
              <p className="text-purple-700">
                {language === 'pt' 
                  ? 'Acesse análises detalhadas e estratégias de investimento profissionais'
                  : 'Access detailed analysis and professional investment strategies'
                }
              </p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
            {t.upgradeNow}
          </button>
        </div>
      )}
    </div>
  )

  // Renderização do Premium
  const renderPremium = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white text-center">
        <Crown className="w-16 h-16 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-2">MoneyWay Premium</h2>
        <p className="text-yellow-100 text-lg">
          {language === 'pt' 
            ? 'Desbloqueie todo o potencial da sua jornada financeira'
            : 'Unlock the full potential of your financial journey'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{t.advancedStrategies}</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            {language === 'pt' 
              ? 'Estratégias avançadas de investimento e geração de renda utilizadas por especialistas'
              : 'Advanced investment and income generation strategies used by experts'
            }
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              {language === 'pt' ? 'Análise de mercado semanal' : 'Weekly market analysis'}
            </li>
            <li className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              {language === 'pt' ? 'Estratégias de diversificação' : 'Diversification strategies'}
            </li>
            <li className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              {language === 'pt' ? 'Técnicas de análise fundamentalista' : 'Fundamental analysis techniques'}
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{t.exclusiveSpreadsheets}</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            {language === 'pt' 
              ? 'Planilhas profissionais para controle financeiro e planejamento de investimentos'
              : 'Professional spreadsheets for financial control and investment planning'
            }
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              {language === 'pt' ? 'Controle de gastos avançado' : 'Advanced expense tracking'}
            </li>
            <li className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              {language === 'pt' ? 'Planejamento de aposentadoria' : 'Retirement planning'}
            </li>
            <li className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              {language === 'pt' ? 'Calculadora de independência financeira' : 'Financial independence calculator'}
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Calculator className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{t.financialCalculators}</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            {language === 'pt' 
              ? 'Calculadoras avançadas para simulações precisas de investimentos e financiamentos'
              : 'Advanced calculators for precise investment and financing simulations'
            }
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              {language === 'pt' ? 'Simulador de juros compostos' : 'Compound interest simulator'}
            </li>
            <li className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              {language === 'pt' ? 'Calculadora de financiamentos' : 'Financing calculator'}
            </li>
            <li className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              {language === 'pt' ? 'Análise de risco/retorno' : 'Risk/return analysis'}
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-100 rounded-lg">
              <Video className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{t.recordedMentoring}</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            {language === 'pt' 
              ? 'Mentorias exclusivas com especialistas em finanças e investimentos'
              : 'Exclusive mentoring sessions with finance and investment experts'
            }
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              {language === 'pt' ? 'Sessões mensais ao vivo' : 'Monthly live sessions'}
            </li>
            <li className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              {language === 'pt' ? 'Q&A com especialistas' : 'Q&A with experts'}
            </li>
            <li className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              {language === 'pt' ? 'Casos de sucesso reais' : 'Real success stories'}
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {language === 'pt' ? 'Plano Premium' : 'Premium Plan'}
        </h3>
        <div className="text-4xl font-bold text-gray-900 mb-2">
          R$ 29,90<span className="text-lg font-normal text-gray-600">/mês</span>
        </div>
        <p className="text-gray-600 mb-6">
          {language === 'pt' 
            ? 'Cancele quando quiser. Sem compromisso.'
            : 'Cancel anytime. No commitment.'
          }
        </p>
        <button 
          onClick={() => setIsPremium(true)}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
        >
          {language === 'pt' ? 'Assinar Agora' : 'Subscribe Now'}
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">{t.appName}</h1>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Notificações */}
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors relative"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              
              {/* Idioma */}
              <button 
                onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Globe className="w-5 h-5" />
              </button>
              
              {/* Premium Badge */}
              {isPremium && (
                <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-medium rounded-full">
                  <Crown className="w-4 h-4" />
                  Premium
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Notificações Dropdown */}
      {showNotifications && (
        <div className="absolute top-16 right-4 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-900">{t.notifications}</h3>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="p-1 bg-blue-100 rounded-full">
                <Target className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {language === 'pt' ? 'Meta quase alcançada!' : 'Goal almost reached!'}
                </p>
                <p className="text-xs text-gray-600">
                  {language === 'pt' 
                    ? 'Você está a R$ 150 da sua meta mensal'
                    : 'You are R$ 150 away from your monthly goal'
                  }
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
              <div className="p-1 bg-green-100 rounded-full">
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {language === 'pt' ? 'Investimento rendeu!' : 'Investment earned!'}
                </p>
                <p className="text-xs text-gray-600">
                  {language === 'pt' 
                    ? 'Seus investimentos renderam R$ 45 hoje'
                    : 'Your investments earned R$ 45 today'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <nav className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
              <div className="space-y-2">
                {[
                  { id: 'dashboard', label: t.dashboard, icon: BarChart3 },
                  { id: 'income', label: t.income, icon: Briefcase },
                  { id: 'savings', label: t.savings, icon: PiggyBank },
                  { id: 'investments', label: t.investments, icon: TrendingUp },
                  { id: 'premium', label: t.premium, icon: Crown }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                    {item.id === 'premium' && !isPremium && (
                      <Crown className="w-4 h-4 text-yellow-500 ml-auto" />
                    )}
                  </button>
                ))}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'dashboard' && renderDashboard()}
            {activeTab === 'income' && renderIncome()}
            {activeTab === 'savings' && renderSavings()}
            {activeTab === 'investments' && renderInvestments()}
            {activeTab === 'premium' && renderPremium()}
          </div>
        </div>
      </div>
    </div>
  )
}