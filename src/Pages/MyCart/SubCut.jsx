const SubCut = ({ cart }) => {
  const { name, brand, price, category, rating, description, photo } = cart;
  return (
    <div>
      <div className="flex gap-6 mb-5 py-3 px-5 rounded-xl items-center shadow-md">
        <img src={photo} alt="" className="w-32 h-32 rounded-xl" />
        <div className="w-full flex-1">
          <h2 className="text-3xl mb-3 font-semibold ">{name}</h2>
          <div className="text-left items-center  justify-between md:flex mb-3 font-semibold text-xl ">
            <div className="text-left flex-1  mb-3 flex font-semibold text-xl ">
              <p>{brand}</p>
              <p className="border-l-2 border-dashed border-red-600 ml-2 pl-2">
                {category}
              </p>
            </div>
            <div className="flex justify-between flex-1 items-center">
            <p className="text-red-600 font-semibold">${price}.00</p>
            <button className="btn btn-outline font-bold text-xl">X</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCut;
