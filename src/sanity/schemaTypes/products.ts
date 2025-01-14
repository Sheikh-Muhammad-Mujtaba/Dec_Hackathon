import { Rule } from 'sanity';
import { createClient } from '@sanity/client';

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: false,
  apiVersion: '2021-08-31',
  token: process.env.SANITY_API_TOKEN, 
});

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: Rule) => Rule.max(500),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().positive().precision(2),
    },
    {
      name: 'priceWithoutDiscount',
      title: 'Price Without Discount',
      type: 'number',
      validation: (Rule: Rule) => Rule.positive().precision(2),
    },
    {
      name: 'discountPercentage',
      title: 'Discount Percentage',
      type: 'number',
      validation: (Rule: Rule) => Rule.min(0).max(100),
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule: Rule) => Rule.min(0).max(5),
    },
    {
      name: 'stockLevel',
      title: 'Stock Level',
      type: 'number',
      validation: (Rule: Rule) => Rule.min(0),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'sizes',
      title: 'Available Sizes',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'colors',
      title: 'Available Colors',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'reviews',
      title: 'Customer Reviews',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'id',
              title: 'ID',
              type: 'number',
              validation: (Rule: Rule) =>
                Rule.required().custom(async (id) => {
                  if (!id) return true;
                  const existingDocs = await client.fetch(
                    `count(*[_type == "product" && id == $id])`,
                    { id }
                  );
                  return existingDocs === 0 || 'This ID is already in use';
                }),
            },
            {
              name: 'name',
              title: 'Reviewer Name',
              type: 'string',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'review',
              title: 'Review',
              type: 'text',
              validation: (Rule: Rule) => Rule.max(500),
            },
            {
              name: 'rating',
              title: 'Rating',
              type: 'number',
              validation: (Rule: Rule) => Rule.min(0).max(5),
            },
            {
              name: 'date',
              title: 'Review Date',
              type: 'date',
              validation: (Rule: Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};
