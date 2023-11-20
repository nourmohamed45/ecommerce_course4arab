/* eslint-disable react/no-unescaped-entities */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

function ProductDetails({ item }) {
  const [selectedImg, setSelectedImg] = useState(0);

  const handleAlignment = (event, newAlignment) => {
    if(newAlignment !== null) {
      setSelectedImg(newAlignment);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        pr: 2,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box display={"flex"}>
        <img
          width={300}
          src={item.attributes.productImg.data[selectedImg].attributes.url}
          alt=""
        />
      </Box>
      <Box>
        <Typography variant="h5">{item.attributes.productTitle}</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          ${item.attributes.productPrice}
        </Typography>
        <Typography variant="body1">
          {item.attributes.productDescription}
        </Typography>
        <Stack direction={"row"} gap={1} my={2}>
          <ToggleButtonGroup
            value={selectedImg}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                outline: "2px solid #66bb6a",
                opacity: 1,
              }
            }}
          >
            {item.attributes.productImg.data.map((img, index) => {
              return (
                <ToggleButton
                  key={img.id}
                  value={index}
                  sx={{
                    width: "110px",
                    height: "110px",
                    mx: 1,
                    p: "0",
                    opacity: "0.5",
                  }}
                >
                  <img
                    style={{ borderRadius: 3, cursor: "pointer", opacity: "inherit" }}
                    width={"100%"}
                    height={"100%"}
                    src={img.attributes.formats.small.url}
                    alt="There is no image"
                    onClick={() => {
                      setSelectedImg(index);
                    }}
                  />
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </Stack>
        <Button
          sx={{ textTransform: "capitalize", fontWeight: "bold" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
}

export default ProductDetails;

ProductDetails.propTypes = {
  // prop-name: PropTypes.(Type)
  item: PropTypes.object,
};
