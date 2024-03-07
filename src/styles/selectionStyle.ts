import { Box } from "@mui/material";
import styled from "styled-components";


export const UIBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    height: '110px',
    width: '110px',
    margin:5,
    marginTop: 20,
    fontSize:"20px",
    gap:10
})