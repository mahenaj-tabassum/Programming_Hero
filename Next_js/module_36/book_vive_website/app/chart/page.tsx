"use client";
import { BooksContext } from "@/Context/BooksContext";
import { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  BarShapeProps,
  LabelList,
  Label,
  LabelProps,
  Tooltip,
} from "recharts";
// import { RechartsDevtools } from '@recharts/devtools';

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "black",
];

// #endregion
const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const color = colors[(index ?? 0) % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke={color}
      fill={color}
      style={{
        transition: "stroke-width 0.3s ease-out",
      }}
    />
  );
};

const CustomColorLabel = (props: LabelProps) => {
  const fill = colors[(props.index ?? 0) % colors.length];
  return <Label {...props} fill={fill} />;
};

export default function CustomShapeBarChart() {
  const booksContext = useContext(BooksContext);
  if (!booksContext) {
    throw new Error("Books Context not found");
  }
  const { readBooks } = booksContext;

  const data = readBooks.map((book) => ({
    name: book.bookName,
    pages: book.totalPages,
  }));
  return (
    <div className="flex items-center justify-center h-screen">
      <BarChart
        style={{
          width: "100%",
          maxWidth: "900px",
          maxHeight: "100vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid />
        <Tooltip
          labelFormatter={(label) => `Name: ${label}`}
          formatter={(value) => [value, "Page"]}
          cursor={{ fillOpacity: 0.5 }}
        />
        <XAxis dataKey="name" angle={-25} textAnchor="end" interval={0} />
        <YAxis width="auto" />
        <Bar dataKey="pages" shape={TriangleBar} activeBar>
          <LabelList content={CustomColorLabel} position="top" />
        </Bar>
        {/* <RechartsDevtools /> */}
      </BarChart>
    </div>
  );
}
