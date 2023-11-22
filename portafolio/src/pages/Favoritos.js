import React, { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext.js";


export default function Favoritos() {
  const { favourites, ResetFavoritos, cantidadFavoritos } = useContext(FavouritesContext);

  if (!favourites) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="container mx-auto p-5 text-black">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold  mt-10">FAVOURITES</h1>

        {cantidadFavoritos > 0 ? (
          <button
            className="m-4"
            onClick={() => ResetFavoritos()}
            variant="primary"
          >
            Clean favs
          </button>
        ) : (
          <h1 className=" text-lg mt-5">Add a project to favorites to see it here</h1>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {favourites.map((project, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex justify-between">
              <a
                href={project.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
              <a
               
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
