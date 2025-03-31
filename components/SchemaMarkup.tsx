"use client"

import { personSchema } from "@/app/schema"

export default function SchemaMarkup() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
}

