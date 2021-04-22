import React from 'react'
import { useForm } from "react-hook-form"

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data)

    return (
        <div className="container is-fluid">
            <h1 className="has-text-centered">Patient Registration Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* personal details */}
                <div>
                    <div className="field">
                        <label >National Health Index:</label>
                        <br />
                        <input {...register("nHI")} type="text" placeholder="#" />
                    </div>
                    <div className="field">
                        <label>Title</label>
                        <br />
                        <select {...register("title", { required: true })}>
                            <option></option>
                            <option>Mr</option>
                            <option>Miss</option>
                            <option>Mrs</option>
                            <option>Ms</option>
                        </select>
                        <span className="has-text-danger">
                            {errors.title && "Title is required"}
                        </span>
                    </div>
                    <div className="field">
                        <label >First Name:</label>
                        <br />
                        <input {...register("firstName", { required: true })} type="text" placeholder="Alexander" />
                        <span className="has-text-danger">
                            {errors.firstName && "First name is required"}
                        </span>
                    </div>
                    <div className="field">
                        <label>Surname:</label>
                        <br />
                        <input {...register("surname", { required: true })} type="text" placeholder="Smith" />
                        <span className="has-text-danger">
                            {errors.surname && "Surname is required"}
                        </span>
                    </div>
                    <div className="field">
                        <label>Preferred Name:</label>
                        <br />
                        <input {...register("preferredName")} type="text" placeholder="Alex" />
                    </div>
                    <div className="field">
                        <label>Date of Birth:</label>
                        <br />
                        <label>Day:</label>
                        <input {...register("dobDay", { required: true })} maxLength="2" type="text" placeholder="DD" />
                        <span className="has-text-danger">
                            {errors.dobDay && "Day is required"}
                        </span>
                        <label>Month:</label>
                        <input {...register("dobMonth", { required: true })} maxLength="2" type="text" placeholder="MM" />
                        <span className="has-text-danger">
                            {errors.dobMonth && "Month is required"}
                        </span>
                        <label>Year:</label>
                        <input {...register("dobYear", { required: true })} maxLength="4" type="text" placeholder="YYYY" />
                        <span className="has-text-danger">
                            {errors.dobYear && "Year is required"}
                        </span>

                    </div>
                    <div className="field">
                        <label>Phone Number:</label>
                        <br />
                        <input {...register("phoneNumber", { required: true })} type="text" />
                        <span className="has-text-danger">
                            {errors.phoneNumber && "Phone number is required"}
                        </span>
                    </div>
                    <div className="field">
                        <label>Email:</label>
                        <br />
                        <input {...register("email")} type="text" placeholder="alex@smith.com" />
                    </div>

                    {/* GP Details */}
                    <div className="field">
                        <label>GP Name:</label>
                        <br />
                        <input {...register("gpName", { required: true })} type="text" />
                        <span className="has-text-danger">
                            {errors.gpName && "GP name is required"}
                        </span>
                    </div>
                    <div className="field">
                        <label>GP Suburb:</label>
                        <br />
                        <input {...register("gpSuburb", { required: true })} type="text" />
                        <span className="has-text-danger">
                            {errors.gpSuburb && "GP Suburb is required"}
                        </span>
                    </div>

                    {/* medication & allergies */}
                    <div className="field">
                        <label>Current Medications (Including supplements):</label>
                        <br />
                        <input {...register("currentMed", { required: true })} type="text" placeholder="If no current medication say none" />
                        <span className="has-text-danger">
                            {errors.currentMed && "Current Medications is required"}
                        </span>
                    </div>
                    <div className="field">
                        <label>Drug Allergies(Name of medication and description of reaction):</label>
                        <br />
                        <input {...register("drugAllergies", { required: true })} type="text" placeholder="If no known drug allergies please say none" />
                        <span className="has-text-danger">
                            {errors.drugAllergies && "Drug allergies is required"}
                        </span>
                    </div>

                    {/* Insurance */}
                    <div className="field">
                        <label>Name of Insurance Company:</label>
                        <br />
                        <input {...register("insuranceCompany")} type="text" placeholder="eg: Southern Cross" />
                    </div>

                    <div className="field">
                        <label>Membership Number:</label>
                        <br />
                        <input {...register("membershipNumber")} type="text" placeholder="#" />
                    </div>

                    {/* Resident */}
                    <div className="field">

                        <label>Are you an New Zealand Resident?</label>
                        <br />
                        <label className="radio">
                            <input {...register("resident", { required: true })} value="Yes" type="radio" />
                            
                    Yes
                    </label>
                        <label className="radio">
                            <input {...register("resident", { required: true })} value="No" type="radio" />
                        No
                    </label>

                    </div>

                    {/* Disclaimer */}
                    <div className="field">
                        <span>Clinical photographs are often taken as part of your medical record.
                        On occasion these are used for educational, teaching and publication purposes.
                        In this case your personal details are kept confidential and you will not be identified in any way.
                        Identifiable photographs e.g. of your face or distinctive marks such as tattoos will only be used
                        with your express written consent.
                        </span>
                        <br />
                        <label>
                            <input {...register("agreeToTerms", { required: true })} value="accepted" type="checkbox" />
                            <strong> I have read and understood the above statement</strong>
                            <span className="has-text-danger">
                                {errors.agreeToTerms && "You must read the above statement and confirm the checkbox"}
                            </span>
                        </label>
                    </div>
                    <div className="field">
                        <button className="button is-link">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Register