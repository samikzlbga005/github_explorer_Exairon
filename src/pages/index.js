import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import {getUsersFromGithub} from "@component/utils/apiHelper";
import UserLister from "@component/components/userLister/userLister";

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {

return (
    <>

          <UserLister results={props.results}/>

    </>
  )
}

export async function getServerSideProps(context) {
    const results= await getUsersFromGithub(0);
    return {
        props: {
            results
        },
    }
}