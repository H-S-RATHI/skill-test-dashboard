"use client"

import { useEffect, useState } from "react"

interface CircularProgressProps {
  value: number
  maxValue: number
  size?: number
  strokeWidth?: number
  color?: string
}

export default function CircularProgress({
  value,
  maxValue,
  size = 160,
  strokeWidth = 16,
  color = "#3b82f6",
}: CircularProgressProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div style={{ width: size, height: size }}></div>
  }

  // Calculate the percentage
  const percentage = (value / maxValue) * 100

  // Calculate the radius
  const radius = (size - strokeWidth) / 2

  // Calculate the circumference
  const circumference = radius * 2 * Math.PI

  // Calculate the stroke dash offset
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Background circle */}
      <svg width={size} height={size} className="transform -rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="transparent" stroke="#e5e7eb" strokeWidth={strokeWidth} />

        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      {/* Target icon in the center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-red-100"></div>
          <div className="w-6 h-6 rounded-full bg-red-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-2 h-2 rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute -right-1 -top-1">
            <div className="w-3 h-3 transform rotate-45">
              <div className="w-3 h-0.5 bg-teal-500 absolute top-1/2 transform -translate-y-1/2"></div>
              <div className="h-3 w-0.5 bg-teal-500 absolute left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
