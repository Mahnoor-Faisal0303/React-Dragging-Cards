import { Box, Button, Typography } from "@mui/material";
import { UIBox } from "../styles/selectionStyle";
import { generatePath, useNavigate } from "react-router-dom";
import APP_ROUTES from "../constants/Routes";

const SelectionUI = () => {
    const navigate = useNavigate();

    const returnIndexNo = (index: number) => {
        navigate(generatePath(APP_ROUTES.DRAGNDROP_PAGE), { state: { index: index } });
    }
    const removeData = () => {
        localStorage.removeItem("initialData");
    }

    let data: [] = JSON.parse(localStorage.getItem("initialData")!);
    if (data == null) {
        const initialData = [{
          lg: [
            { x: 0, y: 0, w: 5, h: 1.7, i: "0" },
            { x: 10, y: 0, w: 4, h: 2.3, i: "1" },
            { x: 5, y: 0, w: 3, h: 2.3, i: "2" },
            { x: 0, y: 1, w: 4, h: 2, i: "3" },
            { x: 10, y: 1, w: 3, h: 3, i: "4" },
          ]
        }];
        console.log("initial DAta:", initialData);
        localStorage.setItem('initialData', JSON.stringify(initialData)); 
        data = initialData as [];
      }

    return (
        <>
            <Box>
                <Button onClick={removeData}>Remove Data</Button>
                <Typography variant="h2" sx={{ textAlign: "center", marginTop: 1 }}>Select the UI</Typography>
                <Box sx={{
                    display: 'flex',
                    flexWrap: "wrap",
                    justifyContent: "center",
                    color: "black"
                }}>
                    {data.map((_currElement, index) =>
                        (<UIBox key={index}> UI {index + 1} <Button sx={{ color: "black", background: "white", width: "auto" }} onClick={() => { returnIndexNo(index) }}>select me</Button></UIBox>)
                    )}
                </Box>
            </Box>
        </>
    );
};

export default SelectionUI;
