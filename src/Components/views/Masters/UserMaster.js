import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import {useForm} from "react-hook-form";

const textFields = [
  { name: "name", label: "Name" },
  { name: "surname", label: "Surname" },
  { name: "city", label: "City" }
];

// const loadInfo = {};
// textFields.map(field => (loadInfo[field.name] = field.default));

export default function StateTextFields() {
  const classes = useStyles();

  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = data => console.log("onSubmit data", data);

  const hasError = inputName => !!(errors && errors[inputName]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.container}>
      <Paper className={classes.paper}>
        <div className={classes.fieldsContainer}>
          {textFields.map(field => (
            <TextField
              key={field.name}
              name={field.name}
              label={field.label}
              className={classes.textField}
              inputRef={register({ required: true })}
              error={hasError(field.name)}
              helperText={hasError(field.name) && `${field.label} is mandatory`}
            />
          ))}
        </div>
        <div>
          <Button
            className={classes.button}
            color="secondary"
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
          {/* <Button
            className={classes.button}
            color="primary"
            onClick={() => reset(loadInfo)}
            variant="contained"
          >
            Load Info
          </Button> */}
          <Button
            className={classes.button}
            onClick={reset}
            variant="contained"
          >
            Reset
          </Button>
        </div>
      </Paper>
    </form>
  );
}

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  fieldsContainer: {
    display: "flex",
    flexDirection: "column"
  },
  paper: {
    padding: theme.spacing(1.5)
  },
  textField: {
    margin: theme.spacing(1),
    width: 200
  }
}));
