import { Card, Checkbox, Stack } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export const TableList = () => {
	const data = [
		{
			id: 1,
			name: 'Josue',
			lastName: 'Quevedo',
			email: 'correo@correo.com',
			money: 500,
		},
		{
			id: 2,
			name: 'Luis',
			lastName: 'Fereira',
			email: 'correo@correo.com',
			money: 500,
		},
		{
			id: 3,
			name: 'Francisco',
			lastName: 'Cepeda',
			email: 'correo@correo.com',
			money: 500,
		},
		{
			id: 4,
			name: 'Kenier',
			lastName: 'Fernandez',
			email: 'correo@correo.com',
			money: 500,
		},
		{
			id: 5,
			name: 'Andrea',
			lastName: 'Quevedo',
			email: 'correo@correo.com',
			money: 500,
		},
	];

	return (
		<Card>
			<Stack justifyContent={'center'}>
				<TableContainer sx={{ maxHeight: 440 }}>
					<Table stickyHeader aria-label='sticky table'>
						<TableHead>
							<TableRow>
								<TableCell>
									<Checkbox />
								</TableCell>
								<TableCell>Name</TableCell>
								<TableCell>Lastname</TableCell>
								<TableCell>Email</TableCell>
								<TableCell>Money</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{data.map((item) => {
								return (
									<TableRow key={item.id}>
										<TableCell>
											<Checkbox />
										</TableCell>
										<TableCell key={item.id}>{item.name}</TableCell>
										<TableCell key={item.id}>{item.lastName}</TableCell>
										<TableCell key={item.id}>{item.email}</TableCell>
										<TableCell key={item.id}>{item.money}</TableCell>
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
