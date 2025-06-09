
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Github } from 'lucide-react';
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Create an account</CardTitle>
          <CardDescription className="text-center">
            Enter your details to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Input type="text" placeholder="Full Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
          </div>
          <Button className="w-full">Sign Up</Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </div>

          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
