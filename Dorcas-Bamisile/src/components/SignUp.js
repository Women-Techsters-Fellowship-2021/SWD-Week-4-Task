import React from 'react'


const SignUp = Up.object().shape({
    firstName: Up.string()
        .required('Firstname is required.'),
    lastName: Up.string()
        .required('Lastname is required.'),
    email: Up.string()
        .email('Invalid Email.'),
    password: Up.string()
        .required('password is required.')
})

const SignUp = () => {
    
}