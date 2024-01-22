import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Tab from '../components/tab'
import Tab1 from '../components/tab1'
import Tab2 from '../components/tab2'
import Tab3 from '../components/tab3'
import './home.css'
import { useUser } from '../user-context/user-context'
import apiClient from '../api-client/auth-client'


const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Anguished Loving Salmon</title>
        <meta property="og:title" content="Anguished Loving Salmon" />
      </Helmet>
      <div className="home-container01">
        <div className="home-container02 navbar">
          <Tab
            rootClassName="tab-root-class-name17"
            className="home-component"
          ></Tab>
          <Tab1
            rootClassName="tab1-root-class-name15"
            className="home-component1"
          ></Tab1>
          <Tab2
            rootClassName="tab2-root-class-name15"
            className="home-component2"
          ></Tab2>
          <Tab3
            rootClassName="tab3-root-class-name15"
            className="home-component3"
          ></Tab3>
        </div>
        <div className="home-container03">
          <span className="home-text">
            <span className="home-text01">Balance</span>
            <br className="home-text02"></br>
            <span className="home-text03">₹1000.00</span>
            <br className="home-text04"></br>
            <span className="home-text05">
              ID:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text06">1234567</span>
            <br className="home-text07"></br>
          </span>
          <Link to="/recharge" className="home-navlink button">
            Recharge
          </Link>
          <Link to="/withdraw" className="home-navlink1 button">
            Withdraw
          </Link>
        </div>
        <div className="home-container04">
          <Link to="/task-reward" className="home-navlink2">
            <div className="home-container05">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M469.333 554.667v341.333h-256v-341.333zM554.667 896v-341.333h256v341.333zM320 256c-17.664 0-33.621-7.125-45.269-18.731s-18.731-27.605-18.731-45.269 7.125-33.621 18.731-45.269 27.605-18.731 45.269-18.731c26.837 0 48.725 9.515 67.584 25.003 16.043 13.141 29.909 30.677 41.643 50.219 10.283 17.109 18.475 35.029 24.747 51.328zM569.429 256c6.869-17.749 15.061-35.669 25.301-52.779 11.733-19.584 25.643-37.077 41.643-50.219 18.901-15.488 40.789-25.003 67.627-25.003 17.664 0 33.621 7.125 45.269 18.731s18.731 27.605 18.731 45.269-7.125 33.621-18.731 45.269-27.605 18.731-45.269 18.731zM469.333 341.333v128h-341.333v-128h192zM838.955 256c9.216-19.413 14.379-41.088 14.379-64 0-41.216-16.768-78.635-43.733-105.6s-64.384-43.733-105.6-43.733c-49.493 0-89.984 18.347-121.685 44.331-25.728 21.077-45.568 47.061-60.715 72.277-3.413 5.675-6.613 11.349-9.6 16.981-2.987-5.632-6.187-11.307-9.6-16.981-15.147-25.216-34.987-51.2-60.715-72.277-31.701-25.984-72.192-44.331-121.685-44.331-41.216 0-78.635 16.768-105.6 43.733s-43.733 64.384-43.733 105.6c0 22.912 5.163 44.587 14.379 64h-99.712c-23.552 0-42.667 19.115-42.667 42.667v213.333c0 23.552 19.115 42.667 42.667 42.667h42.667v384c0 23.552 19.115 42.667 42.667 42.667h682.667c23.552 0 42.667-19.115 42.667-42.667v-384h42.667c23.552 0 42.667-19.115 42.667-42.667v-213.333c0-23.552-19.115-42.667-42.667-42.667zM554.667 341.333h341.333v128h-341.333z"></path>
              </svg>
              <button type="button" className="home-button button">
                Task Reward
              </button>
            </div>
          </Link>
          <div className="home-container06">
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon2">
              <path d="M391.429 742.286l350.857-350.857c14.286-14.286 14.286-37.143 0-51.429l-58.286-58.286c-14.286-14.286-37.143-14.286-51.429 0l-266.857 266.857-120.571-120.571c-14.286-14.286-37.143-14.286-51.429 0l-58.286 58.286c-14.286 14.286-14.286 37.143 0 51.429l204.571 204.571c14.286 14.286 37.143 14.286 51.429 0zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
            </svg>
            <button type="button" className="home-button1 button">
              Check In
            </button>
          </div>
        </div>
        <div className="home-container07"></div>
        <div className="home-container08">
          <Link to="/parity" className="home-navlink3">
            <div className="home-container09">
              <div className="home-container10">
                <div className="home-container11"></div>
                <div className="home-container12"></div>
                <div className="home-container13"></div>
              </div>
              <span className="home-text08">30 sec</span>
              <span className="home-text09">Parity</span>
            </div>
          </Link>
          <div className="home-container14">
            <div className="home-container15">
              <div className="home-container16"></div>
              <div className="home-container17"></div>
              <div className="home-container18"></div>
            </div>
            <span className="home-text10">1 min</span>
            <span className="home-text11">Parity</span>
          </div>
        </div>
        <div className="home-container19">
          <div className="home-container20">
            <div className="home-container21">
              <div className="home-container22"></div>
              <div className="home-container23"></div>
              <div className="home-container24"></div>
            </div>
            <span className="home-text12">2 min</span>
            <span className="home-text13">Parity</span>
          </div>
          <div className="home-container25">
            <div className="home-container26">
              <div className="home-container27"></div>
              <div className="home-container28"></div>
              <div className="home-container29"></div>
            </div>
            <span className="home-text14">
              <span>3 min</span>
              <br></br>
            </span>
            <span className="home-text17">Parity</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
