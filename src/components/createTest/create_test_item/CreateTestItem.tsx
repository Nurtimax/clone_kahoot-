import {
  Dialog,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ICreateTestActionType } from "../../../types";
import FormDialog from "./form_dialog/FormDialog";
import { useState } from "react";

export const createTestActionItem: ICreateTestActionType[] = [
  {
    icon: <SpeedDialIcon />,
    name: "Create Test",
    id: 1,
  },
  {
    icon: <DeleteIcon />,
    name: "Remove Test",
    id: 2,
  },
];

const CreateTestItem = () => {
  const [open, setOpen] = useState(false);

  const handleClickToggle = () => {
    setOpen((prevState) => !prevState);
  };

  const handleClick = (name: string) => {
    return () => {
      if (name === "Create Test") {
        handleClickToggle();
      }
    };
  };

  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial hard"
        icon={<SpeedDialIcon />}
        sx={{ position: "fixed", bottom: "6%", right: "6%" }}
      >
        {createTestActionItem.map(({ name, icon, id }) => (
          <SpeedDialAction
            tooltipTitle={name}
            icon={icon}
            key={id}
            onClick={handleClick(name)}
          />
        ))}
      </SpeedDial>
      <Dialog open={open} onClose={handleClickToggle}>
        <FormDialog openDailog={handleClickToggle} />
      </Dialog>
    </>
  );
};

export default CreateTestItem;
