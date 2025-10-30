import React from "react";
import { keyframes } from "@mui/system";
import { Box, Typography } from "@mui/material";
import { FileUpload } from "@atoms";
import { ButtonBar } from "@molecules";

export const UploadPage = () => {
  const fadeInUp = keyframes`
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  const [file, setFile] = React.useState<File | null>(null);
  const [isFileTouched, setIsFileTouched] = React.useState(false);
  const [isButton1Disabled, setButton1Disabled] = React.useState(false);
  const [isButton2Disabled, setButton2Disabled] = React.useState(false);

  const button1Props = {
    text: "Select Another",
    onClick: () => onFileUnselect(),
    isDisabled: isButton1Disabled,
  };
  const button2Props = {
    text: "Proceed",
    onClick: () => {
      alert("Proceeding with file: " + file?.name);
    },
    isDisabled: isButton2Disabled,
  };

  const onFileSelect = (selectedFile: File | null) => {
    setFile(selectedFile);
    setIsFileTouched(true);
    setButton1Disabled(false);
    setButton2Disabled(false);
  };

  const onFileUnselect = () => {
    setFile(null);
    setButton1Disabled(true);
    setButton2Disabled(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        mt: 25,
      }}
    >
      <Box
        sx={{
          animation: `${fadeInUp} 1s ease-out`,
          width: "100%",
        }}
      >
        <Typography
          variant={"h3"}
          fontFamily={"sans-serif"}
          textAlign={"center"}
          lineHeight={"0.5"}
        >
          Instantly{" "}
          <Typography fontFamily={"fantasy"} fontSize={"5rem"} color={"error"}>
            sign
          </Typography>{" "}
          your document
        </Typography>
        <Box sx={{ mt: 5, mb: 1 }}>
          <FileUpload file={file} onFileSelect={onFileSelect} />
        </Box>

        <Typography variant={"body1"}>
          Click on the button to upload your document
        </Typography>
      </Box>

      {isFileTouched && (
        <Box sx={{ mt: 25 }}>
          <ButtonBar button1Props={button1Props} button2Props={button2Props} />
        </Box>
      )}
    </Box>
  );
};
