import { BrowserRouter, Route, Routes, } from "react-router-dom";
// import ClassRoom from "../pages/ClassRoom";
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { RoutePath } from "./routerPath";
import { HomePage } from "../pages/home";
// import { CourseClassList } from "../pages/Courses/CourseClassList";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

// const PageNotFound = () => {
//   return (
//     <div className="flex items-center justify-center h-screen">
//       <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
//     </div>
//   );
// }


export default function MainRouter() {
  return (
    <>
    <HomePage />
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route element={<HomePage />} >
    //       <Route path={RoutePath.initialPage} element={} />
    //     </Route>
    //     <Route path={'*'} element={<HomePage />} />
    //   </Routes>
    // </BrowserRouter>
  );
}


