import React from 'react'
import style from './style.module.scss'
import Image from 'next/image'
import Logo from '../../../../assets/images/LOGO-HERE.png'
import homeIcon from '../../../../assets/images/home.png'
import categoryIcon from '../../../../assets/images/category.png'
import profileIcon from '../../../../assets/images/profile.png'
import checkoutIcon from '../../../../assets/images/checkout.png'
import settingIcon from '../../../../assets/images/setting.png'
import supportIcon from '../../../../assets/images/support.png'
import personIcon from '../../../../assets/images/profileimg.png'
import { Row, Col } from 'antd';

const SideBar = () => {
    return (
        <>
            <div className={style.sidebar}>
                <div className={style.logo}>
                    <Image
                        src={Logo}
                        alt="Logo"
                        className='img-fluid'
                    />
                </div>
                <Row className='mt-4' gutter={20}>
                    <Col span={12} className='mb-2'>
                        <div className={`card ${style.cards} ${style.active}`}>
                            <div className={style.imageblock}>
                                <Image
                                    src={homeIcon}
                                    alt="Home"
                                    className='img-fluid'
                                />
                            </div>

                            <h3>Home</h3>
                        </div>
                    </Col>
                    <Col span={12} className='mb-2'>
                        <div className={`card ${style.cards}`}>
                            <div className={style.imageblock}>
                                <Image
                                    src={categoryIcon}
                                    alt="categoryIcon"
                                    className='img-fluid'
                                />
                            </div>

                            <h3>Category</h3>
                        </div>
                    </Col>
                    <Col span={12} className='mb-2'>
                        <div className={`card ${style.cards}`}>

                            <div className={style.imageblock}>
                                <Image
                                    src={profileIcon}
                                    alt="profileIcon"
                                    className='img-fluid'
                                />
                            </div>
                            <h3>Profile</h3>
                        </div>
                    </Col>
                    <Col span={12} className='mb-2'>
                        <div className={`card ${style.cards}`}>
                            <div className={style.imageblock}>
                                <Image
                                    src={checkoutIcon}
                                    alt="checkoutIcon"
                                    className='img-fluid'
                                />
                            </div>
                            <h3>Checkout</h3>
                        </div>
                    </Col>
                    <Col span={12} className='mb-2'>
                        <div className={`card ${style.cards}`}>
                            <div className={style.imageblock}>
                                <Image
                                    src={settingIcon}
                                    alt="settingIcon"
                                    className='img-fluid'
                                />
                            </div>
                            <h3>Settings</h3>
                        </div>
                    </Col>
                    <Col span={12} className='mb-2'>
                        <div className={`card ${style.cards}`}>
                            <div className={style.imageblock}>
                                <Image
                                    src={supportIcon}
                                    alt="supportIcon"
                                    className='img-fluid'
                                />
                            </div>
                            <h3>Support</h3>
                        </div>
                    </Col>
                    <Col span={24} className='mb-2'>
                        <h2>Active People</h2>
                    </Col>
                    <Col span={24} className='mb-2'>
                        <ul className={style.activeList}>
                            {[1, 2, 3].map((item) => (
                                <li className='mb-2'><h4 className={style.title}>Nadia Alie_09</h4>
                                    <span>
                                        <Image
                                            src={personIcon}
                                            alt="Profile"
                                            className='img-fluid'
                                        />
                                    </span>
                                </li>
                            ))}

                        </ul>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default SideBar