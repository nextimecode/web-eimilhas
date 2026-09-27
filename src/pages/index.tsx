import React from 'react'
import BemVindo from '../components/organisms/bemvindo'
import Depoimentos from '../components/organisms/depoimentos'
import Encontre from '../components/organisms/encontre'
import Faq from '../components/organisms/faq'
// import Numeros from '../components/organisms/numeros'
import Promocoes from '../components/organisms/promocoes'
import PageTemplate from '../components/templates/pageTemplate'
import Section from '../components/templates/section'

export const whatsappUrl = 'https://api.whatsapp.com/send?phone=5531988715354'
export const instagramUrl = 'https://www.instagram.com/eimilhas/'
export const emailUrl = 'mailto:eimilhaspassagens@gmail.com'
export const facebookUrl = 'https://www.facebook.com/eimilhas/'

const listNavLinks = [
  {
    navLink: {
      href: '#home',
      label: 'Home'
    }
  },
  {
    navLink: {
      href: '#promocoes',
      label: 'Promoções'
    }
  },
  {
    navLink: {
      href: '#',
      label: 'A Empresa',
      items: [
        {
          navLink: {
            href: '#depoimentos',
            label: 'O que os clientes dizem?'
          }
        },
        {
          navLink: {
            href: '#numeros',
            label: 'Números da Empresa'
          }
        }
      ]
    }
  },
  {
    navLink: {
      href: '#faq',
      label: 'FAQ'
    }
  }
]

const formasPagamentoIconPath = 'assets/img/pagamentos'
const formasPagamento = [
  {
    card: {
      title: 'Boleto',
      imageIcon: `${formasPagamentoIconPath}/boleto.png`,
      subtitle: '5% OFF'
    }
  },
  {
    card: {
      title: 'PIX',
      imageIcon: `${formasPagamentoIconPath}/pix.png`,
      subtitle: '5% OFF'
    }
  },
  {
    card: {
      title: 'TED',
      imageIcon: `${formasPagamentoIconPath}/ted.png`,
      subtitle: '5% OFF'
    }
  },
  {
    card: {
      title: 'Cartão',
      imageIcon: `${formasPagamentoIconPath}/cartao.png`,
      subtitle: 'em até 12x'
    }
  }
]

const pathLugares = 'assets/img/lugares/fotos'
const promocoes = [
  {
    promocao: {
      foto: `${pathLugares}/espanha.jpeg`,
      localEspecifico: 'Espanha',
      localGenerico: 'Europa',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/portugal.jpeg`,
      localEspecifico: 'Portugal',
      localGenerico: 'Europa',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/belgica.jpeg`,
      localEspecifico: 'Bélgica',
      localGenerico: 'Europa',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/holanda.jpeg`,
      localEspecifico: 'Holanda',
      localGenerico: 'Europa',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/paris.jpg`,
      localEspecifico: 'França',
      localGenerico: 'Europa',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/londres.jpg`,
      localEspecifico: 'Inglaterra',
      localGenerico: 'Europa',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/turquia.png`,
      localEspecifico: 'Turquia',
      localGenerico: 'Europa',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/grecia.png`,
      localEspecifico: 'Grécia',
      localGenerico: 'Europa',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/alemanha.png`,
      localEspecifico: 'Alemanha',
      localGenerico: 'Europa',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/roma.jpg`,
      localEspecifico: 'Itália',
      localGenerico: 'Europa',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/ny.jpg`,
      localEspecifico: 'Estados Unidos',
      localGenerico: 'AMERICA DO NORTE',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/japao.jpeg`,
      localEspecifico: 'Japão',
      localGenerico: 'Ásia',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/malasia.jpeg`,
      localEspecifico: 'Malásia',
      localGenerico: 'Ásia',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/tailandia.jpeg`,
      localEspecifico: 'Tailândia',
      localGenerico: 'Ásia',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/indonesia.jpeg`,
      localEspecifico: 'Indonésia',
      localGenerico: 'Ásia',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/catar.jpeg`,
      localEspecifico: 'Catar',
      localGenerico: 'Ásia',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/africadosul.png`,
      localEspecifico: 'África do Sul',
      localGenerico: 'África',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/marrocos.png`,
      localEspecifico: 'Marrocos',
      localGenerico: 'África',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/egito.png`,
      localEspecifico: 'Egito',
      localGenerico: 'África',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/colombia.png`,
      localEspecifico: 'Colômbia',
      localGenerico: 'AMÉRICA DO SUL',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/peru.png`,
      localEspecifico: 'Peru',
      localGenerico: 'AMÉRICA DO SUL',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/uruguai.png`,
      localEspecifico: 'URUGUAI',
      localGenerico: 'AMÉRICA DO SUL',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/chile.png`,
      localEspecifico: 'Chile',
      localGenerico: 'AMÉRICA DO SUL',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/argentina.png`,
      localEspecifico: 'ARGENTINA',
      localGenerico: 'AMÉRICA DO SUL',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/canada.png`,
      localEspecifico: 'Canadá',
      localGenerico: 'AMÉRICA DO NORTE',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/mexico.png`,
      localEspecifico: 'México',
      localGenerico: 'AMÉRICA DO NORTE',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  },
  {
    promocao: {
      foto: `${pathLugares}/caribe.png`,
      localEspecifico: 'Caribe',
      localGenerico: 'AMÉRICA CENTRAL',
      artigo: 'a',
      preco: 'a consultar',
      trecho: ''
    }
  }
]

const pathAvatars = 'assets/img/avatars'
const depoimentos = [
  {
    depoimento: {
      foto: `${pathAvatars}/pedro_duarte.png`,
      nome: 'Pedro Duarte',
      profissao: 'Engenheiro de Software',
      texto: 'Tive a oportunidade de viajar com EiMilhas várias vezes, sempre tive um ótimo atendimento e principalmente saber que estou economizando.'
    }
  },
  {
    depoimento: {
      foto: `${pathAvatars}/artur.jpg`,
      nome: 'Artur',
      profissao: 'Engenheiro Eletricista',
      texto: 'Viajo frequentemente para o exterior e só compro passagens com o EiMilhas. Ganho flexibilidade e comodidade: todo processo de compra e problemas com a passagem ele resolve! Além de ser super barato! Já indiquei para toda minha família, e todos compram pelo EiMilhas. Recomendo fortemente!'
    }
  },
  {
    depoimento: {
      foto: `${pathAvatars}/bruno.jpg`,
      nome: 'Bruno',
      profissao: 'Gestão Comercial',
      texto: 'Excelente experiência, já viajei 6 vezes pela EiMilhas, sempre bem assessorado e nenhum problema a relatar, fora o preço que é um dos melhores do mercado, ou seja, só coisas boas! Indico demais.'
    }
  },
  {
    depoimento: {
      foto: `${pathAvatars}/clah_campos.jpg`,
      nome: 'Clah Campos',
      profissao: 'Digital Influencer',
      texto: 'Amei a experiência com a EiMilhas , preço excelente, atendimento rápido e mto atencioso, indico pra todo mundo!'
    }
  },
  {
    depoimento: {
      foto: `${pathAvatars}/day.png`,
      nome: 'Dayanne Melgaço',
      profissao: 'Marketing',
      texto: 'Os preços são ótimos e o atendimento do Diego é excelente. Ele me deu todo suporte e garantia da compra, mesmo realizando-as no meio de uma pandemia. Me senti segura, garantida e ainda economizei bastante comprando com a EiMilhas.'
    }
  }
]

const pathFaqImg = 'assets/img/faq'
const frequentQuestions = [
  {
    question: {
      label: 'Taxas de cancelamento e remarcação.',
      answer:
        <>
          <div className="mb-3">
            <b>TAP:</b>
            <ul>
              <li>
                Cancelamento: €120,00 euros por passageiro.
              </li>
              <li>
                Remarcação: 50 euros mais diferença de pontos (milhas ou dinheiro), se houver.
              </li>
              <li>
                Vôos alterados ou cancelados pela companhia, a remarcação ou o cancelamento são gratuitos, porém o reembolso das taxas se perde €25 euros da taxa de emissão por trecho. e as taxas aeroportuárias são reembolsadas em algumas situações em até 12 meses.
              </li>
            </ul>
          </div>
          <div className="mb-3">
            <b>GOL:</b>
            <ul>
              <li>
                Cancelamento nacional: R$ 300,00 reais.
              </li>
              <li>
                Cancelamento internacional: pode ser $150 dólares, $300 dólares ou até não reembolsado. Varia de vôo para vôo.
              </li>
              <li>
                Remarcação: <span className="text-red">não há remarcação com milhas, somente cancelamentos.</span>
              </li>
              <li>
                Vôos alterados ou cancelados pela companhia, a remarcação ou o cancelamento são gratuitos. As taxas aeroportuárias são reembolsadas em algumas situações em até 12 meses.
              </li>
            </ul>
          </div>
          <div className="mb-3">
            <b>AZUL:</b>
            <ul>
              <li>
                Cancelamento nacional: R$ 300,00 reais por trecho mais diferença tarifária (milhas ou dinheiro), se houver.
              </li>
              <li>
                Cancelamento internacional: $150 dólares mais a diferença tarifária (milhas os dinheiro), se houver.
              </li>
              <li>
                Remarcação:
              </li>
              <li>
                Vôos alterados ou cancelados pela companhia, a remarcação ou o cancelamento são gratuitos, porém o reembolso das taxas se perde r$ 27,90 da taxa de emissão por trecho. e as taxas aeroportuárias são reembolsadas em algumas situações em até 12 meses.
              </li>
            </ul>
          </div>
          <div className="mb-3">
            <b>LATAM:</b>
            <ul>
              <li>
                Cancelamento nacional: R$ 250,00 reais mais diferença tarifária, se houver.
              </li>
              <li>
                Cancelamento internacional: voos para os EUA, $200 dólares a remarcação + a diferença tarifária, se houver.
              </li>
              <li>
                Remarcação: $150 dólares + a diferença tarifária, se houver.
              </li>
              <li>
                Vôos alterados ou cancelados pela companhia, a remarcação ou o cancelamento são gratuitos, porém o reembolso das taxas se perde r$ 17,00 da taxa de emissão por trecho para vôos nacionais e $20 doláres por trecho para vôos internacionais e as taxas aeroportuárias são reembolsadas em algumas situações em até 12 meses.
              </li>
              <li>
                Cancelamento em até 24hrs é cobrado o valor de r$ 80,00 reais + a taxa de emissão que varia de conpanhia para companhia.
              </li>
              <li>
                Todas as taxas internacionais são considerados o dólar ou o euro turismo + iof (6,38%) + 5% da variação cambial. Pagamento no cartão de crédito tem um acréscimo de 5% do preço final.
              </li>
            </ul>
          </div>
        </>
    }
  },
  {
    question: {
      label: 'Preço das malas.',
      answer:
        <>
          <p>
            <b>Nacionais:</b>
          </p>
          <p>
            - Latam: 100 a 140 reais (DEPENDE DO TRECHO E QUANDO COLOCA).
          </p>
          <p>
            - Azul: 90 ou 120 reais (DEPENDE DO TRECHO E QUANDO COLOCA).
          </p>
          <p>
            - Gol: 80 a 100 reais
          </p>
          <p>
            <b>Internacionais:</b>
          </p>
          <p>
            140 a 300 reais (Azul, Latam e GOL) para a segunda mala (a primeira já é inclusa, dependendo da companhia, até duas)
          </p>
          <p>
            TAP: €55 a 100 EUROS PARA A SEGUNDA MALA (A PRIMEIRA JÁ É INCLUSA, DEPENDE DO TRECHO. PORTUGUAL E ESPANHA € 55 EUROS. DEMAIS PAÍSES DA EUROPA: €65 EUROS. EUA: € 100 EUROS. APERTE CTRL PARA ACESSAR O LINK.
          </p>
          <p>
            TODAS AS TAXAS INTERNACIONAIS SÃO CONSIDERADOS O DÓLAR OU O EURO TURISMO + IOF (6,38%) + 5% DA VARIAÇÃO CAMBIAL.
          </p>
          <p>
            PAGAMENTO NO CARTÃO DE CRÉDITO TEM UM ACRÉSCIMO DE 5% DO PREÇO FINAL.
          </p>
        </>
    }
  },
  {
    question: {
      label: 'Meu voo foi alterado ou cancelado pela companhia aérea. O que posso fazer?',
      answer:
        <>
          <p>
            A companhia aérea pode cancelar ou alterar a sua viagem. Essas mudanças não estão em nosso controle, já que somo apenas uma plataforma de emissão de passagens.
          </p>
          <p>
            Nesses casos, a companhia aérea permite que você cancele a viagem sem custos ou remarque o voo para outra data e horário.
          </p>
          <p>
            Para isso, a alteração feita pela companhia deve ser <span className="fw-bold">superior a 31 minutos para voos nacionais e superior a 1h para voos internacionais</span>.
          </p>
          <p>
            <span className="fw-bold">Se você optar por cancelar a viagem</span>, poderá converter o valor em crédito imediato na EiMilhas, para utilizar em um novo voo da mesma companhia, ou pedir o reembolso da passagem em dinheiro, que será devolvido em até 12 meses.
          </p>
          <p>
            <span className="fw-bold">Se você preferir remarcar a viagem</span>, poderá escolher outras opções de data e horário, mantendo a origem e o destino da compra original. A nova viagem deve ser remarcada para, pelo menos, 2 dias antes da data de embarque original, e estará sujeita à disponibilidade de voos da companhia.
          </p>
          <p>
            Cancelamento gratuito para passagens canceladas pelo próprio cliente, em até um prazo de 24 horas após emitida, desde que o voo seja posterior a 7 dias. Em caso de cancelamento, os estornos das taxas podem ser em até duas faturas.
          </p>
        </>
    }
  },
  {
    question: {
      label: 'Posso corrigir o nome do viajante na passagem aérea?',
      answer:
        <>
          <p>
            As correções de nome e sobrenome dos viajantes são analisadas exclusivamente pelas companhias aéreas. Em grande parte dos casos, é possível <span className="fw-bold">corrigir erros de grafia de nomes e sobrenomes</span> ou alteração de até 3 caracteres nas passagens aéreas sem custos, desde que a alteração não represente a troca de passageiros.
          </p>
          <p>
            A inclusão ou a exclusão de nomes não são permitidas, mas casos específicos, como divórcio ou casamento, podem ser avaliados pelas companhias aéreas. Vale lembrar que as <span className="fw-bold">passagens aéreas são pessoais e intransferíveis</span>.
          </p>
          <div className="mb-3">
            Para fazer a solicitação junto às aéreas, <span className="fw-bold">precisamos dos seguintes documentos</span>
            <ul>
              <li>Cópia do documento de identidade do viajante, se for um voo nacional.</li>
              <li>Cópia da 1ª página e do verso do passaporte, se for um voo internacional.</li>
              <li>Cópia da Certidão de Casamento ou de Nascimento, quando a alteração de nome.</li>
            </ul>
          </div>
        </>
    }
  },
  {
    question: {
      label: 'Qual é o limite de bagagem de mão?',
      answer:
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <img src={`${pathFaqImg}/bagagem_mao.webp`}/>
            </div>
          </div>
        </div>
    }
  },
  {
    question: {
      label: 'Check-in e horário de chegada no aeroporto.',
      answer:
        <>
          <p>
            O check-in poderá ser feito 48 horas antes do embarque, através do site ou aplicativo da companhia aérea escolhida. Procure apresentar-se ao embarque com antecedência de pelo menos 2 horas para voos nacionais e 3 horas para voos internacionais.
          </p>
        </>
    }
  },
  {
    question: {
      label: 'Cheguei atrasado e preciso de ajuda.',
      answer:
        <>
          <p>
            É de responsabilidade do passageiro apresentar-se para o embarque com a antecedência determinada pela cia. aérea. Por padrão, para voos nacionais, a antecedência deve ser de 1 hora. Para voos internacionais, a antecedência deve ser de 2 horas.
            Em caso de atraso, orientamos procurar o balcão da cia. aérea no próprio aeroporto para tentar reacomodação em outro voo, podendo haver diferença tarifária.
            Em caso de no show no bilhete de ida, orientamos entrar em contato com nossa central de atendimento para realizarmos tentativa de manter ativo o bilhete de volta
          </p>
        </>
    }
  },
  {
    question: {
      label: 'Marcação de assentos.',
      answer:
        <>
          <p>
            A marcação de assentos, de forma gratuita, é liberada no momento do check-in e pode ser feita diretamente no site ou aplicativo da companhia aérea.
          </p>
        </>
    }
  },
  {
    question: {
      label: 'Check-in e horário de chegada no aeroporto.',
      answer:
        <>
          <p>
            O check-in poderá ser feito 48 horas antes do embarque, através do site ou aplicativo da companhia aérea escolhida. Procure apresentar-se ao embarque com antecedência de pelo menos 2 horas para voos nacionais e 3 horas para voos internacionais.
          </p>
        </>
    }
  },
  {
    question: {
      label: 'Quais os documentos para embarque?',
      answer:
        <>
          <p>
            Na hora do embarque tenha em mãos o documento com foto para voos nacionais e passaporte para voos internacionais. Atenção: destinos internacionais podem pedir comprovantes extras. Consulte diretamente a companhia aérea para saber mais.
          </p>
        </>
    }
  },
  {
    question: {
      label: 'Como viajar com animais de estimação?',
      answer:
        <>
          <p>
            O trânsito de cães e gatos entre países exige documento emitido pela autoridade veterinária do país de origem e aceito pelos países de destino que ateste as condições e o histórico de saúde do animal de estimação bem como o atendimento às exigências sanitárias do país de destino. No Brasil, os documentos utilizados para essa finalidade são o CVI (Certificado Veterinário Internacional) e o Passaporte para Trânsito de Cães e Gatos, que são expedidos por Auditores Fiscais Federais Agropecuários das unidades de Vigilância Agropecuária Internacional (Vigiagro), vinculado à Secretaria de Defesa Agropecuária (SDA) do Ministério da Agricultura, Pecuária e Abastecimento.
          </p>
          <p>
            Cada país tem requisitos específicos para autorizar o ingresso de cães e gatos no seu território. Portanto, é importante planejar a viagem do animal com bastante antecedência para dispor de tempo suficiente para cumprir as exigências do país de destino, o que às vezes pode requerer alguns meses.
          </p>
          <p>
            É responsabilidade do proprietário do animal procurar se informar sobre as exigências junto à Embaixada/Consulado do país de destino. Abaixo você encontra as principais informações sobre o trânsito internacional de cães e gatos.
          </p>
          <p>
            Para embarcar com o seu animal de estimação, você deve apresentar um <span className="fw-bold">atestado médico emitido por um veterinário até 10 dias antes do voo</span>. Além disso, você deverá apresentar a seguinte documentação adicional exigida em algumas rotas:
          </p>
          <p>
            <span className="fw-bold">Para voos nacionais</span>: comprovante vigente de vacina antirrábica, recomendado para animais com mais de 90 dias de vida. Ao aplicar a primeira dose, é necessário esperar 30 dias para o embarque. Se esse período não for respeitado ou se a vacina estiver fora do período de validade, seu animal não poderá viajar.
          </p>
          <p>
          Tem gente cuja paixão pelo seu bichinho de estimação é tão arrebatadora que chega a ser inimaginável excluir o bom amigo da viagem dos sonhos. Ainda bem que, para assegurar que todos viajem com conforto e bem-estar – inclusive os pet’s –, algumas regras atuais da aviação são favoráveis.
          Hoje, por exemplo, cães e gatos de pequeno porte (até dez quilos, contando com a caixinha em que ele viaja) podem ser acomodados na cabine, bem juntinho de seus donos. Outros animais, de maior porte ou selvagens, devem responder a alguns requisitos para ter a autorização de viajar nos porões do avião.
          </p>
          <p>
          Mas, se você quer levar seu Yorkshire para passear – e não uma sucuri de vários metros –, este post é para você. Entenda nas dicas abaixo como acomodar confortavelmente seu bichinho, garantir a segurança dele e das pessoas no voo e saiba os documentos indispensáveis para embarcar junto de seu animal de estimação na próxima aventura.
          </p>
          <p>
          Informe-se, com antecedência, das condições de voo do seu animal
          Como dissemos acima, bichinhos com menos de 10kg (contando seu recipiente de viagem) podem viajar na cabine com os donos, enquanto animais de maior porte devem ser transportados no compartimento de cargas do avião, a menos que se trate de cão guia ou de assistência emocional.
          Portanto, a primeira regra é clara: para preparar a viagem, você precisa saber com muita antecedência em qual dos casos seu pet se encaixa.
          Para embarcar com um animal, todas as documentações (veja a listinha logo abaixo!) devem estar em dia e, além disso, você precisa saber se a viagem exige uma vacina específica, dependendo da cidade ou país de destino. Outro ponto de atenção é buscar saber se a companhia aérea aceita a raça do bichinho que vai viajar contigo.
          </p>
          <p>
          O recomendado é tentar se informar com alguns meses de antecedência – cinco é o mais indicado – sobre as condições para o embarque do animal. Mas, se a viagem for marcada de última hora, ligue imediatamente para a companhia aérea que irá operar o voo e veja as possibilidades, restrições e valores adicionais do serviço de transporte de pet’s.
          Lembre-se de que, dependendo da companhia aérea ou do peso total do animal e de seu container, é possível que você tenha que pagar a mais para embarcar com seu bichinho.
          </p>
          <p>
          Solicite o serviço
          Outra dica importante é solicitar o serviço de transporte do animal tão logo você esteja inteirado das boas condições de voo do seu bichinho. Ele pode ser feito imediatamente, no site da companhia, depois da emissão da sua passagem – e, em alguns casos, as empresas de transporte aéreo deixam que a solicitação seja feita horas antes do voo, para destinos domésticos. Então memorize bem: antes de embarcar, será necessário ler as regras do transporte de animais no site na companhia do seu voo e preencher o formulário de solicitação do serviço. Esse é um dos documentos obrigatórios para que seu animal viaje contigo em voos nacionais e internacionais, por isso não vale esquecê-lo.
          Apareça no aeroporto com a completa documentação exigida
          Viajar com animais é quase tão complexo quanto viajar com crianças na questão da documentação necessária: se não levar exatamente tudo o  que é exigido, nenhum dos dois vai embarcar – e, provavelmente, nem você.
          Para voos nacionais, além da solicitação do transporte, são exigidos o atestado sanitário (preenchido pelo veterinário), que deve falar sobre as boas condições de saúde do animal, e é válido por dez dias após a data de emissão, e a carteira de vacinação, constando a vacina antirrábica, que deve ter sido aplicada há mais de 30 dias e menos de um ano, com a inclusão do laboratório produtor, tipo e número da ampola utilizada.
          Já no caso de voos internacionais, dificilmente o animalzinho viajará na cabine – mas, de qualquer jeito, é preciso apresentar os mesmos documentos exigidos para voos domésticos (solicitação do transporte, atestado sanitário e carteira de vacinação), além do Certificado Veterinário Internacional (CVI), emitido especificamente para voos internacionais e válido por 60 dias a partir da data de emissão.
          Alguns destinos nacionais e internacionais têm regulamentação própria para entrada e saída de animais por aeroportos, como o de Fernando de Noronha e de Carajás, no Pará.
          </p>
          <p>
          Não deixe de se informar sobre as exigências documentais da sua cidade de destino para evitar problemas.
          Acomode seu bichinho com conforto e segurança
          Ele não vai utilizar cinto de segurança, mas também vai decolar e pousar e sentir as turbulências do voo. E, mais importante: ele não vai sair da caixinha dele, seja dentro da cabine ou no compartimento de carga. Por isso, é imprescindível ter certeza de que seu animal está viajando de maneira confortável e, principalmente, segura.
          Algumas dicas para isso são se certificar de que o container é resistente, impermeável se e promove boas condições de respiração. Boa parte das companhias aéreas exige que ele seja feito de fibra ou plástico rígido, proibindo o embarque de animais em caixinhas de madeira, palha ou malas flexíveis.
          </p>
          <p>
          Se o ser humano já acha ruim quando o espaço entre as poltronas não é suficiente, imagine acomodar o seu amiguinho em uma caixa menor só para que ela seja aceita no embarque… para evitar esse problema, compre uma embalagem onde o animal consiga ficar em pé e possa se movimentar ao menos através de um giro de 360°.
          </p>
          Escolha um container com dispositivo de segurança para evitar que ele abra durante o voo e seu animalzinho fique livre pela cabine do avião. Além de incomodar outros passageiros, ele pode se ferir em caso de turbulência se estiver andando livremente pelos corredores.
          Aliás, vale lembrar o óbvio: não dá pra abrir as janelas do avião, então faça o embarque do seu bichinho com ele limpo, saudável e sem odores desagradáveis, além de estar em uma “casinha” igualmente limpa, desinfetada e esterilizada para o voo. Isso evita cheirinhos e, mais importante, a contaminação de passageiros, ou do próprio animal, por alguma doença.
          <p>
          Por fim, tente seguir todas as dicas com bastante antecedência para garantir que seu pet embarque na cabine com você: as companhias operam com um limite de três a quatro animais por voo na cabine do avião e, se essa fila já estiver completa, seu bichinho vai viajar no compartimento de carga, ainda que tenha as dimensões exatas para ir junto a você.
          Para saber mais sobre as regras de transporte de pet’s adotadas por cada uma das três companhias aéreas com as quais emitimos nossos bilhetes (Azul, Gol e LATAM), recomendamos as seguintes leituras:
          </p>
          Regras Azul
          <ul>
            <li><a href="https://www.voeazul.com.br/para-sua-viagem/servicos/pet-na-cabine">https://www.voeazul.com.br/para-sua-viagem/servicos/pet-na-cabine</a></li>
          </ul>
          Regras Gol
          <ul>
            <li><a href="https://www.voegol.com.br/pt/informacoes/viaje-sem-duvidas/transporte-de-animais-de-estimacao">https://www.voegol.com.br/pt/informacoes/viaje-sem-duvidas/transporte-de-animais-de-estimacao</a></li>
            <li><a href="https://www.voegol.com.br/pt/servicos/transporte-de-animais-no-aviao">https://www.voegol.com.br/pt/servicos/transporte-de-animais-no-aviao</a></li>
          </ul>
          Regras Latam
          <ul>
            <li><a href="https://helpdesk.latam.com/hc/pt-br/articles/360001437308-Posso-viajar-no-avi%C3%A3o-com-meu-animal-de-estima%C3%A7%C3%A3o-">https://helpdesk.latam.com/hc/pt-br/articles/360001437308-Posso-viajar-no-avi%C3%A3o-com-meu-animal-de-estima%C3%A7%C3%A3o-</a></li>
            <li><a href="https://www.latam.com/pt_br/informacao-para-sua-viagem/servico-de-transporte-de-animais-de-estimacao/na-cabine/">https://www.latam.com/pt_br/informacao-para-sua-viagem/servico-de-transporte-de-animais-de-estimacao/na-cabine/</a></li>
            <li><a href="https://www.latamtrade.com/pt_us/procom/animais_cabine_petc">https://www.latamtrade.com/pt_us/procom/animais_cabine_petc</a></li>
          </ul>
          <p>
            Para viajar junto ao seu animal em <span className="fw-bold">cabine Economy</span>, você deverá levá-lo dentro de um recipiente apropriado, que deve atender às seguintes regras:
          </p>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <img src={`${pathFaqImg}/bagagem_animal_1.png`}/>
              </div>
              <div className="col-sm-12 col-md-6">
                <h6>Bolsas de Transporte</h6>
                <ul>
                  <li><span className="fw-bold">Medidas</span>: 36 cm de comprimento x 33 cm de largura x 23 cm de altura</li>
                  <li><span className="fw-bold">Peso</span>(soma do animal e da bolsa): 7 kg / 15 lbs.</li>
                  <li><span className="fw-bold">A bolsa deve ter uma trava que garanta que o animal não saia durante o voo.</span></li>
                </ul>

              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <img src={`${pathFaqImg}/bagagem_animal_2.png`}/>
              </div>
              <div className="col-sm-12 col-md-6">
                <h6>Caixas de Transporte</h6>
                <ul>
                  <li><span className="fw-bold">Medidas</span>: 36 cm de comprimento x 33 cm de largura x 19 cm de altura</li>
                  <li><span className="fw-bold">Peso</span>(soma do animal e da bolsa): 7 kg / 15 lbs.</li>
                  <li><span className="fw-bold">Para a segurança do seu animal, a caixa deve ter uma porta de metal com trava dupla que impeça a introdução do focinho ou pernas na ranhura.</span></li>
                </ul>

              </div>
            </div>
          </div>
        </>
    }
  }
]

const Index: React.FC = () => {
  return (
    <PageTemplate menuLinks={listNavLinks}>

      <Section
        id="home"
        bgUrl='assets/img/traveller.jpg'
        bgColor='rgba(17,26,58,0.7)'
        classes="min-vh-100 bg-image"
      >
        <Encontre/>
        <BemVindo formasPagamento={formasPagamento}/>
      </Section>

      <Section id="promocoes">
        <Promocoes promocoes={promocoes}/>
      </Section>

      <Section
        id="depoimentos"
        bgUrl='assets/img/traveller2.jpg'
        bgColor='rgba(17,26,58,0.8)'
        classes="min-vh-50 bg-image bg-position-top my-5"
      >
        <Depoimentos depoimentos={depoimentos}/>
      </Section>

      {/* <Section
        id="numeros"
        bgUrl='assets/img/customers.jpg'
        bgColor='rgba(255,255,255,0.7)'
        classes="min-vh-50 bg-image bg-position-top my-5"
      >
        <Numeros/>
      </Section> */}

      <Section
        id="faq"
        bgUrl='assets/img/doubt.jpg'
        bgColor='rgba(255,255,255,0.8)'
        classes="min-vh-50 bg-image bg-position-top my-5"
      >
        <Faq questions={frequentQuestions}/>
      </Section>

    </PageTemplate>
  )
}

export default Index
