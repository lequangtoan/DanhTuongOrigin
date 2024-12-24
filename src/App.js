import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import "./App.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/home/Home";
import News from "./pages/news/News";
import CardCap from "./pages/cardCap/CardCap";
import Manual from "./pages/manual/Manual";
import Community from "./pages/community/Community";
import Library from "./pages/library/Library";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="cardcap" element={<CardCap />} />
        <Route path="manual" element={<Manual />} />
        <Route path="community" element={<Community />} />
        <Route path="library" element={<Library />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
