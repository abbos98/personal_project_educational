import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Wrapper_detail } from './acardionStyle';


export default function AccordionDetail() {
  return (
    <Wrapper_detail>
        <div className='wrapper_all'>
      <Accordion defaultExpanded sx={{
        backgroundColor: "#171717",
        borderRadius: "20px"
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='icon_style'/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <p className='text'>What is the importance of SEO in digital marketing?</p>
        </AccordionSummary>
        <AccordionDetails className='long_text_style'>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
        backgroundColor: "#171717",
        borderRadius: "20px"
      }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='icon_style'/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <p className='text'>How can I start digital marketing for my business?</p>
        </AccordionSummary>
        <AccordionDetails className=''>
          <p className='long_text_style'> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
        backgroundColor: "#171717",
        borderRadius: "20px"
      }}>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon className='icon_style'/>}
          aria-controls="panel3-content"
          id="panel3-header"
        >
        <p className='text'>Is social media marketing part of digital marketing?</p>
        </AccordionSummary>
        <AccordionDetails className='long_text_style'>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
        </AccordionDetails>
        <AccordionActions>
        
        </AccordionActions>
      </Accordion>
      </div>
    </Wrapper_detail>
  );
}
