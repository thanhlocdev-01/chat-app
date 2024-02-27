import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckbox = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form className="p-4" onSubmit={handleSubmit}>
          <div className="p-2">
            <label className="input input-bordered hover:border-gray-200 flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Full Name"
                value={inputs.fullName}
                onChange={(e) =>
                  setInputs({ ...inputs, fullName: e.target.value })
                }
              />
            </label>
          </div>
          <div className="p-2">
            <label className="input input-bordered hover:border-gray-200 flex items-center gap-2">
              <input
                type="text"
                placeholder="Username"
                className="grow"
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
              />
            </label>
          </div>
          <div className="p-2">
            <label className="input input-bordered hover:border-gray-200 flex items-center gap-2">
              <input
                type="password"
                placeholder="Password"
                className="grow"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </label>
          </div>
          <div className="p-2">
            <label className="input input-bordered hover:border-gray-200 flex items-center gap-2">
              <input
                type="password"
                placeholder="Confirm Password"
                className="grow"
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
              />
            </label>
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckbox}
            selectedGender={inputs.gender}
          />

          <div>
            <Link
              to={"/login"}
              href="#"
              className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block">
              Already have an account?
            </Link>
          </div>
          <div className="p-2">
            <button className="btn btn-block btn-sm btn-outline mt-2 h-10 btn-primary">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
