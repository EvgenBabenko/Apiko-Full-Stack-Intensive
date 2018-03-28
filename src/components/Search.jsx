import React from 'react'

import styled from "styled-components";

const Input = styled.input`
    display: block;

    padding: 15px;
    margin: 0 auto;
`

export default function Search({ onChangeSearch, searchValue }) {
    return (
        <Input
            onChange={onChangeSearch}
            value={searchValue}
            type="text"
            placeholder='Search...'
        />
    )
}