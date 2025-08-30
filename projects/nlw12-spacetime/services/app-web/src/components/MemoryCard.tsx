'use client'

import { IMemoryItem } from '@/types'
import dayjs from 'dayjs'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

dayjs.locale('pt-br')

const MemoryCard: React.FC<IMemoryItem> = ({
  id,
  coverUrl,
  content,
  createdAt,
}) => {
  return (
    <div className="space-y-4">
      <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
        {dayjs(createdAt).format('D[ de ]MMMM[, ]YYYY')}
      </time>
      <Image
        src={coverUrl}
        alt=""
        width={592}
        height={280}
        className="aspect-video w-full rounded-lg object-cover"
      />
      <p className="text-lg leading-relaxed text-gray-100">{content}</p>
      <Link
        href={`/memories/${id}`}
        className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
      >
        Ler mais
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}

export default MemoryCard
