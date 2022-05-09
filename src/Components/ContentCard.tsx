import React, { ReactElement } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { ContentOutline } from "../Scripts/Parts/Content";

function ContentCard(props: { content: ContentOutline }): ReactElement {
  const { content } = props;

  return (
    <Card style={{ width: 300 }}>
      <CardContent classes="title">{content.title}</CardContent>
      <CardMedia
        classes="image"
        display={content.imageURL ? "" : "none"}
        component="image"
      />
      <CardContent classes="outlineText">{content.outlineText}</CardContent>
      <CardActions>
        <Button>detail</Button>
      </CardActions>
    </Card>
  );
}

export default ContentCard;
