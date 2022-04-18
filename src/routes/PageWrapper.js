import React from "react";

const PageWrapper = ({ title, subtitle, children }) => {
  return (
    <div className="text-white">
      <div>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
};
export default PageWrapper;
