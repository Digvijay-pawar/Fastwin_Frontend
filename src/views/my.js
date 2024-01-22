import React from 'react'

import { Helmet } from 'react-helmet'

import Tab from '../components/tab'
import Tab1 from '../components/tab1'
import Tab2 from '../components/tab2'
import Tab3 from '../components/tab3'
import './my.css'

import apiClient from '../api-client/auth-client'
import { useUser } from '../user-context/user-context';

const My = (props) => {
  const { updateUser, user } = useUser();
  const handleLogout = async () => {
    try {
      await apiClient.logout();
      console.log('Logout successful');

      // Clear user data in the context
      updateUser(null);

      // Optionally, you can remove the token from localStorage
      localStorage.removeItem('token');
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };
  return (
    <div className="my-container">
      <Helmet>
        <title>My - Anguished Loving Salmon</title>
        <meta property="og:title" content="My - Anguished Loving Salmon" />
      </Helmet>
      <div className="my-container1">
        <div className="my-container2"></div>
        <div className="my-container3">
          <ul className="my-ul list">
            <li className="my-li list-item">
              <svg viewBox="0 0 1024 1024" className="my-icon">
                <path d="M864 0h-768c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h768c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM832 896h-704v-768h704v768zM256 448h448v64h-448zM256 576h448v64h-448zM256 704h448v64h-448zM256 320h448v64h-448z"></path>
              </svg>
              <span className="my-text">Order Recored</span>
              <svg viewBox="0 0 694.8571428571428 1024" className="my-icon02">
                <path d="M632.571 501.143l-424 424c-14.286 14.286-37.143 14.286-51.429 0l-94.857-94.857c-14.286-14.286-14.286-37.143 0-51.429l303.429-303.429-303.429-303.429c-14.286-14.286-14.286-37.143 0-51.429l94.857-94.857c14.286-14.286 37.143-14.286 51.429 0l424 424c14.286 14.286 14.286 37.143 0 51.429z"></path>
              </svg>
              <svg viewBox="0 0 694.8571428571428 1024" className="my-icon04">
                <path d="M632.571 501.143l-424 424c-14.286 14.286-37.143 14.286-51.429 0l-94.857-94.857c-14.286-14.286-14.286-37.143 0-51.429l303.429-303.429-303.429-303.429c-14.286-14.286-14.286-37.143 0-51.429l94.857-94.857c14.286-14.286 37.143-14.286 51.429 0l424 424c14.286 14.286 14.286 37.143 0 51.429z"></path>
              </svg>
            </li>
            <li className="my-li1 list-item">
              <svg viewBox="0 0 513.1702857142857 1024" className="my-icon06">
                <path d="M513.143 268.571v58.286c0 10.286-8 18.286-18.286 18.286h-96c-17.714 109.714-101.714 181.143-231.429 196.571 85.143 90.857 176 200.571 262.286 306.286 4.571 5.143 5.714 13.143 2.286 19.429-2.857 6.286-9.143 10.286-16.571 10.286h-111.429c-5.714 0-10.857-2.286-14.286-6.857-92-110.286-176.571-211.429-284.571-326.286-3.429-3.429-5.143-8-5.143-12.571v-72.571c0-9.714 8-18.286 18.286-18.286h64c100.571 0 163.429-33.714 180-96h-244c-10.286 0-18.286-8-18.286-18.286v-58.286c0-10.286 8-18.286 18.286-18.286h236c-21.714-42.857-73.143-64.571-153.143-64.571h-82.857c-10.286 0-18.286-8.571-18.286-18.286v-76c0-10.286 8-18.286 18.286-18.286h475.429c10.286 0 18.286 8 18.286 18.286v58.286c0 10.286-8 18.286-18.286 18.286h-133.143c18.286 23.429 30.286 50.857 36.571 82.286h97.714c10.286 0 18.286 8 18.286 18.286z"></path>
              </svg>
              <span className="my-text01">Finantial Details</span>
              <svg viewBox="0 0 694.8571428571428 1024" className="my-icon08">
                <path d="M632.571 501.143l-424 424c-14.286 14.286-37.143 14.286-51.429 0l-94.857-94.857c-14.286-14.286-14.286-37.143 0-51.429l303.429-303.429-303.429-303.429c-14.286-14.286-14.286-37.143 0-51.429l94.857-94.857c14.286-14.286 37.143-14.286 51.429 0l424 424c14.286 14.286 14.286 37.143 0 51.429z"></path>
              </svg>
            </li>
            <li className="my-li2 list-item">
              <span className="my-text02">Follow us</span>
              <svg viewBox="0 0 1024 1024" className="my-icon10">
                <path d="M512 0c-282.8 0-512 229.2-512 512s229.2 512 512 512 512-229.2 512-512-229.2-512-512-512zM763.6 351l-84 395.8c-5.8 28.2-22.8 34.8-46.4 21.8l-128-94.6-61.4 59.8c-7.2 7-12.8 12.8-25.6 12.8-16.6 0-13.8-6.2-19.4-22l-43.6-143.2-126.6-39.4c-27.4-8.4-27.6-27.2 6.2-40.6l493.2-190.4c22.4-10.2 44.2 5.4 35.6 40z"></path>
              </svg>
              <svg viewBox="0 0 694.8571428571428 1024" className="my-icon12">
                <path d="M632.571 501.143l-424 424c-14.286 14.286-37.143 14.286-51.429 0l-94.857-94.857c-14.286-14.286-14.286-37.143 0-51.429l303.429-303.429-303.429-303.429c-14.286-14.286-14.286-37.143 0-51.429l94.857-94.857c14.286-14.286 37.143-14.286 51.429 0l424 424c14.286 14.286 14.286 37.143 0 51.429z"></path>
              </svg>
            </li>
            <li className="my-li3 list-item">
              <span className="my-text03">Support</span>
              <svg viewBox="0 0 1024 1024" className="my-icon14">
                <path d="M534 554q0-46 64-102t64-110q0-70-51-121t-121-51-120 51-50 121h86q0-34 25-60t59-26 60 26 26 60q0 28-20 50t-44 36-44 47-20 79h86zM534 704v-86h-86v86h86zM490 86q150 0 257 106t107 256q0 146-94 281t-248 209v-128h-22q-150 0-256-106t-106-256 106-256 256-106z"></path>
              </svg>
              <svg viewBox="0 0 694.8571428571428 1024" className="my-icon16">
                <path d="M632.571 501.143l-424 424c-14.286 14.286-37.143 14.286-51.429 0l-94.857-94.857c-14.286-14.286-14.286-37.143 0-51.429l303.429-303.429-303.429-303.429c-14.286-14.286-14.286-37.143 0-51.429l94.857-94.857c14.286-14.286 37.143-14.286 51.429 0l424 424c14.286 14.286 14.286 37.143 0 51.429z"></path>
              </svg>
            </li>
            <li className="my-li4 list-item">
              <span className="my-text04">Complaint</span>
              <svg viewBox="0 0 1024 1024" className="my-icon18">
                <path d="M1024 512c0 202.286-229.143 365.714-512 365.714-28 0-56-1.714-82.857-4.571-74.857 66.286-164 113.143-262.857 138.286-20.571 5.714-42.857 9.714-65.143 12.571-12.571 1.143-24.571-8-27.429-21.714v-0.571c-2.857-14.286 6.857-22.857 15.429-33.143 36-40.571 77.143-74.857 104-170.286-117.714-66.857-193.143-170.286-193.143-286.286 0-201.714 229.143-365.714 512-365.714s512 163.429 512 365.714z"></path>
              </svg>
              <svg viewBox="0 0 694.8571428571428 1024" className="my-icon20">
                <path d="M632.571 501.143l-424 424c-14.286 14.286-37.143 14.286-51.429 0l-94.857-94.857c-14.286-14.286-14.286-37.143 0-51.429l303.429-303.429-303.429-303.429c-14.286-14.286-14.286-37.143 0-51.429l94.857-94.857c14.286-14.286 37.143-14.286 51.429 0l424 424c14.286 14.286 14.286 37.143 0 51.429z"></path>
              </svg>
            </li>
          </ul>
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer noopener"
            className="my-link"
            onClick={handleLogout}
          >
            Sign out
          </a>
        </div>
        <div className="my-container4">
          <svg viewBox="0 0 1024 1024" className="my-icon22">
            <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
          </svg>
          <button type="button" className="my-button button">
            Change Username
          </button>
          <span className="my-text05">
            <span>
              Mob:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="my-text07">{user.mobileNumber}</span>
          </span>
          <button type="button" className="my-button1 button">
            Change Password
          </button>
          <span className="my-text08">User Name1</span>
          <span className="my-text09">
            <span>Id:</span>
            <span className="my-text11">{user.userID}</span>
          </span>
        </div>
      </div>
      <div className="my-container5 navbar">
        <Tab
          rootClassName="tab-root-class-name12"
          className="my-component"
        ></Tab>
        <Tab1
          rootClassName="tab1-root-class-name10"
          className="my-component1"
        ></Tab1>
        <Tab2
          rootClassName="tab2-root-class-name10"
          className="my-component2"
        ></Tab2>
        <Tab3
          rootClassName="tab3-root-class-name10"
          className="my-component3"
        ></Tab3>
      </div>
    </div>
  )
}

export default My
