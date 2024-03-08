import { FunctionComponent, useState, useEffect } from "react";
import _ from "lodash";
import { Layout, Layouts, Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "../App.css";
import { Box, Button, Typography } from "@mui/material";
import { Card1Design } from "../cards/Card1";
import { Card2Design } from "../cards/Card2";
import { Card3Design } from "../cards/Card3";
import { Card4Design } from "../cards/Card4";
import { Card5Design } from "../cards/Card5";
import { useLocation } from "react-router-dom";

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
      { x: 0, y: 0, w: 5, h: 1.7, i: "0" },
      { x: 10, y: 0, w: 4, h: 2.3, i: "1" },
      { x: 5, y: 0, w: 3, h: 2.3, i: "2" },
      { x: 0, y: 1, w: 4, h: 2, i: "3" },
      { x: 10, y: 1, w: 3, h: 3, i: "4" },
    ],
  });

  const [compactType] = useState<"vertical">("vertical");

  const [mounted, setMounted] = useState(false);

  const [cardPosition, setCardPosition] = useState<Layout[]>([]);
  const onLayoutChange = (layout: Layout[], layouts: Layouts) => {
    setLayouts(layouts);
    setCardPosition(layout);
  };

  const data = localStorage.getItem("initialData");

  const savingLayout = () => {
    if (data) {
      const newData = JSON.parse(data);
      newData.push({ lg: cardPosition });
      localStorage.setItem('initialData', JSON.stringify(newData));
    }
  }

  const cards = () => {
    const cardDesign = [
      <Card5Design />,
      <Card1Design />,
      <Card2Design />,
      <Card3Design />,
      <Card4Design />,
    ];
    const cardBg = [
      "#ccc",
      "#f06292",
      "#ccc",
      "pink",
      "lightgreen",
      "lightblue",
    ];
    return _.map(layouts.lg, function (_l, i) {
      return (
        <div key={i} style={{ background: cardBg[i % cardBg.length] }}>
          {cardDesign[i % cardDesign.length]}
        </div>
      );
    });
  };

  const location = useLocation();
  const index = location.state.index;

  const displayUI = (index: number) => {
    const data = localStorage.getItem("initialData");
    console.log("Saved Data:", data);
    if (data) {
      const parsedData = JSON.parse(data);
      const abc = parsedData[index];
      setCardPosition(abc.lg);
      setLayouts(abc)
    }
  }

  useEffect(() => {
    displayUI(index);
    setMounted(true);
  }, [index]);



  return (
    <>
      <Button onClick={savingLayout}>SAVE LAYOUT</Button>
      <Typography variant="h2" sx={{ textAlign: "center", marginTop: 1 }}>
        You can drag the cards
      </Typography>
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
          draggableCancel=".cancel-drag"
        >
          {cards()}
        </ResponsiveReactGridLayout>
      </Box>
    </>
  );
};

export default DropDrag;

