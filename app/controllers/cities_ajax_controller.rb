class CitiesAjaxController < ApplicationController
  def municipios
    uf = params[:uf]
    municipios = City.municipios_por_estado(uf)
    render json: municipios
  end

  def detalhes_municipio
    uf = params[:uf]
    cidade = params[:cidade]
    detalhes = City.detalhes_municipio(uf, cidade)
    render json: detalhes
  end
end
