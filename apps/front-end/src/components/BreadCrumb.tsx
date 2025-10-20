import { Link, useLocation } from 'react-router-dom';
import { convertPathName } from '../utils/convert-path-name';
import useStore from '../state';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const { isMobile } = useStore()

  return (
    <nav id='breadcrumb' className={`text-white ${isMobile ? 'text-xl' : 'text-2xl'} font-smythe`}>
      <ol className="flex">
        <li >
          <Link to="/">Início</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const isPathId = apenasNumeros(value)
          return (
            <li key={to} className="flex items-center ">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="font-semibold">{decodeURIComponent(convertPathName(value))}</span>
              ) : (
                isPathId ?
                  <Link to={to}>{decodeURIComponent(value)}</Link> :
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

function apenasNumeros(str: string) {
  return /^[0-9]+$/.test(str);
}