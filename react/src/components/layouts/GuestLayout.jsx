import {Navigate, Outlet} from "react-router-dom";
import { useStateContext } from "../../contexts/contextprovider";
export default function GuestLayout() {
  const { user, token } = useStateContext();

  if (token) {
    return <Navigate to="/" />;
  }
  return (
    <>

      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Outlet />
      </div>
    </>
  )
}