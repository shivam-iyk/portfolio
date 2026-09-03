import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { format } from "date-fns";
import {
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMessage } from "@/services/api";
import type { Message as MessageI } from "./messages";
import { motion } from "framer-motion";
import { Clock, Loader2, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { DataI } from "@/app/messages/page";

function Message({ message }: { message: MessageI }) {
  const queryClient = useQueryClient();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "MMM d, yyyy 'at' h:mm a");
  };

  const [open, setOpen] = useState(false);
  const [deletePassword, setDeletePassword] = useState("");

  const deleteMutation = useMutation({
    mutationFn: () => deleteMessage(message._id, deletePassword),
    onSuccess: () => {
      setOpen(false);
      queryClient.setQueryData(["messages"], (oldData: DataI) => {
        if (!oldData) return oldData;

        return {
          ...oldData,
          data: oldData.data.filter((item) => item._id !== message._id),
        };
      });
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  return (
    <motion.div
      key={message._id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="font-medium capitalize">{message.name}</span>
              </CardTitle>
              <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-1 text-xs sm:text-sm">
                <Link
                  href={`mailto:${message.email}`}
                  className="text-blue-500 underline text-sm"
                >
                  {message.email}
                </Link>
              </CardDescription>
            </div>
            <div className="flex items-center gap-1">
              <Dialog open={open} onOpenChange={setOpen}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(true)}
                  className="text-destructive hover:text-destructive/90"
                  title="Delete message"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Confirm Deletion</DialogTitle>
                    <DialogDescription>
                      Please enter your password to confirm message deletion.
                      This action cannot be undone.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="delete-password">Password</Label>
                      <Input
                        id="delete-password"
                        type="password"
                        name="password"
                        value={deletePassword}
                        onChange={(e) => setDeletePassword(e.target.value)}
                        placeholder="Enter your password"
                      />
                      {deleteMutation.isError && (
                        <p className="text-sm text-red-500">
                          {deleteMutation.isError}
                        </p>
                      )}
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setOpen(false)}>
                      Cancel
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => deleteMutation.mutate()}
                      disabled={deleteMutation.isPending}
                    >
                      {deleteMutation.isPending ? (
                        <>
                          <Loader2 className="animate-spin mr-2" />
                          Deleting
                        </>
                      ) : (
                        "Delete"
                      )}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground whitespace-pre-line wrap-break-word">
            {message.message}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between items-center border-t pt-4 text-xs text-muted-foreground">
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {formatDate(message.createdAt)}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default Message;
