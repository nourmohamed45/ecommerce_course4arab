import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";

// Icons
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../Redux/product";

function Main() {
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  // Theme
  const theme = useTheme();

  // Open Dialog
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Fetching Data from Redux Toolkit

  const allProductsAPI = "products?populate=*";
  const menProductsAPI =
    "products?populate=*&filters[productCategory][$eq]=men";
  const womenProductsAPI =
    "products?populate=*&filters[productCategory][$eq]=women";

  const [myData, setMyData] = useState(allProductsAPI);

  const { data, error, isLoading } = useGetproductByNameQuery(myData);

  if (data) {
    console.log(data.data);
  }

  if (isLoading) {
    return <Typography variant="h3">LOADING...</Typography>;
  }

  if (error) {
    return <Typography variant="h3">THERE IS AN ERROR FROM SERVER</Typography>;
  }

  if (data) {
    return (
      <Container sx={{ mt: 9, pb: 5 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          rowGap={3}
          sx={{ py: 2 }}
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography variant="body1" fontWeight={300}>
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>
          <Box>
            <ToggleButtonGroup
              color="success"
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
              sx={{
                ".Mui-selected": {
                  backgroundColor: "initial",
                  color: "#66bb6a",
                  border: "2px solid #66bb6a !important",
                },
                gap: "16px",
              }}
            >
              <ToggleButton
                sx={{ color: theme.palette.text.primary }}
                className="my-btn"
                value="left"
                aria-label="left aligned"
                onClick={() => {
                  setMyData(allProductsAPI);
                }}
              >
                All Products
              </ToggleButton>
              <ToggleButton
                sx={{ color: theme.palette.text.primary }}
                className="my-btn"
                value="center"
                aria-label="centered"
                onClick={() => {
                  setMyData(menProductsAPI);
                }}
              >
                Men Category
              </ToggleButton>
              <ToggleButton
                sx={{ color: theme.palette.text.primary }}
                className="my-btn"
                value="right"
                aria-label="right aligned"
                onClick={() => {
                  setMyData(womenProductsAPI);
                }}
              >
                Women Category
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Stack>
        <Stack
          sx={{ mt: 4 }}
          direction={"row"}
          alignItems={"center"}
          rowGap={4}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          {data.data.map((item) => {
            return (
              <Card
                key={item.id}
                sx={{
                  maxWidth: 333,
                  overflow: "hidden",
                  ":hover .MuiCardMedia-root": {
                    rotate: "5deg",
                    scale: "1.1",
                    transition: ".3s",
                    cursor: "pointer",
                  },
                }}
              >
                <Box sx={{ overflow: "hidden", width: "100%" }}>
                  <CardMedia
                    sx={{ height: 277 }}
                    image={`${
                      item.attributes.productImg.data[0].attributes.url
                    }`}
                    title="green iguana"
                  />
                </Box>
                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      {item.attributes.productTitle}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      ${item.attributes.productPrice}
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 3, // Number of lines to show
                      WebkitBoxOrient: "vertical",
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {item.attributes.productDescription}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={() => {
                      handleClickOpen();
                    }}
                    size="small"
                    sx={{ textTransform: "capitalize" }}
                  >
                    {" "}
                    <AddShoppingCartIcon fontSize="small" sx={{ mr: 1 }} /> Add
                    To Cart
                  </Button>
                  <Rating
                    name="read-only"
                    value={item.attributes.productRating}
                    precision={0.5}
                    readOnly
                  />
                </CardActions>
              </Card>
            );
          })}
        </Stack>
        <Dialog
          sx={{
            ".MuiPaper-root": {
              minWidth: { xs: "100%", md: "800px" },
              minHeight: { xs: "100vh", sm: "initial" },
              py: { xs: "20px", sm: "50px" },
              px: { xs: "20px" },
            },
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              "&:hover": { rotate: "180deg", transition: ".6s", color: "red" },
              position: "absolute",
              top: "10px",
              right: "1px",
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <ProductDetails />
        </Dialog>
      </Container>
    );
  }
}

export default Main;
