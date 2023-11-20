import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

function ScrollToTop() {

  return (
    <Zoom
      in={useScrollTrigger({threshold: 500})}
      onClick={() => { 
        window.scrollTo(0,0)
      }}
      sx={{
        position: "fixed",
        bottom: "10%",
        right: "5%",
        zIndex: "110",
        opacity: { xs: 0.4, lg: 1 },
      }}
    >
      <Fab size="medium" color="primary" aria-label="add">
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  );
}

export default ScrollToTop;
