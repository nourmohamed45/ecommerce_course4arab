import { ExpandMore, ShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useState } from "react";
import { useTheme } from "@emotion/react";

//=============== Start Search Style ===============
const Search = styled("div")(({ theme }) => ({
  flexGrow: 0.4,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "2px solid #777",
  "&:hover": {
    border: "1px solid #333",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minWidth: "266px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "330px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
//=============== End Search Style ===============

//=============== Start Cart Badge Style ===============

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

//=============== End Cart Badge Style ===============

//=============== Start Search Selected Menu Logic ===============
const options = ["All Categories", "CAR", "Clothes", "Electronics"];
//=============== End Search Selected Menu Logic ===============

function Header2() {
  // search Selected Menu Logic
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  // Dialog Logic
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
      <Stack alignItems={"center"}>
        <ShoppingCartOutlined />
        <Typography variant="body2">E-commerce</Typography>
      </Stack>
      {useMediaQuery("(min-width:600px)") && (
        <Search
          sx={{
            borderRadius: "22px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
          <div>
            <List
              component="nav"
              aria-label="Device settings"
              sx={{
                bgcolor: theme.palette.myColor.main,
                borderRadius: "22px",
                p: "2px",
                cursor: "pointer",
              }}
            >
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
              >
                <ListItemText
                  secondary={options[selectedIndex]}
                  sx={{ width: "90px", textAlign: "center" }}
                />
                <ExpandMore sx={{ fontSize: "16px" }} />
              </ListItem>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  sx={{ fontSize: "14px", px: 4 }}
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Search>
      )}
      <Stack direction={"row"} alignItems={"center"}>
        {useMediaQuery("(max-width:600px)") && (
          <IconButton onClick={()=> {handleClickOpen()}}>
            <SearchIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
        )}
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        <IconButton>
          <Person2OutlinedIcon sx={{ fontSize: "2rem" }} />
        </IconButton>
      </Stack>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Search</DialogTitle>
        <DialogContent>
          <TextField
            sx={{width: "240px"}}
            autoFocus
            margin="dense"
            id="name"
            label="Search..."
            type="email"
            fullWidth
            variant="standard"
            autoComplete="off"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleCloseDialog}>Search</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Header2;
