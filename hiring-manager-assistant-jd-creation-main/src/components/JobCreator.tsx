
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ArrowRight, Award, Briefcase, ClipboardList, FileText, Settings, ShieldCheck, MessageSquare } from "lucide-react";
import BasicInfo from './job-steps/BasicInfo';
import JobTitles from './job-steps/JobTitles';
import Requirements from './job-steps/Requirements';
import TechnicalRequirements from './job-steps/TechnicalRequirements';
import Description from './job-steps/Description';
import Preview from './job-steps/Preview';
import PreQualification from './job-steps/PreQualification';
import Internal from './job-steps/Internal';
import Navbar from './Navbar';
import ChatBox from './ChatBox';

const JobCreator = () => {
  const [currentTab, setCurrentTab] = useState("job-titles");

  const steps = [
    { id: "job-titles", title: "Job Titles", icon: <Briefcase className="h-4 w-4 mr-2" /> },
    { id: "basic-info", title: "Basic Info", icon: <ClipboardList className="h-4 w-4 mr-2" /> },
    { id: "requirements", title: "Requirements", icon: <ShieldCheck className="h-4 w-4 mr-2" /> },
    { id: "description", title: "Description", icon: <MessageSquare className="h-4 w-4 mr-2" /> },
    { id: "internal", title: "Internal", icon: <Settings className="h-4 w-4 mr-2" /> },
    { id: "pre-qual", title: "Pre-Qualification", icon: <Award className="h-4 w-4 mr-2" /> },
    { id: "preview", title: "Preview", icon: <FileText className="h-4 w-4 mr-2" /> }
  ];

  const handleNext = () => {
    const currentIndex = steps.findIndex(step => step.id === currentTab);
    if (currentIndex < steps.length - 1) {
      setCurrentTab(steps[currentIndex + 1].id);
    }
  };

  const handleBack = () => {
    const currentIndex = steps.findIndex(step => step.id === currentTab);
    if (currentIndex > 0) {
      setCurrentTab(steps[currentIndex - 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Create New Job Posting</h1>
        
        <div className="flex gap-6">
          <div className="flex-1">
            <Card className="p-6">
              <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
                <TabsList className="grid grid-cols-7 w-full">
                  {steps.map((step) => (
                    <TabsTrigger
                      key={step.id}
                      value={step.id}
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      <span className="flex items-center">
                        {step.icon}
                        <span className="hidden sm:inline">{step.title}</span>
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              <div className="mt-8">
                {currentTab === "job-titles" && <JobTitles />}
                {currentTab === "basic-info" && <BasicInfo />}
                {currentTab === "requirements" && <Requirements />}
                {currentTab === "description" && <Description />}
                {currentTab === "preview" && <Preview />}
                {currentTab === "internal" && <Internal />}
                {currentTab === "pre-qual" && <PreQualification />}
              </div>

              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentTab === "job-titles"}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={currentTab === "preview"}
                >
                  {currentTab === "preview" ? "Publish" : "Next"} 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>

          <div className="w-80">
            <ChatBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCreator;
