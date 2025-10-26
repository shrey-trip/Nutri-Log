import { z } from "zod";

export const foodEntrySchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Food name is required"),
  time: z.string(),
  ingredients: z.string(),
  calories: z.number().min(0),
  protein: z.number().min(0),
  carbs: z.number().min(0),
  fats: z.number().min(0),
  mealSection: z.string(),
  date: z.string(),
});

export const mealSectionSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Section name is required"),
  order: z.number(),
});

export const userSettingsSchema = z.object({
  dailyCalorieGoal: z.number().min(0),
});

export type FoodEntry = z.infer<typeof foodEntrySchema>;
export type InsertFoodEntry = Omit<FoodEntry, "id">;

export type MealSection = z.infer<typeof mealSectionSchema>;
export type InsertMealSection = Omit<MealSection, "id">;

export type UserSettings = z.infer<typeof userSettingsSchema>;
