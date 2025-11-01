import React, {useState} from "react";
import MenuButton from './components/MenuButton.jsx';

import ColorMenu from './components/menus/ColorMenu.jsx'
import EditMenu from './components/menus/EditMenu.jsx'
import FileMenu from './components/menus/FileMenu.jsx'
import ImageMenu from './components/menus/ImageMenu.jsx'
import LayerMenu from './components/menus/LayerMenu.jsx'
import ViewMenu from './components/menus/ViewMenu.jsx'

export default function MenuBar(){
  const [openMenu,setOpenMenu] =useState(null);


  const handleToggle=(menuName,newState)=>{
    setOpenMenu(newState? menuName:null);
  };

  return (
      <div className="container-1">
        <div className="menubar">
          <MenuButton
            className="menubar-btn"
            dropdown={FileMenu}
            targetId="dropdowncontainer"
            isOpen={openMenu==="file"}
            onToggle={(state)=>handleToggle("file",state)}
          >
            File
          </MenuButton>
          <MenuButton
            className="menubar-btn"
            dropdown={EditMenu}
            targetId="dropdowncontainer"
            isOpen={openMenu==="edit"}
            onToggle={(state)=>handleToggle("edit",state)}
          >
          Edit
          </MenuButton>
          <MenuButton
            className="menubar-btn"
            dropdown={ViewMenu}
            targetId="dropdowncontainer"
            isOpen={openMenu==="view"}
            onToggle={(state)=>handleToggle("view",state)}
          >
            View
          </MenuButton>
          <MenuButton
            className="menubar-btn"
        dropdown={LayerMenu}
        targetId="dropdowncontainer"
            isOpen={openMenu==="layer"}
            onToggle={(state)=>handleToggle("layer",state)}
          >
            Layer
          </MenuButton>
          <MenuButton
            className="menubar-btn"
        dropdown={ImageMenu}
        targetId="dropdowncontainer"
            isOpen={openMenu==="image"}
            onToggle={(state)=>handleToggle("image",state)}
          >
            Image
          </MenuButton>
          <MenuButton
            className="menubar-btn"
        dropdown={ColorMenu}
        targetId="dropdowncontainer"
            isOpen={openMenu==="color"}
            onToggle={(state)=>handleToggle("color",state)}
          >
            Colors
          </MenuButton>
          <MenuButton
            className="menubar-btn"
            dropdown={null}
            targetId="dropdowncontainer"
            isOpen={openMenu==="help"}
            onToggle={(state)=>handleToggle("help",state)}
          >
            Help
          </MenuButton>
        </div>
        <div className="dropdown-container" id="dropdowncontainer"></div>
      </div>

    
  );

}
