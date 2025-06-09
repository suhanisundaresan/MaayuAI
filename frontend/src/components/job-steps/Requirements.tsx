
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Plus } from "lucide-react";
import CompetencySlider from "../CompetencySlider";

interface Skill {
  label: string;
  value: number;
  years: string;
}

const Requirements = () => {
  const [skills, setSkills] = useState<Skill[]>([
    { label: "Networking, security and protocols", value: 2, years: "8" },
    { label: "Web Server", value: 5, years: "6" },
    { label: "Infrastructure Monitoring", value: 1, years: "2" },
    { label: "Logs Management", value: 7, years: "8" },
    { label: "Cloud Design Patterns", value: 9, years: "8" }
  ]);
  
  const [editingSkill, setEditingSkill] = useState<string | null>(null);
  const [newSkillInput, setNewSkillInput] = useState("");
  
  const handleCompetencyChange = (index: number, value: number[]) => {
    const updated = [...skills];
    updated[index] = { ...updated[index], value: value[0] };
    setSkills(updated);
  };
  
  const handleYearsChange = (index: number, years: string) => {
    const updated = [...skills];
    updated[index] = { ...updated[index], years };
    setSkills(updated);
  };
  
  const handleEditSkill = (index: number, newLabel: string) => {
    const updated = [...skills];
    updated[index] = { ...updated[index], label: newLabel };
    setSkills(updated);
    setEditingSkill(null);
  };
  
  const handleDeleteSkill = (index: number) => {
    const updated = [...skills];
    updated.splice(index, 1);
    setSkills(updated);
  };
  
  const handleAddSkill = () => {
    if (newSkillInput.trim()) {
      setSkills([...skills, { label: newSkillInput, value: 5, years: "1" }]);
      setNewSkillInput("");
    }
  };

  return (
    <div className="space-y-8">
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Technical Skills</h3>
          <Button onClick={() => setNewSkillInput("")} variant="default" className="flex items-center gap-1">
            <Plus className="h-4 w-4" /> Add Skill
          </Button>
        </div>

        {newSkillInput !== "" && (
          <div className="mb-4 flex items-center gap-2">
            <Input 
              value={newSkillInput} 
              onChange={(e) => setNewSkillInput(e.target.value)} 
              placeholder="Enter skill name"
              className="flex-1"
            />
            <Button onClick={handleAddSkill} variant="outline">Add</Button>
            <Button onClick={() => setNewSkillInput("")} variant="outline">Cancel</Button>
          </div>
        )}

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={`${skill.label}-${index}`} className="space-y-2 pb-4 border-b border-gray-100">
              <div className="flex justify-between items-center">
                {editingSkill === skill.label ? (
                  <div className="flex items-center gap-2 flex-1">
                    <Input 
                      defaultValue={skill.label} 
                      onBlur={(e) => handleEditSkill(index, e.target.value)}
                      autoFocus
                    />
                  </div>
                ) : (
                  <Label className="text-base font-medium flex items-center">
                    {skill.label}
                    <button 
                      onClick={() => setEditingSkill(skill.label)} 
                      className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                  </Label>
                )}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Input 
                      type="text"
                      value={skill.years}
                      onChange={(e) => handleYearsChange(index, e.target.value)}
                      className="w-24 text-center"
                    />
                    <span className="text-sm text-gray-600">Years</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.value}/10</span>
                  <button 
                    onClick={() => handleDeleteSkill(index)} 
                    className="text-gray-500 hover:text-red-500"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <CompetencySlider
                label=""
                value={skill.value}
                onChange={(value) => handleCompetencyChange(index, value)}
              />
            </div>
          ))}
        </div>
      </Card>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="education">Education Requirements</Label>
          <Textarea 
            id="education" 
            placeholder="Describe the education requirements..."
            className="min-h-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Requirements;
