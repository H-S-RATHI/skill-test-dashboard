"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

interface UpdateFormProps {
  isOpen: boolean
  onClose: () => void
  initialData: {
    rank: number
    percentile: number
    correctAnswers: number
    totalQuestions: number
  }
  onUpdate: (data: any) => void
}

export default function UpdateForm({ isOpen, onClose, initialData, onUpdate }: UpdateFormProps) {
  const [formData, setFormData] = useState(initialData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: name === "rank" || name === "percentile" || name === "correctAnswers" ? Number.parseInt(value) : value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onUpdate(formData)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-gray-50 border-0">
        <DialogHeader className="h-14 bg-white border-b flex items-center px-6">
          <DialogTitle className="text-lg font-medium mt-1">Update Test Results</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <Card className="overflow-hidden">
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500 text-xl">🏆</span>
                    <Label htmlFor="rank" className="font-medium">Your Rank</Label>
                  </div>
                  <Input
                    id="rank"
                    name="rank"
                    type="number"
                    min="1"
                    value={formData.rank}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-xl">📋</span>
                    <Label htmlFor="percentile" className="font-medium">Percentile</Label>
                  </div>
                  <Input
                    id="percentile"
                    name="percentile"
                    type="number"
                    min="0"
                    max="100"
                   value={formData.percentile}
                     onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-green-500 text-xl">✅</span>
                  <Label htmlFor="correctAnswers" className="font-medium">
                    Correct Answers (out of {formData.totalQuestions})
                  </Label>
                </div>
                <Input
                  id="correctAnswers"
                  name="correctAnswers"
                  type="number"
                  min="0"
                  max={formData.totalQuestions}
                  value={formData.correctAnswers}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                />
              </div>
            </div>
          </Card>
          
          <div className="flex justify-end gap-3">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
