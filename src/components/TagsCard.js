import React from 'react'
import {Card} from "antd";
const {Meta} = Card;
const TagsCard = ({tags, title}) => (
    <Card>
        <Meta title={title}/>
        {Object.values(tags).map((item) => (<div>{item}</div>))}
    </Card>
)

export default TagsCard