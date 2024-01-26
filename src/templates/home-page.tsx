import { Link } from "waku";

import { Counter } from "../components/counter.js";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export const HomePage = async () => {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <Counter />
          <Link to="/about">Learn more</Link>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

const getData = async () => {
  const data = {
    title: "Waku",
    body: "Hello world!",
  };

  return data;
};
