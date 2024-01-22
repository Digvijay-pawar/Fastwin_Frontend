import React from 'react'

import { Helmet } from 'react-helmet'

import Tab from '../components/tab'
import Tab1 from '../components/tab1'
import Tab2 from '../components/tab2'
import Tab3 from '../components/tab3'
import './withdraw.css'

const Withdraw = (props) => {
  return (
    <div className="withdraw-container">
      <Helmet>
        <title>Withdraw - Anguished Loving Salmon</title>
        <meta
          property="og:title"
          content="Withdraw - Anguished Loving Salmon"
        />
      </Helmet>
      <div className="withdraw-container1">
        <div className="withdraw-container2">
          <span className="withdraw-text">Records</span>
          <span className="withdraw-text01">Help</span>
          <span className="withdraw-text02">Withdraw</span>
        </div>
        <div className="withdraw-container3">
          <span className="withdraw-text03">Balance</span>
          <div className="withdraw-container4">
            <svg viewBox="0 0 513.1702857142857 1024" className="withdraw-icon">
              <path d="M513.143 268.571v58.286c0 10.286-8 18.286-18.286 18.286h-96c-17.714 109.714-101.714 181.143-231.429 196.571 85.143 90.857 176 200.571 262.286 306.286 4.571 5.143 5.714 13.143 2.286 19.429-2.857 6.286-9.143 10.286-16.571 10.286h-111.429c-5.714 0-10.857-2.286-14.286-6.857-92-110.286-176.571-211.429-284.571-326.286-3.429-3.429-5.143-8-5.143-12.571v-72.571c0-9.714 8-18.286 18.286-18.286h64c100.571 0 163.429-33.714 180-96h-244c-10.286 0-18.286-8-18.286-18.286v-58.286c0-10.286 8-18.286 18.286-18.286h236c-21.714-42.857-73.143-64.571-153.143-64.571h-82.857c-10.286 0-18.286-8.571-18.286-18.286v-76c0-10.286 8-18.286 18.286-18.286h475.429c10.286 0 18.286 8 18.286 18.286v58.286c0 10.286-8 18.286-18.286 18.286h-133.143c18.286 23.429 30.286 50.857 36.571 82.286h97.714c10.286 0 18.286 8 18.286 18.286z"></path>
            </svg>
            <span className="withdraw-text04">12112.00</span>
          </div>
        </div>
        <div className="withdraw-container5">
          <span className="withdraw-text05">Amount</span>
          <svg viewBox="0 0 513.1702857142857 1024" className="withdraw-icon2">
            <path d="M513.143 268.571v58.286c0 10.286-8 18.286-18.286 18.286h-96c-17.714 109.714-101.714 181.143-231.429 196.571 85.143 90.857 176 200.571 262.286 306.286 4.571 5.143 5.714 13.143 2.286 19.429-2.857 6.286-9.143 10.286-16.571 10.286h-111.429c-5.714 0-10.857-2.286-14.286-6.857-92-110.286-176.571-211.429-284.571-326.286-3.429-3.429-5.143-8-5.143-12.571v-72.571c0-9.714 8-18.286 18.286-18.286h64c100.571 0 163.429-33.714 180-96h-244c-10.286 0-18.286-8-18.286-18.286v-58.286c0-10.286 8-18.286 18.286-18.286h236c-21.714-42.857-73.143-64.571-153.143-64.571h-82.857c-10.286 0-18.286-8.571-18.286-18.286v-76c0-10.286 8-18.286 18.286-18.286h475.429c10.286 0 18.286 8 18.286 18.286v58.286c0 10.286-8 18.286-18.286 18.286h-133.143c18.286 23.429 30.286 50.857 36.571 82.286h97.714c10.286 0 18.286 8 18.286 18.286z"></path>
          </svg>
          <input
            type="text"
            placeholder="530 - 10000"
            className="withdraw-textinput input"
          />
        </div>
        <div className="withdraw-container6">
          <span className="withdraw-text06">
            <span className="withdraw-text07">Amount &lt; 1000, fee ₹30</span>
            <br className="withdraw-text08"></br>
            <span className="withdraw-text09">Amount &gt;= 1000, fee 3%</span>
            <br></br>
          </span>
          <span className="withdraw-text11">
            <span>Min withdraw: 530</span>
            <br></br>
            <span>Max withdraw: 10000</span>
            <br></br>
          </span>
        </div>
        <div className="withdraw-container7">
          <span className="withdraw-text16">Bank Account</span>
          <svg viewBox="0 0 877.7142857142857 1024" className="withdraw-icon4">
            <path d="M731.429 548.571v-73.143c0-20-16.571-36.571-36.571-36.571h-182.857v-182.857c0-20-16.571-36.571-36.571-36.571h-73.143c-20 0-36.571 16.571-36.571 36.571v182.857h-182.857c-20 0-36.571 16.571-36.571 36.571v73.143c0 20 16.571 36.571 36.571 36.571h182.857v182.857c0 20 16.571 36.571 36.571 36.571h73.143c20 0 36.571-16.571 36.571-36.571v-182.857h182.857c20 0 36.571-16.571 36.571-36.571zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
          </svg>
        </div>
        <button type="button" className="withdraw-button button">
          Withdraw
        </button>
      </div>
      <div className="withdraw-container8 navbar">
        <Tab
          rootClassName="tab-root-class-name16"
          className="withdraw-component"
        ></Tab>
        <Tab1
          rootClassName="tab1-root-class-name14"
          className="withdraw-component1"
        ></Tab1>
        <Tab2
          rootClassName="tab2-root-class-name14"
          className="withdraw-component2"
        ></Tab2>
        <Tab3
          rootClassName="tab3-root-class-name14"
          className="withdraw-component3"
        ></Tab3>
      </div>
    </div>
  )
}

export default Withdraw
