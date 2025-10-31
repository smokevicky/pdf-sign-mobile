import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';

export const Header = () => {
	return (
		<AppBar position="static" color="primary" elevation={2}>
			<Toolbar sx={{ minHeight: 56, px: 2 }}>
				{/* Left options */}
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
					<IconButton edge="start" color="inherit" aria-label="menu" size="large">
						<MenuIcon />
					</IconButton>
				</Box>

				{/* Center logo */}
				<Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Typography
						variant="h6"
						component="div"
						sx={{
							fontWeight: 700,
							color: 'inherit',
							letterSpacing: 1,
							textAlign: 'center',
							fontFamily: 'Raleway, sans-serif',
						}}
					>
						PDF Sign App
					</Typography>
				</Box>

				{/* Right circular logo/avatar */}
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Avatar
						alt="Logo"
						src={`${process.env.PUBLIC_URL}/dp.png`}
						sx={{ bgcolor: 'secondary.main', width: 40, height: 40 }}
					/>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
