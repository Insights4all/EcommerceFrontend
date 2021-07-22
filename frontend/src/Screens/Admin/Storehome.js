import { Box } from "@material-ui/core";
import React from "react";

function Storehome() {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="row"
        p={1}
        m={1}
        bgcolor="background.paper"
      >
        <Box p={4} bgcolor="grey.300">
          Item 1
        </Box>
        <Box p={4} bgcolor="grey.300">
          Item 2
        </Box>
        <Box p={4} bgcolor="grey.300">
          Item 3
        </Box>
      </Box>
    </div>
  );
}

export default Storehome;
