import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
import Topic from "./Topic/Topic";
import { NavBar } from "../NavBar";
import Icon from "@mdi/react";
import { mdiTrendingUp, mdiNewBox } from "@mdi/js";
import "./Styles.css";
import logotravel from '../../assets/img/logotravel.png';


function Topics() {
  return (
    <div>
       <header>
        <nav>
          <div className="logo">
            <a href="/">
              <img src={logotravel} alt="Logo" />
            </a>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button type="submit">Search</button>
          </div>
        
          {/* <Link to="/BlogPosts" className="add-blog">
  Add a Blog
</Link> */}

          <div className="profile-dropdown">
            <button className="profile-dropbtn">
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/user-profile-icon.png" alt="Profile" />
            </button>
            <div className="profile-dropdown-content">
              <a href="#">Profile</a>
              <a href="#">Settings</a>
              <a href="#">Logout</a>
            </div>
          </div>
        </nav>
      </header>
    
      <main>
  
      <Icon
        path={mdiTrendingUp}
        title="Hottest Topics"
        size={1}
        horizontal
        vertical
        rotate={90}
        color="red"
        spin
      />
      <Link to="/hottest" key="hottest-link" className="topic-link">
        Hottest Topics
      </Link>
      <Icon
        path={mdiNewBox}
        title="Newest Topics"
        size={1}
        horizontal
        vertical
        rotate={90}
        color="white"
        spin
      />
      <Link to="/newest" key="newest-link" className="topic-link">
        Newest Topics
      </Link>
      <Topic>
      </Topic>
      <section className="cards-container">
 
  </section>
    </main>
     
    </div>
   
    
  );
}

export default Topics;
