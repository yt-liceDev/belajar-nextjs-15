"use server"

import { revalidateTag } from "next/cache"
import { z } from "zod"

export async function create(state: unknown, formData: FormData) {
  const schema = z.object({
    title: z.string().min(3),
  })

  const parsedData = schema.safeParse({
    title: formData.get("title"),
  })

  if (!parsedData.success) {
    return { message: parsedData.error.errors[0].message }
  }

  const data = parsedData.data

  const rest = await fetch(process.env.NEXT_PUBLIC_API as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      completed: false,
    }),
  })

  if (!rest.ok) {
    return { message: "failed to create" }
  }

  revalidateTag("todo")
  return { message: "success" }
}

export async function remove(state: unknown, id: string) {
  const rest = await fetch(`${process.env.NEXT_PUBLIC_API}/${id}`, {
    method: "DELETE",
  })

  if (!rest.ok) {
    return { message: "failed to delete" }
  }

  revalidateTag("todo")
  return { message: "success" }
}
