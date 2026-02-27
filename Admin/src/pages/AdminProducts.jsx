import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminProducts = () => {

  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // ================= FETCH PRODUCTS =================
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products/all");
      setProducts(res.data.result);
    } catch (error) {
      console.log("Fetch error:", error);
    }
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/products/delete/${id}`);
      fetchProducts();
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  // ================= OPEN EDIT =================
  const openEditModal = (product) => {
    setEditProduct(product);
    setFormData({
      title: product.title,
      description: product.description
    });
    setImage(null);
  };

  // ================= UPDATE =================
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      if (image) {
        data.append("image", image);
      }

      await axios.put(
        `http://localhost:5000/api/products/update/${editProduct._id}`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" }
        }
      );

      setEditProduct(null);
      fetchProducts();

    } catch (error) {
      console.log("Update error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10">

      <h2 className="text-3xl font-bold mb-8">Products Dashboard</h2>

      {/* ================= PRODUCT LIST ================= */}
      <div className="grid md:grid-cols-3 gap-8">

        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-lg p-4 rounded">

            <img
              src={`http://localhost:5000/products/${product.image}`}
              alt={product.title}
              className="h-40 w-full object-cover rounded"
            />

            <h3 className="text-xl font-semibold mt-4">
              {product.title}
            </h3>

            <p className="text-gray-600 mt-2">
              {product.description}
            </p>

            <div className="flex gap-4 mt-4">
              <button
                onClick={() => openEditModal(product)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(product._id)}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>

          </div>
        ))}

      </div>

      {/* ================= EDIT MODAL ================= */}
      {editProduct && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

          <div className="bg-white p-8 rounded w-[400px]">

            <h3 className="text-xl font-bold mb-4">
              Update Product
            </h3>

            <form onSubmit={handleUpdate} className="space-y-4">

              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full border p-2 rounded"
                placeholder="Title"
                required
              />

              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full border p-2 rounded"
                rows="4"
                placeholder="Description"
                required
              />

              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full border p-2 rounded"
              />

              <div className="flex justify-between">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  {loading ? "Updating..." : "Update"}
                </button>

                <button
                  type="button"
                  onClick={() => setEditProduct(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>

            </form>

          </div>

        </div>
      )}

    </div>
  );
};

export default AdminProducts;