import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminServices = () => {

  const [services, setServices] = useState([]);
  const [editService, setEditService] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // ================= FETCH SERVICES =================
  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/services/all");
      setServices(res.data.result);
    } catch (error) {
      console.log("Fetch error:", error);
    }
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this service?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/services/delete/${id}`);
      fetchServices();
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  // ================= OPEN EDIT =================
  const openEditModal = (service) => {
    setEditService(service);
    setFormData({
      title: service.title,
      description: service.description
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
        `http://localhost:5000/api/services/update/${editService._id}`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" }
        }
      );

      setEditService(null);
      fetchServices();

    } catch (error) {
      console.log("Update error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10">

      <h2 className="text-3xl font-bold mb-8">Services Dashboard</h2>

      {/* ================= SERVICE LIST ================= */}
      <div className="grid md:grid-cols-3 gap-8">

        {services.map((service) => (
          <div key={service._id} className="bg-white shadow-lg p-4 rounded">

            <img
              src={`http://localhost:5000/services/${service.image}`}
              alt={service.title}
              className="h-40 w-full object-cover rounded"
            />

            <h3 className="text-xl font-semibold mt-4">
              {service.title}
            </h3>

            <p className="text-gray-600 mt-2">
              {service.description}
            </p>

            <div className="flex gap-4 mt-4">
              <button
                onClick={() => openEditModal(service)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(service._id)}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>

          </div>
        ))}

      </div>

      {/* ================= EDIT MODAL ================= */}
      {editService && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

          <div className="bg-white p-8 rounded w-[400px]">

            <h3 className="text-xl font-bold mb-4">
              Update Service
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
                  onClick={() => setEditService(null)}
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

export default AdminServices;