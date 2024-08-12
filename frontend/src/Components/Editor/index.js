import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaFileAudio } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { MdOutlineStorage } from "react-icons/md";

import { IoArrowBackCircleOutline } from "react-icons/io5";

import "./index.css";

const Editor = () => {
  const [sideBarButton, setSideBarButton] = useState("Home");

  const [searchValue, setSearchValue] = useState("");

  const [isOpen, setIsOpen] = useState(true);

  const Home = () => {
    return <h1>home</h1>;
  };
  const Search = () => {
    return <h1>Search</h1>;
  };
  const Edit = () => {
    return <h1>Edit</h1>;
  };
  const sidebarData = [
    {
      name: "Home",
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
      name: "Review",
      icon: FaStar,
      id: 6,
    },
  ];
  const dashBoardView = () => {
    if (sideBarButton === "Home") {
      return <Home />;
    } else if (sideBarButton === "Search") {
      return <Search />;
    } else if (sideBarButton === "Edit") {
      return <Edit />;
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
          <IoMdSettings className="editor-profil-image" />
          <h1 className="editor-profil-heading">Settings</h1>
        </div>
      </div>

      <div>
        {!isOpen && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="editor-open-button"
          >
            <MdOutlineStorage />
          </button>
        )}
        {dashBoardView()}
      </div>
    </div>
  );
};

export default Editor;
