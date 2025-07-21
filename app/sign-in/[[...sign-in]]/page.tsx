import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return <main className='h-screen align-middle flex items-center justify-center'>
        <SignIn />
    </main>
}