import { Box, Button, Typography } from "@mui/material";
import { UIBox } from "../styles/selectionStyle";
import { generatePath, useNavigate } from "react-router-dom";
import APP_ROUTES from "../constants/Routes";

const SelectionUI = () => {
    const navigate = useNavigate();

    const returnIndexNo = (index: number) => {
        navigate(generatePath(APP_ROUTES.DRAGNDROP_PAGE), { state: { index: index } });
    }
    const removeData =()=> {
       localStorage.removeItem("initialData");
    }
    const data: [] = JSON.parse(localStorage.getItem("initialData")!);

    return (
        <>
            <Box>
                <Button onClick={removeData}>Remove Data</Button>
                <Typography variant="h2" sx={{ textAlign: "center", marginTop: 1 }}>Select the UI</Typography>
                <Box sx={{
                    display: 'flex',
                    flexWrap: "wrap",
                    justifyContent: "center",
                    color:"black"
                }}>
                    {data.map((_currElement, index) =>
                        (<UIBox key={index}> UI {index+1} <Button sx={{color:"black", background:"white", width:"auto"}} onClick={() => { returnIndexNo(index) }}>select me</Button></UIBox>)
                    )}
                </Box>
            </Box>
        </>
    );
};

export default SelectionUI;
