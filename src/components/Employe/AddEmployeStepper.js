import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { blue, green } from "@mui/material/colors";
import Steps from "./AddEmployeSteps/Steps";
import SuccessMessage from "./AddEmployeSteps/SuccessMessage";

const steps = [
  "Information personnel",
  "Information médical",
  "Dérniere étape",
];

export default function AddEmployeStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 4;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "1fr",
        // alignItems: "center",
        justifyContent: "center",
        gridTemplateRows: "max-content 1fr max-content",
        "& .MuiSvgIcon-root.Mui-active": {
          color: blue[500],
        },
        "& .MuiSvgIcon-root.Mui-completed": {
          color: green[500],
        },
      }}
    >
      <Stepper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: "20%",
        }}
        activeStep={activeStep}
      >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <SuccessMessage />
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button color="success" variant="contained" onClick={handleReset}>
              ajouter un nouveau
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {<Steps index={activeStep} />}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="secondary"
              variant="contained"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              revenir en arriere
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button
                color="inherit"
                variant="contained"
                onClick={handleSkip}
                sx={{ mr: 1 }}
              >
                passer cette etape
              </Button>
            )}

            <Button
              variant="contained"
              color={activeStep === steps.length - 1 ? "success" : "primary"}
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? "Confirmé" : "Suivant"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
