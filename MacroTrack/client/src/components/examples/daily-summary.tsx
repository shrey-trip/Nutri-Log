import { DailySummary } from "../daily-summary";

export default function DailySummaryExample() {
  return (
    <DailySummary 
      totalCalories={1450}
      totalProtein={85}
      totalCarbs={120}
      totalFats={45}
      calorieGoal={2000}
    />
  );
}
