import React, {
    FunctionComponent,
    ReactChild,
    ReactChildren,
    ReactElement,
} from 'react'
import { Text as RebassText } from 'rebass'
enum TextType {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    Body = 'body',
}
type TextProps = {
    children:
        | ReactChildren
        | ReactChild
        | ReactElement
        | (ReactElement | string)[]
    as?: string
    sx?: object
}

export const Text: FunctionComponent<TextProps> = ({ children, sx, as }) => {
    switch (as) {
        case TextType.H1:
            const head1 = {
                fontFamily: 'heading',
                fontSize: 'h1',
                fontWeight: 'heading',
                color: 'heading',
            }
            return <RebassText sx={{ ...head1, ...sx }}>{children}</RebassText>
        case TextType.H2:
            const head2 = {
                fontSize: 'h2',
                fontFamily: 'heading',
                fontWeight: 'heading',
                color: 'heading',
            }
            return <RebassText sx={{ ...head2, ...sx }}>{children}</RebassText>
        case TextType.H3:
            const head3 = {
                fontSize: 'h3',
                fontFamily: 'heading',
                fontWeight: 'body',
                color: 'heading',
            }
            return <RebassText sx={{ ...head3, ...sx }}>{children}</RebassText>
        case TextType.H4:
            const head4 = {
                fontSize: 'h4',
                fontFamily: 'heading',
                fontWeight: 'heading',
                color: 'heading',
            }
            return <RebassText sx={{ ...head4, ...sx }}>{children}</RebassText>
        case TextType.Body:
        default:
            const body = {
                fontSize: 'body',
                fontFamily: 'body',
                fontWeight: 'body',
                color: 'body',
            }
            return (
                <RebassText mt={2} sx={{ ...body, ...sx }}>
                    {children}
                </RebassText>
            )
    }
}
export default Text
