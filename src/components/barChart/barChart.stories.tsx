import React from "react";
import { Meta, StoryObj } from "@storybook/react/*";
import BarChart from "./barChart";
import { BAR_CHART_ITEMS } from "../../storybook/constants";

const meta: Meta<typeof BarChart> = {
    title: 'Components/BarChart',
    component: BarChart,
    args: {
        items: []
    }
}

export default meta;

type story = StoryObj<typeof BarChart>;

export const primaryBarChart: story = {
    args: {
        items: BAR_CHART_ITEMS,
    }
}