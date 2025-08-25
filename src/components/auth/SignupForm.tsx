
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

export const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const role = searchParams.get("role") || "innovator";

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, firstName, lastName, role });
    navigate("/dashboard");
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Join InnoVest and connect with opportunities
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <Button
          variant={role === "innovator" ? "default" : "outline"}
          className="flex items-center gap-2"
          onClick={() => {
            searchParams.set("role", "innovator");
            navigate({ search: searchParams.toString() });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M10 2a.75.75 0 01.75.75v.01a.75.75 0 01-1.5 0V2.75A.75.75 0 0110 2zM7.25 5.01a.75.75 0 01.75.75v.01a.75.75 0 01-1.5 0V5.76a.75.75 0 01.75-.75zm6 0a.75.75 0 01.75.75v.01a.75.75 0 01-1.5 0V5.76a.75.75 0 01.75-.75zM4 8.25a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 8.25zm0 2a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10.25zm4.75 2a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm-1 4c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1h-8z" />
          </svg>
          Innovator
        </Button>

        <Button
          variant={role === "investor" ? "default" : "outline"}
          className="flex items-center gap-2"
          onClick={() => {
            searchParams.set("role", "investor");
            navigate({ search: searchParams.toString() });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M10.75 10.818v2.614A3.13 3.13 0 0011.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 00-1.138-.432zM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 00-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152z" />
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-6a.75.75 0 01.75.75v.316a3.78 3.78 0 011.653.713c.426.33.744.74.925 1.2a.75.75 0 01-1.395.55 1.35 1.35 0 00-.447-.563 2.187 2.187 0 00-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 11-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 111.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 01-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 011.653-.713V4.75A.75.75 0 0110 4z"
              clipRule="evenodd"
            />
          </svg>
          Investor
        </Button>

        <Button
          variant={role === "mentor" ? "default" : "outline"}
          className="flex items-center gap-2"
          onClick={() => {
            searchParams.set("role", "mentor");
            navigate({ search: searchParams.toString() });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 013.01-3.884h.13A5.989 5.989 0 017 13.125a5.989 5.989 0 012.717-2.125l.002-.001a6.004 6.004 0 012.573 0l.002.001A5.989 5.989 0 0113 13.125a5.989 5.989 0 012.717-2.125h.13a3 3 0 013.01 3.884.78.78 0 01-.358.442 4.51 4.51 0 01-1.9.718 5.498 5.498 0 01-1.6 0 4.51 4.51 0 01-1.9-.718 4.51 4.51 0 00-1.9-.718 5.498 5.498 0 00-1.6 0 4.51 4.51 0 00-1.9.718 4.51 4.51 0 01-1.9.718 5.498 5.498 0 01-1.6 0 4.51 4.51 0 01-1.9-.718zM18 8a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Mentor
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First name</Label>
            <Input
              id="firstName"
              placeholder="Jane"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last name</Label>
            <Input
              id="lastName"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="jane@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pr-10"
              required
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Eye className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
          </div>
        </div>

        <Button type="submit" className="w-full">
          Create account
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-primary hover:underline"
          >
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
};
