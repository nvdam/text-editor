import React from "react";

export default function Alert(props) {
  const capitalize = (something) => {
    const lower = something.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.title} alert-dismissible show fade my-5`}
        role="alert"
      >
        <strong>{capitalize(props.alert.title)}! </strong>
        {capitalize(props.alert.message)}.
        <button
          type="button"
          className="btn-close"
          // data-bs-dismiss="alert"
          onClick={props.closeAlert}
        ></button>
      </div>
    )
  );
}
