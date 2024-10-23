// サーバー側からクライアント側に切り替える必要がある
"use client";

import React from "react";
import PortfolioDetailDesign from "@/app/page/portfolio-detail-desgin";
import { DataArray } from "@/app/data";

// ポートフォリオの詳細内で、動的ルート自体を作成
const Portfolio = (props) => {
  // ID は任意の ID 
  console.log("the id is: ", props.params.id);

  return (
    <React.Fragment>
      <PortfolioDetailDesign
        data={DataArray[props.params.id]}
        id={props.params.id}
        DataArray={DataArray}
      />
    </React.Fragment>
  );
};
export default Portfolio;
