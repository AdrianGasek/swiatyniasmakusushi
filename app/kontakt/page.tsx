"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import { FaPhone } from "react-icons/fa6";
import Button from "@/components/Button";

// ChIJdVb38fDRHkcRfhuxSB1eWPs

const center = {
  lat: 52.26228337187806, // szerokość geograficzna
  lng: 21.155938112983886, // długość geograficzna
};

const mapOptions = [
  {
    featureType: "all",
    elementType: "all",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#3b6c39",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [
      {
        saturation: 36,
      },
      {
        color: "#000000",
      },
      {
        lightness: 40,
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#000000",
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 17,
      },
      {
        weight: 1.2,
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 29,
      },
      {
        weight: 0.2,
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 18,
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 19,
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#1a1a1a",
      },
      {
        lightness: 17,
      },
    ],
  },
];

const Kontakt = () => {
  const initialHeight = window ? window.innerHeight - 114 : null;
  const [containerStyle, setContainerStyle] = useState({
    width: "100%",
    height: initialHeight,
  });
  const [place, setPlace] = useState(null); // Zmienna na dane miejsca

  const center = place
    ? { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }
    : { lat: 52.26228337187806, lng: 21.155938112983886 };

  useEffect(() => {
    const updateHeight = () => {
      setContainerStyle({
        ...containerStyle,
        height: window.innerHeight - 114,
      });
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const onLoad = useCallback((map) => {
    // Sprawdź, czy obiekt google jest dostępny
    if (window.google && window.google.maps) {
      const service = new window.google.maps.places.PlacesService(map);

      const request = {
        placeId: "ChIJLRhSpd9NGIcRG84M_pIwNVk", // Podaj swój Google Place ID
        fields: ["name", "geometry"],
      };

      service.getDetails(request, (placeResult, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setPlace(placeResult);
        } else {
          console.error("Nie udało się znaleźć miejsca:", status);
        }
      });
    }
  }, []);

  return (
    <div className="w-full px-10 sm: flex justify-center items-center lg:px-0">
      <div className="flex flex-col w-full justify-center items-center pt-[90px] lg:!flex-row lg:!pt-[0px]">
        <div className="w-full flex flex-col mb-6 lg:w-1/2 !mb-0">
          <div className="flex flex-col">
            <h1 className="text-white text-[30px] sm:text-[64px] text-center mt-[50px] border border-white lg:!mt-[25px] lg:!border-0">
              Kontakt
            </h1>
            <p className="text-[30px] my-5 text-white text-center flex justify-center items-center gap-4">
              <FaPhone size={26} /> 48 23 343 232
            </p>
            <p className="text-[30px] mb-5 text-white text-center flex justify-center items-center gap-4">
              <FaPhone size={26} /> 48 23 343 232
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-[30px] sm:text-[64px] text-center border border-white lg:!border-0">
              Adres
            </h1>
            <p className="text-[30px] my-5 text-white text-center flex justify-center items-center gap-4">
              Ignacego Paderewskiego 28 <br /> 04-450 Warszawa
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-[30px] sm:text-[64px] text-center border border-white lg:!border-0">
              Godziny otwarcia
            </h1>
            <p className="text-[30px] mt-5 text-white text-center flex justify-center items-center">
              Poniedziałek-Piątek 09:00-23:00
            </p>
            <p className="text-[30px] mt-5 text-white text-center flex justify-center items-center">
              Sobota-Niedziela 09:00-23:00
            </p>
          </div>
          <Button
            text="Zamów teraz"
            className="relative mt-6 !text-[20px] !mx-auto !self-center"
          />
        </div>
        <div className="w-full flex flex-col mb-6 lg:w-1/2 !mb-0">
          {/* <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
          >
            <GoogleMap

              mapContainerStyle={containerStyle}
              center={center}
              zoom={14}
              onLoad={onLoad}
              options={{
                styles: mapOptions, // Dodaj style do mapy
              }}
            >
                {place && <Marker position={center} />}
            </GoogleMap>
          </LoadScript> */}
        </div>
      </div>
    </div>
  );
};

export default Kontakt;