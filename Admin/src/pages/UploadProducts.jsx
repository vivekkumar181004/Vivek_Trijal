import React, { useState } from "react";
import axios from "axios";

const UploadProducts = () => {

  const [formDataState, setFormDataState] = useState({
    title: "",
    description: "",
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormDataState({
      ...formDataState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("title", formDataState.title);
    formData.append("description", formDataState.description);
    formData.append("image", image);  // must match backend

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/products/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Product uploaded successfully ✅");
      console.log(response.data);

      // Reset form
      setFormDataState({ title: "", description: "" });
      setImage(null);

    } catch (error) {
      console.log(error);
      alert("Upload failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Upload Product
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded shadow-md max-w-lg"
      >

        {/* Title */}
        <div>
          <label className="block mb-2 font-medium">
            Product Title
          </label>
          <input
            type="text"
            name="title"
            value={formDataState.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter product title"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 font-medium">
            Product Description
          </label>
          <textarea
            name="description"
            value={formDataState.description}
            onChange={handleChange}
            rows="4"
            className="w-full border p-2 rounded"
            placeholder="Enter product details..."
            required
          />
        </div>

        {/* Image */}
        <div>
          <label className="block mb-2 font-medium">
            Upload Product Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          {loading ? "Uploading..." : "Upload Product"}
        </button>

      </form>
    </div>
  );
};

export default UploadProducts;