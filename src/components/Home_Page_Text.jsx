import React from "react";

export default function BankingExperience() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem", // p-8
        // backgroundColor: "white",
      }}
    >
      <h1
        style={{
          fontSize: "2.25rem", // text-3xl
          fontWeight: "bold",
          color: "white", // text-white-900 (approximated to white)
          marginBottom: "1rem", // mb-4
        }}
      >
        Streamline Your Banking Experience
      </h1>
      <p
        style={{
          color: "white", 
          fontSize: "1.25rem", 
          maxWidth: "36rem",
          marginBottom: "1.5rem", 
          lineHeight: "1.625", 
        }}
      >
        Experience hassle-free banking card management and transactions with our
        platform with our user-friendly interface.
      </p>
      <div
        style={{
          display: "flex",
          gap: "1rem", // gap-4
        }}
      >
        <button
          style={{
            backgroundColor: "#1d4ed8", // bg-blue-600
            color: "white",
            padding: "0.5rem 1.5rem", // px-6 py-2
            borderRadius: "0.5rem", // rounded-lg
            fontWeight: "600", // font-semibold
            transition: "background-color 0.15s ease-in-out", // transition
            cursor: "pointer", // For hover effect
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1a3c91")} // hover:bg-blue-700
          onMouseOut={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
        >
          Get Started
        </button>
        <button
          style={{
            backgroundColor: "#e5e7eb", // bg-gray-200
            color: "#111827",  // text-gray-900
            padding: "0.5rem 1.5rem", // px-6 py-2
            borderRadius: "0.5rem", // rounded-lg
            fontWeight: "600", // font-semibold
            transition: "background-color 0.15s ease-in-out", // transition
            cursor: "pointer", // For hover effect
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#d1d5db")} // hover:bg-gray-300
          onMouseOut={(e) => (e.target.style.backgroundColor = "#e5e7eb")}
        >
          Watch Videos
        </button>
      </div>
    </div>
  );
}