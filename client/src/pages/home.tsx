import { useState, useEffect } from "react";
import { format, addDays, subDays } from "date-fns";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { DailySummary } from "@/components/daily-summary";
import { DateNavigator } from "@/components/date-navigator";
import { MealSection } from "@/components/meal-section";
import { AddFoodModal } from "@/components/add-food-modal";
import { CalorieGoalModal } from "@/components/calorie-goal-modal";
import { EditSectionModal } from "@/components/edit-section-modal";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { FoodEntry, MealSection as MealSectionType, InsertFoodEntry, UserSettings } from "@shared/schema";

const STORAGE_KEYS = {
  FOOD_ENTRIES: "foodLogger_entries",
  MEAL_SECTIONS: "foodLogger_sections",
  SETTINGS: "foodLogger_settings",
};

const DEFAULT_SECTIONS: MealSectionType[] = [
  { id: "breakfast", name: "Breakfast", order: 0 },
  { id: "lunch", name: "Lunch", order: 1 },
  { id: "dinner", name: "Dinner", order: 2 },
  { id: "snacks", name: "Snacks", order: 3 },
];

export default function Home() {
  const { toast } = useToast();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [foodEntries, setFoodEntries] = useState<FoodEntry[]>([]);
  const [mealSections, setMealSections] = useState<MealSectionType[]>(DEFAULT_SECTIONS);
  const [settings, setSettings] = useState<UserSettings>({ dailyCalorieGoal: 2000 });
  
  const [addFoodModalOpen, setAddFoodModalOpen] = useState(false);
  const [calorieGoalModalOpen, setCalorieGoalModalOpen] = useState(false);
  const [editSectionModalOpen, setEditSectionModalOpen] = useState(false);
  const [selectedSectionId, setSelectedSectionId] = useState<string>("");
  const [editingEntry, setEditingEntry] = useState<FoodEntry | null>(null);
  const [editingSection, setEditingSection] = useState<MealSectionType | null>(null);

  useEffect(() => {
    const savedEntries = localStorage.getItem(STORAGE_KEYS.FOOD_ENTRIES);
    const savedSections = localStorage.getItem(STORAGE_KEYS.MEAL_SECTIONS);
    const savedSettings = localStorage.getItem(STORAGE_KEYS.SETTINGS);

    if (savedEntries) setFoodEntries(JSON.parse(savedEntries));
    if (savedSections) setMealSections(JSON.parse(savedSections));
    if (savedSettings) setSettings(JSON.parse(savedSettings));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.FOOD_ENTRIES, JSON.stringify(foodEntries));
  }, [foodEntries]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MEAL_SECTIONS, JSON.stringify(mealSections));
  }, [mealSections]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  }, [settings]);

  const dateString = format(currentDate, "yyyy-MM-dd");
  const todayEntries = foodEntries.filter((entry) => entry.date === dateString);

  const dailyTotals = todayEntries.reduce(
    (acc, entry) => ({
      calories: acc.calories + entry.calories,
      protein: acc.protein + entry.protein,
      carbs: acc.carbs + entry.carbs,
      fats: acc.fats + entry.fats,
    }),
    { calories: 0, protein: 0, carbs: 0, fats: 0 }
  );

  const handleAddFood = (sectionId: string) => {
    setSelectedSectionId(sectionId);
    setEditingEntry(null);
    setAddFoodModalOpen(true);
  };

  const handleEditFood = (entry: FoodEntry) => {
    setEditingEntry(entry);
    setSelectedSectionId(entry.mealSection);
    setAddFoodModalOpen(true);
  };

  const handleSaveFood = (food: InsertFoodEntry) => {
    if (editingEntry) {
      setFoodEntries(
        foodEntries.map((entry) =>
          entry.id === editingEntry.id ? { ...food, id: entry.id } : entry
        )
      );
      toast({ title: "Food updated successfully" });
    } else {
      const newEntry: FoodEntry = {
        ...food,
        id: Date.now().toString(),
      };
      setFoodEntries([...foodEntries, newEntry]);
      toast({ title: "Food added successfully" });
    }
  };

  const handleDeleteFood = (id: string) => {
    setFoodEntries(foodEntries.filter((entry) => entry.id !== id));
    toast({ title: "Food deleted" });
  };

  const handleEditSection = (section: MealSectionType) => {
    setEditingSection(section);
    setEditSectionModalOpen(true);
  };

  const handleSaveSection = (section: MealSectionType) => {
    setMealSections(
      mealSections.map((s) => (s.id === section.id ? section : s))
    );
    toast({ title: "Section updated" });
  };

  const handleDeleteSection = (sectionId: string) => {
    setMealSections(mealSections.filter((s) => s.id !== sectionId));
    setFoodEntries(foodEntries.filter((e) => e.mealSection !== sectionId));
    toast({ title: "Section deleted" });
  };

  const handleAddSection = () => {
    const newSection: MealSectionType = {
      id: `section-${Date.now()}`,
      name: "New Meal",
      order: mealSections.length,
    };
    setMealSections([...mealSections, newSection]);
    toast({ title: "Section added" });
  };

  const handleSaveCalorieGoal = (goal: number) => {
    setSettings({ ...settings, dailyCalorieGoal: goal });
    toast({ title: "Calorie goal updated" });
  };

  const handleExportData = () => {
    const data = {
      entries: foodEntries,
      sections: mealSections,
      settings,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `food-logger-data-${format(new Date(), "yyyy-MM-dd")}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast({ title: "Data exported successfully" });
  };

  const handleImportData = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const data = JSON.parse(e.target?.result as string);
            if (data.entries) setFoodEntries(data.entries);
            if (data.sections) setMealSections(data.sections);
            if (data.settings) setSettings(data.settings);
            toast({ title: "Data imported successfully" });
          } catch (error) {
            toast({ title: "Error importing data", variant: "destructive" });
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  const sidebarStyle = {
    "--sidebar-width": "20rem",
    "--sidebar-width-icon": "4rem",
  };

  const selectedSection = mealSections.find((s) => s.id === selectedSectionId);

  return (
    <SidebarProvider style={sidebarStyle as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AppSidebar 
          onImportData={handleImportData}
          onExportData={handleExportData}
          onSetCalorieGoal={() => setCalorieGoalModalOpen(true)}
        />
        
        <div className="flex flex-col flex-1 min-w-0">
          <header className="flex items-center justify-between gap-4 p-4 border-b shrink-0">
            <SidebarTrigger data-testid="button-sidebar-toggle" />
            <ThemeToggle />
          </header>

          <main className="flex-1 overflow-y-auto">
            <div className="max-w-4xl mx-auto p-6 space-y-6">
              <DailySummary
                totalCalories={dailyTotals.calories}
                totalProtein={dailyTotals.protein}
                totalCarbs={dailyTotals.carbs}
                totalFats={dailyTotals.fats}
                calorieGoal={settings.dailyCalorieGoal}
              />

              <DateNavigator
                currentDate={currentDate}
                onPreviousDay={() => setCurrentDate(subDays(currentDate, 1))}
                onNextDay={() => setCurrentDate(addDays(currentDate, 1))}
                onToday={() => setCurrentDate(new Date())}
              />

              <div className="space-y-6">
                {mealSections
                  .sort((a, b) => a.order - b.order)
                  .map((section) => (
                    <MealSection
                      key={section.id}
                      section={section}
                      entries={todayEntries.filter((e) => e.mealSection === section.id)}
                      onAddFood={handleAddFood}
                      onEditFood={handleEditFood}
                      onDeleteFood={handleDeleteFood}
                      onEditSection={handleEditSection}
                    />
                  ))}
              </div>

              <Button 
                variant="outline" 
                onClick={handleAddSection}
                data-testid="button-add-section"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Meal Section
              </Button>
            </div>
          </main>
        </div>
      </div>

      <AddFoodModal
        open={addFoodModalOpen}
        onClose={() => setAddFoodModalOpen(false)}
        onSave={handleSaveFood}
        sectionId={selectedSectionId}
        sectionName={selectedSection?.name || ""}
        editingEntry={editingEntry}
        currentDate={dateString}
      />

      <CalorieGoalModal
        open={calorieGoalModalOpen}
        onClose={() => setCalorieGoalModalOpen(false)}
        onSave={handleSaveCalorieGoal}
        currentGoal={settings.dailyCalorieGoal}
      />

      <EditSectionModal
        open={editSectionModalOpen}
        onClose={() => setEditSectionModalOpen(false)}
        onSave={handleSaveSection}
        onDelete={handleDeleteSection}
        section={editingSection}
      />
    </SidebarProvider>
  );
}
