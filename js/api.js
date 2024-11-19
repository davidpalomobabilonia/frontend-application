const API_URL = "http:/localhost:300/api/Book";

// obtener todos los productos +

export const getBook = async () => {
  Response = await fetch(API_URL);
  return Response.json();
};


// obtener producto por ID
export const getBookByID = async (id) => {
    const Response = await fetch(`${API_URL}/${id}`);
    return Response.json();
};

// crear un producto
export const addBook = async (book) => {
    const Response = await fetch(API_URL,{
    method: "POST",
    headers: { "content-type": "aplication/json" },
    body: JSON.stringify(book)
    });
    return Response.json(); 
};

// actualizar un producto
export const updateBook = async (id, book) => {
    const Response = await fetch(`${API_URL}/${id}`,{
    method: "PUT",
    headers: { "content-type": "aplication/json" },
    body: JSON.stringify(book)
    });
    return Response.json(); 
};

// borrar un producto
export const daleteBook = async (id, book) => {
   return fetch(`${API_URL}/${id}`,{
    method: "DALETE"
    }); 
};