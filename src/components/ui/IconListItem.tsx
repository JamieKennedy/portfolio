import { ReactNode } from 'react';
import { IconType } from 'react-icons';

interface IIconListItemProps {
    children: ReactNode;
    className?: string;
    icon: ReactNode;
}

const IconListItem: React.FunctionComponent<IIconListItemProps> = ({ icon, children, className }) => {
    return (
        <li className={`flex flex-row items-center ${className}`}>
            {icon}
            {children}
        </li>
    );
};

export default IconListItem;
