import { Grid } from "@mui/material";
import React, { ReactElement } from "react";
import { ContentOutline } from "../Scripts/Parts/Content";
import ContentCard from "./ContentCard";

function GeneralContentsFrame(props: {
  contents: ContentOutline[];
}): ReactElement {
  const { contents } = props;
  const cardBoxList = contents.map((c) => {
    return <ContentCard content={c} />;
  });

  return (
    <Grid
      container
      spacing={3}
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      {cardBoxList.map((card) => (
        <Grid item>{card}</Grid>
      ))}
    </Grid>
  );
}

export default GeneralContentsFrame;
