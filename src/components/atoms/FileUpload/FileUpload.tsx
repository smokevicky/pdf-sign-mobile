import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export interface FileUploadProps {
  file: File | null;
  onFileSelect?: (file: File | null) => void;
}

export const FileUpload = (props: FileUploadProps) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    setTimeout(() => {
      if (e.target.files && e.target.files.length > 0) {
        props.onFileSelect?.(e.target.files[0]);
      }
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Box>
      {props.file ? (
        <Box>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CheckCircle />}
          >
            {props.file.name}
          </Button>
        </Box>
      ) : (
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          loading={isLoading}
          loadingPosition="start"
          startIcon={<CloudUploadIcon />}
        >
          Upload files
          <VisuallyHiddenInput
            type={"file"}
            accept="application/pdf"
            onChange={handleSelectFile}
          />
        </Button>
      )}
    </Box>
  );
};
