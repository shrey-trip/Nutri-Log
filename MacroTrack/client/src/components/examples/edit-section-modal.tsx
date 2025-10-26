import { EditSectionModal } from "../edit-section-modal";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { MealSection } from "@shared/schema";

export default function EditSectionModalExample() {
  const [open, setOpen] = useState(false);
  
  const section: MealSection = {
    id: "breakfast",
    name: "Breakfast",
    order: 0,
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Edit Section</Button>
      <EditSectionModal 
        open={open}
        onClose={() => setOpen(false)}
        onSave={(section) => console.log("Save section", section)}
        onDelete={(id) => console.log("Delete section", id)}
        section={section}
      />
    </div>
  );
}
