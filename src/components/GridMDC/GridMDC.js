import React from "react";
import Grid from '@material-ui/core/Grid';

const GridMDC = props =>
    <Grid {...props}>
        {props.children}
    </Grid>

export default GridMDC;