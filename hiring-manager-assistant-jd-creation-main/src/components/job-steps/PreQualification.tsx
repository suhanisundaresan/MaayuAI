
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Question {
  id: number;
  context: string;
  question: string;
}

const PreQualification = () => {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      context: "Work Authorization",
      question: "Are you authorized to work in the United States?"
    },
    {
      id: 2,
      context: "AWS Services",
      question: "Do you have hands-on experience with Amazon Web Services, including services such as Lambda, ECS, DynamoDB, S3, SQS, and Event Bridge?"
    },
    {
      id: 3,
      context: "JavaScript Framework",
      question: "Are you experienced with at least one JavaScript framework such as Vue.js, React, Angular, or Ember?"
    },
    {
      id: 4,
      context: "Location",
      question: "Are you able to work on-site in Charlotte, NC, three days a week?"
    },
    {
      id: 5,
      context: "Infrastructure as Code",
      question: "Do you have experience with Infrastructure as Code using tools like Terraform?"
    },
    {
      id: 6,
      context: "Salary",
      question: "What is your expected salary or hourly rate?"
    }
  ]);

  const addQuestion = () => {
    const newId = questions.length > 0 ? Math.max(...questions.map(q => q.id)) + 1 : 1;
    setQuestions([...questions, { id: newId, context: "", question: "" }]);
  };

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const updateQuestion = (id: number, field: keyof Question, value: string) => {
    setQuestions(questions.map(q => 
      q.id === id ? { ...q, [field]: value } : q
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Pre-Qualification Questions</h3>
        <div className="space-x-4">
          <Button onClick={addQuestion} variant="outline" className="bg-gray-100 hover:bg-gray-200">
            <Plus className="h-4 w-4 mr-2" />
            Add More
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Update PreQ
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[100px] font-semibold">S. No</TableHead>
              <TableHead className="w-[200px] font-semibold">Context</TableHead>
              <TableHead className="font-semibold">Question</TableHead>
              <TableHead className="w-[100px] text-right font-semibold">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {questions.map((q, index) => (
              <TableRow key={q.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                  <Input
                    value={q.context}
                    onChange={(e) => updateQuestion(q.id, 'context', e.target.value)}
                    className="w-full bg-gray-50"
                    placeholder="Enter context..."
                  />
                </TableCell>
                <TableCell>
                  <Textarea
                    value={q.question}
                    onChange={(e) => updateQuestion(q.id, 'question', e.target.value)}
                    className="w-full min-h-[60px] bg-gray-50"
                    placeholder="Enter your question here..."
                  />
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeQuestion(q.id)}
                    className="hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PreQualification;
