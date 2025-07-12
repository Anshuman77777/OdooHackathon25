import { useState } from "react";
import map from "@/assets/map.png";
function MapModal({isOpen,setIsOpen}) {
  
 const apiKey = "AIzaSyBO1hZyZsyekvCcOMoi01Pz_HoeBnv1Noc";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Vadodara`;

  return (
    <div >

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-md">
            <h2 className="text-xl font-semibold mb-4">Set Location</h2>
           
            <iframe
          title="Google Map"
          src={mapUrl}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MapModal