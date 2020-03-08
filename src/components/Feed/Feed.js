import React from "react";
import { List, Avatar, Icon, Typography } from "antd";

const { Paragraph, Text } = Typography;

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Feed = props => {
  console.log("data", props.data);
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3
      }}
      dataSource={props.data}
      footer={
        <div>
          <b>ant design</b> footer part
        </div>
      }
      renderItem={item => (
        <List.Item
          key={item.id}
          actions={[
            <IconText type="star-o" text="156" key="list-vertical-star-o" />,
            <IconText type="like-o" text="156" key="list-vertical-like-o" />,
            <IconText type="message" text="2" key="list-vertical-message" />
          ]}
          extra={
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={
              <a href={`/route/${item.id}`}>{item.places.slice(-1)[0].name}</a>
            }
            description={`${item.places.slice(-1)[0].location.province}, ${
              item.places.slice(-1)[0].location.country
            }`}
          />
          <Text>{item.places.slice(-1)[0].description}</Text>
        </List.Item>
      )}
    />
  );
};

export default Feed;
