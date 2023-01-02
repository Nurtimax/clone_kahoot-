import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch } from "./hook/react-redux";
import Header from "./layout/Header";
import CreateTest from "./pages/CreateTest";
import Home from "./pages/Home";
import Play from "./pages/Play";
import SettingTest from "./pages/SettingTest";
import SingIn from "./pages/SingIn";
import SingUp from "./pages/SingUp";
import { createTestAction } from "./store/slices/createTestSlice/createTestSlice";
import { useGetTestDataQuery } from "./store/slices/createTestSlice/createTestSlice.api";

const App = () => {
  const { data, isLoading } = useGetTestDataQuery("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch(createTestAction.getStateValue(data));
    }
  }, [data, dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/singin" element={<SingIn />} />
          <Route path="/singup" element={<SingUp />} />
          <Route path="/create-test" element={<CreateTest />} />
          <Route path="/create-test/:id" element={<SettingTest />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
