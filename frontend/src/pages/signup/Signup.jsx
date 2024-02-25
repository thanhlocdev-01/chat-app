import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form className="p-4">
          <div className="p-2">
            <label className="input input-bordered hover:border-gray-200 flex items-center gap-2">
              <input type="text" className="grow" placeholder="Full Name" />
            </label>
          </div>
          <div className="p-2">
            <label className="input input-bordered hover:border-gray-200 flex items-center gap-2">
              <input type="text" placeholder="Username" className="grow" />
            </label>
          </div>
          <div className="p-2">
            <label className="input input-bordered hover:border-gray-200 flex items-center gap-2">
              <input type="password" placeholder="Password" className="grow" />
            </label>
          </div>
          <div className="p-2">
            <label className="input input-bordered hover:border-gray-200 flex items-center gap-2">
              <input
                type="password"
                placeholder="Confirm Password"
                className="grow"
              />
            </label>
          </div>

          <GenderCheckbox />

          <div>
            <a
              href="#"
              className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block">
              Already have an account?
            </a>
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
