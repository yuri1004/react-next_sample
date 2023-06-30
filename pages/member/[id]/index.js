import Layout from "@/components/Layout";
import Link from "next/link";


export default function castMember({castMember}){
  return (
    <Layout>
      <main className="container">
        <h1>{castMember.name}</h1>
        <p>{castMember.bio}</p>
        <p>
         <Link href="/"> HOME</Link>
        </p>
      </main>
    </Layout>
  )
}
export const getServerSideProps = async (context) => {
 const res = await fetch('https://s3.amazonaws.com/yurijeong.data.json/data1.json');
 const data = await res.json();
 const castMember = data.filter(item => item.id == context.params.id);
 return {
  props:{
    castMember : castMember[0]
  }
 }
}