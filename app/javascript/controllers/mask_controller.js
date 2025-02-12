import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["cnpj", "cpf", "telefone", "cep"];

  connect() {
    this.applyMasks();
  }

  applyMasks() {
    this.cnpjTarget.addEventListener('input', this.maskCNPJ);
    this.cpfTarget.addEventListener('input', this.maskCPF);
    this.telefoneTarget.addEventListener('input', this.maskTelefone);
    this.cepTarget.addEventListener('input', this.maskCEP);
  }

  maskCNPJ(event) {
    const value = event.target.value.replace(/\D/g, '');
    event.target.value = value.replace(/^(\d{2})(\d)/, '$1.$2')
                              .replace(/(\d{3})(\d)/, '$1.$2')
                              .replace(/(\d{4})(\d)/, '$1/$2')
                              .replace(/(\d{2})$/, '$1');
  }

  maskCPF(event) {
    const value = event.target.value.replace(/\D/g, '');
    event.target.value = value.replace(/^(\d{3})(\d)/, '$1.$2')
                              .replace(/(\d{3})(\d)/, '$1.$2')
                              .replace(/(\d{2})$/, '$1');
  }

  maskTelefone(event) {
    const value = event.target.value.replace(/\D/g, '');
    event.target.value = value.replace(/^(\d{2})(\d)/, '($1) $2')
                              .replace(/(\d{5})(\d)/, '$1-$2');
  }

  maskCEP(event) {
    const value = event.target.value.replace(/\D/g, '');
    event.target.value = value.replace(/(\d{5})(\d)/, '$1-$2');
  }
}
