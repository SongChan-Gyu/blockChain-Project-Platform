import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Sidebar, Menu, List, Select, Icon, Header, Image } from 'semantic-ui-react';
import { Route, Redirect, Switch, NavLink, Link} from 'react-router-dom';

import styled from 'styled-components';


const Wrapper = styled.div`
    height:100vh;
`;

const ContentWrapper = styled.div`
    padding: 15px;
`

const SideDrawer = styled(Sidebar)`
    & {
        width:250px !important;
    }
`

const SideFooter = styled.div`
    position: absolute;
    width:100%;
    bottom:0;
    padding: 15px 12px;
`
const Pusher = styled(Sidebar.Pusher)`
    margin-left:250px !important;
    height:100% !important;
    overflow-y: scroll !important;
    padding-top:65px !important;
`

const MenuItem = styled(Menu.Item)`
    text-align:left !important;
`

const EndpointHeader = styled(Header)`
    margin-left: -5px !important;
    color:white !important;
`

class MainPage extends Component {

    render() {
        return (
            <Wrapper>
                <Sidebar.Pushable as='div'>
                <SideDrawer
                    as={Menu}
                    animation='overlay'
                    onHide={this.handleSidebarHide}
                    inverted
                    color='blue'
                    vertical
                    visible
                >
                    <MenuItem 
                        as={Link} 
                        to='/admin/dashboard' 
                        style={{height:'60px'}}
                    >
                    
                    </MenuItem>
                    <MenuItem>
                        <EndpointHeader as='h3'>
                           zx2253
                        </EndpointHeader>
                    </MenuItem>
                    <MenuItem as={NavLink} to='/admin/dashboard' >
                        <Icon name='alarm' />
                        알람
                    </MenuItem>
                    <MenuItem as={NavLink} to='/admin/containers' >
                        <Icon name='th list' />
                       로그아웃
                    </MenuItem>
                    <MenuItem as={NavLink} to='/admin/swarms' >
                        <Icon name='server' />
                        프로젝트 개설
                    </MenuItem>
                    <MenuItem as={NavLink} to='/admin/services' >
                        <Icon name='microchip' />
                        프로젝트 관리
                    </MenuItem>
                   
                </SideDrawer>
                  <Sidebar.Pusher>
           <div>
              <Header as='h3'>Application Content</Header>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
            </Wrapper>
        )
    }
}

export default MainPage;
