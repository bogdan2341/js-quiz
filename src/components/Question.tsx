import {
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import { ReactElement } from "react";
import questionData from "../data/simple-question.json";

interface QuestionProps {}

function Question(props: QuestionProps): ReactElement {
  return (
    <Card>
      <Typography variant="body1">{questionData.questions[0].q}</Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend"> Choose answer</FormLabel>
        <RadioGroup aria-label="gender" name="gender1">
          {questionData.questions[0].a.map((a) => (
            <FormControlLabel value={a} control={<Radio />} label={a} />
          ))}
        </RadioGroup>
      </FormControl>
    </Card>
  );
}

export default Question;
