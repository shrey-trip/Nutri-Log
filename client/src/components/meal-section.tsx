import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Settings2, UtensilsCrossed } from "lucide-react";
import { FoodEntryCard } from "./food-entry-card";
import type { FoodEntry, MealSection as MealSectionType } from "@shared/schema";

interface MealSectionProps {
  section: MealSectionType;
  entries: FoodEntry[];
  onAddFood: (sectionId: string) => void;
  onEditFood: (entry: FoodEntry) => void;
  onDeleteFood: (id: string) => void;
  onEditSection: (section: MealSectionType) => void;
}

export function MealSection({ 
  section, 
  entries, 
  onAddFood, 
  onEditFood, 
  onDeleteFood,
  onEditSection 
}: MealSectionProps) {
  const sectionTotal = entries.reduce((acc, entry) => ({
    calories: acc.calories + entry.calories,
    protein: acc.protein + entry.protein,
    carbs: acc.carbs + entry.carbs,
    fats: acc.fats + entry.fats,
  }), { calories: 0, protein: 0, carbs: 0, fats: 0 });

  return (
    <div className="space-y-2" data-testid={`section-meal-${section.id}`}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold" data-testid={`text-section-name-${section.id}`}>
            {section.name}
          </h3>
          {entries.length > 0 && (
            <span className="text-sm text-muted-foreground font-mono">
              ({sectionTotal.calories} cal)
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => onEditSection(section)}
            data-testid={`button-edit-section-${section.id}`}
          >
            <Settings2 className="w-4 h-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onAddFood(section.id)}
            data-testid={`button-add-food-${section.id}`}
          >
            <Plus className="w-4 h-4 mr-1" />
            Add Food
          </Button>
        </div>
      </div>

      {entries.length === 0 ? (
        <Card className="p-8 text-center">
          <UtensilsCrossed className="w-12 h-12 mx-auto text-muted-foreground mb-2" />
          <p className="text-base text-muted-foreground" data-testid={`text-empty-${section.id}`}>
            No food logged yet
          </p>
        </Card>
      ) : (
        <div className="space-y-2">
          {entries.map((entry) => (
            <FoodEntryCard 
              key={entry.id}
              entry={entry}
              onEdit={onEditFood}
              onDelete={onDeleteFood}
            />
          ))}
        </div>
      )}
    </div>
  );
}
