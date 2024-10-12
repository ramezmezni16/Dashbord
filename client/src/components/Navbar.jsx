import React from 'react'
import { 
    LightModeOutlined, 
    DarkModeOutlined, 
    Menu as MenuIcon,
    Search,
    SettingsOutlined,
    ArrowDropDownOutlined,
} from '@mui/icons-material';
import FlexBetween from 'components/FlexBetween';
import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import profileImages from "assets/profile.jpg"
import { AppBar, Toolbar, useTheme } from "@mui/material";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <AppBar
      sx= {{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx ={{ justifyContent: "space-between"}}>

      </Toolbar>
    </AppBar>
  )

export default Navbar;