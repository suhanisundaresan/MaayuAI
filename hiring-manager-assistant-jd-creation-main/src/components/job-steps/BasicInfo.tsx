
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const BasicInfo = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Job Title</Label>
        <Input id="title" placeholder="e.g. Senior Frontend Developer" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="department">Department</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="engineering">Engineering</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="product">Product</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <Label>Experience Level</Label>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="entry" />
            <label htmlFor="entry" className="text-sm">Entry Level (0-2 years)</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="mid" />
            <label htmlFor="mid" className="text-sm">Mid Level (3-5 years)</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="senior" />
            <label htmlFor="senior" className="text-sm">Senior (5-8 years)</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="lead" />
            <label htmlFor="lead" className="text-sm">Lead (8+ years)</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="principal" />
            <label htmlFor="principal" className="text-sm">Principal (10+ years)</label>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Label>Work Authorization</Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="us-citizen" />
            <label htmlFor="us-citizen" className="text-sm">US Citizens Only</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="green-card" />
            <label htmlFor="green-card" className="text-sm">US Citizens & Permanent Residents</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="h1b" />
            <label htmlFor="h1b" className="text-sm">Will Sponsor H1B</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="any" />
            <label htmlFor="any" className="text-sm">All Candidates Welcome</label>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Label>Employment Type</Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="full-time" />
            <label htmlFor="full-time" className="text-sm">Full-time</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="part-time" />
            <label htmlFor="part-time" className="text-sm">Part-time</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="contract" />
            <label htmlFor="contract" className="text-sm">Contract</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="internship" />
            <label htmlFor="internship" className="text-sm">Internship</label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input id="location" placeholder="e.g. New York, NY or Remote" />
      </div>
    </div>
  );
};

export default BasicInfo;

