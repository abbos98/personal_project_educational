import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Main_acardion } from './acardionStyle';

export default function AccordionUsage() {
  return (
    <Main_acardion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <p className='text'>What is the importance of SEO in digital marketing?</p>
        </AccordionSummary>
        <AccordionDetails>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         How can I start digital marketing for my business?
        </AccordionSummary>
        <AccordionDetails>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
        Is social media marketing part of digital marketing?
        </AccordionSummary>
        <AccordionDetails>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
    </Main_acardion>
  );
}
