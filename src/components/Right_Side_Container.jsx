"use client";

export default function Right_SmallCards() {
  return (
    <div className="column-container">
      <img
        src="https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643f0f0850a29442c2d4da31_Small%20Card%2003.svg"
        alt="Small Card 1"
        className="small-card"
      />
      <img
        src="https://cdn.prod.website-files.com/643f03b9f767055f60e2cdc8/643f0f0850a29442c2d4da31_Small%20Card%2003.svg"
        alt="Small Card 2"
        className="small-card"
      />

      <style>
        {`
          .column-container {
          top: -980;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px; /* Space between images */
            padding: 10px;
          }

          .small-card {
            width: 270px;
            height: auto;
            max-width: 273px;
            max-height: 143px;
            object-fit: contain;
          }
        `}
      </style>
    </div>
  );
}
