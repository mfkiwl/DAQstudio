import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import * as React from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  Row,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  TestSequenceElement,
  CONDITIONAL_TYPES,
  Conditional,
  Test,
} from "@src/types/testSequencer";
import {
  SetElemsFn,
  useTestSequencerState,
} from "@src/hooks/useTestSequencerState";
import { parseInt, filter, map } from "lodash";
import { AddConditionalModal } from "./AddConditionalModal";
import {
  generateConditional,
  getIndentLevels,
  handleConditionalDelete,
} from "../utils/ConditionalUtils";
import { ChevronUpIcon, Loader, TrashIcon } from "lucide-react";
import { WriteConditionalModal } from "./AddWriteConditionalModal";

const IndentLine = ({
  name,
  level = 0,
}: {
  name: React.ReactNode;
  level: number;
}) =>
  level == 0 ? (
    <div className="relative ml-5 pl-1">
      <div style={{ marginLeft: level == 0 ? `${level * 20}px` : 0 }}>
        {level == 0 ? name : <IndentLine name={name} level={level - 1} />}
      </div>
    </div>
  ) : (
    <div className="relative ml-5 pl-1">
      <div
        className={"border-l-2 border-blue-800 py-1 pl-4"}
        style={{ marginLeft: level == 0 ? `${level * 20}px` : 0 }}
      >
        {level == 0 ? name : <IndentLine name={name} level={level - 1} />}
      </div>
    </div>
  );

export function DataTable() {
  const { elems, setElems, running } = useTestSequencerState();

  const indentLevels = getIndentLevels(elems);

  const columns: ColumnDef<TestSequenceElement>[] = [
    {
      id: "selected",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },

    {
      accessorFn: (elem, idx) => {
        console.log(idx);
        return elem.type === "test" ? "testName" : "conditionalType";
      },
      header: "Test name",
      cell: ({ row }) => {
        const isTest = row.original.type === "test";
        return isTest ? (
          <div className="flex h-full space-x-2">
            {/* Indent levels */}
            <div className="flex flex-row space-x-1">
              <IndentLine
                name={(row.original as Test).testName}
                level={indentLevels[row.id]}
              />
              {running.includes(row.original.id) && (
                <Loader className="scale-50" />
              )}
            </div>
            {/* {(row.original as Test).test_name} */}
          </div>
        ) : (
          <div>
            {/* Indent levels */}
            <div className="flex flex-row space-x-1">
              <IndentLine
                name={
                  <div className="flex flex-col">
                    <b>
                      {(
                        row.original as Conditional
                      ).conditionalType.toUpperCase()}
                    </b>
                    <i>
                      {(row.original as Conditional).condition.substring(0, 45)}
                      {(row.original as Conditional).condition.length >= 45 && (
                        <>...</>
                      )}
                    </i>
                  </div>
                }
                level={indentLevels[row.id]}
              />
            </div>
          </div>
        );
      },
    },

    {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      accessorFn: (elem, _) => {
        return elem.type === "test" ? "runInParallel" : null;
      },
      header: "run in parallel",
      cell: ({ row }) => {
        return row.original.type === "test" ? (
          <div>{row.original.runInParallel}</div>
        ) : null;
      },
    },

    {
      accessorKey: "test type",
      header: "Test type",
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("testType")}</div>
      ),
    },

    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        return <div>{row.getValue("status")}</div>;
      },
    },

    {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      accessorFn: (elem, _) => {
        return elem.type === "test" ? "completionTime" : null;
      },
      header: "Time complete",
      enableHiding: false,
      cell: ({ row }) => {
        return row.original.type === "test" ? (
          <div>
            {row.original.completionTime &&
              row.original.completionTime.toFixed(2)}
          </div>
        ) : null;
      },
    },

    {
      accessorKey: "isSavedToCloud",
      header: "Saved to Flojoy Cloud",
      enableHiding: false,
      cell: ({ row }) => {
        return row.getValue("isSavedToCloud") ? (
          <Button>OPEN TEST</Button>
        ) : null;
      },
    },

    {
      accessorKey: "up-down",
      header: "Reorder",
      enableHiding: false,
      cell: ({ row }) => {
        const onUpClick = () => {
          setElems((data) => {
            const new_data = [...data];
            const index = parseInt(row.id);
            if (index == 0) return data;
            new_data[index] = data[index - 1];
            new_data[index - 1] = data[index];
            return new_data;
          });
        };
        const onDownClick = () => {
          setElems((data) => {
            const new_data = [...data];
            const index = parseInt(row.id);
            if (index == data.length) return data;
            new_data[index] = data[index + 1];
            new_data[index + 1] = data[index];
            return new_data;
          });
        };
        return (
          <div className="flex flex-row">
            <ChevronUpIcon className="ml-2 h-4 w-4" onClick={onUpClick} />
            <ChevronDownIcon className="ml-2 h-4 w-4" onClick={onDownClick} />
          </div>
        );
      },
    },
  ];

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const data = elems; // this is necessary for some reason for the table to work no idea why

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    pageCount: 5,
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const handleClickRemoveTests = () => {
    const keys = map(Object.keys(rowSelection), (key) => parseInt(key)).sort(
      (a, b) => {
        return a - b;
      },
    );
    console.log(keys);
    onRemoveTest([...keys]);
    setRowSelection([]);
  };

  const onRemoveTest = (idxs: number[]) => {
    setElems((elems) => {
      let newElems = [...elems];
      const setNewElems: SetElemsFn = (setFnOrArr) => {
        if (Array.isArray(setFnOrArr)) newElems = setFnOrArr;
        else newElems = setFnOrArr(newElems);
      };

      idxs
        .sort((a, b) => a - b)
        .forEach((testIdx, i) => {
          const newIdx = testIdx - i;
          switch (newElems[newIdx].type) {
            case "test":
              setNewElems((data) => {
                return filter(data, (_, idx) => idx != newIdx);
              });
              break;
            case "conditional":
              handleConditionalDelete(
                newElems[newIdx] as Conditional,
                setNewElems,
              );
              break;
          }
        });
      return newElems;
    });
  };

  const [showAddConditionalModal, setShowAddConditionalModal] =
    React.useState(false);
  const addConditionalAfterIdx = React.useRef(-1);

  const [showWriteConditionalModal, setShowWriteConditionalModal] =
    React.useState(false);
  const writeConditionalForIdx = React.useRef(-1);

  const handleWriteConditionalModal = (input: string) => {
    setElems((data) => {
      const new_data = [...data];
      const conditional = new_data[
        writeConditionalForIdx.current
      ] as Conditional;
      new_data[writeConditionalForIdx.current] = {
        ...conditional,
        condition: input,
      };
      return new_data;
    });
  };

  const handleAddConditionalModal = (type: CONDITIONAL_TYPES) => {
    setElems((data) => {
      const new_data = [...data];
      new_data.splice(
        addConditionalAfterIdx.current,
        0,
        ...generateConditional(type),
      );
      return new_data;
    });
  };

  const handleClickAddConditional = (idx: number) => {
    addConditionalAfterIdx.current = idx;
    setShowAddConditionalModal(true);
  };

  const onClickWriteCondition = (idx: number) => {
    writeConditionalForIdx.current = idx;
    console.log("here");
    setShowWriteConditionalModal(true);
  };

  const getSpecificContextMenuItems = (row: Row<TestSequenceElement>) => {
    switch (row.original.type) {
      case "test":
        return <></>;
      case "conditional":
        return (
          <>
            <ContextMenuItem
              onClick={() => onClickWriteCondition(parseInt(row.id))}
            >
              Write Condition
            </ContextMenuItem>
          </>
        );
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center py-0">
        <AddConditionalModal
          isConditionalModalOpen={showAddConditionalModal}
          handleAddConditionalModalOpen={setShowAddConditionalModal}
          handleAdd={handleAddConditionalModal}
        />
        <WriteConditionalModal
          isConditionalModalOpen={showWriteConditionalModal}
          handleWriteConditionalModalOpen={setShowWriteConditionalModal}
          handleWrite={handleWriteConditionalModal}
        />
        <Button
          disabled={Object.keys(rowSelection).length === 0}
          onClick={handleClickRemoveTests}
          variant="outline"
        >
          <TrashIcon />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <ContextMenu>
                      <TableCell key={cell.id}>
                        <ContextMenuTrigger>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </ContextMenuTrigger>
                      </TableCell>
                      <ContextMenuContent>
                        {getSpecificContextMenuItems(row)}
                        <ContextMenuItem
                          onClick={() =>
                            handleClickAddConditional(parseInt(row.id))
                          }
                        >
                          Add Conditional
                        </ContextMenuItem>
                        <ContextMenuItem>Show Output Plot</ContextMenuItem>
                        <ContextMenuItem
                          onClick={() => onRemoveTest([parseInt(row.id)])}
                        >
                          Remove Test
                        </ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>

        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
