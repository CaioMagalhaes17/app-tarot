import { Button, HSeparator, IconUser, Input, Panel, Text } from "@app/ui";
import { Star, X } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MobileAtendentsListComponent } from "./mobile-list";
import { Pagination } from "./pagination";
import useStore from "../../../state";
import { useMemo } from "react";
import { AtendentType } from "../../../@types/atendent.type";
import { useGetAllServices } from "../../../hooks/services/useGetAllServices";
import { useSearchAtendents } from "../../../hooks/atendents/useSearchAtendents";
import { useMocks } from "../../../utils/config";

// Tipo estendido para dados mockados
type AtendentWithExtras = AtendentType & {
  price: number;
  online: boolean;
  serviceId: string;
};

// Dados mockados
const mockAtendents: AtendentWithExtras[] = [
  {
    id: "1",
    name: "Maria Silva",
    rating: 4.8,
    bio: "Médium especializada em consultas de tarot e cartomancia. Mais de 10 anos de experiência ajudando pessoas a encontrarem respostas.",
    price: 3.99,
    online: true,
    serviceId: "1",
    user: {
      id: "1",
      login: "maria@example.com",
      isAtendent: true,
      permission: "atendent",
      name: "Maria Silva",
      isVerified: true,
      profileImg: "https://i.pravatar.cc/150?img=47",
      createdAt: "2023-01-01"
    },
  },
  {
    id: "2",
    name: "João Santos",
    rating: 4.9,
    bio: "Astrólogo e numerólogo com conhecimento profundo em mapas astrais e previsões personalizadas.",
    price: 4.49,
    online: true,
    serviceId: "2",
    user: {
      id: "2",
      login: "joao@example.com",
      isAtendent: true,
      permission: "atendent",
      name: "João Santos",
      isVerified: true,
      profileImg: "https://i.pravatar.cc/150?img=12",
      createdAt: "2023-02-01"
    },
  },
  {
    id: "3",
    name: "Ana Costa",
    rating: 4.7,
    bio: "Especialista em leitura de cartas, cristalomancia e conexão espiritual. Atendimento humanizado e acolhedor.",
    price: 4.99,
    online: true,
    serviceId: "3",
    user: {
      id: "3",
      login: "ana@example.com",
      isAtendent: true,
      permission: "atendent",
      name: "Ana Costa",
      isVerified: true,
      profileImg: "https://i.pravatar.cc/150?img=45",
      createdAt: "2023-03-01"
    },
  },
  {
    id: "4",
    name: "Carlos Oliveira",
    rating: 5.0,
    bio: "Médium reconhecido internacionalmente. Consultas em português, espanhol e inglês. Especializado em amor e carreira.",
    price: 5.49,
    online: false,
    serviceId: "4",
    user: {
      id: "4",
      login: "carlos@example.com",
      isAtendent: true,
      permission: "atendent",
      name: "Carlos Oliveira",
      isVerified: true,
      profileImg: "https://i.pravatar.cc/150?img=33",
      createdAt: "2023-04-01"
    },
  },
  {
    id: "5",
    name: "Fernanda Lima",
    rating: 4.6,
    bio: "Taróloga intuitiva focada em autoconhecimento e desenvolvimento pessoal. Mais de 5000 consultas realizadas.",
    price: 5.99,
    online: true,
    serviceId: "5",
    user: {
      id: "5",
      login: "fernanda@example.com",
      isAtendent: true,
      permission: "atendent",
      name: "Fernanda Lima",
      isVerified: true,
      profileImg: "https://i.pravatar.cc/150?img=28",
      createdAt: "2023-05-01"
    },
  },
  {
    id: "6",
    name: "Roberto Alves",
    rating: 4.5,
    bio: "Especialista em runas nórdicas e vikings. Consultas profundas sobre destino e propósito de vida.",
    price: 6.49,
    online: true,
    serviceId: "6",
    user: {
      id: "6",
      login: "roberto@example.com",
      isAtendent: true,
      permission: "atendent",
      name: "Roberto Alves",
      isVerified: true,
      profileImg: "https://i.pravatar.cc/150?img=68",
      createdAt: "2023-06-01"
    },
  },
  {
    id: "7",
    name: "Juliana Ferreira",
    rating: 4.9,
    bio: "Médium e psicóloga espiritual. Combina técnicas tradicionais com abordagens modernas para um atendimento completo.",
    price: 6.99,
    online: false,
    serviceId: "1",
    user: {
      id: "7",
      login: "juliana@example.com",
      isAtendent: true,
      permission: "atendent",
      name: "Juliana Ferreira",
      isVerified: true,
      profileImg: "https://i.pravatar.cc/150?img=32",
      createdAt: "2023-07-01"
    },
  },
  {
    id: "8",
    name: "Pedro Martins",
    rating: 4.4,
    bio: "Especialista em búzios e oráculos. Consultas rápidas e eficazes para decisões importantes.",
    price: 7.49,
    online: true,
    serviceId: "1",
    user: {
      id: "8",
      login: "pedro@example.com",
      isAtendent: true,
      permission: "atendent",
      name: "Pedro Martins",
      isVerified: true,
      profileImg: "https://i.pravatar.cc/150?img=51",
      createdAt: "2023-08-01"
    },
  },
];

const priceRanges = [
  { label: "Todos os preços", min: 0, max: 999 },
  { label: "Até R$ 2,99/min", min: 0, max: 2.99 },
  { label: "R$ 3,00 - R$ 4,99/min", min: 3, max: 4.99 },
  { label: "R$ 5,00 - R$ 9,99/min", min: 5, max: 9.99 },
  { label: "Acima de R$ 10,00/min", min: 10, max: 999 },
];

const sortOptions = [
  { value: "rating-desc", label: "Maior avaliação" },
  { value: "rating-asc", label: "Menor avaliação" },
  { value: "name-asc", label: "Nome A-Z" },
  { value: "name-desc", label: "Nome Z-A" },
];

type Filters = {
  search: string;
  minRating: number;
  priceRange: { min: number; max: number };
  serviceId: string;
  onlineOnly: boolean;
  sortBy: string;
};

export function AtendentsSearchPage() {
  const { isMobile } = useStore();
  const navigate = useNavigate();
  const { services, isLoading: isLoadingServices } = useGetAllServices();
  const useMocksFlag = useMocks();

  const [searchParams, setSearchParams] = useSearchParams({
    page: "1",
    search: "",
    minRating: "0",
    priceMin: "0",
    priceMax: "999",
    serviceId: "all",
    onlineOnly: "true",
    sortBy: "rating-desc",
  });

  // Obtém o nome do serviço a partir do serviceId para passar para a API
  const serviceName = useMemo(() => {
    const serviceId = searchParams.get("serviceId");
    if (!serviceId || serviceId === "all" || !services) {
      return undefined;
    }
    const service = services.find(s => s.id === serviceId);
    return service?.name;
  }, [searchParams, services]);

  // Busca da API (quando não está usando mocks)
  const { atendents: apiAtendents, pagination: apiPagination } = useSearchAtendents(
    {
      limit: 6,
      page: Number(searchParams.get("page")) || 1,
    },
    searchParams,
    serviceName
  );

  const filters: Filters = useMemo(() => ({
    search: searchParams.get("search") || "",
    minRating: Number(searchParams.get("minRating")) || 0,
    priceRange: {
      min: Number(searchParams.get("priceMin")) || 0,
      max: Number(searchParams.get("priceMax")) || 999,
    },
    serviceId: searchParams.get("serviceId") || "all",
    onlineOnly: searchParams.get("onlineOnly") === "true",
    sortBy: searchParams.get("sortBy") || "rating-desc",
  }), [searchParams]);

  // Decide entre usar mocks ou dados da API
  // Se usar mocks, aplica os campos extras. Se usar API, tenta adaptar os dados
  const atendentsWithPrices = useMemo(() => {
    if (useMocksFlag) {
      return mockAtendents;
    } else {
      // Se não usar mocks, adapta os dados da API para incluir os campos extras necessários
      // Por enquanto, adiciona valores padrão para campos que não existem na API
      return (apiAtendents || []).map((atendent) => ({
        ...atendent,
        price: 3.99, // Valor padrão - pode ser ajustado quando a API retornar esse campo
        online: true, // Valor padrão - pode ser ajustado quando a API retornar esse campo
        serviceId: searchParams.get("serviceId") || "1", // Valor padrão
      })) as AtendentWithExtras[];
    }
  }, [useMocksFlag, apiAtendents, searchParams]);

  const filteredAtendents = useMemo(() => {
    let filtered = [...atendentsWithPrices];

    // Filtro de busca
    if (filters.search) {
      filtered = filtered.filter(
        (a) =>
          a.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          a.bio.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Filtro de rating
    if (filters.minRating > 0) {
      filtered = filtered.filter((a) => a.rating >= filters.minRating);
    }

    // Filtro de preço
    filtered = filtered.filter(
      (a) => a.price >= filters.priceRange.min && a.price <= filters.priceRange.max
    );

    // Filtro de serviço
    if (filters.serviceId !== "all") {
      filtered = filtered.filter((a) => a.serviceId === filters.serviceId);
    }

    // Filtro online
    if (filters.onlineOnly) {
      filtered = filtered.filter((a) => a.online);
    }

    // Ordenação
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "rating-desc":
          return b.rating - a.rating;
        case "rating-asc":
          return a.rating - b.rating;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [filters, atendentsWithPrices]);

  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = 6;

  // Se usar mocks, calcula paginação localmente. Se usar API, usa a paginação da API
  const totalPages = useMocksFlag
    ? Math.ceil(filteredAtendents.length / itemsPerPage)
    : (apiPagination?.pages || 1);

  const paginatedAtendents = useMocksFlag
    ? filteredAtendents.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : filteredAtendents; // API já retorna paginado, então aplicamos apenas os filtros locais

  const updateFilter = (key: string, value: string | number | boolean) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === "" || value === "all" || value === false || value === 0) {
      newParams.delete(key);
    } else {
      newParams.set(key, String(value));
    }
    newParams.set("page", "1"); // Reset to page 1 when filtering
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({ page: "1" });
  };

  const hasActiveFilters =
    filters.search ||
    filters.minRating > 0 ||
    filters.priceRange.min > 0 ||
    filters.priceRange.max < 999 ||
    filters.serviceId !== "all" ||
    filters.onlineOnly;

  if (isMobile) {
    return <MobileAtendentsListComponent atendents={paginatedAtendents} setSearchParams={setSearchParams} page={currentPage} pages={totalPages} />;
  }

  return (
    <div className="min-h-screen max-w-[1400px] mx-auto px-4 py-8">
      <Panel className="mb-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="text-white font-smythe text-6xl whitespace-nowrap px-4">
            Atendentes
          </span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-8">
          <Text as="p" className="text-xl text-white-dark">
            Escolha o Atendente que mais combina com seu momento, entre em contato e receba sua orientação espiritual personalizada.
          </Text>
        </div>
      </Panel>

      <div className="flex gap-6">
        {/* Sidebar de Filtros */}
        <Panel className="w-80 h-fit sticky top-4 hidden lg:block">
          <div className="flex items-center justify-between mb-6">
            <Text className="text-2xl font-bold text-white" as="h2">
              Filtros
            </Text>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-primary hover:underline flex items-center gap-1"
              >
                <X size={16} />
                Limpar
              </button>
            )}
          </div>
          <HSeparator />

          <div className="space-y-6 mt-6">
            {/* Busca */}
            <div>
              <Text className="text-white font-semibold mb-2 block" as="p">
                Buscar
              </Text>
              <Input
                type="text"
                placeholder="Nome ou descrição..."
                value={filters.search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFilter("search", e.target.value)}
                className="w-full"
              />
            </div>

            {/* Avaliação Mínima */}
            <div>
              <Text className="text-white font-semibold mb-2 block" as="p">
                Avaliação Mínima
              </Text>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.1"
                  value={filters.minRating}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFilter("minRating", e.target.value)}
                  className="flex-1"
                />
                <span className="text-white text-sm w-12 text-right">
                  {filters.minRating.toFixed(1)}★
                </span>
              </div>
            </div>

            {/* Faixa de Preço */}
            <div>
              <Text className="text-white font-semibold mb-2 block" as="p">
                Preço por Minuto
              </Text>
              <select
                value={`${filters.priceRange.min}-${filters.priceRange.max}`}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  const [min, max] = e.target.value.split("-").map(Number);
                  updateFilter("priceMin", min);
                  updateFilter("priceMax", max);
                }}
                className="form-select-custom w-full bg-black"
              >
                {priceRanges.map((range, index) => (
                  <option key={index} value={`${range.min}-${range.max}`}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Serviço */}
            <div>
              <Text className="text-white font-semibold mb-2 block" as="p">
                Serviço
              </Text>
              <select
                value={filters.serviceId}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateFilter("serviceId", e.target.value)}
                className="form-select-custom w-full bg-black"
                disabled={isLoadingServices}
              >
                <option value="all">Todos os serviços</option>
                {services?.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Apenas Online */}
            <div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.onlineOnly}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFilter("onlineOnly", e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300"
                />
                <Text className="text-white" as="span">
                  Apenas Online
                </Text>
              </label>
            </div>
          </div>
        </Panel>

        {/* Conteúdo Principal */}
        <div className="flex-1">
          {/* Barra de Ordenação e Resultados */}
          <Panel className="mb-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <Text className="text-white" as="span">
                  {filteredAtendents.length} atendente{filteredAtendents.length !== 1 ? "s" : ""} encontrado{filteredAtendents.length !== 1 ? "s" : ""}
                </Text>
              </div>

              <div className="flex items-center gap-3">
                <Text className="text-white-dark" as="p">
                  Ordenar por:
                </Text>
                <select
                  value={filters.sortBy}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateFilter("sortBy", e.target.value)}
                  className="form-select-custom bg-black"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </Panel>

          {/* Grid de Atendentes */}
          {paginatedAtendents.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
                {paginatedAtendents.map((atendent) => (
                  <Panel
                    key={atendent.id}
                    className="hover:shadow-lg transition-all duration-300 cursor-pointer group"
                    style={{ backgroundImage: 'linear-gradient(360deg, #22164696 0%, #12133e5e 60%)' }}
                  >
                    <div className="flex flex-col h-full p-5">
                      {/* Header do Card */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="relative flex-shrink-0">
                          <img
                            src={atendent.user.profileImg}
                            alt={atendent.name}
                            className="w-20 h-20 rounded-full object-cover border-2 border-primary"
                          />
                          {atendent.online && (
                            <div className="absolute bottom-0 right-0 w-4 h-4 bg-success rounded-full border-2 border-dark"></div>
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <Text className="text-white text-xl font-bold mb-1 truncate" as="h3">
                            {atendent.name}
                          </Text>
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, index) => (
                              <Star
                                key={index}
                                className={
                                  index < Math.floor(atendent.rating)
                                    ? "fill-yellow-500 text-yellow-500"
                                    : "fill-none text-gray-400"
                                }
                                size={14}
                              />
                            ))}
                            <Text className="text-white-dark text-sm ml-1" as="span">
                              {atendent.rating.toFixed(1)}
                            </Text>
                          </div>
                          <Text className="text-success text-sm font-semibold" as="span">
                            R$ {atendent.price.toFixed(2)}/min
                          </Text>
                        </div>
                      </div>
                      {/* Bio */}
                      <Text className="text-white-dark text-sm mb-4 line-clamp-3 flex-1" as="p">
                        {atendent.bio}
                      </Text>

                      {/* Status e Botão */}
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                        <Text
                          className={`text-xs px-2 py-1 rounded-full ${atendent.online
                            ? "bg-success/20 text-success border border-success/30"
                            : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                            }`}
                          as="span"
                        >
                          {atendent.online ? "Online" : "Offline"}
                        </Text>

                        <Button
                          onClick={() => navigate(`/atendents/profile/${atendent.id}`)}
                          className="btn-sm btn-outline-primary"
                        >
                          <IconUser />
                          <span className="ml-2">Ver Perfil</span>
                        </Button>
                      </div>
                    </div>
                  </Panel>
                ))}
              </div>

              {/* Paginação */}
              {totalPages > 1 && (
                <Pagination
                  pages={totalPages}
                  currentPage={currentPage}
                  setSearchParams={setSearchParams}
                />
              )}
            </>
          ) : (
            <Panel className="text-center py-12">
              <Text className="text-white-dark text-xl" as="p">
                Nenhum atendente encontrado com os filtros selecionados.
              </Text>
              {hasActiveFilters && (
                <Button onClick={clearFilters} className="mt-4 btn-outline-primary">
                  Limpar Filtros
                </Button>
              )}
            </Panel>
          )}
        </div>
      </div>
    </div>
  );
}
