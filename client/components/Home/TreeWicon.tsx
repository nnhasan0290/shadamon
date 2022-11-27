import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { TreeItemProps, treeItemClasses } from "@mui/lab/TreeItem";
import Typography from "@mui/material/Typography";
import MailIcon from "@mui/icons-material/Mail";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { SvgIconProps } from "@mui/material/SvgIcon";
import CircleIcon from "@mui/icons-material/Circle";
import Link from "next/link";
declare module "react" {
  interface CSSProperties {
    "--tree-view-color"?: string;
    "--tree-view-bg-color"?: string;
  }
}

type StyledTreeItemProps = TreeItemProps & {
  bgColor?: string;
  color?: string;
  labelIcon: React.ElementType<SvgIconProps>;
  labelInfo?: string;
  labelText: string;
};

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "&.Mui-expanded": {
      fontWeight: theme.typography.fontWeightRegular,
    },
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: "var(--tree-view-color)",
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: "inherit",
      color: "inherit",
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

function StyledTreeItem(props: StyledTreeItemProps) {
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    ...other
  } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: "flex", alignItems: "center", p: 0.5, pr: 0 }}>
          <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
          <Typography
            variant="body2"
            sx={{ fontWeight: "inherit", flexGrow: 1 }}
          >
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </Box>
      }
      style={{
        "--tree-view-color": color,
        "--tree-view-bg-color": bgColor,
      }}
      {...other}
    />
  );
}

export default function GmailTreeView() {
  return (
    <TreeView
      aria-label="gmail"
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultExpanded={["1", "4", "15"]}
      defaultEndIcon={<div style={{ width: 24 }} />}
      sx={{ height: 500, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
    >
      <TreeItem nodeId="1" label="Sorting">
        <div className="flex items-center gap-1 ml-4">
          <div>
            <input type="checkbox" />
          </div>
          <TreeItem
            className="whitespace-nowrap"
            nodeId="2"
            label="label one"
          ></TreeItem>
        </div>
        <div className="flex items-center gap-1 ml-4">
          <div>
            <input type="checkbox" />
          </div>
          <TreeItem
            className="whitespace-nowrap"
            nodeId="3"
            label="label one"
          ></TreeItem>
        </div>
        <div className="text-common-color font-semibold ml-8 text-sm">
          <Link href="#">See More</Link>
        </div>
        <hr className="w-full h-[2px] bg-gray-300" />
      </TreeItem>
      <TreeItem nodeId="4" label="All Categories">
        <TreeItem nodeId="5" label="Sell">
          <TreeItem nodeId="6" label="option-one">
            <TreeItem nodeId="9" label="option-two"></TreeItem>
            <TreeItem nodeId="10" label="option-two"></TreeItem>
          </TreeItem>
          <TreeItem nodeId="7" label="option-one"></TreeItem>
          <TreeItem nodeId="8" label="option-one"></TreeItem>
        </TreeItem>
        <TreeItem nodeId="12" label="Rent" />
        <TreeItem nodeId="13" label="Jobs" />
        <TreeItem nodeId="14" label="Offer" />
        <hr className="w-full h-[2px] bg-gray-300" />
      </TreeItem>
      <TreeItem nodeId="15" label="Locations">
        <h2 className="ml-5">All of Bangladesh</h2>
        <TreeItem nodeId="20" label="Dhaka">
          <StyledTreeItem
            nodeId="14"
            labelText="All Mail"
            labelIcon={CircleIcon}
          />
          <StyledTreeItem
            nodeId="16"
            labelText="Trash"
            labelIcon={CircleIcon}
          />
          <StyledTreeItem
            nodeId="17"
            labelText="History"
            labelIcon={CircleIcon}
          />
        </TreeItem>
        <TreeItem nodeId="21" label="Rent" />
        <TreeItem nodeId="18" label="Jobs" />
        <TreeItem nodeId="19" label="Offer" />
        <hr className="w-full h-[2px] bg-gray-300" />
      </TreeItem>
    </TreeView>
  );
}
