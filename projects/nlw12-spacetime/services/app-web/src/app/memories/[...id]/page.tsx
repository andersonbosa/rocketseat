import { EmptyMemories } from '@/components/EmptyMemories'
import MemoryItem from '@/components/MemoryItem'
import { requestMemory } from '@/lib/api'
import { IMemoryItem } from '@/types'
import { cookies } from 'next/headers'

interface MemoryIDProps {
  params: {
    id: string
  }
  searchParams: any
}

export default async function Memories(props: MemoryIDProps): Promise<any> {
  const currentMemoryId: string = props?.params?.id[0]

  const hasAuthToken = cookies().has('token')

  if (!hasAuthToken || !currentMemoryId) {
    console.error('Missing authentication OR memory UID')
    return <EmptyMemories />
  }

  try {
    const token = cookies().get('token')?.value

    const response = await requestMemory(currentMemoryId, token)

    const memory: IMemoryItem = response.data

    if (!memory.id) {
      console.error('Memory not found or inexistent')
      return <EmptyMemories />
    }

    return (
      <div className="flex flex-col gap-10 p-8">
        <MemoryItem key={memory.id} {...memory} />
      </div>
    )
  } catch (error) {
    console.error('Error fetching memories:', error)
    return <div>Error fetching memories</div>
  }
}
