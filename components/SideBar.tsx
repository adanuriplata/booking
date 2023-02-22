import { type FC } from 'react';

interface menuItem {
  id: string;
  link: string;
  label: string;
}

interface sideBarProps {
  menu: menuItem[];
}

export const SideBar: FC<sideBarProps> = ({ menu }): JSX.Element => {
  return (
    <nav>
      <ul>
        {menu.map((e) => {
          return (
            <li key={e.id}>
              <a href={e.link}>{e.label}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideBar;
