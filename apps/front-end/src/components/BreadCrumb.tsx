import { Link, useLocation } from 'react-router-dom';
import { convertPathName } from '../utils/convert-path-name';
import useStore from '../state';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const { isMobile } = useStore()

  return (
    <nav className={`text-white ${isMobile ? 'text-xl' : 'text-4xl'} mt-5 font-smythe`}>
      <ol className="flex space-x-2 ">
        <li >
          <Link to="/">Início</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={to} className="flex items-center ">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="font-semibold">{decodeURIComponent(convertPathName(value))}</span>
              ) : (
                <Link to={to}>{decodeURIComponent(convertPathName(value))}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;