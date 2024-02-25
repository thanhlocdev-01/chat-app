const GenderCheckbox = () => {
  return (
    <div className="flex">
      <div className="form-control p-2">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-sm border-slate-900"
            id=""
          />
        </label>
      </div>
      <div className="form-control p-2">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-sm border-slate-900"
            id=""
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
