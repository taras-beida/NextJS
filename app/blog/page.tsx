import { Metadata } from 'next'
import Link from 'next/link'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  })
  return res.json()
}

export const metadata: Metadata = {
  title: 'Blog',
}

export default async function Blog() {
  const posts = await getData()

  console.log('posts', posts)

  return (
    <>
      <h1>Blog</h1>

      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
