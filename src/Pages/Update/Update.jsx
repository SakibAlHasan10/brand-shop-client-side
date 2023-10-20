import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Update = () => {
  const loadProduct = useLoaderData();
  const {_id, name, brand, price, category, rating, description, photo } =
    loadProduct;
    console.l
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const product = {
      name,
      brand,
      price,
      category,
      rating,
      description,
      photo,
    };
    fetch(`http://localhost:5000/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          toast.success("product update successful", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        // console.log(data);
      });
    // console.log(name, brand, price, category, rating, description, photo)
  };
  return (
    <div>
      <div className="max-w-screen-lg mx-auto mb-10 px-8">
        <ToastContainer />
        <h2 className="text-3xl font-semibold mt-14 mb-10">Update Product</h2>
        <form onSubmit={handleUpdateProduct} className="border p-5 rounded-lg">
          <div className="md:flex gap-6 justify-between">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="product name"
                className="input w-full  input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <select
                className="select select-bordered w-full"
                name="brand"
                defaultValue={brand}
              >
                <option>Apple</option>
                <option>Samsung</option>
                <option>Google</option>
                <option>Sony</option>
                <option>Intel</option>
                <option>OnePlus</option>
              </select>
            </div>
          </div>
          <div className="md:flex gap-6 justify-between">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Product Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="product name"
                className="input w-full  input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                className="select select-bordered w-full"
                name="category"
                defaultValue={category}
              >
                <option>Phone</option>
                <option>Laptop</option>
                <option>Tablet</option>
                <option>Headphone</option>
              </select>
            </div>
          </div>
          <div className="md:flex gap-6 justify-between">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                defaultValue={rating}
                placeholder="product rating"
                className="input w-full  input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description"
                defaultValue={description}
                placeholder="short description"
                className="input w-full  input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="photo URL"
              className="input w-full  input-bordered"
              required
            />
          </div>
          <button type="submit" className="btn w-full mt-5 btn-outline">
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
