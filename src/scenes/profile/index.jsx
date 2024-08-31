import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faInstagram, faDropbox } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box
        width="300px"
        height="auto"
        borderRadius="10px"
        textAlign="center"
        bgcolor="#1a1c1f"
        overflow="hidden"
        sx={{
          margin: "0 30px",
          padding: "20px",
          boxShadow: "0 4px 8px #FFF6F6",
        }}
      >
        <Box
          sx={{
            width: "120px",
            height: "120px",
            overflow: "hidden",
            borderRadius: "50%",
            border: `4px solid #d7f26a`,
            margin: "0 auto 20px",
            transition: "0.25s",
            "& img": {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              transition: "0.25s",
            },
            "&:hover img": {
              transform: "scale(1.2)",
            },
          }}
        >
          <img
            src="/src/assets/images/avatar.png"
            alt="Profile"
          />
        </Box>
        <Typography variant="h5" color="white" mb="10px">
          Trịnh Tân Nguyên
        </Typography>
        <Typography variant="body1" color="#d7f26a" mb="20px">
          B21DCCN569
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
          mb="20px"
        >
          <Button
            variant="outlined"
            startIcon={<FontAwesomeIcon icon={faFacebookF} />}
            href="https://www.facebook.com/tnngynz17/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white",
              borderColor: "#d7f26a",
              padding: "10px 20px",
              borderRadius: "20px",
              transition: "0.25s",
              "&:hover": {
                backgroundColor: "#d7f26a",
                borderColor: "#d7f26a",
              },
            }}
          >
            Facebook
          </Button>
          <Button
            variant="outlined"
            startIcon={<FontAwesomeIcon icon={faFilePdf} />}
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white",
              borderColor: "#d7f26a",
              padding: "10px 20px",
              borderRadius: "20px",
              transition: "0.25s",
              "&:hover": {
                backgroundColor: "#d7f26a",
                borderColor: "#d7f26a",
              },
            }}
          >
            Pdf
          </Button>
          <Button
            variant="outlined"
            startIcon={<FontAwesomeIcon icon={faGithub} />}
            href="https://github.com/PrinceZ1/IoT-System.git"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "white",
              borderColor: "#d7f26a",
              padding: "10px 20px",
              borderRadius: "20px",
              transition: "0.25s",
              "&:hover": {
                backgroundColor: "#d7f26a",
                borderColor: "#d7f26a",
              },
            }}
          >
            GitHub
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
