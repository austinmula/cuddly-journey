// import axios from 'axios';

import { Category } from "@/models/category";
import sanityClient from "./sanity";
import { Product } from "@/models/product";
// import { Game, GameSubset } from '@/models/game';

export const getCategories = async (): Promise<Category[]> => {
  const query = `*[_type == "category"] {
        _id,
        slug,
        image,
        title
    }`;

  const categories: Category[] = await sanityClient.fetch(query);
  return categories;
};

export const getCategoryBySlug = async (
  slug: string
): Promise<Category | null> => {
  const query = `*[_type == "category" && slug.current == $slug][0] {
    _id,
    slug,
    image,
    title
  }`;

  const category: Category | null = await sanityClient.fetch(query, { slug });
  return category;
};

export const getProducts = async (): Promise<Product[]> => {
  const query = `*[_type == "product"] {
    _id,
    title,
    slug,
    brand,
    price,
    discountedPrice,
    stock,
    category->{
      _id,
      title,
      slug
    },
    images,
    description,
    summary,
    variants,
    reviews,
    relatedProducts[]->{
      _id,
      title,
      slug
    },
    createdAt
  }`;

  const products: Product[] = await sanityClient.fetch(query);
  return products;
};

export const getRecentProducts = async (): Promise<Product[]> => {
  const query = `*[_type == "product"] | order(_createdAt desc) [0...10] {
    _id,
    title,
    slug,
    brand,
    price,
    discountedPrice,
    stock,
    category->{
      _id,
      title,
      slug
    },
    images,
    description,
    summary,
    variants,
    reviews,
    relatedProducts[]->{
      _id,
      title,
      slug
    },
    createdAt
  }`;

  const products: Product[] = await sanityClient.fetch(query);
  return products;
};

export const getProductBySlug = async (
  slug: string
): Promise<Product | null> => {
  const query = `*[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    brand,
    price,
    discountedPrice,
    stock,
    category->{
      _id,
      title,
      slug
    },
    images,
    description,
    summary,
    variants,
    reviews,
    relatedProducts[]->{
      _id,
      title,
      slug,
      price,
      discountedPrice,
      images,
    },
    createdAt
  }`;

  const product: Product | null = await sanityClient.fetch(query, { slug });
  console.log(product);
  return product;
};

export const getProductById = async (id: string): Promise<Product | null> => {
  const query = `*[_type == "product" && _id == $id][0] {
    _id,
    title,
    slug,
    brand,
    price,
    discountedPrice,
    stock,
    category->{
      _id,
      title,
      slug
    },
    images,
    description,
    summary,
    variants,
    reviews,
    relatedProducts[]->{
      _id,
      title,
      slug,
      price,
      discountedPrice,
      images
    },
    createdAt
  }`;

  const product: Product | null = await sanityClient.fetch(query, { id });
  // console.log(product);
  return product;
};

export const getProductsByFilters = async (
  categoryId?: string,
  minPrice?: number,
  maxPrice?: number,
  searchTerm?: string
): Promise<Product[]> => {
  const query = `*[_type == "product"
    ${categoryId ? `&& category._ref == $categoryId` : ""}
    ${minPrice ? `&& price >= $minPrice` : ""}
    ${maxPrice ? `&& price <= $maxPrice` : ""}
    ${searchTerm ? `&& (title match $searchTerm + "*" || description match $searchTerm + "*")` : ""}
  ] | order(createdAt desc) {
    _id,
    title,
    slug,
    brand,
    price,
    discountedPrice,
    stock,
    category->{
      _id,
      title,
      slug
    },
    images,
    description,
    summary,
    variants,
    reviews,
    relatedProducts[]->{
      _id,
      title,
      slug
    },
    createdAt
  }`;

  const params: any = {};
  if (categoryId) params.categoryId = categoryId;
  if (minPrice !== undefined) params.minPrice = minPrice;
  if (maxPrice !== undefined) params.maxPrice = maxPrice;
  if (searchTerm) params.searchTerm = searchTerm;

  const products: Product[] = await sanityClient.fetch(query, params, {
    cache: "no-cache",
  });

  return products;
};

export const getProductsByCategory = async (
  categoryId?: string
): Promise<Product[]> => {
  const query = `*[_type == "product" ${categoryId ? `&& category._ref == $categoryId` : ""}] | order(createdAt desc) {
    _id,
    title,
    slug,
    brand,
    price,
    discountedPrice,
    stock,
    category->{
      _id,
      title,
      slug
    },
    images,
    description,
    summary,
    variants,
    reviews,
    relatedProducts[]->{
      _id,
      title,
      slug
    },
    createdAt
  }`;

  const products: Product[] = await sanityClient.fetch(
    query,
    categoryId ? { categoryId } : {}
  );
  console.log(products);
  return products;
};

export const getRandomProducts = async (): Promise<Product[]> => {
  const query = `*[_type == "product"] {
    _id,
    title,
    slug,
    price,
    discountedPrice,
    category->{
      _id,
      title
    },
    images,
    createdAt
  }`;

  try {
    const products: Product[] = await sanityClient.fetch(query);

    // Shuffle the array randomly and pick the first 6 products
    return products.sort(() => 0.5 - Math.random()).slice(0, 8);
  } catch (error) {
    console.error("Error fetching random products:", error);
    return [];
  }
};

// export const getGames = async (): Promise<Game[]> => {
// 	const query = `*[_type == "game"] {
//         name,
//         price,
//         images,
//         isFeatured,
//         isTrending,
//         'category': *[_id == ^.category._ref][0] {
//           name,
//           slug {
//             current
//           }
//         },
//         slug,
//         quantity,
//         description
//       }`;

// 	const games: Game[] = await sanityClient.fetch({ query });

// 	return games;
// };

// export const getCategoryGames = async (slug: string): Promise<Game[]> => {
// 	const query = `*[_type == "game" && category->slug.current == "${slug}"] {
//     name,
//     price,
//     images,
//     isFeatured,
//     isTrending,
//     slug,
//     quantity,
//     description,
//     category->{
//       name,
//       subtitle
//     }
//   }`;

// 	const games: Game[] = await sanityClient.fetch({ query });

// 	return games;
// };

// export const getCategory = async (slug: string): Promise<Category> => {
// 	const query = `*[_type == "category" && slug.current == "${slug}"][0]`;

// 	const category: Category = await sanityClient.fetch({ query });

// 	return category;
// };

// export const getRecentGames = async (): Promise<Game[]> => {
// 	const query = `*[_type == "game"] | order(_createdAt desc)[0...4] {
//         name,
//         price,
//         images,
//         isFeatured,
//         isTrending,
//         'category': *[_id == ^.category._ref][0] {
//           name,
//           slug {
//             current
//           }
//         },
//         slug,
//         quantity,
//         description
//       }`;

// 	const games: Game[] = await sanityClient.fetch({ query });

// 	return games;
// };

// export const getGame = async (slug: string): Promise<Game> => {
// 	const query = `*[_type == "game" && slug.current == "${slug}"][0] {
//         _id,
//         name,
//         price,
//         images,
//         isFeatured,
//         isTrending,
//         'category': *[_id == ^.category._ref][0] {
//           name,
//           slug {
//             current
//           }
//         },
//         slug,
//         quantity,
//         description
//   }`;

// 	const game: Game = await sanityClient.fetch({ query });

// 	return game;
// };

// export const updateGameQuantity = async (games: GameSubset[]) => {
// 	const mutation = {
// 		mutations: games.map(({ _id, maxQuantity, quantity }) => {
// 			return {
// 				patch: {
// 					id: _id,
// 					set: {
// 						quantity: maxQuantity - quantity,
// 					},
// 				},
// 			};
// 		}),
// 	};

// 	const { data } = await axios.post(
// 		`https://${process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET}`,
// 		mutation,
// 		{ headers: { Authorization: `Bearer ${process.env.SANITY_TOKEN}` } }
// 	);

// 	return data;
// };

// export const createOrder = async (games: GameSubset[], userEmail: string) => {
// 	const mutation = {
// 		mutations: [
// 			{
// 				create: {
// 					_type: 'order',
// 					items: games.map((game, idx) => ({
// 						game: {
// 							_key: idx,
// 							_type: 'reference',
// 							_ref: game._id,
// 						},
// 						quantity: game.quantity,
// 					})),
// 					userEmail,
// 					orderStatus: 'pending',
// 				},
// 			},
// 		],
// 	};

// 	const { data } = await axios.post(
// 		`https://${process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET}`,
// 		mutation,
// 		{ headers: { Authorization: `Bearer ${process.env.SANITY_TOKEN}` } }
// 	);

// 	return data;
// };

// export async function fetchOrder(userEmail: string) {
// 	const query = `*[_type == "order" && userEmail == $userEmail] {
//     _id,
//     items[] {
//       _key,
//       quantity,
//       game -> {
//         _id,
//         name,
//         price,
//         images,
//         slug {
//           current
//         },
//         description
//       }
//     },
//     orderStatus,
//     createdAt
//   }`;

// 	const params = { userEmail };
// 	const result: any = await sanityClient.fetch({ query, params });

// 	return result;
// }
