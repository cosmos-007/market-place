import React from 'react'
import style from './style.module.scss'
import { CheckCircleOutlined } from '@ant-design/icons'
import Image from 'next/image'
import avatar from '../../../../assets/images/avatar.png'

const Transactions = () => {

  const transactionHistoryData = [
    {
      name: "Yulia Polishchuk",
      email: "@mynamepolishchuk",
      time: "02 Minutes Ago",
      status: "Complete",
      amount: "+$675.00"
    },
    {
      name: "Yulia Polishchuk",
      email: "@mynamepolishchuk",
      time: "12 Minutes Ago",
      status: "Cancel",
      amount: "+$675.00"
    },
    {
      name: "Yulia Polishchuk",
      email: "@mynamepolishchuk",
      time: "02 Minutes Ago",
      status: "Complete",
      amount: "+$675.00"
    },
    {
      name: "Yulia Polishchuk",
      email: "@mynamepolishchuk",
      time: "12 Minutes Ago",
      status: "Cancel",
      amount: "+$675.00"
    },
    {
      name: "Yulia Polishchuk",
      email: "@mynamepolishchuk",
      time: "02 Minutes Ago",
      status: "Complete",
      amount: "+$675.00"
    },
    {
      name: "Yulia Polishchuk",
      email: "@mynamepolishchuk",
      time: "02 Minutes Ago",
      status: "Complete",
      amount: "+$675.00"
    },
  ]

  return (
    <div className={style.transactionsContainer}>
      <div className={style.transactionsHistoryContainer}>
        <h1 className={style.title}>Transactions History</h1>
        <p className={style.descStyle}>Current Transfers</p>
        <div className={style.historyTable}>
          {transactionHistoryData?.map((item, index) => {
            return (
              <div className={style.historyStyle} key={index}>
                <h1 className={style.commonItemStyle}>{item?.amount || "--"}</h1>
                <div className='d-flex'>
                  <CheckCircleOutlined
                    style={{ color: item?.status == "Complete" ? "#069425" : "#FF0000" }}
                  />
                  <h1 className={style.commonItemStyle}>{item?.status || "--"}</h1>
                </div>
                <h1 className={style.commonItemStyle}>{item?.time || "--"}</h1>
                <h1 className={style.commonItemStyle}>{item?.email || "--"}</h1>
                <div className='d-flex align-items-center justify-content-start' style={{ minWidth: '150px' }}>
                  <Image
                    src={avatar}
                    alt="avatar"
                    className='img-fluid'
                  />
                  <h1 className={style.commonItemStyle}>{item?.name || "---"}</h1>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
    </div>
  )
}

export default Transactions
