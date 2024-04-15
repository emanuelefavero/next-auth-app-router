import { auth, signIn, signOut } from '@/auth'

function SignInWithGoogle() {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('google')
      }}
      className='mb-1'
    >
      <button className='bg-[#4285F4] hover:bg-[#4a8bf7]' type='submit'>
        Sign in with Google
      </button>
    </form>
  )
}

function SignInWithGitHub() {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('github')
      }}
    >
      <button
        className='bg-black hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100'
        type='submit'
      >
        Sign in with GitHub
      </button>
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
      <button className='bg-rose-500 hover:bg-rose-600' type='submit'>
        Sign out
      </button>
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
        {session && session.user ? (
          <>
            <p className='font-bold'>Hello, {name}</p>
            <p className='text-sm text-gray-500 mb-2'>{email}</p>

            <SignOut />
          </>
        ) : (
          <>
            <p className='mb-2'>You are not logged in</p>
            <SignInWithGoogle />
            <SignInWithGitHub />
          </>
        )}
      </div>
    </>
  )
}
