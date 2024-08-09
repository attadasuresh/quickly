import React from 'react'
import './index.css'
import { SlSocialLinkedin, SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";

const index = () => {
  return (
    <>
    <div className='form-feature-icon-container'>
      <div className='form-features'>
        <p className='forms-features'>Features</p>
       <p className='forms-features'>Templates</p>
        <p className='forms-features'>Customers</p>
        <p className='forms-features'>Pricing</p>
        <p className='forms-features'>Integrations</p>
        <p className='forms-features'>Help</p>
      </div>
    </div>
    <div className='containerform'>
      <div className='form-content'>
        <h1 className='form-main-heading'>  <span className='form-span'>QUICKLY</span> UNLOCK YOUR PRODUCTIVITY WITH</h1>
        <p className='form-main-para'>
        AI-powered assistance delivers intelligent support, 
        significantly boosting efficiency in various tasks. It helps 
        streamline processes, making decision-making faster and more accurate.
         By analyzing data and offering insights, it empowers users to work smarter.
          This technology adapts to your needs,
         ensuring you stay productive and focused. Experience a new level of effectiveness 
         with AI-driven solutions.

        </p>
        
          <button className='form-button'>Register Now </button>
    
      </div>
      <div>
        <img className='form-main-image' src='https://png.pngtree.com/png-clipart/20230108/original/pngtree-future-technology-internet-artificial-intelligence-ai-big-data-2-5d-png-image_8885742.png' alt='formmainimage' />
      </div>
    </div>
    <div className='form-2-container'>
      <h1 className='form-heading-2page'>Here’s What Makes Us Stand Out</h1>
    </div>
    <div className='containerform'>
      <div className='form-content'>
        <h1 className='form-main-heading'> AI-Powered Assistance</h1>
        <p className='form-main-para'>   
        AI-powered assistance offers intelligent support that transforms the way tasks are managed, enhancing both efficiency and decision-making. By leveraging advanced algorithms, it can quickly analyze data, provide actionable insights, and automate routine tasks, allowing you to focus on more strategic work. This technology adapts to your specific needs, ensuring a personalized experience that drives productivity. Whether you’re managing projects, analyzing information, or making critical decisions, AI-powered assistance streamlines the process, helping you achieve better outcomes with less effort.
        </p>
      </div>
      <div>
        <img className='form-main-image' style={{ width: "30vw" }} src='https://laraform.io/images/hero.png' alt='formmainimage' />
      </div>
    </div>
    <div className='containerform2'>
      <div className='form-content1'>
        <h1 className='form-main-heading' style={{ marginTop: "0px" }}> Share your forms anywhere</h1>
        <p className='form-main-para'>Easily distribute your forms by sharing their unique weblinks or seamlessly embedding them into your landing pages. With forms.app, reaching your audience has never been simpler. Take control of your form's visibility by adjusting privacy settings to target specific demographics and restrict access. Safeguard your data and ensure confidentiality by preventing unauthorized viewing of your forms. Whether it's for collecting customer feedback or gathering essential information, forms.app empowers you to tailor your forms to your audience's needs. Maximize engagement and minimize barriers by making your forms accessible wherever your audience is. Experience the flexibility and convenience of forms.app's versatile form-sharing capabilities.</p>
      </div>
      <div className='forn-content-2'>
        <img className='form-main-image' style={{ width: "45vw" }} src='https://www.fillhq.com/wp-content/uploads/2022/08/Untitled-design-2-768x597.png' alt='formmainimage' />
      </div>
    </div>
    <footer>
      <div className='footer'>
        <div>
          <p className='fotter-containt'>Home</p>
          <p>Features</p>
          <p>Templates</p>
          <p>Customers</p>
          <p>Pricing</p>
          <p>Integrations</p>
          <p>Help</p>
        </div>
        <div>
          <p className='fotter-containt'>AboutUs</p>
          <p>Features</p>
          <p>Templates</p>
          <p>Customers</p>
          <p>Pricing</p>
          <p>Integrations</p>
          <p>Help</p>
        </div>
        <div>
          <p className='fotter-containt'>Forms</p>
          <p>Features</p>
          <p>Templates</p>
          <p>Customers</p>
          <p>Pricing</p>
          <p>Integrations</p>
          <p>Help</p>
        </div>
        <div>
          <p className='fotter-containt'>Client information</p>
          <p>Features</p>
          <p>Templates</p>
          <p>Customers</p>
          <p>Pricing</p>
          <p>Integrations</p>
          <p>Help</p>
        </div>
        <div>
          <p className='fotter-containt'>Social Media</p>
          <div className='all-footer-icons'>
            <SlSocialLinkedin className='fotter-containt-icons-linkedin' />
            <SlSocialFacebook className='fotter-containt-icons-facebook' />
            <SlSocialInstagram className='fotter-containt-icons-insta' />
            <TiSocialTwitter className='fotter-containt-icons-twitter' />
          </div>
        </div>
      </div>
    </footer>
  </>
  )
}

export default index