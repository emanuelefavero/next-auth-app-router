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

function SignOut({ children }: { children: React.ReactNode }) {
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
    >
      <p className='mb-2'>{children}</p>
      <button type='submit'>Sign out</button>
    </form>
  )
}

export default async function Home() {
  let session = await auth()
  let user = session?.user?.email

  return (
    <>
      <h1>Next Auth App Router</h1>
      <div>{user ? <SignOut>{`Welcome ${user}`}</SignOut> : <SignIn />}</div>
    </>
  )
}
