import { getUser } from '@/lib/auth'
import { ProfileClient } from './ProfileClient'

export function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <>
      <ProfileClient name={name} avatarUrl={avatarUrl} />
    </>
  )
}
