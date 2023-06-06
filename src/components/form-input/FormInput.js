import React from 'react'
import './FormInput.style'
import { FormInputLabel, Group, Input } from "./FormInput.style";

const FormInput = ({ label, ...otherProps }) => {
    return (
        <Group>
            <Input {...otherProps} />
            {
                label && (
                    <FormInputLabel shrink={otherProps.value.length}>
                        {label}
                    </FormInputLabel>
                )
            }
        </Group>
    );
};

export default FormInput