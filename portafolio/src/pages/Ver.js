import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FavouritesContext } from "../context/FavouritesContext"



export default function Ver() {
    const [Item, setItem] = useState(null);
    const { id } = useParams();
    const { AddFavourite, DeleteFavourite, favourites } = useContext(FavouritesContext)

    useEffect(() => {
        axios.get('/portfolio.json') 
          .then((response) => {
            const item = response.data.find((item, index) => String(index + 1) === id);
            setItem(item);
          })
          .catch((error) => {
            console.error('Error al cargar los datos:', error);
          });
      }, []); 

      const EstaEnFavs = () => {
        console.log(Item)
        console.log("favoritos: " + JSON.stringify(favourites))
        const result = favourites.find(({ id }) => id === Item.id)
        if (result == undefined) {
            return true
        } else {
            return false
        }
    }

  return (
    <>
    {Item &&
        <div className="flex items-center justify-center h-screen">
        <div className="">
          <div className="modal-content">
            <img src={Item.image} alt={Item.title}  style={{height:"500px", width:"400px"}} />
            <h2 className='' >{Item.title}</h2>
            <p>{Item.description}</p>
            <div className='flex'>
            <a href={Item.link} className="text-blue-400 rounded-md p-2 mr-2">Enlace</a>
            {EstaEnFavs() ?
            <button style={{ borderRadius: 10 }} className="bg-green-500 rounded-md p-2 mr-2 hover:bg-green-300 border" onClick={() => AddFavourite(Item)}>Add to favourites</button>
                :
            <button style={{ borderRadius: 10 }} className="bg-red-500 rounded-md p-2 mr-2 hover:bg-red-300" onClick={() => DeleteFavourite(Item)}>Delete favourite</button>
            }
            </div>

          </div>
        </div>
      </div>
    }   
             
    </>
  )
}