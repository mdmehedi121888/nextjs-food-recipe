import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function RecipeDetails({ recipe }) {
  return (
    <div className="py-10 flex justify-center items-center min-h-[60vh] ">
      <Card className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Image */}
          <CardHeader className="p-0">
            <Image
              src={recipe?.image}
              alt={recipe?.name}
              width={500}
              height={400}
              className="w-full h-full object-cover"
            />
          </CardHeader>

          {/* Right Column: Content */}
          <CardContent className="p-8">
            <CardTitle className="text-3xl font-extrabold text-gray-800 mb-4">
              {recipe?.name}
            </CardTitle>

            <div className="mb-6 text-gray-700 space-y-3">
              <p className="text-lg">
                <span className="font-bold text-gray-900">Cuisine:</span>{" "}
                {recipe?.cuisine}
              </p>
              <p className="text-lg">
                <span className="font-bold text-gray-900">Difficulty:</span>{" "}
                {recipe?.difficulty}
              </p>
              <p className="text-lg">
                <span className="font-bold text-gray-900">Prep Time:</span>{" "}
                {recipe?.prepTimeMinutes} minutes
              </p>
              <p className="text-lg">
                <span className="font-bold text-gray-900">Cook Time:</span>{" "}
                {recipe?.cookTimeMinutes} minutes
              </p>
              <p className="text-lg">
                <span className="font-bold text-gray-900">
                  Calories/Serving:
                </span>{" "}
                {recipe?.caloriesPerServing}
              </p>
              <p className="text-lg">
                <span className="font-bold text-gray-900">Rating:</span>{" "}
                {recipe?.rating} ⭐ ({recipe?.reviewCount} reviews)
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 underline">
                Ingredients
              </h2>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                {recipe?.ingredients?.slice(0, 3).map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
