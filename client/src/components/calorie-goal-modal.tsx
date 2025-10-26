import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CalorieGoalModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (goal: number) => void;
  currentGoal: number;
}

export function CalorieGoalModal({ 
  open, 
  onClose, 
  onSave, 
  currentGoal 
}: CalorieGoalModalProps) {
  const [goal, setGoal] = useState(currentGoal.toString());

  const handleSave = () => {
    onSave(parseFloat(goal) || 0);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md" data-testid="modal-calorie-goal">
        <DialogHeader>
          <DialogTitle>Set Daily Calorie Goal</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="calorie-goal">Daily Calorie Target</Label>
            <Input
              id="calorie-goal"
              type="number"
              min="0"
              placeholder="2000"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              autoFocus
              data-testid="input-calorie-goal"
            />
            <p className="text-sm text-muted-foreground">
              Current goal: {currentGoal} calories/day
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose} data-testid="button-cancel-goal">
            Cancel
          </Button>
          <Button onClick={handleSave} data-testid="button-save-goal">
            Save Goal
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
