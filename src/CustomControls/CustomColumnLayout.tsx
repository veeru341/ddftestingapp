import React from "react";
import useFormApi from "@data-driven-forms/react-form-renderer/use-form-api";

const CustomColumnLayout = ({ fields }: any) => {
  const formOptionss = useFormApi();

  const { renderForm } = useFormApi();

  return (
    <div style={{marginLeft:"40px"}}>
      {fields.map((field: any) => (
        <div key={field.name} style={{}}>
            {renderForm([field])}
        </div>
      ))}
    </div>
  );
};

export default CustomColumnLayout;