
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, FilePen } from "lucide-react";
import JobTitles from './JobTitles';
import BasicInfo from './BasicInfo';
import TechnicalRequirements from './TechnicalRequirements';
import Description from './Description';
import Internal from './Internal';
import PreQualification from './PreQualification';

const Preview = () => {
  const [activeTab, setActiveTab] = useState("preview");
  
  return (
    <div className="space-y-8">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="preview">
            <FileText className="h-4 w-4 mr-2" /> Preview
          </TabsTrigger>
          <TabsTrigger value="edit">
            <FilePen className="h-4 w-4 mr-2" /> Edit All Sections
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="preview">
          <Card className="p-6">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900">Senior Frontend Developer</h2>
              <div className="flex gap-4 text-sm text-gray-600 my-4">
                <span>Engineering</span>
                <span>•</span>
                <span>New York, NY</span>
                <span>•</span>
                <span>Full-time</span>
              </div>
              
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-semibold text-gray-900">About the Company</h3>
                  <p className="text-gray-600">
                    Company information will appear here...
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900">About the Role</h3>
                  <p className="text-gray-600">
                    Job summary will appear here...
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900">Requirements</h3>
                  <p className="text-gray-600">
                    Technical requirements will appear here...
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900">Benefits</h3>
                  <p className="text-gray-600">
                    Benefits will appear here...
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-900">Equal Employment Opportunity</h3>
                  <p className="text-gray-600">
                    Equal employment statement will appear here...
                  </p>
                </section>
              </div>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="edit" className="space-y-8">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Job Titles</h3>
            <JobTitles />
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Basic Info</h3>
            <BasicInfo />
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Technical Requirements</h3>
            <TechnicalRequirements />
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Description</h3>
            <Description />
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Internal</h3>
            <Internal />
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Pre-Qualification</h3>
            <PreQualification />
          </Card>

          <div className="flex justify-end">
            <Button>Save All Changes</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Preview;
