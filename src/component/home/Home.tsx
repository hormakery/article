import React, { useState } from 'react'
import {AiFillCaretDown} from 'react-icons/ai'
import {
    Icon,
    Left,
    Right,
    Title,
    Image,
    Excerpt,
    Profile,
    ArrowIcon,
    ShareOption,
    ArrowWrapper,
    StatusWrapper,
    ProfileWrapper,
    LayoutMaxwidthWrapper,
} from './Home.styles'



const Home = () => {

    const [toggle, setToggle]=useState(false)
    const handleToggle=()=>{
        setToggle(!toggle)
    }
  return (
    <LayoutMaxwidthWrapper>
        <Left>
        <picture>
            <source media="(min-width: 650px)" srcSet="../images/drawers.jpg"/>
            <img src="../images/drawers.jpg" alt="Flowers" className='drawer-img'/>
        </picture>
        </Left>

        <Right>
            <Title>
                Shift the overall look and feel by adding these wonderful touches to furniture in your home
            </Title>

            <Excerpt>Ever been in a room and felt like something was missing ?
                Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.
            </Excerpt>
               
            <ProfileWrapper>
                <Profile>
                    <Image src='../images/avatar-michelle.jpg' alt=""/>

                    <StatusWrapper>
                        <span>Michelle Appleton</span>
                        <span>28 June 2020</span>
                    </StatusWrapper>
                </Profile>
                    
                <ArrowWrapper onClick={() => handleToggle()} className={!toggle ? 'dark-background': 'light-background'}>
                <ArrowIcon src='../images/icon-share.svg' alt='share'/>
                </ArrowWrapper>
            </ProfileWrapper>
            {!toggle ?
            <><ShareOption>
                      <Icon>share</Icon>
                      <Icon><a href='#'><img src='../images/icon-facebook.svg' alt='' /></a></Icon>
                      <Icon><a href='#'><img src='../images/icon-twitter.svg' alt='' /></a></Icon>
                      <Icon><a href='#'><img src='../images/icon-pinterest.svg' alt='' /></a></Icon>
                  </ShareOption>
                  {/* <div>
                    <AiFillCaretDown size={20} className='arrow' />
                    </div> */}
                    </>
            : ""
        }
        </Right>
    </LayoutMaxwidthWrapper>
  )
}

export default Home