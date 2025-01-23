import React, { useContext, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./callculator.css";
import axios from "axios";
import L from "leaflet";
import { vehicles } from "../../../assets/data/data.js";
import { callculatorData } from "../../../assets/data/data.js";
import { LanguageContext } from "../../../LanguageContext.jsx";

// Настройка иконок Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Callculator = () => {
  const { language } = useContext(LanguageContext); // Получаем текущий язык
  const text = callculatorData[language]; // Текст на основе выбранного языка

  const [pickupAddress, setPickupAddress] = useState("");
  const [dropoffAddress, setDropoffAddress] = useState("");
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [selectedField, setSelectedField] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 560);

  const API_KEY = "4a985249aa7841058e90f95c1f568dba";

  const reverseGeocode = async (lat, lng) => {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${API_KEY}&language=ru`
      );
      const address =
        response.data.results[0]?.formatted || "Не удалось определить адрес";
      return address;
    } catch (error) {
      console.error("Ошибка при обратном геокодировании:", error);
      return "Не удалось определить адрес";
    }
  };

  const LocationPicker = () => {
    const [position, setPosition] = useState(null);

    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);

        const address = await reverseGeocode(lat, lng);
        if (selectedField === "pickup") {
          setPickupAddress(address);
        } else if (selectedField === "dropoff") {
          setDropoffAddress(address);
        }
        setIsMapVisible(false);
      },
    });

    return position ? <Marker position={position} /> : null;
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 560);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="callculator container max-w-[583px]">
        <h2>{text.title}</h2>
        <form
          action="/f/mkggokkb?language=ru"
          method="POST"
          className="calc__form"
        >
          <div className="calc__form__group">
            <input
              type="text"
              name="pickup_address"
              placeholder={text.pickupPlaceholder}
              value={pickupAddress}
              readOnly
              required
              className="calc__form__item adress"
            />
            <button
              type="button"
              onClick={() => {
                setSelectedField("pickup");
                setIsMapVisible(true);
              }}
              className="calc__form__button__chose"
            >
              {text.chooseAddress}
            </button>
          </div>
          <div className="calc__form__group">
            <input
              type="text"
              name="dropoff_address"
              placeholder={text.dropoffPlaceholder}
              value={dropoffAddress}
              readOnly
              required
              className="calc__form__item adress"
            />
            <button
              type="button"
              onClick={() => {
                setSelectedField("dropoff");
                setIsMapVisible(true);
              }}
              className="calc__form__button__chose"
            >
              {text.chooseAddress}
            </button>
          </div>
          <input
            type="date"
            name="date"
            placeholder={text.datePlaceholder}
            className="calc__form__item"
            required
          />
          <select name="vehicle" className="calc__form__item" required>
            <option value="" disabled selected>
              {text.vehicleDefault}
            </option>
            {vehicles.map((vehicle) => (
              <option key={vehicle.value} value={vehicle.value}>
                {vehicle.label}
              </option>
            ))}
          </select>
          <input
            type="tel"
            name="phone"
            placeholder={text.phonePlaceholder}
            autoComplete="on"
            className="calc__form__item"
            required
          />
          <textarea
            name="comment"
            placeholder={text.commentPlaceholder}
            rows="3"
            className="calc__form__item textarea"
          ></textarea>
          <button type="submit" className="calc__form__button">
            {text.submitButton}
          </button>
        </form>
      </div>
      {isMapVisible && (
        <div className="map-modal">
          <div className="map-container">
            <button
              className="close-map-btn"
              onClick={() => setIsMapVisible(false)}
            >
              X
            </button>
            <MapContainer
              center={[41.2995, 69.2401]}
              zoom={13}
              style={{ flex: 1 }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              <LocationPicker />
            </MapContainer>
          </div>
        </div>
      )}
    </>
  );
};

export default Callculator;
