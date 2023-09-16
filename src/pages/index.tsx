import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import style from './style.module.scss'
import HomePage from './Home/components/FrontPage'
import { Layout } from 'antd'
import HeaderSection from './Home/components/Header'
import SideBar from './Home/components/Sider'
import FooterSection from './Home/components/Footer'


const { Header, Footer, Sider, Content } = Layout;
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={style.home}>
        <Layout>
          <Layout>
            <Header><HeaderSection /></Header>
            <Content>
              <HomePage />
            </Content>
            <Footer> <FooterSection /> </Footer>
          </Layout>
          <Sider className={style.CustomSider} ><SideBar /></Sider>
        </Layout>
      </div >
    </>
  )
}
