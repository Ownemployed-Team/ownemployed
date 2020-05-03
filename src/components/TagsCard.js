import React from 'react'
import {Card, Tag} from "antd";
import { colors } from '../utils/colors'
const {Meta} = Card;

const TagsCard = ({tags, title, linkRenderer}) => {

    if (!Array.isArray(tags)) {
        return <div/>
    }
    else {
        return    (
            <Card>
                <Meta title={title}/>
                <br/>
                {Object.values(tags).map((item, i) => {
                  const tag = <><Tag key={i} color={colors.primaryLight}>{item}</Tag></>;
                  if(linkRenderer !== undefined) {
                    return <a href={linkRenderer(item)}>{tag}</a>
                  }
                  else {
                    return tag
                  }

                })}
            </Card>
        )
    }

}

export default TagsCard