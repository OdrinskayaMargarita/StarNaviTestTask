import { Grid } from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";
import {asyncClearListHoveredSquares, asyncGetFieldSizeList} from "../../Redux/Actions/FieldSizeAction";
import {SelectComponent} from "../SelectComponent/SelectComponent";
import {ListHoveredSquares} from "../ListHoveredSquares/ListHoveredSquares";
import {GridContainer} from "../GridContainer/GridContainer";

const App = () => {
  const dispatch = useDispatch()

  const { fieldSizeList, listHoveredSquares } = useSelector(({FieldSizeReducer}) => FieldSizeReducer)

  const [valueSize, setValueSize] = useState(5);
  const [valueArray, setValueArray] = useState([]);

  useEffect(() => {
    dispatch(asyncGetFieldSizeList())
  }, [dispatch])

  const handleChangeSelect = ({target}) => {
    setValueSize(target.value)
  }

  const generateArray = () => {
    setValueArray(Array(valueSize).fill(valueSize))
    dispatch(asyncClearListHoveredSquares())
  }

  return (
    <div className="App">
      {fieldSizeList?.length ?
        <SelectComponent
          handleChangeSelect={handleChangeSelect}
          valueSize={valueSize}
          fieldSizeList={fieldSizeList}
          generateArray={generateArray} />
        : null}
      {valueArray?.length ?
        <Grid container mt={2} spacing={2}>
         <Grid item>
          <GridContainer valueArray={valueArray}/>
        </Grid>
        {listHoveredSquares?.length ?
          <Grid item>
            <ListHoveredSquares />
        </Grid> : null}
      </Grid> : null}
    </div>
  );
}

export default App;