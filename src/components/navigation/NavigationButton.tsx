import React from 'react'
import { Button } from 'rebass'
import { Link } from 'react-router-dom'

export function NavigationButton(props: { url: string; label: string }) {
    return (
        <Button variant="secondaryOutlined" alignSelf="center" mx={2}>
            <Link
                className="navigation--button"
                style={{
                    textDecoration: 'none',
                    color: 'white',
                }}
                key={props.url}
                to={props.url}
            >
                {props.label}
            </Link>
        </Button>
    )
}
