import React, {
    FunctionComponent,
    ReactChild,
    ReactChildren,
    ReactElement,
    ReactNode,
} from 'react'
import { Text as RebassText, SxStyleProp } from 'rebass'

enum TextType {
    Body = 'body',
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    Small = 'small',
}
type TextProps = {
    children: ReactNode
    className?: string
    as?: 'body' | 'h1' | 'h2' | 'h3' | 'h4' | 'small'
    sx?: SxStyleProp
}

export function Text({ children, className, sx, as }: TextProps) {
    switch (as) {
        case TextType.H1:
            const head1 = {
                color: 'heading',
                fontFamily: 'heading',
                fontSize: 'h1',
                fontWeight: 'semibold',
            }
            return (
                <RebassText className={className} sx={{ ...head1, ...sx }}>
                    {children}
                </RebassText>
            )
        case TextType.H2:
            const head2 = {
                fontSize: 'h2',
                fontFamily: 'body',
                fontWeight: 'regular',
                color: 'heading',
            }
            return (
                <RebassText className={className} sx={{ ...head2, ...sx }}>
                    {children}
                </RebassText>
            )
        case TextType.H3:
            const head3 = {
                fontSize: 'h3',
                fontFamily: 'heading',
                fontWeight: 'semibold',
                color: 'heading',
            }
            return (
                <RebassText className={className} sx={{ ...head3, ...sx }}>
                    {children}
                </RebassText>
            )
        case TextType.H4:
            const head4 = {
                fontSize: 'h4',
                fontFamily: 'heading',
                fontWeight: 'medium',
                color: 'heading',
            }
            return (
                <RebassText className={className} sx={{ ...head4, ...sx }}>
                    {children}
                </RebassText>
            )
        case TextType.Small:
            const small = {
                fontSize: 'small',
                fontFamily: 'body',
                fontWeight: 'regular',
                color: 'heading',
            }
            return (
                <RebassText className={className} sx={{ ...small, ...sx }}>
                    {children}
                </RebassText>
            )
        case TextType.Body:
        default:
            const body = {
                fontSize: 'body',
                fontFamily: 'body',
                fontWeight: 'regular',
                color: 'body',
            }
            return (
                <RebassText
                    className={className}
                    mt={2}
                    sx={{ ...body, ...sx }}
                >
                    {children}
                </RebassText>
            )
    }
}
export default Text
