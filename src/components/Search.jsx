import React from 'react'

import styled from "styled-components";

const Input = styled.input`
    padding: 10px;
    border-color: blue;
`

export default ({ onChangeSearch, searchValue }) => 
    <Input
        onChange={onChangeSearch}
        value={searchValue}
        type="text"
        placeholder='Search post...'
    />