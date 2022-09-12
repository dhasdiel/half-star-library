import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Statistic } from "semantic-ui-react";

const Dashboard = () => {
  const numOfBooks = useSelector((state) => state.books.numOfBooks);
  const numOfUsers = useSelector((state) => state.users.numOfUsers);
  const books = useSelector((state) => state.books.books);

  const [inStock, setInStock] = useState(0);

  useEffect(() => {
    let stock = 0;
    for (let i = 0; i < books?.length; i++) {
      stock += books[i].quanity;
    }
    setInStock(stock);
  }, [books]);

  return (
    <>
      <Card.Group>
        <Card className="my-card" fluid>
          <Statistic size="large">
            <Statistic.Value>{numOfBooks}</Statistic.Value>
            <Statistic.Label>Books</Statistic.Label>
          </Statistic>
        </Card>
        <Card className="my-card" fluid>
          <Statistic size="large">
            <Statistic.Value>{numOfUsers}</Statistic.Value>
            <Statistic.Label>Users</Statistic.Label>
          </Statistic>
        </Card>
        <Card fluid>
          <Statistic className="my-card" size="large">
            <Statistic.Value>{inStock}</Statistic.Value>
            <Statistic.Label>Copies in stock</Statistic.Label>
          </Statistic>
        </Card>
      </Card.Group>
    </>
  );
};

export default Dashboard;
