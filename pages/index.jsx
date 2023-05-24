import { TableList } from '../components/table-list';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';

export const Page = () => {
	return (
		<>
			<AppBar position='fixed' color='primary'>
				<Toolbar>
					<Typography variant='h6'>This is header</Typography>
				</Toolbar>
			</AppBar>
			<Card
				sx={{
					width: '100vw',
				}}
			>
				<TableList />
			</Card>
		</>
	);
};
