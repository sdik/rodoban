class City < ApplicationRecord
  def self.search(query)
    if query.present?
      terms = query.split.map { |term| "%#{term}%" }
      
      where(
        terms.map do |term|
          <<-SQL
            cidade ILIKE ? OR 
            uf ILIKE ?  
          SQL
        end.join(' AND '),
        *terms.flat_map { |term| [term] * 2 }
      )
    else
      all
    end
  end

  def self.estados
    distinct.pluck(:uf).compact.sort
  end

  def self.municipios_por_estado(uf)
    where(uf: uf).order(:cidade).pluck(:cidade)
  end

  def self.detalhes_municipio(uf, cidade)
    find_by(uf: uf, cidade: cidade)&.attributes&.slice('codigo_ibge', 'cidade', 'uf')
  end
end
