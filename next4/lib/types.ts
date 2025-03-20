// Define the interface for conversation history items
export interface HistoryItem {
  // Role can be either "user" or "model"
  role: "user" | "model";
  // Parts can contain text and/or images
  parts: HistoryPart[];
}

// Define the interface for history parts
export interface HistoryPart {
  // Text content (optional)
  text?: string;
  // Image content as data URL (optional)
  // Format: data:image/png;base64,... or data:image/jpeg;base64,...
  image?: string;
}

// Subscription types
export type PlanType = "free" | "basic" | "pro" | "enterprise";

export interface Subscription {
  id: string;
  userId: string;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  planType: PlanType;
  status: "active" | "canceled" | "past_due";
  currentPeriodEnd?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface GenerationUsage {
  id: string;
  userId: string;
  subscriptionId: string;
  count: number;
  periodStart: Date;
  periodEnd: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface SubscriptionLimits {
  free: number;
  basic: number;
  pro: number;
  enterprise: number;
}