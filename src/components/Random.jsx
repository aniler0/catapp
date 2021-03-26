import React, { useState } from "react";
import { getRandomCatPhoto } from "../utils/FetchData";
import { motion } from "framer-motion";
import "../styles/RandomImg.css";

const Random = () => {
  const [data, setData] = useState("");

  const [loaded, setLoaded] = useState(true);

  const isLoaded = () => {
    setLoaded(true);
  };
  return (
    <motion.div animate={{ scale: 1.1 }}>
      <div className="cat-image">
        <h2>Random Cat Image</h2>
        <motion.button
          disabled={!loaded}
          className="cat-button"
          onClick={() => {
            setLoaded(false);
            getRandomCatPhoto(setData, setLoaded);
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Click
        </motion.button>
        {data && (
          <>
            {loaded === true ? (
              <img
                src={data[0].url}
                alt="broken"
                onLoad={isLoaded}
                style={
                  loaded === false ? { display: "none" } : { display: "block" }
                }
              />
            ) : (
              <h2>Loading...</h2>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Random;
