import React from 'react'
import './leftPane.css'
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import HistoryIcon from '@mui/icons-material/History';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

export default function LeftPane() {
  return (
    <div className='leftPaneBox'>

      <div className="leftPaneContainer">
          <div className="leftPaneMenu">
            <li className="leftPaneMenuItem">
              <NewspaperIcon className='leftPanelMenuIcon'/>
              <span className="leftPanelMenuText">Newsfeed</span>
            </li>

            <li className="leftPaneMenuItem">
              <MarkUnreadChatAltIcon className='leftPanelMenuIcon'/>
              <span className="leftPanelMenuText">Messages</span>
            </li>

            <li className="leftPaneMenuItem">
              <GroupsIcon className='leftPanelMenuIcon'/>
              <span className="leftPanelMenuText">Groups</span>
            </li>

            <li className="leftPaneMenuItem">
              <ArticleIcon className='leftPanelMenuIcon'/>
              <span className="leftPanelMenuText">Pages</span>
            </li>

            <li className="leftPaneMenuItem">
              <OndemandVideoIcon className='leftPanelMenuIcon'/>
              <span className="leftPanelMenuText">Watch</span>
            </li>

            <li className="leftPaneMenuItem">
              <CalendarMonthIcon className='leftPanelMenuIcon'/>
              <span className="leftPanelMenuText">Events</span>
            </li>

            <li className="leftPaneMenuItem">
              <SportsEsportsIcon className='leftPanelMenuIcon'/>
              <span className="leftPanelMenuText">Games</span>
            </li>

            <li className="leftPaneMenuItem">
              <HistoryIcon className='leftPanelMenuIcon'/>
              <span className="leftPanelMenuText">Memories</span>
            </li>

            <li className="leftPaneMenuItem">
              <BookmarkIcon className='leftPanelMenuIcon'/>
              <span className="leftPanelMenuText">Saved</span>
            </li>

            <hr/>
            <div className="activity">
              <h3>Activity</h3>
            </div>
              

             <div className="activityList">

             <li className="activityListItem">
                <img src="/images/3.jpg" alt="" className="activitypropic" />
                <span className='activityName1'> <b>John David</b> shared post</span>
                <img src="/images/2.jpg" alt="" className="activitypic" />
              </li>


                <li className="activityListItem">
                <img src="/images/5.jpg" alt="" className="activitypropic" />
                <span className='activityName1'> <b>Tim Alex</b> liked post</span>
                <img src="/images/4.jpg" alt="" className="activitypic" />
                </li>

                <li className="activityListItem">
                <img src="/images/7.jpg" alt="" className="activitypropic" />
                <span className='activityName1'> <b>Maria Jane</b> liked post</span>
                <img src="/images/6.jpg" alt="" className="activitypic" />
                </li>


                <li className="activityListItem">
                <img src="/images/10.jpg" alt="" className="activitypropic" />
                <span className='activityName1'> <b>Joes Morgan</b> shared post</span>
                <img src="/images/8.jpg" alt="" className="activitypic" />
                </li>

                <li className="activityListItem">
                <img src="/images/12.jpg" alt="" className="activitypropic" />
                <span className='activityName1'> <b>Perry Jay</b> liked post</span>
                <img src="/images/9.jpg" alt="" className="activitypic" />
                </li>

             </div>

            </div>


          </div>

      </div>
   
  )
}
