import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, List, Typography } from '@mui/material';

// project imports
import NavItem from '../NavItem';
import NavCollapse from '../NavCollapse';

import './index.css';

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //

const NavGroup = ({ item }) => {
    const theme = useTheme();

    // menu list collapse & items
    const items = item.children?.map((menu) => {
        switch (menu.type) {
            case 'collapse':
                return <NavCollapse className="icon_style" key={menu.id} menu={menu} level={1} />;
            case 'item':
                return <NavItem className="icon_style" key={menu.id} item={menu} level={1} />;
            default:
                return (
                    <Typography key={menu.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return (
        <>
            <List
                subheader={
                    item.title && (
                        <Typography
                            className="icon_style"
                            variant="caption"
                            sx={{ ...theme.typography.menuCaption, color: 'white' }}
                            display="block"
                            gutterBottom
                        >
                            {item.title}
                            {item.caption && (
                                <Typography
                                    className="icon_style"
                                    variant="caption"
                                    sx={{ ...theme.typography.subMenuCaption, color: 'white' }}
                                    display="block"
                                    gutterBottom
                                >
                                    {item.caption}
                                </Typography>
                            )}
                        </Typography>
                    )
                }
            >
                {items}
            </List>

            {/* group divider */}
            <Divider sx={{ mt: 0.25, mb: 1.25 }} />
        </>
    );
};

NavGroup.propTypes = {
    item: PropTypes.object
};

export default NavGroup;
