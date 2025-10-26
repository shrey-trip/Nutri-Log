import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface DailySummaryProps {
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFats: number;
  calorieGoal: number;
}

export function DailySummary({ 
  totalCalories, 
  totalProtein, 
  totalCarbs, 
  totalFats, 
  calorieGoal 
}: DailySummaryProps) {
  const percentageConsumed = calorieGoal > 0 ? Math.min((totalCalories / calorieGoal) * 100, 100) : 0;
  const remaining = Math.max(calorieGoal - totalCalories, 0);

  return (
    <Card className="p-6" data-testid="card-daily-summary">
      <div className="space-y-4">
        <div>
          <div className="flex items-baseline justify-between mb-2">
            <div>
              <span className="text-3xl font-bold font-mono" data-testid="text-total-calories">
                {totalCalories}
              </span>
              <span className="text-sm text-muted-foreground ml-2">
                / {calorieGoal} cal
              </span>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Remaining</div>
              <div className="text-lg font-semibold font-mono" data-testid="text-remaining-calories">
                {remaining}
              </div>
            </div>
          </div>
          <Progress value={percentageConsumed} className="h-2" data-testid="progress-calories" />
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t">
          <div>
            <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
              Protein
            </div>
            <div className="text-lg font-semibold font-mono" data-testid="text-total-protein">
              {totalProtein}
              <span className="text-sm text-muted-foreground ml-1">g</span>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
              Carbs
            </div>
            <div className="text-lg font-semibold font-mono" data-testid="text-total-carbs">
              {totalCarbs}
              <span className="text-sm text-muted-foreground ml-1">g</span>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
              Fats
            </div>
            <div className="text-lg font-semibold font-mono" data-testid="text-total-fats">
              {totalFats}
              <span className="text-sm text-muted-foreground ml-1">g</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
