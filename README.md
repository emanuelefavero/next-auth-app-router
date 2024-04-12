# NextAuth App Router Authentication

This is an example of how to implement authentication with NextAuth in Next.js App Router

## Getting Started

- Clone the repository
- Add `.env.local` file with the following content:

```bash
AUTH_GITHUB_ID= # go to GitHub Developer Settings to get the ID
AUTH_GITHUB_SECRET= # go to GitHub Developer Settings to get the Secret
AUTH_SECRET= # a random string, see .env.example for instructions
```

- Run:

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

## Resources

- [Next.js Authentication](https://nextjs.org/docs/app/building-your-application/authentication)
- [NextAuth](https://next-auth.js.org/)
- [Lucia Auth](https://lucia-auth.com/)
