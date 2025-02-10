class Client < ApplicationRecord
  validates :nome, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, allow_blank: true

  enum :status, {
    inativo: 0,
    ativo: 1
  }

  after_initialize :set_default_status, if: :new_record?

  # Método para busca aprimorado
  def self.search(query)
    if query.present?
      terms = query.split.map { |term| "%#{term}%" }
      
      where(
        terms.map do |term|
          <<-SQL
            nome ILIKE ? OR 
            apelido ILIKE ? OR 
            cidade ILIKE ? OR 
            email ILIKE ? OR 
            cnpj ILIKE ? OR 
            cpf ILIKE ? OR
            celular ILIKE ? OR
            fone1 ILIKE ? OR
            bairro ILIKE ?
          SQL
        end.join(' AND '),
        *terms.flat_map { |term| [term] * 9 }
      )
    else
      all
    end
  end

  def status_text
    status == "ativo" ? "Ativo" : "Inativo"
  end

  private

  def set_default_status
    self.status ||= :ativo
  end
end
