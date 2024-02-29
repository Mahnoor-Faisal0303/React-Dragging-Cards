import { Box, Typography } from "@mui/material";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import _ from "lodash";

export const Card5Design = () => {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Box>
                    <Typography sx={{ margin: 2, ml: 4, color: "black" }} variant="h6">Support Tickets</Typography>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        border: "12px solid #e91e63",
                        borderRadius: "100px",
                        width: "130px",
                        height: "130px",
                        marginLeft: 3,
                        background: "#ccc",
                    }}>
                        <Typography sx={{ margin: 5 }} variant="h3">100%</Typography>
                    </Box>
                </Box>


                <Box sx={{ justifyContent: "space-between", ml: "120px", mt: 3 }}>
                    <Box sx={{ display: "flex" }}>
                        <Box sx={{
                            width: "22px",
                            height: "22px",
                            background: "brown",
                            borderRadius: "50%",
                            m: 0.8,
                            mr: 3
                        }}>
                        </Box>
                        <Typography sx={{ textDecoration: "underline", color: "black", mr: 7, mb: 2 }} variant="h5">New</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <Box sx={{
                            width: "22px",
                            height: "22px",
                            background: "orange",
                            borderRadius: "50%",
                            m: 0.8,
                            mr: 3
                        }}>
                        </Box>
                        <Typography sx={{ textDecoration: "underline", color: "black", mr: 7, mb: 2 }} variant="h5">Onhold</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <Box sx={{
                            width: "22px",
                            height: "22px",
                            background: "blue",
                            borderRadius: "50%",
                            m: 0.8,
                            mr: 3
                        }}>
                        </Box>
                        <Typography sx={{ textDecoration: "underline", color: "black", mr: 7, mb: 2 }} variant="h5">Escalated</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <Box sx={{
                            width: "22px",
                            height: "22px",
                            background: "red",
                            borderRadius: "50%",
                            m: 0.8,
                            mr: 3
                        }}>
                        </Box>
                        <Typography sx={{ textDecoration: "underline", color: "black", mr: 7, mb: 2 }} variant="h5">Closed</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
