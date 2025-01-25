import RecipeList from "@/components/recipe-list";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

async function fetchRecipeList() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/recipes");
    const data = await apiResponse.json();
    return data.recipes;
  } catch (error) {
    throw new Error("Failed to fetch recipes");
  }
}
export default async function AllRecipes() {
  const recipeList = await fetchRecipeList();

  return (
    <div>
      <div className="px-16 mt-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-blue-500">
                All Recipies
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <RecipeList recipeList={recipeList} limit={30} />
    </div>
  );
}
