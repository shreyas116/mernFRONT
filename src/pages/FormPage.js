import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  

  const createEmployee = async (data) => {
    try {
    const savedUserResponse = await fetch(
      `${process.env.REACT_APP_BASE_URL}/createUser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
      
    );

    if (savedUserResponse.ok) {
   
      const responseJson = await savedUserResponse.json();
      alert("User created successfully:")
      console.log("User created successfully:", responseJson);
      
    } else {
      
      const errorData = await savedUserResponse.json();
      alert("Error while creating user ok",errorData.error);
      //console.log("Error while creating user:", errorData.error);
      
    }
  } catch (error) {
   
    alert("Error while creating user",error.message);
    //console.error("Error while creating user:", error.message);
    
  }
  navigate("/");
  };
  return (
    <form onSubmit={handleSubmit(createEmployee)} className="mt-8 flex justify-center item-center flex-row">
      <div className="space-y-5  ">
        <div>
          <label
            htmlFor="State"
            className="text-base font-medium text-gray-900 dark:text-gray-200"
          >
            {" "}
            State Name{" "}
          </label>
          <div className="mt-2.5">
            <input
              className="flex h-10 w-60 rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-black-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
              type="text"
              placeholder="Enter State Name"
              {...register("State")}
            ></input>
          </div>
        </div>
        <div>
          <label
            htmlFor="Male"
            className="text-base font-medium text-gray-900 dark:text-gray-200"
          >
            {" "}
            Enter Male count{" "}
          </label>
          <div className="mt-2.5">
            <input
              className="flex h-10  w-60  rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-blck-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
              type="number"
              placeholder="Enter Male count"
              {...register("Male")}
            ></input>
          </div>
        </div>
        <div>
          <label
            htmlFor="Female"
            className="text-base font-medium text-gray-900 dark:text-gray-200"
          >
            {" "}
            Enter Female count{" "}
          </label>
          <div className="mt-2.5">
            <input
              className="flex h-10 w-60  rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-black-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
              type="number"
              placeholder="Enter Female count"
              {...register("Female")}
            ></input>
          </div>
        </div>
        <div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
            >
              Create Data
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>

        {/* <label className=''>Enter the  State:
      <input type="text" className=' border border-black  ' />
    </label>
    <label >Enter the count for  Males:
      <input type="text" className=' border border-black  ' />
    </label>
    <label >Enter the count for  Females:
      <input type="text" className=' border border-black  ' />
    </label> */}
      </div>
    </form>
  );
};

FormPage.propTypes = {};

export default FormPage;
