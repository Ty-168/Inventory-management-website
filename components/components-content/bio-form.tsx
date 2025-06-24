"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/content-ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/content-ui/form"
import { Textarea } from "@/components/ui/content-ui/textarea"

const FormSchema = z.object({
  bio: z.string(),
})

export function BioForm() {
  let stored = null;
  try {
    stored = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
  } catch (e) {
    console.error("Failed to parse loggedInUser from localStorage", e);
    stored = {};
  }

  const userEmail = stored.email || ""
  const bioData = userEmail
    ? JSON.parse(localStorage.getItem(`bios-${userEmail}`) || "{}")
    : {}

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      bio: bioData.bio || "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!userEmail) {
      toast.error("No logged-in user found.")
      return
    }

    localStorage.setItem(`bios-${userEmail}`, JSON.stringify({ bio: data.bio }))

    toast("Your bio has been saved!", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full min-h-[200px] space-y-6">
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe about your store"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save</Button>
      </form>
    </Form>
  )
}
