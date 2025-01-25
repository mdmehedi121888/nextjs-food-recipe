import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function RecipeList({ recipeList, limit }) {
  return (
    <div className="px-6 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Recipe List
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {recipeList && recipeList.length > 0 ? (
          recipeList.slice(0, limit).map((recipe) => (
            <Card
              className="shadow-lg hover:shadow-xl transition duration-200 ease-in-out rounded-2xl cursor-pointer"
              key={recipe.id}
            >
              <CardHeader>
                <Image
                  className="rounded-t-xl object-cover"
                  src={recipe?.image}
                  width={300}
                  height={200}
                  alt={recipe?.name}
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg font-semibold text-gray-700">
                  {recipe?.name}
                </CardTitle>
                <p className="text-sm text-gray-600 mt-2">
                  Rating:{" "}
                  <span className="font-medium text-yellow-500">
                    {recipe?.rating}
                  </span>
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Tags:{" "}
                  <span className="text-gray-800">
                    {recipe?.tags.join(", ")}
                  </span>
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Meal Type:{" "}
                  <span className="text-gray-800">{recipe?.mealType[0]}</span>
                </p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No recipes available.
          </p>
        )}
      </div>
    </div>
  );
}
