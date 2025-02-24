import { balanceHistory } from '@/composition/data/balance-history'
import { expenseStatistics } from '@/composition/data/expense-statistics'
import { cards } from '@/composition/data/payment-cards'
import { profiles } from '@/composition/data/profile'
import { recentTransactions } from '@/composition/data/recent-transactions'
import { transferContacts } from '@/composition/data/transfer-contacts'
import { weeklyActivities } from '@/composition/data/weekly-activity'
import { sleep } from '@/lib/utils'

export async function getBalanceHistory() {
  return balanceHistory
}

export async function getExpenseStatistics() {
  return expenseStatistics
}

export async function getPaymentCards() {
  return cards
}

export async function getProfiles() {
  return profiles
}

export async function getProfileById(id: number) {
  await sleep(3000)
  const profile = profiles[id - 1]
  if (!profile) throw new Error('User not found!')
  return profile
}

export async function getRecentTransactions() {
  return recentTransactions
}

export async function getQuickTransferContacts() {
  return transferContacts
}

export async function getWeeklyActivity() {
  return weeklyActivities
}

export async function getOverviewForUser(userId: number) {
  await sleep(3000)
  return {
    balanceHistory,
    expenseStatistics,
    cards,
    profile: profiles[userId - 1],
    recentTransactions,
    transferContacts,
    weeklyActivities,
  }
}
