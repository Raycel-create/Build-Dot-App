// Credit tracking system using localStorage

export interface CreditUsage {
  freeMessagesLeft: number;
  paidCredits: number;
  lastResetDate: string;
  totalMessagesToday: number;
}

const STORAGE_KEY = "ai_advisor_credits";
const FREE_MESSAGES_PER_DAY = 5;
const PAID_CREDITS_MESSAGES = 25;
const PAID_CREDITS_COST = 15;

export function getCreditUsage(): CreditUsage {
  if (typeof window === "undefined") {
    return {
      freeMessagesLeft: FREE_MESSAGES_PER_DAY,
      paidCredits: 0,
      lastResetDate: new Date().toDateString(),
      totalMessagesToday: 0,
    };
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return resetDailyCredits();
  }

  const usage: CreditUsage = JSON.parse(stored);

  // Check if we need to reset daily free messages
  const today = new Date().toDateString();
  if (usage.lastResetDate !== today) {
    return resetDailyCredits(usage.paidCredits);
  }

  return usage;
}

export function resetDailyCredits(paidCredits: number = 0): CreditUsage {
  const usage: CreditUsage = {
    freeMessagesLeft: FREE_MESSAGES_PER_DAY,
    paidCredits,
    lastResetDate: new Date().toDateString(),
    totalMessagesToday: 0,
  };

  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(usage));
  }

  return usage;
}

export function useMessage(): { success: boolean; usage: CreditUsage } {
  const usage = getCreditUsage();

  // Try to use free message first
  if (usage.freeMessagesLeft > 0) {
    usage.freeMessagesLeft--;
    usage.totalMessagesToday++;
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(usage));
    }
    return { success: true, usage };
  }

  // Try to use paid credits
  if (usage.paidCredits > 0) {
    usage.paidCredits--;
    usage.totalMessagesToday++;
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(usage));
    }
    return { success: true, usage };
  }

  // No credits available
  return { success: false, usage };
}

export function addPaidCredits(amount: number = PAID_CREDITS_MESSAGES): CreditUsage {
  const usage = getCreditUsage();
  usage.paidCredits += amount;

  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(usage));
  }

  return usage;
}

export function getCreditsInfo() {
  return {
    FREE_MESSAGES_PER_DAY,
    PAID_CREDITS_MESSAGES,
    PAID_CREDITS_COST,
  };
}
