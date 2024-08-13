import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaFileAudio } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { MdOutlineStorage } from "react-icons/md";
import Maineditor from '../Maineditor'                      // 1 import Maineditor because its add first button Maineditor  to clickit 
import Userdata from '../Userdata'
import { IoArrowBackCircleOutline } from "react-icons/io5";

import "./index.css";

const Editor = () => {
  const [sideBarButton, setSideBarButton] = useState("Maineditor"); // 2 adding Maineditor inbuilt showing first page 

  const [searchValue, setSearchValue] = useState("");

  const [isOpen, setIsOpen] = useState(true);

  const Search = () => {
    return <h1>Search</h1>;
  };
  const Edit = () => {
    return <h1>Edit</h1>;
  };
  const sidebarData = [
    {
      name: "Maineditor",    // 3 adding in object that Maineditor 
      icon: FaHome,
      id: 1,
    },
    {
      name: "Search",
      icon: FaSearch,
      id: 2,
    },
    {
      name: "Edit",
      icon: FaEdit,
      id: 3,
    },
    {
      name: "Insert Image",
      icon: MdOutlineInsertPhoto,
      id: 4,
    },
    {
      name: "Audio Transcribe",
      icon: FaFileAudio,
      id: 5,
    },
    {
      name: "Userdata",
      icon: FaStar,
      id: 6,
    },
  ];
  const dashBoardView = () => {
    if (sideBarButton === "Maineditor") {          // 4 we click Maineditor button it is open 
      return <Maineditor />;
    } else if (sideBarButton === "Search") {          // we click Search button it is open      
      return <Search />;  
    } else if (sideBarButton === "Edit") {          // same type all components buttons adding
      return <Edit />;
    }else if (sideBarButton === "Userdata") {          // same type all components buttons adding
      return <Userdata />;
    }
  };
  // 2 after filter the data
  const searchData = sidebarData.filter(
    (each) =>
      each.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) //searchValue Varible created for empty search show like input element
  );
  return (
    <div className="editor-maincontainer">
      <div
        className={`editor-sidebar-full-container ${isOpen && "open"}`}
        style={{ position: isOpen ? "relative" : "absolute" }}
      >
        <div className="editor-search-to-review-container">
          <div className="editor-profil-card-container-1"> 
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="editor-profil-image1"
            >
              <IoArrowBackCircleOutline />
            </button>
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
              <button
                onClick={() => setSideBarButton(each.name)}
                key={index}
                className="editor-profil-card-container"
                style={{
                  backgroundColor:
                    each.name === sideBarButton && "rgb(236, 180, 75)",
                }}
              >
                <each.icon className="editor-profil-image" />
                <h1 className="editor-profil-heading">{each.name}</h1>
              </button>
            );
          })}
        </div>

        <div className="editor-profil-card-container">
          <IoMdSettings className="editor-profil-image"/>
          <h1 className="editor-profil-heading">Settings</h1>
        </div>
      </div>



       {/*  this is rightside open dashboard like content writing  */}
      <div>
        {!isOpen && (
          <button
            onClick={() => setIsOpen(!isOpen)}  
            className="editor-open-button"
          >
            <MdOutlineStorage />
          </button>
          // this is function calling inthe dashBoardView using of {} must
        )}
        {dashBoardView()}                    
      </div>
    </div>
  );
};

export default Editor;
