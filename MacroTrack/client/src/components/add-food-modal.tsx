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
import { Textarea } from "@/components/ui/textarea";
import type { FoodEntry, InsertFoodEntry } from "@shared/schema";

interface AddFoodModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (food: InsertFoodEntry) => void;
  sectionId: string;
  sectionName: string;
  editingEntry?: FoodEntry | null;
  currentDate: string;
}

export function AddFoodModal({ 
  open, 
  onClose, 
  onSave, 
  sectionId,
  sectionName,
  editingEntry,
  currentDate 
}: AddFoodModalProps) {
  const [name, setName] = useState(editingEntry?.name || "");
  const [time, setTime] = useState(editingEntry?.time || "");
  const [ingredients, setIngredients] = useState(editingEntry?.ingredients || "");
  const [calories, setCalories] = useState(editingEntry?.calories.toString() || "");
  const [protein, setProtein] = useState(editingEntry?.protein.toString() || "");
  const [carbs, setCarbs] = useState(editingEntry?.carbs.toString() || "");
  const [fats, setFats] = useState(editingEntry?.fats.toString() || "");

  const handleSave = () => {
    onSave({
      name,
      time,
      ingredients,
      calories: parseFloat(calories) || 0,
      protein: parseFloat(protein) || 0,
      carbs: parseFloat(carbs) || 0,
      fats: parseFloat(fats) || 0,
      mealSection: sectionId,
      date: currentDate,
    });
    handleClose();
  };

  const handleClose = () => {
    setName("");
    setTime("");
    setIngredients("");
    setCalories("");
    setProtein("");
    setCarbs("");
    setFats("");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="max-w-lg" data-testid="modal-add-food">
        <DialogHeader>
          <DialogTitle data-testid="text-modal-title">
            {editingEntry ? "Edit Food" : `Add Food to ${sectionName}`}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="food-name">Food Name</Label>
            <Input
              id="food-name"
              placeholder="e.g., Grilled Chicken Salad"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
              data-testid="input-food-name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="time">Time</Label>
            <Input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              data-testid="input-time"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ingredients">Ingredients</Label>
            <Textarea
              id="ingredients"
              placeholder="e.g., Chicken breast, mixed greens, olive oil"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows={3}
              data-testid="input-ingredients"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="calories">Calories</Label>
              <Input
                id="calories"
                type="number"
                min="0"
                placeholder="0"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                data-testid="input-calories"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="protein">Protein (g)</Label>
              <Input
                id="protein"
                type="number"
                min="0"
                step="0.1"
                placeholder="0"
                value={protein}
                onChange={(e) => setProtein(e.target.value)}
                data-testid="input-protein"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="carbs">Carbs (g)</Label>
              <Input
                id="carbs"
                type="number"
                min="0"
                step="0.1"
                placeholder="0"
                value={carbs}
                onChange={(e) => setCarbs(e.target.value)}
                data-testid="input-carbs"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fats">Fats (g)</Label>
              <Input
                id="fats"
                type="number"
                min="0"
                step="0.1"
                placeholder="0"
                value={fats}
                onChange={(e) => setFats(e.target.value)}
                data-testid="input-fats"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={handleClose} data-testid="button-cancel">
            Cancel
          </Button>
          <Button onClick={handleSave} data-testid="button-save-food">
            {editingEntry ? "Save Changes" : "Add Food"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
