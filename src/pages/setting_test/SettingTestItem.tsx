import React from "react";
import { useParams } from "react-router-dom";

const SettingTestItem = () => {
  const { cardId } = useParams();
  console.log(cardId);

  return (
    <div>
      <h1>Setting test{cardId}</h1>
    </div>
  );
};

export default SettingTestItem;
