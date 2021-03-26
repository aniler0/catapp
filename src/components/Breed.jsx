import React, { useState } from "react";
import "../styles/Breed.css";
import { Box, InputLabel, MenuItem, Select } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import Typography from "@material-ui/core/Typography";
const Breed = ({ breeds }) => {
  const [select, setSelect] = useState("");

  const handleChange = (event) => {
    setSelect(event.target.value);
    console.log(breeds);
  };

  return (
    <div className="breed">
      <div className="selection-side">
        <InputLabel id="label">Select Breed</InputLabel>
        <Select onChange={handleChange} value={select}>
          <MenuItem value="select" disabled>
            Select
          </MenuItem>
          {breeds.map((breed, i) => {
            return (
              <MenuItem className="menuitem" key={i} value={i}>
                {breed.name}
              </MenuItem>
            );
          })}
        </Select>
      </div>
      {select && (
        <div className="breed-detail">
          <img src={breeds[select].image.url} alt="" srcset="" />

          <div className="information">
            <h2>{breeds[select].name}</h2>
            <h3>Origin: {breeds[select].origin}</h3>
            <h4>{breeds[select].description}</h4>
          </div>

          <div className="ratings">
            <Box
              component="fieldset"
              mb={3}
              borderColor="black"
              borderRadius="5px"
              padding="5px"
            >
              <Typography>Adaptability</Typography>
              <Rating value={breeds[select].adaptability} readOnly />
            </Box>
            <Box
              component="fieldset"
              mb={3}
              borderColor="black"
              borderRadius="5px"
              padding="5px"
            >
              <Typography>Affection Level</Typography>
              <Rating value={breeds[select].affection_level} readOnly />
            </Box>
            <Box
              component="fieldset"
              mb={3}
              borderColor="black"
              borderRadius="5px"
              padding="5px"
            >
              <Typography>Child Friendly</Typography>
              <Rating value={breeds[select].child_friendly} readOnly />
            </Box>
            <Box
              component="fieldset"
              mb={3}
              borderColor="black"
              borderRadius="5px"
              padding="5px"
            >
              <Typography>Dog Friendly</Typography>
              <Rating value={breeds[select].dog_friendly} readOnly />
            </Box>
            <Box
              component="fieldset"
              mb={3}
              borderColor="black"
              borderRadius="5px"
              padding="5px"
            >
              <Typography>Energy Level</Typography>
              <Rating value={breeds[select].energy_level} readOnly />
            </Box>
            <Box
              component="fieldset"
              mb={3}
              borderColor="black"
              borderRadius="5px"
              padding="5px"
            >
              <Typography>Grooming</Typography>
              <Rating value={breeds[select].grooming} readOnly />
            </Box>
            <Box
              component="fieldset"
              mb={3}
              borderColor="black"
              borderRadius="5px"
              padding="5px"
            >
              <Typography>Intelligence</Typography>
              <Rating value={breeds[select].intelligence} readOnly />
            </Box>
            <Box
              component="fieldset"
              mb={3}
              borderColor="black"
              borderRadius="5px"
              padding="5px"
            >
              <Typography>Shedding Level</Typography>
              <Rating value={breeds[select].shedding_level} readOnly />
            </Box>
            <Box
              component="fieldset"
              mb={3}
              borderColor="black"
              borderRadius="5px"
              padding="5px"
            >
              <Typography>Social Needs</Typography>
              <Rating value={breeds[select].social_needs} readOnly />
            </Box>
            <Box
              component="fieldset"
              mb={3}
              borderColor="black"
              borderRadius="5px"
              padding="5px"
            >
              <Typography>Stranger Friendly</Typography>
              <Rating value={breeds[select].stranger_friendly} readOnly />
            </Box>
          </div>
          <a
            style={{ marginBottom: "20px" }}
            href={breeds[select].wikipedia_url}
          >
            <h3>Wikipedia</h3>
          </a>
        </div>
      )}
    </div>
  );
};

export default Breed;
