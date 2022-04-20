import { Component } from '@angular/core';
@Component({
    selector: 'my-menu',    
    template: `  
       <div style="position:absolute; right:10px; margin:5px !important">                
            <div>               
                <div id="main_nav">
                    <ul class="navbar-nav ms-auto">                        
                        <li class="nav-item dropdown">
                            <a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"><span  style="font-size:20px" class="glyphicon glyphicon-align-justify"></span></a>
                            <ul class="dropdown-menu dropdown-menu-right">
                                <li><a class="dropdown-item" href="#"> Dropdown item 1</a></li>
                                <li><a class="dropdown-item" href="#"> Dropdown item 2 </a></li>
                                <li>                                    
                                    <a class="dropdown-item" href="#"> Dropdown item 3 <span style="font-size: 10px; right: 2px;"  class="glyphicon glyphicon-play"></span></a>
                                    <ul class="submenu submenu-left dropdown-menu">
                                        <li><a class="dropdown-item" href="">Submenu item 1</a></li>
                                        <li><a class="dropdown-item" href="">Submenu item 2</a></li>
                                        <li><a class="dropdown-item" href="">Submenu item 3</a></li>
                                        <li><a class="dropdown-item" href="">Submenu item 4</a></li>
                                        <li>
                                            <a class="dropdown-item" href="#"> Dropdown item 5 <span style="font-size: 10px; right: 2px;" class="glyphicon glyphicon-play"></span> </a>
                                            <ul class="submenu submenu-left dropdown-menu">
                                                <li><a class="dropdown-item" href="">Submenu item 1</a></li>
                                                <li><a class="dropdown-item" href="">Submenu item 2</a></li>
                                                <li><a class="dropdown-item" href="">Submenu item 3</a></li>
                                                <li><a class="dropdown-item" href="">Submenu item 4</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a class="dropdown-item" href="#"> Dropdown item 4 </a></li>
                            </ul>
                        </li>
                    </ul>
                </div> 
            </div>         
    </div>
    `,
    styles: [`
        .dropdown-toggle::after {
            content: none;
        }        
        /* ============ desktop view ============ */
        @media all and (min-width: 9px) {
            .dropdown-menu li {
                position: relative;
            }

            .dropdown-menu .submenu {
                display: none;
                position: absolute;
                left: 100%;
                top: -7px;
            }

            .dropdown-menu .submenu-left {
                right: 100%;
                left: auto;
            }          

            .dropdown-menu > li:hover {
                background-color: #f1f1f1
            }

                .dropdown-menu > li:hover > .submenu {
                    display: block;
                }
        }
    `]
})
export class Menu1Component {
   
}
