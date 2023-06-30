import CastList from "@/components/CaseList";
import Layout from "@/components/Layout";
import Head from "next/head";

export default function Home({cast}){
    return (
        <Layout>
            <div>
                <Head>
                    <title>case member</title>
                </Head>
                <main>
                    <h1>case member</h1>
                    <CastList cast={cast} />
                </main>
            </div>
        </Layout>
    )
}

export async function getStaticProps(){
    const res = await fetch('https://s3.amazonaws.com/yurijeong.data.json/data1.json');
    const data = await res.json();
    return {
      props:{
        cast : data
      }
    }
  }