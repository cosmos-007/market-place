import style from '../styles/style.module.scss'
import { Layout } from "antd";
import HeaderSection from "@/components/Header";
import FooterSection from "@/components/Footer";
import SideBar from "@/components/Sider";
import 'bootstrap/dist/css/bootstrap.min.css'
import Community from '@/components/Community';

export default function CommunityPage() {
    const { Header, Footer, Sider, Content } = Layout;

    return (
        <>
        <div className={style.home}>
          <Layout>
            <Layout>
              {/* <Header>
                <HeaderSection />
              </Header> */}
              <Content>
<Community/>              </Content>
              <Footer> <FooterSection /> </Footer>
            </Layout>
            <Sider className={style.CustomSider} ><SideBar /></Sider>
          </Layout>
        </div >
      </>)
  }