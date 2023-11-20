import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";



function Links({title}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        ":hover .show-when-hover": { display: "block" },
        cursor: "pointer",
        zIndex: 100,
      }}
    >
      <Typography variant="body1">{title}</Typography>
      <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />
      <Box
        className=" show-when-hover"
        sx={{
          position: "absolute",
          top: "105%",
          minWidth: "170px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "none",
        }}
      >
        <Paper sx={{ mt: 2 }} className="">
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem sx={{ px: "0", py: "0" }}>
                <ListItemButton>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                    primary="Dashboard"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem
                sx={{
                  px: "0",
                  py: "0",
                  position: "relative",
                  ":hover .sub-menu": { display: "block" },
                }}
              >
                <ListItemButton>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                    primary="Product"
                  />
                  <Box flexGrow={1} />
                  <KeyboardArrowRightOutlined />
                </ListItemButton>
                <Box
                  className="sub-menu"
                  sx={{
                    position: "absolute",
                    top: "0",
                    left: "100%",
                    minWidth: "150px",
                    display: "none",
                  }}
                >
                  <Paper sx={{ ml: 2 }}>
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText primary="Add Product" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="Edit Product" />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>

              <ListItem sx={{ px: "0", py: "0" }}>
                <ListItemButton>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                    primary="Orders"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ px: "0", py: "0" }}>
                <ListItemButton>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                    primary="Profile"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
}

export default Links;

Links.propTypes = {
  // prop-name: PropTypes.(Type)
    title: PropTypes.string,

  };