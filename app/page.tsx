import { auth, signIn, signOut } from '@/auth'

function SignIn() {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('github')
      }}
    >
      <p className='mb-2'>You are not logged in</p>
      <button type='submit'>Sign in with GitHub</button>
    </form>
  )
}

function SignOut() {
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
    >
      <button type='submit'>Sign out</button>
    </form>
  )
}

export default async function Home() {
  const session = await auth()
  const email = session?.user?.email
  const name = session?.user?.name

  return (
    <>
      <h1 className='text-2xl'>Next Auth App Router</h1>
      <div>
        {session ? (
          <>
            <p className='font-bold'>Hello, {name}</p>
            <p className='text-sm text-gray-500 mb-2'>{email}</p>

            <SignOut />
          </>
        ) : (
          <SignIn />
        )}
      </div>
    </>
  )
}
