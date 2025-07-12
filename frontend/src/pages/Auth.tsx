import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

interface AuthProps {
  mode: "login" | "signup";
}

export default function Auth({ mode }: AuthProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    agreeToTerms: false
  });

  const isLogin = mode === "login";
  const title = isLogin ? "Welcome Back" : "Join ReWear";
  const subtitle = isLogin 
    ? "Sign in to your account to continue swapping" 
    : "Create an account to start your sustainable fashion journey";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle authentication
    console.log("Auth form submitted:", formData);
    
    // Simulate successful authentication
    const from = location.state?.from?.pathname || "/dashboard";
    navigate(from, { replace: true });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Button variant="ghost" size="sm" className="mb-6" asChild>
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        <Card className="shadow-soft">
          <CardHeader className="text-center space-y-2">
            <div className="flex flex-col items-center space-y-1 mb-4">
  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
    <span className="text-xl font-bold text-primary-foreground">R</span>
  </div>
  <span className="text-xs text-muted-foreground tracking-wide">Reown Your Chic</span>
</div>

            <CardTitle className="text-2xl">{title}</CardTitle>
            <p className="text-muted-foreground">{subtitle}</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm">
                      Remember me
                    </Label>
                  </div>
                  <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
              )}

              {!isLogin && (
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))}
                    required
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <Link to="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
              )}

              <Button type="submit" variant="hero" size="lg" className="w-full">
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
            </form>

            <Separator />

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <Link
                  to={isLogin ? "/signup" : "/login"}
                  className="text-primary hover:underline font-medium"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        {!isLogin && (
          <div className="mt-8 text-center space-y-4">
            <p className="text-sm text-muted-foreground">Join thousands of fashion lovers who are:</p>
            <div className="grid grid-cols-3 gap-4 text-xs">
              <div className="space-y-1">
                <div className="w-8 h-8 bg-primary/10 rounded-lg mx-auto"></div>
                <p>Reducing waste</p>
              </div>
              <div className="space-y-1">
                <div className="w-8 h-8 bg-accent/10 rounded-lg mx-auto"></div>
                <p>Saving money</p>
              </div>
              <div className="space-y-1">
                <div className="w-8 h-8 bg-primary/10 rounded-lg mx-auto"></div>
                <p>Finding unique pieces</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}