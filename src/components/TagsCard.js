import React from 'react'
import {Card, Tag} from "antd";
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
                {Object.values(tags).map((item) => (<Tag>{item}</Tag>))}
            </Card>
        )
    }

}

export default TagsCard