import React, { useState } from "react";

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from "@mui/material/Toolbar";
import { useQuery } from "@tanstack/react-query";
import { Entry, EntryCollection } from "contentful";
import { useNavigate } from "react-router-dom";

import logo from '@/assets/logo-white.svg';
import { fetchContent } from "@/contentful";
import type { MenuEntry, MenuItemEntry } from '@/types';

export const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const res = useQuery(['menu', 'assembly', 'site-root', 1], fetchContent);
    const menuEntry = res.data as EntryCollection<MenuEntry>
    const allItems = menuEntry?.items[0].fields.blocks as Entry<MenuItemEntry>[]
    const menuItems = allItems?.filter(item => item.fields.slug !== 'home')

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar color="primary" position="static" elevation={0}>
            <Toolbar >
                <Box sx={{ flexGrow: 1 }}>
                    <Link onClick={() => navigate('/')} component="button" sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} underline="none" color="inherit">
                        <Box component="img" src={logo} alt="logo" sx={{ height: 25 }} />
                    </Link>
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                    {menuItems && menuItems.map((item, index) =>
                        <Button key={index} sx={{ mx: 1 }} color="inherit" onClick={() => navigate(item.fields.slug)}>
                            {item.fields.name}
                        </Button>
                    )}
                </Box>
                {menuItems && menuItems.length > 0 &&
                    <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                        <IconButton onClick={handleClick} color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                            {menuItems.map((item, index) =>
                                <MenuItem key={index} onClick={() => { navigate(item.fields.slug), handleClose() }}>
                                    {item.fields.name}
                                </MenuItem>
                            )}
                        </Menu>
                    </Box>
                }
                <Button variant="contained" color="primary" onClick={() => navigate('/registration')}>Request demo</Button>
            </Toolbar>
        </AppBar>
    )
}
export default Header;
