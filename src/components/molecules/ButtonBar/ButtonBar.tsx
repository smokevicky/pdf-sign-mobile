import { Send, Undo } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";

export interface ButtonBarProps {
  button1Props: {
    text: string;
    onClick: () => void;
    isDisabled?: boolean;
  };
  button2Props: {
    text: string;
    onClick: () => void;
    isDisabled?: boolean;
  };
}

export const ButtonBar = (props: ButtonBarProps) => {
  return (
    <Grid
      container
      width={"100%"}
      spacing={2}
      sx={{
        position: "fixed",
        left: 0,
        bottom: 0,
        zIndex: 1300,
        bgcolor: "background.paper",
        p: 2,
        boxShadow: "0 -2px 8px rgba(0,0,0,0.08)",
        justifyContent: "space-around",
      }}
    >
      <Grid size="auto">
        <Button
          variant="outlined"
          startIcon={<Undo />}
          onClick={props.button1Props.onClick}
          disabled={props.button1Props.isDisabled}
        >
          {props.button1Props.text}
        </Button>
      </Grid>
      <Grid size="auto">
        <Button
          variant="outlined"
          endIcon={<Send />}
          onClick={props.button2Props.onClick}
          disabled={props.button2Props.isDisabled}
        >
          {props.button2Props.text}
        </Button>
      </Grid>
    </Grid>
  );
};
