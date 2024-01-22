import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './task-reward.css'

const TaskReward = (props) => {
  return (
    <div className="task-reward-container">
      <Helmet>
        <title>Task-Reward - Anguished Loving Salmon</title>
        <meta
          property="og:title"
          content="Task-Reward - Anguished Loving Salmon"
        />
      </Helmet>
      <div className="task-reward-container1">
        <div className="task-reward-container2">
          <Link to="/" className="task-reward-navlink">
            <svg viewBox="0 0 1024 1024" className="task-reward-icon">
              <path d="M512 386.517v-109.184c0-10.923-4.181-21.845-12.501-30.208-8.32-8.32-19.243-12.459-30.165-12.459s-21.845 4.139-30.165 12.459l-268.501 264.875 268.501 264.832c8.32 8.32 19.243 12.501 30.165 12.501s21.845-4.181 30.165-12.501 12.501-19.285 12.501-30.165v-106.197c117.333 2.901 245.547 24.149 341.333 170.197v-42.667c0-197.675-149.333-360.235-341.333-381.483z"></path>
            </svg>
          </Link>
          <span className="task-reward-text">Rewards</span>
        </div>
        <div className="task-reward-container3">
          <span className="task-reward-text1">Welcome</span>
          <div className="task-reward-container4"></div>
          <span className="task-reward-text2">We will reward you with ₹20</span>
          <button type="button" className="task-reward-button button">
            Reward
          </button>
        </div>
        <div className="task-reward-container5">
          <span className="task-reward-text3">First recharge</span>
          <div className="task-reward-container6"></div>
          <span className="task-reward-text4">
            You will get ₹20 after complete first recharge
          </span>
          <button type="button" className="task-reward-button1 button">
            Reward
          </button>
        </div>
        <div className="task-reward-container7">
          <span className="task-reward-text5">Daily 100 orders</span>
          <div className="task-reward-container8"></div>
          <span className="task-reward-text6">
            Complete daily 100 orders to get ₹10 daily
          </span>
          <button type="button" className="task-reward-button2 button">
            Reward
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskReward
