import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "./FavoritesContext.jsx";

export const Card = ({ id, name, price, image }) => {
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.includes(id);

  return (
    <div className="card border-0" style={{ maxWidth: "320px" }}>
      <Link
        to={`/product/${id}`}
        className="text-decoration-none text-dark"
      >
        <div
          className="position-relative"
          style={{
            height: "220px",
            overflow: "hidden",
          }}
        >
          <img
            src={"https://picsum.photos/600/400"}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();    
              e.stopPropagation();   
              toggleFavorite(id);
            }}
            className="border-0 p-0"
            style={{
              position: "absolute",
              top: "0.5rem",
              right: "0.5rem",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, 0.6)", 
            }}
          >
            <i
              className={
                isFavorite
                  ? "fa-solid fa-heart text-danger"  
                  : "fa-regular fa-heart text-white" 
              }
              style={{ fontSize: "1rem" }}
            ></i>
          </button>
        </div>

        <div className="card-body px-0">
          <h6 className="mb-1">{name}</h6>
          <p className="mb-0 fw-semibold">{price}</p>
        </div>
      </Link>
    </div>
  );
};