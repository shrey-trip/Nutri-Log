import { AddFoodModal } from "../add-food-modal";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AddFoodModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <AddFoodModal 
        open={open}
        onClose={() => setOpen(false)}
        onSave={(food) => console.log("Save food", food)}
        sectionId="breakfast"
        sectionName="Breakfast"
        currentDate="2025-01-15"
      />
    </div>
  );
}
