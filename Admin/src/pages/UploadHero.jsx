import React, { useState } from "react";
import axios from "axios";

const UploadHero = () => {

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {  
    e.preventDefault();

    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("media", file);

    console.log("Hero File Ready:", file);  

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/hero/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Hero uploaded successfully ✅");
      console.log(response.data);

      setFile(null);

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
        Upload Hero Image / Video
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded shadow-md max-w-lg"
      >

        <div>
          <label className="block mb-2 font-medium">
            Upload Hero Media
          </label>

          <input
            type="file"
            accept="image/*,video/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          {loading ? "Uploading..." : "Upload Hero"}
        </button>

      </form>
    </div>
  );
};

export default UploadHero;