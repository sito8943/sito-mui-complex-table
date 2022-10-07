/* eslint-disable eqeqeq */

/* eslint-disable react/forbid-prop-types */

/* eslint-disable react/function-component-definition */
import { useState } from "react";
import PropTypes from "prop-types";
import {
  useTheme,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Typography,
  Checkbox,
  IconButton,
  Tooltip,
  Toolbar,
} from "@mui/material"; // @mui/icons-material

import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage"; // @mui styles

import { alpha } from "@mui/material/styles"; // @mui utils

import { visuallyHidden } from "@mui/utils"; // This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly

/**
 *
 * @param {object[]} array - objects to sort
 * @param {string} order - asc / desc order
 * @param {string[]} orderBy - attribute to order by
 * @param {string} emptyField - text for empty field
 * @returns
 */

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";

function stableSort(array, order, orderBy, emptyField) {
  const stabilizedThis = array.sort((itemA, itemB) => {
    const valueA = itemA[orderBy] === emptyField ? 0 : itemA[orderBy];
    const valueB = itemB[orderBy] === emptyField ? 0 : itemB[orderBy];

    if (valueA < valueB) {
      if (order === "asc") return -1;
      return 1;
    }

    if (valueA > valueB) {
      if (order === "asc") return 1;
      return -1;
    }

    return 0;
  });
  return stabilizedThis;
}

function ComplexTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    columns,
    sx,
    rowSx,
    cellSx,
  } = props;

  const createSortHandler = (property) => (event) =>
    onRequestSort(event, property);

  const onSelectedAllChange = (e) => onSelectAllClick(e);

  return /*#__PURE__*/ _jsx(TableHead, {
    sx: { ...sx },
    children: /*#__PURE__*/ _jsxs(TableRow, {
      sx: { ...rowSx },
      children: [
        /*#__PURE__*/ _jsx(TableCell, {
          sx: { ...cellSx },
          padding: "checkbox",
          children: /*#__PURE__*/ _jsx(Checkbox, {
            color: "primary",
            indeterminate: numSelected > 0 && numSelected < rowCount,
            checked: rowCount > 0 && numSelected === rowCount,
            onChange: onSelectedAllChange,
            onClick: onSelectedAllChange,
          }),
        }),
        columns.map((headCell) =>
          /*#__PURE__*/ _jsx(
            TableCell,
            {
              sx: { ...cellSx },
              align: headCell.align,
              padding: headCell.padding,
              sortDirection: orderBy === headCell.id ? order : false,
              children: /*#__PURE__*/ _jsxs(TableSortLabel, {
                active: orderBy === headCell.id,
                direction: orderBy === headCell.id ? order : "asc",
                onClick: createSortHandler(headCell.id),
                sx: {
                  width: headCell.width,
                },
                children: [
                  headCell.label,
                  orderBy === headCell.id
                    ? /*#__PURE__*/ _jsx(Box, {
                        component: "span",
                        sx: visuallyHidden,
                        children:
                          order === "desc"
                            ? "sorted descending"
                            : "sorted ascending",
                      })
                    : null,
                ],
              }),
            },
            headCell.id
          )
        ),
      ],
    }),
  });
}

ComplexTableHead.defaultProps = {
  sx: {},
  rowSx: {},
  cellSx: {},
};
ComplexTableHead.propTypes = {
  orderBy: PropTypes.string.isRequired,
  numSelected: PropTypes.number.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  rowCount: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  columns: PropTypes.array.isRequired,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
  rowSx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
  cellSx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

const ComplexTableToolbar = (props) => {
  const {
    numSelected,
    sx,
    singleSelectFunctions,
    multipleSelectFunctions,
    textForOneSelected,
    textForNSelected,
  } = props;
  return /*#__PURE__*/ _jsxs(Toolbar, {
    sx: {
      pl: {
        sm: 2,
      },
      pr: {
        xs: 1,
        sm: 1,
      },
      ...sx,
      ...(numSelected > 0 && {
        bgcolor: (theme) =>
          alpha(
            theme.palette.primary.main,
            theme.palette.action.activatedOpacity
          ),
      }),
    },
    children: [
      numSelected > 0
        ? /*#__PURE__*/ _jsxs(Typography, {
            sx: {
              flex: "1 1 100%",
            },
            color: "inherit",
            variant: "subtitle1",
            component: "div",
            children: [
              numSelected,
              " ",
              numSelected === 1 ? textForOneSelected : textForNSelected,
            ],
          })
        : /*#__PURE__*/ _jsx(Typography, {
            sx: {
              flex: "1 1 100%",
            },
            variant: "h6",
            id: "tableTitle",
            component: "div",
          }),
      numSelected === 1 &&
        /*#__PURE__*/ _jsx(_Fragment, {
          children: singleSelectFunctions.map((item) =>
            /*#__PURE__*/ _jsx(Tooltip, {
              title: item.tooltip,
              children: /*#__PURE__*/ _jsx(IconButton, {
                onClick: item.func,
                children: item.icon,
              }),
            })
          ),
        }),
      numSelected > 0 &&
        /*#__PURE__*/ _jsx(_Fragment, {
          children: multipleSelectFunctions.map((item) =>
            /*#__PURE__*/ _jsx(Tooltip, {
              title: item.tooltip,
              children: /*#__PURE__*/ _jsx(IconButton, {
                onClick: item.func,
                children: item.icon,
              }),
            })
          ),
        }),
    ],
  });
};

ComplexTableToolbar.defaultProps = {
  singleSelectFunctions: [],
  multipleSelectFunctions: [],
  sx: {},
};
ComplexTableToolbar.propTypes = {
  textForNSelected: PropTypes.string.isRequired,
  textForOneSelected: PropTypes.string.isRequired,
  numSelected: PropTypes.number.isRequired,
  singleSelectFunctions: PropTypes.arrayOf(
    PropTypes.shape({
      tooltip: PropTypes.string,
      func: PropTypes.func,
      icon: PropTypes.node,
    })
  ),
  multipleSelectFunctions: PropTypes.arrayOf(
    PropTypes.shape({
      tooltip: PropTypes.string,
      func: PropTypes.func,
      icon: PropTypes.node,
    })
  ),
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

const TablePaginationActions = (props) => {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => onPageChange(event, 0);

  const handleBackButtonClick = (event) => onPageChange(event, page - 1);

  const handleNextButtonClick = (event) => onPageChange(event, page + 1);

  const handleLastPageButtonClick = (event) =>
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));

  return /*#__PURE__*/ _jsxs(Box, {
    sx: {
      flexShrink: 0,
      ml: 2.5,
    },
    children: [
      /*#__PURE__*/ _jsx(IconButton, {
        onClick: handleFirstPageButtonClick,
        disabled: page === 0,
        children:
          theme.direction === "rtl"
            ? /*#__PURE__*/ _jsx(LastPageIcon, {})
            : /*#__PURE__*/ _jsx(FirstPageIcon, {}),
      }),
      /*#__PURE__*/ _jsx(IconButton, {
        onClick: handleBackButtonClick,
        disabled: page === 0,
        children:
          theme.direction === "rtl"
            ? /*#__PURE__*/ _jsx(KeyboardArrowRight, {})
            : /*#__PURE__*/ _jsx(KeyboardArrowLeft, {}),
      }),
      /*#__PURE__*/ _jsx(IconButton, {
        onClick: handleNextButtonClick,
        disabled: page >= Math.ceil(count / rowsPerPage) - 1,
        children:
          theme.direction === "rtl"
            ? /*#__PURE__*/ _jsx(KeyboardArrowLeft, {})
            : /*#__PURE__*/ _jsx(KeyboardArrowRight, {}),
      }),
      /*#__PURE__*/ _jsx(IconButton, {
        onClick: handleLastPageButtonClick,
        disabled: page >= Math.ceil(count / rowsPerPage) - 1,
        children:
          theme.direction === "rtl"
            ? /*#__PURE__*/ _jsx(FirstPageIcon, {})
            : /*#__PURE__*/ _jsx(LastPageIcon, {}),
      }),
    ],
  });
};

export default function ComplexTable(props) {
  const {
    id,
    className,
    name,
    columns,
    rows,
    sx,
    toolbarSx,
    tableContainerSx,
    paginationSx,
    currentPage,
    handleChangePage,
    handleChangeRowsPerPage,
    componentForPaginationActions,
    rowsPerPageOptions,
    singleSelectFunctions,
    multipleSelectFunctions,
    textForNSelected,
    textForOneSelected,
    textForEmptyField,
    textForPagination,
    sortFunction,
  } = props;
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("id");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

  const headerAlign = (column) => {
    for (const item of columns) if (column === item.id) return item.align;
  };

  const headerWidth = (column) => {
    for (const item of columns) if (column === item.id) return item.width;
  };

  const headerPadding = (column) => {
    for (const item of columns) if (column === item.id) return item.padding;
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  /**
   *
   * @param {boolean} all
   * @returns
   */

  const handleSelectAllClick = () => {
    if (selected.length === 0) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }

    setSelected([]);
  };

  const handleClick = (event, id) => {
    let selectedIndex = -1;
    let newSelected = [];
    let isLocalSelected = false;
    selected.forEach((item) => {
      if (item === id) {
        selectedIndex = selected.indexOf(item);
        isLocalSelected = true;
      }
    });
    if (!isLocalSelected)
      rows.forEach((item) => {
        if (item.id === id) selectedIndex = rows.indexOf(item);
      });

    if (selected.length && isLocalSelected) {
      if (selectedIndex === -1) newSelected = newSelected.concat(selected, id);
      else if (selectedIndex === 0)
        newSelected = newSelected.concat(selected.slice(1));
      else if (selectedIndex === selected.length - 1)
        newSelected = newSelected.concat(selected.slice(0, -1));
      else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
        );
      }
    } else {
      newSelected = [...selected];
      newSelected.push(id);
    }

    if (
      newSelected.length === 1 &&
      selected.length === 1 &&
      newSelected[0] === selected[0]
    )
      setSelected([]);
    else setSelected(newSelected);
  };

  const localHandleChangePage = (event, newPage) => setPage(newPage);

  const localHandleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1; // Avoid a layout jump when reaching the last page with empty rows.

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const parsedSelectFunctions = (selectFunction) => {
    selectFunction.map((item) => {
      const { tooltip, func, icon } = item;
      return {
        tooltip,
        func: () => func(selected),
        icon,
      };
    });
    return selectFunction;
  };

  return /*#__PURE__*/ _jsxs(Box, {
    id: id,
    name: name,
    className: className,
    sx: {
      width: "100%",
      ...sx,
    },
    children: [
      /*#__PURE__*/ _jsx(ComplexTableToolbar, {
        sx: { ...toolbarSx },
        numSelected: selected.length,
        textForNSelected: textForNSelected,
        textForOneSelected: textForOneSelected,
        singleSelectFunctions: parsedSelectFunctions(singleSelectFunctions),
        multipleSelectFunctions: parsedSelectFunctions(multipleSelectFunctions),
      }),
      /*#__PURE__*/ _jsx(TableContainer, {
        sx: { ...tableContainerSx },
        children: /*#__PURE__*/ _jsxs(Table, {
          size: "medium",
          children: [
            /*#__PURE__*/ _jsx(ComplexTableHead, {
              columns: columns,
              numSelected: selected.length,
              order: order,
              orderBy: orderBy,
              onSelectAllClick: handleSelectAllClick,
              onRequestSort: handleRequestSort,
              rowCount: rows.length,
              textForNSelected: textForNSelected,
              textForOneSelected: textForOneSelected,
            }),
            /*#__PURE__*/ _jsxs(TableBody, {
              children: [
                sortFunction(rows, order, orderBy, textForEmptyField)
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;
                    return /*#__PURE__*/ _jsxs(
                      TableRow,
                      {
                        hover: true,
                        onClick: (event) => handleClick(event, row.id),
                        role: "checkbox",
                        "aria-checked": isItemSelected,
                        tabIndex: -1,
                        selected: isItemSelected,
                        children: [
                          /*#__PURE__*/ _jsx(TableCell, {
                            padding: "checkbox",
                            children: /*#__PURE__*/ _jsx(Checkbox, {
                              color: "primary",
                              checked: isItemSelected,
                            }),
                          }),
                          Object.keys(row).map((item) =>
                            /*#__PURE__*/ _jsx(
                              TableCell,
                              {
                                align: headerAlign(item),
                                component: item === "id" ? "th" : "td",
                                id: labelId,
                                scope: "row",
                                padding: headerPadding(item),
                                sx: {
                                  span: {
                                    width: headerWidth(item),
                                    textOverflow: "ellipsis",
                                    overflow: "hidden",
                                    whiteSpace: "nowrap",
                                  },
                                },
                                children: /*#__PURE__*/ _jsx("span", {
                                  children: row[item],
                                }),
                              },
                              item
                            )
                          ),
                        ],
                      },
                      row.name
                    );
                  }),
                emptyRows > 0 &&
                  /*#__PURE__*/ _jsx(TableRow, {
                    style: {
                      height: 53 * emptyRows,
                    },
                    children: /*#__PURE__*/ _jsx(TableCell, {
                      colSpan: 6,
                    }),
                  }),
              ],
            }),
          ],
        }),
      }),
      /*#__PURE__*/ _jsx(TablePagination, {
        rowsPerPageOptions: rowsPerPageOptions,
        component: "div",
        count: rows.length,
        rowsPerPage: rowsPerPage,
        page: handleChangePage ? currentPage : page,
        onPageChange: handleChangePage || localHandleChangePage,
        onRowsPerPageChange:
          handleChangeRowsPerPage || localHandleChangeRowsPerPage,
        ActionsComponent: componentForPaginationActions,
        SelectProps: {
          inputProps: {
            "aria-label": textForPagination,
          },
        },
        sx: { ...paginationSx },
      }),
    ],
  });
}
ComplexTable.defaultProps = {
  id: undefined,
  name: undefined,
  className: undefined,
  sx: {},
  toolbarSx: {},
  tableContainerSx: {},
  paginationSx: {},
  rowsPerPageOptions: [5, 10, 25],
  componentForPaginationActions: TablePaginationActions,
  singleSelectFunctions: [],
  multipleSelectFunctions: [],
  textForNSelected: "selected",
  textForOneSelected: "selected",
  textForEmptyField: "empty",
  textForPagination: "Rows per page",
  sortFunction: stableSort,
  currentPage: 0,
  handleChangePage: undefined,
  handleChangeRowsPerPage: undefined,
};
ComplexTable.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  sortFunction: PropTypes.func,
  handleChangePage: PropTypes.func,
  handleChangeRowsPerPage: PropTypes.func,
  componentForPaginationActions: PropTypes.elementType,
  currentPage: PropTypes.number,
  textForNSelected: PropTypes.string,
  textForOneSelected: PropTypes.string,
  textForEmptyField: PropTypes.string,
  textForPagination: PropTypes.string,
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  singleSelectFunctions: PropTypes.arrayOf(
    PropTypes.shape({
      tooltip: PropTypes.string,
      func: PropTypes.func,
      icon: PropTypes.node,
    })
  ),
  multipleSelectFunctions: PropTypes.arrayOf(
    PropTypes.shape({
      tooltip: PropTypes.string,
      func: PropTypes.func,
      icon: PropTypes.node,
    })
  ),
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
  toolbarSx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
  tableContainerSx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
  paginationSx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};
