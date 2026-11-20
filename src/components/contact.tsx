"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { sendMessage } from "@/services/api";
import Lanyard from "./ui/lanyard";
import { cn } from "@/lib/utils";
import { Abril_Fatface } from "next/font/google";

const abrilFlatface = Abril_Fatface({ weight: ["400"], subsets: ["latin"] });

export default function Contact() {
  const profile = process.env.NEXT_PUBLIC_PROFILE_IMAGE || null;
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    sendMessageMutation.mutate();
  };

  const sendMessageMutation = useMutation({
    mutationFn: () => sendMessage(form),
    onSuccess: () => {
      toast.success("Message sent!", {
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });
    },
    onError: (error) => {
      console.log(error);
      toast.error("Something went wrong", {
        description: "Your message couldn't be sent. Please try again.",
      });
    },
  });

  return (
    <section id="contact" className="bg-[#F1F3F4] relative overflow-hidden">
      {profile && (
        <div className="absolute inset-0 z-0 [&_canvas]:touch-pan-y max-md:hidden">
          <Lanyard
            className="h-full w-full"
            frontImage={profile}
            backImage="/android-chrome-512x512.png"
            strapImage="/android-chrome-512x512.png"
            imageFit="cover"
            cardColor="#ffffff"
            orientation="portrait"
            finish="glossy"
            cornerRadius={0.3}
            size={0.6}
            anchor="right"
            strapLength={0.5}
            strapColor="#111111"
            strapWidth={0.65}
            metal="silver"
            gravity={1}
            damping={0.5}
            elasticity={0.5}
            breeze={0.8}
            interactive
            intro
          />
        </div>
      )}
      <div className="container relative z-10 px-4 md:px-6 pointer-events-none">
        <div className={`py-20 w-full ${profile ? "md:w-1/2" : ""}`}>
          <div className="flex flex-col items-center text-center mb-12">
            <h2
              className={cn(
                "text-3xl md:text-4xl font-bold tracking-tighter",
                abrilFlatface.className,
              )}
            >
              Let&apos;s Connect
            </h2>
          </div>

          <div className="max-w-xl mx-auto pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Send Me a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I&apos;ll get back to you as
                    soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, name: e.target.value }))
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={sendMessageMutation.isPending}
                    >
                      {sendMessageMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
