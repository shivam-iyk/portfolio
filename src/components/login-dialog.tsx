import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

function LoginDialog({
  creds,
  error,
  isError,
  isLoading,
  setCreds,
  handleLogin,
}: {
  creds: { username: string; password: string };
  setCreds: (value: typeof creds) => void;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  handleLogin: (e: React.FormEvent) => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <CardDescription>
              Enter your credentials to access messages
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={creds.username}
                  onChange={(e) =>
                    setCreds({ ...creds, username: e.target.value })
                  }
                  placeholder="Enter your username"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={creds.password}
                  onChange={(e) =>
                    setCreds({ ...creds, password: e.target.value })
                  }
                  placeholder="Enter your password"
                />
              </div>
              {isError && (
                <p className="text-sm text-red-500">
                  {error?.message ||
                    "Something went wrong, Please try again later"}
                </p>
              )}
            </form>
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? <Loader2 className="animate-spin" /> : "Login"}
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}

export default LoginDialog;
