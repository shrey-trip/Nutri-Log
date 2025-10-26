import { DateNavigator } from "../date-navigator";
import { useState } from "react";
import { addDays, subDays } from "date-fns";

export default function DateNavigatorExample() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <DateNavigator 
      currentDate={currentDate}
      onPreviousDay={() => setCurrentDate(subDays(currentDate, 1))}
      onNextDay={() => setCurrentDate(addDays(currentDate, 1))}
      onToday={() => setCurrentDate(new Date())}
    />
  );
}
