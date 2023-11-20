/* eslint-disable react/no-unescaped-entities */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";

function ProductDetails() {
  
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 4, pr: 2, flexDirection: {xs: "column", sm: "row"}}}>
      <Box display={"flex"}>
        <img width={300} src="public\Products\1\t-shirt1.png" alt="" />
      </Box>
      <Box>
        <Typography variant="h5">MEN'S FASHION</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          $12.99
        </Typography>
        <Typography variant="body1">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Stack direction={"row"} gap={1} my={2}>
          {["public/Products/1/t-shirt1.png","public/Products/1/t-shirt2.jpg"].map((item) => { 
            return (
                <img style={{borderRadius: 3}} width={90} height={100} key={item} src={item} alt="There is no image"/>
            )
          })}
        </Stack>
        <Button 
          sx={{textTransform: "capitalize", fontWeight: "bold"}}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{mr:1}} fontSize="small"/>
          Buy now
        </Button>
      </Box>
    </Box>
  );
}

export default ProductDetails;
