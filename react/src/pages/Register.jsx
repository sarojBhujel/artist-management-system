import { Link } from "react-router-dom";
import { createRef, useState } from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/contextprovider";
export default function Register() {
  const firstNameRef = createRef()
  const lastNameRef = createRef()
  const emailRef = createRef()
  const passwordRef = createRef()
  const phoneRef = createRef()
  const dobRef = createRef()
  const genderRef = createRef()
  const addressRef = createRef()
  const passwordConfirmationRef = createRef()

  const { setUser, setToken } = useStateContext()
  const [errors, setErrors] = useState(null)

  const onSubmit = e => {
    e.preventDefault()
    const payload = {
      firstNameRef: firstNameRef.current.value,
      lastNameRef: lastNameRef.current.value,
      emailRef: emailRef.current.value,
      passwordRef: passwordRef.current.value,
      phoneRef: phoneRef.current.value,
      dobRef: dobRef.current.value,
      genderRef: genderRef.current.value,
      addressRef: addressRef.current.value,
      passwordConfirmationRef: passwordConfirmationRef.current.value
    }
    axiosClient.post('/register', payload)
    .then(({data}) => {
      setUser(data.user)
      setToken(data.token);
    })
    .catch(err => {
      const response = err.response;
      if (response && response.status === 422) {
        setErrors(response.data.errors)
      }
    })
  }
  return (
    <>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Registration Form</h2>

      </div>

      <div className="mt-8 sm:mx-auto sm:w-full ">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={onSubmit}>
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Registration Form</h3>

                </div>

                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input ref={firstNameRef}
                      type="text"
                      name="name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <input
                      ref={lastNameRef}
                      type="text"
                      name="last_name"
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone No.
                    </label>
                    <input
                      ref={phoneRef}
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      ref={addressRef}
                      type="text"
                      name="address"
                      id="address"
                      autoComplete="family-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                      Date Of Birth
                    </label>
                    <input
                      ref={dobRef}
                      type="date"
                      name="dob"
                      id="dob"
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                      Gender
                    </label>
                    <select
                      ref={genderRef}
                      id="gender"
                      name="gender"
                      autoComplete="gender-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      ref={emailRef}
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>




                  <div className="col-span-6 sm:col-span-3 ">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      ref={passwordRef}
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="address-level1"
                      className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 ">
                    <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">
                      Confirm Password
                    </label>
                    <input
                      ref={passwordConfirmationRef}
                      type="password"
                      name="confirm_password"
                      id="confirm_password"
                      autoComplete="confirm_password"
                      className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <Link to="/login" >
                  <button className="inline-flex justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-1">Cancle</button>
                </Link>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
