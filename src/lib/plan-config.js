/**
 * Plan Configuration
 * Centralized configuration for all subscription plan limits and features
 */

export const PLAN_LIMITS = {
  Basic: {
    name: "Basic",
    price: "Rs.3000.00",
    videosPerMonth: 3,
    videoRetentionDays: 30,
    smsAlertsPerMonth: 0,
    studentsLimit: null, // unlimited
    coursesLimit: null, // unlimited
    storageGB: 5,
    features: {
      basicStudentManagement: true,
      basicAssignments: true,
      emailSupport: true,
      zoomRecordingUpload: true,
      paymentManagement: false,
      smsAlerts: false,
      attendanceManagement: false,
      screenRecordingProtection: false,
      advancedAnalytics: false,
    },
    featureList: [
      "Up to 3 videos for a month",
      "Basic student management",
      "Basic assignment tools",
      "Email support",
      "Zoom recording upload",
      "Videos will delete after 30 days",
    ]
  },
  Pro: {
    name: "Pro",
    price: "Rs.5000.00",
    videosPerMonth: 5,
    videoRetentionDays: 90,
    smsAlertsPerMonth: 100,
    studentsLimit: null, // unlimited
    coursesLimit: null, // unlimited
    storageGB: 20,
    features: {
      basicStudentManagement: true,
      basicAssignments: true,
      emailSupport: true,
      zoomRecordingUpload: true,
      paymentManagement: true,
      smsAlerts: true,
      attendanceManagement: false,
      screenRecordingProtection: false,
      advancedAnalytics: true,
    },
    featureList: [
      "Up to 5 videos for a month",
      "Better student management",
      "Better assignment tools",
      "Email support",
      "Mobile SMS alerts (upto 100 per month)",
      "Student payment management",
      "Zoom recording upload",
      "Video deletion up to 3 months",
    ]
  },
  Max: {
    name: "Max",
    price: "Rs.10000.00",
    videosPerMonth: 10,
    videoRetentionDays: 365,
    smsAlertsPerMonth: -1, // -1 means unlimited
    studentsLimit: null, // unlimited
    coursesLimit: null, // unlimited
    storageGB: 100,
    features: {
      basicStudentManagement: true,
      basicAssignments: true,
      emailSupport: true,
      zoomRecordingUpload: true,
      paymentManagement: true,
      smsAlerts: true,
      attendanceManagement: true,
      screenRecordingProtection: true,
      advancedAnalytics: true,
    },
    featureList: [
      "Up to 10 videos for a month",
      "Advanced student management",
      "Advanced assignment tools",
      "Email support",
      "Mobile SMS alerts (Unlimited)",
      "Student payment management",
      "Student attendance management",
      "Zoom recording upload",
      "Video deletion up to 1 year",
      "Screen recording protection",
      "Advanced security features",
    ]
  }
};

/**
 * Check if a plan has a specific feature
 * @param {string} planName - Name of the plan (Basic, Pro, Max)
 * @param {string} featureName - Name of the feature to check
 * @returns {boolean}
 */
export function hasFeature(planName, featureName) {
  const plan = PLAN_LIMITS[planName];
  if (!plan) return false;
  return plan.features[featureName] === true;
}

/**
 * Get remaining limit for a resource
 * @param {string} planName - Name of the plan
 * @param {string} resourceType - Type of resource (videos, sms)
 * @param {number} currentUsage - Current usage count
 * @returns {number} - Remaining count (-1 for unlimited)
 */
export function getRemainingLimit(planName, resourceType, currentUsage) {
  const plan = PLAN_LIMITS[planName];
  if (!plan) return 0;

  let limit;
  if (resourceType === 'videos') {
    limit = plan.videosPerMonth;
  } else if (resourceType === 'sms') {
    limit = plan.smsAlertsPerMonth;
  } else {
    return 0;
  }

  if (limit === -1) return -1; // unlimited
  return Math.max(0, limit - currentUsage);
}

/**
 * Check if limit is reached
 * @param {string} planName - Name of the plan
 * @param {string} resourceType - Type of resource
 * @param {number} currentUsage - Current usage count
 * @returns {boolean}
 */
export function isLimitReached(planName, resourceType, currentUsage) {
  const remaining = getRemainingLimit(planName, resourceType, currentUsage);
  if (remaining === -1) return false; // unlimited
  return remaining <= 0;
}

/**
 * Get usage percentage
 * @param {string} planName - Name of the plan
 * @param {string} resourceType - Type of resource
 * @param {number} currentUsage - Current usage count
 * @returns {number} - Percentage (0-100)
 */
export function getUsagePercentage(planName, resourceType, currentUsage) {
  const plan = PLAN_LIMITS[planName];
  if (!plan) return 0;

  let limit;
  if (resourceType === 'videos') {
    limit = plan.videosPerMonth;
  } else if (resourceType === 'sms') {
    limit = plan.smsAlertsPerMonth;
  } else {
    return 0;
  }

  if (limit === -1) return 0; // unlimited, show 0%
  if (limit === 0) return 100; // no allowance, show 100%

  return Math.min(100, Math.round((currentUsage / limit) * 100));
}

export default PLAN_LIMITS;
