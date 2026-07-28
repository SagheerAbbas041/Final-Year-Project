import React from 'react';
//import '../../vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/css/fontawesome.css';
import '../../assets/css/templatemo-edu-meeting.css';
import '../../assets/css/lightbox.css';

import ply from '../../assets/images/play-icon.png';


export const Statisticshome = () => {
  return (
<div>
  <main>
    <section class="our-facts">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2>Facts About Our University</h2>
            </div>
            <div class="col-lg-6">
              <div class="row">
                <div class="col-12">
                  <div class="count-area-content percentage">
                    <div class="count-digit">90</div>
                    <div class="count-title">Succesed Students</div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="count-area-content">
                    <div class="count-digit">30</div>
                    <div class="count-title">Current Teachers</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="row">
                <div class="col-12">
                  <div class="count-area-content new-students">
                    <div class="count-digit">1250</div>
                    <div class="count-title">No Off Students</div>
                  </div>
                </div> 
                <div class="col-12">
                  <div class="count-area-content">
                    <div class="count-digit">09</div>
                    <div class="count-title">Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div class="col-lg-6 align-self-center">
          <div class="video">
            <a href="https://www.youtube.com/watch?v=HndV87XpkWg" target="_blank"><img src={ply} alt=""/></a>
          </div>
        </div>
      </div>
    </div>
  </section>
      </main>
</div> 

)
}


