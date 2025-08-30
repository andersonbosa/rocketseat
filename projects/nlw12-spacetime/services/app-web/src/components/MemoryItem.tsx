'use client'

// # TODO: @andersonbosa, o texto não possui formatação nenhuma

import { IMemoryItem } from '@/types'
import dayjs from 'dayjs'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

dayjs.locale('pt-br')

const MemoryItem: React.FC<IMemoryItem> = ({
  id,
  coverUrl,
  content,
  createdAt,
  isPublic,
}) => {
  return (
    <div className="space-y-4">
      <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
        {dayjs(createdAt).format('D[ de ]MMMM[, ]YYYY')}
      </time>
      <section>
        <div>
          <Link
            href="/"
            className="flex items-center leading-relaxed gap-2 text-sm text-gray-200 hover:text-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
        </div>
      </section>
      <section className="space-y-4">
        <Image
          src={coverUrl}
          alt=""
          width={592}
          height={280}
          className="aspect-video w-full rounded-lg object-cover"
        />

        <div className="w-full flex flex-row justify-between">
          <p className="text-sm text-gray-300" title="Author name">
            AuthorName
          </p>
          <p className="text-sm text-gray-300" title="Visibility status">
            {isPublic ? 'Public' : 'Private'}
          </p>
        </div>

        <p className="text-lg leading-relaxed text-gray-100">{content}</p>
      </section>
      <section>
        <p
          className="text-sm text-gray-900 text-center"
          title="Post unique identifier"
        >
          {id}
        </p>
      </section>
    </div>
  )
}

export default MemoryItem
