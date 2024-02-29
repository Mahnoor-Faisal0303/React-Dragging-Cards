import { FunctionComponent, useState, useEffect } from "react";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import './App.css';
import { Box, Typography } from "@mui/material";
import { Card1Design } from "./cards/Card1";
import { Card2Design } from "./cards/Card2";
import { Card3Design } from "./cards/Card3";
import { Card4Design } from "./cards/Card4";
import { Card5Design } from "./cards/Card5";

interface LayoutItem {
  x: number;
  y: number;
  w: number;
  h: number;
  i: string;
}

interface Props {
  domElements: unknown[];
  className?: string;
  rowHeight?: number;
  onLayoutChange?: (layout: unknown, layouts: unknown) => void;
  cols?: { [key: string]: number } | undefined;
  breakpoints?: { [key: string]: number } | undefined;
}

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const DropDrag: FunctionComponent<Props> = (props) => {
  const [layouts, setLayouts] = useState<{ [key: string]: LayoutItem[] }>({
    lg: [
      { x: 0, y: 0, w: 5, h: 1.5, i: "0" },
      { x: 10, y: 0, w: 4, h: 1.9, i: "1" },
      { x: 5, y: 0, w: 3, h: 2.3, i: "2" },
      { x: 0, y: 0, w: 4, h: 2, i: "3" },
      { x: 10, y: 0, w: 3, h: 3, i: "4" }
    ]
  });

  const [compactType] = useState<"vertical">("vertical");

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onLayoutChange = (_layout: never, layouts: any) => {
    setLayouts({ ...layouts });
  };

  const cards = () => {
    const cardDesign = [<Card5Design />, <Card1Design />, <Card2Design />, <Card3Design />, <Card4Design />];
    const cardBg = ["#ccc", "#f06292", "#ccc", "pink", "lightgreen", "lightblue"];
    return _.map(layouts.lg, function (_l, i) {
      return (
        <div
          key={i}
          style={{ background: cardBg[i % cardBg.length] }}
        >
          {cardDesign[i % cardDesign.length]}
        </div>
      );
    });
  };

  return (
    <>
      <Typography variant="h2" sx={{ textAlign: "center", marginTop: 1, }}>You can drag the cards</Typography>
      <Box className="mb-4">
        <ResponsiveReactGridLayout
          {...props}
          layouts={layouts}
          measureBeforeMount={false}
          useCSSTransforms={mounted}
          compactType={compactType}
          onLayoutChange={onLayoutChange}
          isDroppable
          isResizable={false}
        >
          {cards()}
        </ResponsiveReactGridLayout>
      </Box>
    </>
  );
};

export default DropDrag;

