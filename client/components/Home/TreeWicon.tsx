import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { TreeItemProps, treeItemClasses } from "@mui/lab/TreeItem";
import Typography from "@mui/material/Typography";
import MailIcon from "@mui/icons-material/Mail";
import DeleteIcon from "@mui/icons-material/Delete";
import Label from "@mui/icons-material/Label";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import InfoIcon from "@mui/icons-material/Info";
import ForumIcon from "@mui/icons-material/Forum";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { SvgIconProps } from "@mui/material/SvgIcon";
import CircleIcon from "@mui/icons-material/Circle";
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
      defaultExpanded={["3"]}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      sx={{ height: 500, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
    >
      <TreeItem nodeId="6" label="Sorting">
        <div className="flex items-center gap-2 ">
          <div>
            <input type="checkbox" />
          </div>
          <TreeItem
            className="whitespace-nowrap"
            nodeId="7"
            label="label one"
          ></TreeItem>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <input type="checkbox" />
          </div>
          <TreeItem
            className="whitespace-nowrap"
            nodeId="7"
            label="label one"
          ></TreeItem>
        </div>
        <div className="flex items-center ">
          <div></div>
          <TreeItem
            className="whitespace-nowrap text-common-color"
            nodeId="7"
            label="See More"
          ></TreeItem>
        </div>
        <hr className="w-full h-[2px] bg-gray-300" />
      </TreeItem>
      <TreeItem nodeId="11" label="All Categories">
        <TreeItem nodeId="3" label="Sell">
          <StyledTreeItem
            nodeId="1"
            labelText="All Mail"
            labelIcon={MailIcon}
          />
          <StyledTreeItem nodeId="2" labelText="Trash" labelIcon={DeleteIcon} />
          <StyledTreeItem nodeId="4" labelText="History" labelIcon={Label} />
        </TreeItem>
        <TreeItem nodeId="12" label="Rent" />
        <TreeItem nodeId="12" label="Jobs" />
        <TreeItem nodeId="12" label="Offer" />
        <hr className="w-full h-[2px] bg-gray-300" />
      </TreeItem>
      <TreeItem nodeId="13" label="Locations">
        <h2>All of Bangladesh</h2>
        <TreeItem nodeId="4" label="Dhaka">
          <StyledTreeItem
            nodeId="14"
            labelText="All Mail"
            labelIcon={CircleIcon}
          />
          <StyledTreeItem
            nodeId="15"
            labelText="Trash"
            labelIcon={CircleIcon}
          />
          <StyledTreeItem
            nodeId="16"
            labelText="History"
            labelIcon={CircleIcon}
          />
        </TreeItem>
        <TreeItem nodeId="17" label="Rent" />
        <TreeItem nodeId="17" label="Jobs" />
        <TreeItem nodeId="17" label="Offer" />
        <hr className="w-full h-[2px] bg-gray-300" />
      </TreeItem>
      {/* <StyledTreeItem nodeId="3" labelText="Categories" labelIcon={Label}>
        <StyledTreeItem
          nodeId="5"
          labelText="Social"
          labelIcon={SupervisorAccountIcon}
          labelInfo="90"
          color="#1a73e8"
          bgColor="#e8f0fe"
        />
        <StyledTreeItem
          nodeId="6"
          labelText="Updates"
          labelIcon={InfoIcon}
          labelInfo="2,294"
          color="#e3742f"
          bgColor="#fcefe3"
        />
        <StyledTreeItem
          nodeId="7"
          labelText="Forums"
          labelIcon={ForumIcon}
          labelInfo="3,566"
          color="#a250f5"
          bgColor="#f3e8fd"
        />
        <StyledTreeItem
          nodeId="8"
          labelText="Promotions"
          labelIcon={LocalOfferIcon}
          labelInfo="733"
          color="#3c8039"
          bgColor="#e6f4ea"
        />
      </StyledTreeItem> */}
    </TreeView>
  );
}
