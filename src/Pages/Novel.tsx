import React, { ReactElement } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { ContentOutline } from "../Scripts/Parts/Content";
import dummyContents from "../Scripts/Dummy";
import GeneralContentsFrame from "../Components/GeneralContentsFrame";

function Novel(): ReactElement {
  const contents: ContentOutline[] = dummyContents;

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item width={500}>
        <Typography fontSize={32} align="center">
          novelページ
        </Typography>
        <Divider />
      </Grid>
      <Grid item>
        <Box sx={{ maxWidth: 1000 }}>
          <GeneralContentsFrame contents={contents} />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Novel;
