import { Metadata } from 'next'

async function getData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  })
  return res.json()
}

type Props = {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id)

  return {
    title: post.title,
  }
}

export default async function BlogId({ params: { id } }: Props) {
  const post = await getData(id)
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  )
}
