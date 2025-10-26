import { FoodEntryCard } from "../food-entry-card";
import type { FoodEntry } from "@shared/schema";

export default function FoodEntryCardExample() {
  const sampleEntry: FoodEntry = {
    id: "1",
    name: "Grilled Chicken Salad",
    time: "12:30 PM",
    ingredients: "Chicken breast, mixed greens, cherry tomatoes, olive oil",
    calories: 350,
    protein: 35,
    carbs: 15,
    fats: 18,
    mealSection: "lunch",
    date: "2025-01-15",
  };

  return (
    <FoodEntryCard 
      entry={sampleEntry}
      onEdit={(entry) => console.log("Edit", entry)}
      onDelete={(id) => console.log("Delete", id)}
    />
  );
}
