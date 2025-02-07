import { User } from 'lucide-react'
import { Session } from 'next-auth'

type UserInfoProps = {
  session: Session | null
}

export const UserInfo: React.FC<UserInfoProps> = ({ session }) => {
  return (
    <div aria-label="user info group" className="flex items-center justify-between gap-4">
      <div>
        <h2 className="text-sm text-gray-500">Hello. Welcome back,</h2>
        <h3 className="text-lg font-semibold text-gray-900">
          {session?.user?.name || session?.user?.email}
        </h3>
      </div>
      <div className="rounded-md border border-gray-100 bg-gray-50 p-2">
        <User strokeWidth={1} size={24} />
      </div>
    </div>
  )
}
