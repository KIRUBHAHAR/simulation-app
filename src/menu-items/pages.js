// assets
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import BoyOutlinedIcon from '@mui/icons-material/BoyOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

// constant
const icons = {
    CategoryOutlinedIcon,
    BiotechOutlinedIcon,
    FactoryOutlinedIcon,
    PriceChangeOutlinedIcon,
    BoyOutlinedIcon,
    AccountBalanceWalletOutlinedIcon
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'simulations',
    title: 'Simulations',
    caption: 'Simulation Caption',
    type: 'group',
    children: [
        {
            id: 'department',
            title: 'Department',
            type: 'collapse',
            icon: icons.CategoryOutlinedIcon,

            children: [
                {
                    id: 'research_and_development',
                    title: 'Research and Development',
                    type: 'item',
                    url: '/simulations/department/researchAndDevelopment',
                    icon: icons.BiotechOutlinedIcon,
                    target: true
                },
                {
                    id: 'factory_and_production',
                    title: 'Factory and Production',
                    type: 'item',
                    url: '/pages/register/register3',
                    icon: icons.FactoryOutlinedIcon,
                    target: true
                },
                {
                    id: 'pricing_and_promo',
                    title: 'Pricing and Promo',
                    type: 'item',
                    url: '/pages/register/register3',
                    icon: icons.PriceChangeOutlinedIcon,
                    target: true
                },
                {
                    id: 'human_resources',
                    title: 'Human Resources',
                    type: 'item',
                    url: '/pages/register/register3',
                    icon: icons.BoyOutlinedIcon,
                    target: true
                },
                {
                    id: 'finance',
                    title: 'Finance',
                    type: 'item',
                    url: '/pages/register/register3',
                    icon: icons.AccountBalanceWalletOutlinedIcon,
                    target: true
                }
            ]
        }
    ]
};

export default pages;
