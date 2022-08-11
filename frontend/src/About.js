import React from 'react';
import HeaderBreak from './components/headerbreak';

function About() {
    return (
        <div>
            <HeaderBreak/>
            <h1>About</h1>
            <div className="about">
            <div class="container">
                <div class="row align-items-center my-5">
                <div class="col-lg-7">
                </div>
                <div class="col-lg-5">
                    <p>
                    With this web app, you are able to get a premliminary diagnosis of your heart health risk 
                    based on some information you provide. This is not meant to subsitute for a full checkup, or 
                    visit with a medical professional, but rather to help you understand your risk. 
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
            );
          }

export default About;