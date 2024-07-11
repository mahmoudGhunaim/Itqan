import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "gatsby";
import "./style/Accordion.css";

const AccordionsV2 = ({ title, Details, linkpdf }) => {
  
  return (
    <Accordion className='acc-Asset' > 
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-faq"
        className='acc-title'
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>
        <ul>
            <li>
            <Link to={linkpdf}>{Details}</Link>
          </li>
        </ul>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionsV2;
