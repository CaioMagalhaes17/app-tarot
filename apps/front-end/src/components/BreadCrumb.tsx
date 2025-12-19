import { Link, useLocation } from 'react-router-dom';
import { convertPathName } from '../utils/convert-path-name';
import useStore from '../state';
import { useGetAtendentById } from '../hooks/atendents/useGetAtendentById';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const { isMobile } = useStore()
  
  // Detecta se estamos na rota de perfil do atendente
  const atendentProfileIndex = pathnames.findIndex((value, index) => 
    index > 0 && pathnames[index - 1] === 'atendents' && value === 'profile'
  );
  const atendentId = atendentProfileIndex !== -1 && pathnames[atendentProfileIndex + 1] 
    ? pathnames[atendentProfileIndex + 1] 
    : undefined;
  
  const { atendent } = useGetAtendentById(atendentId);

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
          
          // Se for o ID do atendente e temos o nome, substitui pelo nome
          const isAtendentId = index === atendentProfileIndex + 1 && atendentId === value;
          const displayValue = isAtendentId && atendent 
            ? atendent.name 
            : isPathId 
              ? value 
              : convertPathName(value);
          
          return (
            <li key={to} className="flex items-center ">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="font-semibold">{decodeURIComponent(displayValue)}</span>
              ) : (
                <Link to={to}>{decodeURIComponent(displayValue)}</Link>
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