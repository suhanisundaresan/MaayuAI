
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";

const JobTitles = () => {
  const [selectedTitle, setSelectedTitle] = useState("");

  const recommendedTitles = [
    {
      title: "Senior Full Stack Developer",
      description: "Lead development across entire application stack",
      seoScore: 92
    },
    {
      title: "Software Engineering Team Lead",
      description: "Technical leadership and hands-on development",
      seoScore: 89
    },
    {
      title: "Principal Software Architect",
      description: "Strategic technical direction and system design",
      seoScore: 87
    }
  ];

  const sampleDescriptions = [
    {
      id: "sample1",
      title: "Dynamic Tech Leader",
      content: "We're seeking an experienced technical leader to drive innovation..."
    },
    {
      id: "sample2",
      title: "Engineering Excellence",
      content: "Join our team to architect and build scalable solutions..."
    },
    {
      id: "sample3",
      title: "Startup Focused",
      content: "Be part of a fast-paced environment shaping the future..."
    }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Recommended Job Titles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recommendedTitles.map((title) => (
            <Card 
              key={title.title}
              className={`p-4 cursor-pointer hover:border-purple-400 transition-colors ${
                selectedTitle === title.title ? 'border-purple-500' : ''
              }`}
              onClick={() => setSelectedTitle(title.title)}
            >
              <div className="flex items-center gap-2 mb-2">
                <Award className="h-5 w-5 text-purple-500" />
                <span className="font-medium">{title.title}</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{title.description}</p>
              <div className="text-sm text-purple-600">SEO Score: {title.seoScore}</div>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sample Descriptions</h3>
        <Tabs defaultValue="sample1" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            {sampleDescriptions.map((sample) => (
              <TabsTrigger key={sample.id} value={sample.id}>
                {sample.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {sampleDescriptions.map((sample) => (
            <TabsContent key={sample.id} value={sample.id} className="mt-4">
              <Card className="p-4">
                <p className="text-sm text-gray-600">{sample.content}</p>
                <Button className="mt-4" onClick={() => console.log(`Selected ${sample.id}`)}>
                  Use This Template
                </Button>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default JobTitles;
