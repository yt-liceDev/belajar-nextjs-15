"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Post() {
  const { id } = useParams()
  const [todo, setTodo] = useState<{ title: string }>()

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/${id}`)
      .then((res) => res.json())
      .then(setTodo)
  }, [id])

  return (
    <div>
      <h1>Todo Detail</h1>
      <p>{todo?.title}</p>
    </div>
  )
}
