import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'
const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className="add-service">
            <h2>Please Add A service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input  {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                <textarea {...register("description")} placeholder="description " />
                <input type="number" {...register("price",)} placeholder="price" />
                <input {...register("img")} placeholder="image URL" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;