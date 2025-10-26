import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { MealSection } from "@shared/schema";

interface EditSectionModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (section: MealSection) => void;
  onDelete?: (sectionId: string) => void;
  section: MealSection | null;
}

export function EditSectionModal({ 
  open, 
  onClose, 
  onSave, 
  onDelete,
  section 
}: EditSectionModalProps) {
  const [name, setName] = useState(section?.name || "");

  const handleSave = () => {
    if (section) {
      onSave({ ...section, name });
      onClose();
    }
  };

  const handleDelete = () => {
    if (section && onDelete) {
      onDelete(section.id);
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md" data-testid="modal-edit-section">
        <DialogHeader>
          <DialogTitle>Edit Meal Section</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="section-name">Section Name</Label>
            <Input
              id="section-name"
              placeholder="e.g., Breakfast, Lunch, Snacks"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
              data-testid="input-section-name"
            />
          </div>
        </div>

        <div className="flex justify-between">
          {onDelete && (
            <Button 
              variant="destructive" 
              onClick={handleDelete}
              data-testid="button-delete-section"
            >
              Delete Section
            </Button>
          )}
          <div className="flex gap-2 ml-auto">
            <Button variant="outline" onClick={onClose} data-testid="button-cancel-section">
              Cancel
            </Button>
            <Button onClick={handleSave} data-testid="button-save-section">
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
