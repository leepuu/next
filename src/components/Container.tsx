import Head from "next/head";
import Nav from "./Nav";

const Container = (props) => {
  return(
    <>
      <Head>
        <title>푸다닥 개발뽀개기2</title>
      </Head>
      <header>
        <Nav />
      </header>
      <main>{props.children}</main>
    </>
  )
}

export default Container;