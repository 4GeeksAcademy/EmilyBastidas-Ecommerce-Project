import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Recuperamos los resultados enviados desde el Navbar
  const { results, term } = location.state || { results: [], term: "" };

  return (
    <div className="container my-5">
      <h3 className="mb-4">Resultados para: "{term}"</h3>
      
      <div className="row">
        {results.length > 0 ? (
          results.map((product) => (
            <div className="col-12 col-md-4 col-lg-3 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm border-0" onClick={() => navigate(`/product/${product.id}`)} style={{cursor: 'pointer'}}>
                <img 
                  src={product.image_url || (product.gallery?.[0]?.url) || "https://via.placeholder.com/200"} 
                  className="card-img-top" 
                  alt={product.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h6 className="card-title">{product.name}</h6>
                  <p className="fw-bold text-dark">€{product.base_price}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <p className="fs-4 text-muted">No encontramos lo que buscas. ¡Prueba con otra palabra!</p>
          </div>
        )}
      </div>
    </div>
  );
};