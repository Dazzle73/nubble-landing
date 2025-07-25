'use client'

import { useEffect } from 'react'
import { onCLS, onINP, onFCP, onLCP, onTTFB, Metric } from 'web-vitals'

export default function WebVitals() {
  useEffect(() => {
    // Track Core Web Vitals
    onCLS((metric: Metric) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'CLS',
          value: Math.round(metric.value * 1000),
          custom_map: {
            metric_id: metric.id,
            metric_value: metric.value,
            metric_delta: metric.delta,
          },
        })
      }
    })

    onINP((metric: Metric) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'INP',
          value: Math.round(metric.value),
          custom_map: {
            metric_id: metric.id,
            metric_value: metric.value,
            metric_delta: metric.delta,
          },
        })
      }
    })

    onFCP((metric: Metric) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'FCP',
          value: Math.round(metric.value),
          custom_map: {
            metric_id: metric.id,
            metric_value: metric.value,
            metric_delta: metric.delta,
          },
        })
      }
    })

    onLCP((metric: Metric) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'LCP',
          value: Math.round(metric.value),
          custom_map: {
            metric_id: metric.id,
            metric_value: metric.value,
            metric_delta: metric.delta,
          },
        })
      }
    })

    onTTFB((metric: Metric) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'TTFB',
          value: Math.round(metric.value),
          custom_map: {
            metric_id: metric.id,
            metric_value: metric.value,
            metric_delta: metric.delta,
          },
        })
      }
    })
  }, [])

  return null // This component doesn't render anything
}
