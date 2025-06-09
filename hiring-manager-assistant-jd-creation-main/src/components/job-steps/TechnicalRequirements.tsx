
import { useState } from "react";
import { Card } from "@/components/ui/card";
import CompetencySlider from "../CompetencySlider";

interface Competency {
  label: string;
  value: number;
}

const TechnicalRequirements = () => {
  const [skills, setSkills] = useState<Competency[]>([
    { label: "Networking, security and protocols", value: 2 },
    { label: "Web Server", value: 5 },
    { label: "Infrastructure Monitoring", value: 1 },
    { label: "Logs Management", value: 7 },
    { label: "Cloud Design Patterns", value: 9 }
  ]);

  const [tools, setTools] = useState<Competency[]>([
    { label: "Docker", value: 8 },
    { label: "Kubernetes", value: 7 },
    { label: "Jenkins", value: 6 },
    { label: "Terraform", value: 8 }
  ]);

  const [environment, setEnvironment] = useState<Competency[]>([
    { label: "AWS", value: 9 },
    { label: "Azure", value: 7 },
    { label: "GCP", value: 5 }
  ]);

  const handleCompetencyChange = (
    section: Competency[],
    setSection: (value: Competency[]) => void,
    index: number,
    newValue: number[]
  ) => {
    const updated = [...section];
    updated[index] = { ...updated[index], value: newValue[0] };
    setSection(updated);
  };

  return (
    <div className="space-y-8">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <CompetencySlider
              key={skill.label}
              label={skill.label}
              value={skill.value}
              onChange={(value) => handleCompetencyChange(skills, setSkills, index, value)}
            />
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Tools & Technologies</h3>
        <div className="space-y-6">
          {tools.map((tool, index) => (
            <CompetencySlider
              key={tool.label}
              label={tool.label}
              value={tool.value}
              onChange={(value) => handleCompetencyChange(tools, setTools, index, value)}
            />
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Cloud Environment</h3>
        <div className="space-y-6">
          {environment.map((env, index) => (
            <CompetencySlider
              key={env.label}
              label={env.label}
              value={env.value}
              onChange={(value) => handleCompetencyChange(environment, setEnvironment, index, value)}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TechnicalRequirements;
