import { Typography } from "@mui/material";
import React from "react";
// Return list of customer/s with all the product/s thay bought - by the search in the props.
const Combobox = (props) => {
  return props.purchList
    .filter((purch) => {
      if (props.id != null) {
        if (purch.id === props.id) return purch;
      } else {
        return purch;
      }
    })
    .map((purch, index) => {
      return (
        <Typography key={index}>
          {purch?.name} - {purch?.date}
        </Typography>
      );
    });
};

export default Combobox;
