import React from 'react'
import {Card, Tag} from "antd";
const {Meta} = Card;
const TagsCard = ({tags, title}) => (
    <Card>
        <Meta title={title}/>
        {Object.values(tags).map((item) => (<Tag>{item}</Tag>))}
    </Card>
)

export default TagsCard