import style from '../styles/style.module.scss'
import { Layout, Spin } from "antd";
import HeaderSection from "@/components/Header";
import FooterSection from "@/components/Footer";
import SideBar from "@/components/Sider";
import 'bootstrap/dist/css/bootstrap.min.css'
import Budget from '@/components/Budget';
import { useEffect, useState } from 'react';
import Community from '@/components/Community';

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
      
            <Content>
              <Community />
            </Content>
            <Footer> <FooterSection /> </Footer>
          </Layout>
          <Sider className={style.CustomSider} ><SideBar /></Sider>
        </Layout>}
      </div >
    </>)
  }