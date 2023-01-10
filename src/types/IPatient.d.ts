export interface IPatient {
  id: string;
  name: string;
  birth: string;
  cpf: string;
  address: string;
  gender: 'Masculino' | 'Feminino';
  status: 'Ativo' | 'Inativo';
}
