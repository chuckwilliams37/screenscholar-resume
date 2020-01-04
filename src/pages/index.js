import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { OutboundLink } from 'gatsby-plugin-gtag'
// TODO: Implement information Popoovers
// TODO: Implement Drift Bot w/ Chat

import Layout from '../components/Layout';
// import GoogleAnalytics from '../components/GoogleAnalytics';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';

const IndexPage = () => (
  <Layout>

  <Helmet>
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-154121766-1"></script>
  <script type="application/javascript">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('config', 'UA-154121766-1');
      gtag('event', 'pageview', 'Home');
      `}</script>


      {/* <script type="application/javascript">{`
    "use strict";
    !function() {
      var t = window.driftt = window.drift = window.driftt || [];
      if (!t.init) {
        if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
        t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
        t.factory = function(e) {
          return function() {
            var n = Array.prototype.slice.call(arguments);
            return n.unshift(e), t.push(n), t;
          };
        }, t.methods.forEach(function(e) {
          t[e] = t.factory(e);
        }), t.load = function(t) {
          var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
          o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
          var i = document.getElementsByTagName("script")[0];
          i.parentNode.insertBefore(o, i);
        };
      }
    }();
    drift.SNIPPET_VERSION = '0.3.1';
    drift.load('azinkdvzwirg');
    `}</script> */}
  </Helmet>

    <Sidebar />

    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <h1 className="mb-0">
                {config.firstName}

                <span className="text-primary">{config.lastName}</span> 
              </h1>
            </div>
            <div className="d-print-none col-md-4 text-right col-sm-12 row pt-4">

              <div className="col-md-auto col-sm-12 pb-2">
              
                <OutboundLink href="https://calendly.com/screenscholar/1hr-hiring-screening-call" target="_blank" rel="noopener noreferrer"><button className="btn btn-primary btn-block"><i className="fas fa-calendar-alt"></i> Schedule a Meeting</button></OutboundLink>
              </div>
              <div className="col-md-auto col-sm-12 pb-4">
                <a href="https://github.com/chuckwilliams37/screenscholar-resume/raw/master/src/assets/images/Chuck_C_Williams_Jr_Resume_20200104.pdf" target="_blank" rel="noopener noreferrer"><button className="btn btn-primary btn-block"> <i className="fab fa-adobe"></i> PDF</button></a>
              </div>
            </div>
          </div>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          
          <p className="lead mb-3">
            Patented software developer. Terrestrial radio show & podcast co-host. Public speaker. Crypto-freedom activist.
          </p>
          
          <p className="lead mb-3">
            I believe that evolved, empathic problem solving involves clear assessment of reality, honest & transparent communications, and the capability to push through to results. <em> I make this work my art.</em> 
          </p>
          
          <p className="lead mb-3">
            I intend to bring value crafting elegant interfaces & experiences, identifying & pursuing growth opportunities, and building software that aligns with my dream of voluntary interactions for all individuals, and a society free from coercion. 
          </p>
          
          <small>
            

          {/* <p>
            Listed as inventor of 2 patents (Shutterfly's Photobook Application, and Level3's Dynamic Prompt System). History with visual design and User Experience (UX) oriented strategies and implementations. Current favorite technologies now include React/Redux/Firebase, AngularJS, NodeJS, MongoDB and the related ecosystem of build and dependency management tools (Webpack, Jest, Gulp, Grunt, Bower, etc.).
          </p>
          <p>
            Contributed to projects affecting the Office of the Director of National Intelligence (ODNI which oversees the FBI & CIA). Facilitated projects with National Geographic, Discovery, and The Learning Channels, Qwest and Level 3 Communications. Authored code for FedEx's Print Online Application allowing customers to upload and retrieve documents from FedEx Office Locations.
          </p> */}
          <p>
            Strengths include business communications skills, measurable productivity, strategic planning, project direction, team management, and elegant problem solving in the realms of application code, systems architecture, and data management. Also heavy advocate for purposeful living, empathy, meditation, and radical transparency.
            </p>
            <p>
          {/* Twenty-consecutive-year history with ECMAScript (JavaScript & ActionScript), HTML, & CSS. Also competent with React, AngularJS, NodeJS, PHP, ColdFusion, MySQL, MSSQL, OracleSQL, Grunt, Adobe Fireworks, Photoshop, Illustrator, InDesign, 3D Studio MAX, Ableton Live, and Audio Mixing Board technology. Familiar with design patterns, client relations & presentations, and digital innovation and transformation strategies.  */}
          </p>
          </small>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>



      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              {/* <h3 className="mb-0">Tech Lead / DevOps / Automation, Process, & UX Full Stack Developer</h3> */}
              <h3 className="mb-0">Product, Experience, and Technical Development Lead</h3>
              <div className="subheading mb-3"><a href="https://equa.global" target="_blank" rel="noopener noreferrer">Equa Start, LLC</a>: Denver, Colorado & Remote </div>
              <p>
              I teamed up with Equa to build a new and innovative way of managing agreements, and owning entities (like LLC's and Legal Trusts). I bring value to the team by analyzing, developing, and managing client service processes, developing automation, authoring code, designing UX flows, and building application interfaces and integrations in partnership with the client success team, and orchestrate that work in concert with multiple development teams. Reporting directly to the COO, I also monitor and guide the Equa application development process, and how the application flows directly integrate into client service processes. I then target areas of high-friction for automation improvements. I also conduct Microsoft Platform DevOps, User Administration, and Email/Domain Management, as secondary objectives to making ownership and value transfers in organizational entities easy with the Equa Agreements Platform.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2018 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Partner / Co-Host</h3>
              <div className="subheading mb-3"><a href="https://thecryptoshow.com" target="_blank" rel="noopener noreferrer">The Crypto Show</a>: Global & Remote</div>
              <p>
              Co-­hosting The Crypto Show, broadcasting on Bloomberg AM Radio in 5 cities, 
              &nbsp;<a href="http://www.bitcointalkradio.com/our-programs/thecryptoshow/"  target="_blank" rel="noopener noreferrer">Bitcoin Talk Radio</a>, 
              &nbsp;<a href="https://letstalkbitcoin.com/blog/category/the-crypto-show"  target="_blank" rel="noopener noreferrer">Let’s talk bitcoin</a>, 
              and <a href="https://www.youtube.com/channel/UCH720dsEFqx0gYyQrLZHCEQ"  target="_blank" rel="noopener noreferrer">youtube.com</a>.
              
              </p>
              <ul>
                <li>
                  Selecting & coordinating guests & topics.
                </li>
                <li>
                  Preparing, Researching, and Interviewing guests on live & prerecorded broadcasts.
                </li>
                <li>
                  Promoting & Advertising for sponsors including <a href="https://www.dash.org"  target="_blank" rel="noopener noreferrer">The Dash Masternode Network</a>, <a href="https://edge.app" target="_blank" rel="noopener noreferrer">Edge Wallet</a>, and <a href="https://anarchapulco.com/" target="_blank" rel="noopener noreferrer">Anarchapulco</a>.
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2018 – Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Technical Advocate / Advisor / Consultant / Public Speaker / Crypto-Activist</h3>
              <div className="subheading mb-3"> <a href="https://www.screenscholar.com" target="_blank" rel="noopener noreferrer">Self Employed</a>: Global</div>
              <p>
              Accepting speaking engagements, offering consultation & full-stack development in the areas of Dash:digital cash, the cryptocurrency industry, web & mobile app interaction, software architecture, and general software development. Offering perspectives, technical consulting, and solutions about whether, why, & how the blockchain should or should not be used for your next business project.
              </p>
              <ul>
                <li><a href="https://www.youtube.com/watch?v=b-XL_ddWCwQ"> "What is Evolution?"</a> ~ Dash Conference: London, October 2017 </li>
                <li><a href="https://www.youtube.com/watch?v=pwGNOGnBNbE"> "What is Dash Contributing to the Cannabis Economy?"</a> ~ CannMed: UCLA Campus, December 2018 </li>
                <li><a href="https://www.youtube.com/watch?v=LIFdemq544k"> "DASH-ing to FREEDOM!"</a> ~ Anarchapulco: Acapulco, February 2018 </li>
                <li><a href="https://www.dash.org/forum/threads/dash-trust-protector-candidate-list.43712/" target="_blank" rel="noopener noreferrer">Candidate for Dash Masternode Trust Protector</a> ~ December, 2017 (<a href="https://dashwatchbeta.org/elections?tab=results&election=TPE2019" target="_blank" rel="noopener noreferrer">Results</a>)</li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2007 - Present </span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">User Interface & User Experience Technical Lead</h3>
              <div className="subheading mb-3"><a href="https://dash.org" target="_blank" rel="noopener noreferrer">Dash Core Group, Inc</a>: Phoenix, Arizona & Remote</div>
              <p>
              Spokesperson, project management, code authorship, hiring & managing empathic designers & developers.
              </p>
              <ul>
                <li>
                Represented Dash Cryptocurrency at conferences, events, and expos ­connecting business leaders with the right technical or business teams within Dash
Core Group.
                </li>
                <li>
                Acted as liaison between technical dev team & public­ facing contractors to a globally remote decentralized, distributed team of architects, developers,
designers, and project managers
                </li>
                {/* <li>
                Conducted project scoping and deliverable design for public global community.
                </li>
                <li>
                Conducted user research and competitive analysis
                </li>
                <li>
                Developed user­flow & interaction design artifacts
                </li> */}
                <li>
                Implemented website updates & build fixes upon <a href="https://dash.org" target="_blank" rel="noopener noreferrer" >dash.org</a>.
                </li>
                <li>
                Authored NodeJs, ReactJS, AngularJS, SASS, SCSS/CSS3, BootStrap, and HTML/Jade code
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2017 - June 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">User Experience & Interface Lead / SCRUM master</h3>
              <div className="subheading mb-3"><a href="https://www.playerlync.com" target="_blank" rel="noopener noreferrer">PlayerLync, LLC</a>: Denver, Colorado</div>
              <p>
              Led the development team in all things UI/UX for the online Administrative tools (PLUI Admin) and end­user consumers (WebLync) that manage and deliver the PlayerLync ecosystem of content management.
              </p>
              <ul>
                <li>
                Architected and executed the Web ­based administrative tool for PlayerLync’s ecosystem within 9 months of beginning employment.
                </li>
                <li>
                Acted as technical decision maker for new components, interfaces, and UI technologies for client implementations of the PlayerLync ecosystem for clients such as Chipotle, the Denver Broncos, PF Chang’s, and at least a hundred other well­known brand names.
                </li>
                <li>
                Leading & Training the development team in SCRUM practices, including facilitating retrospectives, calculating and discussing team metrics,
coaching executive leadership, and product managers on producing value from the team.            
                </li>
                <li>
                Authoring PHP, AngularJS, SASS, SCSS/CSS3, jQuery, BootStrap, and HTML/Jade code.            
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2015 - June 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Senior Programmer / Analyst - Internet</h3>
              <div className="subheading mb-3">OppenheimerFunds, Inc: Englewood, Colorado (acquired by <a href="https://www.invesco.com/us/gateway" target="_blank" rel="noopener noreferrer">Invesco</a>)</div>
              <p>
              Reported directly to the Assistant Vice President of the Corporate Technology Group and lead the development team in all things UI/UX. Work included addressing hot production issues, forward ­thinking long­-term project planning & review, and delivering rich interfaces and visualizations for investors and investment brokers. 
              Authored Ruby on Rails, AngularJS, SASS, SCSS/CSS3, jQuery, Foundation, & HTML/HAML code.
              </p>
              {/* <ul>
                <li>
                Leading and training “...textbook level code…” for a UI/UX team of 15 people.
                </li>
                <li>
                Acting technical decision maker for new projects, interfaces, and UI technologies for www.oppenheimerfunds.com/advisors & www.ofiglobal.com.
                </li>
                <li>
                Training Development team in UI implementation technologies and responsive design practices.
                </li>
                <li>
                Acted as liaison between UI development team and New York based design team.
                </li>
                <li>
                Interviewed & trained new hires and contractors.
                </li>
                <li>
                Authored Ruby on Rails, AngularJS, SASS, SCSS/CSS3, jQuery, Foundation, & HTML/HAML code.
                </li>
              </ul> */}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2013 - December 2014</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Senior Software Architect</h3>
              <div className="subheading mb-3">Level 3 Communications: Broomfield, Colorado (acquired by <a href="https://www.centurylink.com" target="_blank" rel="noopener noreferrer">CenturyLink</a>)</div>
              <p>
              Acted as a Lead UI Architect for implementations on utility­ oriented, self­-service, customer facing web presences. Applied as inventor for my 2nd Patent. Delivered applications with AngularJS, Java, JSP, JavaScript, jQuery, Backbone, Flex, ActionScript, & Oracle SQL.
              </p>
              {/* <ul>
                <li>
                Applied as inventor for my 2nd Patent (Pending) for a dynamic prompt system authored in JavaScript MVC with Java Spring MVC Back­end and Oracle SQL DB, and authored automated tests in FuncUnit Testing Framework
                </li>
                <li>
                Lead developer on Service Inventory and Graphical Mapping Application authored in Angular JS, consuming subscription ESRI REST services, and aggregate internal Java Servlets in a Java Spring MVC/Tomcat environment.
                </li>
                <li>
                Lead Development team in Agile, Scrum, and UI implementation practices.
                </li>
                <li>
                Maintained watch on production defect queues, and reacted within SLA's to solve critical production issues.
                </li>
                <li>
                Regularly consulted with marketing and sales teams on customer­facing product designs.
                </li>
                <li>
                Delivered applications with AngularJS, Java, JSP, JavaScript, jQuery, Backbone, Flex, ActionScript, & Oracle SQL.
                </li>
              </ul> */}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2011 - September 2013</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Practice Lead / Software Architect / Senior Sales Engineering Consultant</h3>
              <div className="subheading mb-3"><a href="https://effectiveinc.com/">Effective UI, Inc</a>: Denver, Colorado (acquired by <a href="https://www.ogilvy.com/" target="_blank" rel="noopener noreferrer">Ogilvy</a>)</div>
              <p>
              Authored code & led development projects from design through to delivery for many Fortune 500 Organizations. Lead development team and became a named inventor of <a href="https://patents.justia.com/patent/20110283173" target="_blank" rel="noopener noreferrer">patent #12/969,808</a>. Also facilitated “discovery workshops” and focused on developing comprehensive strategies. Authored countless lines of Actionscript, Coldfusion, Flex, FlexUnit, RobotLegs, JavaScript, Java, JSP, Oracle SQL, HTML & CSS.
              </p>
              {/* <ul>
                <li>
                Lead development team and became a named inventor of Patent #12/969,808 for American Greetings PhotoWorks Custom Application implementation (now offline – sold to Shutterfly.com) authored in Flex, ActionScript, and utilized FlexUnit Testing framework and RobotLegs MVC architecture.
                </li>
                <li>
                Authored Actionscript code for the TLC Virtual Bridal Boutique Application for Discovery Communications in Flex, and utilized FlexUnit testing framework.
                </li>
                <li>
                Consulted, planned, lead development teams, authored Java, JSP, Flex, FlexUnit, ActionScript, Oracle SQL, consumed REST APIs (Produced by FedEx IT Staff) and performed load testing in JMeter for FedEx Print Online Application.
                </li>
                <li>
                Consulted and lead sales engineering effort for Level 3 Communications B2B custom implementation
                </li>
                <li>
                Researched, co­authored, and presented the System User and Domain Audit (SUDA), a major strategic document for Navy Federal Bank.
                </li>
                <li>
                Conducted strategic consulting, infrastructure analysis, software consolidation planning, and authored code for the 2010 Qwest Business Portal design and development effort.
                </li>
                <li>
                Conducted strategic consulting for the Zinio iPad Digital Magazine implementation design and development effort.
                </li>
                <li>
                Conducted sales engineering, project estimations, feasibility analysis, and technical consulting.
                </li>
                <li>
                Evangelized Agile development practices, lead development teams, sprints, planning sessions, and daily stand­ups.
                </li>
                <li>
                  Interviewed & trained new hires
                </li>
                <li>
                Authored countless lines of Actionscript, Coldfusion, JavaScript, Java, HTML & CSS.
                </li>
              </ul> */}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2008 – April 2011</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Solutions Leader</h3>
              <div className="subheading mb-3"><a href="https://www.nyk.com/english/">NYK Logistics</a>, Americas: Memphis, Tennessee</div>
              {/* <p>
              Led, planned, and developed mission­ critical applications resulting in over one million dollars of quantified annual productivity & revenue gains for this 48,000 employee international company. Trained corporate development team Flex, ActionScript, & ColdFusion Object Oriented Programming (OOP) techniques, patterns, and best­ practices. Implemented bug­tracking & project management system that integrated with developer IDE (Maven + TRAC + Eclipse ). Authored ActionScript, MS SQL, ColdFusion, DHTML, Javascript, and CSS code.
              </p> */}
              {/* <ul>
                <li>
                Lead, planned, and developed mission­critical applications resulting in over one million dollars of quantified annual productivity & revenue gains for this 48,000 employee international company.
                </li>
                <li>
                  Trained corporate development team Flex, ActionScript, & ColdFusion Object Oriented Programming (OOP) techniques, patterns, and best­practices.
                </li>
                <li>
                  Implemented & administered company­wide application version control system (SVN) enabling Sarbanes­Oxley (SOX), and the Japanese equivalent (J­SOX) process observance, and sustained the role of the Subversion Repository Manager.
                </li>
                <li>
                  Implemented bug­tracking & project management system that integrated with developer IDE (Maven + TRAC + Eclipse ).
                </li>
                <li>
                  Authored ActionScript, MS SQL, ColdFusion, DHTML, Javascript, and CSS code.
                </li>
              </ul> */}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2006 ­- May 2008</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Senior Business Analyst</h3>
              <div className="subheading mb-3"><a href="https://www.mind-over-data.com/">Mind Over Data, LLC</a>: Memphis, Tennessee</div>
              {/* <p>
              Consulted with clients to produce highly scalable internet business solutions. Managed client communications, presentations, sales meetings, and training. Designed graphic interfaces and layouts. Performed project management & implemented projects as defined in estimates. Authored MSSQL, Coldfusion, DHTML4, & CSS2 code.
              </p> */}
              {/* <ul>
                <li>
                Authored MSSQL, Coldfusion, DHTML4, & CSS2 code.
                </li>
                <li>
                Managed client communications, presentations, sales meetings, and training
                </li>
                <li>
                Performed project management ­ implemented projects as defined in estimates.
                </li>
                <li>
                Designed graphic interfaces and layouts.
                </li>
                <li>
                Consulted with clients to produce highly scalable internet business solutions plans.
                </li>
              </ul> */}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2004 ­- June 2006</span>
            </div>
          </div>

          {/* <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Creative Services Department &amp; Multimedia Development Manager</h3>
              <div className="subheading mb-3">The Data Company, LLC: Memphis, Tennessee</div>
      
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2002 -­ April 2004</span>
            </div>
          </div> */}

          {/* <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Production Designer - Web Specialist</h3>
              <div className="subheading mb-3"><a href="https://www.prisma.com/" target="_blank" rel="noopener noreferrer">Prisma International</a>: Minneapolis, Minnesota</div>
              
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">November 2000 -­ April 2002</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Multimedia Developer</h3>
              <div className="subheading mb-3">Self-Employed: Minneapolis, Minnesota</div>
              
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 1998 ­- November 2000</span>
            </div>
          </div> */}

        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Academy College</h3>
              <div className="subheading mb-3">Bloomington, Minnesota: Associate of Applied Science</div>
              {/* <div>Multimedia Design & 3D Animation</div> */}
            </div>
            {/* <div className="resume-date text-md-right">
              <span className="text-primary">August 1997 - May 1999</span>
            </div> */}
          </div>

          {/* <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Anoka Senior High School</h3>
              <div className="subheading mb-3">Anoka, Minnesota</div>
              <div>Competitive Swimmer, Hospital Volunteer, McDonald's Manager</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Graduating Class of 1994</span>
            </div>
          </div> */}

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-3">Additional Certifications</h3>
              <ul>
                <li>
                  Continuous Learning Courses on <a href="https://www.udemy.com/user/chuck-williams-7/" target="_blank" rel="noopener noreferrer">Udemy</a>, <a href="https://www.codecademy.com" target="_blank" rel="noopener noreferrer">CodeCademy</a>, <a href="https://egghead.io/" target="_blank" rel="noopener noreferrer">Egghead.io</a>.
                </li>
                <li>
                  Rally Agile Practices Training: April 2011
                </li>
                <li>
                  Macromedia Certified ColdFusion Developer Certification 2004
                </li>
                <li>
                  Macromedia Flash Advanced Developer Certification 2002
                </li>
              </ul>
            </div>
            {/* <div className="resume-date text-md-right">
              <span className="text-primary">October 1976 - Present</span>
            </div> */}
          </div>


        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Platforms &amp; Suites
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-bitcoin"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-adobe"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-windows"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-apple"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-ubuntu"></i>
            </li>
            <li className="list-inline-item">
              <i className="fas fa-database"></i>
            </li>
          </ul>
          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-php"></i>
            </li>
            {/* <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li> */}
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-less"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-3">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Process Analysis &amp; Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Workflow &amp; Process Automation
            </li>
          </ul>

          <div className="subheading mb-3">Soft</div>
          <ul className="fa-ul mb-3">
            <li>
              <i className="fa-li fa fa-check"></i>
              Team Management, Goal Setting, Review, &amp; Critique
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Facilitation of Group Decision-making
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Product Ownership, &amp; Management
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Task Definition, Tracking, Follow-through, and improvement
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Public Speaking &amp; Communications
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Sales Engineering, Requirements Gathering
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Problem Diagnosis &amp; Creative Solution Option Generation
            </li>
          </ul>
        </div>
      </section>

      {/* <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the warmer months here in Colorado, I enjoy mountain biking,
            free climbing, and kayaking.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Google Analytics Certified Developer
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Mobile Web Specialist - Google Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2009
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Adobe Creative Jam 2008
              (UI Design Category)
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2008
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - James Buchanan High School - Hackathon 2006
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>3<sup>rd</sup>
              Place - James Buchanan High School - Hackathon 2005
            </li>
          </ul>
        </div>
      </section> */}
    </div>

    <div className="print-footer">
      <h5>{config.firstName}<span className="text-primary">{config.lastName}</span> · {config.phone} · <a href="https://calendly.com/screenscholar/meeting" target="_blank" rel="noopener noreferrer">Schedule a Meeting</a></h5>
    </div>
  </Layout>
);

export default IndexPage;
