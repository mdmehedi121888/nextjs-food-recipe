import RecipeList from "@/components/recipe-list";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

async function fetchRecipeList() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/recipes");
    const data = await apiResponse.json();
    return data.recipes;
  } catch (error) {
    throw new Error("Failed to fetch recipes");
  }
}
export default async function Home() {
  const recipeList = await fetchRecipeList();
  return (
    <div className="container mx-auto px-4">
      <RecipeList recipeList={recipeList} limit={8} />
      <div className="flex justify-center mt-2 mb-5">
        <Link href={"/all-recipes"} recipeList={recipeList} limit={30}>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Load More <ArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}
