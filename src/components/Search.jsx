import React from 'react'

import styled from "styled-components";

const Input = styled.input`
    padding: 10px;
    border-color: blue;
`

export default function Search({ onChangeSearch, searchValue }) {
    return (
        <Input
            onChange={onChangeSearch}
            value={searchValue}
            type="text"
            placeholder='Search post...'
        />
    )
}