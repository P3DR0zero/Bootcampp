import React from "react";

interface UserFilesProps {
  pdfFiles: { name: string; url: string }[]; // Lista de PDFs com nome e URL
  videoLinks: { title: string; url: string }[]; // Lista de links de vídeos com título e URL
}

export default function UserFiles({ pdfFiles, videoLinks }: UserFilesProps) {
  return (
    <div>
      <h1>Arquivos do Usuário</h1>

      {/* Lista de PDFs */}
      <section>
        <h2>Arquivos PDF</h2>
        {pdfFiles.length > 0 ? (
          <ul>
            {pdfFiles.map((pdf, index) => (
              <li key={index}>
                <a href={pdf.url} target="_blank" rel="noopener noreferrer">
                  {pdf.name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum arquivo PDF disponível.</p>
        )}
      </section>

      {/* Lista de Links de Vídeos */}
      <section>
        <h2>Links de Vídeos</h2>
        {videoLinks.length > 0 ? (
          <ul>
            {videoLinks.map((video, index) => (
              <li key={index}>
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  {video.title}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum link de vídeo disponível.</p>
        )}
      </section>
    </div>
  );
}