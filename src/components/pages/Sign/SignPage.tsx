import React, { useEffect } from "react";
import { keyframes } from "@mui/system";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "@store";

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

export const SignPage = () => {
    const navigate = useNavigate();
    const [animationObj, setAnimationObj] = React.useState(fadeInRight);

    const file = useSelector((state: RootState) => state.file.file);

    useEffect(() => {
        if (!file) {
            navigate("/upload");
        }
    }, [file, navigate]);

    // the mock api call will fail
    useEffect(() => {
        fetch("/api/sign", {
            method: "POST",
            body: (() => {
                const formData = new FormData();
                if (file) {
                    console.log("file name", file.name);
                    formData.append("file", file);
                }
                return formData;
            })(),
        })
            // finally is used instead of then since api call is failing
            .finally(() => {
                setTimeout(() => {
                    setAnimationObj(fadeOutLeft);
                    setTimeout(() => {
                        navigate("/success");
                    }, 500);
                }, 3000);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    window.addEventListener('beforeunload', () => setAnimationObj(fadeOutLeft));

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 1,
                mt: 25,
            }}
        >
            <Box
                sx={{
                    animation: `${animationObj} 1s ease-out`,
                    width: "100%",
                }}
            >
                <Typography
                    variant={"h5"}
                    fontFamily={"sans-serif"}
                    textAlign={"center"}
                >
                    Signing your document right now
                </Typography>
                <Box sx={{ mt: 5, mb: 1, display: "flex", justifyContent: "center" }}>
                    <img
                        src="/feather-loading.gif"
                        alt="Feather Loading"
                        style={{ width: "100px", height: "100px" }}
                    />
                </Box>
                <Typography
                    variant={"h6"}
                    textAlign={"center"}
                    sx={{ mt: 2 }}
                >
                    with a world class feather.
                </Typography>
                <Typography
                    variant={"body1"}
                    textAlign={"center"}
                    sx={{ mt: 2 }}
                >
                    Sending file to mockServer which is failing
                </Typography>
            </Box>
        </Box>
    );
};
