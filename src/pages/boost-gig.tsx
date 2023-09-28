import style from '../styles/style.module.scss'
import { Layout } from "antd";
import HeaderSection from "@/components/Header";
import FooterSection from "@/components/Footer";
import SideBar from "@/components/Sider";
import 'bootstrap/dist/css/bootstrap.min.css'
import Budget from '@/components/Budget';

export default function BoostGigPage() {
    const { Header, Footer, Sider, Content } = Layout;

    return (
        <>
        <div className={style.home}>
          <Layout>
            <Layout>
              <Header>
                <HeaderSection />
              </Header>
              <Content>
<Budget/>              </Content>
              <Footer> <FooterSection /> </Footer>
            </Layout>
            <Sider className={style.CustomSider} ><SideBar /></Sider>
          </Layout>
        </div >
      </>)
  }