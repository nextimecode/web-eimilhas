import { airports } from './airports'

export type Airport = typeof airports[number]

export type FormData = {
  adultos: number
  criancas: number
  bebes: number
  origem: Airport | null
  destino: Airport | null
  ida: Date | null
  volta: Date | null
  soIda: boolean
}

// Nomes em português das cidades mais procuradas (chave: "cidade|país" da base)
const CIDADES_PT: Record<string, string> = {
  'Sao Paulo|Brazil': 'São Paulo',
  'Rio De Janeiro|Brazil': 'Rio de Janeiro',
  'Brasilia|Brazil': 'Brasília',
  'Goiania|Brazil': 'Goiânia',
  'Belem|Brazil': 'Belém',
  'Maceio|Brazil': 'Maceió',
  'Vitoria|Brazil': 'Vitória',
  'Florianopolis|Brazil': 'Florianópolis',
  'Cuiaba|Brazil': 'Cuiabá',
  'Sao Luis|Brazil': 'São Luís',
  'Joao Pessoa|Brazil': 'João Pessoa',
  'Macapa|Brazil': 'Macapá',
  'Rome|Italy': 'Roma',
  'Milan|Italy': 'Milão',
  'Venice|Italy': 'Veneza',
  'Florence|Italy': 'Florença',
  'Naples|Italy': 'Nápoles',
  'London|United Kingdom': 'Londres',
  'Edinburgh|United Kingdom': 'Edimburgo',
  'Lisbon|Portugal': 'Lisboa',
  'Porto|Portugal': 'Porto',
  'Seville|Spain': 'Sevilha',
  'Munich|Germany': 'Munique',
  'Frankfurt|Germany': 'Frankfurt',
  'Berlin|Germany': 'Berlim',
  'Cologne|Germany': 'Colônia',
  'Vienna|Austria': 'Viena',
  'Zurich|Switzerland': 'Zurique',
  'Geneva|Switzerland': 'Genebra',
  'Brussels|Belgium': 'Bruxelas',
  'Athens|Greece': 'Atenas',
  'Prague|Czech Republic': 'Praga',
  'Warsaw|Poland': 'Varsóvia',
  'Copenhagen|Denmark': 'Copenhague',
  'Stockholm|Sweden': 'Estocolmo',
  'Moscow|Russia': 'Moscou',
  'New York|United States': 'Nova York',
  'New Orleans|United States': 'Nova Orleans',
  'Philadelphia|United States': 'Filadélfia',
  'Mexico City|Mexico': 'Cidade do México',
  'Cancun|Mexico': 'Cancún',
  'Bogota|Colombia': 'Bogotá',
  'Cape Town|South Africa': 'Cidade do Cabo',
  'Tokyo|Japan': 'Tóquio',
  'Beijing|China': 'Pequim',
  'Dubai|United Arab Emirates': 'Dubai'
}

const PAISES_PT: Record<string, string> = {
  Brazil: 'Brasil',
  Argentina: 'Argentina',
  Chile: 'Chile',
  Uruguay: 'Uruguai',
  Paraguay: 'Paraguai',
  Peru: 'Peru',
  Colombia: 'Colômbia',
  Mexico: 'México',
  'United States': 'Estados Unidos',
  Canada: 'Canadá',
  Portugal: 'Portugal',
  Spain: 'Espanha',
  France: 'França',
  Italy: 'Itália',
  Germany: 'Alemanha',
  'United Kingdom': 'Reino Unido',
  Ireland: 'Irlanda',
  Netherlands: 'Holanda',
  Belgium: 'Bélgica',
  Switzerland: 'Suíça',
  Austria: 'Áustria',
  Greece: 'Grécia',
  'Czech Republic': 'República Tcheca',
  Poland: 'Polônia',
  Denmark: 'Dinamarca',
  Sweden: 'Suécia',
  Norway: 'Noruega',
  Russia: 'Rússia',
  Turkey: 'Turquia',
  Egypt: 'Egito',
  'South Africa': 'África do Sul',
  Japan: 'Japão',
  China: 'China',
  'United Arab Emirates': 'Emirados Árabes Unidos',
  Australia: 'Austrália',
  'New Zealand': 'Nova Zelândia'
}

export const cidadePt = (a: Airport): string =>
  CIDADES_PT[`${a.city}|${a.country}`] ?? a.city.trim()

export const paisPt = (a: Airport): string =>
  PAISES_PT[a.country] ?? a.country.trim()

export const formatAirport = (a: Airport): string =>
  a.IATA === 'TODOS'
    ? `Todos os aeroportos - ${cidadePt(a)}`
    : `${a.IATA} - ${cidadePt(a)}`

const normalizar = (s: string): string =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim()

// Pré-calcula os textos de busca uma única vez (~6 mil aeroportos)
const indice = airports.map((a) => {
  const cidades = [normalizar(a.city), normalizar(cidadePt(a))]
  const paises = [normalizar(a.country), normalizar(paisPt(a))]
  const texto = normalizar([a.IATA, a.city, cidadePt(a), a.name, a.country, paisPt(a)].join(' '))
  return { airport: a, iata: normalizar(a.IATA), cidades, paises, texto, palavras: texto.split(/[^a-z0-9]+/) }
})

const LIMITE_RESULTADOS = 50

// Menor pontuação aparece primeiro; null = não corresponde
const pontuar = (item: typeof indice[number], busca: string): number | null => {
  if (!item.texto.includes(busca)) return null
  if (item.iata === busca) return 0
  if (item.cidades.some((c) => c === busca)) return 1
  if (item.cidades.some((c) => c.startsWith(busca))) return 2
  if (item.paises.some((p) => p.startsWith(busca))) return 3
  if (item.palavras.some((w) => w.startsWith(busca))) return 4
  return 5
}

export const filtrarAeroportos = (_options: Airport[], { inputValue }: { inputValue: string }): Airport[] => {
  const busca = normalizar(inputValue)
  if (!busca) return []

  const pontuados: { airport: Airport, pontos: number }[] = []
  for (const item of indice) {
    const pontos = pontuar(item, busca)
    if (pontos !== null) pontuados.push({ airport: item.airport, pontos })
  }

  return pontuados
    .sort((a, b) => a.pontos - b.pontos)
    .slice(0, LIMITE_RESULTADOS)
    .map((p) => p.airport)
}

const formatarData = (d: Date): string => d.toLocaleDateString('pt-BR')

export const buildMensagem = (f: FormData): string => {
  const passageiros = [`*${f.adultos} adulto(s)*`]
  if (f.criancas > 0) passageiros.push(`*${f.criancas} criança(s)*`)
  if (f.bebes > 0) passageiros.push(`*${f.bebes} bebê(s)*`)

  return [
    'Olá, EiMilhas!',
    'Gostaria de solicitar propostas de passagens.',
    `Origem: *${formatAirport(f.origem)}*`,
    `Destino: *${formatAirport(f.destino)}*`,
    `Ida: *${formatarData(f.ida)}*`,
    f.soIda ? 'Tipo: *Só ida*' : `Volta: *${formatarData(f.volta)}*`,
    `Passageiros: ${passageiros.join(', ')}`
  ].join('\n')
}

export const buildWhatsappLink = (baseUrl: string, mensagem: string): string =>
  `${baseUrl}&text=${encodeURIComponent(mensagem)}`
