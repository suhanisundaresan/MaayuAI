
import { Settings, User, LogOut } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white border-b px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img 
          src="/lovable-uploads/5eaac4f5-c21d-4508-ac86-3dbe3008c93f.png" 
          alt="Maayu Logo" 
          className="h-8"
        />
        <span className="text-xl font-semibold text-gray-900">Maayu AI</span>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <LogOut className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
