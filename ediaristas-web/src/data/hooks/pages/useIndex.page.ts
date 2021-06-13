import { useState, useMemo } from "react";

import { UserShortInterface } from "data/@types/userInterface";

import { ApiService } from "data/services/ApiService";
import { ValidationService } from "data/services/ValidationService";

export default function useIndex() {
  const [cep, setCep] = useState(""),
    cepValido = useMemo(() => ValidationService.cep(cep), [cep]),
    [error, setError] = useState(""),
    [buscaFeita, setBuscaFeita] = useState(false),
    [carregando, setCarregando] = useState(false),
    [diaristas, setDiaristas] = useState([] as UserShortInterface[]),
    [diaristasRestantes, setDiaristasRestantes] = useState(0);

  async function buscarProfissionais(cep: string) {
    setBuscaFeita(false);
    setCarregando(true);
    setError("");

    try {
      const { data } = await ApiService.get<{
        diaristas: UserShortInterface[];
        quantidade_diaristas: number;
      }>(`/api/diaristas-cidade?cep=${cep.replace(/\D/g, "")}`);

      setDiaristas(data.diaristas);
      setDiaristasRestantes(data.quantidade_diaristas);
    } catch (error) {
      setError("CEP não encontrado");
    }
    setCarregando(false);
    setBuscaFeita(true);
  }

  return {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    error,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
  };
}
