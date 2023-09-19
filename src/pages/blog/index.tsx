import { Post } from '@/types/Post'
import Head from 'next/head'

type Props = {
  name: string
  posts: Post[]
}

const Blog = ({ name, posts }: Props) => {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p>Blog de {name}</p>
      <ul>
        {posts.map((post, index) => (
          <li key={index}><a href={`/blog/${post.id}`}>{post.title}</a></li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts: Post[] = await res.json()

  return {
    props: {
      name: 'Bonieky',
      posts
    },
    revalidate: 7200
  }
}

export default Blog