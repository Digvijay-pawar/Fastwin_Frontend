import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Tab from '../components/tab'
import Tab1 from '../components/tab1'
import Tab2 from '../components/tab2'
import Tab3 from '../components/tab3'
import './recharge.css'

const Recharge = (props) => {
  return (
    <div className="recharge-container">
      <Helmet>
        <title>Recharge - Anguished Loving Salmon</title>
        <meta
          property="og:title"
          content="Recharge - Anguished Loving Salmon"
        />
      </Helmet>
      <div className="recharge-container1">
        <div className="recharge-container2">
          <span className="recharge-text">Records</span>
          <span className="recharge-text01">Help</span>
          <span className="recharge-text02">Recharge</span>
        </div>
        <div className="recharge-container3">
          <span className="recharge-text03">Balance</span>
          <div className="recharge-container4">
            <svg viewBox="0 0 513.1702857142857 1024" className="recharge-icon">
              <path d="M513.143 268.571v58.286c0 10.286-8 18.286-18.286 18.286h-96c-17.714 109.714-101.714 181.143-231.429 196.571 85.143 90.857 176 200.571 262.286 306.286 4.571 5.143 5.714 13.143 2.286 19.429-2.857 6.286-9.143 10.286-16.571 10.286h-111.429c-5.714 0-10.857-2.286-14.286-6.857-92-110.286-176.571-211.429-284.571-326.286-3.429-3.429-5.143-8-5.143-12.571v-72.571c0-9.714 8-18.286 18.286-18.286h64c100.571 0 163.429-33.714 180-96h-244c-10.286 0-18.286-8-18.286-18.286v-58.286c0-10.286 8-18.286 18.286-18.286h236c-21.714-42.857-73.143-64.571-153.143-64.571h-82.857c-10.286 0-18.286-8.571-18.286-18.286v-76c0-10.286 8-18.286 18.286-18.286h475.429c10.286 0 18.286 8 18.286 18.286v58.286c0 10.286-8 18.286-18.286 18.286h-133.143c18.286 23.429 30.286 50.857 36.571 82.286h97.714c10.286 0 18.286 8 18.286 18.286z"></path>
            </svg>
            <span className="recharge-text04">12112.00</span>
          </div>
        </div>
        <div className="recharge-container5">
          <span className="recharge-text05">Amount</span>
          <svg viewBox="0 0 513.1702857142857 1024" className="recharge-icon2">
            <path d="M513.143 268.571v58.286c0 10.286-8 18.286-18.286 18.286h-96c-17.714 109.714-101.714 181.143-231.429 196.571 85.143 90.857 176 200.571 262.286 306.286 4.571 5.143 5.714 13.143 2.286 19.429-2.857 6.286-9.143 10.286-16.571 10.286h-111.429c-5.714 0-10.857-2.286-14.286-6.857-92-110.286-176.571-211.429-284.571-326.286-3.429-3.429-5.143-8-5.143-12.571v-72.571c0-9.714 8-18.286 18.286-18.286h64c100.571 0 163.429-33.714 180-96h-244c-10.286 0-18.286-8-18.286-18.286v-58.286c0-10.286 8-18.286 18.286-18.286h236c-21.714-42.857-73.143-64.571-153.143-64.571h-82.857c-10.286 0-18.286-8.571-18.286-18.286v-76c0-10.286 8-18.286 18.286-18.286h475.429c10.286 0 18.286 8 18.286 18.286v58.286c0 10.286-8 18.286-18.286 18.286h-133.143c18.286 23.429 30.286 50.857 36.571 82.286h97.714c10.286 0 18.286 8 18.286 18.286z"></path>
          </svg>
          <input
            type="text"
            placeholder="500 - 10000"
            className="recharge-textinput input"
          />
        </div>
        <div className="recharge-container6">
          <span className="recharge-text06">₹500</span>
          <span className="recharge-text07">₹1000</span>
          <span className="recharge-text08">₹1500</span>
        </div>
        <div className="recharge-container7">
          <span className="recharge-text09">₹2000</span>
          <span className="recharge-text10">₹1000</span>
          <span className="recharge-text11">₹1500</span>
        </div>
        <button type="button" className="recharge-button button">
          Recharge
        </button>
      </div>
      <div className="recharge-container8 navbar">
        <Tab
          rootClassName="tab-root-class-name13"
          className="recharge-component"
        ></Tab>
        <Tab1
          rootClassName="tab1-root-class-name11"
          className="recharge-component1"
        ></Tab1>
        <Tab2
          rootClassName="tab2-root-class-name11"
          className="recharge-component2"
        ></Tab2>
        <Link to="/my">
          <Tab3
            rootClassName="tab3-root-class-name11"
            className="recharge-component3"
          ></Tab3>
        </Link>
      </div>
    </div>
  )
}

export default Recharge
