import { Grid } from "@mui/material";
import {useState} from "react";
import {saveListHoveredSquares} from "../../Redux/Actions/FieldSizeAction";
import {useDispatch} from "react-redux";

export const Item = ({...props}) => {
  const dispatch = useDispatch()
  const [hoverState, setHoverState] = useState(false)
  const handleHover = () => {
    setHoverState(!hoverState)
    dispatch(saveListHoveredSquares(props))
  }

  return (
    <>
    <Grid item
          width={30}
          height={30}
          border="1px solid black"
          sx={{ background:  hoverState ? "#3393FF" : "#ffffff", cursor: "pointer" }}
          onMouseEnter={() => handleHover()}
    />
    </>
  );
}