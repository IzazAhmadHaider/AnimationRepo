import * as motion from "motion/react-client";

export default function Rotate() {
  return (
    <div style={container}>
      {/* Animated Box */}
    <motion.div
      style={box}
      animate={{ rotate: 360 }}
      transition={{ duration: 5 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    />
    </div>
  );
}

/**
 * ==============   Styles   ================
 */

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#ff0088",
  borderRadius: 5,
  margin: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  padding: "20px",
};
