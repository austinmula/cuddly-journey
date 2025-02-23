export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "brand",
      title: "Brand",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "discountedPrice",
      title: "Discounted Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "stock",
      title: "Stock",
      type: "number",
      validation: (Rule) => Rule.min(0),
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
      validation: (Rule) => Rule.min(1),
    },
    {
      name: "summary",
      title: "Summary",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    // {
    //   name: "specifications",
    //   title: "Specifications",
    //   type: "object",
    //   fields: [
    //     { name: "processor", title: "Processor", type: "string" },
    //     { name: "ram", title: "RAM", type: "string" },
    //     { name: "storage", title: "Storage", type: "string" },
    //     { name: "gpu", title: "Graphics Card", type: "string" },
    //     { name: "display", title: "Display", type: "string" },
    //     { name: "battery", title: "Battery Life", type: "string" },
    //     { name: "os", title: "Operating System", type: "string" },
    //     { name: "ports", title: "Ports & Connectivity", type: "text" },
    //   ],
    // },
    {
      name: "variants",
      title: "Variants",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Variant Title", type: "string" },
            { name: "price", title: "Variant Price", type: "number" },
            { name: "color", title: "Color", type: "string" },
            {
              name: "images",
              title: "Variant Images",
              type: "array",
              of: [{ type: "image", options: { hotspot: true } }],
            },
          ],
        },
      ],
    },
    {
      name: "reviews",
      title: "Customer Reviews",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "user", title: "User Name", type: "string" },
            {
              name: "rating",
              title: "Rating",
              type: "number",
              validation: (Rule) => Rule.min(1).max(5),
            },
            { name: "comment", title: "Review Comment", type: "text" },
          ],
        },
      ],
    },
    {
      name: "relatedProducts",
      title: "Related Products",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      options: { dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm" },
    },
  ],
};
