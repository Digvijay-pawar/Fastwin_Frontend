import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import Tab from '../components/tab'
import Tab1 from '../components/tab1'
import Tab2 from '../components/tab2'
import Tab3 from '../components/tab3'
import { projectStyleVariants, TOKENS } from '.style'

const Home = (props) => {
  return (
    <Container>
      <Container01>
        <Container02 projVariant="navbar">
          <Component rootClassName="rootClassName17"></Component>
          <Component1 rootClassName="rootClassName15"></Component1>
          <Component2 rootClassName="rootClassName15"></Component2>
          <Component3 rootClassName="rootClassName15"></Component3>
        </Container02>
        <Container03>
          <Text>
            <Text01>Balance</Text01>
            <Text02></Text02>
            <Text03>₹1000.00</Text03>
            <Text04></Text04>
            <Text05>
              ID:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </Text05>
            <Text06>1234567</Text06>
            <Text07></Text07>
          </Text>
          <Navlink to="/recharge" projVariant="button">
            Recharge
          </Navlink>
          <Navlink1 to="/withdraw" projVariant="button">
            Withdraw
          </Navlink1>
        </Container03>
        <Container04>
          <Navlink2 to="/task-reward">
            <Container05>
              <Icon viewBox="0 0 1024 1024">
                <Icon1 d="M469.333 554.667v341.333h-256v-341.333zM554.667 896v-341.333h256v341.333zM320 256c-17.664 0-33.621-7.125-45.269-18.731s-18.731-27.605-18.731-45.269 7.125-33.621 18.731-45.269 27.605-18.731 45.269-18.731c26.837 0 48.725 9.515 67.584 25.003 16.043 13.141 29.909 30.677 41.643 50.219 10.283 17.109 18.475 35.029 24.747 51.328zM569.429 256c6.869-17.749 15.061-35.669 25.301-52.779 11.733-19.584 25.643-37.077 41.643-50.219 18.901-15.488 40.789-25.003 67.627-25.003 17.664 0 33.621 7.125 45.269 18.731s18.731 27.605 18.731 45.269-7.125 33.621-18.731 45.269-27.605 18.731-45.269 18.731zM469.333 341.333v128h-341.333v-128h192zM838.955 256c9.216-19.413 14.379-41.088 14.379-64 0-41.216-16.768-78.635-43.733-105.6s-64.384-43.733-105.6-43.733c-49.493 0-89.984 18.347-121.685 44.331-25.728 21.077-45.568 47.061-60.715 72.277-3.413 5.675-6.613 11.349-9.6 16.981-2.987-5.632-6.187-11.307-9.6-16.981-15.147-25.216-34.987-51.2-60.715-72.277-31.701-25.984-72.192-44.331-121.685-44.331-41.216 0-78.635 16.768-105.6 43.733s-43.733 64.384-43.733 105.6c0 22.912 5.163 44.587 14.379 64h-99.712c-23.552 0-42.667 19.115-42.667 42.667v213.333c0 23.552 19.115 42.667 42.667 42.667h42.667v384c0 23.552 19.115 42.667 42.667 42.667h682.667c23.552 0 42.667-19.115 42.667-42.667v-384h42.667c23.552 0 42.667-19.115 42.667-42.667v-213.333c0-23.552-19.115-42.667-42.667-42.667zM554.667 341.333h341.333v128h-341.333z"></Icon1>
              </Icon>
              <Button type="button" projVariant="button">
                Task Reward
              </Button>
            </Container05>
          </Navlink2>
          <Container06>
            <Icon2 viewBox="0 0 877.7142857142857 1024">
              <Icon3 d="M391.429 742.286l350.857-350.857c14.286-14.286 14.286-37.143 0-51.429l-58.286-58.286c-14.286-14.286-37.143-14.286-51.429 0l-266.857 266.857-120.571-120.571c-14.286-14.286-37.143-14.286-51.429 0l-58.286 58.286c-14.286 14.286-14.286 37.143 0 51.429l204.571 204.571c14.286 14.286 37.143 14.286 51.429 0zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></Icon3>
            </Icon2>
            <Button1 type="button" projVariant="button">
              Check In
            </Button1>
          </Container06>
        </Container04>
        <Container07></Container07>
        <Container08>
          <Container09>
            <Container10>
              <Container11></Container11>
              <Container12></Container12>
              <Container13></Container13>
            </Container10>
            <Text08>2 min</Text08>
            <Text09>Parity</Text09>
          </Container09>
          <Container14>
            <Container15>
              <Container16></Container16>
              <Container17></Container17>
              <Container18></Container18>
            </Container15>
            <Text10>
              <Text11>3 min</Text11>
              <Text12></Text12>
            </Text10>
            <Text13>Parity</Text13>
          </Container14>
        </Container08>
        <Container19>
          <Container20>
            <Container21>
              <Container22></Container22>
              <Container23></Container23>
              <Container24></Container24>
            </Container21>
            <Text14>2 min</Text14>
            <Text15>Parity</Text15>
          </Container20>
          <Container25>
            <Container26>
              <Container27></Container27>
              <Container28></Container28>
              <Container29></Container29>
            </Container26>
            <Text16>
              <Text17>3 min</Text17>
              <Text18></Text18>
            </Text16>
            <Text19>Parity</Text19>
          </Container25>
        </Container19>
      </Container01>
    </Container>
  )
}

export default Home

const Container = styled('div')({
  width: '100%',
  display: 'flex',
  overflow: 'auto',
  'min-height': '100vh',
  'align-items': 'center',
  'flex-direction': 'column',
  'justify-content': 'center',
})

const Container01 = styled('div')({
  flex: '0 0 auto',
  width: '500px',
  height: '100vh',
  display: 'flex',
  'box-shadow': '5px 5px 10px 0px #d4d4d4',
  'align-items': 'flex-start',
  'flex-direction': 'column',
  'background-color': 'rgba(133, 220, 255, 0.04)',
  '@media(max-width: 479px)': {
    'background-color': 'rgba(133, 220, 255, 0.04)',
    width: '100%',
  },
})

const Container02 = styled('div')(projectStyleVariants, {
  width: '500px',
  height: '12vh',
  padding: TOKENS.DlSpaceSpaceUnit,
  'box-shadow': '5px 5px 10px 0px #d4d4d4',
  'margin-top': '90vh',
  'background-color': TOKENS.DlColorPrimary100,
  '@media(max-width: 767px)': {
    height: '10vh',
    'margin-top': '88vh',
    'margin-bottom': TOKENS.DlSpaceSpaceHalfunit,
    'padding-bottom': '13px',
  },
  '@media(max-width: 479px)': {
    top: '88vh',
    left: '0px',
    width: '100%',
    height: '14vh',
    position: 'absolute',
    'margin-top': '0vh',
    padding: '0px',
  },
})

const Component = styled('Tab')({
  'text-decoration': 'none',
})

const Component1 = styled('Tab1')({
  'text-decoration': 'none',
})

const Component2 = styled('Tab2')({
  'text-decoration': 'none',
})

const Component3 = styled('Tab3')({
  'text-decoration': 'none',
})

const Container03 = styled('div')({
  width: '100%',
  height: '132px',
  display: 'flex',
  position: 'relative',
  'margin-top': TOKENS.DlSpaceSpaceUnit,
  'align-items': 'flex-start',
  'padding-top': TOKENS.DlSpaceSpaceUnit,
  'padding-right': TOKENS.DlSpaceSpaceTwounits,
  'flex-direction': 'column',
  'padding-bottom': TOKENS.DlSpaceSpaceUnit,
  '@media(max-width: 479px)': {
    width: '90%',
    'align-self': 'center',
    'padding-left': '0px',
  },
})

const Text = styled('span')({
  'font-size': '20px',
  'font-weight': '700',
  'line-height': '35px',
})

const Text01 = styled('span')({
  color: 'var(--dl-color-gray-500)',
  'font-style': 'normal',
})

const Text02 = styled('br')({
  'font-style': 'normal',
})

const Text03 = styled('span')({
  'font-size': '30px',
  'font-style': 'normal',
})

const Text04 = styled('br')({
  'font-style': 'normal',
})

const Text05 = styled('span')({
  'font-size': '15px',
  'font-weight': '500',
})

const Text06 = styled('span')({
  color: 'var(--dl-color-gray-500)',
  'font-size': '15px',
  'font-weight': '500',
})

const Text07 = styled('br')({
  'font-style': 'normal',
})

const Navlink = styled('Link')(projectStyleVariants, {
  top: '20px',
  left: '309px',
  width: '130px',
  position: 'absolute',
  'border-color': TOKENS.DlColorPrimary500,
  'text-decoration': 'none',
  'background-color': TOKENS.DlColorPrimary500,
  '@media(max-width: 479px)': {
    position: 'absolute',
    height: '39px',
    top: '10px',
    right: '11px',
    left: '150px',
  },
})

const Navlink1 = styled('Link')(projectStyleVariants, {
  top: '74px',
  left: '308px',
  width: '130px',
  position: 'absolute',
  'border-color': TOKENS.DlColorGray900,
  'text-decoration': 'none',
  'background-color': TOKENS.DlColorGray900,
  '@media(max-width: 479px)': {
    top: '74px',
    right: '35px',
    left: '150px',
  },
})

const Container04 = styled('div')({
  width: '100%',
  height: '47px',
  display: 'flex',
  padding: TOKENS.DlSpaceSpaceUnit,
  'align-items': 'flex-start',
  'padding-top': TOKENS.DlSpaceSpaceTwounits,
  'padding-left': TOKENS.DlSpaceSpaceTwounits,
  'padding-right': TOKENS.DlSpaceSpaceTwounits,
  'padding-bottom': TOKENS.DlSpaceSpaceTwounits,
  '@media(max-width: 479px)': {
    'margin-top': TOKENS.DlSpaceSpaceUnit,
    'margin-bottom': TOKENS.DlSpaceSpaceUnit,
  },
})

const Navlink2 = styled('Link')({
  display: 'contents',
})

const Container05 = styled('div')({
  width: '143px',
  height: '31px',
  display: 'flex',
  'align-items': 'flex-start',
  'margin-left': TOKENS.DlSpaceSpaceFourunits,
  'text-decoration': 'none',
  '@media(max-width: 479px)': {
    'margin-left': '0px',
  },
})

const Icon = styled('svg')({
  fill: TOKENS.DlColorSuccess300,
  width: '24px',
  height: '24px',
})

const Icon1 = styled('path')({})

const Button = styled('button')(projectStyleVariants, {
  width: '105px',
  'align-self': 'center',
  'padding-top': '0px',
  'border-width': '0px',
  'padding-left': '0px',
  'padding-right': '0px',
  'padding-bottom': '0px',
  'background-color': 'rgba(133, 220, 255, 0.1)',
})

const Container06 = styled('div')({
  width: '206px',
  height: '31px',
  display: 'flex',
  'align-items': 'flex-start',
  'justify-content': 'center',
})

const Icon2 = styled('svg')({
  fill: TOKENS.DlColorDanger700,
  width: '24px',
  height: '24px',
})

const Icon3 = styled('path')({})

const Button1 = styled('button')(projectStyleVariants, {
  width: '85px',
  'align-self': 'center',
  'padding-top': '0px',
  'border-width': '0px',
  'padding-left': '0px',
  'padding-right': '0px',
  'padding-bottom': '0px',
  'background-color': 'rgba(133, 220, 255, 0.1)',
})

const Container07 = styled('div')({
  width: '90%',
  height: '133px',
  display: 'flex',
  'align-self': 'center',
  'box-shadow': '5px 5px 10px 0px #d4d4d4',
  'margin-top': TOKENS.DlSpaceSpaceUnit,
  'align-items': 'flex-start',
  'border-radius': TOKENS.DlRadiusRadiusRadius8,
  'flex-direction': 'column',
  '@media(max-width: 479px)': {
    'align-self': 'flex-end',
    width: 'auto',
  },
})

const Container08 = styled('div')({
  flex: '0 0 auto',
  width: '100%',
  display: 'flex',
  'margin-top': '1px',
  'align-items': 'flex-start',
  'padding-top': '0px',
  'padding-left': TOKENS.DlSpaceSpaceOneandhalfunits,
  'padding-right': TOKENS.DlSpaceSpaceOneandhalfunits,
  'padding-bottom': TOKENS.DlSpaceSpaceOneandhalfunits,
  '@media(max-width: 479px)': {
    width: '95%',
    'justify-content': 'center',
    padding: TOKENS.DlSpaceSpaceHalfunit,
  },
})

const Container09 = styled('div')({
  flex: '0 0 auto',
  width: '47.5%',
  height: '113px',
  display: 'flex',
  position: 'relative',
  'align-items': 'center',
  'margin-right': '21px',
  'border-radius': TOKENS.DlRadiusRadiusRadius8,
  'justify-content': 'flex-start',
  'background-color': 'rgba(76, 195, 188, 0.7)',
  '@media(max-width: 479px)': {
    'margin-left': '10px',
    'margin-right': '2px',
  },
})

const Container10 = styled('div')({
  top: '24px',
  left: '78px',
  width: '53px',
  height: '51px',
  display: 'flex',
  position: 'absolute',
  'align-items': 'flex-start',
})

const Container11 = styled('div')({
  top: '0px',
  flex: '0 0 auto',
  left: '0px',
  width: '33px',
  height: '33px',
  display: 'flex',
  position: 'absolute',
  'box-shadow': '5px 5px 10px 0px #d4d4d4',
  'align-items': 'flex-start',
  'border-radius': TOKENS.DlRadiusRadiusRound,
  'background-color': TOKENS.DlColorDanger500,
})

const Container12 = styled('div')({
  top: '0px',
  flex: '0 0 auto',
  left: '20px',
  width: '33px',
  height: '33px',
  display: 'flex',
  position: 'absolute',
  'box-shadow': '5px 5px 10px 0px #d4d4d4',
  'align-items': 'flex-start',
  'border-radius': TOKENS.DlRadiusRadiusRound,
  'background-color': TOKENS.DlColorSuccess500,
})

const Container13 = styled('div')({
  top: '18px',
  flex: '0 0 auto',
  left: '8px',
  width: '33px',
  height: '33px',
  display: 'flex',
  position: 'absolute',
  'box-shadow': '5px 5px 10px 0px #d4d4d4',
  'align-items': 'flex-start',
  'border-radius': TOKENS.DlRadiusRadiusRound,
  'background-color': '#a93298',
})

const Text08 = styled('span')({
  top: '80px',
  left: '82px',
  position: 'absolute',
  'font-style': 'normal',
  'font-weight': '700',
})

const Text09 = styled('span')({
  'align-self': 'flex-start',
  'margin-top': TOKENS.DlSpaceSpaceHalfunit,
  'margin-left': TOKENS.DlSpaceSpaceHalfunit,
  'padding-top': '4px',
  'padding-left': TOKENS.DlSpaceSpaceHalfunit,
  'border-radius': TOKENS.DlRadiusRadiusRadius8,
  'padding-right': TOKENS.DlSpaceSpaceHalfunit,
  'padding-bottom': '4px',
  'background-color': TOKENS.DlColorSuccess300,
})

const Container14 = styled('div')({
  flex: '0 0 auto',
  width: '47.5%',
  height: '113px',
  display: 'flex',
  position: 'relative',
  'align-items': 'center',
  'border-radius': TOKENS.DlRadiusRadiusRadius8,
  'justify-content': 'flex-start',
  'background-color': 'rgba(76, 195, 188, 0.7)',
  '@media(max-width: 479px)': {
    'margin-right': '0px',
  },
})

const Container15 = styled('div')({
  top: '24px',
  left: '78px',
  width: '53px',
  height: '51px',
  display: 'flex',
  position: 'absolute',
  'align-items': 'flex-start',
})

const Container16 = styled('div')({
  top: '0px',
  flex: '0 0 auto',
  left: '0px',
  width: '33px',
  height: '33px',
  display: 'flex',
  position: 'absolute',
  'box-shadow': '5px 5px 10px 0px #d4d4d4',
  'align-items': 'flex-start',
  'border-radius': TOKENS.DlRadiusRadiusRound,
  'background-color': TOKENS.DlColorDanger500,
})

const Container17 = styled('div')({
  top: '0px',
  flex: '0 0 auto',
  left: '20px',
  width: '33px',
  height: '33px',
  display: 'flex',
  position: 'absolute',
  'box-shadow': '5px 5px 10px 0px #d4d4d4',
  'align-items': 'flex-start',
  'border-radius': TOKENS.DlRadiusRadiusRound,
  'background-color': TOKENS.DlColorSuccess500,
})

const Container18 = styled('div')({
  top: '18px',
  flex: '0 0 auto',
  left: '8px',
  width: '33px',
  height: '33px',
  display: 'flex',
  position: 'absolute',
  'box-shadow': '5px 5px 10px 0px #d4d4d4',
  'align-items': 'flex-start',
  'border-radius': TOKENS.DlRadiusRadiusRound,
  'background-color': '#a93298',
})

const Text10 = styled('span')({
  top: '80px',
  left: '82px',
  position: 'absolute',
  'font-style': 'normal',
  'font-weight': '700',
})

const Text11 = styled('span')({})

const Text12 = styled('br')({})

const Text13 = styled('span')({
  'align-self': 'flex-start',
  'margin-top': TOKENS.DlSpaceSpaceHalfunit,
  'margin-left': TOKENS.DlSpaceSpaceHalfunit,
  'padding-top': '4px',
  'padding-left': TOKENS.DlSpaceSpaceHalfunit,
  'border-radius': TOKENS.DlRadiusRadiusRadius8,
  'padding-right': TOKENS.DlSpaceSpaceHalfunit,
  'padding-bottom': '4px',
  'background-color': TOKENS.DlColorSuccess300,
})

const Container19 = styled('div')({
  flex: '0 0 auto',
  width: '100%',
  display: 'flex',
  'margin-top': '1px',
  'align-items': 'flex-start',
  'padding-top': '0px',
  'padding-left': TOKENS.DlSpaceSpaceOneandhalfunits,
  'padding-right': TOKENS.DlSpaceSpaceOneandhalfunits,
  'padding-bottom': TOKENS.DlSpaceSpaceOneandhalfunits,
  '@media(max-width: 479px)': {
    width: '95%',
    'justify-content': 'center',
    'padding-right': TOKENS.DlSpaceSpaceUnit,
    'padding-left': TOKENS.DlSpaceSpaceUnit,
    'padding-bottom': TOKENS.DlSpaceSpaceUnit,
    'padding-top': TOKENS.DlSpaceSpaceUnit,
    padding: TOKENS.DlSpaceSpaceHalfunit,
  },
})

const Container20 = styled('div')({
  flex: '0 0 auto',
  width: '47.5%',
  height: '113px',
  display: 'flex',
  position: 'relative',
  'align-items': 'center',
  'margin-right': '21px',
  'border-radius': TOKENS.DlRadiusRadiusRadius8,
  'justify-content': 'flex-start',
  'background-color': 'rgba(76, 195, 188, 0.7)',
  '@media(max-width: 479px)': {
    'margin-left': '10px',
    'margin-right': '2px',
  },
})

const Container21 = styled('div')({
  top: '24px',
  left: '78px',
  width: '53px',
  height: '51px',
  display: 'flex',
  position: 'absolute',
  'align-items': 'flex-start',
})

const Container22 = styled('div')({
  top: '0px',
  flex: '0 0 auto',
  left: '0px',
  width: '33px',
  height: '33px',
  display: 'flex',
  position: 'absolute',
  'box-shadow': '5px 5px 10px 0px #d4d4d4',
  'align-items': 'flex-start',
  'border-radius': TOKENS.DlRadiusRadiusRound,
  'background-color': TOKENS.DlColorDanger500,
})

const Container23 = styled('div')({
  top: '0px',
  flex: '0 0 auto',
  left: '20px',
  width: '33px',
  height: '33px',
  display: 'flex',
  position: 'absolute',
  'box-shadow': '5px 5px 10px 0px #d4d4d4',
  'align-items': 'flex-start',
  'border-radius': TOKENS.DlRadiusRadiusRound,
  'background-color': TOKENS.DlColorSuccess500,
})

const Container24 = styled('div')({
  top: '18px',
  flex: '0 0 auto',
  left: '8px',
  width: '33px',
  height: '33px',
  display: 'flex',
  position: 'absolute',
  'box-shadow': '5px 5px 10px 0px #d4d4d4',
  'align-items': 'flex-start',
  'border-radius': TOKENS.DlRadiusRadiusRound,
  'background-color': '#a93298',
})

const Text14 = styled('span')({
  top: '80px',
  left: '82px',
  position: 'absolute',
  'font-style': 'normal',
  'font-weight': '700',
})

const Text15 = styled('span')({
  'align-self': 'flex-start',
  'margin-top': TOKENS.DlSpaceSpaceHalfunit,
  'margin-left': TOKENS.DlSpaceSpaceHalfunit,
  'padding-top': '4px',
  'padding-left': TOKENS.DlSpaceSpaceHalfunit,
  'border-radius': TOKENS.DlRadiusRadiusRadius8,
  'padding-right': TOKENS.DlSpaceSpaceHalfunit,
  'padding-bottom': '4px',
  'background-color': TOKENS.DlColorSuccess300,
})

const Container25 = styled('div')({
  flex: '0 0 auto',
  width: '47.5%',
  height: '113px',
  display: 'flex',
  position: 'relative',
  'align-items': 'center',
  'border-radius': TOKENS.DlRadiusRadiusRadius8,
  'justify-content': 'flex-start',
  'background-color': 'rgba(76, 195, 188, 0.7)',
  '@media(max-width: 479px)': {
    'margin-right': '0px',
  },
})

const Container26 = styled('div')({
  top: '24px',
  left: '78px',
  width: '53px',
  height: '51px',
  display: 'flex',
  position: 'absolute',
  'align-items': 'flex-start',
})

const Container27 = styled('div')({
  top: '0px',
  flex: '0 0 auto',
  left: '0px',
  width: '33px',
  height: '33px',
  display: 'flex',
  position: 'absolute',
  'box-shadow': '5px 5px 10px 0px #d4d4d4',
  'align-items': 'flex-start',
  'border-radius': TOKENS.DlRadiusRadiusRound,
  'background-color': TOKENS.DlColorDanger500,
})

const Container28 = styled('div')({
  top: '0px',
  flex: '0 0 auto',
  left: '20px',
  width: '33px',
  height: '33px',
  display: 'flex',
  position: 'absolute',
  'box-shadow': '5px 5px 10px 0px #d4d4d4',
  'align-items': 'flex-start',
  'border-radius': TOKENS.DlRadiusRadiusRound,
  'background-color': TOKENS.DlColorSuccess500,
})

const Container29 = styled('div')({
  top: '18px',
  flex: '0 0 auto',
  left: '8px',
  width: '33px',
  height: '33px',
  display: 'flex',
  position: 'absolute',
  'box-shadow': '5px 5px 10px 0px #d4d4d4',
  'align-items': 'flex-start',
  'border-radius': TOKENS.DlRadiusRadiusRound,
  'background-color': '#a93298',
})

const Text16 = styled('span')({
  top: '80px',
  left: '82px',
  position: 'absolute',
  'font-style': 'normal',
  'font-weight': '700',
})

const Text17 = styled('span')({})

const Text18 = styled('br')({})

const Text19 = styled('span')({
  'align-self': 'flex-start',
  'margin-top': TOKENS.DlSpaceSpaceHalfunit,
  'margin-left': TOKENS.DlSpaceSpaceHalfunit,
  'padding-top': '4px',
  'padding-left': TOKENS.DlSpaceSpaceHalfunit,
  'border-radius': TOKENS.DlRadiusRadiusRadius8,
  'padding-right': TOKENS.DlSpaceSpaceHalfunit,
  'padding-bottom': '4px',
  'background-color': TOKENS.DlColorSuccess300,
})
