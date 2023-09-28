import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import style from './style.module.scss'
import HomePage from './components/FrontPage'
import { Layout } from 'antd'
import HeaderSection from './components/Header'
import SideBar from './components/Sider'
import FooterSection from './components/Footer'
import GigPost from './components/GigPost'
import Budget from './components/Budget'
import Transactions from './components/Transactions'
import Orders from './components/Orders'
import Community from './components/Community'
import Gig from './components/Gig'
import OverView from './components/OverView'
import Checkout from './components/Checkout'
import Chat from './components/Chat'


const { Header, Footer, Sider, Content } = Layout;
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={style.home}>
        <Layout>
          <Layout>
            <Header>
              <HeaderSection />
            </Header>
            <Content>
              {/* <HomePage /> */}
              {/* <GigPost /> */}
              {/* <Budget /> */}
              {/* <Transactions /> */}
              {/* <Orders /> */}
              {/* <Community /> */}
              {/* <Gig /> */}
              {/* <OverView /> */}
              {/* <Checkout /> */}
              <Chat />
            </Content>
            <Footer> <FooterSection /> </Footer>
          </Layout>
          <Sider className={style.CustomSider} ><SideBar /></Sider>
        </Layout>
      </div >
    </>
  )
}
