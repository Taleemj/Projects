export default {
  name: "projects",
  type: "document",
  title: "projects",
  fields: [
    {
      name: "title",
      type: "string",
      title: "title",
    },
    {
      name: "slug",
      type: "slug",
      title: "slug",
      option: {
        source: "title",
        slugify: (input) => input.toLowerCase().replace(/\s+/g, "-"),
      },
    },
    {
      name: "subTitle",
      type: "string",
      title: "subTitle",
    },
    {
      name: "mainImage",
      type: "image",
      title: "mainImage",
    },
    {
      name: "body",
      type: "text",
      title: "body",
    },
  ],
};
