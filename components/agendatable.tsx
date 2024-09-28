import { useState } from "react";
import { Button } from "@nextui-org/button";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";




export const AgendaTable = () => {
  return (
    // TODO: Data and use flex columns for this + accordions for more info
    <Table  className="mt-5" hideHeader aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>TIME</TableColumn>
        <TableColumn>EVENT</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>National Anthem</TableCell>
         <TableCell>&nbsp;</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Show Name</TableCell>
          <TableCell>Sweet Grass Highschool</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Jane Fisher</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>William Howard</TableCell>
          <TableCell>Vacation</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
