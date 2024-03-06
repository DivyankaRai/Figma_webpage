import './App.css'

function App() {
  return(
    <>
      <nav>
          <div className='logo' >
            <img src="/images/unified_logo.png" alt="" />    
          </div>
          <ul className='nav_items_list'>
            <li><a href="#">COMPANY</a></li>
            <li><a href="#">INVESTORS <i class="fa fa-chevron-down"></i></a></li>
            <li><a href="#">PRODUCTS <i class="fa fa-chevron-down"></i></a></li>
            <li><a href="#">JOURNAL</a></li>
            <li><a href="#">REACH US</a></li>
          </ul>
      </nav>
      <div className="hero_section">
          <div className='hero_section_content'>
           <h1>
           Empower Your <br/>
            Business<span> Finances</span>
           </h1>
           <h3>
            Your Expert Partner in Swift Business Financing. <br/>
            Bridging Gaps and Ensuring Success. Thrive with <br/>
             Us!
           </h3>
           <p>Discover More &rarr;</p>
          </div>
          <div className='hero_section_image'>
             <img src="/images/hero_img.png" alt=""/>
          </div>
          <div className='hero_section_text'>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p></p>
          </div>
      </div>
      <div className="invest_section">
        <div>
          <h2>INVEST IN <span>DUBAI</span></h2>
          <p>We provide our investors with fully-managed, high-yield investment products catering to all levels of risk appetite. Our
          team has the expertise to provide all of our investors with the education, guidance and support required to maximize
          profits both from a short and long-term perspective through their entire investment journey.</p>
          <div className='invest_section_grid'>
            <div>
              <h3>High Fixed Returns</h3>
              <p>Build your wealth with a personalised,
              diversified portfolio with expert<br/>
              advice.</p>
            </div>
            <div>
              <h3>High Fixed Returns</h3>
              <p>Build your wealth with a personalised,
              diversified portfolio with expert<br/>
              advice.</p>
            </div>
            <div>
              <h3>High Fixed Returns</h3>
              <p>Build your wealth with a personalised,
              diversified portfolio with expert<br/>
              advice.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="blog_section">
        <div>
          <h2>OUR <span>BLOGS</span></h2>
          <p>We provide our investors with fully-managed, high-yield investment products catering to all levels of risk appetite. Our
          team has the expertise to provide all of our investors with the education, guidance and support required to maximize
          profits both from a short and long-term perspective through their entire investment journey.</p>
          <div className='blog_section_grid'>
            <div class="div1">
              <div>
                  <div>
                    <p>DEVELOPMENT</p>
                    <p>11 March 2023</p>
                  </div>
                  <h3>Best Website to research for your
                  next project</h3>
                  <h4>
                  Capitalize on low hanging fruit to identify a ballpark
                  value added activity to beta test. Override the digital
                  divide with additional clickthroughs
                  </h4>
                  <p>Read More...</p>
                </div>
            </div>
            <div class="div2"></div>
            <div class="div3">
              <div>
                <div>
                  <p>DEVELOPMENT</p>
                  <p>11 March 2023</p>
                </div>
                <h3>Best Website to research for your
                next project</h3>
                <h4>
                Capitalize on low hanging fruit to identify a ballpark
                value added activity to beta test. Override the digital
                divide with additional clickthroughs
                </h4>
                <p>Read More...</p>
              </div>
            </div>
            <div class="div4">
            <div>
                <div>
                  <p>DEVELOPMENT</p>
                  <p>11 March 2023</p>
                </div>
                <h3>Best Website to research for your
                next project</h3>
                <h4>
                Capitalize on low hanging fruit to identify a ballpark
                value added activity to beta test. Override the digital
                divide with additional clickthroughs
                </h4>
                <p>Read More...</p>
              </div>
            </div>
            <div class="div5"></div>
            <div class="div6"></div>
          </div>
        </div>
      </div>
      <div className='explore'>
        <button>Explore More</button>
      </div>
      <div className="connect_section">
        <div>
          <h1>
          We are Dedicated to the Expansion of your Business
          </h1>
          <div className='individual'>
            <div>
              <h3>FOR <span> INDIVIDUAL</span></h3>
            </div>
            <div>
              <h3>
              FOR <span> CORPORATE</span>
              </h3>
            </div>
          </div>
          <div className='connect_button'>
           <div>Let's Connect</div>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <h1>TESTIMONIALS</h1>
        <div>
          <div className='reviews'>
            <img src="/images/user_1.png" alt="Example Image" />
            <div>
              <img className='quotes' src="/images/qoutes.png" alt="Example Image" /><br/>
              <img className='stars' src="/images/stars.png" alt="Example Image" />
              <h3>
              Is be upon sang fond must shew.
              Really boy law county she unable
              her sister. Feet you off its like like
              six. Among sex are leave law built
              now.
              </h3>
              <h2>
              Danial H
              </h2>
              <h4>
              CEO GetNextDesign
              </h4>
            </div>
          </div>
          <div className="vertical_line"></div>
          <div className='reviews'>
            <img src="/images/user_2.png" alt="Example Image" />
            <div>
              <img className='quotes' src="/images/qoutes.png" alt="Example Image" /><br/>
              <img className='stars' src="/images/stars.png" alt="Example Image" />
              <h3>
              Is be upon sang fond must shew.
              Really boy law county she unable
              her sister. Feet you off its like like
              six. Among sex are leave law built
              now.
              </h3>
              <h2>
              John H
              </h2>
              <h4>
              Design
              </h4>
            </div>
          </div>
        </div>
        <img className='button_image' src="/images/button.png" alt="Example Image" />
      </div>
      <div className="touch_with_us">
        <div>
          <div>
          <h1>
             Let's Get In Touch With Us
            </h1>
            <span className='email'>
                <img src="/images/Number.png" alt="Example Image" />
                +88(019)04-000012
            </span><br/>
            <span className='email'>
                <img src="/images/Mail.png" alt="Example Image" />
                Info.01241588@gmail
            </span><br/>
            <span className='email location'>
                <img src="/images/location.png" alt="Example Image" />
                Unified Investments, 2nd floor, Al Amal St -<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Business Bay-Dubai, United Arab Emirates
            </span>
          </div>
          <div >
            <img src="/images/touch_with_us.png" alt=""/>
          </div>
        </div>
      </div>
      <div className='media'>
        <h1>Media &<br/>
        Publications</h1>
        <img src="/images/forbes.png" alt="" />  
        <img src="/images/fortune.png" alt="" />  
        <img src="/images/outlook.png" alt="" />  
      </div>
      <footer>
          <div className='footer_logo' >
            <img src="/images/unified_logo.png" alt="" />    
            <h4>
            Interior Design Center Inc. A USA Based Photo Editing Company in Tokyo,<br/> Japan. Corporation NO. 524172-2,<br/>  Check Here.
            </h4>
            <span className='email'>
                <img src="/images/Icon.png" alt="Example Image" />
                +88(019)04-000012
            </span><br/>
            <span className='email'>
                <img src="/images/Mail.png" alt="Example Image" />
                Info.01241588@gmail
            </span>
          </div>
          <ul className='footer_items_list'>
            <span>Menu</span>
            <li>Company</li>
            <li>Investors</li>
            <li>Products</li>
            <li>Journal</li>
            <li>Reach Us</li>
          </ul>
          <ul className='footer_items_list'>
            <span>Useful Link</span>
            <li>Home</li>
            <li>Company</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Reach Us</li>
          </ul>

          <ul className='footer_items_list icons_section'>
            <span>Follow US</span><br/>
            <li><img src="/images/instagram.png" alt=""/></li>
            <li><img src="/images/facebook.png" alt=""/></li>
            <li><img src="/images/linked_in.png" alt=""/></li>
          </ul>
          
      </footer>
    </>
  )
}

export default App
