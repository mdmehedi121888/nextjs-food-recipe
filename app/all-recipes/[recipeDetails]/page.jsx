import RecipeDetails from "@/components/recipe-details";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
      <div className="flex justify-center mt-2 mb-5">
        <Link href={"/"}>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            <ArrowLeft /> Home
          </Button>
        </Link>
      </div>
      <RecipeDetails recipe={recipe} />
    </div>
  );
}
