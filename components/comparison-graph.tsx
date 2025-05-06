"use client"

import { useEffect, useState } from "react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// Sample data for the graph
const data = [
  { name: "0", value: 10 },
  { name: "10", value: 20 },
  { name: "20", value: 30 },
  { name: "30", value: 45 },
  { name: "40", value: 60 },
  { name: "50", value: 80 },
  { name: "60", value: 100 },
  { name: "70", value: 90 },
  { name: "80", value: 70 },
  { name: "90", value: 40 },
  { name: "100", value: 20 },
]

// Custom tooltip component
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border rounded shadow-sm">
        <p className="text-sm font-medium">numberOfStudent : 4</p>
        <p className="text-sm text-gray-500">your percentile</p>
      </div>
    )
  }
  return null
}

export default function ComparisonGraph() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-64 flex items-center justify-center">Loading chart...</div>
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis hide />
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <Tooltip content={<CustomTooltip />} />
        <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorValue)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}
