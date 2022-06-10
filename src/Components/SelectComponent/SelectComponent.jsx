import {Button, FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import {useSelector} from "react-redux";

export const SelectComponent = ({handleChangeSelect, valueSize, generateArray}) => {

  const { fieldSizeList } = useSelector(({FieldSizeReducer}) => FieldSizeReducer)

  return (
    <Grid container
          justifyContent="space-between"
          alignItems="center">
      <Grid item xs={8}>
      <FormControl fullWidth>
        <InputLabel>Size</InputLabel>
        <Select onChange={handleChangeSelect} value={valueSize}>
          {fieldSizeList?.map((item, key) => <MenuItem value={item?.field} key={key * 10}>{item?.name}</MenuItem>)}
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={3}>
        <Button onClick={generateArray} variant="contained" fullWidth>Start</Button>
      </Grid>
    </Grid>
  )
}