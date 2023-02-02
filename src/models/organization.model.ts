import mongoose from "mongoose";

export interface OrganizationInput {
    name: string;
    phoneNumber: number;
    email: string;
    confirmation_email: string;
}

export interface OrganizationDocument extends OrganizationInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

const organizationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    confirmation_email: {
        type: String,
        required: true,
        unique: true
    },
}, {
    timestamps: true
})

const OrganizationModel = mongoose.model<OrganizationDocument>("Organization", organizationSchema)

export default OrganizationModel;