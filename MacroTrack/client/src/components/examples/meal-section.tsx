import { MealSection } from "../meal-section";
import type { FoodEntry, MealSection as MealSectionType } from "@shared/schema";

export default function MealSectionExample() {
  const section: MealSectionType = {
    id: "breakfast",
    name: "Breakfast",
    order: 0,
  };

  const entries: FoodEntry[] = [
    {
      id: "1",
      name: "Oatmeal with Berries",
      time: "8:00 AM",
      ingredients: "Oats, blueberries, strawberries, honey",
      calories: 250,
      protein: 8,
      carbs: 45,
      fats: 4,
      mealSection: "breakfast",
      date: "2025-01-15",
    },
    {
      id: "2",
      name: "Greek Yogurt",
      time: "8:15 AM",
      ingredients: "Greek yogurt, almonds",
      calories: 150,
      protein: 15,
      carbs: 12,
      fats: 6,
      mealSection: "breakfast",
      date: "2025-01-15",
    },
  ];

  return (
    <MealSection 
      section={section}
      entries={entries}
      onAddFood={(id) => console.log("Add food to", id)}
      onEditFood={(entry) => console.log("Edit", entry)}
      onDeleteFood={(id) => console.log("Delete", id)}
      onEditSection={(section) => console.log("Edit section", section)}
    />
  );
}
