
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Description = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="prefix">About the Company</Label>
        <Textarea 
          id="prefix" 
          placeholder="Write about your company, culture, and work environment..."
          className="min-h-[100px]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="summary">Job Summary</Label>
        <Textarea 
          id="summary" 
          placeholder="Write a brief overview of the role..."
          className="min-h-[100px]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="responsibilities">Key Responsibilities</Label>
        <Textarea 
          id="responsibilities" 
          placeholder="List the main responsibilities..."
          className="min-h-[150px]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="benefits">Benefits & Perks</Label>
        <Textarea 
          id="benefits" 
          placeholder="Describe the benefits package..."
          className="min-h-[100px]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="suffix">Equal Employment Statement</Label>
        <Textarea 
          id="suffix" 
          placeholder="Include your company's equal employment opportunity statement..."
          className="min-h-[100px]"
        />
      </div>
    </div>
  );
};

export default Description;
