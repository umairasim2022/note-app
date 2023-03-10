import React from "react";

import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: "2rem",
  color: "#000",
  fontFamily: "inherit",
};

const NoteModal = ({ open, handleClose, currentNote }) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={() => handleClose()}
      closeAfterTransition
    >
      <Fade in={open}>
        <Box sx={style}>
          <Stack direction="column">
            <Stack direction="row" justifyContent={"space-between"}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                {currentNote?.title}
              </Typography>

              <Box>
                <CloseIcon
                  fontSize="medium"
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleClose()}
                />
              </Box>
            </Stack>

            <Box component="p">{currentNote?.description}</Box>
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
};

export default React.memo(NoteModal);
