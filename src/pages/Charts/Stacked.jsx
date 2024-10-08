import React from "react";

import { ChartsHeader, Stacked as StackedChart } from "../../components";

const Stacked = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="پشته ایی" title="تفکیک درآمد" />
    <div style={{ direction: "ltr" }} className="w-full">
      <StackedChart />
    </div>
  </div>
);

export default Stacked;
