import React from 'react'
import style from './style.module.scss'
import { Step, Stepper } from 'react-form-stepper'
import { Button, Col, Row } from 'antd'
import checkoutImg from '../../../assets/images/checkoutImg.png'
import Image from 'next/image'

const Checkout = () => {
    return (
        <div className={style.checkoutMainContainer}>
            <Stepper activeStep={1} dir='rtl'>
                <Step label="Success" />
                <Step label="Payment" />
                <Step label="Checkout" />
            </Stepper>
            <div className={style.checkoutContainer}>
                <h1 className={style.title}>Confirm Checkout</h1>
                <div className={style.editContainer}>
                    <Row>
                        <Col span={24} xl={12} lg={12} md={24}>
                            <div className='d-flex align-items-center'>
                                <Image src={checkoutImg} alt='checkoutImg' className='img-fluid' />
                                <div>
                                    <h1 className={style.editDes}>I will organize your vocal music with best
                                        background music & optimizer
                                    </h1>
                                    <h1 className={style.pkgStyle}>Basic Package <span>$500</span></h1>
                                </div>
                            </div>
                        </Col>
                        <Col span={24} xl={12} lg={12} md={24} className='text-end'>
                            <Button className={style.pkgBtn}> Edit Package</Button><br/>
                            <Button className={style.deleteBtn}> Delete</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Checkout
