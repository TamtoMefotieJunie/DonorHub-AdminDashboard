import React from "react";

function Button({ name, type }) {
  return (
    <>
      <div>
        <button
          type={type || "submit"}
          className="mt-5 flex w-full justify-center rounded-md bg-[#54C2B5] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#8BD0C7] focus-visible:outline focus-visible:outline-0 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {name}
        </button>
      </div>
    </>
  );
}

export default Button;
