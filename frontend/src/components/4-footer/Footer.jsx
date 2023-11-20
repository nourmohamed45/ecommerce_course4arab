import { Box, Button, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="h6"
        sx={{ fontSize: 18 }}
      >
        Designed and Developed by{" "}
        <Button
          variant="text"
          color="primary"
          mx={1}
          sx={{
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
          }}
        >
          Nour Mohamed
        </Button>{" "}
        ©2023
      </Typography>
    </Box>
  );
}

export default Footer;
