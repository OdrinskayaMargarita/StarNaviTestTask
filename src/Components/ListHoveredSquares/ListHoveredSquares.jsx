import {Alert, Box, Typography} from "@mui/material";
import {useSelector} from "react-redux";

export const ListHoveredSquares = () => {
  const { listHoveredSquares } = useSelector(({FieldSizeReducer}) => FieldSizeReducer)
  return (
    <>
      <Typography mb={2}>Hover Squares</Typography>
      {listHoveredSquares?.map((item, key) =>
        <Box mb={1} key={key}>
          <Alert severity="success" icon={false}>Row: {item.dataRow}, Column: {item.dataColumn}</Alert>
        </Box>
      )}
    </>
  )
}