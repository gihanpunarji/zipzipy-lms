"use client";

import { useState, useEffect } from 'react';
import { useAuth } from '@/app/components/auth-provider';
import { supabase } from '@/lib/supabase';
import { PLAN_LIMITS, getRemainingLimit, isLimitReached, getUsagePercentage, hasFeature } from '@/lib/plan-config';


export function usePlanLimits() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [planInfo, setPlanInfo] = useState(null);
  const [usage, setUsage] = useState({
    videosUploaded: 0,
    smsSent: 0,
    storageUsed: 0,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPlanAndUsage() {
      if (!user?.id) {
        setLoading(false);
        return;
      }

      try {
        // Fetch user id from users table
        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('id')
          .eq('uid', user.id)
          .single();

        if (userError) {
          console.error("Error fetching user:", userError);
          setError(userError.message);
          setLoading(false);
          return;
        }

        // Fetch plan info
        const { data: planData, error: planError } = await supabase
          .from('teacher_plan')
          .select('*')
          .eq('id', userData.id)
          .single();

        if (planError) {
          console.error("Error fetching plan:", planError);
          setError(planError.message);
        } else {
          setPlanInfo(planData);

          // Fetch current month's usage
          const now = new Date();
          const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

          const { data: usageData, error: usageError } = await supabase
            .from('teacher_usage')
            .select('*')
            .eq('teacher_id', userData.id)
            .eq('month', currentMonth)
            .single();

          if (usageError && usageError.code !== 'PGRST116') {
            // PGRST116 means no rows found, which is fine for first month
            console.error("Error fetching usage:", usageError);
          } else if (usageData) {
            setUsage({
              videosUploaded: usageData.videos_uploaded || 0,
              smsSent: usageData.sms_sent || 0,
              storageUsed: usageData.storage_used || 0,
            });
          }
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPlanAndUsage();
  }, [user]);

  // Helper functions
  const getPlanConfig = () => {
    if (!planInfo?.selected_plan) return null;
    return PLAN_LIMITS[planInfo.selected_plan];
  };

  const canUploadVideo = () => {
    if (!planInfo?.selected_plan) return false;
    return !isLimitReached(planInfo.selected_plan, 'videos', usage.videosUploaded);
  };

  const canSendSMS = () => {
    if (!planInfo?.selected_plan) return false;
    return !isLimitReached(planInfo.selected_plan, 'sms', usage.smsSent);
  };

  const getRemainingVideos = () => {
    if (!planInfo?.selected_plan) return 0;
    return getRemainingLimit(planInfo.selected_plan, 'videos', usage.videosUploaded);
  };

  const getRemainingSMS = () => {
    if (!planInfo?.selected_plan) return 0;
    return getRemainingLimit(planInfo.selected_plan, 'sms', usage.smsSent);
  };

  const getVideoUsagePercentage = () => {
    if (!planInfo?.selected_plan) return 0;
    return getUsagePercentage(planInfo.selected_plan, 'videos', usage.videosUploaded);
  };

  const getSMSUsagePercentage = () => {
    if (!planInfo?.selected_plan) return 0;
    return getUsagePercentage(planInfo.selected_plan, 'sms', usage.smsSent);
  };

  const hasAccessToFeature = (featureName) => {
    if (!planInfo?.selected_plan) return false;
    return hasFeature(planInfo.selected_plan, featureName);
  };

  const isTrialActive = () => {
    if (!planInfo?.created_at) return false;
    const trialEndDate = new Date(planInfo.created_at);
    trialEndDate.setDate(trialEndDate.getDate() + 7);
    return new Date() < trialEndDate;
  };

  const getTrialDaysRemaining = () => {
    if (!planInfo?.created_at) return 0;
    const trialEndDate = new Date(planInfo.created_at);
    trialEndDate.setDate(trialEndDate.getDate() + 7);
    const timeDiff = trialEndDate - new Date();
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysLeft > 0 ? daysLeft : 0;
  };

  return {
    loading,
    error,
    planInfo,
    planConfig: getPlanConfig(),
    usage,
    canUploadVideo: canUploadVideo(),
    canSendSMS: canSendSMS(),
    remainingVideos: getRemainingVideos(),
    remainingSMS: getRemainingSMS(),
    videoUsagePercentage: getVideoUsagePercentage(),
    smsUsagePercentage: getSMSUsagePercentage(),
    hasAccessToFeature,
    isTrialActive: isTrialActive(),
    trialDaysRemaining: getTrialDaysRemaining(),
  };
}
