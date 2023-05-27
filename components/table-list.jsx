import { Card, Checkbox, Stack } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";

export const TableList = () => {
  const data = [
    {
      id: 1,
      name: "Josue",
      lastName: "Quevedo",
      email: "correo@correo.com",
      money: 500,
    },
    {
      id: 2,
      name: "Luis",
      lastName: "Fereira",
      email: "correo@correo.com",
      money: 500,
    },
    {
      id: 3,
      name: "Francisco",
      lastName: "Cepeda",
      email: "correo@correo.com",
      money: 500,
    },
    {
      id: 4,
      name: "Kenier",
      lastName: "Fernandez",
      email: "correo@correo.com",
      money: 500,
    },
    {
      id: 5,
      name: "Andrea",
      lastName: "Quevedo",
      email: "correo@correo.com",
      money: 500,
    },
  ];
  let addProperty = data.map((item) => (item["isChecked"] = false));

  const [checkbox, setcheckbox] = useState(data);

  const onChange = (e) => {
    const { checked } = e.target;
    setcheckbox(
      checkbox.map((items) => ({
        ...items,
        isChecked: checked,
      }))
    );
  };
  const handleOnChange = (item) => {
    let checkboxSelect = [...checkbox];
    let index = checkboxSelect.findIndex((list) => list.name === item.name);
    if (index !== -1) {
      checkboxSelect[index].isChecked = !checkboxSelect[index].isChecked;
      setcheckbox(checkboxSelect);
    }
  };
  const statusCheckbox = checkbox.map((item) => item.isChecked);

  const status = statusCheckbox.every((elements) => elements == true);
  return (
    <Card>
      <Stack justifyContent={"center"}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox onChange={onChange} checked={status} />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Lastname</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Money</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {checkbox.map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Checkbox
                        checked={item.isChecked}
                        onChange={() => handleOnChange(item)}
                      />
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.lastName}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.money}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Card>
  );
};
