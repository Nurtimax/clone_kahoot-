import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { FormikProps, useFormik } from "formik";
import React, { FC } from "react";
import uuid from "react-uuid";
import LoadingButton from "@mui/lab/LoadingButton";
import { usePostCreatedDataMutation } from "../../../../store/slices/createTestSlice/createTestSlice.api";

interface FormDialogProps {
  openDailog: () => void;
}

interface IUseFormikInitialValues {
  cardTitle: string;
}

const initialValues: IUseFormikInitialValues = {
  cardTitle: "",
};

const FormDialog: FC<FormDialogProps> = ({ openDailog }) => {
  const [postData, { isLoading }] = usePostCreatedDataMutation();
  const onSubmitHandler = (values: IUseFormikInitialValues) => {
    const data = {
      id: uuid(),
      completed: false,
      isCorrect: "",
      question: [],
      cardTitle: values.cardTitle,
      dateNow: new Date(Date.now()).toISOString(),
    };
    postData(data);
    openDailog();
  };

  const { handleChange, handleSubmit }: FormikProps<IUseFormikInitialValues> =
    useFormik<IUseFormikInitialValues>({
      initialValues,
      onSubmit: onSubmitHandler,
    });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Create a new kahoot!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="cardTitle"
            label="Enter Test Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={openDailog}>Cancel</Button>
          <LoadingButton
            loading={isLoading}
            loadingIndicator="Loading..."
            variant="outlined"
            type="submit"
          >
            Create Test
          </LoadingButton>
        </DialogActions>
      </form>
    </>
  );
};

export default FormDialog;
