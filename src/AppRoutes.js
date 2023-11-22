import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  // const authorizedRoutes = [{ path: "/store", Component: Store }];

  const { user } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
   

      {/* {authorizedRoutes.map((route) => {
        const userLoggedIn = !!user?.userToken;
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              userLoggedIn ? (
                <route.Component></route.Component>
              ) : (
                <Login></Login>
              )
            }
          />
        );
      })}
      <Route path="*" element={<PageNotExist />}></Route> */}
    </Routes>
  );
};
export default AppRoutes;
