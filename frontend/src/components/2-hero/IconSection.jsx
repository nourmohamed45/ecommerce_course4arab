import {
  Container,
  Stack,
  Box,
  Typography,
  useTheme,
  Divider,
  useMediaQuery,
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import PropTypes from "prop-types";

function IconSection() {
  const theme = useTheme();
  return (
    <Container sx={{ mt: 3, bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff" }}>
      <Stack
        divider={
          useMediaQuery("(min-width: 900px") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        direction={"row"}
        alignItems={"center"}
        sx={{ flexWrap: "wrap" }}
      >
        <MyBox
          title="Fast Delivery"
          subTitle="Start from $10"
          icon={<ElectricBoltIcon sx={{ fontSize: "2rem" }} />}
        />
        <MyBox
          title="Money Guarantee"
          subTitle="7 Days Back"
          icon={<WorkspacePremiumOutlinedIcon sx={{ fontSize: "2rem" }} />}
        />
        <MyBox
          title="365 Days"
          subTitle="For free return"
          icon={<AccessAlarmOutlinedIcon sx={{ fontSize: "2rem" }} />}
        />
        <MyBox
          title="Payment"
          subTitle="Secure System"
          icon={<CreditScoreOutlinedIcon sx={{ fontSize: "2rem" }} />}
        />
      </Stack>
    </Container>
  );
}

export default IconSection;

function MyBox({ icon, title, subTitle }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "200px",
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        py: 2,
        gap: 3,
        justifyContent: useMediaQuery("(min-width: 600px")? "center": "start"
      }}
      
      
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
}

MyBox.propTypes = {
  // prop-name: PropTypes.(Type)
  icon: PropTypes.element.isRequired,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};
