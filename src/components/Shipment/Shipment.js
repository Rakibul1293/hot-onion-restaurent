import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from "../Auth/Auth";
import './Shipment.css';

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    const auth = useAuth();
    console.log(auth);

    // console.log(watch('name'))
    return (
        < form className="ship-form" onSubmit={handleSubmit(onSubmit)} >

            < input name="name" defaultValue={auth.user.displayName} ref={register({ required: true })} placeholder="Your Name" />
            {errors.name && <span className="error">Name is required</span>}

            < input name="email" defaultValue={auth.user.email} ref={register({ required: true })} placeholder="Your Email" />
            {errors.email && <span className="error">Email is required</span>}

            < input name="AddressLine1" ref={register({ required: true })} placeholder="Address Line1" />
            {errors.AddressLine1 && <span className="error">Address is required</span>}

            < input name="AddressLine2" ref={register} placeholder="Address Line2" />

            < input name="city" ref={register({ required: true })} placeholder="City" />
            {errors.city && <span className="error">City is required</span>}

            < input name="country" ref={register({ required: true })} placeholder="Country" />
            {errors.country && <span className="error">Country is required</span>}

            < input name="zipcode" ref={register({ required: true })} placeholder="Zip Code" />
            {errors.zipcode && <span className="error">Zip Code is required</span>}

            <input type="submit" />
        </form >
    )
}

export default Shipment;