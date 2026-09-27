import React from 'react'
import { PromocaoProps } from '../../../types/types'
import Preco from '../../atoms/preco'
import Title from '../../atoms/title'
import { whatsappUrl } from '../../../pages/index'
import { buildWhatsappLink } from '../../organisms/encontre/format'

type Props = {
    promocao: PromocaoProps
}

const Promocao = ({
  promocao
}: Props) => {
  const mensagem = `Olá, EiMilhas!\nGostaria de solicitar propostas de passagens.\nDestino: *${promocao.localEspecifico}*`
  const linkMensagem = buildWhatsappLink(whatsappUrl, mensagem)

  return (
    <a
      href={linkMensagem}
      className="div-link"
      target="_blank"
      rel="noreferrer"
    >
      <div
        className="card-promocao rounded-15 p-1 text-center m-4"
      >
        <div
          className="card-head bg-image rounded-top-15 position-relative"
          style={{
            backgroundImage: `url("${promocao.foto}")`,
            minHeight: '200px'
          }}
        >
          <div className="card-middle position-absolute opacity-0 top-50 start-50">
            <button
              className="btn-reserve rounded-3 font-primary border-0 fs-2 fw-bold bg-orange py-2 px-3"
            >
              Reserve Agora
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="card-preco">

            {promocao.localGenerico &&
              <p className="fw-5 text-black my-0 text-uppercase" style={{ textDecoration: 'overline' }}>{promocao.localGenerico}</p>
            }
            <span className="text-uppercase"><Title label={promocao.localEspecifico} color="primary"/></span>
            {/* <p className="fw-5 text-black my-0">A partir de </p> */}
            <Preco value={promocao.preco} color="black"/>
            <p className="fw-5 text-black my-0">{promocao.trecho}</p>
          </div>
        </div>

      </div>
    </a>
  )
}

export default Promocao
