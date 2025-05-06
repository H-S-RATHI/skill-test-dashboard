"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import SkillTestSidebar from "@/components/skill-test-sidebar"
import ComparisonGraph from "@/components/comparison-graph"
import CircularProgress from "@/components/circular-progress"
import UserProfile from "@/components/user-profile"
import UpdateForm from "@/components/update-form"

export default function Dashboard() {
  const [testData, setTestData] = useState({
    rank: 1,
    percentile: 30,
    correctAnswers: 12,
    totalQuestions: 15,
  })

  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false)

  const handleUpdate = (newData: any) => {
    setTestData(newData)
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <SkillTestSidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Navigation Bar */}
        <div className="h-16 border-b bg-white flex items-center justify-between px-6">
          <h1 className="text-xl font-medium">Skill Test</h1>
          <UserProfile name="Rahil Siddique" />
        </div>

        <div className="p-6 lg:p-8">
          {/* Test Info Card */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex-shrink-0">
                    <Image src="/html5-logo.png" alt="HTML5 Logo" width={48} height={48} />
                  </div>
                  <div>
                    <h2 className="text-lg font-medium">Hyper Text Markup Language</h2>
                    <p className="text-sm text-gray-500">
                      Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                    </p>
                  </div>
                </div>
                <button
                  className="mt-4 md:mt-0 bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors"
                  onClick={() => setIsUpdateFormOpen(true)}
                >
                  Update
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Statistics and Analysis Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Statistics and Graph */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Statistics */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-medium">Quick Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <span className="text-yellow-500 text-2xl">🏆</span>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{testData.rank}</p>
                        <p className="text-sm text-gray-500">YOUR RANK</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <span className="text-gray-500 text-2xl">📋</span>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{testData.percentile}%</p>
                        <p className="text-sm text-gray-500">PERCENTILE</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <span className="text-green-500 text-2xl">✅</span>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">
                          {testData.correctAnswers} / {testData.totalQuestions}
                        </p>
                        <p className="text-sm text-gray-500">CORRECT ANSWERS</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comparison Graph */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-medium">Comparison Graph</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm">
                      <span className="font-medium">You scored {testData.percentile}% percentile</span> which is lower
                      than the average percentile 72% of all the engineers who took this assessment
                    </p>
                  </div>
                  <div className="h-64">
                    <ComparisonGraph />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Syllabus and Question Analysis */}
            <div className="space-y-6">
              {/* Syllabus Wise Analysis */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-medium">Syllabus Wise Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">HTML Tools, Forms, History</span>
                      <span className="text-sm font-medium text-blue-600">80%</span>
                    </div>
                    <Progress value={80} className="h-2 bg-blue-100" indicatorClassName="bg-blue-600" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Tags & References in HTML</span>
                      <span className="text-sm font-medium text-orange-500">60%</span>
                    </div>
                    <Progress value={60} className="h-2 bg-orange-100" indicatorClassName="bg-orange-500" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Tables & References in HTML</span>
                      <span className="text-sm font-medium text-red-500">24%</span>
                    </div>
                    <Progress value={24} className="h-2 bg-red-100" indicatorClassName="bg-red-500" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Tables & CSS Basics</span>
                      <span className="text-sm font-medium text-green-500">96%</span>
                    </div>
                    <Progress value={96} className="h-2 bg-green-100" indicatorClassName="bg-green-500" />
                  </div>
                </CardContent>
              </Card>

              {/* Question Analysis */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg font-medium">Question Analysis</CardTitle>
                  <span className="text-blue-600 font-medium">
                    {testData.correctAnswers}/{testData.totalQuestions}
                  </span>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-6">
                    <span className="font-medium">
                      You scored {testData.correctAnswers} question correct out of {testData.totalQuestions}.
                    </span>{" "}
                    However it still needs some improvements
                  </p>
                  <div className="flex justify-center">
                    <CircularProgress value={testData.correctAnswers} maxValue={testData.totalQuestions} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Update Form Modal */}
      <UpdateForm
        isOpen={isUpdateFormOpen}
        onClose={() => setIsUpdateFormOpen(false)}
        initialData={testData}
        onUpdate={handleUpdate}
      />
    </div>
  )
}
