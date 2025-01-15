import { client } from '@/sanity/lib/client';


export const fetchProducts = async () => {
  const query = `
    *[_type == "product"]{
      "id": _id,
      "slug": slug.current,
      name,
      description,
      price,
      "originalPrice": priceWithoutDiscount,
      "discount": discountPercentage,
      rating,
      stockLevel,
      tags,
      sizes,
      colors,
      "images": images[].asset->url,
      reviews[]{
        _key,
        id,
        name,
        review,
        rating,
        date,
      }
    }
  `;
  return await client.fetch(query);
};

