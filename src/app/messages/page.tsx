"use client";

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  LogOut,
  Inbox,
  Filter,
  SortDesc,
  SortAsc,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogTitle,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import LoginDialog from "@/components/login-dialog";
import { getMessages } from "@/services/api";
import Messages, { Message } from "@/components/messages";

export interface DataI {
  success: boolean;
  data: Message[];
  message: string;
}

export default function MessagesPage() {
  const queryClient = useQueryClient();

  const { refetch, data, isLoading, isError, error } = useQuery<DataI>({
    queryKey: ["messages"],
    staleTime: 1000 * 60 * 15, // 15 minutes
    queryFn: () => getMessages(creds),
    enabled: false,
  });

  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"asc" | "desc">("asc");
  const [authenticated, setAuthenticated] = useState(false);

  const filteredData = useMemo(() => {
    if (!(data?.data instanceof Array)) return [];
    const query = search.toLowerCase();
    return data?.data
      .filter(
        (item: { name: string; email: string; message: string }) =>
          item.name.toLowerCase().includes(query) ||
          item.email.toLowerCase().includes(query) ||
          item.message.toLowerCase().includes(query),
      )
      .sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return sort === "desc" ? dateB - dateA : dateA - dateB;
      });
  }, [data, search, sort]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!creds.username.trim() || !creds.password.trim()) {
      return;
    }

    refetch();
  };

  const handleLogout = () => {
    queryClient.setQueryData(["messages"], null);
    setCreds({ username: "", password: "" });
    setAuthenticated(false);
  };

  useEffect(() => {
    if (!data?.success) return;
    setAuthenticated(true);
  }, [data]);

  if (!authenticated) {
    return (
      <LoginDialog
        creds={creds}
        setCreds={setCreds}
        isLoading={isLoading}
        error={error}
        isError={isError}
        handleLogin={handleLogin}
      />
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container flex items-center justify-between h-16 px-4">
          <h1 className="text-xl font-bold">Message Dashboard</h1>
          <AlertDialog>
            <AlertDialogTrigger>
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Logout</span>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogTitle>Log Out</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to log out? You will need to log in again
                to access your messages.
              </AlertDialogDescription>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive hover:bg-destructive/80 text-white" onClick={handleLogout}>
                  Confirm
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </header>

      <main className="container px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              name="search"
              placeholder="Search messages..."
              className="pl-8 w-full md:w-[300px]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Sort Messages
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => setSort("desc")}>
                  <SortDesc className="h-4 w-4 mr-2" />
                  Newest first
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSort("asc")}>
                  <SortAsc className="h-4 w-4 mr-2" />
                  Oldest first
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Inbox className="h-5 w-5" />
            Messages
            <Badge variant="secondary" className="ml-1">
              {data?.data.length}
            </Badge>
          </h2>
        </div>

        <Messages messages={filteredData} />
      </main>
    </div>
  );
}
