import { keyframes } from "@emotion/react";
import { ButtonBar } from "@molecules";
import { Box, Typography } from "@mui/material";
import { RootState } from "@store";
import React, { use, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const fadeInRight = keyframes`
    from {
      opacity: 0;
      transform: translateX(40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `;

const fadeOutLeft = keyframes`
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(-10vw);
    }
  `;

export const SuccessPage = () => {
    const navigate = useNavigate();
    const [animationObj, setAnimationObj] = useState(fadeInRight);
    window.addEventListener('beforeunload', () => setAnimationObj(fadeOutLeft));

    const file = useSelector((state: RootState) => state.file.file);
    const url = file ? URL.createObjectURL(file) : null;

    const handleDownload = () => {
        if (!file) return;
        const link = document.createElement('a');
        link.href = url!;
        link.download = file.name || 'signed-document.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const button1Props = {
        text: "Sign Another",
        onClick: () => navigate("/upload"),
        isDisabled: false,
    };
    const button2Props = {
        text: "Download",
        onClick: () => handleDownload(),
        isDisabled: false,
    };

    useEffect(() => {
        if (!file) {
            navigate("/upload");
        }
    }, [file, navigate]);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 1,
                mt: 1,
            }}
        >
            <Box
                sx={{
                    animation: `${animationObj} 1s ease-out`,
                    width: "100%",
                }}
            >
                <Typography
                    variant={"body1"}
                    fontFamily={"sans-serif"}
                    textAlign={"center"}
                >
                    Your signed document
                </Typography>
                {url && (
                    <>
                        <iframe
                            src={url}
                            title="PDF Viewer"
                            width="100%"
                            height={window.innerHeight * 0.8}
                            style={{ border: "none", marginTop: '0.5rem' }}
                            allow="autoplay"
                        />
                    </>
                )}
            </Box>

            {file && (
                <Box>
                    <ButtonBar button1Props={button1Props} button2Props={button2Props} />
                </Box>
            )}
        </Box>
    );
}