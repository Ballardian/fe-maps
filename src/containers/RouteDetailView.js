import React, { Component } from "react";
import { Row, Col, Card, Divider, Typography } from "antd";
import axios from "axios";

const { Paragraph, Text } = Typography;

class RouteDetailView extends Component {
  state = {
    route: {}
  };

  async componentDidMount() {
    const routeID = this.props.match.params.id;
    const response = await axios.get(
      `http://127.0.0.1:8000/api/routes/${routeID}`
    );
    if ((response.status = 200)) {
      this.setState({
        route: response.data
      });
      console.log(response.data);
    }
  }

  render() {
    console.log(this.state.route.places);
    const { route } = this.state;
    return (
      <>
        <Card title={route.user}>
          <p>{route.name}</p>
          <p>{route.description}</p>
          <Card type="inner" title="Places">
            {route.places &&
              route.places.map((place, index) => {
                return (
                  <Row key={index} type="flex" align="middle" gutter={16}>
                    {index === 0 ? null : <Divider />}
                    <Col span={16}>
                      <Paragraph>{place.name}</Paragraph>
                      <Paragraph>
                        <Text type="secondary">{place.description}</Text>
                      </Paragraph>
                    </Col>
                  </Row>
                );
              })}
          </Card>
        </Card>
      </>
    );
  }
}

export default RouteDetailView;
