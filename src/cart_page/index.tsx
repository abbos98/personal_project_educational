import { Wrapper_CartPage } from './cartPageSty;le';
import one from "../assets/box_first.svg";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { NavLink } from 'react-router-dom';

const CartPage_component = () => {
  return (
    <Wrapper_CartPage>
        <div className='all_main_Wrapper'>
             
             <div className='top_text_wrapper'>
               <p className='your_shopping_style'>Your Shopping Cart</p>
             </div>
             <div className='Product_wrapper'>
                <div className='first_line'>
                  <p className='product_style'>Product</p>
                </div>

                <div className='second_line'>
                   <p className='price_style'>Price</p>
                   <p className='quantity_style'>Quantity</p>
                   <p className='total_style'>Total</p>
                </div>
             </div>

                <div className='line_under'></div>
            <div className='add_wrapper'>
             <div className='Item_hart_wrapper'>
               <img className='image_style' src={one}/>
               <p className='basic_plan_style'>Basic Plan</p>
             </div>
             <div className='price_wrapper'>
                <div className='theerteen'>
                   <p className='style'>$19.00</p>
                </div>
                
               
             </div>
             <div className='plus_minus_wrapper'>
                    <p className='quantity_style'>1</p>
                  <div className='minus'><RemoveIcon /></div>
                  <div className='plus'><AddIcon /></div>
                </div>
              <div className='total_wrapper'>
                  <p className='num_style'>$19.00</p>
                </div>
            </div>

        <div className='button_wrapper'>
          <NavLink to={"/"} className='but_style'>
            <button className='lets_buy'>Let's buy</button>
          </NavLink>
        </div>

        </div>
    </Wrapper_CartPage>
  )
}

export default CartPage_component;