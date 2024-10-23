import { Wrapper_right } from './right_sideStyle'
import SearchIcon from '@mui/icons-material/Search';

const Right_side_Component = () => {
  return (
    <Wrapper_right>
         <div className='right_side_main'>
             <div className='one'>
                <p className='search_style'>Search</p>
                <div className='wrapper_input_search'>
                  <input className='input_style' type="text" placeholder='type here'/>  
                  <SearchIcon className='search_icon_style' />
                </div>
             </div>
             <div className='two'>

             </div>
             <div className='three'>

             </div>
             <div className='five'>

             </div>
             
         </div>
    </Wrapper_right>
  )
}

export default Right_side_Component