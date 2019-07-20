import * as React from 'react';
import { Text, Image } from 'react-native';
import {
  DataTable, Banner, Button,
  Avatar, Card, Title, Paragraph, Snackbar
} from 'react-native-paper';
import { Container, Header, Content } from 'native-base';

export class TableScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      visibleSnackbar: false
    };
  }
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: 'white', borderBottomWidth: 0 }} />
        <Content>
          <Banner
            visible={this.state.visible}
            actions={[
              {
                label: 'Fix it',
                onPress: () => this.setState({ visible: false }),
              },
              {
                label: 'Learn more',
                onPress: () => this.setState({ visible: false }),
              },
            ]}
            image={({ size }) =>
              <Image
                source={{ uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4' }}
                style={{
                  width: size,
                  height: size,
                }}
              />
            }
          >
            There was a problem processing a transaction on your credit card.
          </Banner>
          <Button icon="add-a-photo" mode="contained" onPress={() => console.log('Pressed')} style={{ marginHorizontal: 10 }}>
            Press me
          </Button>
          <Card>
            <Card.Title title="Card Title" subtitle="Card Subtitle" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
            <Card.Content>
              <Title>Card title</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Dessert</DataTable.Title>
              <DataTable.Title numeric>Calories</DataTable.Title>
              <DataTable.Title numeric>Fat</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>Frozen yogurt</DataTable.Cell>
              <DataTable.Cell numeric>159</DataTable.Cell>
              <DataTable.Cell numeric>6.0</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
              <DataTable.Cell numeric>237</DataTable.Cell>
              <DataTable.Cell numeric>8.0</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Pagination
              page={1}
              numberOfPages={3}
              onPageChange={(page) => { console.log(page); }}
              label="1-2 of 6"
            />
          </DataTable>
          <Button
            onPress={() => this.setState(state => ({ visibleSnackbar: !state.visibleSnackbar }))}
          >
            {this.state.visibleSnackbar ? 'Hide' : 'Show'}
          </Button>
          <Snackbar
            visible={this.state.visibleSnackbar}
            onDismiss={() => this.setState({ visible: false })}
            action={{
              label: 'Close',
              onPress: () => {
                this.setState(state => ({ visibleSnackbar: !state.visibleSnackbar }));
              },
            }}
          >
            Hey there! I'm a Snackbar Notification.
          </Snackbar>
        </Content>
      </Container>
    );
  }
}
