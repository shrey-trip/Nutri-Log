import { Calendar, Settings, Download, Upload, Target } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

interface AppSidebarProps {
  onImportData?: () => void;
  onExportData?: () => void;
  onSetCalorieGoal?: () => void;
}

export function AppSidebar({ onImportData, onExportData, onSetCalorieGoal }: AppSidebarProps) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className="px-4 py-6">
            <h1 className="text-xl font-bold text-sidebar-foreground">Food Logger</h1>
            <p className="text-sm text-muted-foreground mt-1">Track your nutrition</p>
          </div>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" data-testid="link-daily-log">
                    <Calendar />
                    <span>Daily Log</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarFooter>
          <div className="p-4 space-y-2">
            <Button 
              variant="outline" 
              className="w-full justify-start" 
              onClick={onSetCalorieGoal}
              data-testid="button-calorie-goal"
            >
              <Target className="w-4 h-4 mr-2" />
              Calorie Goal
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start" 
              onClick={onImportData}
              data-testid="button-import"
            >
              <Upload className="w-4 h-4 mr-2" />
              Import Data
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start" 
              onClick={onExportData}
              data-testid="button-export"
            >
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
          </div>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
