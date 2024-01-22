import React from 'react'

import { Helmet } from 'react-helmet'

import Tab from '../components/tab'
import Tab1 from '../components/tab1'
import Tab2 from '../components/tab2'
import Tab3 from '../components/tab3'
import './invite.css'

const Invite = (props) => {
  return (
    <div className="invite-container">
      <Helmet>
        <title>Invite - Anguished Loving Salmon</title>
        <meta property="og:title" content="Invite - Anguished Loving Salmon" />
      </Helmet>
      <div className="invite-container01">
        <div className="invite-container02">
          <div className="invite-container03"></div>
          <div className="invite-container04">
            <span className="invite-text">Information</span>
            <span className="invite-text01">Invite Link</span>
          </div>
        </div>
        <div className="invite-container05">
          <button type="button" className="invite-button button">
            <span className="invite-text02">Withdraw</span>
          </button>
          <span className="invite-text03">Commision amount</span>
          <span className="invite-text04">₹1000</span>
        </div>
        <div className="invite-container06 navbar">
          <Tab
            rootClassName="tab-root-class-name15"
            className="invite-component"
          ></Tab>
          <Tab1
            rootClassName="tab1-root-class-name13"
            className="invite-component1"
          ></Tab1>
          <Tab2
            rootClassName="tab2-root-class-name13"
            className="invite-component2"
          ></Tab2>
          <Tab3
            rootClassName="tab3-root-class-name13"
            className="invite-component3"
          ></Tab3>
        </div>
        <div className="invite-container07">
          <div className="invite-container08">
            <span className="invite-text05">Invited Today</span>
            <span className="invite-text06">0</span>
            <span className="invite-text07">Total: 0</span>
          </div>
          <div className="invite-container09">
            <span className="invite-text08">Today&apos;s Income</span>
            <span className="invite-text09">₹0</span>
            <span className="invite-text10">Total: ₹0</span>
          </div>
        </div>
        <div className="invite-container10">
          <span>Recent Records</span>
        </div>
      </div>
    </div>
  )
}

export default Invite
