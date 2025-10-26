import { CalorieGoalModal } from "../calorie-goal-modal";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CalorieGoalModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Set Calorie Goal</Button>
      <CalorieGoalModal 
        open={open}
        onClose={() => setOpen(false)}
        onSave={(goal) => console.log("New goal:", goal)}
        currentGoal={2000}
      />
    </div>
  );
}
