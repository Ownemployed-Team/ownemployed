import React from 'react'
import { css } from 'emotion'
import { Flex, Image } from 'rebass'
import Text from 'components/Text'

function Checkbox({ field, type, checked, onChange, text }) {
    const inputDefaultStyle = css`
        height: 14px;
        width: 14px;
        position: relative;
        display: inline-block;
        margin: 0;
        border: 1px solid #b8becc;
        border-radius: 4px;
        background: #fff;
        transition: background 300ms ease;
    `

    return (
        <Flex alignItems="center">
            {!checked && (
                <input
                    className={inputDefaultStyle}
                    {...field}
                    type={type}
                    checked={checked}
                />
            )}
            {checked && (
                <Image
                    onClick={() => {
                        onChange(false)
                    }}
                    src={'/imgs/icons/check.svg'}
                ></Image>
            )}
            <Text
                className={css``}
                as="body"
                sx={{
                    m: 2,
                }}
            >
                {text}
            </Text>
        </Flex>
    )
}

export default Checkbox
