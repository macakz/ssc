import React from 'react'
import { useForm } from "react-hook-form"

function Register() {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data)

    return (
        <div className="container is-fluid">
            <h1 className="has-text-centered">Patient Registration Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* personal details */}
                <div>

                    <div className="field">
                        <label >NHI:</label>
                        <br />
                        <input {...register("nhi")} type="text" placeholder="NHI" />
                    </div>
                    <div className="field">
                        <label>Title</label>
                        <br />
                        <select {...register("title")}>
                            <option>Please select one</option>
                            <option>Mr</option>
                            <option>Miss</option>
                            <option>Mrs</option>
                            <option>Ms</option>
                        </select>
                    </div>
                    <div className="field">
                        <label >First Name:</label>
                        <br />
                        <input {...register("firstName")} type="text" placeholder="First name" />
                    </div>
                    <div className="field">
                        <label>Surname:</label>
                        <br />
                        <input {...register("surname")} type="text" placeholder="Surname" />
                    </div>
                    <div className="field">
                        <label>Preferred Name:</label>
                        <br />
                        <input {...register("preferredName")} type="text" placeholder="Preferred Name" />
                    </div>
                    <div className="field">
                        <label>Phone:</label>
                        <br />
                        <input {...register("phone")} type="text" placeholder="Phone" />
                    </div>
                    <div className="field">
                        <label>Email:</label>
                        <br />
                        <input {...register("email")} type="text" placeholder="Email" />
                    </div>

                    {/* GP Details */}
                    <div className="field">
                        <label>GP Name:</label>
                        <br />
                        <input {...register("gpName")} type="text" placeholder="GP Name" />
                    </div>
                    <div className="field">
                        <label>GP Suburb:</label>
                        <br />
                        <input {...register("gpSuburb")} type="text" placeholder="GP Suburb" />
                    </div>

                    {/* medication & allergies */}
                    <div className="field">
                        <label>Current Medications(Including supplements):</label>
                        <br />
                        <input {...register("currentMed")} type="text" placeholder="Current Medication" />
                    </div>
                    <div className="field">
                        <label>Drug Allergies(Name of medication and description of reaction):</label>
                        <br />
                        <input {...register("drugAllergies")} type="text" placeholder="Drug Allergies" />
                    </div>

                    {/* Insurance */}
                    <div className="field">
                        <label>Name of Insurance Company:</label>
                        <br />
                        <input {...register("insuranceCompany")} type="text" placeholder="Insurance Company" />
                    </div>

                    <div className="field">
                        <label>Membership Number:</label>
                        <br />
                        <input {...register("membershipNumber")} type="text" placeholder="Insurance Company" />
                    </div>

                    {/* Resident */}
                    <div className="field">

                        <label>Are you an New Zealand Resident?</label>
                        <br />
                        <label className="radio">
                            <input {...register("resident")} value="Yes" type="radio" />
                    Yes
                    </label>
                        <label className="radio">
                            <input {...register("resident")} value="No" type="radio" />
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
                            <input {...register("agreeToTerms")} value="accepted" type="checkbox" />
                            <strong> I have read and understood the above statement</strong>
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