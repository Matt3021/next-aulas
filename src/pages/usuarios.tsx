import { Layout } from "@/components/Layout"
import Head from "next/head"
import endpoints from "../../libs/api"
import { User } from "@/types/Users"

type Props = {
  users: User[]
}

const Usuarios = ({ users }: Props) => {
  return (
    <Layout>
      <div>
        <Head>
          <title>Usuários</title>
        </Head>
        <h1>Páginas de Usuários</h1>
        <ul>
          {users.map((item, index)=> (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const users = await endpoints.getAllUsers(0)

  return {
    props: {
      users
    }
  }
}

export default Usuarios