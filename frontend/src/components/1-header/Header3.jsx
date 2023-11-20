import {
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { useTheme } from "@emotion/react";

// MaterialUi Icons
import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import ElectricBikeOutlinedIcon from "@mui/icons-material/ElectricBikeOutlined";
import LaptopChromebookOutlinedIcon from "@mui/icons-material/LaptopChromebookOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import { Close, ExpandMore } from "@mui/icons-material";
import Links from "./Links";

function Header3() {
  // Menu Logic
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  // Burger Menu & Drawer Logic
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 5,
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: "222px",
            backgroundColor: theme.palette.myColor.main,
            color: theme.palette.text.secondary,
          }}
        >
          <WindowIcon />
          <Typography sx={{ padding: "0", textTransfrom: "capitalize" }} mx={1}>
            Categories
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightIcon />
        </Button>
        <Menu
          sx={{
            ".MuiPaper-root": {
              width: 222,
              backgroundColor: theme.palette.myColor.main,
            },
          }}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      {useMediaQuery("(min-width:1200px)") && (
        <Stack direction={"row"} alignItems={"center"} gap={3}>
          <Links title={"Home"} />
          <Links title={"Mega Menu"} />
          <Links title={"Fullscreen Menu"} />
          <Links title={"Pages"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        </Stack>
      )}

      {/* Menu Icon & Drawer */}
      {useMediaQuery("(max-width:1200px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon sx={{ fontSize: "2rem", cursor: "pointer" }} />
        </IconButton>
      )}
      <Drawer
        sx={{
          ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
        }}
        anchor={"top"}
        open={state["top"]}
      >
        <Box
          sx={{ width: {xs: 300, sm: 444}, mx: "auto", mt: 6, position: "relative", pt: 10 }}
        >
          <IconButton
            sx={{
              "&:hover": { rotate: "180deg", transition: ".6s", color: "red" },
              position: "absolute",
              top: "0",
              right: "10px",
            }}
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>
          {[
            {
              mainLink: "Home",
              subLink: ["Link 1", "Link 2", "Link 3"],
            },
            {
              mainLink: "Mega Menu",
              subLink: ["Link 1", "Link 2", "Link 3"],
            },
            {
              mainLink: "Fullscreen Menu",
              subLink: ["Link 1", "Link 2", "Link 3"],
            },
            {
              mainLink: "Pages",
              subLink: ["Link 1", "Link 2", "Link 3"],
            },
            {
              mainLink: "User Account",
              subLink: ["Link 1", "Link 2", "Link 3"],
            },
            {
              mainLink: "Vendor Account",
              subLink: ["Link 1", "Link 2", "Link 3"],
            },
          ].map((item) => {
            return (
              <Accordion
                key={item.mainLink}
                elevation={0}
                sx={{ bgcolor: "initial" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.mainLink}</Typography>
                </AccordionSummary>
                <List sx={{ py: 0, my: 0 }}>
                  {item.subLink.map((link) => {
                    return (
                      <ListItem key={link} sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
      {/*===== Menu Icon & Drawer =====*/}
    </Container>
  );
}

export default Header3;
