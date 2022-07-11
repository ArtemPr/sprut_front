import React from 'react'
import styled from 'styled-components';
import { Anchor } from 'antd';

const CustomLink = styled.a`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;

  &:hover {
    color: purple;
  }
`;

const ExelBtn = () => {
    return (
        <div>
            <CustomLink><span>ExelBtn</span><br />
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-table-export" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M11.5 20h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v7.5m-16 -3.5h16m-10 -6v16m4 -1h7m-3 -3l3 3l-3 3"></path>
                </svg>
            </CustomLink>

            <br />
            <br />
            <br />

            <a href="#">
                <span>ExelBtn</span><br />
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-table-export" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M11.5 20h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v7.5m-16 -3.5h16m-10 -6v16m4 -1h7m-3 -3l3 3l-3 3"></path>
                </svg>
            </a>
        </div>
    )
}

export default ExelBtn