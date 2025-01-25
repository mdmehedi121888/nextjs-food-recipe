import RecipeList from "@/components/recipe-list";

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
      <RecipeList recipeList={recipeList} limit={30} />
    </div>
  );
}
