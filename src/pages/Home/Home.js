import React from 'react'
import NavBar from '../../components/Navigation/NavBar'
import LeftPane from '../../components/LeftPane/LeftPane'
import PostPane from '../../components/PostPane/PostPane'
import RightPane from '../../components/RightPane/RightPane'
import './home.css'

export default function Home() {
  return (
    <div>
        <NavBar/>
        <div className="bottomContainer">
          <LeftPane/>
          <PostPane/>
          <RightPane/>
        </div>

    </div>
  )
}
