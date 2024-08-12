import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaFileAudio } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineInsertPhoto } from "react-icons/md";
import "./index.css";

const Editor = () => {
  const [sideBarButton, setSideBarButton] = useState("Home");


  const [searchValue, setSearchValue] = useState("");

  const Home = ()=>{
    return(
      <h1>home</h1>
    )
  }
  const Search = ()=>{
    return(
      <h1>Search</h1>
    )
  }
  const sidebarData = [
    {
      name: "Home",
      icon: FaHome,
    },
    {
      name: "Search",
      icon: FaSearch,
    },
    {
      name: "Edit",
      icon: FaEdit,
    },
    {
      name: "Insert Image",
      icon: MdOutlineInsertPhoto,
    },
    {
      name: "Audio Transcribe",
      icon: FaFileAudio,
    },
    {
      name: "Review",
      icon: FaStar,
    },
  ];
  const dashBoardView =()=>{
    if(sideBarButton === "Home"){
      return <Home/>
    }else if(sideBarButton === "Search"){
      return <Search/>
    }
  }
// 2 after filter the data 
  const searchData = sidebarData.filter((each) =>
    each.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) //searchValue Varible created for empty search show like input element
  );
  return (
    <div className="editor-maincontainer">
      <div className="editor-sidebar-full-container">
        <div className="editor-search-to-review-container">
          <div className="editor-profil-card-container">
            <input
              type="search"
              placeholder="Search Tools Here"
              className="editor-search-input"
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          {/* 1 first map the object data */}
          {searchData.map((each, index) => {
            return (
              <button onClick={()=>setSideBarButton(each.name)} key={index} className="editor-profil-card-container">
                <each.icon className="editor-profil-image" />
                <h1 className="editor-profil-heading">{each.name}</h1>
              </button>
            );
          })}
        </div>

        <div className="editor-profil-card-container">
          <IoMdSettings className="editor-profil-image" />
          <h1 className="editor-profil-heading">Settings</h1>
        </div>
      </div>

<div>
  {
    dashBoardView()
  }
 

</div>
    </div>
  );
};

export default Editor;
