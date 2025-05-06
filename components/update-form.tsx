"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

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
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Test Results</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="rank">Your Rank</Label>
              <Input
                id="rank"
                name="rank"
                type="number"
                min="1"
                value={formData.rank}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="percentile">Percentile</Label>
              <Input
                id="percentile"
                name="percentile"
                type="number"
                min="0"
                max="100"
                value={formData.percentile}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="correctAnswers">Correct Answers (out of {formData.totalQuestions})</Label>
            <Input
              id="correctAnswers"
              name="correctAnswers"
              type="number"
              min="0"
              max={formData.totalQuestions}
              value={formData.correctAnswers}
              onChange={handleChange}
              required
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
