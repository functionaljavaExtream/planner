import React from 'react';
import { Link } from 'react-router-dom';
import '../css/sidbar.css';
import '../css/bulma/css/bulma.min.css';
const SideBar = () => (
  <body>
  
  <nav class="main-menu">
  <ul>
      <li>
          <a href="#">
              <i class="fa fa-home fa-2x"></i>
              <span class="nav-text">
                  Dashboard
              </span>
          </a>
        
      </li>
      <li class="has-subnav">
          <a href="#">
              <i class="fa fa-laptop fa-2x"></i>
              <span class="nav-text">
                  Stars Components
              </span>
          </a>
          
      </li>
      <li class="has-subnav">
      <Link className="link" to="/">
          <a href="">
             <i class="fa fa-list fa-2x"></i>
              <span class="nav-text">
                  TodoList
              </span>
          </a>
        </Link>
      </li>
      <li class="has-subnav">
            <Link className="link" to="/dairy">
            <a href="">
             <i class="fa fa-folder-open fa-2x"></i>
              <span class="nav-text">
                  dairy
              </span>
            </a>
            </Link>

         
      </li>


  </ul>

  <ul class="logout">
      <li>
         <a href="#">
               <i class="fa fa-power-off fa-2x"></i>
              <span class="nav-text">
                  Logout
              </span>
          </a>
      </li>  
  </ul>
</nav>
</body>

);

export default SideBar;