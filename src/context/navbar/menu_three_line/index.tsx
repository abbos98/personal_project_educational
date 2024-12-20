import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

export default function DrawerMobileNavigation() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <IconButton sx={{border: "none",color:"white"}} variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        <Menu  />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            ml: 'auto',
            mt: 1,
            mr: 2,
          }}
        >

          <ModalClose id="close-icon" sx={{ position: 'initial' }} />
        </Box>
        {/* <Input
          size="sm"
          placeholder="Search"
          variant="plain"
          endDecorator={<Search />}
          slotProps={{
            input: {
              'aria-label': 'Search anything',
            },
          }}
          sx={{
            m: 3,
            borderRadius: 0,
            borderBottom: '2px solid',
            borderColor: 'neutral.outlinedBorder',
            '&:hover': {
              borderColor: 'neutral.outlinedHoverBorder',
            },
            '&::before': {
              border: '1px solid var(--Input-focusedHighlight)',
              transform: 'scaleX(0)',
              left: 0,
              right: 0,
              bottom: '-2px',
              top: 'unset',
              transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
              borderRadius: 0,
            },
            '&:focus-within::before': {
              transform: 'scaleX(1)',
            },
          }}
        /> */}
        <List
          size="lg"
          component="nav"
          sx={{
            flex: 'none',
            fontSize: 'xl',
            '& > div': { justifyContent: 'start' },
          }}
        >
          <NavLink to={"/"} style={{textDecoration: "none"}}><ListItemButton>Home</ListItemButton></NavLink>
          <NavLink to={"/aboutus"} style={{textDecoration: "none"}}><ListItemButton>About Us</ListItemButton></NavLink>
          <NavLink to={"/servises"} style={{textDecoration: "none"}}><ListItemButton>Services</ListItemButton></NavLink>
          <NavLink to={"/project"} style={{textDecoration: "none"}}><ListItemButton>Projects</ListItemButton></NavLink>
          <NavLink to={"/blog"} style={{textDecoration: "none"}}><ListItemButton>Blog</ListItemButton></NavLink>
          <NavLink to={"/contact"} style={{textDecoration: "none"}}><ListItemButton>Contact</ListItemButton></NavLink>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
