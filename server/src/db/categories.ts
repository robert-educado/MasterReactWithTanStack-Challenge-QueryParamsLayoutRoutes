import { db } from "../db/index.js";
import {
  categoriesTable,
  productCategoriesTable,
  productLocalesTable,
  productsTable,
  type Category,
} from "../db/schema.js";
import { eq, and } from "drizzle-orm";
import type { CategoryWithProducts } from "../types.js";

export async function getCategories(locale: string) {
  let categories = await db
    .select()
    .from(categoriesTable)
    .where(eq(categoriesTable.locale, locale));

  return categories;
}

export async function getCategoryBySlug(slug: string) {
  
  const categoryWithProducts = await db
    .select()
    .from(categoriesTable)
    .leftJoin(
      productCategoriesTable,
      eq(productCategoriesTable.category_id, categoriesTable.id)
    )
    .leftJoin(
      productsTable,
      eq(productsTable.id, productCategoriesTable.product_id)
    )
    .leftJoin(
      productLocalesTable,
      eq(productLocalesTable.product_id, productsTable.id)
    )
    .where(
      and(
        eq(categoriesTable.slug, slug),
        eq(productLocalesTable.locale, categoriesTable.locale)
      )
    );

  const result = categoryWithProducts.reduce((categories: Category[], row) => {

    let category = categories.find((c) => c.id === row.categories.id) as CategoryWithProducts | undefined;;

    if (!category) {
      category = {
        id: row.categories.id,
        name: row.categories.name,
        slug: row.categories.slug,
        locale: row.categories.locale,
        products: [],
      };

      categories.push(category);
    }

    category.products.push({
      id: row.products!.id,
      name: row.product_locales!.name,
      description: row.product_locales!.description,
      sku: row.products!.sku,
      price: row.products!.price,
      imageUrl: row.products!.imageUrl,
      brand: row.products!.brand,
      new: row.products!.new ? "true" : "false",
      slug: row.product_locales!.slug,
      locale: row.product_locales!.locale,
    });

    return categories;
  }, []);

  if (result.length === 0) {
    return null; // No category found with the given slug
  }

  return result[0];
}