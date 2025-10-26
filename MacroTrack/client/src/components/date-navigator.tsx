import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

interface DateNavigatorProps {
  currentDate: Date;
  onPreviousDay: () => void;
  onNextDay: () => void;
  onToday: () => void;
}

export function DateNavigator({ 
  currentDate, 
  onPreviousDay, 
  onNextDay, 
  onToday 
}: DateNavigatorProps) {
  const isToday = format(new Date(), "yyyy-MM-dd") === format(currentDate, "yyyy-MM-dd");

  return (
    <div className="flex items-center justify-between gap-4" data-testid="container-date-navigator">
      <Button 
        variant="outline" 
        size="icon" 
        onClick={onPreviousDay}
        data-testid="button-previous-day"
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
      
      <div className="flex items-center gap-2">
        <div className="text-lg font-semibold" data-testid="text-current-date">
          {format(currentDate, "EEEE, MMMM d, yyyy")}
        </div>
        {!isToday && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onToday}
            data-testid="button-today"
          >
            Today
          </Button>
        )}
      </div>
      
      <Button 
        variant="outline" 
        size="icon" 
        onClick={onNextDay}
        data-testid="button-next-day"
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
