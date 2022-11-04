import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type InputDoubleProps = {
    smallPH: string;
    largePH: string;
    formSubmit: SubmitHandler<RealtorFormValues>;
};

export type RealtorFormValues = {
    city: string;
    name: string;
};

const schema = yup.object({
    city: yup.string().required(),
    name: yup.string()
});

const InputDouble: React.FC<InputDoubleProps> = ({ smallPH, largePH, formSubmit }) => {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<RealtorFormValues>({ resolver: yupResolver(schema) });

    return (
        <form className="InputDouble__search" onSubmit={handleSubmit(formSubmit)}>
            <input id="name" type="text" className="InputDouble__search__input InputDouble__search__input--small" placeholder={smallPH} {...register('name')} />
            <input id="city" type="text" className={`InputDouble__search__input ${errors.city && 'InputDouble__search__input--error'}`} placeholder={largePH} {...register('city')} />
            <button type="submit" className="btn btn--rec">
                Search
            </button>
        </form>
    );
};

export default InputDouble;
