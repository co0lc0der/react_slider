import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
    color: ${props => props.active ? 'pink' : '#fff'};
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    padding-right: 33px;
    border-right: 1px dotted #fff;

    &:hover {
        color: #8d8d8d;
        text-decoration: none;
    }
    &:last-child {
        border-right: none;
    }
`

class Link extends React.Component {
    render () {
        return (
            <StyledLink href={this.props.link}> {this.props.text} </StyledLink>
        )
    }
}//Link

export default Link