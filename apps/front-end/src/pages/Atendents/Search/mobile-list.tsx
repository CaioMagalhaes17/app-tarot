import { Button, HSeparator, IconUser, Input, Panel, Text } from "@app/ui";
import { Star } from "lucide-react";
import { SetURLSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import { AtendentType } from "../../../@types/atendent.type";
import { Pagination } from "./pagination";
import { useGetAllServices } from "../../../hooks/services/useGetAllServices";
import { useMemo } from "react";

// Tipo estendido para dados mockados (mesmo do index.tsx)
type AtendentWithExtras = AtendentType & {
  price: number;
  online: boolean;
  serviceId: string;
};

type MobileAtendentsListComponentProps = {
  pages?: number;
  page: number;
  setSearchParams: SetURLSearchParams;
  atendents?: AtendentWithExtras[];
};

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

export function MobileAtendentsListComponent({ 
  atendents, 
  setSearchParams, 
  page, 
  pages 
}: MobileAtendentsListComponentProps) {
  const navigate = useNavigate();
  const { services, isLoading: isLoadingServices } = useGetAllServices();
  const [searchParams] = useSearchParams();

  const filters = useMemo(() => ({
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

  const updateFilter = (key: string, value: string | number | boolean) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === "" || value === "all" || value === false || value === 0) {
      newParams.delete(key);
    } else {
      newParams.set(key, String(value));
    }
    newParams.set("page", "1");
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

  return (
    <div className="min-h-screen p-4">
      <Panel className="mb-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="text-white font-smythe text-5xl whitespace-nowrap px-2">
            Atendentes
          </span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        
        <div className="text-center mb-6">
          <Text className="text-lg text-white-dark">
            Escolha o Atendente que mais combina com seu momento
          </Text>
        </div>
      </Panel>

      {/* Filtros Mobile */}
      <Panel className="mb-6">
        <div className="space-y-4">
          {/* Busca */}
          <div>
            <Input
              type="text"
              placeholder="Pesquisar por nome ou descrição..."
              value={filters.search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFilter("search", e.target.value)}
              className="w-full"
            />
          </div>

          {/* Filtros em linha */}
          <div className="grid grid-cols-2 gap-3">
            {/* Avaliação Mínima */}
            <div>
              <Text className="text-white text-sm font-semibold mb-1 block" as="label">
                Avaliação Min.
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
                <span className="text-white text-xs w-8 text-right">
                  {filters.minRating.toFixed(1)}★
                </span>
              </div>
            </div>

            {/* Preço */}
            <div>
              <Text className="text-white text-sm font-semibold mb-1 block" as="label">
                Preço
              </Text>
              <select
                value={`${filters.priceRange.min}-${filters.priceRange.max}`}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  const [min, max] = e.target.value.split("-").map(Number);
                  updateFilter("priceMin", min);
                  updateFilter("priceMax", max);
                }}
                className="form-select-custom w-full text-sm"
              >
                {priceRanges.map((range, index) => (
                  <option key={index} value={`${range.min}-${range.max}`}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Serviço e Online */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Text className="text-white text-sm font-semibold mb-1 block" as="label">
                Serviço
              </Text>
              <select
                value={filters.serviceId}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateFilter("serviceId", e.target.value)}
                className="form-select-custom w-full text-sm"
                disabled={isLoadingServices}
              >
                <option value="all">Todos</option>
                {services?.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.onlineOnly}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFilter("onlineOnly", e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300"
                />
                <Text className="text-white text-sm" as="span">
                  Apenas Online
                </Text>
              </label>
            </div>
          </div>

          {/* Ordenação */}
          <div>
            <Text className="text-white text-sm font-semibold mb-1 block" as="label">
              Ordenar por
            </Text>
            <select
              value={filters.sortBy}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateFilter("sortBy", e.target.value)}
              className="form-select-custom w-full text-sm"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Limpar Filtros */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-primary hover:underline w-full text-center py-2"
            >
              Limpar Filtros
            </button>
          )}

          {/* Contador de resultados */}
          <div className="pt-2 border-t border-white/10">
            <Text className="text-white text-sm" as="span">
              {atendents?.length || 0} atendente{(atendents?.length || 0) !== 1 ? "s" : ""} encontrado{(atendents?.length || 0) !== 1 ? "s" : ""}
            </Text>
          </div>
        </div>
      </Panel>

      {/* Lista de Atendentes */}
      {atendents && atendents.length > 0 ? (
        <>
          <div className="space-y-4 mb-6">
            {atendents.map((atendent) => (
              <Panel
                key={atendent.id}
                className="hover:shadow-lg transition-all duration-300"
                style={{ backgroundImage: 'linear-gradient(360deg, #22164696 0%, #12133e5e 60%)' }}
              >
                <div className="flex flex-col p-4">
                  {/* Header do Card */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative flex-shrink-0">
                      <img
                        src={atendent.user.profileImg}
                        alt={atendent.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary"
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
                        <Text className="text-white-dark text-xs ml-1" as="span">
                          {atendent.rating.toFixed(1)}
                        </Text>
                      </div>
                      <Text className="text-success text-sm font-semibold" as="span">
                        R$ {atendent.price.toFixed(2)}/min
                      </Text>
                    </div>
                  </div>

                  {/* Serviço */}
                  <div className="mb-3">
                    <Text className="text-white-dark text-sm" as="span">
                      🔮 {services?.find(s => s.id === atendent.serviceId)?.name || "Serviço"}
                    </Text>
                  </div>

                  {/* Bio */}
                  <Text className="text-white-dark text-sm mb-4 line-clamp-2" as="p">
                    {atendent.bio}
                  </Text>

                  {/* Status e Botão */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <Text
                      className={`text-xs px-2 py-1 rounded-full ${
                        atendent.online
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
                      <IconUser size={16} />
                      <span className="ml-2">Ver Perfil</span>
                    </Button>
                  </div>
                </div>
              </Panel>
            ))}
          </div>

          {/* Paginação */}
          {pages && pages > 1 && (
            <Pagination
              pages={pages}
              currentPage={page}
              setSearchParams={setSearchParams}
            />
          )}
        </>
      ) : (
        <Panel className="text-center py-12">
          <Text className="text-white-dark text-lg" as="p">
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
  );
}
