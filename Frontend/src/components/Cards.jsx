import React, { useEffect } from "react";
import axios from "axios";

function Cards({ item, onDeleteSuccess }) {

  const HandleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:4001/delete/${item._id}`);
      console.log('Book deleted:', response.data);
      alert('Book successfully deleted!');
      if(onDeleteSuccess) onDeleteSuccess(item._id);
    } catch (error) {
      if (error.response) {
        console.error('Error deleting book:', error.response.data);
      } else {
        console.error('Error deleting book:', error.message);
      }
    }
  };

  return (
    <>
      <div key={item._id} className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt={item.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
              <div onClick={HandleDelete} className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Delete
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;