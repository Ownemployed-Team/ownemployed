import React from 'react'
import {Card, Tag} from "antd";
import { colors } from '../utils/colors'
const {Meta} = Card;

const TagsCard = ({tags, title}) => {
    console.log(typeof tags)

    if (!Array.isArray(tags)) {
        return <div/>
    }
    else {
        return    (
            <Card>
                <Meta title={title}/>
                <br/>
                {Object.values(tags).map((item, i) => (
                    <Tag key={i} color={colors.primaryLight}>{item}</Tag>
                ))}
            </Card>
        )
    }

}

export default TagsCard