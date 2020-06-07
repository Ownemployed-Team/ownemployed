import React from 'react'
import { css } from 'emotion'
import { Flex } from 'rebass'
import Text from 'components/Text'
import { Label, Checkbox as RebassCheckbox } from '@rebass/forms'

function Checkbox({ field, checked, onChange, text }) {
    console.log(checked)

    return (
        <Flex alignItems="center">
            <Label>
                <RebassCheckbox
                    my={2}
                    name={field.name}
                    checked={checked}
                    onChange={() => {
                        onChange(!checked)
                    }}
                />
                <Text
                    className={css``}
                    as="body"
                    sx={{
                        my: 2,
                        lineHeight: '26px',
                    }}
                >
                    {text}
                </Text>
            </Label>
        </Flex>
    )
}

export default Checkbox
