import RecipeDetails from "@/components/recipe-details";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

async function fetchRecipeDetails(recipeId) {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/recipes/${recipeId}`
    );
    const data = await apiResponse.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch recipe details");
  }
}

export default async function DetailsRecipePage({ params }) {
  const resolvedParams = await params;
  const recipeDetails = resolvedParams.recipeDetails;
  const recipe = await fetchRecipeDetails(recipeDetails);
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
              <BreadcrumbLink>
                <Link href="/all-recipes">All Recipes</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-blue-500">
                Recipe Details
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <RecipeDetails recipe={recipe} />
    </div>
  );
}
