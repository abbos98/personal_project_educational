import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Main_acardion } from './acardionStyle';

export default function AccordionUsage() {
  return (
    <Main_acardion>
      <Accordion className='wraepper_in' defaultExpanded sx={{
        backgroundColor: "#171717",
        borderRadius: "20px"
        
      }}>
        <AccordionSummary className='some'
          expandIcon={<ExpandMoreIcon className='icon_style' />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <p className='text'>What is the importance of SEO in digital marketing?</p>
        </AccordionSummary>
        <AccordionDetails className='long_style'>
        <p className='long_text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
        backgroundColor: "#171717",
        borderRadius: "20px"
        
      }}>
        <AccordionSummary className='ggg'
          expandIcon={<ExpandMoreIcon className='icon_style' />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <p className='text'>How can I start digital marketing for my business?</p>
        </AccordionSummary>
        <AccordionDetails >
        <p className='long_text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
        backgroundColor: "#171717",
        borderRadius: "20px"
      
        
      }}>
        <AccordionSummary className='ggg'
          expandIcon={<ExpandMoreIcon className='icon_style' />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <p className='text'>Is social media marketing part of digital marketing?</p>
        </AccordionSummary>
        <AccordionDetails className='sss'>
        <p className='long_text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
        </AccordionDetails>
      </Accordion>
    </Main_acardion>
  );
}
