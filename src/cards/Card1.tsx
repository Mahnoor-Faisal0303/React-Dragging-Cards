import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Typography } from "@mui/material";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import _ from "lodash";

export const Card1Design :React.FC = () => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          margin: "10px",
        }}
      >
        Hello I am Mark Zuckerberg
      </Typography>

      <Box
        component="img"
        sx={{
          display: "flex",
          mx: "auto",
          height: 100,
          width: 100,
          objectFit: "cover",
          border: "2px solid yellow",
          borderRadius: "50%",
        }}
        alt="not uploaded"
        src="https://imgix.ranker.com/user_node_img/77/1528625/original/mark-zuckerberg-all-people-photo-u11?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&bg=fff&h=300&w=300"
      />
      <Typography sx={{ textAlign: "center", marginTop: 1, fontSize: "16px" }}>
        Zuckerberg is known for co-founding and leading Facebook as its chairman
        and chief executive officer.
      </Typography>
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <Typography
          sx={{
            position: "absolute",
            top: "88%",
            left: 10,
            marginRight: 10,
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Contact:
        </Typography>
        <PhoneIcon sx={{ position: "absolute", top: "88%", right: 20 }} />
        <InstagramIcon sx={{ position: "absolute", top: "88%", right: 60 }} />
        <TwitterIcon sx={{ position: "absolute", top: "88%", right: 100 }} />
      </Box>
    </>
  );
};


