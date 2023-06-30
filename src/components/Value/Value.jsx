import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemState,
    AccordionItemPanel
} from 'react-accessible-accordion'

import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion'
const Value = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="" />
                </div>
            </div>
            <div className="v-right">
                <span className='orangeText'>OUR VALUE<br/></span>
                <span className='primaryText'>VALUE WE GIVE TO YOU<br/></span>
                <span className='secondaryText'>WE ALWAYS READY TO HELP BY PROVIDING THE BEST SERVICES FOR YOU<br/>WE BELIEVE A GOOD PLACE TO LIVE CAN MAKE YOUR LIFE BETTER.</span>
<Accordion className='accprdion' 
allowMultipleExpanded={false}
preExpanded={[0]}>
{
    data.map((item,i)=>
    {
        const [className,setClassName]=useState(null);
        return(
            <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                <AccordionItemHeading>
                    <AccordionItemButton className='flexCenter accordionButton'>

                    <AccordionItemState>
                        {({expanded})=>expanded
                        ?setClassName("expanded")
                        :setClassName("collapsed")
                    }
                    </AccordionItemState>


                        <div className="flexCenter icon">{item.icon}</div>
                        <span className='primaryText'>{item.heading}</span>
                        <div className="flexCenter icon">
                            <MdOutlineArrowDropDown size={20}/>
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="seconaryText">{item.detail}</p>
                </AccordionItemPanel>
            </AccordionItem>
        )
    })
}
</Accordion>

            </div>
        </div>
    </section>
  )
}

export default Value