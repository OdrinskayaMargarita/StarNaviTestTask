import {Grid} from "@mui/material";
import {Item} from "../Item/Item";

export const GridContainer = ({valueArray}) => {
  return (
    <>
      {valueArray.map((itemRow, keyRow) =>
        <Grid container key={keyRow} >
          {valueArray.map((item, keyColumn) => <Item dataColumn={keyColumn + 1} dataRow={keyRow + 1} key={keyColumn * 10}/>)}
        </Grid>
      )}
    </>
  )
}