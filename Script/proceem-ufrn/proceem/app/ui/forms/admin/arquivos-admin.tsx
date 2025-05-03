import React, { useState } from "react";
import { useRouter } from "next/router"; // Para redirecionar caso o usuário não seja admin
//Esse algoritmo vai servir para separar quem é professor e quem é aluno, dessa forma, apenas o professor submete PDFs e vídeos, os alunos teriam apenas acesso a funcionalidades de um usuário normal.
//Falta colocar a funcionalidade de admin, esse algoritmo vai funcionar corretamente no futuro após atualização do banco de dados, onde o admin vai ser o professor e o aluno vai ser o aluno normal.

export default function UploadForm() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [videoLink, setVideoLink] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  // Simulação de verificação de permissão
  const isAdmin = true; // Substitua por uma verificação real, como um token ou chamada à API

  if (!isAdmin) {
    // Redireciona para outra página se o usuário não for admin
    router.push("/login");
    return null;
  }

  const handlePdfUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
      setMessage("Arquivo PDF carregado com sucesso!");
    } else {
      setMessage("Por favor, selecione um arquivo válido.");
    }
  };

  const handleVideoLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoLink(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!pdfFile && !videoLink) {
      setMessage("Por favor, envie um arquivo PDF ou insira um link de vídeo.");
      return;
    }

    // Aqui você pode enviar os dados para o servidor ou processá-los
    console.log("PDF File:", pdfFile);
    console.log("Video Link:", videoLink);

    setMessage("Dados enviados com sucesso!");
  };

  return (
    <div>
      <h1>Upload de Arquivo ou Link de Vídeo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="pdfUpload">Carregar PDF:</label>
          <input
            type="file"
            id="pdfUpload"
            accept="application/pdf"
            onChange={handlePdfUpload}
          />
        </div>
        <div>
          <label htmlFor="videoLink">Link para Vídeo:</label>
          <input
            type="url"
            id="videoLink"
            placeholder="https://exemplo.com/video"
            value={videoLink}
            onChange={handleVideoLinkChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}