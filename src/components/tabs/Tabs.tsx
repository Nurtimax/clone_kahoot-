import React, { SyntheticEvent, useEffect, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";

const TabsItem = () => {
  const [value, setValue] = useState("home");
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("page");

  const changeHandler = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (typeof query === "string") {
      return setValue(query);
    }
    setSearchParams({ page: value });
  }, [query, setSearchParams, value]);

  return (
    <>
      <Tabs
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs"
        value={value}
        onChange={changeHandler}
      >
        <Tab value="home" label={<Link to="/"> Home </Link>} />
        <Tab value="play" label={<Link to="/play">Play</Link>} />
        <Tab value="singin" label={<Link to="/singin">Sing In</Link>} />
        <Tab value="singup" label={<Link to="/singup">Sign Up</Link>} />
        <Tab value="create-test" label={<Link to="/create-test">Create Test</Link>} />
      </Tabs>
    </>
  );
};

export default TabsItem;
