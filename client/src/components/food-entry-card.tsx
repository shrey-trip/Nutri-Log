import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Clock } from "lucide-react";
import type { FoodEntry } from "@shared/schema";

interface FoodEntryCardProps {
  entry: FoodEntry;
  onEdit: (entry: FoodEntry) => void;
  onDelete: (id: string) => void;
}

export function FoodEntryCard({ entry, onEdit, onDelete }: FoodEntryCardProps) {
  return (
    <Card className="p-4 hover-elevate" data-testid={`card-food-entry-${entry.id}`}>
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h4 className="text-base font-medium truncate" data-testid={`text-food-name-${entry.id}`}>
              {entry.name}
            </h4>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <div className="flex items-center text-sm text-muted-foreground mr-2">
              <Clock className="w-3 h-3 mr-1" />
              <span data-testid={`text-food-time-${entry.id}`}>{entry.time}</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8"
              onClick={() => onEdit(entry)}
              data-testid={`button-edit-${entry.id}`}
            >
              <Pencil className="w-3 h-3" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8"
              onClick={() => onDelete(entry.id)}
              data-testid={`button-delete-${entry.id}`}
            >
              <Trash2 className="w-3 h-3" />
            </Button>
          </div>
        </div>

        {entry.ingredients && (
          <p className="text-sm text-muted-foreground italic" data-testid={`text-ingredients-${entry.id}`}>
            {entry.ingredients}
          </p>
        )}

        <div className="flex flex-wrap gap-2 pt-1">
          <span className="text-xs font-mono font-medium" data-testid={`text-calories-${entry.id}`}>
            {entry.calories} cal
          </span>
          <span className="text-muted-foreground">•</span>
          <span className="text-xs font-mono" data-testid={`text-protein-${entry.id}`}>
            {entry.protein}g protein
          </span>
          <span className="text-muted-foreground">•</span>
          <span className="text-xs font-mono" data-testid={`text-carbs-${entry.id}`}>
            {entry.carbs}g carbs
          </span>
          <span className="text-muted-foreground">•</span>
          <span className="text-xs font-mono" data-testid={`text-fats-${entry.id}`}>
            {entry.fats}g fat
          </span>
        </div>
      </div>
    </Card>
  );
}
