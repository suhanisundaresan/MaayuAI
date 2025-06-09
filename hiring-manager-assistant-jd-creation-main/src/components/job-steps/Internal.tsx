
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";

const Internal = () => {
  const [salaryRange, setSalaryRange] = useState<number[]>([80000, 150000]);
  const [industries, setIndustries] = useState<string[]>([
    "Healthcare",
    "Telecom",
    "Retail",
    "Technology"
  ]);
  const [newIndustry, setNewIndustry] = useState("");
  const [similarCompanies, setSimilarCompanies] = useState<string[]>([
    "Amazon",
    "Microsoft",
    "Google"
  ]);
  const [newCompany, setNewCompany] = useState("");
  const [recruiterNotes, setRecruiterNotes] = useState("");

  const addIndustry = () => {
    if (newIndustry && !industries.includes(newIndustry)) {
      setIndustries([...industries, newIndustry]);
      setNewIndustry("");
    }
  };

  const removeIndustry = (industry: string) => {
    setIndustries(industries.filter(i => i !== industry));
  };

  const addCompany = () => {
    if (newCompany && !similarCompanies.includes(newCompany)) {
      setSimilarCompanies([...similarCompanies, newCompany]);
      setNewCompany("");
    }
  };

  const removeCompany = (company: string) => {
    setSimilarCompanies(similarCompanies.filter(c => c !== company));
  };

  return (
    <div className="space-y-8">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Salary Range</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label className="text-base font-medium">Annual Salary Range</Label>
              <span className="text-sm text-muted-foreground">
                ${salaryRange[0].toLocaleString()} - ${salaryRange[1].toLocaleString()}
              </span>
            </div>
            <Slider
              defaultValue={salaryRange}
              max={300000}
              min={30000}
              step={5000}
              onValueChange={setSalaryRange}
              className="w-full"
            />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Industry Expertise</h3>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <Badge
                key={industry}
                variant="secondary"
                className="flex items-center gap-1 py-1 px-3"
              >
                {industry}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => removeIndustry(industry)}
                />
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Add industry..."
              value={newIndustry}
              onChange={(e) => setNewIndustry(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addIndustry()}
            />
            <Button onClick={addIndustry} size="sm">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Similar Companies</h3>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {similarCompanies.map((company) => (
              <Badge
                key={company}
                variant="secondary"
                className="flex items-center gap-1 py-1 px-3"
              >
                {company}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => removeCompany(company)}
                />
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Add company..."
              value={newCompany}
              onChange={(e) => setNewCompany(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addCompany()}
            />
            <Button onClick={addCompany} size="sm">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Recruiter Notes</h3>
        <Textarea
          placeholder="Add important notes for recruiters..."
          value={recruiterNotes}
          onChange={(e) => setRecruiterNotes(e.target.value)}
          className="min-h-[150px]"
        />
      </Card>
    </div>
  );
};

export default Internal;
