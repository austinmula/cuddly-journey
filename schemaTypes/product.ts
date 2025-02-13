export default {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "title", maxLength: 96 },
      },
      {
        name: "description",
        title: "Description",
        type: "text",
      },
      {
        name: "price",
        title: "Price",
        type: "number",
      },
      {
        name: "category",
        title: "Category",
        type: "reference",
        to: [{ type: "category" }],
      },
      {
        name: "images",
        title: "Product Images",
        type: "array",
        of: [{ type: "image", options: { hotspot: true } }],
      },
      {
        name: "stock",
        title: "Stock",
        type: "number",
      },
      {
        name: "createdAt",
        title: "Created At",
        type: "datetime",
        options: {
          dateFormat: "YYYY-MM-DD",
          timeFormat: "HH:mm",
        },
      },
    ],
  };
  