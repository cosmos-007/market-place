import HomePage from "@/components/FrontPage";
import style from '../styles/style.module.scss'
import { Layout, Spin } from "antd";
import HeaderSection from "@/components/Header";
import FooterSection from "@/components/Footer";
import SideBar from "@/components/Sider";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from "react";


export default function LandingPage() {
    const { Header, Footer, Sider, Content } = Layout;
   
  
    return (
        <>
        <div className={style.home}>
      <Layout style={{minWidth:'100vw',maxHeight:'100vh'}} >
            <Layout style={{maxHeight:'100vh'}}>
              <Header>
                <HeaderSection />
              </Header>
              <Content>
                <HomePage />
              </Content>
              <Footer> <FooterSection /> </Footer>
            </Layout>
            <Sider className={style.CustomSider} ><SideBar /></Sider>
          </Layout>
        </div >
      </>)
  }