
import { Link} from "react-router-dom";
export default function Login() {
  return (
      <>
        
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                  <img
                      className="mx-auto h-12 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company"
                  />
                  <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>

              </div>

              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                  <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                      <form className="space-y-6" action="/users" method="POST">
                          <div>
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                  Email address
                              </label>
                              <div className="mt-1">
                                  <input
                                      id="email"
                                      name="email"
                                      type="email"
                                      autoComplete="email"
                                      required
                                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                  />
                              </div>
                          </div>

                          <div>
                              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                  Password
                              </label>
                              <div className="mt-1">
                                  <input
                                      id="password"
                                      name="password"
                                      type="password"
                                      autoComplete="current-password"
                                      required
                                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                  />
                              </div>
                          </div>

                          <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                  <input
                                      id="remember-me"
                                      name="remember-me"
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                      Remember me
                                  </label>
                              </div>

                              <div className="text-sm">
                                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                      Forgot your password?
                                  </a>
                              </div>
                          </div>

                          <div>
                              <button
                                  type="submit"
                                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              >
                                  Sign in
                              </button>
                          </div>
                      </form>

                      <div className="mt-6">
                          <div className="relative">
                              <div className="absolute inset-0 flex items-center">
                                  <div className="w-full border-t border-gray-300" />
                              </div>
                              <div className="relative flex justify-center text-sm">
                                  <span className="bg-white px-2 text-gray-500">Not registered yet??</span>
                              </div>
                          </div>

                          <div className="mt-6 ">
                              <div>
                                  <Link
                                      to="/register"
                                      className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                                  >
                                      <div className="relative flex justify-center text-sm">
                                          <span className="bg-white px-2 text-gray-500">Register</span>
                                      </div>

                                  </Link>
                              </div>


                          </div>
                      </div>
                  </div>
              </div>
      </>
  )
}
