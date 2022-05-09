export type ContentOutline = {
  id: string;
  date: string;
  title: string;
  outlineText: string;
  imageURL?: string;
  detailURL: string;
  tags: string[];
};

export type ContentType = "illust" | "novel" | "comic" | "dialy" | "tech";

export type ContentDetail = {
  id: string;
  date: string;
  contentType: ContentType;
  contentURL: string;
};
