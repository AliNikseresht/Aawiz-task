"use client";

import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import {
  CheckCircle2,
  Mail,
  User,
  Phone,
  MessageSquare,
  Send,
} from "lucide-react";
import { FormData } from "@/types/FormT";

export function FormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);

    toast.success("Message sent successfully!", {
      description: `Thank you, ${data.firstName}! We'll get back to you within 24 hours.`,
      icon: <CheckCircle2 className="size-5" />,
    });

    reset();
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-blue-500/10 text-blue-400 dark:text-blue-300 border border-blue-500/20">
          <Mail className="size-4" />
          <span className="text-sm font-medium">Get in Touch</span>
        </div>
        <h2 className="text-4xl font-bold tracking-tight mb-4">
          Contact Our Team
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a question or want to work together? Fill out the form below and
          we'll respond as soon as possible.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <ContactCard
          icon={<Mail className="size-6" />}
          title="Email Us"
          value="hello@analyticshub.com"
          color="blue"
        />
        <ContactCard
          icon={<Phone className="size-6" />}
          title="Call Us"
          value="+1 (555) 123-4567"
          color="purple"
        />
        <ContactCard
          icon={<MessageSquare className="size-6" />}
          title="Live Chat"
          value="Available 9am-5pm EST"
          color="green"
        />
      </div>

      {/* Main Form */}
      <Card className="bg-card border-border shadow-xl">
        <CardHeader>
          <CardTitle>Send us a Message</CardTitle>
          <CardDescription>
            Fill out the form below and our team will get back to you shortly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                label="First Name"
                icon={<User className="size-4" />}
                error={errors.firstName}
              >
                <Input
                  {...register("firstName", {
                    required: "First name is required",
                    minLength: { value: 2, message: "At least 2 characters" },
                  })}
                  placeholder="John"
                  className={errors.firstName ? "border-red-500" : ""}
                />
              </FormField>

              <FormField
                label="Last Name"
                icon={<User className="size-4" />}
                error={errors.lastName}
              >
                <Input
                  {...register("lastName", {
                    required: "Last name is required",
                    minLength: { value: 2, message: "At least 2 characters" },
                  })}
                  placeholder="Doe"
                  className={errors.lastName ? "border-red-500" : ""}
                />
              </FormField>
            </div>

            <FormField
              label="Email Address"
              icon={<Mail className="size-4" />}
              error={errors.email}
            >
              <Input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="john.doe@example.com"
                className={errors.email ? "border-red-500" : ""}
              />
            </FormField>

            <FormField
              label="Phone Number"
              icon={<Phone className="size-4" />}
              error={errors.phone}
              required={false}
            >
              <Input
                type="tel"
                {...register("phone", {
                  pattern: {
                    value: /^[\d\s()+-]+$/,
                    message: "Invalid phone number",
                  },
                })}
                placeholder="+1 (555) 123-4567"
                className={errors.phone ? "border-red-500" : ""}
              />
            </FormField>

            <FormField
              label="Message"
              icon={<MessageSquare className="size-4" />}
              error={errors.message}
            >
              <Textarea
                {...register("message", {
                  required: "Message is required",
                  minLength: { value: 10, message: "At least 10 characters" },
                })}
                placeholder="Tell us what you're thinking..."
                rows={6}
                className={`resize-none ${
                  errors.message ? "border-red-500" : ""
                }`}
              />
            </FormField>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-lg hover:shadow-xl transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="size-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

// کامپوننت‌های کوچک برای تمیزی کد
function ContactCard({
  icon,
  title,
  value,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  color: "blue" | "purple" | "green";
}) {
  const colors = {
    blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    purple: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    green: "bg-green-500/10 text-green-600 dark:text-green-400",
  };

  return (
    <Card className="bg-card border-border transition-all hover:shadow-lg hover:-translate-y-1">
      <CardContent className="pt-6 text-center">
        <div className={`inline-flex p-3 rounded-xl mb-4 ${colors[color]}`}>
          {icon}
        </div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{value}</p>
      </CardContent>
    </Card>
  );
}

function FormField({
  label,
  icon,
  children,
  error,
  required = true,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  error?: any;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <Label className="flex items-center gap-2 font-medium">
        {icon}
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      {children}
      {error && (
        <p className="text-sm text-red-500 flex items-center gap-1">
          {error.message}
        </p>
      )}
    </div>
  );
}
