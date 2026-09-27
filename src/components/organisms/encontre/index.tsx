import React, { useState } from 'react'
import Title from '../../atoms/title'
import DatePicker from 'react-datepicker'
import FormularioLabel from '../../atoms/formularioLabel'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import PlaneSeparator from '../../molecules/planeSeparator'
import { Collapsible } from '../../molecules/collabsible'
import { whatsappUrl } from '../../../pages/index'
import { airports } from './airports'
import { Airport, FormData, buildMensagem, buildWhatsappLink, filtrarAeroportos, formatAirport, paisPt } from './format'
import 'react-datepicker/dist/react-datepicker.css'

const Encontre = () => {
  const urlWallpaper = 'assets/img/plane3.jpg'
  const now = new Date()

  const initialData: FormData = {
    adultos: 1,
    criancas: 0,
    bebes: 0,
    origem: null,
    destino: null,
    ida: now,
    volta: null,
    soIda: false
  }

  const [formData, setFormData] = useState<FormData>({ ...initialData })

  const formReady = !!formData.origem && !!formData.destino && !!formData.ida && (formData.soIda || !!formData.volta)

  const handleInputChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    setFormData((f) => ({ ...f, [name]: value }))
  }

  const handleDataChange = (data: Date | null, trecho: 'ida' | 'volta') => {
    setFormData((f) => {
      const novo = { ...f, [trecho]: data }
      // Volta antes da nova ida deixa de ser válida
      if (trecho === 'ida' && data && f.volta && f.volta < data) novo.volta = null
      return novo
    })
  }

  const handleAeroportoChange = (campo: 'origem' | 'destino', aeroporto: Airport | null) => {
    setFormData((f) => ({ ...f, [campo]: aeroporto }))
  }

  const decrementarPessoa = (event, field) => {
    event.preventDefault()
    switch (field) {
    case 'adultos':
      if (formData.adultos > 1) {
        setFormData((f) => ({ ...f, adultos: f.adultos - 1 }))
      }
      break
    case 'criancas':
      if (formData.criancas > 0) {
        setFormData((f) => ({ ...f, criancas: f.criancas - 1 }))
      }
      break
    case 'bebes':
      if (formData.bebes > 0) {
        setFormData((f) => ({ ...f, bebes: f.bebes - 1 }))
      }
      break
    default:
      break
    }
  }

  const incrementarPessoa = (event, field) => {
    event.preventDefault()
    switch (field) {
    case 'adultos':
      setFormData((f) => ({ ...f, adultos: f.adultos + 1 }))
      break
    case 'criancas':
      setFormData((f) => ({ ...f, criancas: f.criancas + 1 }))
      break
    case 'bebes':
      setFormData((f) => ({ ...f, bebes: f.bebes + 1 }))
      break
    default:
      break
    }
  }

  // const trocarRota = (event) => {
  //   event.preventDefault()
  //   const aux = formData.origem
  //   setFormData({
  //     ...formData,
  //     origem: formData.destino,
  //     destino: aux
  //   })
  // }

  const btnDecrementarPessoa = (tipo) => {
    return (
      <div className="col-3 px-0 m-auto">
        <button
          className="btn-increment rounded-circle"
          onClick={(e) => decrementarPessoa(e, tipo)}
        >−</button>
      </div>
    )
  }

  const btnIncrementarPessoa = (tipo) => {
    return (
      <div className="col-3 px-0 m-auto">
        <button
          className="btn-increment rounded-circle"
          onClick={(e) => incrementarPessoa(e, tipo)}
        >✚</button>
      </div>
    )
  }

  const campoAeroporto = (campo: 'origem' | 'destino', placeholder: string) => (
    <Autocomplete
      id={`busca-${campo}`}
      options={airports}
      forcePopupIcon={false}
      disableClearable
      value={formData[campo]}
      onChange={(_e, aeroporto: Airport | null) => handleAeroportoChange(campo, aeroporto)}
      getOptionLabel={formatAirport}
      getOptionSelected={(opcao, valor) => opcao === valor}
      filterOptions={filtrarAeroportos}
      renderOption={(a: Airport) => (
        <div className="text-start">
          <div className="fw-bold">{formatAirport(a)}</div>
          <small className="text-muted">
            {a.IATA === 'TODOS' ? paisPt(a) : `${a.name.trim()} · ${paisPt(a)}`}
          </small>
        </div>
      )}
      noOptionsText="Nenhum aeroporto encontrado"
      openText="Abrir"
      closeText="Fechar"
      renderInput={(params) => (
        <TextField
          {...params}
          type="text"
          name={campo}
          placeholder={placeholder}
          className="m-auto w-100 my-1"
        />
      )}
    />
  )

  // const btnTrocarRota =
  // (
  //   <button
  //     className="btn-trocar btn-std my-1 bg-red text-white rounded-circle position-absolute"
  //     onClick={(e) => trocarRota(e)}
  //   >⇋</button>
  // )

  const btnBuscarPassagens =
  (
    <button
      className="btn-std py-1 px-2 rounded bg-red text-white w-100"
      id="btn-buscar-passagem"
      disabled={!formReady}
      onClick={
        (e) => {
          e.preventDefault()
          if (!formReady) return
          window.open(buildWhatsappLink(whatsappUrl, buildMensagem(formData)), '_blank')
        }
      }
    >Buscar passagens</button>
  )

  return (

    <div className="container my-5">
      <div className="row mx-0 bg-image form-passagem rounded-15 font-primary"
        style={{
          backgroundImage: `url(${urlWallpaper})`,
          minHeight: '120px'
        }}>

        <div
          className="rounded-15 p-4"
          style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}
        >

          <Title
            label="Encontre sua passagem ideal com o maior desconto!"
            color="primary"
          />
          <PlaneSeparator
            size={30}
            color="primary"
            widthPercentage={100}
            gridColPlane={1}
          />
          <div className="col-md-9 col-sm-12">
            <form id="form-encontrar-passagem">
              <div className="container p-1">

                <div className="row mb-3">

                  <div className="col-sm-12 col-md-2 text-center">
                    <div className="row">
                      <FormularioLabel
                        label="Só ida?"
                        inputName="cbSoIda"
                      />
                    </div>
                    <div className="row m-auto" style={{ display: 'inherit' }}>
                      <input
                        type="checkbox"
                        name="soIda"
                        checked={formData.soIda}
                        onChange={
                          (e) => handleInputChange(e)
                        }
                        className="m-auto"
                      />
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-5 text-center">
                    <DatePicker
                      name="ida"
                      placeholderText="Ida"
                      selected={formData.ida}
                      dateFormat="dd/MM/yyyy"
                      onChange={
                        (d) => handleDataChange(d as Date | null, 'ida')
                      }
                      minDate={now}
                      className="m-auto w-100 my-1 text-center d-block"
                    />
                  </div>

                  {!formData.soIda &&
                    <div className="col-sm-12 col-md-5 text-center">
                      <DatePicker
                        name="volta"
                        placeholderText="Volta"
                        selected={formData.volta}
                        dateFormat="dd/MM/yyyy"
                        onChange={
                          (d) => handleDataChange(d as Date | null, 'volta')
                        }
                        minDate={formData.ida ?? now}
                        className="m-auto w-100 my-1 text-center"
                      />
                    </div>
                  }

                </div>

                <div className="row mb-3 position-relative">

                  <div className="col-sm-12 col-md-6 text-center">
                    {campoAeroporto('origem', 'Origem')}
                  </div>

                  <div className="col-sm-12 col-md-6 text-center">
                    {campoAeroporto('destino', 'Destino')}
                  </div>

                  {/* {btnTrocarRota} */}

                </div>

                <Collapsible title="Passageiros">

                  <div className="row">
                    <div className="col-xs-12 col-sm-4 px-3 my-1 text-center">
                      <div className="row">
                        {btnDecrementarPessoa('adultos')}
                        <div className="col-6 px-1">
                          <input
                            name="adultos"
                            type="number"
                            className="text-center w-100"
                            value={formData.adultos}
                            onChange={
                              (e) => handleInputChange(e)
                            }
                            disabled={true}
                          />
                        </div>
                        {btnIncrementarPessoa('adultos')}
                      </div>
                      <div className="row">
                        <FormularioLabel
                          label="Adultos"
                          inputName="txtAdultos"
                        />
                      </div>
                    </div>

                    <div className="col-xs-12 col-sm-4 px-3 my-1 text-center">
                      <div className="row">
                        {btnDecrementarPessoa('criancas')}
                        <div className="col-6 px-1">
                          <input
                            name="criancas"
                            type="number"
                            className="text-center w-100"
                            value={formData.criancas}
                            onChange={
                              (e) => handleInputChange(e)
                            }
                            disabled={true}
                          />
                        </div>
                        {btnIncrementarPessoa('criancas')}
                      </div>
                      <div className="row">
                        <FormularioLabel
                          label="Crianças"
                          inputName="txtCriancas"
                        />
                      </div>
                    </div>

                    <div className="col-xs-12 col-sm-4 px-3 my-1 text-center">
                      <div className="row">
                        {btnDecrementarPessoa('bebes')}
                        <div className="col-6 px-1">
                          <input
                            name="bebes"
                            type="number"
                            className="text-center w-100"
                            value={formData.bebes}
                            onChange={
                              (e) => handleInputChange(e)
                            }
                            disabled={true}
                          />
                        </div>
                        {btnIncrementarPessoa('bebes')}
                      </div>
                      <div className="row">
                        <FormularioLabel
                          label="Bebês"
                          inputName="txtBebes"
                        />
                      </div>
                    </div>
                  </div>
                </Collapsible>

                <div className="row my-2">
                  <div className="col">
                    {btnBuscarPassagens}
                  </div>

                </div>

              </div>
            </form>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Encontre
