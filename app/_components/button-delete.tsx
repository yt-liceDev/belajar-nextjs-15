"use client"

import { remove } from "@/app/action"
import { useActionState } from "react"

export default function ButtonDelete({ id }: { id: string }) {
  const deleteWithId = remove.bind(null, null, id)
  const [, actionDelete, isPending] = useActionState(deleteWithId, null)

  return (
    <form action={actionDelete}>
      <button type='submit' disabled={isPending}>
        Delete
      </button>
    </form>
  )
}
