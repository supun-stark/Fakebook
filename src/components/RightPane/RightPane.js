import React from 'react'
import './rightPane.css'

export default function RightPane() {
  return (
    <div className='rightPaneBox'>

      <div className="rightPaneContainer">

        <div className="adContainer">

          <span className="sponsered">Sponsored</span>
          <img src="/images/add.jpg" alt="" className="adImage" />
             <div className='note'><span className="text">Burger King has launched a new year campaign #SoberWhopper to promote its double patty whopper. Please visit to site for more details.</span></div>
        </div>

        <div className="birthdayContainer">
          <img src="/images/gift.png" alt="" className="birthdayImage" />
          <span className="birthdayText"><b>Rex Smith</b> and <b>2 others</b> have birthday today.</span>
        </div>

        <div className="onlineContainer">
          <div className="onlineNew">
          <span className="onlineText">Online (10)</span>
          </div>
        </div>

        <div className="friendList">

          <li className="onlineFriend">
            <div className="onlineFriendImgContainer">
              <img src="/images/men2.jpg" alt="" className="friendImg" />
              <span className="onlineStatus"></span>
            </div>
              <span className="onlineFriendName">Katty Jay</span>

          </li>


          <li className="onlineFriend">
            <div className="onlineFriendImgContainer">
              <img src="/images/10.jpg" alt="" className="friendImg" />
              <span className="onlineStatus"></span>
            </div>
              <span className="onlineFriendName">Michel Hales</span>

          </li>

          <li className="onlineFriend">
            <div className="onlineFriendImgContainer">
              <img src="/images/men3.jpg" alt="" className="friendImg" />
              <span className="onlineStatus"></span>
            </div>
              <span className="onlineFriendName">Jane Morgan</span>

          </li>

          <li className="onlineFriend">
            <div className="onlineFriendImgContainer">
              <img src="/images/men4.png" alt="" className="friendImg" />
              <span className="onlineStatus"></span>
            </div>
              <span className="onlineFriendName">Chris Hope</span>

          </li>

          <li className="onlineFriend">
            <div className="onlineFriendImgContainer">
              <img src="/images/men5.png" alt="" className="friendImg" />
              <span className="onlineStatus"></span>
            </div>
              <span className="onlineFriendName">Jefry Josheps</span>

          </li>

          <li className="onlineFriend">
            <div className="onlineFriendImgContainer">
              <img src="/images/men6.jpg" alt="" className="friendImg" />
              <span className="onlineStatus"></span>
            </div>
              <span className="onlineFriendName">Mathew Dewis</span>

          </li>


          <li className="onlineFriend">
            <div className="onlineFriendImgContainer">
              <img src="/images/men7.jpg" alt="" className="friendImg" />
              <span className="onlineStatus"></span>
            </div>
              <span className="onlineFriendName">Sam Wokes</span>

          </li>

          <li className="onlineFriend">
            <div className="onlineFriendImgContainer">
              <img src="/images/women1.jpg" alt="" className="friendImg" />
              <span className="onlineStatus"></span>
            </div>
              <span className="onlineFriendName">Molly Williams</span>

          </li>

          <li className="onlineFriend">
            <div className="onlineFriendImgContainer">
              <img src="/images/women2.jpg" alt="" className="friendImg" />
              <span className="onlineStatus"></span>
            </div>
              <span className="onlineFriendName">Shelly Fernandez</span>

          </li>

          <li className="onlineFriend">
            <div className="onlineFriendImgContainer">
              <img src="/images/men8.jpg" alt="" className="friendImg" />
              <span className="onlineStatus"></span>
            </div>
              <span className="onlineFriendName">Nesh Jolie</span>

          </li>



        </div>
      </div>

    </div>
  )
}
