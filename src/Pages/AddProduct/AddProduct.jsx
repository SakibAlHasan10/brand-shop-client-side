const AddProduct = () => {
    const handleAddProduct = (e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const category = form.category.value;
        console.log(name, brand, price, category)
    }
  return (
    <div className="max-w-screen-lg mx-auto mb-10 px-8">
      <h2 className="text-3xl font-semibold mt-14 mb-10">Add Product</h2>
      <form onSubmit={handleAddProduct} className="border p-5 rounded-lg">
        <div className="flex gap-6 justify-between">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="product name"
              className="input w-full  input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <select className="select select-bordered w-full" name="brand">
              <option disabled selected>
                Apple
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </div>
        <div className="flex gap-6 justify-between">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Product Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="product name"
              className="input w-full  input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select className="select select-bordered w-full" name="category">
              <option disabled selected>
                Phone
              </option>
              <option>Laptop</option>
              <option>MacBook</option>
            </select>
          </div>
        </div>
        <div className="flex gap-6 justify-between">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Product Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="product name"
              className="input w-full  input-bordered"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select className="select select-bordered w-full" name="category">
              <option disabled selected>
                Phone
              </option>
              <option>Laptop</option>
              <option>MacBook</option>
            </select>
          </div>
        </div>
        <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo URL"
              className="input w-full  input-bordered"
              required
            />
          </div>
        <button type="submit" className="btn w-full mt-5 btn-outline">Default</button>
      </form>
    </div>
  );
};

export default AddProduct;
