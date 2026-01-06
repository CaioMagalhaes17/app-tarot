// Configuração global da aplicação
let config: { USE_MOCKS: boolean } | null = null;

/**
 * Carrega a configuração do arquivo env.json
 * Por padrão, se não conseguir carregar, retorna USE_MOCKS = false
 */
export async function loadConfig(): Promise<{ USE_MOCKS: boolean } | null> {
  if (config !== null) {
    return config;
  }

  try {
    const response = await fetch('/env.json');
    if (response.ok) {
      config = await response.json();
      return config;
    }
  } catch (error) {
    console.warn('Não foi possível carregar env.json, usando configurações padrão', error);
  }

  // Configuração padrão caso não consiga carregar o arquivo
  config = { USE_MOCKS: false };
  return config;
}

/**
 * Retorna o valor de USE_MOCKS
 * Se a config ainda não foi carregada, retorna false por padrão
 */
export function useMocks(): boolean {
  return config?.USE_MOCKS ?? false;
}

/**
 * Inicializa a configuração (deve ser chamado no início da aplicação)
 */
export async function initConfig(): Promise<void> {
  await loadConfig();
}

