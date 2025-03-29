import React from 'react'
import "./AboutUsDesign.css"

function AboutUsDesign({item,index}) {
  return (
    <>
    
    <div  className="listar-feature-item-wrapper listar-feature-with-image listar-height-changed" >
                          <div className="listar-feature-item listar-feature-has-link">
                            <span className='span-wave'></span>
                            <div className="listar-feature-item-inner">
                              <div className="listar-feature-right-border" />
                              <div className="listar-feature-block-content-wrapper">
                                <div className="listar-feature-icon-wrapper">
                                  <div className="listar-feature-icon-inner">
                                    <div>
                                      <img alt="Businesses" className="listar-image-icon" src={item.img} />
                                    </div>
                                  </div>
                                </div>
                                <div className="listar-feature-content-wrapper" style={{paddingTop: 0}}>
                                  <div className="listar-feature-item-title listar-feature-counter-added">
                                    <span className='mobile_para_font poppins-bold  text-[#12122A] text-[16px] md:text-[18px] leading-[30px]' ><span className=''>0{index}</span>
                                    {item.title} </span>
                                  </div>
                                  <div className="listar-feature-item-excerpt  mobile_para_font poppins-regular lg:text-justify text-[#12122A] text-[16px] md:text-[18px] leading-[30px]">
                                 {item.description}  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <div className="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height" /> */}
                        </div>
    </>
  )
}

export default AboutUsDesign