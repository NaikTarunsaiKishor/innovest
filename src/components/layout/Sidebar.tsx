
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Rocket, 
  Network, 
  BookOpen, 
  MessageSquare, 
  BarChart2, 
  Settings,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export const AppSidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { 
      icon: LayoutDashboard, 
      label: 'Dashboard', 
      path: '/dashboard',
    },
    { 
      icon: Rocket, 
      label: 'Startups', 
      path: '/startups',
    },
    { 
      icon: Network, 
      label: 'Network', 
      path: '/network',
    },
    { 
      icon: BookOpen, 
      label: 'Learning Hub', 
      path: '/learning-hub',
    },
    { 
      icon: MessageSquare, 
      label: 'Messages', 
      path: '/messages',
    },
    { 
      icon: BarChart2, 
      label: 'Analytics', 
      path: '/analytics',
    },
    { 
      icon: Settings, 
      label: 'Settings', 
      path: '/settings',
    },
  ];

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sidebar>
      <SidebarHeader className="p-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-innovest-teal to-innovest-orange"></div>
          {!collapsed && <span className="font-poppins font-bold text-xl">InnoVest</span>}
        </Link>
        <button 
          onClick={toggleCollapsed} 
          className="p-1 rounded-md hover:bg-muted transition-colors"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location.pathname === item.path}
                  >
                    <Link to={item.path} className="flex items-center gap-3">
                      <item.icon size={20} />
                      {!collapsed && <span>{item.label}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
            <span className="text-xs font-medium">UI</span>
          </div>
          {!collapsed && <span>User Interface</span>}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};
