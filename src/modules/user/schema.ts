import * as mongoose from 'mongoose'

interface User extends Document {}

const UserSchema = new mongoose.Schema({
    country: {
        type: String,
        default: ''
    },
    language: {
        type: String,
        default: ''
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    flagTermsAccepted: {
        type: Boolean,
        required: true
    },
    roles: {
        type: Array,
        default: ['customer']
    }
})

export { UserSchema, User }