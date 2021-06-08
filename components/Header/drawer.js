import React from 'react';
import { useRouter } from 'next/router'
import { List, Link, ListItemText, ListItem, Divider, SwipeableDrawer } from '@material-ui/core';
import { pagesPath } from '@/constants/pagesPath';
import SocialList from '@/components/Header/socialList';

export default function MobileDrawer({ open, handleDrawerClose }) {
    const router = useRouter()
    return (
        <SwipeableDrawer
            anchor='right'
            open={open}
            onClose={handleDrawerClose}
            onOpen={handleDrawerClose}    
        >
             <List>
                {pagesPath.map((item) => {
                    return (
                        <Link
                            onClick={async () => {
                                await router.push(item.path);
                                handleDrawerClose();
                            }}
                            key={item.path}
                        >
                            <ListItem 
                               button 
                               key={item.path}
                               selected={router.pathname === item.path}
                            >
                                <ListItemText primary={item.title} />
                            </ListItem>
                        </Link>
                    );
                })}
            </List>
            <Divider />
            <SocialList />
        </SwipeableDrawer>
    );
}