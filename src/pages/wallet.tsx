import style from '../styles/style.module.scss'
import { Layout, Spin } from "antd";
import HeaderSection from "@/components/Header";
import FooterSection from "@/components/Footer";
import SideBar from "@/components/Sider";
import 'bootstrap/dist/css/bootstrap.min.css'
import Budget from '@/components/Budget';
import { useEffect, useState } from 'react';
import Transactions from '@/components/Transactions';

export default function BoostGigPage() {
  const { Header, Footer, Sider, Content } = Layout;
  const [isLoading, setIsLoading] = useState(true);

useEffect(()=>{

  setTimeout(()=>{
setIsLoading(false)
  },1000)
},[])

  return (
      <>
      <div className={style.home}>
    {isLoading ?     <Spin size="large" tip="Loading...">
        <div style={{ minHeight: '100vh' }}></div>
      </Spin>:<Layout id="home">
          <Layout>
            <Header>
              <HeaderSection />
            </Header>
            <Content>
              <Transactions />
            </Content>
            <Footer> <FooterSection /> </Footer>
          </Layout>
          <Sider className={style.CustomSider} ><SideBar /></Sider>
        </Layout>}
      </div >
    </>)
  }