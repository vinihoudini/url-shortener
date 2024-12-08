# URL Shortener com Análise em Tempo Real

Este é um projeto de encurtador de URLs que oferece monitoramento em tempo real de cliques. O sistema fornece estatísticas detalhadas, como origem geográfica e tipo de dispositivo, além de um painel para visualização dos dados.

## Funcionalidades

- **Geração de URLs curtas:** Converta URLs longas em links curtos com identificadores únicos.
- **Redirecionamento:** Redireciona automaticamente URLs curtas para seus destinos originais.
- **Análise em tempo real:**
  - Contagem de cliques.
  - Origem geográfica dos cliques.
  - Tipo de dispositivo (desktop, tablet, mobile).
- **Painel de gerenciamento:**
  - Exiba estatísticas detalhadas.
  - Liste, edite ou exclua URLs curtas.

## Tecnologias Utilizadas

### Backend
- **Node.js** com **Express**
- **MongoDB** para persistência de dados
- **Redis** para cache e estatísticas em tempo real
- **IP Geolocation API** para origem geográfica
- **Docker** para containerização

### Frontend
- **React** com **Vite**
- **Chart.js** para gráficos de estatísticas

## Como Executar

### Pré-requisitos
- Docker e Docker Compose instalados.

### Passos
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/url-shortener.git
