import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ deletingDoctor,refetch,setDeletingDoctor }) => {
    const {name,email} = deletingDoctor;
    const handleDelete = () =>{
        fetch(`http://localhost:5000/doctor/${email}`,{
            method: 'DELETE',
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount){
                toast.success(`Doctor: ${name} is deleted.`)
                setDeletingDoctor(null)
                refetch()
            }
        })
    }
  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you sure you want to delete {name}?
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem iure qui, consequuntur molestias beatae culpa incidunt perspiciatis tempore harum quibusdam minus odit? Qui recusandae possimus maxime similique consequatur, est illum?</p>
          <button onClick={()=>handleDelete()} class="btn btn-xs btn-error">Delete</button>
          <div class="modal-action">
            <label for="delete-confirm-modal" class="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
