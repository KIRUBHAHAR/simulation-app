// assets
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';

// constant
const icons = {
    InfoOutlinedIcon,
    TravelExploreOutlinedIcon
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'info',
            title: 'Info',
            type: 'item',
            url: '/utils/util-typography',
            icon: icons.InfoOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'outlook',
            title: 'Outlook',
            type: 'item',
            url: '/utils/util-color',
            icon: icons.TravelExploreOutlinedIcon,
            breadcrumbs: false
        }
    ]
};

export default utilities;
